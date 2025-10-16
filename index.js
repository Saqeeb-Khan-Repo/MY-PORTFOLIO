function sendEmail() {
  let parms = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
    subject: document.querySelector("#subject").value,
  };
  emailjs
    .send("service_etjco1j", "template_4kgdr3c", parms)
    .then(() => alert("Email Sent!!").catch(() => alert("Email not sent!")));
}
