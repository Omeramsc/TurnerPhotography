import cosplayMetadata from "./cosplayMetadata.json";
import { SocialLink } from "../../types";

const images: string[] = Array.from({ length: 32 }, (_, index) =>
    require(`../../assets/portfolio/cosplay/thumbnails/${index + 1}.jpg`)
);
// const images: string[] = [require('../../assets/portfolio/cosplay/thumbnails/1.jpg')];

const fullsizeImages: string[] = Array.from({ length: 32 }, (_, index) =>
    require(`../../assets/portfolio/cosplay/${index + 1}.jpg`)
);

const description: string = "My photography journey began in 2010. I thrive on collaboration, working with various cosplayers to merge reality and fantasy into immersive worlds. My goal is simple: to tell your story vividly and authentically.\n\nI'd love to connect and create something amazing together!"

const instagramPage: string = "chibameta"

// Map each image index to its metadata if it exists
const socialLinks: SocialLink[] = Array.from({ length: 32 }, (_, index) => {
    const photoNumber = (index + 1).toString();
    const meta = (cosplayMetadata as Record<string, SocialLink>)[photoNumber];
    return meta || { name: "", link: "" };
});

const backgroundImage = require('../../assets/main/mainpage-cosplay2_optimized.webp')


export const cosplaydata = {
    images, fullsizeImages, description, instagramPage, backgroundImage, socialLinks
}