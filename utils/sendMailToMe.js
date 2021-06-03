const SENDGRID_API_URL = "https://api.sendgrid.com/v3/mail/send";
const SENDGRID_API_KEY = process.env.NEW_SENDGRID_API_KEY;
import {useState } from 'react'

const sendMailToMe = (fullName,formMessage,email)=> {
  const mail = require('@sendgrid/mail');
  mail.setApiKey(SENDGRID_API_KEY);
  console.log('test')
const msg = {
  to: 'mike@mikecameron.ca',
  from: 'mike@mikecameron.ca',
  templateId: 'd-3481ff06ea924128baa7c16a5a7f4840',   
  dynamicTemplateData: {
    subject: 'Testing Templates',
    fullName: fullName,
    message: formMessage,
  },
};
// return mail.send(msg, (error, result) => {
//   if (error) {
//     console.log(error)
//     return 66
//   }
//   else {
//     console.log(result)
//     return 42
//   }
// });

mail.send(msg)
.then((response) => {
  console.log('in response')
  console.log(response[0])
  return {"results":'in success'};
 
  
})
.catch((error) => {
  console.log("there was an error")
  console.error(error)
  return {"results":'in error'};
  
  
})
 
  return {"results":'test'};
}

export { sendMailToMe };