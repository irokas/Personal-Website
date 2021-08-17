const scrollTo = (elId, elClass) => {
  document.getElementById(elId).addEventListener('click', () => {
    document
      .getElementsByClassName(elClass)[0]
      .scrollIntoView({ behavior: 'smooth' });
  });
};

scrollTo('home_button', 'home');
scrollTo('contact_button', 'contact');
scrollTo('about_button', 'about');
scrollTo('scrollImg', 'home');

reverseNavbar = () => {
  if (document.body.scrollTop > 85 || document.documentElement.scrollTop > 85) {
    document.getElementsByClassName('navbar')[0].classList.add('reverse');
  } else {
    document.getElementsByClassName('navbar')[0].classList.remove('reverse');
  }
};

window.onscroll = function () {
  reverseNavbar();
};
