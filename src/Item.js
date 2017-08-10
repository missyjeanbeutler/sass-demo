import React from 'react';

export default function Item(props) {
    return (
        <div className=''>
            <input type='checkbox' />
            {props.item} 
        </div> 
    )
}