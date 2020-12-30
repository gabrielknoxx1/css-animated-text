import styled, { keyframes } from 'styled-components';


const colorCycle = keyframes`
0%, 55% {
    filter: brightness(0) invert(1) ;
  }
11%, 33% {
  filter: none;
} 
`;
const colorCycleBtn = keyframes`
0%, 55% {
    filter: brightness(0.5) ;
}
11%, 33% {
  filter: none;
} 
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  > h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 104px;
    letter-spacing: -4px;
    font-weight: 500;

    span {
      filter: brightness(0) invert(1) ;

      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;   

      animation: ${colorCycle} 10s  ease-in-out infinite;

     &:hover {
       margin-left: 8px;
     }

     

      &:nth-child(1){
        background-image: linear-gradient(-45deg, #F0DAD2, #303073);
     
      }
      &:nth-child(2){
        background-image: linear-gradient(-45deg, #303073, #F0DAD2);
        animation-delay: 3.33s;
      }
      &:nth-child(3){
        background-image: linear-gradient(-45deg, #DC0047, #58E69D);
        animation-delay: 6.66s;

      }
    }
    
    
  }

  > button {
    width: 320px;
    height: 48px;
    background-image: linear-gradient(90deg, #DC0047, #303073);
    /* border: 1px solid #fff; */
    font-size: 24px;
    color: #c9c9c3;
    border-radius: 8px;
    animation: ${colorCycleBtn} 10s  ease-in-out infinite;
    animation-delay: 6s;

    &:hover{
      width: 324px;
    height: 50px;
    }
    
  }
`;
