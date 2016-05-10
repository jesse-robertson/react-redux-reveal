import {NEXT_SLIDE, PREVIOUS_SLIDE, SET_SLIDE_COUNT} from '../action/types';

export default (reveal = {slide:0, slideCount:0}, action) => {
    switch (action.type) {
        case SET_SLIDE_COUNT:
            return Object.assign({}, reveal, {
                slideCount: action.payload.slideCount
            });
        case NEXT_SLIDE: 
            return Object.assign({}, reveal, {
                slide: Math.min(reveal.slide + 1, reveal.slideCount-1)
            });
        case PREVIOUS_SLIDE:
            return Object.assign({}, reveal, {
                slide: Math.max(reveal.slide - 1, 0)
            });
        default: 
            return reveal;
    }
}