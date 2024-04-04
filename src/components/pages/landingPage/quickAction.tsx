import ActionBtnMenu from "../../common/quickActionBtnMenu";
import DownArrow from "../../../assets/downArrow.svg";
import RightArrow from "../../../assets/rightArrow.svg";
import { useState } from "react";
import G2 from "../../../assets/G2.svg";
import G1 from "../../../assets/G1.svg";
import JK from "../../../assets/Jk.svg";
import SK from "../../../assets/SK.svg";
import ReportedCard from "../../common/report";
import CalendarComp from "../../common/calender";
// import ProfileMenu from "../../common/profileMenu";

const QuickAction = () => {
  const [absence, setAbsence] = useState(true);
  const [lateness, setLateness] = useState(true);

  const handleAbsenceDropdown = () => {
    setAbsence((prev) => !prev);
  };
  const handleLatenessDropdown = () => {
    setLateness((prev) => !prev);
  };
  return (
    <div className="overflow-y-auto no-scrollbar">
      <h4 className="text-center font-bold text-actionText text-sm mb-4">
        Quick Actions
      </h4>
      <ActionBtnMenu
        title={"Reported Absence"}
        img={DownArrow}
        onClick={handleAbsenceDropdown}
      />
      {absence && (
        <ReportedCard
          date={"Thursday, June 2, 2023"}
          name={"Misty Taylor"}
          digit={"  435 152"}
          img={G2}
          image={G1}
          // onClick={handleProfileMenu}
        />
      )}
      <ActionBtnMenu
        title={"Reported Lateness"}
        img={DownArrow}
        onClick={handleLatenessDropdown}
      />
      {lateness && (
        <ReportedCard
          date={"Thursday, June 2, 2023"}
          name={"Misty Taylor"}
          digit={"  435 152"}
          img={JK}
          image={SK}
        />
      )}

      <ActionBtnMenu title={"View Reports"} img={RightArrow} />
      <CalendarComp />
    </div>
  );
};

export default QuickAction;
