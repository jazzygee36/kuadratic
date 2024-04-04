import { FC } from "react";

interface ISelected {
  title: string;
  border?: string;
  onClick?: () => void;
  bg?: string;
}

// const SelectedBtn: FC<ISelected> = ({ title, border, onClick }) => {
//   return (
//     <select
//       onClick={onClick}
//       className={` cursor-pointer outline-none ${border}  border py-2 px-1 rounded-md text-selectTextColor font-semibold`}
//     >
//       <option className="bg-whiteBg border border-whiteBg outline-none">
//         {title}
//       </option>
//       <option>{title}</option>
//     </select>
//   );
// };

// export default SelectedBtn;

import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, message, Space } from "antd";

const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const SelectedBtn: FC<ISelected> = ({ title, border, onClick, bg }) => (
  <Space wrap className="">
    <Dropdown menu={menuProps}>
      <Button
        onClick={onClick}
        className={` cursor-pointer outline-none ${border} ${bg} rounded-none py-4 flex items-center  border  text-selectTextColor font-semibold`}
      >
        <Space>
          {title}
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
    {/* <Dropdown.Button menu={menuProps} onClick={handleButtonClick} danger>
      Danger
    </Dropdown.Button> */}
  </Space>
);

export default SelectedBtn;
