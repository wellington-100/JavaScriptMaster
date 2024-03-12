let likeCount = 0
const renderLikeBtn = (rootElement) => {
    let btn = document.createElement('button')
    btn.onclick = () => {
        likeCount++
        btn.innerText = `${likeCount} LIKE`
        likePost
    }
    btn.innerText = `${likeCount} LIKE`
    rootElement.appendChild(btn) 
}

// HW1: like's count
const likePost = () => {
    alert() 
}

renderLikeBtn(document.getElementById('post'))



/*
DOM

document
    |
    +-- html
         |
         +-- head
         |                 document.getElementById('post')
         |                  /
         +-- body       rootElement
              |           /
              +-- div#post
                    |
                    |
                    |
                    +-- btn
                         \
                        reference
                            \
                           button
                             |
                             +-- innerText: "Like"
                             +-- onclick: likePost
                                             |
                                             v
                                            ( ) => {alert()}

*/