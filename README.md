<h3 align="center">
  Bootcamp Ignite Rocketseat - Projeto de estudo de autenticação, autorização e refresh token
</h3>

## :rocket: Sobre o desafio
Projeto desenvolvido estudando como criar um processo completo de autenticação, autorização e refresh token dentro do React com Next.js, permitindo controlar o acesso à rotas e componentes tanto no client-side quanto no server-side.


## 💻: Anotações
JWT (JSON Web Token) é armazenado no sessionStorage, localStorage, ou cookies. Refresh Token é armazenado junto, e também normalmente no banco de dados do back end.
sessionStorage: é limpado ao fechar o navegador e abrir novamente;
localStorage: se mantém ao fechar ao fechar o navegador, reiniciar a máquina, etc; só existe no browser, o servidor não tem acesso, portando por exemplo se é usado Next.js já não da para utilizar;
cookies: pode ser acessado tanto no browser quanto no servidor;
BroadcastChannel: API utilizada para permitir a comunicação entre diferentes documentos (em diferentes janelas, abas, frames ou iframes) da mesma origem, no caso desta aplicação, para realizar o logout e login automático.

## :wrench: Instalação e uso

```bash
# Abra um terminal e clone este repositório com o comando

$ git clone https://github.com/rodrigovellinho/ReactJS-Auth.git

# Acesse a pasta da aplicação

$ cd ignite-reactjs-nextauth

# Instale as dependências

$ yarn

# Clone o projeto do back end para realização do login e autenticações

$ git clone https://github.com/rocketseat-education/ignite-reactjs-auth-backend.git

# Acesse a pasta da aplicação

$ cd ignite-reactjs-auth-backend

# Instale suas dependências

$ yarn

# Pode iniciar ambas aplicações, back e front

$ yarn dev
```

## 🔨 Tecnologias:

- **[Next.js](https://nextjs.org/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[ReactJS](https://reactjs.org/)**
- **[Axios](https://github.com/axios/axios)**
- **[Nookies](https://github.com/maticzav/nookies)**

---

Feito por [Rodrigo Kloeckner](https://github.com/rodrigovellinho)


