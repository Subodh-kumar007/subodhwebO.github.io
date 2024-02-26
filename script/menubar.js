
/* ================ *\
 # Toggle Menu Bar
\* ================ */
/*
const menuIcon=document.getElementById("menu-icon");

const toggleMenu=()=>{
    const classListArray=menuIcon?.classList;
    if([...classListArray]?.includes("fa-times")){
        classListArray?.remove("fa-times");
        classListArray?.add("fa-bars");
    }else{
        classListArray?.add("fa-times");
        classListArray?.remove("fa-bars");
    }
    console.log(classListArray)
}
*/



      const navbarToggle = navbar.querySelector("#navbar-toggle");
      const navbarMenu = document.querySelector("#navbar-menu");
      const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
      let isNavbarExpanded =
        navbarToggle.getAttribute("aria-expanded") === "true";

      const toggleNavbarVisibility = () => {
        isNavbarExpanded = !isNavbarExpanded;
        navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
      };

      navbarToggle.addEventListener("click", toggleNavbarVisibility);

      navbarLinksContainer.addEventListener("click", (e) =>
        e.stopPropagation()
      );
      navbarMenu.addEventListener("click", toggleNavbarVisibility);
