
const multer = require('multer');
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const router = express.Router();
app.use("/", router);
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser")
require("dotenv").config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'attachments/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})


const upload = multer({ storage: storage })



const contactEmail = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });



 router.post("/Server", upload.single("inputFile"), (req, res) => {
  

  let file= req.file;
    let event = req.body.eventName;
    let dateStart = req.body.formDateStart;
    let dateEnd = req.body.formDateEnd;
    let address = req.body.address;
    let setUp = req.body.setUpOpt;
    let start = req.body.startOpt;
    let end = req.body.endOpt;
    let fName = req.body.mainContactFN;
    let lName = req.body.mainContactLN;
    let fullName = fName + " " + lName;
    let email = req.body.mainEmail;
    let phone = req.body.mainPhone;
    let premise = req.body.premiseOpt;
    let indoorOpt = req.body.indoorOpt;
    let area = null
    let mascotOpt = "N/A";
    let mascotChange = "N/A";
    let equipment = req.body.vidAudOpt;
    let mascot = req.body.mascoptOpt;
    let tables = req.body.tblChrOpt;
    let audience = req.body.audience;
    let attendance = req.body.quantity;
    let disability = req.body.disabilityOpt;
    let comments = req.body.addComm;

    if(indoorOpt === "yes"){
      area = req.body.yesIndoorOpt
    }
    else {area = req.body.outDoorOpt}

  

    if(mascot === "yes"){
        let mascotOpt = req.body.yesMascotOpt;
        let mascotChange = req.body.privateOpt;
    }
    
    const mail = {
      from: process.env.MAIL_FROM,
      to: "juanesquivel37@gmail.com",
      subject: "Event Request Submission",
      html: `<p>Event Name: ${event}</p>
             <p>Start Date: ${dateStart}</p>
             <p>End Date: ${dateEnd}</p>
             <p>Address: ${address}</p>
             <p>Set up time:${setUp} </p>
             <p>Event Start Time: ${start}</p>
             <p>Event End Time: ${end}</p>

             <p>Name: ${fullName}</p>
             <p>Phone Number: ${phone}</p>
             <p>Email: ${email}</p>


             <p>Will identification be required to enter premises?: ${premise}</p>
             <p>Event Area: ${area}</p>
             <p>Target Audience: ${audience}</p>
             <p>Audio & visual equipment provided? ${equipment}</p>
             <p>Mascot Selected: ${mascotOpt}</p>
             <p>Change area for mascot? ${mascotChange}</p>
             <p>Will tables and chairs be provided? ${tables}</p>
             <p>People expected to attend ${attendance}</p>
             <p>Any Deaf or Hard of Hearing individuals ${disability}</p>
             <p>Additional Comments: ${comments}</p>`,
      attachments: [
        {
          filename: file.filename,
          path: file.path
        }
      ]
    };
  
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
    
  });


  app.listen(5000, () => console.log("Server Running"));
