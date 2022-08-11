import React from 'react';
import FormHeader from './FormHeader';
import Form from './Form';
function EventForm(props) {
    


        return(
            
            <div className='container'>
            <div className='header'><span className='header-text'>(956) 682-3481 | 1912 Joe Stephens Ave, Weslaco, TX 78596</span></div>
                <div className='wrapper'>
                    <FormHeader />
                    <Form />
                </div>
                
            </div>
        );
    
}

export default EventForm