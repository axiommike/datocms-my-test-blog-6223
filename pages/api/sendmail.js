import React from "react";
const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

function Sendmail(req,res) {
  const body = JSON.parse(req.body);
//Create message from request
  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
`;
mail.send({
    to: 'mike@mikecameron.ca',
    from: 'mike@mikecameron.ca',
    subject: 'New Message from ' + body.name,
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  }).then(() => {
    res.status(200).json({ status: 'Ok' });
  }).catch((error) => {
    console.log(error)
    res.json({status:error}); 
  })

  return <div></div>;
}

export default Sendmail;
