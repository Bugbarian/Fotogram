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

function getPictures(i) {
    return `<button onclick="showFullRes(${i})">
                    <img class="single_picture" src="./assets/pictures/pic_thumb/${pictureList[i]}" alt="Thumbnail.png">
            </button>`;
}

function renderPictures() {
    let generatePictures = document.getElementById("picture_box");
    for (let i = 0; i < pictureList.length; i++) {
        generatePictures.innerHTML += getPictures(i);
    }
}

//* ----------- DIALOG Sektion

let dialogRef= document.getElementById("full_resolution_show_box");

function openFullResolutionDialog() {
    dialogRef.showModal();
}

function closeFullResolutionDialog() {
    dialogRef.close();
}

//* ----------- Full Res Box Funktionen

function showFullRes(i) {
    openFullResolutionDialog();
    let generateFullRes = document.getElementById("full_resolution_show_box");

    generateFullRes.innerHTML =
        `
        <header>
        <h2>Full Resolution</h2>
        <button id="modal_button" onclick="closeFullResolutionDialog()">X</button>
        </header>
        <img 
            class="single_full_res" 
            src="./assets/pictures/pic_full/${pictureListFullRes[i]}" 
            alt="fullResPicture.png"
        >
        <nav>
            <p>links</p>
            <p>rechts</p>
        </nav>
    `;
}