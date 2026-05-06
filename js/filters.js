document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      
      filterBtns.forEach(b => b.classList.remove("active"));
      
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        card.classList.remove("show");
        
        if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
          card.classList.remove("hide");
          
          void card.offsetWidth; 
          
          card.classList.add("show");
        } else {
          card.classList.add("hide");
        }
      });
    });
  });
});