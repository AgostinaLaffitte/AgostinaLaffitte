document.addEventListener("DOMContentLoaded", () => {
  // Animación de fade-in para el banner
  const bannerContent = document.querySelector(".banner-content");
  bannerContent.style.opacity = 0;
  bannerContent.style.transform = "translateY(-20px)";

  setTimeout(() => {
    bannerContent.style.transition = "all 1.5s ease";
    bannerContent.style.opacity = 1;
    bannerContent.style.transform = "translateY(0)";
  }, 300);

  // Efecto en el botón de WhatsApp
  const whatsappBtn = document.querySelector(".whatsapp-btn");
  whatsappBtn.addEventListener("mouseover", () => {
    whatsappBtn.textContent = "📲 Let's talk!";
  });
  whatsappBtn.addEventListener("mouseout", () => {
    whatsappBtn.textContent = "Chat on WhatsApp";
  });
});
