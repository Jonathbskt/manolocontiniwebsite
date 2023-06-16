
document.addEventListener("DOMContentLoaded", function(event) {
 
var splide = new Splide( '.box-me-splide', {
  type   : 'slide',
  perMove: 1,
  perPage: 1,
  arrows:true,
  rewind : true,
  pauseOnFocus:true,
  pauseOnHover:true,
  breakpoints: {
        992: {
      autoplay:true,
            perPage: 1,
      arrows:false,
        },  
        1200: {
          autoplay:true,
                perPage: 1,
          arrows:true,
            },  }
} );

splide.mount()


var splide = new Splide( '.box-my-fight', {
  type   : 'loop',
  perMove: 3,
  perPage: 3,
  arrows:true,
  rewind : true,
  pauseOnFocus:true,
  pauseOnHover:true,
  breakpoints: {
		992: {
      autoplay:true,
      perMove: 1,
      perPage: 1,
      arrows:true,
		}, 
    1200: {
      autoplay:true,
      perMove: 2,
      perPage: 2,
      arrows:true,

        },  }
} );

splide.mount()


var splide = new Splide( '.box-cards-splide', {
  type   : 'slide',
  perMove: 1,
  perPage: 3,
  arrows:false,
  rewind : true,
  pauseOnFocus:true,
  pauseOnHover:true,
  breakpoints: {
        640: {
      autoplay:true,
            perPage: 1,
      arrows:true,
        },  
        992: {
          autoplay:true,
                perPage: 2,
          arrows:true,
            },  }
} );

splide.mount()
});

