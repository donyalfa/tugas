const projectitems = document.querySelectorAll( '.project, .inner .items .item');

projectitems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'scale(1.1)';
    item.style.transition = 'transform 0.3 ease-in-out';
  });
  item.addEventListener('mouseout', () => {
    item.style.transform = 'scale(1)';
  });
});



window.addEventListener('scroll', function() {
  var navbar = document.getElementById('nav-bar');
  var section2 = document.getElementById('pages-2');
  
  // Mendapatkan posisi vertikal dari section 2
  var section2Position = pages2.offsetTop;
  
  // Mendapatkan posisi vertikal scroll
  var scrollPosition = window.scrollY;
  
  // Jika scroll mencapai atau melewati section 2
  if (scrollPosition >= section2Position) {
      document.getElementById('nav');
      document.getElementById('nav-link');
  } else {
  }
});