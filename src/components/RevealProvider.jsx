import React from 'react';
import {connect} from 'react-redux';
import Reveal from 'reveal';

import Fragment from './Fragment';

import {nextSlide, previousSlide, setSlideCount} from '../store/action/creators';

const toFilterable = (maybeArray) => maybeArray.filter ? maybeArray : [maybeArray];

const getChildren = (component) => ((component.props && component.props.children) || []);

const getFragmentCount = (componentArray) => componentArray.filter( x => (x.type && x.type===Fragment)).length

const sectionToSlideColumnArray = (section) => {
    const children = getChildren(section);
    return (isArrayOfSections(children) ? children : [section])
}

const isArrayOfSections = (maybeArray) => {
    if (typeof maybeArray === 'string') return false;
    if (!maybeArray.length) return false;
    if (!maybeArray[0]) return false;
    if (maybeArray[0].type != 'section') return false;
    return true;
}


class RevealProvider extends React.Component {
    
    lookupAndUpdateSlideCoodinates({slide}) {
        if (slide != null) {
            const coordinates = this.lookupTable[slide];
            if (coordinates) {
                Reveal.setState(coordinates);    
            }
        }
    }
    
    generateCoordinateLookupTable() {
        this.lookupTable = [];
        getChildren(this).map( (section) =>  
            sectionToSlideColumnArray(section)
                .map(getChildren)
                .map(toFilterable)
                .map(getFragmentCount)
        ).forEach( (column,indexh) => {
            column.forEach( (fragmentCount, indexv) => {
                let indexf = -1;
                do {
                    this.lookupTable.push({indexh, indexv, indexf})        
                } while (indexf++ < fragmentCount-1)
            });
        });
    }
    
    componentDidMount() {
        this.generateCoordinateLookupTable();
        
        Reveal.initialize({
            keyboard: false,
            controls: false
        });
        
        Reveal.addEventListener( 'ready', () => {
            this.lookupAndUpdateSlideCoodinates(this.props);
            if (this.props.onReady) {
                this.props.onReady(this.lookupTable.length);    
            }
        });
        
        document.onkeyup = this.props.onKeyUp;
    }
   
    componentWillReceiveProps(props) {
        this.lookupAndUpdateSlideCoodinates(props);
    }
    
    render() {
        return ( 
            <div className="reveal">
                <div className="slides">
                    {this.props.children}
                </div>
            </div>
        );
    }   
}
    
export default connect( (state, ownprops) => ({
    _: console.log('mapstatetoprops'),
    slide: state.reveal.slide
}),(dispatch) => ({
    onKeyUp: (keyboardEvent) => {
        switch (keyboardEvent.key) {
            case "PageDown": return dispatch(nextSlide());
            case "PageUp": return dispatch(previousSlide());
        }
    },
    onReady: (count) => dispatch(setSlideCount(count))
}))(RevealProvider);