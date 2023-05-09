$(function () {
  $("a[href*='#']").on("click", function (e) {
    console.log("clicked");
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
  const toggleButton = document.getElementsByClassName("toggle-button")[0];
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];
  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });
  AOS.init({
    duration: 3000,
  })
});
