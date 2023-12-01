import { Switch } from "antd";
import { CalcSwitcher, Wrapper } from "./components/styled";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import CalcProvider from "./store/CalcContenxt";
import {useState} from "react";

const App = () => {
    const [isAdvanced, setIsAdvanced] = useState<boolean>(false);

    const handleSwitch = () => {
        setIsAdvanced((prev) => !prev);
    };

    return (
      <CalcProvider>
          <CalcSwitcher>
              <p>Classic</p>
              <Switch checked={isAdvanced} onClick={handleSwitch}/>
              <p>Advanced</p>
          </CalcSwitcher>
          <Wrapper>
              <Screen />
              <ButtonBox isAdvanced={isAdvanced}/>
          </Wrapper>
      </CalcProvider>
    );
}

export default App;
