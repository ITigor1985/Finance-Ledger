$(document).ready(function () {
    
      $('.gallery__list').slick({         
        
        slidesToShow: 2,
        slidesToScroll: 1,
        
        speed: 1000,
        easing: 'ease', 
        responsive: [{
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

        ]
      });
    
  });