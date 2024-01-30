import Alma from "../images/client/alma.png";
import Btd from "../images/client/btd.png";
import Channel from "../images/client/channel.png";
import Dewdrops from "../images/client/dew-drops.png";
import Forum from "../images/client/forum.png";
import Frankross from "../images/client/frank-ross.png";
import Ganatra from "../images/client/ganatra.png";
import Jetex from "../images/client/jetex.png";
import Jiyaexim from "../images/client/jiyaexim.png";
import Jogajog from "../images/client/jogajog.png";
import Karukrit from "../images/client/karukrit.png";
import Klasse from "../images/client/klasse.png";
import Kripadirect from "../images/client/kripa-direct.png";
import Oscar from "../images/client/oscar.png";
import Packman from "../images/client/packman.png";
import Standrewch from "../images/client/st-andrews-chr.png";
import Trio from "../images/client/trio.png";
import Whatever from "../images/client/whatever.png";

const clientData = [
  { id: 1, image: Alma },
  { id: 2, image: Btd },
  { id: 3, image: Channel },
  { id: 4, image: Dewdrops },
  { id: 5, image: Forum },
  { id: 6, image: Frankross },
  { id: 7, image: Ganatra },
  { id: 8, image: Jetex },
  { id: 9, image: Jiyaexim },
  { id: 10, image: Jogajog },
  { id: 11, image: Karukrit },
  { id: 12, image: Klasse },
  { id: 13, image: Kripadirect },
  { id: 14, image: Oscar },
  { id: 15, image: Packman },
  { id: 16, image: Standrewch },
  { id: 17, image: Trio },
  { id: 18, image: Whatever },
];

