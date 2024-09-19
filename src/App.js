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
    setUsers([...users, {
      id: Math.random(),
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
      phone: inputPhone.current.value
    }])
  };

  //função para deletar usuario
  function deleteUser(userId) {
    const deleteUsers = users.filter(user => user.id !== userId);

    setUsers(deleteUsers);
  }

  return (
    <>
      <Container>
        <Image alt='peoples' src={image} />
        <ContainerItens>
          <H1>Olá </H1>

          <InputLabel >nome</InputLabel>
          <Input type="Name" ref={inputName} placeholder="Nome" required/>

          <InputLabel >Idade</InputLabel>
          <Input type="Age" ref={inputAge} placeholder="Idade" required/>

          <InputLabel >Email</InputLabel>
          <Input type="Email" ref={inputEmail} placeholder="Email" required/>

          <InputLabel>Telefone</InputLabel>
          <Input type="Phone" ref={inputPhone} placeholder="Telefone" required/>

          <ButtonCadaster onClick={addNewUser}>Cadastrar <Arrow alt="arrow" src={arrow} /></ButtonCadaster><br />

      {/*lista com o mapeamento e retorno dos usuarios na tela */}
          <ul>
            {users.map(user => (
              <User key={user.id}>
                <p>{user.name}</p>
                <p>{user.age}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <button onClick={() => deleteUser(user.id)}><Trash src={trash} /></button>
              </User>
            ))}
          </ul>
        </ContainerItens>
      </Container>
    </>
  );
}