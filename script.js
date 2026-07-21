
let pictureList = [
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

//* ----------- Bilder erzeugen

function renderPictures() {
    let generatePictures = document.getElementById("picture_box");
    for (let i = 0; i < pictureList.length; i++) {
        generatePictures.innerHTML += getPictures(i);
    }
}

function getPictures(i) {
    return `<button onclick="showFullRes(${i})">
                    <img class="single_picture" src="./assets/pictures/pic_full/${pictureList[i]}" alt="Thumbnail${i + 1}.png">
            </button>`;
}

//* ----------- Dialog öffnen Sektion

let dialogRef = document.getElementById("full_resolution_show_box");

function openFullResolutionDialog() {
    dialogRef.showModal();
    dialogRef.style.display = "flex";
}

function closeFullResolutionDialog() {
    dialogRef.close();
    dialogRef.style.display = "none";
}

//* ----------- Dialog mit Bildern versehen Funktionen

function showFullRes(i) {
    openFullResolutionDialog();
    let generateFullRes = document.getElementById("full_resolution_show_box");

    generateFullRes.innerHTML =
        `
            <div class="full_res_header">
                <h2>NAME OF PICTURE</h2>
                <button id="close_button" onclick="closeFullResolutionDialog()">
                <img class="close_button" src="./assets/buttons/close/close_button.svg" alt="close_button.svg">
                </button>
            </div>
            <img 
            class="single_full_res_img" 
            src="./assets/pictures/pic_full/${pictureList[i]}" 
            alt="fullResPicture.png"
            >
        <nav class="full_res_nav">
            <button class="nav_arrows" onclick="previousPicture()">
                <img class="nav_button_left" src="./assets/buttons/arrow/arrow_button.svg" alt="arrow_left.svg">
            </button>
            <p> ${i + 1}/12 </p>
            <button class="nav_arrows" onclick="showNextPicture()">
                <img class="nav_button_right" src="./assets/buttons/arrow/arrow_button.svg" alt="arrow_right.svg">
            </button>
        </nav>
    `;
}
