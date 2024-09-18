import React, { useRef, useState } from "react";
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

  //segundo hook - useRef
  const inputName = useRef();
  const inputAge = useRef()
  const inputEmail = useRef();
  const inputPhone = useRef();




  //função que irá criar e adicionar um novo usuario usando o hook useRef
  function addNewUser() {
    setUsers([...users,{id: Math.random(),
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
      phone: inputPhone.current.value
    }])
  }


  return (
    <>
      <Container>
        <Image alt='peoples' src={image} />
        <ContainerItens>
          <H1>Olá </H1>

          <InputLabel >nome</InputLabel>
          <Input type="Name" ref={inputName}  placeholder="Nome" />

          <InputLabel >Idade</InputLabel>
          <Input type="Age" ref={inputAge} placeholder="Idade" />

          <InputLabel >Email</InputLabel>
          <Input type="Email" ref={inputEmail}  placeholder="Email" />

          <InputLabel>Telefone</InputLabel>
          <Input type="Phone" ref={inputPhone} placeholder="Telefone" />

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