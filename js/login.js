



function switchPanel (panel){
    const width = '400px';
    let login = document.getElementsByClassName('form-login')[0];
    let signUp = document.getElementsByClassName('form-sign-up')[0];
    if(panel == "register"){
        login.style.width = '0px';
        login.style.opacity = '0%';
        signUp.style.width = width;
        signUp.style.opacity = '100%';
        
    } else if (panel=="sign-in") {
        signUp.style.width = '0px';
        signUp.style.opacity = '0%';
        login.style.width = width;
        login.style.opacity = '100%';

    }
    return;    
}