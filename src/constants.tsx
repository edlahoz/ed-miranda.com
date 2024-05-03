import P from "./components/P/P";
import Stat from "./components/Stat/Stat";
import variables from "./variables.module.scss";

export namespace Constants {
  export const header = {
    title: "Ed Miranda",
    subtitle: (
      <span>
        Web Developer,{" "}
        <a
          href="https://www.strava.com/athletes/45691518"
          target="_blank"
          rel="noreferrer"
          style={{
            color: variables.colorPrimaryText,
            textDecoration: "underline",
          }}
        >
          Runner
        </a>
        , and{" "}
        <a
          href="https://sumbich.com"
          target="_blank"
          rel="noreferrer"
          style={{
            color: variables.colorPrimaryText,
            textDecoration: "underline",
          }}
        >
          Hot Sauce Enthusiast
        </a>
      </span>
    ),
  };
  const homePageDisplayName = "About";
  export const pages = {
    home: {
      displayName: homePageDisplayName,
      path: "/home",
      includeInMenu: true,
      hideNameInHeader: true,
      m1: "Hey there!",
      m2: `I'm Ed Miranda, and I build snappy, fun, and engaging user experiences in the web.`,
      accordionItems: [
        {
          title: "Background",
          content: (
            <div className="mb-10">
              <P>
                In the '90s, my brother and I began creating boot disks to run
                Duke Nukem on our 386 computer. Then MySpace entered the scene,
                and I delved into learning HTML, CSS, and JS to enhance my
                profile. I continued to expand my knowledge until I eventually
                transitioned into a Frontend Engineer role in my mid 20s. Prior
                to securing my initial corporate position, I had already
                developed numerous websites and applications for various clients
                as a freelancer. It was during this time that I gained insight
                into the significance of type="submit" and mastered the
                subtleties of semicolons.
              </P>
            </div>
          ),
        },
        {
          title: "Skills",
          defaultOpen: true,
          content: (
            <>
              <P>
                Most used tools in my toolbox (though you'll find a more
                comprehensive list in the Experience section next):
              </P>
              <ul className="mb-10">
                <li>
                  <Stat
                    title="Languages"
                    value="Typescript, Javascript, Node"
                  />
                </li>
                <li>
                  <Stat title="Libraries" value="React.js, Vue.js, Lightning" />
                </li>
                <li>
                  <Stat
                    title="Frameworks"
                    value="Wordpress, Magento, Shopify"
                  />
                </li>
                <li>
                  <Stat title="Tools" value="Git, Webpack, NPM, SCSS" />
                </li>
                <li>
                  <Stat title="CI/CD" value="OpenShift, Azure, AWS, Jenkins" />
                </li>
                <li>
                  <Stat title="Storage" value="Postgres, Mongo, Aurora" />
                </li>
                <li>
                  <Stat title="Design" value="Figma, Sketch, Photoshop" />
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "Experience",
          content: (
            <>
              <P>
                At least 12 years (getting old!) of experience working in the
                software industry, where I've had the opportunity to work on a
                diverse range of projects. Some highlights of my experience
                include:
              </P>
              <ul className="mb-10">
                <li>
                  <Stat
                    title="2022 - 2024 / BlackRock"
                    subtitle="Engineering Manager"
                    value="Led a team of engineers in developing portfolio analysis tools for clients. Collaborated closely with client teams to ensure all project requirements were addressed. Managed time, resources, and prioritizations effectively. Conducted regular standups, scrum meetings, and retrospectives to ensure project progress and team alignment."
                    type="column"
                    pills={[
                      "Recoil",
                      "Highcharts",
                      "Redux",
                      "Vite",
                      "Management",
                    ]}
                  />
                </li>
                <li>
                  <Stat
                    title="2016 - 2022 / Deloitte"
                    subtitle="Senior and Lead Frontend Developer"
                    value="Engaged in multiple consulting projects spanning the Healthcare, Human Capital, and Financial sectors. Notably, contributed to the development of several COVID-19-related applications during pivotal moments in the pandemic. As Lead Frontend Engineer, spearheaded a product that achieved a remarkable sale for a high eight-figure sum, marking a significant accomplishment."
                    type="column"
                    pills={[
                      "Angular",
                      "SASS",
                      "D3",
                      "Jasmine",
                      "Grafana",
                      "Salesforce",
                      "OneReach",
                      "Strapi",
                      "Struts",
                      "Electron",
                      "Arduino",
                      "Webpack",
                      "Parcel",
                    ]}
                  />
                </li>
                <li>
                  <Stat
                    title="2013 - 2016 / Cumulus Media Group"
                    subtitle="Web Developer"
                    value="Contributed to internal legacy revamp projects aimed at enhancing sales processes. Played a key role in designing and developing multiple radio station websites, with notable projects including those for the prestigious Westwood One radio station group."
                    type="column"
                    pills={[
                      "C#",
                      "DotNetNuke",
                      "Angular",
                      "LESS",
                      "Bootstrap",
                      "Grunt",
                      "Gulp",
                      "Skeleton",
                    ]}
                  />
                </li>
                <li>
                  <Stat
                    title="2012 - 2013 / Cornerstone Media"
                    subtitle="Junior Web Developer"
                    value="Part of a compact development team responsible for constructing websites tailored to small to medium-sized businesses. Held pivotal responsibilities in design, user experience, and frontend engineering."
                    type="column"
                    pills={[
                      "jQuery",
                      "PHP",
                      "MySQL",
                      "Wordpress",
                      "Phonegap",
                      "Joomla",
                      "Drupal",
                    ]}
                  />
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "Other Interests",
          content: (
            <div className="mb-10">
              <P>
                Beyond coding, you'll often find me pounding the pavements or
                exploring trails. I prioritize maintaining a healthy work-life
                balance, and running serves as my go-to activity for clearing my
                mind, staying focused, and often finding solutions to daily
                challenges. Additionally, my brother and I share a passion for
                hot sauce, leading us to venture into the world of
                entrepreneurship. We decided to sell our own hot sauce and
                launched a{" "}
                <a
                  href="https://www.kickstarter.com/projects/sumbich/sumbich-hot-sauce"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kickstarter campaign
                </a>{" "}
                for it! As part of our promotional video, we even had folks
                brave the raw heat of ghost peppers.
              </P>
            </div>
          ),
        },
      ],
    },
    projects: {
      displayName: "Projects",
      path: "/projects",
      includeInMenu: false,
    },
    blog: {
      displayName: "Blog",
      path: "/blog",
      includeInMenu: false,
    },
    contact: {
      displayName: "Contact",
      path: "/contact",
      includeInMenu: true,
      links: [
        {
          title: "Email",
          value: "ZWRsYWhvekBnbWFpbC5jb20=",
          encoded: true,
          isLink: true,
        },
        {
          title: "LinkedIn",
          value: "https://www.linkedin.com/in/edlmiranda",
          isLink: true,
        },
        {
          title: "Behance",
          value: "https://www.behance.net/edlahoz",
          isLink: true,
        },
        {
          title: "Github",
          value: "https://github.com/edlahoz",
          isLink: true,
        },
      ],
    },
    error: {
      displayName: "Error",
      path: "/error",
      m1: "Oops!",
      m2: "Sorry, but that page doesn't exist.",
      m3: `Go back to the ${homePageDisplayName} page`,
    },
  };
}
