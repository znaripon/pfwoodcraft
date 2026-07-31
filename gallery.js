const photos = [
    { file: "gp1.jpeg", caption: "New-build annexe. Studs installed according to floorplan" },
    { file: "gp2.jpeg", caption: "Noggins added..." },
    { file: "gp3.jpeg", caption: "Wide doorway for wheelchair access" },
    { file: "gp4.jpeg", caption: "Plasterboarding inside face before adding insulation" },
    { file: "gp5.jpeg", caption: "Finished and painted with double doors to utility" },
    { file: "gp6.jpeg", caption: "Old pine doors to be replaced and serving hatch blocked off" },
    { file: "gp7.jpeg", caption: "End result - click for more..." },
    { file: "gp8.jpeg", caption: "Serving hatch doors/frame removed and blocked up" },
    { file: "gp9.jpeg", caption: "...then plastered and painted" },
    { file: "gp10.jpeg", caption: "Built-in cupboard on other side removed" },
    { file: "gp11.jpeg", caption: "False pillar for wiring and to align walls" },
    { file: "gp12.jpeg", caption: "Platform over pips and power for fridge freezer" },
    { file: "gp13.jpeg", caption: "Painted, with back-lit fake window to fill gap above fridge" },
    { file: "gp14.jpeg", caption: "Wall mounted 85\" TV with all wiring chased in wall" },
    { file: "gp15.jpeg", caption: "Similar wall mounted TV with brush plates for cables" },
    { file: "gp16.jpeg", caption: "Separating bedroom for small en-suite" },
    { file: "gp17.jpeg", caption: "Boarded ready for skim (small door)" },
    { file: "gp18.jpeg", caption: "Built-in alcove shelves fitted with spray painted oak doors" },
    { file: "gp19.jpeg", caption: "MDF skirting going round the bend with kerfs" },
    { file: "gp20.jpeg", caption: "Another built-in fitted with custom MDF shaker doors" },
    { file: "gp21.jpeg", caption: "Damaged skirting repaired..." },
    { file: "gp22.jpeg", caption: "...to match existing." },
    { file: "gp23.jpeg", caption: "All caused by the cutest puppy!" },
    { file: "gp24.jpeg", caption: "Hallmark of quality" }
];

let current = 0;

const front = document.getElementById("frontImage");
const middle = document.getElementById("middleImage");
const back = document.getElementById("backImage");

const frontCard = document.querySelector(".photo-card-front");
const caption = document.getElementById("photoCaption");
const counter = document.getElementById("photoCounter");

const previousButton = document.getElementById("previousPhoto");
const nextButton = document.getElementById("nextPhoto");

function image(index) {
    return "images/gallery/" + photos[index].file;
}

function updateGallery() {
    const next1 = (current + 1) % photos.length;
    const next2 = (current + 2) % photos.length;

    front.src = image(current);
    middle.src = image(next1);
    back.src = image(next2);

    caption.textContent = photos[current].caption;
    counter.textContent = (current + 1) + " of " + photos.length;
}

function changePhoto(direction) {
    current += direction;

    if (current >= photos.length) {
        current = 0;
    }

    if (current < 0) {
        current = photos.length - 1;
    }

    updateGallery();
}

nextButton.addEventListener("click", function () {
    changePhoto(1);
});

previousButton.addEventListener("click", function () {
    changePhoto(-1);
});

frontCard.addEventListener("click", function () {
    changePhoto(1);
});

updateGallery();