import React from "react";
import Card from "./Cards/Card";
import "./Cards/Card.scss";
import "./Home.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import Service from "../Service/Service";
import Banner from "../Banner/Banner";
import Inquiry from "../Inquiry/Inquiry";

const Home = () => {
  const Details = [
    {
      id: 1,
      name: 'student-visa',
      title: "Student Visa",
      desc: " Expert guidance for a smooth student visa application. We help you navigate every step.",
      icon: <FaArrowRightLong />,
    },
    {
      id: 2,
      name: 'visitor-visa',
      title: "Visitor Visa",
      desc: "Explore new destinations with ease. Our visitor visa services provide personalized support",
      icon: <FaArrowRightLong />,
    },
    {
      id: 3,
      name: 'work-visa',
      title: "Work Visa",
      desc: "Achieve professional success abroad with our personalized work visa services.",
      icon: <FaArrowRightLong />,
    },
    {
      id: 4,
      name: 'passport',
      title: "Passport",
      desc: " Get your passport quickly and easily. Our expert team guides you through the application process.",
      icon: <FaArrowRightLong />,
    },
    {
      id: 5,
      name: 'pcc',
      title: "Pcc",
      desc: "Which is require document for abroad",
      icon: <FaArrowRightLong />,
    },
    {
      id: 6,
      name: 'aadhar-card',
      title: "Aadhar Card",
      desc: " Our services offer comprehensive assistance for resolving Aadhaar card issues.",
      icon: <FaArrowRightLong />,
    },
    {
      id: 7,
      name: 'pancard',
      title: "Pan Card",
      desc: " Our expert team helps you navigate the PAN card application process quickly and easily.",
      icon: <FaArrowRightLong />,
    },
    {
      id: 8,
      name: 'election-card',
      title: "Election Card",
      desc: " We provide personalized support for updating your election card details.",
      icon: <FaArrowRightLong />,
    },
  ];

  return (
    <div className="home">
      <Banner />
      <Inquiry />
      <div className="cards-container anim-card">
        {Details.map((obj, index) => {
          return <Card obj={obj} key={index} />;
        })}
      </div>

      <Service />

    </div>
  );
};

export default Home;
