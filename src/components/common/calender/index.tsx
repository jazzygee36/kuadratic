import type { Dayjs } from "dayjs";
import React from "react";
import { Calendar, theme } from "antd";
import type { CalendarProps } from "antd";

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const CalendarComp: React.FC = () => {
  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: "100%",
    border: `1px solid bg-actionMenuBorder`,
    borderRadius: token.borderRadiusLG,
    fontSize: "1px",
  };

  return (
    <div style={wrapperStyle} className="text-sm">
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
  );
};

export default CalendarComp;
