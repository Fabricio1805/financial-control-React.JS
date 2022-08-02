import styled from "styled-components";


export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFF;
  border-radius: 5px;
  padding: 5px 2px;
  width: 25%;

  @media (max-width: 750px){
    width: 50%;

    p{
      font-size: 10px;
    }
    span{
      font-size: 15px;
    }
    svg{
      display: none;
    }
  }

  
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin: 15px auto;

  svg{
    width: 25px;
    height: 25px;
  }
`;

export const HeaderTitle = styled.h2`
  font-size: 20px;
`;

export const Total = styled.span`
  font-size: 30px;
`;