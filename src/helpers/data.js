import { RxDashboard } from "react-icons/rx";
import { IoVideocam } from "react-icons/io5";
import { BsFillPersonFill, BsTools } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";

import clientImage1 from "../assets/images/Ellipse 352.png";
import clientImage2 from "../assets/images/Ellipse 352 2.png";

export const navbarItems = [
  { id: 1, name: "Dashboard", icon: <RxDashboard />, link: "/" },
  { id: 2, name: "Appointments", icon: <IoVideocam />, link: "/appointments" },
  { id: 3, name: "Clients", icon: <BsFillPersonFill />, link: "/clients" },
  { id: 4, name: "Assesments", icon: <GrNotes />, link: "/assesments" },
  { id: 5, name: "Tools & Guides", icon: <BsTools />, link: "/tools-guides" },
  { id: 6, name: "Notes", icon: <GrNotes />, link: "/notes" },
  { id: 7, name: "Journal", icon: <GrNotes />, link: "/journal" },
];

export const clientAccordianDetails1 = [
  { id: 1, image: clientImage1, name: "Maurice Hilpert ", text: "Yet To View" },
  { id: 2, image: clientImage2, name: "Valerie Hickle ", text: "Viewed" },
  { id: 2, image: clientImage2, name: "Brandi Fadel IV ", text: "Shared" },
];
export const clientAccordianDetails2 = [
  { id: 1, image: clientImage1, name: "Maurice Hilpert " },
  { id: 2, image: clientImage2, name: "Valerie Hickle " },
  { id: 2, image: clientImage2, name: "Brandi Fadel IV " },
];
