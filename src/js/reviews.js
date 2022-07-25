$(document).ready(function () {
    
    $('.reviews__list').slick({         
      
      slidesToShow: 1,
      slidesToScroll: 1,
      
      speed: 1000,
      easing: 'ease', 
      
    });
    
});

const descriptions = document.querySelectorAll('.reviews__review');
const windowWidth = document.body.clientWidth;
    descriptions.forEach(description => {
      // let styleDescription = window.getComputedStyle(description, null).getPropertyValue("height");
      let styleDescription = description.clientHeight;
     
      if((windowWidth <= 767 && parseInt(styleDescription) >= 173)) {
        description.style.height="172px";
        description.style.overflow="auto";
      }      
      if((windowWidth >= 768 && parseInt(styleDescription) >= 126)) {
        description.style.height="210px";
        description.style.overflow="auto";
      }
    })
    
    

    // let styleDescription = window.getComputedStyle(descriptions, null).getPropertyValue("height");
    

    // if(windowWidth < 768 && description.style.height > 172){
    //   description.style.height="172px"
    //   description.style.overflow="auto";
    // }