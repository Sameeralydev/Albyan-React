// src/Data/navbar.js
const navbarLinks = [
  {
    label: "About",
    link: "/about",
    children: [
      { label: "History of school", link: "/about-us" },
      { label: "Chairman Message", link: "/chairman-message" },
      { label: "Principal Message", link: "/principal-message" },
      { label: "Our Philosphy", link: "/our-philosphy" },
      { label: "Vision Mission & Core Values", link: "/vision-mission-core-values" },
    ],
  },
  {
    label: "Our Curriculum",
    link: "/services",
    children: [
      { label: "Montessori Wing", link: "/montessori-wing" },
      { label: "Digital Education", link: "/digital-education" },
      { label: "AI & Robotics", link: "/ai-robotics" },
      { label: "Steam", link: "/steam" },
      { label: "Competency-Based Education", link: "/competency-based-education" },
      { label: "Personality Development", link: "/personality-development" },
      { label: "Character Building", link: "/character-building" },
      { label: "Qur'an O Seerat As Syllabus", link: "/quran-o-seerat" },
    ],
  },
  {
    label: "Holistic",
    link: "/holistic",
    children: [
      { label: "Outdoor Educational Trips", link: "/outdoor-educational-trips" },
      { label: "Physical Development", link: "/physical-development" },
      { label: "Talent Hunt", link: "/intellectual-development" },
      { label: "Social & Emotional Development", link: "/intellectual-development" },
    ],
  },
  {
    label: "Teaching",
    link: "/teaching",
    children: [
        { label: "SLOF Teaching Methodology", link: "/slof-teaching-methodology" },
        { label: "Activity-Based Learning Environment", link: "/activity-based-learning-environment" },
    ],
  },
  {
    label: "Why Us",
    link: "/why-us",
    children: [
      { label: "Winning Edges", link: "/winning-edges" },
      { label: "R-n-D Department", link: "/rnd-department" },
      { label: "Training And Consultancy Programs", link: "/training-and-consultancy-programs" },
      { label: "Continues Professional  Development", link: "/continues-professional-development" },
      { label: "School-Home Connect", link: "/school-home-connect" },
      { label: "Leadership Programs", link: "/leadership-programs" },
      { label: "Co-Curricular Activities", link: "/co-curricular-activities" },
      { label: "Career Counseling And Child Psychology", link: "/career-counseling-and-child-psychology" },
    ],
  },
  {
    label: "Events & Celebrations",
    link: "/events",
    children: [
      { label: "Events and celebrations", link: "/events" },
      { label: "Our Achievements", link: "/achievements" },
    ],
  },
  {
    label: "Franchise offer",
    link: "/franchise-offer",
    children: [
      { label: "Franchise network", link: "/franchise-network" },
      { label: "Contact us", link: "/contact-us" },
    ],
  },
];

export default navbarLinks;
