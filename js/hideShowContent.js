// let header = document.querySelector('.header-content-inner');
// header.style.display = "none";
// let isShow = true;

// const ready = () => {

//      const flyingText = () => {
//         setTimeout(() => {
//             header.style.display = "block";
//         },3000)
//      }
//      flyingText();
// }



// //Document ready loading
// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', ready)
// } else {
//     ready()
// }

$(document).ready(function(){
    $(".header-content-inner").hide().slideDown(3000);
  });