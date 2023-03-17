import styled from "styled-components";
import { Card } from "../Cardbox/styles";


export const CardCustom = styled(Card)`
  display: flex;
  padding: 20px;
`;

export const ContainerImg = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
`;

export const Icon = styled.img`
  position: absolute;
  width: 4vw;
  height: 4vh;

  @media (max-width: 1280px) {
    width: 40px;
    height: 40px;
  }
`;

export const Title = styled.p`
  font-size: 16pt;
  margin-top: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.COLORTHEME};
  font-family: ${({ theme }) => theme.FONTS.RUBIK};
`;

export const Text = styled.p`
  font-size: 16px;
  width: 260px;
  margin-top: 30px;
  line-height: 150%;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.KARLA};
`;
