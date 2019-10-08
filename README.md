# API-NodeJS-Express-MySQL

## Descrição

API para gerenciamento de pessoas e remuneração por profissão.

## Principais recursos

*  Cadastro de profissão
*  Cadastro de pessoas
*  CRUD e relacionamentos com MySQL
*  Sequelize ORM

## Endpoints

### Profissão

**Rota para listar todas as profissões.**

    GET {{ base_url  }}/professions

RESPOSTA

``` json
{
  "data": [
    {
      "id": 9,
      "description": "Web developer",
      "createdAt": "2019-10-07T20:09:30.000Z",
      "updatedAt": "2019-10-08T13:13:15.000Z"
    }
  ],
  "msg": "Consulta realizada com sucesso."
}
```

**Rota para listar uma única profissão.**

    GET {{ base_url  }}/professions/{{ professionId }}

RESPOSTA

``` json
{
  "data": [
    {
      "id": 9,
      "description": "Web developer",
      "createdAt": "2019-10-07T20:09:30.000Z",
      "updatedAt": "2019-10-08T13:13:15.000Z"
    }
  ],
  "msg": "Consulta realizada com sucesso."
}
```

**Rota para criar uma nova profissão.**

    POST {{ base_url  }}/professions

JSON 

``` json
{
	"description": "Web developer"
}
```

RESPOSTA

``` json
{
  "data": {
    "id": 10,
    "description": "Web developer",
    "updatedAt": "2019-10-08T14:36:49.823Z",
    "createdAt": "2019-10-08T14:36:49.823Z"
  },
  "msg": "Profissão gravada com sucesso."
}
```

**Rota para alterar uma profissão específica.**

    PUT {{ base_url  }}/professions/{{ professionId }}

JSON 

``` json
{
	"description": "Web developer"
}
```

RESPOSTA

``` json
{
  "data": {
    "id": 10,
    "description": "Web developer",
    "createdAt": "2019-10-08T14:36:49.000Z",
    "updatedAt": "2019-10-08T14:36:49.000Z"
  },
  "msg": "Profissão alterada com sucesso."
}
```

**Rota para deletar uma profissão específica.**

    DELETE {{ base_url  }}/professions/{{ professionId }}

RESPOSTA

``` json
{
  "data": [
    {
      "id": 9,
      "description": "Software developer",
      "createdAt": "2019-10-07T20:09:30.000Z",
      "updatedAt": "2019-10-08T13:13:15.000Z"
    }
  ],
  "msg": "Profissão deletada com sucesso."
}
```

### Pessoa

**Rota para listar todas as pessoas.**

    GET {{ base_url  }}/people

RESPOSTA

``` json
{
  "data": [
    {
      "id": 4,
      "first_name": "Felipe",
      "last_name": "Alves",
      "salary": "2600.00",
      "profession": 9,
      "createdAt": "2019-10-08T13:13:22.000Z",
      "updatedAt": "2019-10-08T13:13:22.000Z",
      "Profession": {
        "id": 9,
        "description": "Web developer",
        "createdAt": "2019-10-07T20:09:30.000Z",
        "updatedAt": "2019-10-08T13:13:15.000Z"
      }
    }
  ],
  "msg": "Consulta realizada com sucesso."
}
```

**Rota para listar uma única pessoa.**

    GET {{ base_url  }}/people/{{ personId }}

RESPOSTA

``` json
{
  "data": [
    {
      "id": 4,
      "first_name": "Felipe",
      "last_name": "Alves",
      "salary": "2600.00",
      "profession": 9,
      "createdAt": "2019-10-08T13:13:22.000Z",
      "updatedAt": "2019-10-08T13:13:22.000Z",
      "Profession": {
        "id": 9,
        "description": "Web developer",
        "createdAt": "2019-10-07T20:09:30.000Z",
        "updatedAt": "2019-10-08T13:13:15.000Z"
      }
    }
  ],
  "msg": "Consulta realizada com sucesso."
}
```

**Rota para criar uma nova pessoa.**

    POST {{ base_url  }}/people

JSON

``` json
{
	"first_name": "Felipe",
	"last_name": "Alves",
	"salary": 2600,
	"profession": 9
}
```

RESPOSTA

``` json
{
  "data": {
    "id": 4,
    "first_name": "Felipe",
    "last_name": "Alves",
    "salary": 2600,
    "profession": 9,
    "updatedAt": "2019-10-08T13:13:22.279Z",
    "createdAt": "2019-10-08T13:13:22.279Z"
  },
  "msg": "Pessoa gravada com sucesso."
}
```

**Rota para alterar uma pessoa específica.**

    PUT {{ base_url  }}/people/{{ personId }}

JSON

``` json
{
	"first_name": "Felipe",
	"last_name": "Barros",
	"salary": 2600,
	"profession": 9
}
```

RESPOSTA

``` json
{
  "data": {
    "id": 4,
    "first_name": "Felipe",
    "last_name": "Barros",
    "salary": 2600,
    "profession": 9,
    "createdAt": "2019-10-08T13:13:22.000Z",
    "updatedAt": "2019-10-08T14:48:46.615Z"
  },
  "msg": "Pessoa alterada com sucesso."
}
```

**Rota para deletar uma pessoa específica.**

    DELETE {{ base_url  }}/people/{{ personId }}

RESPOSTA

``` json
{
  "data": [
    {
      "id": 4,
      "first_name": "Felipe",
      "last_name": "Alves",
      "salary": "2600.00",
      "profession": 9,
      "createdAt": "2019-10-08T13:13:22.000Z",
      "updatedAt": "2019-10-08T13:13:22.000Z"
    }
  ],
  "msg": "Pessoa deletada com sucesso."
}
```

