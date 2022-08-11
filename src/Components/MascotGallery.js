import React from "react";


function MascotGallery({setRender}) {

   const closeButton=(mode)=>{
        setRender(mode)
   }

    return(
        <div className="mascot-container">

            <div className="exit" onClick={()=>closeButton(false)}>X</div>


            <div className="image-container">
                <div className="image image1">
                    <img src={require('../Assets/MascotGallery/Cell_Phone_Sally.png')} alt="Cell Phone Sally" height={400}/>
                    <div className="content">
                        <h1>Cell Phone Sally</h1>
                    </div>
                </div>
                
                <div className="image image2">
                    <img src={require('../Assets/MascotGallery/Josh.png')} alt="Josh" height={400}/>
                    <div className="content">
                        <h1>Josh</h1>
                    </div>
                </div>
                <div className="image image3">
                    <img src={require('../Assets/MascotGallery/Kid_Friendly_Keith.png')} alt="Kid Friendly Keith" height={400}/>
                    <div className="content">
                        <h1>Kid Friendly Keith</h1>
                    </div>
                </div>
                <div className="image image4">
                    <img src={require('../Assets/MascotGallery/Red_E_Fox.png')} alt="Red E Fox"  height={400}/>
                        <div className="content">
                        <h1>Red E Fox</h1>
                    </div>
                </div>
            </div>
          
        </div>
    );
}

export default MascotGallery