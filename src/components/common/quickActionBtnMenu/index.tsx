import { FC } from "react";

interface Props {
  title: string;
  img: any;
  onClick?: () => void;
}

const ActionBtnMenu: FC<Props> = ({ title, img, onClick }) => {
  return (
    <div className="bg-sidebarBg pl-2  rounded-l-lg h-12 mb-4">
      <div
        className="cursor-pointer bg-actionMenuBg  w-full h-14  flex justify-between items-center px-4"
        onClick={onClick}
      >
        <p className="text-sm font-semibold text-cardTitle">{title}</p>
        <img src={`${img}`} alt="arrow" />
      </div>
    </div>
  );
};

export default ActionBtnMenu;
