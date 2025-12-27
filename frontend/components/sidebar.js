
fetch('../components/sidebar.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('sidebar-container').innerHTML = html;

    // FUNCTIONS HERE
    const sidebar = document.getElementById("nav-bar");
    const hoverZone = document.getElementById("sidebar-hover-zone");
    const navToggle = document.getElementById("nav-toggle")

    let hideTimeout;

    function showSidebar() {
      clearTimeout(hideTimeout)
      sidebar.style.left = "1vw"
    }

    function hideSidebar() {
      hideTimeout = setTimeout(() => {
        sidebar.style.left = "-250px";
        navToggle.checked = false;
      }, 500);
    }

    hoverZone.addEventListener("mouseenter", showSidebar);
    hoverZone.addEventListener("mouseleave", hideSidebar);
    sidebar.addEventListener("mouseenter", showSidebar);
    sidebar.addEventListener("mouseleave", hideSidebar);

  });
