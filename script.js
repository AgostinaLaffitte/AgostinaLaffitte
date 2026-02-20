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

  // Animación para las cards (aparecen una por una)
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    setTimeout(() => {
      card.style.transition = "all 0.8s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 500 + i * 200);
  });

  // Animación para la sección de skills
  const skills = document.querySelectorAll(".skills-list li");
  skills.forEach((skill, i) => {
    skill.style.opacity = 0;
    skill.style.transform = "scale(0.8)";
    setTimeout(() => {
      skill.style.transition = "all 0.6s ease";
      skill.style.opacity = 1;
      skill.style.transform = "scale(1)";
    }, 1000 + i * 150);
  });

  // Animación para la sección de educación
  const education = document.querySelector(".education");
  if (education) {
    education.style.opacity = 0;
    setTimeout(() => {
      education.style.transition = "opacity 1s ease";
      education.style.opacity = 1;
    }, 1500);
  }
});
