import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Cine Companion"
              description="Introducing our latest venture: a vibrant online hub for movie enthusiasts - a Movie Discussion Website! 🍿🎬 Built with cutting-edge technologies like EJS, JavaScript, CSS, MongoDB, Node.js, and Express.js, this platform revolutionizes how we connect over cinema. Seamlessly integrated with APIs, our website lets users select and post movies using captivating posters, engaging fellow cinephiles with shared interests from across the globe."
              ghLink="https://github.com/Vishal-6969/Cine_Companion"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="My Notes"
              description="A dynamic To-Do List application crafted with HTML, CSS, JavaScript, and React! 🌟 Seamlessly manage your tasks with the ability to edit, delete, update, and prioritize notes using a vibrant color-coded system. With just a click, set the priority of your tasks with three distinct colors - red for urgent, green for not so important, and yellow for less importance. Built with a user-centric approach, this To-Do List application offers a seamless experience, allowing you to effortlessly stay on top of your tasks. Harnessing the power of React, the interface is not only intuitive but also highly responsive, ensuring smooth navigation across devices. "
              ghLink="https://github.com/Vishal-6969/My-Notes"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="School Api"
              description="The School Management API is a Node.js and Express-based application that allows users to manage school data efficiently. It includes two key functionalities: adding new schools and retrieving a list of schools based on proximity. The **Add School API** (`POST /addSchool`) accepts details like name, address, latitude, and longitude, validates the input, and stores the data in a MySQL database. The **List Schools API** (`GET /listSchools`) fetches all schools and sorts them by their distance from a user-specified location using the Haversine formula. This API is ideal for applications requiring location-based sorting and efficient school data management."
              ghLink="https://github.com/Vishal-6969/School-API"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Automatic resume screening"
              description="Automatic Resume screening** is a critical step in the recruitment process, aimed at identifying candidates whose qualifications, skills, and experiences align with the job requirements. This process can be conducted manually by recruiters or automated using Applicant Tracking Systems (ATS) and AI-powered tools, which streamline evaluation by scanning resumes for relevant keywords and data. By efficiently narrowing down the candidate pool, resume screening saves time, ensures consistency, and enhances the likelihood of selecting the best-fit candidates, although it requires careful implementation to avoid biases and errors."
              ghLink="https://github.com/Vishal-6969/ML_Project"
            
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
