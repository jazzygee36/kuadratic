import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { id: "1", title: "Messages", path: "/messages" },
  { id: "2", title: "Notifications", path: "/notifications" },
];
const Tabs = () => {
  const navigate = useNavigate();
  const currentRoute = useLocation();
  const { pathname } = currentRoute;

  const handleClick = (path: string) => {
    navigate(path);
  };
  return (
    <div className="bg-whiteBg text-deepBlueText flex gap-1  rounded-md py-2 px-2 font-semibold">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`outline-none w-full text-sm  px-1 hover:bg-sidebarBg hover:text-whiteBg  ${
            pathname === tab.path && "bg-sidebarBg"
          } py-1 rounded-lg ${pathname === tab.path && "text-whiteBg"} `}
          onClick={() => handleClick(tab.path)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
