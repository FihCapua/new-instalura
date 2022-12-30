import React, { useState } from "react";
import { Button } from "../../common/Button";
import { TextField } from "../../forms/TextField";
import { Typography } from "../../foundation/Typography";

export function FormCadastro() {
  const [userInfo, setUserInfo] = useState({
    usuario: "JoazinhoGamePlay",
    email: "joazinho@gameplay.com",
  });

  /* O fieldName serviria pra passar a variável dinâmica pra cada valor do input
  
  const handleChange = (event) => {
    const fieldName = event.target.getAttribute("name");
    console.log(event.target.value);
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }; */

  const isFormValid =
    userInfo.usuario.length === 0 || userInfo.usuario.length === 0;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        console.log("Formulário pronto para cadastrar");
      }}
    >
      <Typography variant="title" as="h1" color="tertiary">
        Pronto para saber da vida dos outros?
      </Typography>
      <Typography variant="paragraph1" as="p" color="tertiary">
        Você está a um passo de saber tudo que está rolando no bairro, complete
        seu cadastro agora!
      </Typography>

      <TextField
        type="email"
        name="email"
        placeholder="Email"
        value={userInfo.email}
        onChange={(event) => {
          console.log(userInfo);
          setUserInfo({
            ...userInfo,
            email: event.target.value,
          });
        }}
      />
      <TextField
        type="text"
        name="user"
        value={userInfo.usuario}
        placeholder="Usuário"
        onChange={(event) => {
          console.log(userInfo);
          setUserInfo({
            ...userInfo,
            usuario: event.target.value,
          });
        }}
      />

      <Button fullWidth ghost={false} disabled={isFormValid} type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
