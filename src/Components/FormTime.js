import React from 'react';
import { Calendar } from 'primereact/calendar';


function FormTime({formData, setFormData, formError}) {

  

    let today = new Date();
    let startDate = new Date();
    let endDate = startDate.setDate(startDate.getDate()+14);
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month ;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month) ? 0 : month + 2;
    let nextYear = (nextMonth === 0) ? year + 1 : year;


    let minDate = new Date();
    minDate.setMonth(prevMonth);
    minDate.setFullYear(prevYear);


    const getDateRange = (d1, d2) => {
        const date = new Date(d1.getTime());

        let invalidDates = [];

        while (date <= d2) {
            invalidDates.push(new Date(date));
            date.setDate(date.getDate() + 1);
          }
          return invalidDates;
    }

    let newDay = new Date();
    let newEnd = new Date (endDate);
  

    let maxDate = new Date();
    maxDate.setMonth(nextMonth);
    maxDate.setFullYear(nextYear);
    
   
    
    const handleChange = (e) => { // adds input fields to hook
        const name = e.target.name;
        const value = e.target.value;

       setFormData(values => ({...values, [name]: value}))
    }


    const getFile = (e) => { // gets file ands adds to hook setform
        const fileName = e.target.name;
        const fileValue = e.target.files[0];
      
        setFormData(values => ({...values, [fileName]: fileValue}))
    }

        return(
                <div className='form-time'>
                    <label><small className='form-error'>{formError.eventName}</small>
                        Event Name:
                        <input type="text" name="eventName" placeholder='Event Name' value={formData.eventName || ""} onChange={handleChange} />
                    </label>
                    <div className="field col-12 md:col-4">
                    <small className='form-error'>{formError.formDateStart}</small>
                        <label htmlFor="basic">Start Date</label>
                        <Calendar id="basic" minDate={minDate} maxDate={maxDate}  name="formDateStart"  disabledDates={getDateRange(newDay, newEnd)} value={formData.formDateStart} onChange={handleChange} />
                    </div>

                    <div className="field col-12 md:col-4">
                        <small className='form-error'>{formError.formDateEnd}</small>
                        <label htmlFor="basic">End Date</label>
                        <Calendar id="basic" minDate={minDate} maxDate={maxDate} name="formDateEnd" disabledDates={getDateRange(newDay, newEnd)} value={formData.formDateEnd} onChange={handleChange} />

                    </div>
                

                    <label><small className='form-error'>{formError.address}</small>
                        Address of Event:
                        <input type="text" name="address" placeholder='Address of Event' onChange={handleChange}/>
                    </label>

                    <label><small className='form-error'>{formError.setUpOpt}</small>
                        Setup Time:
                        <select defaultValue={formData.premiseOpt || 'Default'} name="setUpOpt" onChange={handleChange}>
                            <option value="Default" disabled  hidden></option>
                            <option>5:00 AM</option>
                            <option>5:30 AM</option>
                            <option>6:00 AM</option>
                            <option>6:30 AM</option>
                            <option>7:00 AM</option>
                            <option>7:30 AM</option>
                            <option>8:00 AM</option>
                            <option>8:30 AM</option>
                            <option>9:00 AM</option>
                            <option>9:30 AM</option>
                            <option>10:00 AM</option>
                            <option>10:30 AM</option>
                            <option>11:00 AM</option>
                            <option>11:30 AM</option>
                            <option>12:00 PM</option>
                            <option>12:30 PM</option>
                            <option>1:00 PM</option>
                            <option>1:30 PM</option>
                            <option>2:00 PM</option>
                            <option>2:30 PM</option>
                            <option>3:00 PM</option>
                            <option>3:30 PM</option>
                            <option>4:00 PM</option>
                            <option>4:30 PM</option>
                            <option>5:00 PM</option>
                            <option>5:30 PM</option>
                            <option>6:00 PM</option>
                            <option>6:30 PM</option>
                            <option>7:00 PM</option>
                            <option>7:30 PM</option>
                            <option>8:00 PM</option>
                            <option>8:30 PM</option>
                            <option>9:00 PM</option>
                            <option>9:30 PM</option>
                            <option>10:00 PM</option>
                            <option>10:30 PM</option>
                            <option>11:00 PM</option>
                            <option>11:30 PM</option>
                            <option>12:00 AM</option>
                            <option>12:30 AM</option>
                        </select>
                    </label>
                        
                    <label><small className='form-error'>{formError.startOpt}</small>
                       Event Start Time:
                       <select defaultValue={formData.premiseOpt || 'Default'} name="startOpt" onChange={handleChange}>
                            <option value="Default" disabled  hidden></option>
                            <option>5:00 AM</option>
                            <option>5:30 AM</option>
                            <option>6:00 AM</option>
                            <option>6:30 AM</option>
                            <option>7:00 AM</option>
                            <option>7:30 AM</option>
                            <option>8:00 AM</option>
                            <option>8:30 AM</option>
                            <option>9:00 AM</option>
                            <option>9:30 AM</option>
                            <option>10:00 AM</option>
                            <option>10:30 AM</option>
                            <option>11:00 AM</option>
                            <option>11:30 AM</option>
                            <option>12:00 PM</option>
                            <option>12:30 PM</option>
                            <option>1:00 PM</option>
                            <option>1:30 PM</option>
                            <option>2:00 PM</option>
                            <option>2:30 PM</option>
                            <option>3:00 PM</option>
                            <option>3:30 PM</option>
                            <option>4:00 PM</option>
                            <option>4:30 PM</option>
                            <option>5:00 PM</option>
                            <option>5:30 PM</option>
                            <option>6:00 PM</option>
                            <option>6:30 PM</option>
                            <option>7:00 PM</option>
                            <option>7:30 PM</option>
                            <option>8:00 PM</option>
                            <option>8:30 PM</option>
                            <option>9:00 PM</option>
                            <option>9:30 PM</option>
                            <option>10:00 PM</option>
                            <option>10:30 PM</option>
                            <option>11:00 PM</option>
                            <option>11:30 PM</option>
                            <option>12:00 AM</option>
                            <option>12:30 AM</option>
                        </select>
                    </label>
                    <label><small className='form-error'>{formError.endOpt}</small>
                       Event End Time:
                        <select defaultValue={formData.premiseOpt || 'Default'} name="endOpt" onChange={handleChange}>
                            <option value="Default" disabled  hidden></option>
                            <option>5:00 AM</option>
                            <option>5:30 AM</option>
                            <option>6:00 AM</option>
                            <option>6:30 AM</option>
                            <option>7:00 AM</option>
                            <option>7:30 AM</option>
                            <option>8:00 AM</option>
                            <option>8:30 AM</option>
                            <option>9:00 AM</option>
                            <option>9:30 AM</option>
                            <option>10:00 AM</option>
                            <option>10:30 AM</option>
                            <option>11:00 AM</option>
                            <option>11:30 AM</option>
                            <option>12:00 PM</option>
                            <option>12:30 PM</option>
                            <option>1:00 PM</option>
                            <option>1:30 PM</option>
                            <option>2:00 PM</option>
                            <option>2:30 PM</option>
                            <option>3:00 PM</option>
                            <option>3:30 PM</option>
                            <option>4:00 PM</option>
                            <option>4:30 PM</option>
                            <option>5:00 PM</option>
                            <option>5:30 PM</option>
                            <option>6:00 PM</option>
                            <option>6:30 PM</option>
                            <option>7:00 PM</option>
                            <option>7:30 PM</option>
                            <option>8:00 PM</option>
                            <option>8:30 PM</option>
                            <option>9:00 PM</option>
                            <option>9:30 PM</option>
                            <option>10:00 PM</option>
                            <option>10:30 PM</option>
                            <option>11:00 PM</option>
                            <option>11:30 PM</option>
                            <option>12:00 AM</option>
                            <option>12:30 AM</option>
                        </select>
                    </label>
                    <div className='custom-file'>
                    <small className='form-error'>{formError.inputFile}</small>
                        <label htmlFor="inputFile" >Please attach event flier. (Only PDF)</label>
                        <input type="file" accept="application/pdf" id="inputFile" name='inputFile'  required="" style={{border:"none", padding:0}} onChange={getFile}/>
                    </div>
                </div>



            
        );
    
}

export default FormTime