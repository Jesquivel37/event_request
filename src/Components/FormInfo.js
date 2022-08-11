import React, {useState} from 'react';
import MascotGallery from './MascotGallery';


function FormInfo({formData, setFormData, formError}) {
    const [selected, setOption] = useState("");
    const [mascot, setMascot] = useState("");

    const [renderComponent, setRender] = useState(false);

   const clickedMascot = () => {
        setRender(true);

    
   }

    const optionSelected = (e) => {
        setOption(e.target.value);       
    } 

    const mascotOption = (e) => {
        setMascot(e.target.value);
    }
   
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

       setFormData(values => ({...values, [name]: value}))
    }



        return (
            <div className='form-info'>

            
            {  renderComponent ? <MascotGallery setRender={setRender}/> : null   }
                <label><small className='form-error'>{formError.premiseOpt}</small>
                    Will identification be required to enter premises?
                    <select defaultValue={formData.premiseOpt || 'Default'} name="premiseOpt" onChange={handleChange}>
                        <option value="Default" disabled  hidden></option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </label>

                <label><small className='form-error'>{formError.indoorOpt}</small>
                    Will this be an indoor event?
                    <select className='event-location' onChange={e => {optionSelected(e); handleChange(e); }} name="indoorOpt" defaultValue={formData.indoorOpt || 'Default'}>
                        <option value="Default" disabled  hidden></option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
 
                </label>

                <div className='indoor-options'style={{ display: selected === 'yes' ? 'block': 'none'}}>
                <small className='form-error'>{formError.yesIndoorOpt}</small>
                    <label>
                        Select the event area
                        <select className='indoor' onChange={handleChange} name="yesIndoorOpt" defaultValue={formData.yesIndoorOpt || 'Default'}>
                            <option value="Default" disabled  hidden></option>
                            <option value="cafeteria">Cafeteria</option>
                            <option value="library">Library</option>
                            <option value="gymnasium">Gymnasium</option>
                            <option value="class Room">Class Room</option>
                        </select>

                    </label>
                    
                </div>

            
                <div className='outdoor-options' style={{ display: selected === 'no' ? 'block': 'none'}}>
                    <small className='form-error'>{formError.outDoorOpt}</small>
                    <label>
                        Select the event area
                        <select onChange={handleChange} name="outDoorOpt" defaultValue={formData.outDoorOpt || 'Default'}>
                            <option value="Default" disabled  hidden></option>
                            <option value="parking-lot">Parking Lot</option>
                            <option value="football-field">Football Field</option>
                            <option value="arena">Arena</option>
                            <option value="pavilion">Pavilion</option>
                        </select>
                    </label>
                </div>

                <label><small className='form-error'>{formError.audience}</small>
                    Select a target audience:
                    <select onChange={handleChange} name="audience" defaultValue={formData.audience || 'Default'}>
                        <option value="Default" disabled  hidden></option>
                        <option value="adult-day-care">Adult day care </option>
                        <option value="elmentary">Elementary</option>
                        <option value="middle-school">Middle school</option>
                        <option value="high-school">High School</option>
                        <option value="college">College</option>
                        <option value="community">Community</option>
                    </select>
                </label>


                <label><small className='form-error'>{formError.vidAudOpt}</small>
                    Will you be providing Audio & Visual Equipment?
                    <select onChange={handleChange} name="vidAudOpt" defaultValue={formData.vidAudOpt || 'Default'}>
                        <option value="Default" disabled  hidden></option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <small>Speakers, MIC, laptop, projector, screen projector, power, etc.</small>
                </label>

                <label>
                <br />
                <small className='form-error'>{formError.mascotOpt}</small>
                    Will you need a Mascot? (can only request one mascot per event) <span className='clickable' onClick={clickedMascot}>Click to view mascot</span>
                    <select onChange={e => {mascotOption(e); handleChange(e); }} name="mascotOpt" defaultValue={formData.mascotOpt || 'Default'}>
                        <option value="Default" disabled  hidden></option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </label>

                <div className='mascot-options' style={{display: mascot === 'yes' ? 'block': 'none'}}>
                <small className='form-error'>{formError.yesMascotOpt}</small>
                    <label>
                         Select A mascot:
                        <select onChange={handleChange} name="yesMascotOpt" defaultValue={formData.yesMascotOpt || 'Default'}>
                            <option value="Default" disabled  hidden></option>
                            <option value="cps">CPS</option>
                            <option value="josh">Josh</option>
                            <option value="red-e-fox">Red E Fox</option>
                            <option value="keith">Keith</option>
                        </select>
                    </label>

                
                    <label><small className='form-error'>{formError.privateOpt}</small>
                    
                        Will there be a private place for staff to change in & out of costume? 
                        <select onChange={handleChange} name="privateOpt" defaultValue={formData.privateOpt || 'Default'}>
                            <option value="Default" disabled  hidden></option>
                            <option value="cafeteria">Yes</option>
                            <option value="library">No</option>
                        </select>
                    </label>
                    <p>{formError.privateOpt}</p>
                </div>


                <label><small className='form-error'>{formError.tblChrOpt}</small>
                    Will Table & Chairs be provided for Staff? 
                    <select onChange={handleChange} name="tblChrOpt" defaultValue={formData.tblChrOpt || 'Default'}>
                        <option value="Default" disabled  hidden></option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <p>{formError.tblChrOpt}</p>
                </label>


                <label>
                <small className='form-error'>{formError.quantity}</small>
                    How many people do you expect to attend your event?
                    
                    <input type="number" id="quantity" name="quantity" min="1" max="500" onChange={handleChange} />
                    <small>(500) example</small>
                </label>


              
                <label>
                <br />
                    Will we have any Deaf or Hard of Hearing individuals:
                    <small className='form-error'>{formError.disabilityOpt}</small>
                    <select onChange={handleChange} name="disabilityOpt" defaultValue={formData.disabilityOpt || 'Default'}>
                        <option value="Default" disabled  hidden></option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    
                </label>

                <label>
                    Additional Comments
                    <textarea className='form-comment' name="addComm" value={formData.addComm || ""} onChange={handleChange}></textarea>
                </label>


            </div>
        );
    
}

export default FormInfo