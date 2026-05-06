document.addEventListener("DOMContentLoaded", () => {
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }
});

  const downloadBtns = document.querySelectorAll('.download-apk-btn');
  const modal = document.getElementById('downloadModal');
  const cancelBtn = document.getElementById('cancelDownload');
  const confirmBtn = document.getElementById('confirmDownload');
  
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  
  let currentDownloadLink = '';

  if (downloadBtns.length > 0 && modal) {
    downloadBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        currentDownloadLink = btn.getAttribute('data-link'); 
        const appName = btn.getAttribute('data-name');
        
        modalTitle.textContent = `Download ${appName}`;
        modalDesc.textContent = `Do you want to download ${appName} to your device now?`;
        
        modal.classList.add('active');
      });
    });

    cancelBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    confirmBtn.addEventListener('click', () => {
      window.open(currentDownloadLink, '_blank'); 
      modal.classList.remove('active'); 
    });
  }