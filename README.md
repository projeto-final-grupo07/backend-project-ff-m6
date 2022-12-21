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

### /vehicle [POST]

Expected Body
```
{
	"typeOffer": true,
  "title": "Meu carro vrunn vrunn",
  "year": "2000",
  "mileage": "159159",
  "price": 500,
  "describe": "Faz vrun vrun",
  "typeVehicles": true,
  "coverImg": "umaURLDAORA",
	"isActive": true,
  "GalleryImg": [{"url": "uma"}, {"url": "duas"}]
}
```
Return
```
{
	"id": "108d11ec-fcd8-4cfa-85bb-ea426986b402",
	"typeOffer": true,
	"title": "Meu carro vrunn vrunn",
	"year": "2000",
	"mileage": "159159",
	"price": "500",
	"describe": "Faz vrun vrun",
	"typeVehicles": true,
	"coverImg": "umaURLDAORA",
	"isActive": true,
	"GalleryImgs": [
		{
			"id": "988f1cc9-aeec-4f52-998d-0c907c036398",
			"url": "uma",
			"vehicle_id": "108d11ec-fcd8-4cfa-85bb-ea426986b402"
		},
		{
			"id": "278409e6-75e5-470a-a569-ff07c74e2c78",
			"url": "duas",
			"vehicle_id": "108d11ec-fcd8-4cfa-85bb-ea426986b402"
		}
	]
}
```

### /vehicle [GET]
Result
```
[
	{
		"id": "108d11ec-fcd8-4cfa-85bb-ea426986b402",
		"typeOffer": true,
		"title": "Meu carro vrunn vrunn PATCH",
		"year": "2005",
		"mileage": "159159",
		"price": "500",
		"describe": "Faz vrun vrun",
		"typeVehicles": true,
		"coverImg": "umaURLDAORA",
		"isActive": true,
		"GalleryImgs": [
			{
				"id": "278409e6-75e5-470a-a569-ff07c74e2c78",
				"url": "uma",
				"vehicle_id": "108d11ec-fcd8-4cfa-85bb-ea426986b402"
			},
			{
				"id": "3630411f-d6c4-46b0-b2cf-c9e30cb02980",
				"url": "duas",
				"vehicle_id": "108d11ec-fcd8-4cfa-85bb-ea426986b402"
			},
		]
	}
]
```

### /vehicle/:vehicleId [GET]
Result
```
{
  "id": "108d11ec-fcd8-4cfa-85bb-ea426986b402",
  "typeOffer": true,
  "title": "Meu carro vrunn vrunn PATCH",
  "year": "2005",
  "mileage": "159159",
  "price": "500",
  "describe": "Faz vrun vrun",
  "typeVehicles": true,
  "coverImg": "umaURLDAORA",
  "isActive": true,
  "GalleryImgs": [
    {
      "id": "278409e6-75e5-470a-a569-ff07c74e2c78",
      "url": "uma",
      "vehicle_id": "108d11ec-fcd8-4cfa-85bb-ea426986b402"
    },
    {
      "id": "3630411f-d6c4-46b0-b2cf-c9e30cb02980",
      "url": "duas",
      "vehicle_id": "108d11ec-fcd8-4cfa-85bb-ea426986b402"
    },
  ]
}
```
### /vehicle/:vehicleId [PATCH]
Expected Body
```
{
	"typeOffer"?: true,
  "title"?: "Meu carro vrunn vrunn",
  "year"?: "2000",
  "mileage"?: "159159",
  "price"?: 500,
  "describe"?: "Faz vrun vrun",
  "typeVehicles"?: true,
  "coverImg"?: "umaURLDAORA",
	"isActive"?: true,
  "GalleryImg"?: [{"id": "988f1cc9-aeec-4f52-998d-0c907c036398", "url": "Edit img existent"},{"url": "Create new img"}]
}
```
Result
```
{
	"id": "c1b87c39-207b-47d8-955e-ef94c7694fdd",
	"typeOffer": true,
	"title": "Meu carro vrunn vrunn PATCH",
	"year": "2005",
	"mileage": "159159",
	"price": "500",
	"describe": "Faz vrun vrun",
	"typeVehicles": true,
	"coverImg": "umaURLDAORA",
	"isActive": true,
	"GalleryImgs": [
		{
			"id": "08af8b84-8164-410e-acb0-0c623b7c8f46",
			"url": "duas",
			"vehicle_id": "c1b87c39-207b-47d8-955e-ef94c7694fdd"
		},
      {
        "id": "591aba02-6850-4540-ba0d-eafe6b561deb",
        "url": "Create new img",
        "vehicle_id": "be0e4f9c-c4a1-47f2-ae24-d76f2313f678"
      },
		{
			"id": "b3df8230-a292-48c6-ab29-2f4f50d8332b",
			"url": "Edit img existent",
			"vehicle_id": "c1b87c39-207b-47d8-955e-ef94c7694fdd"
		}
	]
}
```

### /vehicle/:vehicleId [DELETE]
Result
```
Status = 204
```

### localhost:3001/error [GET]

> {
> "status": "error",
> "code": 400,
> "message": "Error is working"
> }

### localhost:3001/users [GET]

> []
