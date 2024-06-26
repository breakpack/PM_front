import styled, { keyframes } from "styled-components";

export const fade_in = keyframes`
    0%{opacity: 0; margin-bottom: -10%;}
    80%{margin-bottom: 0;}
    100%{opacity: 1; margin: 0;}
`;
export const fade_in1 = keyframes`
    0%{opacity: 0; margin-top: 20%;}
    80%{margin-top: 10%;}
    100%{opacity: 1; margin-top: 10%;}
`;
export const fade_in2 = keyframes`
    0%{opacity: 0;}
    100%{opacity: 1;}
`;
export const Wapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #0a174e;
  flex-direction: column;
`;
export const Title = styled.div`
  opacity: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50%;
  font-size: 500%;
  color: #f5d042;
  animation: ${fade_in} 3s forwards;
`;
export const Bar = styled.div`
  opacity: 0;
  height: 1%;
  width: 50%;
  background-color: #f5d042;
  animation: ${fade_in1} 3s forwards;
  animation-delay: 0.5s;
`;
export const by = styled.div`
  margin-top: 1%;
  opacity: 0;
  height: 3%;
  width: 50%;
  color: #f5d042;
  animation: ${fade_in2} 3s forwards;
  animation-delay: 0.8s;
`;
