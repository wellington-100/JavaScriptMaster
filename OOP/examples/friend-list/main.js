const friends = [
    "johny",
    "marry",
    "pete"
]

const friendsPanel = document.getElementById("friendsPanel")
const searchInput = friendsPanel.children[1]

const renderFriends = (parentElement, friends) => {
    let ul = document.createElement("ul")
    friends.forEach(friend => {
        let li = document.createElement("li")
        li.innerText = friend
        ul.appendChild(li)
    });
    parentElement.appendChild(ul)

}

searchInput.onkeyup = () => {
    console.log(searchInput.value)

}


renderFriends(friendsPanel, friends)