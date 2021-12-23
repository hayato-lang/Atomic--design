import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);

  const onClickGeneral = () => {
    setUserInfo({isAdmin: false})
    history.push("/users");
  }


  const onClickAdmin = () => {
    setUserInfo({isAdmin: true})
    history.push("/users");
  }
  return (
    <SContainer>
      <h2>Topページです</h2>
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
text-align: center;
`;