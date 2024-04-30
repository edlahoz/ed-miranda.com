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
                In the 90s, my brother and I started to make boot disks to run
                Duke Nukem in our 386 computer. Then MySpace came into the scene
                I learned HTML, CSS, and JS to make my profile pop. I kept on
                learning until I found myself becoming a Frontend Engineer for
                the first time towards my later 20s. Before landing my first
                corporate job I had already built several websites and apps for
                different clients as a freelancer (it was here I learned the
                importance of type=“submit” and the intricacies of semicolons)
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
                A few of the most used tools and languages (you'll see more in
                the Experience section, but these are the main ones):
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
                    value="Managed a team of engineers to develop portfolio analysis tooling for customers. Collaborated closely with Client teams to ensure all requirements were met. Managed time, resources, and prioritizations. Regular standups, scrum, and retrospectives."
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
                    value="Numerous consulting engagements in the Healthcare, Human Capital, and Financial sectors. Developed several COVID-19 related applications during critical times in the pandemic. One the biggest product accomplishments as Lead Frontend Engineer was the product selling for a high eight figure amount."
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
                    value="Worked on internal legacy revamp engagements to assist in Sales. Helped design and build several radio station websites, most notably for the renowned Westwood One radio station group."
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
                    value="Part of a very small dev group where we built sites for small to medium businesses. Played key roles in design, user experience, and frontend engineering"
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
                Outside of coding, you'll often find me running the pavements or
                trails. I believe in maintaining a healthy work-life balance,
                and running helps me clear my mind, stay focused, and is also
                frequently the space where I will find solutions to challenges
                in my day to day. My brother and I are big hot sauce peeps, so
                we decided to sell hot sauce one day and launched a kickstarter
                for it! We had people try raw ghost pepper for the kickstarter
                video.
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
