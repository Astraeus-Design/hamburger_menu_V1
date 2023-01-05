let bref=document.querySelector("#bgr");
let menuRef=document.querySelector("#mainmenu");
let i=0;
let mediachange=window.matchMedia("(max-width:560px)");

function checkScreenwidth(w){

  if (w.matches){
    console.log("bejiggers");
    if (menuRef.classList.contains("showmenu")) menuRef.classList.toggle("showmenu");
  }
  
}



/* initially set display of main menu to none( or off ) */

/*menuRef.style.cssText="display:none;"*/

/*menuRef.classList.toggle("mainmenu");*/

console.log(bref,menuRef);
/*checkScreenwidth(mediachange);*/
mediachange.addListener(this.checkScreenwidth);

bref.addEventListener("click",()=>{
    i++;
    console.log(menuRef);
    console.log(menuRef.classList);
    menuRef.classList.toggle("showmenu");
    
    /*(menuRef.classList.toggle("showmenu");*/
     console.log(menuRef.classList);
    /* menuRef.classList.toggle("toggleclass");*/
   /* console.log(getComputedStyle(menuRef,null).display);
    if ((getComputedStyle(menuRef,null).display)=="none"){menuRef.style.cssText="display:flex;"}
    else
    { menuRef.style.cssText="display:none;"};*/
     
    console.log(menuRef.classList+"   "+i);
});

