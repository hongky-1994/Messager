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

    // Get email and pass
    const btnLogOut = document.getElementById('logOut');

    // log Out 
    btnLogOut.addEventListener('click', e => {
        firebase.auth().signOut();
    })



    // Auth state

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
        } else {
            console.log('not logged in');
        }
    })
})();









let friend= document.getElementsByClassName('friend-a');

for (let index = 0; index < friend.length; index++) {
    const e = friend[index];
    e.addEventListener('click', function(){
        let activeChat = document.getElementsByClassName('active-chat')[0];
        activeChat.classList.remove("active-chat");
        this.classList.add("active-chat");
        let name = document.getElementsByClassName('current-friend-name')[0];
        name.innerText = this.lastElementChild.innerText;
        let img = document.getElementsByClassName('chat-img')[0];
        img.src = this.firstElementChild.firstElementChild.src;
    });
}


function sendMessage(event){
    if(event.keycode == 13){
        mess = document.getElementById('user-message');
        creatMess(mess.value);
        event.preventDefault();
    }
    return;
}

function creatMess (mess){
    let box = document.getElementsByClassName('chat-content')[0];
    let newMess = document.createElement("div");
    newMess.classList.add('message-send');
    newMess.innerHTML = mess;
    box.prepend(newMess);
}
