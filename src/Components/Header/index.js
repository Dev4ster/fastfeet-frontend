import React from 'react';

import Logo from '~/Assets/fastfeet-logo.png';
import { Container, Content, Linkz } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Linkz to="/">
            <img src={Logo} alt="FastFeet" />
          </Linkz>
          <div>
            <Linkz to="/orders" current={true ? 1 : 0}>
              ENCOMENDAS
            </Linkz>
            <Linkz to="/deliverymans">ENTREGADORES</Linkz>
            <Linkz to="/recipients">DESTINATÁRIOS</Linkz>
            <Linkz to="/problems">PROBLEMAS</Linkz>
          </div>
        </nav>
        <aside>
          <Linkz to="/profile">Admin FastFeet</Linkz>
          <Linkz to="/">Sair do sistema</Linkz>
        </aside>
      </Content>
    </Container>
  );
}
