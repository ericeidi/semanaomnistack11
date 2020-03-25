const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // converte json em objeto javascript
app.use(routes);


app.listen(3333);
/*
Metodos HTTP:

GET: BUSCAR/LISTAR uma informacao do back end
POST: CRIAR uma informacao no back end
PUT: ALTERAR uma informacao no back end
DELETE: DELETAR UMA FUNCAO NO BACK END
*/

/*
Tipos de parametros:

Query params: parametros nomeados enviados na rota apos "?" (filtros de paginacao)
Route Params: parametros utilizados para identificar recursos
Request body: corpo da requisicao, utilizado para criar ou alterar recursos
*/

// MODELO ROUTE PARAMS app.post('/users/:id', (request/* <- guarda todos os dados armazenados*/,  response /* <- retorna os dados armazenados*/ ) => {
 /*   const params = request.params;

    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Eric Nishimu'
    });
});
*/


// MODELO QUERY PARAMS app.post('/users', (request/* <- guarda todos os dados armazenados*/,  response /* <- retorna os dados armazenados*/ ) => {
/*    const params = request.query;

    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Eric Nishimu'
    });
});
*/


//MODELO BODY PARAMS
//app.post('/users', (request/* <- guarda todos os dados armazenados*/,  response /* <- retorna os dados armazenados*/ ) => {
  /*  const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Eric Nishimu'
    });
});
*/

