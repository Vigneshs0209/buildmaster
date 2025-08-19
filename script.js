let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-slide every 5 seconds
setInterval(nextSlide, 3000);

// Initialize the carousel
showSlide(currentSlide);

// contact form pop up
window.addEventListener('DOMContentLoaded', () => {
  const contactFormSection = document.querySelector('.contact-form');
  if (contactFormSection) {
    contactFormSection.style.position = 'fixed';
    contactFormSection.style.top = '50%';
    contactFormSection.style.left = '50%';
    contactFormSection.style.transform = 'translate(-50%, -50%)';
    contactFormSection.style.background = '#fff';
    contactFormSection.style.zIndex = '1000';
    contactFormSection.style.boxShadow = '0 0 20px rgba(0,0,0,0.3)';
    contactFormSection.style.padding = '30px';
    contactFormSection.style.borderRadius = '10px';

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '999';
    document.body.appendChild(overlay);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.marginTop = '15px';
    closeButton.style.padding = '10px 20px';
    closeButton.style.border = 'none';
    closeButton.style.background = '#222';
    closeButton.style.color = '#fff';
    closeButton.style.cursor = 'pointer';
    contactFormSection.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
      contactFormSection.style.display = 'none';
      overlay.remove();
    });
  }
});


const services = {
  building: {
    image: "images/special.jpeg",
    text: "We specialize in delivering high-quality building construction services that combine precision engineering, innovative design, and sustainable practices. From residential homes to commercial complexes, our skilled team manages every stage of the project — from planning and foundation work to finishing touches. We focus on safety, durability, and attention to detail, ensuring that every structure we create stands strong and serves its purpose for generations.."
  },
  civil: {
    image: "images/civil.jpeg",
    text: "Our civil building construction services cover the design, development, and execution of essential infrastructure and public-use structures. From government buildings and educational institutions to community centers and public facilities, we ensure every project meets strict engineering standards and regulatory requirements. With a focus on functionality, safety, and sustainability, we deliver structures that serve communities effectively and stand the test of time."
  },
  heavy: {
    image: "images/heavy.jpeg",
    text: "Our heavy building construction services are designed for large-scale, high-strength projects that demand exceptional durability and structural integrity. From industrial facilities and high-rise towers to large commercial complexes, we combine advanced engineering, robust materials, and precise execution to meet the toughest standards. With a focus on safety, efficiency, and long-term performance, we ensure every structure can withstand demanding conditions while delivering optimal functionality."

  },
  special: {
    image: "images/download.jpeg",
    text: "We excel in special building construction projects that require unique designs, advanced techniques, and meticulous craftsmanship. Whether it’s heritage restoration, custom architectural landmarks, or specialized facilities such as hospitals, auditoriums, and research centers, our team delivers precision and creativity at every stage. We integrate innovative materials, cutting-edge technology, and strict quality control to bring complex visions to life while meeting specific functional, aesthetic, and regulatory requirements."
  }
};


document.querySelectorAll(".service-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".service-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const serviceKey = btn.getAttribute("data-service");
    document.getElementById("service-image").src = services[serviceKey].image;
    document.getElementById("service-description").textContent = services[serviceKey].text;
  });
});

// Trigger animation on tab click
document.querySelectorAll(".service-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".service-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const serviceKey = btn.getAttribute("data-service");
    const img = document.getElementById("service-image");
    const desc = document.getElementById("service-description");

    img.src = services[serviceKey].image;
    desc.textContent = services[serviceKey].text;

    // Restart animation on click
    img.classList.remove("animate");
    void img.offsetWidth; // Force reflow
    img.classList.add("animate");
  });
});

// Trigger animation on scroll into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, { threshold: 0.2 }); // 20% visible

observer.observe(document.getElementById("service-image"));

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(".info-section");

  function checkSections() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const boxTop = section.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        section.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkSections);
  checkSections();
});


document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(".info-section");

  function checkSections() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const boxTop = section.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        section.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkSections);
  checkSections();
});

  // Galley fade in animation

