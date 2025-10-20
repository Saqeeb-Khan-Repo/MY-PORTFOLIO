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

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("data-target");
    const section = document.getElementById(targetId);
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


const calculator = document.getElementById("cal");
const myntra = document.getElementById("myntra");

calculator.addEventListener("mouseover", event =>{
  event.target.textContent = "hi how are you";
  
  event.target.style.opacity = "40%";
});
calculator.addEventListener("mouseout", (event) => {
  event.target.style.opacity = "100%";
});

myntra.addEventListener("mouseover", (event) => {
  event.target.textContent = "hi";
  event.target.style.opacity = "40%";
});
myntra.addEventListener("mouseout", (event) => {
  event.target.style.opacity = "100%";
});