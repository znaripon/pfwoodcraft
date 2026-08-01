const photos = [

    {
        file: "kga2.jpeg",
        chapter: 1
    },

    {
        file: "kga3.jpeg",
        chapter: 1
    },

    {
        file: "kga4.jpeg",
        chapter: 2
    },

    {
        file: "kga5.jpeg",
        chapter: 2
    },

    {
        file: "kga6.jpeg",
        chapter: 2
    },

    {
        file: "kga7.jpeg",
        chapter: 2
    },

    {
        file: "kga8.jpeg",
        chapter: 3
    },

    {
        file: "kga9.jpeg",
        chapter: 3
    },
    {
        file: "kga10.jpeg",
        chapter: 3
    }

];

let current = 0;

const front = document.getElementById("frontImage");
const middle = document.getElementById("middleImage");
const back = document.getElementById("backImage");
const caption = document.getElementById("photoCaption");
const storyTitle = document.getElementById("storyTitle");
const storyText = document.getElementById("storyText");

function image(index) {
    return "images/kitchens/" + photos[index].file;
}

function updateGallery() {

    const next1 = (current + 1) % photos.length;
    const next2 = (current + 2) % photos.length;

    front.src = image(current);
    middle.src = image(next1);
    back.src = image(next2);

    caption.textContent = photos[current].caption;

    switch (photos[current].chapter) {

    case 1:

        storyTitle.textContent =
            "A premium starting point...";

        storyText.innerHTML =
            `<em>What arrived as a van full of seemingly unrelated cabinets was carefully reconfigured
             into a layout tailored specifically to the customer's home.  Full-drawer cabinets wired with
             integrated led  lighting and oven housed in a central island</em>`;

        break;

    case 2:

        storyTitle.textContent =
            "The finished kitchen";

        storyText.innerHTML =
            `<em>Rich 40mm solid walnut worktops, backlit glazed corner cabinet hiding services,
             walnut upstands all round.  What a spectacle!  Flooring renewed with skirtings added.
             Wine-racks utilise redundant space by the fridge with tray storage.  As many of the 
             original cabinets as possible were re-purposed to maximise storage.
             Customer's bottle-fed gas hob replaced with induction for compliance.</em>`;

        break;

    case 3:

        storyTitle.textContent =
            "The extra touches";

        storyText.innerHTML =
            `<em>Larder with tambour door, pop-up sockets and stainless insert to complement fridge
            make this a truly practical space.</em>`;

        break;
}
}

function changePhoto(direction) {

    current += direction;

    if (current >= photos.length)
        current = 0;

    if (current < 0)
        current = photos.length - 1;

    updateGallery();
}

document.getElementById("nextPhoto")
.addEventListener("click", function () {
    changePhoto(1);
});

document.getElementById("previousPhoto")
.addEventListener("click", function () {
    changePhoto(-1);
});

document.querySelector(".photo-card-front")
.addEventListener("click", function () {
    changePhoto(1);
});

updateGallery();