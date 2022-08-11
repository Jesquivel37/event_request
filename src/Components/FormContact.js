import React, { useState } from 'react';
function FormContact(props) {
    
    const [phone, setPhone] = useState('');
    
   

    const  formatPhoneNumber = (value) => {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;

        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
          }
          return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
            3,
            6
          )}-${phoneNumber.slice(6, 10)}`;
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        props.setFormData(values => ({...values, [name]: value}))

       //console.log(value);
    }


    const handleInput = (e) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setPhone(formattedPhoneNumber)

        
    };


    
        return(
            <div className='form-contact'>
                    <h3>{props.title}</h3>
                    <div className='contact-label'>
                        <label>
                            Full Name:
                            <br />
                            <small className='form-error'>{props.fNameErr}</small>
                            <input type="text" name={props.fname} placeholder='First Name' onChange={handleChange}/>
                            <small className='form-error'>{props.lNameErr}</small>
                            <input type="text" name={props.lname} placeholder='Last Name' onChange={handleChange}/>
                        </label>
                    </div>
                    
                    <div className='contact-label'>
                    <small className='form-error'>{props.phoneErr}</small>
                        <label>
                        Phone Number
                                <input onChange={e => {handleInput(e); handleChange(e);}} value={phone}  name={props.contactPhone}  maxLength="14" placeholder='Phone Number'/>
                      
                        </label>
                    </div>
                   
                    <div className='contact-label'>
                    <small className='form-error'>{props.formErr}</small>
                        <label>
                            Email:
                            <input type="text" name={props.email} placeholder='Email' onChange={handleChange}/>
                            
                        </label>
                    </div>
                    
            </div>
            
        );
    
}

export default FormContact