
    ////////////////////////////////////////////// nav bar start////////////////////////////////////////////
function showbtn() {
    let menushow = document.querySelector("#menubtn");
    menushow.setAttribute("style","display:none;");
    
    var nav = document.querySelector("#hightshow");
            nav.setAttribute("style","overflow: none;");
            nav.setAttribute("style","height: 40vh;");
    let closeshow = document.querySelector("#closebtn");
    closeshow.setAttribute("style","display:block;");

    
}
function hidebtn() {
    let menushow = document.querySelector("#menubtn");
    menushow.setAttribute("style","display:block;");
    let closeshow = document.querySelector("#closebtn");
    closeshow.setAttribute("style","display:none;");
    var nav = document.querySelector("#hightshow");
            nav.setAttribute("style","overflow: hidden;");
            nav.setAttribute("style","height: 0;");
}
    ////////////////////////////////////////////// nav bar end////////////////////////////////////////////

   
