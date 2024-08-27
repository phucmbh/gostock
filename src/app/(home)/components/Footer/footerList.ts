import PATH from "@/utils/constant/path";

type FooterListType = {
  title: string;
  navList: {
    name: string;
    path: string;
  }[];
}[];

const footerList: FooterListType = [
  {
    title: "Platform",
    navList: [
      {
        name: "Analytics",
        path: PATH.HOME,
      },
      {
        name: "Planning",
        path: PATH.HOME,
      },
      {
        name: "Collaboration",
        path: PATH.HOME,
      },
      {
        name: "Data Management",
        path: PATH.HOME,
      },
      {
        name: "Intergrations",
        path: PATH.HOME,
      },
      {
        name: "Security",
        path: PATH.HOME,
      },
    ],
  },
  {
    title: "Resources",
    navList: [
      {
        name: "Customers",
        path: PATH.HOME,
      },
      {
        name: "Strategic Finance",
        path: PATH.HOME,
      },
      {
        name: "Ebook & Guides",
        path: PATH.HOME,
      },
      {
        name: "Webinars & Events",
        path: PATH.HOME,
      },
      {
        name: "Podcast & Video",
        path: PATH.HOME,
      },
    ],
  },
  {
    title: "Solutions",
    navList: [
      {
        name: "Financial",
        path: PATH.HOME,
      },
      {
        name: "Investors & CEOs",
        path: PATH.HOME,
      },
      {
        name: "Revenue Operations",
        path: PATH.HOME,
      },
      {
        name: "Sale & Marketing",
        path: PATH.HOME,
      },
      {
        name: "Human Resources",
        path: PATH.HOME,
      },
    ],
  },
  {
    title: "Resources",
    navList: [
      {
        name: "Customers",
        path: PATH.HOME,
      },
      {
        name: "Strategic Finance",
        path: PATH.HOME,
      },
      {
        name: "Ebook & Guides",
        path: PATH.HOME,
      },
      {
        name: "Webinars & Events",
        path: PATH.HOME,
      },
      {
        name: "Podcast & Video",
        path: PATH.HOME,
      },
      {
        name: "Matric Catalog",
        path: PATH.HOME,
      },
    ],
  },
];

export default footerList;
