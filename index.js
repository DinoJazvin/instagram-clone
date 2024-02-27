const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a photo lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const smallImages = [
    profileSmallImageElVanGogh = document.querySelector('#profile-avatar-VanGogh'),
    profileSmallImageElCourbet = document.querySelector('#profile-avatar-Courbet'),
    profileSmallImageElDucreux = document.querySelector('#profile-avatar-Ducreux')
]

const NameAndLocation = [
    profileNameAndLocationElVanGogh = document.querySelector('#profile-name-VanGogh'),
    profileNameAndLocationElCourbet = document.querySelector('#profile-name-Courbet'),
    profileNameAndLocationElDucreux = document.querySelector('#profile-name-Ducreux')
]

const MainPhotos = [
    profileMainImageElVanGogh = document.querySelector('#main-image-VanGogh'),
    profileMainImageElCourbet = document.querySelector('#main-image-Courbet'),
    profileMainImageElDucreux = document.querySelector('#main-image-Ducreux')
]

const Comments = [
    commentELVanGogh = document.querySelector("#bottom-textid-VanGogh"),
    commentELCourbet = document.querySelector("#bottom-textid-Courbet"),
    commentELDucreux = document.querySelector("#bottom-textid-Ducreux")
]

// Assuming you have an <img> element with id "myImage"
const heartIconVanGogh = document.getElementById('heart-icon-VanGogh');
const mainImageClick = document.getElementById('main-image-VanGogh');
const heartIconCourbet = document.getElementById('heart-icon-Courbet');
const mainImageClickCourbet = document.getElementById('main-image-Courbet');
const heartIconDucreux = document.getElementById('heart-icon-Ducreux');
const mainImageClickDucreux = document.getElementById('main-image-Ducreux');

// Add a click event listener
heartIconVanGogh.addEventListener('click', function() {
    heartIconVanGogh.src = 'images/heart-filledin2.png';
    posts[0].likes =  posts[0].likes + 1
    addComment(commentELVanGogh, posts[0].likes, posts[0].username, posts[0].comment)
});

mainImageClick.addEventListener('dblclick', function() {
    heartIconVanGogh.src = 'images/heart-filledin2.png';
    posts[0].likes = posts[0].likes + 1
    addComment(commentELVanGogh, posts[0].likes, posts[0].username, posts[0].comment)
});

// Add a click event listener
heartIconCourbet.addEventListener('click', function() {
    heartIconCourbet.src = 'images/heart-filledin2.png';
    posts[1].likes =  posts[1].likes + 1
    addComment(commentELCourbet, posts[1].likes, posts[1].username, posts[1].comment)
});

mainImageClickCourbet.addEventListener('dblclick', function() {
    heartIconCourbet.src = 'images/heart-filledin2.png';
    posts[1].likes = posts[1].likes + 1
    addComment(commentELCourbet, posts[1].likes, posts[1].username, posts[1].comment)
});

// Add a click event listener
heartIconDucreux.addEventListener('click', function() {
    heartIconDucreux.src = 'images/heart-filledin2.png';
    posts[2].likes =  posts[2].likes + 1
    addComment(commentELDucreux, posts[2].likes, posts[2].username, posts[2].comment)
});

mainImageClickDucreux.addEventListener('dblclick', function() {
    heartIconDucreux.src = 'images/heart-filledin2.png';
    posts[2].likes = posts[2].likes + 1
    addComment(commentELDucreux, posts[2].likes, posts[2].username, posts[2].comment)
});


function addProfileSmallImage(element, avatar) {
    const imgHTML = `<section>
                        <img class="van-gogh-avatar-img" src="${avatar}">
                    </section>`;
    element.innerHTML += imgHTML;
}

function addMainPhoto(element, image){
    const imgHTML = `<img class="main-img" src="${image}">`;
    element.innerHTML += imgHTML;
}

function addComment(element, likes, username, comment){
    const imgHTML = `<p> ${likes} likes</p>
    <p id="comment-text">${username} <span>${comment}</span></p>`
    element.innerHTML = imgHTML;
}


function displayAll(){
    for(let i = 0; i < posts.length; i++){
        addProfileSmallImage(smallImages[i], posts[i].avatar)
        // addNameAndLocation(NameAndLocation[i], posts[i].name, posts[i].location)
        addMainPhoto(MainPhotos[i], posts[i].post)
        addComment(Comments[i], posts[i].likes, posts[i].username, posts[i].comment)
    }
}

displayAll()