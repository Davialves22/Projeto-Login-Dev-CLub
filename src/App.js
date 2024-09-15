import React from "react";
import {
  Container,
  H1,
  ContainerItens,
  Image,
  Input,
  InputLabel,
  ButtonCadaster
} from './Styles';

export const App = () => {

  return (
    <>
      <Container>
        <Image />
        <ContainerItens>
          <H1>Olá </H1>

          <InputLabel >nome</InputLabel>
          <Input type="Name" placeholder="Nome" />

          <InputLabel >Idade</InputLabel>
          <Input type="Age" placeholder="Idade" />

          <InputLabel >Email</InputLabel>
          <Input type="Email" placeholder="Email" />

          <ButtonCadaster>Cadastrar</ButtonCadaster>

        </ContainerItens>
      </Container>
    </>
  );
}