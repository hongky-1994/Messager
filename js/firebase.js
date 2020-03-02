
(function(){
    var firebaseConfig = {
    apiKey: "AIzaSyBb2ORyWPhYUYCImhwBDtKxdb_ThzGAKHU",
    authDomain: "newproject-52028.firebaseapp.com",
    databaseURL: "https://newproject-52028.firebaseio.com",
    projectId: "newproject-52028",
    storageBucket: "newproject-52028.appspot.com",
    messagingSenderId: "873508799176",
    appId: "1:873508799176:web:97d74005440c2a41bb9bfd"
    };
    firebase.initializeApp(firebaseConfig);

    // Get element
    const logInEmail = document.getElementById('userEmail');
    const logInPassword = document.getElementById('userPassword');
    const btnLogin = document.getElementById('btnLogin');
    
    const regEmail = document.getElementById('regEmail');
    const regPassword = document.getElementById('regPassword');
    const btnRegister = document.getElementById('btnRegister');
    
    const btnLogOut = document.getElementById('btnLogOut');
    // Add login Event;
    btnLogin.addEventListener('click', function (e) {
    
        // Get email and pass
        const email = logInEmail.value;
        const pass = logInPassword.value;
        const auth = firebase.auth();
    
        //Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    // Add signUpEvent
    btnRegister.addEventListener('click',function(e) {
        
        // Get email and pass
        const email = regEmail.value;
        const pass = regPassword.value;
        console.log(pass);
        
        const auth = firebase.auth();
        const rePass = document.getElementById('reRegPassword');
        if( pass != rePass.value) {
            alert('Hai mật khẩu không trùng nhau');
            return;
        }
        //Sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    // Add logout event
    btnLogOut.addEventListener('click', e => {
        firebase.auth().signOut();
    })

    // Auth state
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log('Log in ');
            btnLogOut.classList.remove('hide');
        } else {
            console.log('not logged in');
            btnLogOut.classList.add('hide');
        }
    })

    firebase.auth().signInWithRedirect('file:///C:/Users/HELLO/Desktop/MindX/PROJECT/Message%20app/index.html');

})()
