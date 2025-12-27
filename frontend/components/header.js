fetch('../components/header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header-container').innerHTML = html;

    // ===== USER PROFILE MENU =====
    const subMenu = document.getElementById("subMenu");
    const userPic = document.querySelector(".user-pic");

    function toggleMenu(e) {
      dropdowns.forEach(dd => dd.classList.remove('active'));
      subMenu.classList.toggle("open-menu");
      e.stopPropagation();
    }

    userPic.addEventListener("click", toggleMenu);

    // ===== DROPDOWN TOGGLE =====
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
      const trigger = dropdown.querySelector('.desktop-item');
      if (trigger) {
        trigger.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();

          subMenu.classList.remove('open-menu');

          dropdowns.forEach(other => {
            if (other !== dropdown) {
              other.classList.remove('active');
            }
          });

          dropdown.classList.toggle('active');
        });
      }
    });

    // Close everything when clicking outside 
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown')) {
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
      }
      if (!subMenu.contains(e.target) && !userPic.contains(e.target)) {
        subMenu.classList.remove('open-menu');
      }
    });

  })
  .catch(err => console.error('Failed to load header:', err));
