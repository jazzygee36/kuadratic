import { FC } from "react";
import Messages from "../../../assets/message.svg";
import Bell from "../../../assets/bell.svg";
import DividedBar from "../../../assets/dividedBar.svg";
import Avatar from "../../../assets/avatar.svg";

interface IHeader {
  title: string;
}

const Header: FC<IHeader> = ({ title }) => {
  return (
    <div className=" w-full pt-5 pb-5   bg-whiteBg flex justify-between items-center pl-8 pr-8 mb-8">
      <h3 className="font-bold text-2xl text-deepBlueText ">{title}</h3>

      <div className="flex gap-2 items-center ">
        <img src={Messages} alt="msg" />
        <img src={Bell} alt="bell" />
        <img src={DividedBar} alt="bar" />
        <img src={Avatar} alt="avatar" />
        <h3 className="text-sm text-greyColor">Zuzu Jeremy</h3>
        <select name="" id="" className="text-selectTextColor">
          <option value=""></option>
        </select>
      </div>
    </div>
  );
};

export default Header;
