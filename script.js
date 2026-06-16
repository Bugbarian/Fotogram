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

let pictureListFullRes = [
    "pic_1_full.jpg",
    "pic_2_full.jpg",
    "pic_3_full.jpg",
    "pic_4_full.jpg",
    "pic_5_full.jpg",
    "pic_6_full.jpg",
    "pic_7_full.jpg",
    "pic_8_full.jpg",
    "pic_9_full.jpg",
    "pic_10_full.jpg",
    "pic_11_full.jpg",
    "pic_12_full.jpg" 
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



