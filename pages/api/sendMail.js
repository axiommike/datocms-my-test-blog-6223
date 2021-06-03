const SENDGRID_API_URL = "https://api.sendgrid.com/v3/mail/send";
const SENDGRID_API_KEY = process.env.NEW_SENDGRID_API_KEY;


export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, fullName, message, test } = req.body;
    if (typeof (email || fullName || test || message) === "undefined") {
      console.log(" ************* Invalid Data received ************ ");

      return res
        .status(400)
        .send({ error: "bad request, missing required data!" });
    } else {
      //  Data received as expected
      const mail = require("@sendgrid/mail");
      mail.setApiKey(SENDGRID_API_KEY);
      const msg = {
        to: "mike@mikecameron.ca",
        from: "mike@mikecameron.ca",
        templateId: "d-3481ff06ea924128baa7c16a5a7f4840",
        dynamicTemplateData: {
          fullName: fullName,
          message: message,
          email: email
        },
      };

      mail
        .send(msg)
        .then((response) => {
          res.status(200).send(response[0]);
        })
        .catch((error) => {
          console.log("there was an error");
          console.error(error.code);
          res.status(error.code).send({ error: error.message });
        });
      
    }
  } else {
    res.status(400).send({ error: "Must use POST method" });
  }

}
