import React from 'react';

import '/Button.css';
import  { Link } from 'react-route-dom';

const STYLES =['btn--primary','btn--outline'];

const SIZES = ['btn--medium','btn--large'];

export const Button =({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    :STYLEs[0];

    const checkButtonStyle = SIZES.includes(buttonSize)?buttonSize:SIZES[0];

    return(
        <Link to='/sign-up' className='btn-mobile'>
            <button
              className ={'btn ${checkButtonStyle} ${checkButtonSize}'}
              onClick={onClick}
              type={type}
              > 
                {children}
            </button>            
        </Link>
    )
    
}



