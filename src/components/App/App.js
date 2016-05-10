import React from 'react';

import RevealProvider from '../RevealProvider';

import F from '../Fragment';

const App = () => 
    <RevealProvider >
        <section>This slide is cool!</section>
        <section>Slide is completely cool!!!!!!</section>
        <section>
            <section>
                A
            </section>
            <section>
                B
            </section>
            <section>
                C
            </section>
        </section>
        <section>
            <section>
                Single child
            </section>
        </section>
        <section>
            And some other stuffs
            <F type="grow">
                <p>grow</p>
            </F>
            <F type="shrink">
                <p> shrink</p>
            </F>
            <F type="fade-out">
                <p>fade-out</p>
            </F>
            <F type="fade-up">
                <p>fade-up (also down, left and right!)</p>
            </F>
            <F type="current-visible">
                <p>visible only once</p>
            </F>
            <F type="highlight-current-blue">
                <p>blue only once</p>
            </F>
            <F type="highlight-red">
                <p>highlight-red</p>
            </F>
            <F type="highlight-green">
                <p>highlight-green</p>
            </F>
            <F type="highlight-blue">
                <p>highlight-blue</p>
            </F>
                
        </section>
    </RevealProvider>
    
export default App;