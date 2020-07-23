

$(function() {
  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: false, 
    asNavFor: '.header__slider',
    arrows: false,

  });

  $('.header__slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    pauseOnHover: true,
    pauseOnFocus: true,
    adaptiveHeight: true,
    asNavFor: '.slider-dots',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    responsive:[
      {
        breakpoint: 767,
        settings:{
          dots: true,
        }
      }
    ]
  });

});

$(document).ready(function(){
  $('.quote-slider').slick({
    speed: 1500,
  });
});
$(document).ready(function(){
  $('.works-slider').slick({
    speed: 1000,
  });
});


$(document).ready(function(){
  $(".header__search-btn").click(function(){
  $(".header__search, .header__search-box, .header__basket, .header__search-btn, .header__search-submit").toggleClass("active");
  $("input[type='text']").focus();
});
});

$(document).ready(function() {
  $('.header__burger').click(function(event) {
     $('.header__burger, .nav__list').toggleClass('_active');
     $('body').toggleClass('_lock');
  });
});

window.addEventListener('scroll', () => {

  let scrollDistance = window.scrollY;

  document.querySelectorAll('.active-section').forEach((el, i) => {
    if (el.offsetTop - document.querySelector('.header__top').clientHeight <= scrollDistance) {
      document.querySelectorAll('.header__top a').forEach((el) => {
        if (el.classList.contains('_active_')) {
          el.classList.remove('_active_');
        }
      });

      document.querySelectorAll('.header__top li')[i].querySelector('a').classList.add('_active_');
    }
  });
});

document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
  item.addEventListener('click', () => {
    let parent = item.parentNode;

    if (parent.classList.contains('accordion-active')) {
        parent.classList.remove('accordion-active');
    } else {
        document
          .querySelectorAll('.accordion-item')
          .forEach((child) => child.classList.remove('accordion-active'))

        parent.classList.add('accordion-active');
    }
  })
)


const mapButton = document.querySelector('.map__title'),
      googleMap = document.querySelector('.google-map'),
      mapRectangle = document.querySelector('.map__rectangle'),
      map = document.querySelector('.map');

mapButton.addEventListener('click', () => {
  googleMap.classList.toggle("_active-map_");
  map.classList.toggle("_active-map_");



  if (googleMap.classList.contains('_active-map_')) {
      mapButton.innerHTML = "close map"
      mapRectangle.style.backgroundImage = "url('../images/map-rectangle.webp')";
  } else {
    mapButton.innerHTML = "open map"
    mapRectangle.style.backgroundImage = "url('../images/map-bg.webp')";
  }
});

  
