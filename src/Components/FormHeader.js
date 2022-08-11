import React from 'react';
import Carousel from './Carousel';

function FormHeader(props) {
    
        return(
            <div className='header-container'>
                <Carousel />
                <div className='header-welcome'>
                    <h1 className='header-welcome-text'>WELCOME</h1>
                </div>
                <div className='header-notice'>
                    <p className='header-notice-text'>
                        ** All Public Event Requests must be submitted to RGVECD at a minimum of 14 business day prior to your event. **
                        <br /> ** Requests between the 14 day period will not be accepted by the online system **
                        <br />** If you are experiencing problems with your online request**
                        <br /> ** please call us directly at (956) 682-3481 ext. 150 to help resolve the issues. **
                    </p>
                </div>
                
            </div>
        );
    
}

export default FormHeader