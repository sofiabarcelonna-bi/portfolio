// --- MENÚ HAMBURGUESA ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');

hamMenuBtn.addEventListener('click', () => {
  smallMenu.classList.toggle('header__sm-menu--active');

  headerHamMenuBtn.classList.toggle('d-none');
  headerHamMenuCloseBtn.classList.toggle('d-none');
});

headerSmallMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active');
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  });
});

// --- LOGO REDIRECCIONA AL INICIO ---
const headerLogoContainer = document.querySelector('.header__logo-container');
headerLogoContainer.addEventListener('click', () => {
  location.href = 'index.html';
});


// --- FORMULARIO DE CONTACTO (Formspree + Popup) ---
const contactoForm = document.querySelector(".contacto-form");
if (contactoForm) {
  contactoForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(contactoForm);

    try {
      const response = await fetch(contactoForm.action, {
        method: contactoForm.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        contactoForm.reset();
        document.getElementById("popup-confirmacion").classList.add("mostrar");
      } else {
        alert("Ocurrió un error al enviar el mensaje. Intenta nuevamente.");
      }
    } catch (error) {
      alert("Error de conexión. Por favor, intenta más tarde.");
    }
  });

  const cerrarPopup = document.getElementById("cerrar-popup");
  if (cerrarPopup) {
    cerrarPopup.addEventListener("click", () => {
      document.getElementById("popup-confirmacion").classList.remove("mostrar");
    });
  }
}
