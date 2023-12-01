import styled from "styled-components";
import { Textfit } from "react-textfit";
import {Space} from "antd";

export const Wrapper = styled.div`
  background-color: #f6f8f9;
  width: 20rem;
  padding: 2rem;
  margin-top: 4rem;
  border-radius: 1rem;
  box-shadow: 0 0 80px 30px rgba(0,0,0,0.1);
`;

export const ScreenWrapper = styled(Textfit)`
  height: 4rem;
  margin-bottom: 4rem;
`;

export const ButtonBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: .5rem;
`;

export const StyledButton = styled.button<{ $style: string }>`
  background-color:
      ${({ $style })=> 
              ($style === "equals") ? "#4bd086" :
                ($style === "opt") ? "#f79505" : "#e9f0f4" };
  ${({ $style }) => $style === "equals" ? "grid-column: 3/5" : ""};
  height: 3.5rem;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #242424;
  border: none;
  font-size: 1.5rem;
  
  &:hover {
    border: 2px dotted #242424;
  }
`;

export const CalcSwitcher = styled(Space)`
  position: absolute;
  top: 20px;
  right: 20px;
`;
