const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const splash = document.querySelector(".splash");


// document.addEventListener("DOMContentLoaded",(e)=>{
//     setTimeout(()=>{
//         splash.classList.add('display-none');
//     },2000)
// })

// function gototab(reload)
//    {
//     window.location.hash = '#Intro';
//     window.location.reload(true);
//  }

function copyPhone(){
//     navigator.clipboard.writeText("+1(312)-776-4840");
if (navigator.clipboard) {
    // yes 
    navigator.clipboard.writeText("+1(312)-776-4840")
         .then(() => alert("Phone number Copied & Ready to Paste"))
  } else {
    // nope 
    alert("Browser does not support copying to clipboard\n Phone Number : +1(312)-776-4840")
  }
}

function copyEmail(){
    if (navigator.clipboard) {
        // yes 
        navigator.clipboard.writeText("E-mail 1: abonageri@hawk.iit.edu \nE-Mail 2: abhishek841998@gmail.com")
             .then(() => alert("Email Copied & Ready to Paste"))
      } else {
        // nope 
        alert("Browser does not support copying to clipboard\n E-mail 1: abonageri@hawk.iit.edu \nE-Mail 2: abhishek841998@gmail.com")
      }
    }

navToggle.addEventListener("click",() => {
    const visibility = primaryNav .getAttribute("data-visibility");
    console.log(visibility);
    if(visibility==="null"){
         primaryNav.setAttribute("data-visibility",true);
    }
})