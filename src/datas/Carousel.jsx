import ScamImage from "../images/Scam_01.jpg";
import WebDevelopmentImage from "../images/res-webdevelopment.png";
import SocialMediaImage from "../images/img2.png";
import GoogleAdsImage from "../images/gogadwrds.png";
import GoogleWorkspaceImage from "../images/googforwrk.png";

const carouselData = [
  {
    title: "Scam Alert",
    para: "Beware of scam!",
    image: ScamImage,
    alt: "ScamImage",
  },
  {
    title: "Website Development",
    para: "Creative and responsive website designs.",
    image: WebDevelopmentImage,
    alt: "WebDevelopmentImage",
    link: "/services/websitedevelopment",
  },
  {
    title: "Social Media Management",
    para: "We create an online BUZZ for your business.",
    image: SocialMediaImage,
    alt: "SocialMediaImage",
    link: "/services/socialmediamanagement",
  },
  {
    title: "Google Ads",
    para: "Advertise in Google, get notified and grow your business.",
    image: GoogleAdsImage,
    alt: "GoogleAdsImage",
    link: "/services/googleads",
  },
  {
    title: "Google Workspace",
    para: "Email,Collaboration Tools and More.",
    image: GoogleWorkspaceImage,
    alt: "GoogleWorkspaceImage",
    link: "/services/googleworkspace",
  },
];

export default carouselData;
