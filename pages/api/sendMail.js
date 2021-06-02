import { sendMailToMe } from "../../utils/sendMailToMe";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email, fullName, message } = req.body;
      if (
        typeof (email || fullName || message) === "undefined"
      ) {
        console.log(" ************* Invalid Data received ************ ");

        return res
          .status(400)
          .send({ error: "bad request, missing required data!" });
      } else {
        //  Data received as expected
        try {
          const sendGridResponse = await sendMailToMe(
            fullName,
            message,
            email
          );
            console.log(fullName)
          return res.status(200).send({
            sg_response: sendGridResponse,
          });
        } catch (err) {
          console.log(
            "ERROR WHILE SENDING MAIL TO *YOU* THROUGH WEB API >> "+ err,
            err
          );

          return res.status(400).send({
            err_message: "bad request",
          });
        }
      }
    } catch (err) {
      console.log("Err while sending Mail through send grid >> ", err);
      return res
        .status(400)
        .send({ error: "Error in sendgrid Service.", errMsg: err });
    }
  }

  res.status(400).send({ error: "bad request" });
  return {test:'test'}
}