const feedBackData = [
  {
    id: 1,
    name: "Kaushal Mohata",
    designation: "Director Mohata Electronics",
    comments:
      '"I am Kaushal Mohata representing my firm Mohata Electronics, we are into sales and service of Mobile phones and accessories. Recently, I got connected Rajev Taparia connected to Sellers of a Night Wear Brand. His concept of generating new clients with the help of social media promotions and handling page in best possible way was very impressive. His charges are customized as per client\'s requirement of work done and really value for money as well. He not only work in social media for brand visibility but also helped reaching products popularity to new clients. I highly recommend his services to all and wish him a great success in all his future endeavors."',
  },
  {
    id: 2,
    name: "Kamal Jain",
    designation: "IT - Admin. Forum Projects Pvt.Ltd.",
    comments:
      '"This will be our sixth year with Transinfo which has proved to be an excellent investment for our company. The support service is second to none. The service and support provided have been professional and the one great thing I appreciate from Transinfo is their constant support for our business needs."',
  },
  {
    id: 3,
    name: "Mr Durgadas Sarcar",
    designation: "ACEO, CCFC",
    comments:
      '"M/s. Transinfo, has been developing and managing the Club website and also the e-mail system. Their expertise is to our satisfaction and their service has been very proactive. We wish them all the success."',
  },
  {
    id: 4,
    name: "Sandip Kar",
    designation: "Director, SoftzSolutions, India",
    comments:
      "\"We've been in the Web business more than a decade. We've dealt with many domain and hosting companies. I consider Transinfo Solutions not just an excellent hosting company, but a valuable business partner. For over 8 years Transinfo has been incredibly reliable and responsive to all our domains and hosting needs.\"",
  },
  {
    id: 5,
    name: "Neeraj Poddar",
    designation: "Director, Nexus Connexions P Ltd.",
    comments:
      '"I would like to formally record my appreciation for the excellent service and flexibility that Transinfo provided during our website development process and setting our complex email requirements. This is 5th year with you. You were responsive to our needs and changing requirements in our mission critical emails management and the support that your technical team provided was second to none. Thanks!"',
  },
  {
    id: 6,
    name: "Pradipta Chatterjee",
    designation: "Icon Consultancy Services",
    comments:
      '"We highly appreciate the kind of support you have always offered and extended. Your hallmark has been promptness, precision and the keenness in delivering your services. Your suggestions for improving effectiveness of our website or for other issues have been worthy and helpful too. Your spontaneity and pace of support to grow our business is something we would always like to continue with. I am sure will keep up the standard or even exceed the same!"',
  },
  {
    id: 7,
    name: "Rahul Agrawal",
    designation: "CEO, Silver Drop",
    comments:
      '"Order generation is an important part of the entire business model which we operate on, on the internet. We need to be seen and recognised among hundreds of other websites. This is where Transinfo helps us. We have partnered with Transinfo Solutions to make sure that we are visible to the customers and if there is a requirement which they are searching for online, they must consider us as a reliable brand. They have provided us with excellent service and our orders though web is on a roll by the day."',
  },
  {
    id: 8,
    name: "Prakash Nahata",
    designation: "CEO, Anthroplace Consulting",
    comments:
      '"I am Prakash Nahata, CEO of Anthroplace Consulting. We are into recruitment and HR advisory services for the last 16 years. We have been availing the services of Rajiv Taparia of Transinfo Solutions for the last one year for our social media and google search. I am glad to say that the efforts of Transinfo has led to a lot of positive business leads for us and our business has grown by over 40% in the last one year. I strongly suggest everyone to avail of the web marketing services of transinfo to grow your business."',
  },
  {
    id: 9,
    name: "Anirudh Kanoria",
    designation: "CEO, Anant Finserv",
    comments:
      '"I am Anirudh Kanoria, a Business Associate of Motilal Oswal Securities Ltd. We deal in Shares,Currency Portfolio Management Services. I had a requirement of promoting an event and wanted to create awareness in the social media. I approached Rajiv Taparia of Transinfo Solutions for the same. He promoted the event very successfully on FaceBook and we got good response from many prospects. Apart from that the advertisement reached a good number of people from the correct audience group also. I am extremely impressed and would highly recommend Rajiv Taparia. I wish him good luck in all his endeavours. I am glad that BNI gave me an opportunity to meet to be associated with him. I wish him continued success."',
  },
  {
    id: 10,
    name: "Nirmal Bazaz",
    designation: "MD & CEO, Extra Cover Insurance",
    comments:
      '"I, am Nirmal Bazaz, Promoter & Director of Extra Cover Insurance Brokers Private Limited. In a span of a decade, we have grown to one of the leading insurance brokers for corporate world in Eastern India. We provide a complete insurance solution to a wide strata of social groups from personal line of insurance to large corporates. Recently, we changed our mail service from Rediffmail to Gmail for which we were looking for someone who can suggest us the best solution for this, because our technical person was saying that our mailing services will get interrupted during the shifting. Then we contacted Mr. Rajiv Taparia on urgent bases that provided us the best solution and played a very vital role in the whole process. He personally worked late nightly to solve the issue. Because of him the entire transition from one service provider to another was very smooth and hassle-free. He executed the whole process within a day without interruption in our business functions. I personally recommended Mr.Rajiv Taparia as an all-in-one solution for any GOOGLE related issue to all BNI members. I sincerely thank him from the core of my heart for giving us the service and wish him and his Company a great success. Nirmal Bazaz Managing Director & CEO I wish to convey to you compliments from all our staff including the European staff for the extremely smooth and efficient manner in which you enabled the migration. It is a pleasure to work with professionals like you."',
  },
  {
    id: 11,
    name: "Bikas Chandra Goenka",
    designation: "Coach & Trainer",
    comments:
      '"Hi, I am Bikas Chandra Goenka Coach & Trainer. Recently I referred Rajev Taparia of Transinfo Solutions to my acquaintances for Digital Marketing and Social Media Management Services. And I must tell u he has provided remarkable services. He is reasonable and one can be assured of value for money when dealing with his company. I would definitely recommend them to those who are in requirement of such similar digital marketing services. Thanking you, Yours sincerely, Bikas Ch. Goenka"',
  },
  {
    id: 12,
    name: "Rohit Agarwal",
    designation: "Director Jai Ambey Cargo Movers",
    comments:
      '"I, CA Rohit Agarwal, Director of Jai Ambey Cargo Movers Pvt Ltd, and we are into Commercial Transportation. I would like to thank Mr Rajiv Taparia, representing his company, TRANSINFO SOLUTIONS one of the best service providers for digital marketing. I referred him to one of my friend who is the owner of JIS Group for digital promotion. I was so amazed with the response he got and closed the business very soon with utmost priority given to my friend. I am glad to have met Mr Rajiv Taparia through BNI and wish him all the best in all their future endeavors. Thanking you Yours sincerely ROHIT AGARWAL JAI AMBEY CARGO MOVERS PVT LTD"',
  },
  {
    id: 13,
    name: "Deepa Bagaria",
    designation: "Chief Designer JJ Studio",
    comments:
      '"I am Deepa Bagaria founder of JJ Studio. We are into Interior Designing and execution of the projects from scratch till the end on PAN India basis. We do flat, bungalows, Duplex, penthouse, etc. We convert your house into a beautiful home. I have been working with Mr. Rajiv Taparia of Transinfo Solutions for my digital marketing for the last 5 years and also recommending him to my clients. I have been very satisfied with his promotion services and my enquiries after digital promotion increased many fold in the last few years. It turned out that at least 10% of these enquiries turned into business. I wish Rajiv good luck in all his endeavours. I am glad that we met in this forum and feel happy to be associated with him. I wish him continued success. Thanks & Regards, Deepa Bagaria / JJ Studio"',
  },
  {
    id: 14,
    name: "Hardika Panchamia",
    designation: "Pulse Diagnostics Pvt. Ltd.",
    comments:
      '"Myself Hardika Panchamia, representing Pulse Diagnostics Pvt. Ltd. We are a one-stop solution for all your Medical and Diagnostic needs. We are in regular requirement for Social Media Activation for our Centers. M/s. Transinfo Solutions are ably handling our requirements as per our requirements. Their team is efficient in terms of Creatives, Promotions or Lead Generations. I would recommend Mr Rajev Taparia to everyone, who are looking for a reliable partner for their Social Media and Digital Marketing Services. Thanks Hardika Panchmia"',
  },
];

const clientPageData = {
  clientData: clientData,
  feedBackData: feedBackData,
};
export default clientPageData;
