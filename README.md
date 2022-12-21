# **Parte do Front End do projeto Full Stack**

## Instalação e execução

### Crie um arquivo .env com as chaves

```
DATABASE_URL="postgresql://USER_POSTGRES:PASSWORD_POSTGRES@localhost:5432/DATABASE_NAME?schema=public"
PORT=3001

```

### Instale as dependências

```
yarn
```

### Execute as migrações _(não precisa desta parte ainda, por não ter as tabelas)_

```
yarn prisma migrate dev
```

### Rode a aplicação

```
yarn dev
```

### Em 'localhost:3001/test', teste se esta funcionando [GET]

```
{"message":"Testing :^)"}
```

---

## Rotas

### localhost:3001/error [GET]

> {
> "status": "error",
> "code": 400,
> "message": "Error is working"
> }

### localhost:3001/users [GET]

> []
