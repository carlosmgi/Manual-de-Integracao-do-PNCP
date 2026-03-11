Tabelas de Domínio
==================

Instrumento Convocatório
------------------------
Para consulta aos instrumentos convocatórios cadastrados acessar a página no Portal PNCP pelo endereço `https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP foram disponibilizados os serviços para consulta de instrumento/os convocatório/os a seguir.

Consultar Instrumento Convocatório por Código
---------------------------------------------
Serviço que permite consultar um instrumento convocatório pelo seu código. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~
+----------------------+-------------+-------------------+
| Endpoint             | Método HTTP | Exemplo Payload   |
+======================+=============+===================+
| /v1/tipos-           | GET         | Não se aplica     |
| instrumentos-        |             |                   |
| convocatorios/{id}   |             |                   |
+----------------------+-------------+-------------------+
| Exemplo Requisição (cURL)                              |
+--------------------------------------------------------+
| curl -X GET "${BASE_URL}/v1/tipos-instrumentos-        |
| convocatorios/{id}"                                    |
+--------------------------------------------------------+
