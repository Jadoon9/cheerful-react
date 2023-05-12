import { RxDashboard } from "react-icons/rx";
import { IoVideocam } from "react-icons/io5";
import { BsFillPersonFill, BsTools } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { HiOutlineDocument } from "react-icons/hi";

import clientImage1 from "../assets/images/Ellipse 352.png";
import clientImage2 from "../assets/images/Ellipse 352 2.png";

export const navbarItems = [
  { id: 1, name: "Dashboard", icon: <RxDashboard />, link: "/" },
  { id: 2, name: "Appointments", icon: <IoVideocam />, link: "/appointments" },
  { id: 3, name: "Clients", icon: <BsFillPersonFill />, link: "/clients" },
  {
    id: 4,
    name: "Assesments",
    icon: <HiOutlineDocument />,
    link: "/assesments",
  },
  { id: 5, name: "Tools & Guides", icon: <BsTools />, link: "/tools-guides" },
  { id: 6, name: "Notes", icon: <HiOutlineDocument />, link: "/notes" },
  { id: 7, name: "Journal", icon: <HiOutlineDocument />, link: "/journal" },
];

export const clientAccordianDetails1 = [
  { id: 1, image: clientImage1, name: "Maurice Hilpert ", text: "Yet To View" },
  { id: 2, image: clientImage2, name: "Valerie Hickle ", text: "Viewed" },
  { id: 3, image: clientImage2, name: "Brandi Fadel IV ", text: "Shared" },
];
export const clientAccordianDetails2 = [
  { id: 4, image: clientImage1, name: "Maurice Hilpert " },
  { id: 5, image: clientImage2, name: "Valerie Hickle " },
  { id: 6, image: clientImage2, name: "Brandi Fadel IV " },
];

export const journalAccordianDetails = [
  { id: 7, title: "Online Consultation", text: "6 July 2022 @ 3:00 PM" },
  { id: 8, title: "Online Consultation", text: "6 July 2022 @ 3:00 PM" },
];
export const journalAccordianDetails1 = [
  { id: 9, title: "Entry - 01", text: "6 July 2022 @ 3:00 PM" },
  { id: 10, title: "Entry - 01", text: "6 July 2022 @ 3:00 PM" },
];
