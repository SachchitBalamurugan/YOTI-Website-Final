import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Logo from "./images/Logo.png";
import involve from "./images/involve.png";
import React, { useRef } from "react";
import TrashV from "./images/TrashV.png";
import PartyV from "./images/PartyV.png";
import FishV from "./images/FishV.png";
import Underwater from "./images/logoYOTIf.png";
import Rifah from "./images/Rifah.png";
import Shritan from "./images/Shritan.png";
import Armaan from "./images/Armaan.png";
import Sachchit from "./images/Sachchit2.png";
import { motion } from "framer-motion";

export default function About() {
  const boxContainerRef = useRef(null);

  const scrollLeft = () => {
    if (boxContainerRef.current) {
      boxContainerRef.current.scrollLeft -= 200; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (boxContainerRef.current) {
      boxContainerRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
    }
  };

  return (
    <Axis>
      <Wrapper>
        <Spline
          className="spline"
          scene="https://prod.spline.design/klxmwKRVNc-qOnPG/scene.splinecode"
        />
        <Content>
          <Menu>
            <li>
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "100px", height: "100px" }}
              />
            </li>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="./AboutUs">About Us</a>
            </li>
            <li>
              <a href="/gala">Galla</a>
            </li>
            <li>
              <a href="/content">Content</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/donate">Donate</a>
            </li>
            <li>
              <a href="/involve">Get Involved</a>
            </li>
          </Menu>

          <h1>About Us</h1>
          <p>
            At YOTI (Youth Opportunities in Tech Innovation), we are dedicated
            to bridging the digital divide by empowering young individuals
            through computer science education. Our mission is to equip the next
            generation with the skills and confidence they need to excel in the
            technology sector and become leaders of innovation.
          </p>
          <button>
            <img
              src={involve}
              alt="involve"
              style={{ width: "30px", height: "30px" }}
            />
            Get Involved Now
          </button>
          <divNEW
            style={{
              height: "600px",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "#0087b8",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "'Spline Sans', sans-serif",
                fontSize: "55px",
                margin: "20px", // Adjust the margin as needed
                transform: "translateY(70px)",
                zIndex: 101,
              }}
            >
              96% of learners surveyed report achieving higher grades with
              shorter learning times when using Shiken AI
            </h2>
            <h2
              style={{
                fontFamily: "'Catamaran', sans-serif",
                fontSize: "155px",
                margin: "20px", // Adjust the margin as needed
              }}
            >
              "
            </h2>
            <p
              style={{
                fontFamily: "'Spline Sans', sans-serif",
                fontSize: "20px",
                color: "#555", // You can change the color if needed
                maxWidth: "70%",
                transform: "translateY(-140px)",
              }}
            >
              "Shiken is awesome! Your site helped me ace my med school exams
              and I've now started to create my own questions as an examiner to
              share with my friends taking the exams next year.”
            </p>
            <p
              style={{
                fontFamily: "'Catamaran', sans-serif",
                fontSize: "20px",
                color: "#0087b8", // You can change the color if needed
                maxWidth: "70%",
                transform: "translateY(-100px)",
              }}
            >
              - Sachchit Balamurugan
            </p>
          </divNEW>
          <section
            style={{
              backgroundColor: "#88adb3",
              padding: "20px",
              margin: "-40px 0",
            }}
          >
            <h1
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                margin: "20px auto",
              }}
            >
              Meet Our Team
            </h1>
            <figure
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap", // Allow wrapping of elements
              }}
            >
              {/* Image 1 */}
              <motion.figure
                whileHover={{ scale: 1.05 }}
                style={{
                  textAlign: "center",
                  position: "relative",
                  boxShadow: "0px 5px 10px rgba(0, 135, 184, 0.5)",
                  width: "260px",
                  borderRadius: "20px",
                  margin: "10px", // Add margin for spacing when stacked
                }}
              >
                <img
                  src={Sachchit}
                  alt="Image 1"
                  style={{
                    width: "100%",
                    margin: "25px 0",
                    maxWidth: "200px",
                    marginBottom: "10px",
                    borderRadius: "10px",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className={HoverStyles}
                />
                <figcaption
                  style={{
                    color: "white",
                    fontFamily: "'Spline Sans', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Sachchit Balamurugan (CEO/Founder)
                </figcaption>
                <figcaption
                  style={{
                    color: "white",
                    fontFamily: "'Spline Sans', sans-serif",
                    textAlign: "left",
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                >
                  <br /> I'm Sachchit Balamurugan, the CEO of YOTI and a high
                  school Junior with a diverse background in Research, Computer
                  Science, Health care, and Machine Learning. <br /> <br /> I
                  have done independent research that focused on predicting
                  Adrenocortical Carcinoma using hyperparameter-optimized
                  Conventional Neural Networks (CNNs). By employing Optuna for
                  model optimization, I achieved higher accuracy with a
                  pretrained MobileNetV2 compared to existing methods. My work
                  won 3rd at the Forth Worth Regional Science Fair, and was a
                  qualifier at the Texas State Science and Engineering Fair
                  (TXSEF) and a RISE Global challenge finalist (Out of thousands
                  of applications). <br /> <br /> I'm engaged in Quantum
                  Chemistry research at Southern Methodist University,
                  investigating Triaminopyrimidine (TAP) as a potential ancestor
                  of RNA. Utilizing geometry optimization calculations and
                  frequency analysis, we aim to validate TAP's significance in
                  biochemical evolution. Our research continues to evolve as we
                  gather and analyze additional data. <br />.
                </figcaption>
              </motion.figure>
              {/* Image 2 */}
              <figure
                style={{
                  textAlign: "center",
                  position: "relative",
                  boxShadow: "0px 5px 10px rgba(0, 135, 184, 0.5)",
                  width: "260px",
                  borderRadius: "20px",
                  margin: "10px",
                }}
              >
                <img
                  src={Armaan}
                  alt="Image 2"
                  style={{
                    width: "100%",
                    margin: "25px 0",
                    maxWidth: "200px",
                    marginBottom: "10px",
                    borderRadius: "10px",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className={HoverStyles}
                />
                <figcaption
                  style={{
                    color: "white",
                    fontFamily: "'Spline Sans', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Armaan Sharma <br /> (Co-Founder)
                </figcaption>
                <figcaption
                  style={{
                    color: "white",
                    fontFamily: "'Spline Sans', sans-serif",
                    textAlign: "left",
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                >
                  <br /> Hi! I am Armaan Sharma, an incoming senior in high
                  school, and the co-founder of this organization. I am a
                  motivated teenager interested in the fields of computer
                  science and business, and I am currently learning machine
                  learning and financial hypotheses, to figure out a bridge
                  between my two passions. I have a heart for volunteering and
                  teaching. <br /> <br /> I have experience doing research for
                  competitions such as the Dallas Regional Science and
                  Engineering Fair, where our work got third place recognition.{" "}
                  <br /> <br /> I am on the software development team of various
                  organizations, and I have experience working on both the
                  frontend and backend of many platforms. I have also played
                  piano for around 10 years now, and it is a huge passion of
                  mine.{" "}
                </figcaption>
              </figure>
              {/* Image 3 */}
              <figure
                style={{
                  textAlign: "center",
                  position: "relative",
                  boxShadow: "0px 5px 10px rgba(0, 135, 184, 0.5)",
                  width: "260px",
                  borderRadius: "20px",
                  margin: "10px",
                }}
              >
                <img
                  src={Rifah}
                  alt="Image 3"
                  style={{
                    width: "100%",
                    margin: "25px 0",
                    maxWidth: "200px",
                    marginBottom: "10px",
                    borderRadius: "10px",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className={HoverStyles}
                />
                <figcaption
                  style={{
                    color: "white",
                    fontFamily: "'Spline Sans', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Rifah Maulidya <br /> (Programing Lead and Mentor)
                </figcaption>
                <figcaption
                  style={{
                    color: "white",
                    fontFamily: "'Spline Sans', sans-serif",
                    textAlign: "left",
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                >
                  <br /> Hi everyone! My name is Rifah Maulidya and you can call
                  me Rifah. I graduated from senior high school in Indonesia
                  majoring in natural science. <br /> <br /> In my spare time, I
                  enjoy reading psychology books and hopefully I can add more
                  topics like CS and robotics to be added in my booklist!
                  Currently reading Superintelligence book. <br /> <br />{" "}
                  Another activity that I always do is coding, I make my own
                  models using dataset from Kaggle or other online resources. I
                  have made bunch of it specifically with Python that I have
                  keep it on GitHub and Google Collab.
                  <br /> <br /> For fun, I'm watching K-dramas or music videos
                  of my favorite kpop group, I'm a big fan of them! Sometimes I
                  go with friends and play games in our local mall.
                </figcaption>
              </figure>
              {/* Image 4 */}
              <figure
                style={{
                  textAlign: "center",
                  position: "relative",
                  boxShadow: "0px 5px 10px rgba(0, 135, 184, 0.5)",
                  width: "260px",
                  borderRadius: "20px",
                  margin: "10px",
                }}
              >
                <img
                  src={Shritan}
                  alt="Image 4"
                  style={{
                    width: "100%",
                    height: "260px",
                    margin: "25px 0",
                    maxWidth: "200px",
                    marginBottom: "10px",
                    borderRadius: "10px",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className={HoverStyles}
                />
                <figcaption
                  style={{
                    color: "white",
                    fontFamily: "'Spline Sans', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Shritan Khammamkar <br /> (Outreach Lead)
                </figcaption>
                <figcaption
                  style={{
                    color: "white",
                    fontFamily: "'Spline Sans', sans-serif",
                    textAlign: "left",
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                >
                  <br /> Hello! My name is Shritan Khammamkar, and I'm an
                  incoming senior at Independence High School. I'm interested in
                  the fields of physics and engineering, particularly aerospace,
                  and I'm enthusiastic about technology in this field as well.
                  I'm interested in robotics and engineering mechanics too!
                  <br /> <br /> I also play bass clarinet and am in my second
                  year as a section leader for the Independence High School band
                  program, and I have been learning carnatic vocals for almost
                  13 years and counting. In my free time, I enjoy hanging out
                  with my friends and family, playing video games, and going to
                  the park. I'm very excited to work with this great team!
                </figcaption>
              </figure>
            </figure>
          </section>
        </Content>
        <div
          style={{
            height: "800px",
            backgroundColor: "#2e353d",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Content on the right */}
          <div style={{ marginLeft: "50px", marginTop: "150px" }}>
            {" "}
            {/* Adjust the margin as needed */}
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "70px",
                color: "#61999c",
                margin: "-50px 0",
              }}
            >
              What We Do
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "white",
                margin: "60px 0",
                width: "500px",
              }}
            >
              Through a combination of resources, training programs, and
              mentorship initiatives, we provide young people with the tools and
              support they need to succeed in the digital age. From coding
              workshops and online courses to hands-on projects and internships,
              we offer a comprehensive learning experience that nurtures
              creativity, critical thinking, and problem-solving skills.
            </p>
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "30px",
                color: "#61999c",
                margin: "-50px 0",
              }}
            >
              Why Choose YOTI
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "white",
                margin: "60px 0",
                width: "500px",
              }}
            >
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li style={{ marginBottom: "20px" }}>
                  <strong>Expertise:</strong> Our team consists of experienced
                  educators, industry professionals, and passionate volunteers
                  who are committed to providing high-quality education and
                  mentorship.
                </li>
                <li style={{ marginBottom: "20px" }}>
                  <strong>Community:</strong> We believe in the power of
                  community and strive to create a supportive and inclusive
                  environment where every individual feels valued and empowered
                  to succeed.
                </li>
                <li style={{ marginBottom: "20px" }}>
                  <strong>Innovation:</strong> Technology is constantly
                  evolving, and so are we. We stay ahead of the curve by
                  embracing new trends, technologies, and teaching methodologies
                  to ensure our students are prepared for the future.
                </li>
              </ul>
            </p>
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "30px",
                color: "#61999c",
                margin: "-50px 0",
              }}
            >
              Get Involved
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "white",
                margin: "60px 0",
                width: "500px",
              }}
            >
              Whether you're a student eager to learn, a professional looking to
              give back, or an organization interested in partnering with us,
              there are many ways to get involved and make a difference. Join us
              in our mission to empower youth through technology education and
              together, let's shape a brighter future for the next generation.
            </p>
          </div>
          {/* Image on the right */}
          <img
            src={Underwater} // Replace with your image URL
            alt="Sample Image"
            style={{
              margin: "0px",

              width: "750px",
              height: "750px",
              marginRight: "20px",
              borderRadius: "10%", // Make the image rounded
            }}
          />
        </div>

        {/*</footer> */}
        <Footer>
          <LogoContainer>
            <LogoImage src={Logo} alt="Logo" />
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </LogoContainer>

          <SocialMediaContainer>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                {/* Twitter icon */}
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                {/* Instagram icon */}
                <path d="M11.997 2c2.759 0 3.1.01 4.186.061 1.084.054 1.79.241 2.426.512.624.279 1.122.634 1.622 1.134.5.5.855.998 1.134 1.622.271.636.459 1.342.513 2.426.051 1.086.061 1.427.061 4.186s-.01 3.1-.061 4.186c-.054 1.084-.242 1.79-.513 2.426-.28.624-.635 1.122-1.134 1.622-.5.5-.998.855-1.622 1.134-.636.271-1.342.459-2.426.513-1.086.051-1.427.061-4.186.061s-3.1-.01-4.186-.061c-1.084-.054-1.79-.242-2.426-.513-.624-.28-1.122-.635-1.622-1.134-.5-.5-.855-.998-1.134-1.622-.271-.636-.459-1.342-.513-2.426-.051-1.086-.061-1.427-.061-4.186s.01-3.1.061-4.186c.054-1.084.242-1.79.513-2.426.28-.624.635-1.122 1.134-1.622.5-.5.998-.855 1.622-1.134.636-.271 1.342-.459 2.426-.513 1.086-.051 1.427-.061 4.186-.061zm0-2c-2.794 0-3.794.01-5.122.061-1.413.054-2.435.243-3.136.512-.807.279-1.475.646-2.122 1.293-.646.647-1.014 1.315-1.293 2.122-.27.701-.459 1.723-.512 3.136-.05 1.328-.061 2.328-.061 5.122s.01 3.794.061 5.122c.054 1.413.242 2.435.512 3.136.279.807.646 1.475 1.293 2.122.647.646 1.315 1.014 2.122 1.293.701.27 1.723.459 3.136.512 1.328.05 2.328.061 5.122.061s3.794-.01 5.122-.061c1.413-.054 2.435-.242 3.136-.512.807-.279 1.475-.646 2.122-1.293.646-.647 1.014-1.315 1.293-2.122.27-.701.459-1.723.512-3.136.05-1.328.061-2.328.061-5.122s-.01-3.794-.061-5.122c-.054-1.413-.242-2.435-.512-3.136-.279-.807-.646-1.475-1.293-2.122-.647-.646-1.315-1.014-2.122-1.293-.701-.27-1.723-.459-3.136-.512-1.328-.05-2.328-.061-5.122-.061zm0 5.795a6.205 6.205 0 1 0 0 12.41 6.205 6.205 0 0 0 0-12.41zm0 10.768a4.563 4.563 0 1 1 0-9.126 4.563 4.563 0 0 1 0 9.126zm10.036-10.243a1.245 1.245 0 1 1-2.49 0 1.245 1.245 0 0 1 2.49 0z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                {/* Facebook icon */}
                <path d="M21 0H3C1.344 0 0 1.344 0 3v18c0 1.656 1.344 3 3 3h9.094V14.625h-2.906V11.25h2.906v-2.25c0-2.875 1.75-4.625 4.625-4.625 1.313 0 2.594.25 2.594.25v2.875h-1.469c-1.438 0-1.875.875-1.875 1.781v1.875h3l-.375 3.375h-2.625V24H21c1.656 0 3-1.344 3-3V3C24 1.344 22.656 0 21 0z"></path>
              </svg>
            </a>
            {/* Add more social media icons as needed */}
          </SocialMediaContainer>
        </Footer>
      </Wrapper>
    </Axis>
  );
}

const HoverStyles = `
&:hover {
  transform: scale(1.1); // Scale the image by 10% on hover
}
`;

const GalaButton = styled.button`
  background: rgba(0, 0, 0, 0.2);
  border: 0px;
  font-size: 16px;
  padding: 12px 30px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  max-width: 280px;
  backdrop-filter: blur(20px);
  z-index: 4;

  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;

  transition: background-color 0.3s ease-in-out;

  margin: 30px 95px; /* Adjust margin as needed */
`;

const Axis = styled.div`
  overflow-x: hidden;
`;
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  background-color: rgba(
    51,
    51,
    51,
    0.3
  ); /* Background color with 30% opacity */
  color: white;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 10px;
  z-index: 100;
  transition: transform 0.3s ease-in-out; /* Add transition for smooth animation */

  &:hover {
    transform: scale(1.1); /* Scale the image by 10% on hover */
  }
`;

const SocialMediaContainer = styled.nav`
  display: flex;
  gap: 10px;

  a {
    text-decoration: none;
    color: white;

    svg {
      width: 24px;
      height: 24px;
      fill: white; /* Set the fill color to white for all icons */
    }
  }
`;

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;

  .spline {
    position: absolute;
    margin: 0;
    top: -10px;
    right: 0;
    z-index: -1;
  }
`;

const Content = styled.div`
  position: relative; /* Change position to relative */
  top: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px; /* Add margin at the bottom to make space for the box container */

  div {
    margin: 100px;
    transform: translateX(235%);
  }

  div2 {
    margin-top: 190px;
    transform: translateX(7.5%);
  }

  div3 {
    margin: 0 90px;
  }
  div4 {
    margin: -60px 95px;
  }

  divContent {
    margin: 30px 95px;
  }

  div5 {
    transform: translateY(81%);
  }

  div6 {
    transform: translateX(77%);
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    transform: translateY(-15%);
    max-width: 600px;
    z-index: 3;
  }

  p {
    font-weight: normal;
    transform: translateY(-15%);
    line-height: 150%;
    max-width: 400px;
    z-index: 3;
  }

  button {
    transform: translateY(-15%);
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);
    z-index: 4;

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    transition: background-color 0.3s ease-in-out;
  }

  button:hover {
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* Change this to your desired hover background color */
  }

  button2 {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    width: 180px;
    backdrop-filter: blur(20px);
    margin: -30px -220px;
    z-index: 4;
    transform: translateY(300%);

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    transition: background-color 0.3s ease-in-out;
  }

  button2:hover {
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* Change this to your desired hover background color */
  }

  button4 {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    width: 180px;
    backdrop-filter: blur(20px);
    margin: -400px 990px;
    z-index: 4;
    transform: translateY(-900%);

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    transition: background-color 0.3s ease-in-out;
  }

  button4:hover {
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* Change this to your desired hover background color */
  }

  h1,
  p,
  button {
    margin: 0 30px -30px 100px;
  }
`;
const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  transform: translateX(-2%);
  margin: 0 30px 0 100px;
  padding: 0;
  flex-direction: row;
  z-index: 2;

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border-radius: 14px;
      position: relative;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 14px;
        background-color: transparent;
        z-index: -1;
        transition: background-color 0.3s ease;
      }

      &:hover {
        &:before {
          background-color: rgba(225, 225, 225, 0.2);
        }
      }
    }
  }
`;
