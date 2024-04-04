import { FC } from "react";

interface Props {
  title: string;
  subTitle: string;

  text: string;
  image: any;
  percentage: string;
  imageAngle: any;
  Avatar: any;
}

const Card: FC<Props> = ({
  title,
  subTitle,

  text,
  image,
  percentage,
  imageAngle,
  Avatar,
}) => {
  return (
    <div className="bg-whiteBg w-full h-40 rounded-lg p-4">
      <div className="flex gap-4">
        <img src={Avatar} alt="avatar" />

        <div>
          <h3 className="font-semibold text-cardTitle">{title}</h3>
          <h1 className={`font-bold text-2xl ${text} `}>{subTitle}</h1>
        </div>
      </div>
      <div className="flex justify-between relative  top-1/3">
        <div className="flex ">
          <img src={`${image}`} alt="cardImg" />
          <p className={`ml-11  ${text}`}>{percentage}</p>
        </div>
        <img src={`${imageAngle}`} alt="cardImg" />
      </div>
    </div>
  );
};

export default Card;
