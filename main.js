const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click",() => {
    const visibility = primaryNav .getAttribute("data-visibility");
    console.log(visibility);
    if(visibility==="null"){
         primaryNav.setAttribute("data-visibility",true);
    }
})