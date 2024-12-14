// Array of image paths
const images: string[] = Array.from({length: 18}, (_, index) =>
    require(`../../assets/portfolio/cosplay/thumbnails/${index + 1}.jpg`)
);

const fullsizeImages: string[] = Array.from({length: 18}, (_, index) =>
    require(`../../assets/portfolio/cosplay/${index + 1}.jpg`)
);

const description: string = "A dedicated photographer bringing characters and stories to life. \
Showcased here are moments where reality meets fantasy, capturing the essence of beloved characters in vivid, \
immersive scenes. Step into a world where fiction breathes, allowing others to experience and relive these iconic tales through each shot."

const instagramPage: string = "chibameta"

const backgroundImage = require('../../assets/main/mainpage-cosplay.jpg')


export const cosplaydata = {
    images, fullsizeImages, description, instagramPage, backgroundImage
}