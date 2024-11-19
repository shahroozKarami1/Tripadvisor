import { FC } from "react";
import { IBestFoodsCardProps } from "../../types/intefaces";
import { CusCard, CusTPSimpleCard } from "../../elements/CusComponets";

const BestFoodsCard: FC<IBestFoodsCardProps> = ({ img, name }) => {

  return (
    <CusCard>
      <img src={img} alt="" className="rounded-lg" />
      <CusTPSimpleCard>{name}</CusTPSimpleCard>
    </CusCard>
  );
};

export default BestFoodsCard;
