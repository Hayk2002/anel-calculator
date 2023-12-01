import { useContext } from "react";
import { StyledButton } from "./styled";
import { getStyleName } from "../utils/helpers";
import { CalcContext } from "../store/CalcContenxt";

interface IButton {
    value: string
}
const Button = ({ value }: IButton) => {
    const { calc, setCalc } = useContext(CalcContext);

    const handleNumberClick = () => {
        let numberValue: string | number;

        if (value === "0" && calc.num === 0) {
            numberValue = "0";
        } else {
            numberValue = Number(calc.num + value);
        }

        setCalc({
            ...calc,
            num: numberValue
        });
    };

    const commaClick = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes(".") ? calc.num + value : calc.num
        });
    };

    const resetClick = () => {
        setCalc({
            sign: "",
            num: 0,
            res: 0,
        });
    };

    const signClick = () => {
        setCalc({
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0,
        });
    };

    const equalsClick = () => {
        if (calc.res && calc.num) {
            const math = (a: number, b: number, sign: string) => {
                const result: any = {
                    "+": (a: number, b: number) => a + b,
                    "-": (a: number, b: number) => a - b,
                    "x": (a: number, b: number) => a * b,
                    "/": (a: number, b: number) => a / b,
                };

                return result[sign](a, b);
            };

            setCalc({
                res: math(calc.res, calc.num, calc.sign),
                sign: "",
                num: 0,
            });
        }
    };

    const persentClick = () => {
        setCalc({
            num: (calc.num / 100),
            res: (calc.num / 100),
            sign: "",
        });
    };

    const invertClick = () => {
        setCalc({
            num: calc.num ? calc.num * -1 : 0,
            res: calc.res ? calc.res * -1 : 0,
            sign: "",
        });
    };

    const advancedClick = () => {
        if (calc.num) {
            const result: any = {
                "sin": Math.sin(Number(calc.num)),
                "cos": Math.cos(Number(calc.num)),
                "tan": Math.tan(Number(calc.num)),
                "log": Math.log(Number(calc.num)),
            };

            setCalc({
                res: result[value],
                num: result[value],
                sign: "",
            })
        }
    };

    const handleClick = () => {
        const results: any = {
            ".": commaClick,
            "C": resetClick,
            "/": signClick,
            "x": signClick,
            "-": signClick,
            "+": signClick,
            "=": equalsClick,
            "%": persentClick,
            "+-": invertClick,
            "sin": advancedClick,
            "cos": advancedClick,
            "tan": advancedClick,
            "log": advancedClick,
        };

        if (results[value]) {
            return results[value]();
        } else {
            return handleNumberClick();
        }
    };

    return (
        <StyledButton
            onClick={handleClick}
            $style={getStyleName(value)}
        >
            {value}
        </StyledButton>
    )
};

export default Button;
