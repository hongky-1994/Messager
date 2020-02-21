let friend= document.getElementsByClassName('friend-a');

for (let index = 0; index < friend.length; index++) {
    const e = friend[index];
    e.addEventListener('click', function(){
        console.log(this);
        
        let activeChat = document.getElementsByClassName('active-chat')[0];
        console.log(activeChat);
        
        activeChat.classList.remove("active-chat");
        this.classList.add("active-chat");
    });
}
