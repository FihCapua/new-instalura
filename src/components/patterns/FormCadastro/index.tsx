import React, { useState } from "react";
import { Button } from "../../common/Button";
import { TextField } from "../../forms/TextField";
import { Typography } from "../../foundation/Typography";
import Lottie from "lottie-react";
import successAnimation from "./animation/success.json";
import errorAnimation from "./animation/error.json";

const formState = {
  DEFAULT: "DEFAULT",
  LOADING: "LOADING",
  DONE: "DONE",
  ERROR: "ERROR",
};

export function FormCadastro() {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formState.DEFAULT);

  const [userInfo, setUserInfo] = useState({
    user: "",
    name: "",
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

  const isFormValid = userInfo.user.length === 0 || userInfo.name.length === 0;

  const styleLottieDiv = {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  };

  const styleLottieAnimation = {
    width: "55px",
    height: "55px",
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        setIsFormSubmited(true);

        // Data Transfer Object
        const userDTO = {
          username: userInfo.user,
          name: userInfo.name,
        };

        fetch("https://instalura-api.vercel.app/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDTO),
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }

            throw new Error("Não foi possível cadastrar seu usuário agora =(");
          })
          .then((res) => {
            setSubmissionStatus(formState.DONE);
            console.log(res);
          })
          .catch((error) => {
            setSubmissionStatus(formState.ERROR);
            console.log(error);
          });
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
        type="usuario"
        name="usuario"
        placeholder="Usuário"
        value={userInfo.user}
        onChange={(event) => {
          console.log(userInfo);
          setUserInfo({
            ...userInfo,
            user: event.target.value,
          });
        }}
      />
      <TextField
        type="text"
        name="name"
        placeholder="Nome"
        value={userInfo.name}
        onChange={(event) => {
          console.log(userInfo);
          setUserInfo({
            ...userInfo,
            name: event.target.value,
          });
        }}
      />

      <Button fullwidth={1} ghost={0} disabled={isFormValid} type="submit">
        Cadastrar
      </Button>

      {isFormSubmited && submissionStatus === formState.DONE && (
        <div style={styleLottieDiv}>
          <Lottie
            style={styleLottieAnimation}
            className="lottie-container basic"
            animationData={successAnimation}
            loop={false}
          />
          <p>Dados enviados com sucesso</p>
        </div>
      )}

      {isFormSubmited && submissionStatus === formState.ERROR && (
        <div style={styleLottieDiv}>
          <Lottie
            style={styleLottieAnimation}
            className="lottie-container basic"
            animationData={errorAnimation}
            loop={false}
          />
          <p>Erro no envio dos dados</p>
        </div>
      )}
    </form>
  );
}
