import PATH from "@/utils/constant/path";
import {
  RiHome3Line,
  RiWallet3Line,
  RxDashboard,
  FaRegNewspaper,
  RiFundsBoxLine,
  IoSettingsOutline,
  FiPhone,
  IoIosPeople,
} from "@/utils/icons";

type SidebarType = {
  id: number;
  type: "SINGLE" | "PARENT";
  icon: React.ReactNode;
  title: string;
  path: string;
  child?: Pick<SidebarType, "title" | "path">[];
  notification?: number;
};

const sidebarTopList: SidebarType[] = [
  {
    id: 1,
    type: "SINGLE",
    icon: <RiHome3Line />,
    title: "Home",
    path: PATH.DASHBOARD,
  },
  {
    id: 2,
    type: "SINGLE",
    icon: <RxDashboard />,
    title: "Dashboard",
    path: PATH.DASHBOARD,
  },
  {
    id: 3,
    type: "SINGLE",
    icon: <RiWallet3Line />,
    title: "Wallet",
    path: PATH.DASHBOARD,
  },
  {
    id: 4,
    type: "SINGLE",
    icon: <FaRegNewspaper />,
    title: "News",
    path: PATH.DASHBOARD,
  },
  {
    id: 5,
    type: "PARENT",
    icon: <RiFundsBoxLine />,
    title: "Stock & Fund",
    path: "",
    child: [
      {
        title: "Stock",
        path: PATH.DASHBOARD,
      },
      {
        title: "Cryptocurrency",
        path: PATH.DASHBOARD,
      },
      {
        title: "Fund",
        path: PATH.DASHBOARD,
      },
      {
        title: "Forex",
        path: PATH.DASHBOARD,
      },
      {
        title: "Oil",
        path: PATH.DASHBOARD,
      },
      {
        title: "Coffee",
        path: PATH.DASHBOARD,
      },
      {
        title: "Wheat",
        path: PATH.DASHBOARD,
      },
    ],
  },
];

const sidebarBottomList: SidebarType[] = [
  {
    id: 1,
    type: "SINGLE",
    icon: <IoIosPeople />,
    title: "Our Community",
    path: PATH.DASHBOARD,
  },
  {
    id: 2,
    type: "SINGLE",
    icon: <IoSettingsOutline />,
    title: "Settings",
    notification: 4,
    path: PATH.DASHBOARD,
  },
  {
    id: 3,
    type: "SINGLE",
    icon: <FiPhone />,
    title: "Contact us",
    path: PATH.DASHBOARD,
  },
];

export { sidebarTopList, sidebarBottomList };
