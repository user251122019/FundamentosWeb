    function message() {
        console.log("este mensaje proviene de script.js");
    }
    function hide(element) {
        element.remove();
    }
    function turnLogout(element) {


    
        if(element.innerText=="Login"){ 

            element.innerText = "Logout";
        }
        else
        {    
            element.innerText = "Login";
       }

}

