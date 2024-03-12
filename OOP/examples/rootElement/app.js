



// profile data of a user
const profile = {
    userName: "johny",
    avatar: "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Prescription02&facialHairType=MoustacheFancy&facialHairColor=Blonde&clotheType=BlazerShirt&eyeType=Default&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Light",
    online: true,
    friendsCount: 1000,
    rating: 4.5
}

// PROFILE UI COMPONET
const renderProfile = (profile) => {
    const rootElement = document.getElementById("profileRootElement")
    let h3 = document.createElement("h3")
    h3.innerText = profile.userName
    rootElement.appendChild(h3)
}
//------------
renderProfile(profile)





/*
CODE SPLIT
    > UI (view/template) + COMPONET
    > MODEL (data/domain)
    > SERVICES (api/storage/...)
    > ...


WINDOW
-------------------------------

document
    |
    .
    .
    +--- body
          |
          +-- nav               rootElement
          |                        |
          |                        v
          +-- div#profileRootElement
          |         |
          |         +-- h3
          |              |
          |              +-- innerText <---- profile.username
          |
          |
          +-- footer

MEMORY
-------------------------------
h3  ---->

*/