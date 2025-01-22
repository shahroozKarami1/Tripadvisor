import { FC } from "react";
import { IBestFoodsCardProps } from "../../types/intefaces";
import {
  CusCard,
  CusTPSimpleCard,
  DarkOverlay,
} from "../../elements/CusComponets";

const BestFoodsCard: FC<IBestFoodsCardProps> = ({ img, name }) => {
  return (
    <CusCard>
      <img
      
        src={img}
        alt=""
        className="rounded-lg"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100%",
        }}
      />
      <DarkOverlay />
      <CusTPSimpleCard>{name}</CusTPSimpleCard>
    </CusCard>
  );
};

export default BestFoodsCard;
