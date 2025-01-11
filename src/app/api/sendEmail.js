var nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ramospaula1996@gmail.com',
        pass: '156853650tereva'
      }
    });

    var mailOptions = {
      from: 'tuCorreo@gmail.com',
      to: email,
      subject: subject,
      text: message
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.status(500).json({ error: 'Error al enviar el correo' });
      } else {
        res.status(200).json({ message: 'Correo enviado' });
      }
    });
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
