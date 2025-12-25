import ChairmanImg from "../assets/chairman.png";
import principal from "../assets/principal.png";
import campushead from "../assets/campushead.png";
import { BiBorderAll } from "react-icons/bi";
import { radialGradient } from "framer-motion/client";
export const messages = {
  Chairman: {
      title: "قَدْ أَفْلَحَ مَن زَكَّاهَا • وَقَدْ خَابَ مَن دَسَّاهَا!",
    description: `Aslamu Alaikum!
    It’s my honor to welcome you at Al-Byan, where we believe education is not merely about grades, but about building character that reflects Islamic values, nurturing curiosity and inspiring purpose. Our mission is to raise learners who think critically, act with integrity, and serve humanity with modesty.
In a rapidly evolving world, we encourage our students to embrace creativity, adapt to challenges and uphold moral strength. Through STEAM-based learning and continuous mentorship, they gain the skills and confidence needed to thrive in the 21st century.
// `,
    image: ChairmanImg,
    owner: "Sahibzada Rafique Ahmed Mujadadi",
    designation: "Campus Head",
    imageStyle: {
      height: "305px",
      right: "5vw",
      bottom: "5px",
    },
  },

  Principal: {
    title: "وَمَن يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا",
    description: `Aslamu Alikum! 
    It gives me immense joy to welcome you to Al-Byan, a place where minds are inspired, hearts are nurtured, and dreams take flight. Here, we don’t just teach—we transform. Our learners become globally competent, morally grounded, and intellectually curious—rooted in Islamic values
At Al-Byan, innovation and spirituality walk hand in hand. Every classroom buzz with curiosity, every corridor echoes with creativity, and every face reflects the light of knowledge and character. 
To our students—this is your time to explore, create, and excel. To our visitors and parents—you are witnessing a community dedicated to excellence, faith, and progress. Together, we are building a legacy of learning that shines beyond boundaries.
`,
    image: principal,
    owner: "Ma'am Nadeela",
    designation: "Principal",
    imageStyle: {
      height: "320px",
      right: "4.2vw",
      bottom: "3px",
    },
  },

  "Campus Head": {
    title: "  هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ",
    description: `Aslamu Alikum!
Welcome to Al-Byan — where minds are inspired, and hearts are guided.
At Al-Byan, we unite the light of knowledge with the strength of faith to cultivate principled, innovative, and confident learners ready to lead the future. We believe that education is not just about achievement — it’s about building character, inspiring purpose, and empowering dreams.
With dedicated faculty, modern facilities, and vibrant co-curricular programs, we ensure holistic growth — spiritual, emotional, and academic.
Together, we strive to shape a generation grounded in values and equipped with 21st-century skills — ready to serve humanity with excellence and integrity.
`,
    image: campushead,
    owner: "Muhammad Waseem Ahmad",
    designation: "Chairman",
    
    imageStyle: {
      height: "290px",
      right: "6.3vw",
      bottom: "20px",
    },
    
  },
};
