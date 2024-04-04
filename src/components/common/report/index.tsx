import { FC } from "react";
import CheckBox from "../checkBox";
import { Icon } from "@iconify/react";

interface Props {
  date: string;
  name: string;
  digit: string;
  img: any;
  image: any;
  onClick?: () => void;
}

const ReportedCard: FC<Props> = ({
  date,
  name,
  digit,
  img,
  image,
  onClick,
}) => {
  return (
    <div className="p-2 border rounded-lg  w-full border-actionMenuBorder mt-4 mb-4 ">
      <div className="bg-greyBg w-full h-full rounded-xl py-4">
        <p className="text-center text-sm  text-cardTitle">{date}</p>
        <div className="h-9 w-full bg-whiteBg mt-3 flex justify-between  items-center">
          <CheckBox />
          <span className="text-quickActionText font-semibold">{name}</span>
          <span className="text-quickActionText font-semibold">{digit}</span>
          <img src={img} alt="icon" />
          <Icon
            icon="solar:menu-dots-bold"
            className="cursor-pointer h-5 w-5 text-menuBarColor"
          />
        </div>
        <div className="h-9 w-full bg-whiteBg mt-3">
          <div className="h-9 w-full bg-whiteBg mt-3 flex justify-between  items-center">
            <CheckBox />
            <span className="text-quickActionText font-semibold">{name}</span>
            <span className="text-quickActionText font-semibold">{digit}</span>
            <img src={image} alt="icon" />
            <Icon
              icon="solar:menu-dots-bold"
              className="cursor-pointer h-5 w-5 text-menuBarColor"
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportedCard;
