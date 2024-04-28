const aside = document.getElementById("lateral-form");
const btn = document.getElementById("btn");
const closeBtn = document.getElementById("close-btn");
const inpName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const inpSub = document.getElementById("subm");

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Desplazamiento suave
  });
  aside.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
  aside.classList.toggle("hidden");
});

inpSub.addEventListener("click", (e) => {
  // e.preventDefault();
  if (
    inpName.checkValidity() &&
    email.checkValidity() &&
    phone.checkValidity()
  ) {
    alert("Welcome to FRONTEND ACADEMY");
  }
  inpSub.onsubmit();
});
