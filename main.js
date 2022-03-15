const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const splash = document.querySelector(".splash");


document.addEventListener("DOMContentLoaded",(e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    },2000)
})


navToggle.addEventListener("click",() => {
    const visibility = primaryNav .getAttribute("data-visibility");
    console.log(visibility);
    if(visibility==="null"){
         primaryNav.setAttribute("data-visibility",true);
    }
})