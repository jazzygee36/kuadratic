import Logo from "../../../assets/logo.svg";

import LogoutIcon from "../../../assets/coolicon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../button";
import Tabs from "./tabs";
import TeddyEd from "../../../assets/TeddyEd.svg";
import MiniSidebar from "./miniSidebar";
import { Icon } from "@iconify/react";
import { ScreenIcon } from "../../../assets/icons/screenIcon";

const Links = [
  {
    title: "Dashboard",
    icon: <Icon icon="material-symbols:dashboard-outline" />,
    path: "/",
  },
  {
    title: "Track",
    icon: <ScreenIcon className="w-4 h-4 focus:text-whiteBg" />,
    path: "/tracks",
  },
  {
    title: "Reports",
    icon: <Icon icon="ph:chart-bar-fill" />,
    path: "/report",
  },
  {
    title: "Profile",
    icon: <Icon icon="iconamoon:profile-circle-duotone" />,
    path: "/profile",
  },
];
const Sidebar = () => {
  const navigate = useNavigate();
  const currentRoute = useLocation();
  const { pathname } = currentRoute;

  const handleClick = (path: string) => {
    navigate(path);
  };
  return (
    <div className="flex ">
      <MiniSidebar />
      <div className="overflow-y-auto no-scrollbar h-screen bg-sidebarBg   border-l-lightBlueBg border-r-0 border-t-0  border-b-0 border-4 ">
        <div className="flex justify-center mt-12 mb-12">
          <img src={Logo} alt="logo" />
        </div>

        {Links.map((link) => (
          <div
            key={link.title}
            className={`flex px-6 gap-4  cursor-pointer mx-6 items-center ${
              pathname === link.path && "bg-whiteBg"
            } text-whiteBg ${
              pathname === link.path ? "text-deepBlueText" : ""
            } py-4 rounded-lg `}
            onClick={() => handleClick(link.path)}
          >
            <span
              className={`font-semibold   ${
                pathname === link.path && "text-deepBlueText"
              } `}
            >
              {" "}
              {link.icon}
            </span>
            <h3
              className={`font-semibold   ${
                pathname === link.path && "text-deepBlueText"
              } `}
            >
              {link.title}
            </h3>
          </div>
        ))}
        <div className="mx-3 mt-32 flex flex-col gap-5">
          <Tabs />
          <Button
            bg={"bg-redBackground"}
            title={"Log out"}
            btnIcon={LogoutIcon}
            className="rounded bg-redBackground text-whiteBg w-full py-2 text-1xl  flex justify-center gap-3 items-center"
          />
        </div>
        <div className="flex justify-center mt-32 mb-8">
          <img src={TeddyEd} alt="teddy" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
