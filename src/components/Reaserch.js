import React,{useEffect} from "react";
import "./Research.css";

const Reaserch = () => {
  useEffect(() => {
    document.title = "Reaserch page - CodeLover Technology Pvt Ltd"
})
  return (
    <>
      <div className="wrapper">
        <div className="fixed-bg bg-1">
          <h1>Artificial Intelligence ( AI )</h1>
        </div>

        <div className="scroll-bg">
          <h3>
            What if we leave this 20% to artificial intelligence? Sounds
            unlikely today as most businesses continue to rely on in-house
            content writers or agencies who struggle to find new content ideas.
            All this is about to change in next 5-10 years as newer technologies
            evolve which will potentially disrupt the way content writing
            business functions today.
          </h3>
        </div>

        <div className="fixed-bg bg-2">
          <h1>Internet Of Things ( IOT ) </h1>
        </div>

        <div className="scroll-bg">
          <h3>
            Over the past few years, IoT has become one of the most important
            technologies of the 21st century. Now that we can connect everyday
            objects—kitchen appliances, cars, thermostats, baby monitors—to the
            internet via embedded devices, seamless communication is possible
            between people, processes, and things.
          </h3>
        </div>

        <div className="fixed-bg bg-3">
          <h1>Web Designing</h1>
        </div>
        <div className="scroll-bg">
          <h3>
            Web design refers to the design of websites that are displayed on
            the internet. It usually refers to the user experience aspects of
            website development rather than software development. Web design
            used to be focused on designing websites for desktop browsers;
            however, since the mid-2010s, design for mobile and tablet browsers
            has become ever-increasingly important.
          </h3>
        </div>
      </div>
    </>
  );
};

export default Reaserch;
