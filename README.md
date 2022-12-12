# **Parte do Front End do projeto Full Stack**

## Instalação e execução

### Crie um arquivo .env com as chaves

```
POSTGRES_USER=
POSTGRES_PWD=
POSTGRES_DB=
PORT=
SECRET_KEY=
```

### Instale as dependências

```
yarn
```

### Execute as migrações _(não precisa desta parte ainda, por não ter as tabelas)_

```
yarn typeorm migration:run -d src/data-source.ts
```

### Rode a aplicação

```
yarn dev
```

### Em 'localhost:3001/test', teste se esta funcionando

```
{"message":"Testing :^)"}
```

---
