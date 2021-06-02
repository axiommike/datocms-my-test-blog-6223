const SENDGRID_API_URL = "https://api.sendgrid.com/v3/mail/send";
const SENDGRID_API_KEY = process.env.NEW_SENDGRID_API_KEY;

const sendMailToMe = async (
  fullName, // from name on email
  formMessage, // value we receive from our contact form
  email // value we receive from our contact form
) => {
  console.log(email)

  const mail = require('@sendgrid/mail');
  mail.setApiKey(SENDGRID_API_KEY);
  
const message = `
  Name: ${fullName}\r\n
  Email: ${email}\r\n
  Message: ${formMessage}
`;
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
mail.send(msg).then((response) => {
  return response[0].statusCode
  console.log('in response')
  console.log(response[0].headers)
})
.catch((error) => {
  console.error(error)
})
 
  //return response;
}

export { sendMailToMe };