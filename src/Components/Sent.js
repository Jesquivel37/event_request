import React from 'react';
import '../sent.css';

function Sent() {
    return(
        <div className='sent'>        
                <h1 className='sent-title'>Form Sent!</h1>
                <div>
                    <p>Thank you for submiting an event request. If you need to you can always <a className="sent-a"href="mailto:helpdesk@lrgvdc911.org">contact us</a>, otherwise
                    if we need additional information one of our team members will reach out you</p>
                    <p>&mdash; RGV911 </p>
                    <img src={require('../Assets/911-img.png')} alt="lrgdc911 logo" className="sent-img" width="50%" height="50%" />
                </div>
        </div>

    );
}

export default Sent;


