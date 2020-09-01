import React from 'react';

function Form(props) {
    if (props.name !== 'submit') {
        return (
            <div className='form'>
                <label className='col-sm-12 control-label' htmlFor={props.name}>
                    {props.label}
                </label>
                <p id={props.name + 'Error'}></p>
    
                <div id={props.name + 'Column'} className='col-md-10'>
                    {props.children}
                </div>
            </div>
        )
    } else {
        return (
            <div className='form'>
                <div className='col-md-12 text-center'>
                    {props.children}
                </div>
            </div>
        )
    }
}

export default Form;