## Como rodar o projeto localmente
1. Faça um clone desse repositório
2. Entre na pasta que foi criada 
3. Caso não possua o Docker instalado na sua máquina, instale o Docker - Tutorial: https://docs.docker.com/get-docker/
4. Rode o comando
```bash
docker-compose up --build
```
5. Após isso, você pode acessar a API através de http://localhost:5000/

## Documentação
### POST /register
Body:
```json
{
  "name": "Lucas",
  "email": "lucasdeozuquetto@hotmail.com",
  "cpf":"123456789",
  "phone":"123456789"
 }
 ```
 Resposta:
 - Caso o e-mail já exista no banco de dados:
 ```json
 "status":409
 ```
 - Caso algum campo do body esteja faltando ou está no formato errado:
 ```json
 "status":422
 ```
 - Caso a inscrição não seja realizada com sucesso: 
 ```json 
 "status":400
 ```
 - Caso a inscrição seja realizada com sucesso:
 ```json
 "status":200
 ```
 ### GET /register?startDate=MM/DD/YYYY&endDate=MM/DD/YYYY
 Obs: MM/DD/YYYY é o molde para uma data no formato mês/dia/ano, como por exemplo: 03/14/2023
 
 Resposta:
 - Caso startDate ou endDate não esteja no formato MM/DD/YYYY :
 ```json
 "status":422
 ```
 -Caso startDate seja maior que endDate:
 ```json 
 "status":400
 ```
 -Caso a requisição seja realizada com sucesso:
 ```json
 [
  {
    "id":1,
    "name":"Lucas",
    "email": "lucasdeozuquetto@hotmail.com",
    "cpf":"123456789",
    "phone":"123456789",
    "created_at":"2023-03-14T00:00:00.000Z"
  }
 ]
 ```
 
 ## Tecnologias Utilizadas
 - Node.js + Typescript
 - PrismaORM + PostgreSQL
 - Docker
 - Express
 - Joi
