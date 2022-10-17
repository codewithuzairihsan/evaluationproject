import React from "react";
import { AboutCard, AboutSpace } from "./About.style";

const About = () => {
  let title = `This is my Evaluation Project. Which Requires ⬇️`;
  return (
    <>
      <AboutSpace />
      <AboutCard title={title}>
        <h3>
          ➡️ 1. <b>Create-react-app</b> from the scratch
        </h3>
        <h3>
          ➡️ 2. Use <b>React-Router-Dom </b>
        </h3>
        <h3>
          ➡️ 3. Use <b>Ant Design</b> Which is the world 2<sup>nd</sup> Most
          popular React UI FrameWork
        </h3>
        <h3>
          ➡️ 4. Use <b>Redux</b> or <b>Redux Toolkit</b> or <b>Redux Saga</b>
        </h3>
        <h3>
          ➡️4. Use <b>Styled-Components</b>
        </h3>
        <h2> 👉 What I have todo : </h2>
        <h3>
          ➡️ 1- Create a simple dashboard layout <br /> ➡️ 2- Dashboard should
          have atleast 2 routes.
          <br /> ➡️ 3- In the home page, create a table. with atleast 6-7
          columns
          <br />
          ➡️ 4- Rows should be editable by a modal (pop-up), in modal, there
          should be a form. Upon save, changes should reflect in the table.
        </h3>
      </AboutCard>
    </>
  );
};

export default About;
