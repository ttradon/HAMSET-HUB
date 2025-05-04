const showtext = document.getElementById("showtext")
const showbtn = document.getElementById("showbtn")
const colorbtn = document.getElementById("colorbtn")
const contacttext = document.getElementById("contacttext")
const igbtn = document.getElementById("ig")
const facebookbtn = document.getElementById("facebook")
var display = 0
var change = 0

const memeButton = document.getElementById("memebtn");
const memeContainer = document.getElementById("memeContainer");

const memeList = [
    "https://i.pinimg.com/236x/46/e8/96/46e8965db5d11f329f02df785accc81b.jpg",
    "https://i.pinimg.com/564x/85/bd/06/85bd06c324ea37c5eadec42c5927c154.jpg",
    "https://ih1.redbubble.net/image.488796000.1183/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqtJdwZfLuFCkaQD9Yfiny6jNTppCO33t9w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4CDBZd9NduHhIrbFiWRXsBtPwy-Qz5VoggQ&s",
    "https://image.marriage.com/advice/wp-content/uploads/2020/10/Love-Memes-15.jpg",
    "https://www.yourtango.com/sites/default/files/2020/love-meme-puppy.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIpDrDo_W8Yv6rqafwzyHd5CrR873SxPzVg&s",
    "https://image.marriage.com/advice/wp-content/uploads/2019/08/13-1607004908.jpg"
];


function show() {
    if (display == 0) {
        showtext.textContent = "คำคม : ไอ จาม มันไม่ดี.. งั้นขอไอจีได้ปะ"
        showbtn.style.backgroundColor = "#f00"
        showbtn.textContent = "Hide"

        display = 1
    }
    else {
        showtext.textContent = "คำคม : "
        showbtn.style.backgroundColor = "#0f0"
        showbtn.textContent = "Show"
        showtext.style.color = "#fff"
        display = 0
    }
}

function color() {
    if (change == 0 && display == 1) {
        showtext.style.color = "rgb(255, 0, 166)"
        colorbtn.style.backgroundColor = "#fff"
        colorbtn.style.color = "rgb(255, 0, 166)"
        change = 1
    }
    else {
        showtext.style.color = "#fff"
        colorbtn.style.backgroundColor = "rgb(255, 0, 166)"
        colorbtn.style.color = "#fff"
        change = 0
    }
}

function getRandomPosition() {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    return { x, y };
}

function getRandomMeme() {
    const index = Math.floor(Math.random() * memeList.length);
    return memeList[index];
}

function meme(){
    const img = document.createElement("img");
    img.src = getRandomMeme();

    const { x, y } = getRandomPosition();
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    memeContainer.appendChild(img);
    img.style.animation = "pop 1s forwards "
    img.style.zIndex = "-10"
    
}

function ig(){
    contacttext.textContent = "คอนแทค : MyIG"
}

function facebook(){
    contacttext.textContent = "คอนแทค : MyFacebook"
}