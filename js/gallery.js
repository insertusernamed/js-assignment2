/*
Daniel Yevtushenko - 200528781
Jenna Deamer - 200529678
*/

// Getting html elements
let thumbnails = document.getElementsByClassName("thumbs");
let mainimg = document.querySelector("#bigthumb");
let caption = document.querySelector("#bigthumbcaption");
let changeBtn = document.querySelector("#changeButton");

let flowerCaptions = {
    flow1: "Dahlias were once used as a food source by indigenous people in Mexico and Central America, with their tubers being consumed as a nutritious and starchy root vegetable.",
    flow2: 'Bluebells are often associated with ancient woodland and folklore, and they are sometimes referred to as "fairy flowers" because it was believed that fairies used them to lure and trap humans in their enchanting bluebell-filled glades.',
    flow3: "Poppies are symbolic flowers associated with remembrance and tribute, particularly the red poppy, which is used to honor and remember fallen soldiers in various countries around the world.",
    flow4: "Narcissus, also known as daffodils, have long been a muse for poets, inspiring them with their vibrant yellow blooms and delicate fragrance, symbolizing renewal, rebirth, and the fleeting beauty of life.",
    flow5: "Sunflowers are heliotropic plants, meaning they can track and follow the movement of the sun across the sky.",
};
for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function () {
        mainimg.src = this.src.replace("small", "large");
        caption.textContent = flowerCaptions[this.alt];

        for (var i = 0; i < thumbnails.length; i++) {
            thumbnails[i].style.filter = "grayscale(1)";
        }
        this.style.filter = "grayscale(0)";
    });
}

changeBtn.addEventListener("click", function () {
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].src = "/images/competitive-shitting-shitting.gif";
    }
    changeBtn.style.backgroundImage =
        "url('/images/competitive-shitting-shitting.gif')";
    document.body.style.backgroundImage =
        "url('/images/competitive-shitting-shitting.gif')";
});
