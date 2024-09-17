import React, { useState } from "react";
import {
  Container,
  H1,
  ContainerItens,
  Image,
  Input,
  InputLabel,
  ButtonCadaster,
  Arrow,
  User,
  Trash
} from './Styles/Styles';

import image from './assets/trabalho-de-personagem-de-mulher-3d-no-computador.png'
import arrow from './assets/seta-branca-em-fundo-laranja-minimalista.png'
import trash from './assets/delete-icon.svg'

export const App = () => {
  //const users = [];

  //primeiro React hook - useState
  const [users, setUsers] = useState([]);

  function addNewUser() {
    setUsers([{
      id: Math.random(),
      name: "Nino",
      age: 1,
      email: "gNininho@gmail.com",
      phone: "(81) 97341-7256"
    }])
  }

  return (
    <>
      <Container>
        <Image alt='peoples' src={image} />
        <ContainerItens>
          <H1>Olá </H1>

          <InputLabel >nome</InputLabel>
          <Input type="Name" placeholder="Nome" />

          <InputLabel >Idade</InputLabel>
          <Input type="Age" placeholder="Idade" />

          <InputLabel >Email</InputLabel>
          <Input type="Email" placeholder="Email" />

          <InputLabel>Telefone</InputLabel>
          <Input type="Phone" placeholder="Telefone" />

          <ButtonCadaster onClick={addNewUser}>Cadastrar <Arrow alt="arrow" src={arrow} /></ButtonCadaster><br />

          <ul>
            {users.map(user => (
              <User key={user.id}>
                <p>{user.name}</p>
                <p>{user.age}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <button><Trash src={trash} /></button>
              </User>
            ))}
          </ul>
        </ContainerItens>
      </Container>
    </>
  );
}