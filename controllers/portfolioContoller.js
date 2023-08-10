const nodeMailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();





const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    //validation
    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    //email matter

    const transporter = nodeMailer.createTransport({
      host: process.env.SMPT_HOST,
      port: process.env.SMPT_PORT,
      service: process.env.SMPT_SERVICE,
      auth: {
        user: process.env.SMPT_MAIL,
        pass: process.env.SMPT_PASSWORD,
      },
    });




    const mailOptions = {
      from: process.env.SMPT_MAIL,
      to: `${email}`,
      subject: 'Regarding MERN Stack Portfolio',
      html: `
    <h5>Detail Information</h5>
    <ul>
      <li><p>Name : ${name}</p></li>
      <li><p>Email : ${email}</p></li>
      <li><p>Message : ${msg}</p></li>
    </ul>
  `,
    };





    await transporter.sendMail(mailOptions);

    return res.status(200).send({
      success: true,
      message: "Your Message Send Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };










































