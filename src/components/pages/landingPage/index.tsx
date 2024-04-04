import Card from "../../common/card/card";
import Dashboard from "../../common/dashboardContainer/dashboard";
import QuickAction from "./quickAction";
import Bars from "../../../assets/bars.svg";
import Icons from "../../../assets/icon.svg";
import RedIcons from "../../../assets/greenIcon.svg";
import RedBars from "../../../assets/greenBars.svg";
import GreenIcons from "../../../assets/RedIcon.svg";
import GreenBars from "../../../assets/Redbars.svg";
import SearchIcon from "../../../assets/searchIcon.svg";
import SelectedBtn from "../../common/selectBtn";
import Button from "../../common/button";
import GenerateReportIcon from "../../../assets/GenerateIcon.svg";
import Printer from "../../../assets/printer.svg";
import GradCap from "../../../assets/gradCap.svg";
import DividedBar from "../../../assets/dividedBar.svg";
import Calendar from "../../../assets/Calendar.svg";
// import CalendarPicker from "../../common/calender";
import AvatarBlue from "../../../assets/avatarblue.svg";
import AvatarGreen from "../../../assets/avatargreen.svg";
import AvatarRed from "../../../assets/avatarred.svg";
import Graph from "./graph";
const LandingPage = () => {
  return (
    <Dashboard title={"Dashboard"}>
      <div className="h-full flex gap-6   ">
        <div className="mb-10">
          <div className=" w-full bg-whiteBg mb-8 flex items-center px-2  gap-2">
            <div className="flex gap-2 cursor-pointer w-24">
              <img src={SearchIcon} alt="search" />

              <input
                type="search"
                className="outline-none text-sm"
                placeholder="Search here..."
              />
            </div>
            <div className=" flex items-center  bg-greyBg  px-3 py-1  rounded-md cursor-pointer">
              <img src={Calendar} alt="cap" className="border-r-1" />

              {/* <CalendarPicker /> */}
            </div>
            <div className=" flex items-center gap-2 border-selectBtnBorder border px-3   rounded-none cursor-pointer">
              <img src={GradCap} alt="cap" className="border-r-1" />
              <img src={DividedBar} alt="bar" className="h-6 w-1" />
              <SelectedBtn title="Grade" border="border-none" />
            </div>
            <SelectedBtn title="Team 1" border="border-selectBtnBorder" />

            <SelectedBtn title="Bulk Action" border="border-selectBtnBorder" />
            <SelectedBtn title="Export" border="border-selectBtnBorder" />
            <div className=" border-selectBtnBorder border px-3 py-2  rounded-none cursor-pointer">
              <img src={Printer} alt="print" />
            </div>
          </div>
          <div className="flex gap-3  justify-between">
            <Card
              title={"All"}
              subTitle={"190"}
              text={"text-textBlue"}
              image={Bars}
              percentage={""}
              imageAngle={Icons}
              Avatar={AvatarBlue}
            />
            <Card
              title={"Present"}
              subTitle={"140"}
              text={"text-textGreen"}
              image={GreenBars}
              percentage={"73%"}
              imageAngle={GreenIcons}
              Avatar={AvatarGreen}
            />
            <Card
              title={"Absent"}
              subTitle={"50"}
              text={"text-textRed"}
              image={RedBars}
              percentage={"27%"}
              imageAngle={RedIcons}
              Avatar={AvatarRed}
            />
          </div>
          <Graph />
          <Button
            bg={"bg-sidebarBg"}
            title={"Generate Report"}
            btnIcon={GenerateReportIcon}
            className="mt-5  rounded bg-sidebarBg text-whiteBg w-full py-2 text-1xl  flex justify-center gap-3 items-center"
          />
        </div>
        <div className=" w-72  h-fit  bg-whiteBg rounded-lg py-6 px-3 pb-6  mb-32 overflow-y-auto no-scrollbar ">
          <QuickAction />
        </div>
      </div>
    </Dashboard>
  );
};

export default LandingPage;
