import React, {useState} from 'react';
import FormContact from './FormContact';
import FormTime from './FormTime';
import FormInfo from './FormInfo';
import Sent from './Sent';
//import {useForm} from 'react-hook-form';
//import {yupResolver} from '@hookform/resolvers';
//import * as yup from 'yup';
import axios from 'axios';

/*
const schema = yup.object().shape({

})
*/
function Form() {
   
    const [formData, setFormData] = useState({}); // state of an object to add input field names and values
    const [sent, setSent] = useState(false); // hook to display sent component
    const [formError, setFormError] = useState({});;
    const data = new FormData()
    Object.entries(formData).forEach(([key, value]) => data.append(key, value)) // appends object formData to FormData method for backend




    const handleSubmit = e => { // handles submit
        e.preventDefault();
        setFormError(validate(formData));
        
        
        setSent(true);
        axios.post("http://localhost:5000/Server", data) // sends FormData to server
            .then(res => console.log(res))
            .catch(err => console.log(err));
            
    };

 
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;


        if(!values.eventName) {
            errors.eventName = "Event name is required";
        }
     

        if(!values.formDateStart) {
            errors.formDateStart = "Start Date is required";
        }

        if(!values.formDateEnd) {
            errors.formDateEnd = "End date is required";
        }

        if(!values.address) {
            errors.address = "Address is required";
        }

        if(!values.setUpOpt) {
            errors.setUpOpt = "Set up time is required";
        }

        if(!values.startOpt) {
            errors.startOpt = "Start time is required";
        }

        if(!values.endOpt) {
            errors.endOpt = "End time is required";
        }

        if(!values.inputFile) {
            errors.inputFile = "Event flyer is requried";
        }

        if (!values.mainEmail) {
            errors.mainEmail = "Email is required!";
          } else if (!regex.test(values.mainEmail)) {
            errors.mainEmail = "This is not a valid email format!";
          }


          
          if(!values.mainContactFN) {
            errors.mainContactFN = "First name is required";
        }

        
        if(!values.mainContactLN) {
            errors.mainContactLN = "Last name is required";
        }

        
        if(!values.mainPhone) {
            errors.mainPhone = "Phone Number is required";
        }


          if(!values.premiseOpt) {
            errors.premiseOpt = "This option is required";
        }

        if(!values.indoorOpt) {
            errors.indoorOpt = "This option is required";
        }


        if(values.indoorOpt === "yes")
        {
            if(!values.yesIndoorOpt) {
                errors.yesIndoorOpt = "This option is required";
            }
        }
        else if (values.indoorOpt === "no") {
            if(!values.outDoorOpt) {
                errors.outDoorOpt = "This option is required";
            }
        }
        

        if(!values.audience) {
            errors.audience = "This option is required";
        }

        if(!values.vidAudOpt) {
            errors.vidAudOpt = "This option is required";
        }

        if(!values.mascotOpt) {
            errors.mascotOpt = "Mascot option is required";
        }

        if(values.mascotOpt === "yes"){
            if(!values.yesMascotOpt) {
                errors.yesMascotOpt = "Mascot option is required";
            }
    
            if(!values.privateOpt) {
                errors.privateOpt = "This option is required";
            }
        }


        if(!values.tblChrOpt) {
            errors.tblChrOpt = "This option is required";
        }

        
        if(!values.quantity) {
            errors.quantity = "The amount of people is required";
        }

        if(!values.disabilityOpt) {
            errors.disabilityOpt = "This option is required";
        }

        return errors;
    }
        return(
            <div className='form-container'>
                {Object.keys(formError).length === 0 && sent ? (
                    <Sent/>
                
                ): (
                    <form  onSubmit={handleSubmit} > 
                <FormTime setFormData={setFormData} formData={formData} formError={formError}/>
                <FormContact title="Main Contact" fname="mainContactFN" lname="mainContactLN" contactPhone="mainPhone" email="mainEmail" setFormData={setFormData} formData={formData} formErr={formError.mainEmail} fNameErr={formError.mainContactFN} lNameErr={formError.mainContactLN} phoneErr={formError.mainPhone}/>
                <FormInfo  setFormData={setFormData} formData={formData} formError={formError}/>
                   <button  className="submit-btn"  >SUBMIT</button>
                </form>
                )}
               
            </div>
            
        );
    
}

export default Form