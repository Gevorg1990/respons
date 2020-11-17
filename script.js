document.body.onscroll= function (event) {
   let Y = window.scrollY;
   // console.log(Y);
   
   if (Y>600) {
      document.querySelector('.box__content_1').classList.add('left')
      document.querySelector('.box__content_2').classList.add('right')
   }
   else if(Y<300) {
      document.querySelector('.box__content_1').classList.remove('left')
      document.querySelector('.box__content_2').classList.remove('right')
   }
   
}
// var $button = $('#menu-btn');

// $button.on('click', function(e){
//     e.preventDefault();
//     if( $button.hasClass('open') ){
//       $button.removeClass('open');
//       $button.addClass('close');
//     } else {
//       $button.removeClass('close');
//       $button.addClass('open');
//     }
// });
let t = 0
topp=0
let button = document.getElementById('menu-btn');
button.onclick = function (event) {
   
   event.preventDefault();
   if (button.classList.contains('open')) {
      button.classList.remove('open');
      button.classList.add('close');
   } else {
      button.classList.remove('close');
      button.classList.add('open');
   }

   
   if (t==0) {
      document.querySelector('.burger__content').style.top =100+ 'px';
    
     t++
   }
   else {
    t--
      document.querySelector('.burger__content').style.top=-300+'px'
   }
  
   console.log(t);
   
}