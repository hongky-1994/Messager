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
