import { SocialLink } from "../../types";
import concertMetadata from "./concertMetadata.json";

// Array of image paths
const images: string[] = Array.from({length: 18}, (_, index) =>
    require(`../../assets/portfolio/concerts/${index + 1}.jpg`)
);

const fullsizeImages: string[] = Array.from({length: 18}, (_, index) =>
    require(`../../assets/portfolio/concerts/${index + 1}.jpg`)
);

const description: string = "A passionate photographer dedicated to capturing the energy and \
essence of live music. Showcased here are moments that bring \
forward the concert experience to life - allowing others to \
relive the exhilaration and atmosphere of these unforgettable performances."

const instagramPage: string = "omerams.live"

// Map each image index to its metadata if it exists
const socialLinks: SocialLink[] = Array.from({ length: 18 }, (_, index) => {
    const photoNumber = (index + 1).toString();
    const meta = (concertMetadata as Record<string, SocialLink>)[photoNumber];
    return meta || { name: "", link: "" };
});

const backgroundImage = require('../../assets/main/mainpage-bw_optimized.webp')

export const concertdata = {
    images, fullsizeImages, description, instagramPage, backgroundImage, socialLinks
}