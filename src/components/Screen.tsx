import { useContext } from "react";
import { ScreenWrapper } from "./styled";
import { CalcContext } from "../store/CalcContenxt";

const Screen = () => {
    const { calc } = useContext(CalcContext);

    return (
        <ScreenWrapper max={70} mode="single">{calc.num ? calc.num : calc.res}</ScreenWrapper>
    );
};

export default Screen;
