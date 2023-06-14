import "./heading.scss";
import profilePic from "../../assets/profile-pic.png";

export const Heading = () => {
  return (
    <section className="heading">
      <div className="p-1 md:w-1/5">
        <img className="profile-pic" src={profilePic} alt="profile-picture" />
      </div>
      <div className="p-2 leading-8 md:w-4/6 md:text-justify">
        <h1 className="my-1 mx-0">Armando Pinheiro Dias Neto</h1>
        <div>
          <p>
            <i className="fa-regular fa-calendar"></i>16/11/1994
          </p>
          <p>
            <a href="https://api.whatsapp.com/send?phone=5579991214322" target="_blank">
              <i className="fa-brands fa-whatsapp"></i>(79) 99121-4322
            </a>
          </p>
          <p>
            <a href="mailto:armandopdneto@gmail.com" target="_blank">
              <i className="fa-regular fa-envelope"></i>armandopdneto@gmail.com
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/armando-neto/" target="_blank">
              <i className="fa-brands fa-linkedin"></i>LinkedIn
            </a>
          </p>
          <p>
            <a href="https://github.com/ArNeto19" target="_blank">
              <i className="fa-brands fa-github"></i>@ArNeto19
            </a>
          </p>
        </div>
        <div>
          <p>
            <em>Javascript | TypeScript | React | React Native | Node.js</em>
          </p>
        </div>
      </div>
    </section>
  );
};
