import Portal from "../../../assets/portal.svg";
import Admission from "../../../assets/Admission.svg";
import Asset from "../../../assets/Asset.svg";
import Attendance from "../../../assets/attendance.svg";
import Busing from "../../../assets/bussing.svg";
import Clubs from "../../../assets/clubs.svg";
import Engagement from "../../../assets/engagement.svg";
import Enrolment from "../../../assets/enrollment.svg";
import Finance from "../../../assets/Finance.svg";
import Form from "../../../assets/Form.svg";
import Newspaper from "../../../assets/newsletter.svg";
import Gradebook from "../../../assets/gradebook.svg";
import Planner from "../../../assets/planner.svg";

const Sidebar = [
  { title: "Admin Portal", icons: Portal },
  { title: "Admissions", icons: Admission },
  { title: "Asset", icons: Asset },
  { title: "Attendance", icons: Attendance },
  { title: "Busing", icons: Busing },
  { title: "Clubs", icons: Clubs },
  { title: "Engagement", icons: Engagement },
  { title: "Enrolment", icons: Enrolment },
  { title: "Finance", icons: Finance },
  { title: "Forms", icons: Form },
  { title: "Gradebook", icons: Gradebook },
  { title: "Newsletter", icons: Newspaper },
  { title: "Planner", icons: Planner },
];
const MiniSidebar = () => {
  return (
    <div className="w-20 h-screen bg-whiteBg  overflow-y-auto no-scrollbar ">
      {Sidebar.map((sidebar) => (
        <div className="flex flex-col gap-3 my-4 cursor-pointer ">
          <div className=" flex items-center justify-center ">
            <img
              src={sidebar.icons}
              alt=""
              className="w-12 h-12 border-sidebarBorder border-4 rounded-2xl  py-1 px-0 hover:border-dimBlueSidebar"
            />
          </div>
          <div className="text-miniSidebar text-actionText text-center font-semibold">
            {sidebar.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiniSidebar;
