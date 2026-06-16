let pictureList = [
    "pic_1.png",
    "pic_2.png",
    "pic_3.png",
    "pic_4.png",
    "pic_5.png",
    "pic_6.png",
    "pic_7.png",
    "pic_8.png",
    "pic_9.png",
    "pic_10.png",
    "pic_11.png",
    "pic_12.png" 
];

function getPictures(i){
    return `<div class="single_picture">
                <img src="./assets/pictures/pic_thumb/${pictureList[i]}" alt="Bild">
            </div>`;            
}

function renderPictures() {
    let generatePictures = document.getElementById("picture_box");
    for (let i = 0; i < pictureList.length; i++){
        generatePictures.innerHTML += getPictures(i);
    }
}



