
    const navMenu = document.getElementById('nav-menu');
    const toggleMenu = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    
 

/* Menu show */
if(toggleMenu){
   toggleMenu.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
      navClose.style.display = 'block';
      setTimeout(() => {
         navClose.style.transform = 'rotate(180deg)'
      } , 10)
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu');
      navClose.style.transform = 'rotate(0deg)';
      setTimeout(() => {
         navClose.style.display = 'none';
      },400)

   })
}


if (window.innerWidth > 860) {
   // Aplica ScrollReveal solo en pantallas mayores a 768px
   ScrollReveal().reveal('.navbar', {
     delay: 400,
     distance: '120px',
     origin: 'top',
   });
 }
if (window.innerWidth > 860) {
   // Aplica ScrollReveal solo en pantallas mayores a 768px
   ScrollReveal().reveal('.hero', {
     delay: 400,
     distance: '120px',
     origin: 'bottom',
   });
 }
if (window.innerWidth > 860) {
   // Aplica ScrollReveal solo en pantallas mayores a 768px
   ScrollReveal().reveal('.interactive', {
     delay: 700,
     distance: '50px',
     origin: 'left',
     duration:1000,
   });
 }
if (window.innerWidth > 860) {
   // Aplica ScrollReveal solo en pantallas mayores a 768px
   ScrollReveal().reveal('.creations', {
     delay: 300,
     distance: '200px',
     origin: 'left',
     duration:1000,
   });
 }




// ScrollReveal().reveal('.navbar', {distance:'-100px'});
// ScrollReveal().reveal('.navbar', {origin:'right'});
// ScrollReveal().reveal('.navbar', {delay:'200'});

// ScrollReveal().reveal('.navbar', { mobile: false });