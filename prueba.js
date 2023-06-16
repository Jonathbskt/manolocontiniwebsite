
var splide = new Splide( '.box-me-splide', {
    type   : 'slide',
    perMove: 1,
    perPage: 1,
    arrows:true,
    rewind : true,
    breakpoints: {
          996: {
        autoplay:true,
        perMove: 1,
        perPage: 1,
        arrows:true,
          }, 
          1200: {
            autoplay:true,
            perMove: 1,
            perPage: 1,
            arrows:true,
            padding: '1111rem',
              },  }
  } );
  
  splide.mount()