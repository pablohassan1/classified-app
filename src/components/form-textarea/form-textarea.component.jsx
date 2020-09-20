import React from 'react';

import './form-textarea.styles.scss';


const FormTextarea = ({ handleChange, label, ...otherProps }) => (
    <div className='textarea-group'>
        <textarea 
            className='form-textarea'
            onChange={handleChange}
            {...otherProps}
        />

        {label?
            (
                <label className={`${otherProps.value.length ? 'shrink' : '' } textarea-label`}>
                {label}
            </label>
            )          

            :null      
        }
        
    </div>
)

export default FormTextarea;