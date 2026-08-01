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
        chapter: 1
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
    }

];

let current = 0;

const front = document.getElementById("frontImage");
const middle = document.getElementById("middleImage");
const back = document.getElementById("backImage");

const caption = document.getElementById("photoCaption");
const counter = document.getElementById("photoCounter");

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

    counter.textContent =
        (current + 1) + " of " + photos.length;
        switch (photos[current].chapter)
{

    case 1:

        storyTitle.textContent =
            "The Opportunity";

        storyText.innerHTML =
            "<em>Your first narrative goes here...</em>";

        break;

    case 2:

        storyTitle.textContent =
            "The Transformation";

        storyText.innerHTML =
            "<em>Your second narrative goes here...</em>";

        break;

    case 3:

        storyTitle.textContent =
            "The Result";

        storyText.innerHTML =
            "<em>Your final narrative goes here...</em>";

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