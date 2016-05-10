import React from 'react';

const Fragment = ({type='', children}) => 
    <div className={'fragment '+type}>
        {children}
    </div>
    
export default Fragment; 