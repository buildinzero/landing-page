// document.getElementById("emailForm")?.addEventListener("submit", function (e) {
//   e.preventDefault();
//   alert("Email captured (backend coming later)");
// });


const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-actions');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });