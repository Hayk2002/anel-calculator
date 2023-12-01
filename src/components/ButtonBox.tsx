import {advancedBtnValues, btnValues} from "../utils/helpers";
import Button from "./Button";
import { ButtonBoxWrapper } from "./styled";

const ButtonBox = ({ isAdvanced }: { isAdvanced: boolean }) => {

    return (
        <ButtonBoxWrapper>
            {isAdvanced && advancedBtnValues.map((btn: string, index: number) => (
                <Button value={btn} key={index} />
            ))}
            {btnValues
                .flat()
                .map((btn: string, index: number) => (
                    <Button value={btn} key={index} />
                ))
            }
        </ButtonBoxWrapper>
    );
};

export default ButtonBox;
