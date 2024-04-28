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
    behavior: "smooth",
  });
  aside.classList.toggle("hidden");
  if (!aside.classList.contains("hidden")) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
});

closeBtn.addEventListener("click", () => {
  aside.classList.toggle("hidden");
  if (!aside.classList.contains("hidden")) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
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
  inpSub.submit();
});
