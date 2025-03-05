import BothPhoto from "../../Images/Both.png"; // ✅ Ensure correct path
import rctImg from "../../Images/REACT.png";
import fbImg from "../../Images/Firebase.png";
import apImg from "../../Images/restapi.png";
import dcImg from "../../Images/docker-mark-blue.png";
import lrlImg from "../../Images/laravel.png";
import spoonImg from "../../Images/spoonacular.png"
import viewImg from '../../Images/View.png';
import listImg from '../../Images/List.png';
import jrnImg from '../../Images/journal.png';
import adminImg from '../../Images/admin.png';
import chatImg from '../../Images/Customer-Chatbot.png';
import inventImg from '../../Images/Inventory.png';

export const projects = [
    {
        id: 1,
        name: "WasteNot",
        description: "A Recommender System for Sustainable Restaurant Waste Management and Consumer is a mobile application designed to minimize restaurant food waste by efficiently tracking inventory and recommending dishes based on available ingredients. The project involved gathering data on restaurant inventory management and food preparation, implementing tracking mechanisms for ingredient usage, and utilizing data analysis techniques to evaluate consumer preferences, sales patterns, and inventory trends for accurate ingredient recommendations. The system was developed using React Native, React.js, Google Maps API, Google Firebase (NoSQL database for the backend), and Spoonacular API to ensure seamless functionality and real-time data processing.",
        techStack: ["React.js", "React Native", "Google Firebase", "Spoonacular API"],
        techImg: [
            rctImg,
            fbImg,
            apImg,
            spoonImg,
        ],
        projectImg: [
            BothPhoto,
            adminImg,
            chatImg,
            inventImg
        ],
        keyFeatures: [
            "Tracks restaurant inventory and food preparation.",
            "Recommends dishes based on available ingredients.",
            "Evaluates consumer preferences and sales patterns.",
        ],
        image: BothPhoto,
    },
    {
        id: 2,
        name: "Diaryhea",
        description: "A personal journal platform feature for employees to express their feelings, emotions, and opinions on their day-to-day experiences, this is a simple yet valuable tool for fostering employee well-being, engagement, and overall satisfaction within an organization.",
        techStack: ["React.js", "Php Laravel", "Docker Compose"],
        techImg: [
            rctImg,
            lrlImg,
            dcImg,
        ],
        projectImg: [
            jrnImg,
            viewImg,
            listImg,
        ],
        keyFeatures: [
            "Allows employees to journal their experiences.",
            "Fosters well-being and engagement.",
            "Enhances employee satisfaction.",
        ],
        image: jrnImg,
    },
];
