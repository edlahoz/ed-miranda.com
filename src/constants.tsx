export namespace Constants {
  export const header = {
    title: "Ed Miranda",
    subtitle: "Software Engineer, Runner, and Hot Sauce Enthusiast",
  };
  const homePageDisplayName = "About";
  export const pages = {
    home: {
      displayName: homePageDisplayName,
      path: "/home",
      includeInMenu: true,
    },
    projects: {
      displayName: "Projects",
      path: "/projects",
      includeInMenu: true,
    },
    blog: {
      displayName: "Blog",
      path: "/blog",
      includeInMenu: true,
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
        },
        {
          title: "LinkedIn",
          value: "https://www.linkedin.com/in/edlmiranda",
        },
        {
          title: "Behance",
          value: "https://www.behance.net/edlahoz",
        },
        {
          title: "Github",
          value: "https://github.com/edlahoz",
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
