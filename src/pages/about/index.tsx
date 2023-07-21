import {
  CardCompartiment,
  Container,
  Content,
  TextCard,
  Img,
  Text,
} from "./styles";

import myface from "../../assets/myface.webp";

import { TitleDefaulted } from "../../components/Title";

export const About = () => {
  return (
    <Container id="sobre">
      <TitleDefaulted text="Sobre mim" />
      <Content>
        <CardCompartiment />
        <TextCard>
          <Img src={myface} alt="my picture"></Img>
          <Text>
            Olá, sou conhecido como Felipe, tenho 17 anos de idade, e estou
            estudando para ser um desenvolvedor Fullstack, já que gosto do
            Frontend e do Backend. Ainda não tenho nenhuma experiência de
            trabalho, mas já fiz diversos projetos utilizando HTML/CSS e
            ReactJS/Native, também dei início a área do back desenvolvendo
            algumas APIs.
            <br></br>
            <br></br>
            Atualmente faço projetos com código aberto no Github, desde projetos
            simples até os mais complexos, programar com certeza foi uma das
            melhores escolhas que fiz, e com certeza irei a cada dia buscar
            melhoria.
          </Text>
        </TextCard>
      </Content>
    </Container>
  );
};
