import {createContext, ReactElement, ReactNode, useState} from 'react';

interface ICalcState {
    sign: string,
    num: number;
    res: number;
}

interface ICalcContext {
    calc: ICalcState,
    setCalc: (value: any) => void
}

const initialState: ICalcState = {
    sign: "",
    num: 0,
    res: 0,
}

const initialContext: ICalcContext = {
    calc: initialState,
    setCalc: () => {},
}

export const CalcContext = createContext(initialContext);

const CalcProvider = ({ children }: { children: ReactNode | ReactNode[] }) => {
    const [calc, setCalc] = useState(initialState);

    return (
        <CalcContext.Provider value={{ calc, setCalc }}>
            {children}
        </CalcContext.Provider>
    )
};

export default CalcProvider;
