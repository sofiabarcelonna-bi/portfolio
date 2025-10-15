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


// --- FORMULARIO DE CONTACTO ---
const form = document.getElementById("contact-form");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Evita la redirección a Formspree

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      // Mostrar popup
      popup.classList.remove("hidden");
      // Borrar contenido del formulario
      form.reset();
    } else {
      alert("Hubo un problema al enviar el mensaje. Por favor, intentá nuevamente.");
    }
  } catch (error) {
    alert("Error de conexión. Intentá más tarde.");
  }
});

// Cerrar popup
closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});
