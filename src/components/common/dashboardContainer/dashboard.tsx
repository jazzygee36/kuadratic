import Sidebar from "./sidebar";
import Header from "./header";
import { FC } from "react";

interface IDashboard {
  children: React.ReactNode;
  title: string;
}

const Dashboard: FC<IDashboard> = ({ children, title }) => {
  return (
    <div className="flex  ">
      <Sidebar />
      <div className="flex flex-col w-full h-screen  overflow-scroll no-scrollbar  ">
        <Header title={title} />
        <div className="pr-4 pl-4 h-screen  ">{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
