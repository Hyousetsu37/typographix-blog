// Function to check if ppage is scrolled and adjust the logo size

const checkScroll = () => {
  const navbar = document.getElementById('navbar');
  const logo = document.getElementById('logo');
  let scrollPosition = window.scrollY;

  //Add/Remove  'scroled class based on scroll position
  if (scrollPosition > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Calculatre new font size based on scroll position
  let newSize = 3 - scrollPosition * 0.03; //Decrease by 0.03 rem for ebery 1px scrolled

  //Clampimg the font size between 1.5rem and 3rem
  newSize = Math.max(1.5, newSize);
  newSize = Math.min(3, newSize);

  logo.style.fontSize = newSize + 'rem';
};

window.addEventListener('scroll', checkScroll);
