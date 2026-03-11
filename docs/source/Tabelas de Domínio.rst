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
+-----------------------------+-------------+---------------------------+
| Endpoint                    | Método HTTP | Exemplo Payload           |
+=============================+=============+===========================+
| /v1/tipos-instrumentos-     | GET         | Não se aplica             |
| convocatorios/{id}          |             |                           |
+-----------------------------+-------------+---------------------------+
| Exemplo Requisição (cURL)                                             |
+-----------------------------------------------------------------------+
| curl -X GET "${BASE_URL}/v1/tipos-instrumentos-convocatorios/{id}"    |
+-----------------------------------------------------------------------+

Dados de entrada
^^^^^^^^^^^^^^^^
.. list-table:: Nota: alimentar o path parâmetro {id} na URL. 
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - id
     - Inteiro
     - Sim
     - Código de identificação do instrumento convocatório. 
    
.. list-table:: Dados de retorno
   :header-rows: 1
   :widths: 5 30 15 50

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação do instrumento convocatório
   * - 2
     - nome
     - Texto
     - Nome do instrumento convocatório
   * - 3
     - descricao
     - Texto
     - Descrição do instrumento convocatório
   * - 4
     - obrigatoriedadeDataAberturaPropostaNome
     - Texto
     - Indica se é obrigatório ou não o envio da data de início do recebimento de proposta/lances para o instrumento convocatório
   * - 5
     - obrigatoriedadeDataEncerramentoPropostaNome
     - Texto
     - Indica se é obrigatório ou não o envio da data de encerramento do recebimento de proposta/lances para o instrumento convocatório
   * - 6
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 7
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 8
     - statusAtivo
     - Booleano
     - Indicador de status do instrumento convocatório. True = Ativo / False = Inativo

.. list-table:: Códigos de Retorno
   :header-rows: 1
   :widths: 15 35 20 20

   * - Código HTTP
     - Mensagem
     - Tipo
     - Descrição
   * - 200
     - OK
     - Sucesso
     - Requisição processada com sucesso
   * - 400
     - BadRequest
     - Erro
     - Requisição inválida
   * - 404
     - Instrumento convocatório não encontrado
     - NotFound
     - O instrumento convocatório solicitado não foi encontrado
   * - 422
     - Unprocessable Entity
     - Erro
     - A requisição não pôde ser processada devido a erros de validação
   * - 500
     - Internal Server Error
     - Erro
     - Erro interno no servidor

Consultar Instrumentos Convocatórios 
------------------------------------
Serviço que permite consultar os instrumentos convocatórios cadastrados no PNCP. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~
+-------------------------------------+---------------+-----------------+
| Endpoint                            | Método HTTP   | Exemplo Payload |
+=====================================+===============+=================+
| /v1/tipos-instrumentos-convocatorios| GET           | Não se aplica   |
+-------------------------------------+---------------+-----------------+
| Exemplo Requisição (cURL)                                             |
+-----------------------------------------------------------------------+
| curl -X 'GET' '${BASE_URL}/v1/tipos-instrumentos-convocatorios'       |
| -H 'accept: */*'                                                      |
| ou                                                                    |
| curl -X 'GET' '${BASE_URL}/v1/tipos-instrumentos-convocatorios?       |
| statusAtivo=true'                                                     |
| -H 'accept: */*'                                                      |
+-----------------------------------------------------------------------+

Dados de entrada
^^^^^^^^^^^^^^^^

.. list-table:: **Nota:** alimentar o query parâmetro ``statusAtivo``.
   :header-rows: 1
   :widths: 25 15 15 100

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Boolean
     - Não
     - Indicador de status do instrumento convocatório. True = Ativo / False = Inativo

.. list-table:: Dados de retorno
   :header-rows: 1
   :widths: 5 25 15 45

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação do instrumento convocatório
   * - 2
     - nome
     - Texto
     - Nome do instrumento convocatório
   * - 3
     - descricao
     - Texto
     - Descrição do instrumento convocatório
   * - 4
     - obrigatoriedadeDataAberturaPropostaNome
     - Texto
     - Indica se é obrigatório ou não o envio da data de início do recebimento de proposta/lances para o instrumento convocatório
   * - 5
     - obrigatoriedadeDataEncerramentoPropostaNome
     - Texto
     - Indica se é obrigatório ou não o envio da data de encerramento do recebimento de proposta/lances para o instrumento convocatório
   * - 6
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 7
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 8
     - statusAtivo
     - Booleano
     - Indicador de status do instrumento convocatório. True = Ativo / False = Inativo

.. list-table:: Códigos de Retorno
   :header-rows: 1
   :widths: 15 35 20

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 200
     - OK
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 404
     - Instrumento convocatório não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Modalidade de Contratação
-------------------------
Para consulta às modalidades de contratação acessar a página no Portal PNCP pelo endereço `https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP foram disponibilizados os serviços para consulta de modalidade/es de contratação a seguir. 

Consultar Modalidade de Contratação por Código
----------------------------------------------
Serviço que permite consultar uma modalidade de contratação pelo seu código. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~
+-------------------------------------+---------------+-----------------+
| Endpoint                            | Método HTTP   | Exemplo Payload |
+=====================================+===============+=================+
| /v1/modalidades/{id}                | GET           | Não se aplica   |
+-------------------------------------+---------------+-----------------+
| Exemplo Requisição (cURL)                                             |
+-----------------------------------------------------------------------+
| curl -X 'GET' '${BASE_URL}/v1/modalidades/{id}' -H 'accept: */*'      |
+-----------------------------------------------------------------------+

Dados de entrada
^^^^^^^^^^^^^^^^

.. list-table:: **Nota:** alimentar o path parâmetro ``{id}`` na URL.
   :header-rows: 1
   :widths: 20 20 20 40

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - id
     - Inteiro
     - Sim
     - Código de identificação da modalidade de contratação

.. list-table:: Dados de retorno
   :header-rows: 1
   :widths: 5 25 15 55

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação da modalidade de contratação
   * - 2
     - nome
     - Texto
     - Nome da modalidade de contratação
   * - 3
     - descricao
     - Texto
     - Descrição da modalidade de contratação
   * - 6
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 7
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 8
     - statusAtivo
     - Booleano
     - Indicador de status da modalidade de contratação. True = Ativo / False = Inativo

.. list-table:: Códigos de Retorno
   :header-rows: 1
   :widths: 15 50 35

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 200
     - OK
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 404
     - Modalidade de contratação não encontrada
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Consultar Modalidades de Contratação 
------------------------------------
Serviço que permite consultar as modalidades de contratação cadastradas no PNCP. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~
+-------------------------------------+---------------+-----------------+
| Endpoint                            | Método HTTP   | Exemplo Payload |
+=====================================+===============+=================+
| /v1/modalidades                     | GET           | Não se aplica   |
+-------------------------------------+---------------+-----------------+
| Exemplo Requisição (cURL)                                             |
+-----------------------------------------------------------------------+
| curl -X 'GET' '${BASE_URL}/v1/modalidades' -H 'accept: */*'           |
| ou                                                                    |
| curl -X 'GET' '${BASE_URL}/v1/modalidades?statusAtivo=true'-          |
| H 'accept: */*'                                                       |
+-----------------------------------------------------------------------+

Dados de entrada
^^^^^^^^^^^^^^^^

.. list-table:: **Nota:** alimentar o query parâmetro ``statusAtivo``.
   :header-rows: 1
   :widths: 25 15 15 45

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Boolean
     - Não
     - Indicador de status da modalidade de contratação. True = Ativa / False = Inativa

.. list-table:: Dados de retorno
   :header-rows: 1
   :widths: 5 25 15 55

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação da modalidade de contratação
   * - 2
     - nome
     - Texto
     - Nome da modalidade de contratação
   * - 3
     - descricao
     - Texto
     - Descrição da modalidade de contratação
   * - 6
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 7
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 8
     - statusAtivo
     - Booleano
     - Indicador de status da modalidade de contratação. True = Ativa / False = Inativa

.. list-table:: Códigos de Retorno
   :header-rows: 1
   :widths: 15 50 35

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 200
     - OK
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 404
     - Modalidade de contratação não encontrada
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Modo de Disputa
---------------
Para consulta aos modos de disputa acessar a página no Portal PNCP pelo endereço `https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP foram disponibilizados os serviços para consulta de modo/os de disputa a seguir. 

Consultar Modo de Disputa por Código 
------------------------------------
Serviço que permite consultar um modo de disputa pelo seu código. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~
+-------------------------------------+---------------+-----------------+
| Endpoint                            | Método HTTP   | Exemplo Payload |
+=====================================+===============+=================+
| /v1/modos-disputas/{id}             | GET           | Não se aplica   |
+-------------------------------------+---------------+-----------------+
| Exemplo Requisição (cURL)                                             |
+-----------------------------------------------------------------------+
| curl -X 'GET' '${BASE_URL}/v1/modos-disputas/{id}' -H 'accept: */*'   |
+-----------------------------------------------------------------------+

Dados de entrada
^^^^^^^^^^^^^^^^
.. list-table:: **Nota:** alimentar o path parâmetro ``{id}`` na URL.
   :header-rows: 1
   :widths: 20 20 20 40

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - id
     - Inteiro
     - Sim
     - Código de identificação do modo de disputa

.. list-table:: Dados de retorno
   :header-rows: 1
   :widths: 5 25 15 55

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação do modo de disputa
   * - 2
     - nome
     - Texto
     - Nome do modo de disputa
   * - 3
     - descricao
     - Texto
     - Descrição do modo de disputa
   * - 6
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 7
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 8
     - statusAtivo
     - Booleano
     - Indicador de status do modo de disputa. True = Ativo / False = Inativo

.. list-table:: Códigos de Retorno
   :header-rows: 1
   :widths: 15 50 35

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 200
     - OK
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 404
     - Modalidade de contratação não encontrada
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Consultar Modos de Disputa
--------------------------
Serviço que permite consultar os modos de disputa cadastrados no PNCP.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~
+-------------------------------------+---------------+-----------------+
| Endpoint                            | Método HTTP   | Exemplo Payload |
+=====================================+===============+=================+
| /v1/modos-disputas                  | GET           | Não se aplica   |
+-------------------------------------+---------------+-----------------+
| Exemplo Requisição (cURL)                                             |
+-----------------------------------------------------------------------+
| curl -X 'GET' '${BASE_URL}/v1/modos-disputas' -H 'accept: */*'        |  
| ou                                                                    |
| curl -X 'GET' '${BASE_URL}/v1/modos-disputas?statusAtivo=true'        |
| -H 'accept: */*'                                                      |
+-----------------------------------------------------------------------+

Dados de entrada
^^^^^^^^^^^^^^^^
.. list-table:: **Nota:** alimentar o query parâmetro ``statusAtivo``.
   :header-rows: 1
   :widths: 25 15 15 45

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Boolean
     - Não
     - Indicador de status do modo de disputa. True = Ativo / False = Inativo

.. list-table:: Dados de retorno
   :header-rows: 1
   :widths: 5 25 15 55

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação do modo de disputa
   * - 2
     - nome
     - Texto
     - Nome do modo de disputa
   * - 3
     - descricao
     - Texto
     - Descrição do modo de disputa
   * - 6
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 7
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 8
     - statusAtivo
     - Booleano
     - Indicador de status do modo de disputa. True = Ativo / False = Inativo

.. list-table:: Códigos de Retorno
   :header-rows: 1
   :widths: 15 50 35

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 200
     - OK
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 404
     - Modo de disputa não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Critério de Julgamento
----------------------
Para consulta aos critérios de julgamento acessar a página no Portal PNCP pelo endereço `https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP foram disponibilizados os serviços para consulta de critério/os de julgamento a seguir.

Consultar Critério de Julgamento por Código 
-------------------------------------------
Serviço que permite consultar um critério de julgamento pelo seu código.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~
+-------------------------------------+---------------+-----------------+
| Endpoint                            | Método HTTP   | Exemplo Payload |
+=====================================+===============+=================+
| /v1/criterios-julgamentos/{id}      | GET           | Não se aplica   |
+-------------------------------------+---------------+-----------------+
| Exemplo Requisição (cURL)                                             |
+-----------------------------------------------------------------------+
| curl -X 'GET' '${BASE_URL}/v1/criterios-julgamentos/{id}'             |
| -H 'accept: */*'                                                      |  
+-----------------------------------------------------------------------+

Dados de entrada
^^^^^^^^^^^^^^^^
.. list-table:: **Nota:** alimentar o path parâmetro {id} na URL.
   :header-rows: 1
   :widths: 25 15 15 45

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Boolean
     - Não
     - Indicador de status do modo de disputa. True = Ativo / False = Inativo

.. list-table:: Dados de retorno
   :header-rows: 1
   :widths: 5 25 15 55

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação do modo de disputa
   * - 2
     - nome
     - Texto
     - Nome do modo de disputa
   * - 3
     - descricao
     - Texto
     - Descrição do modo de disputa
   * - 6
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 7
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 8
     - statusAtivo
     - Booleano
     - Indicador de status do modo de disputa. True = Ativo / False = Inativo

.. list-table:: Códigos de Retorno
   :header-rows: 1
   :widths: 15 50 35

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 200
     - OK
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 404
     - Modo de disputa não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Consultar Critérios de Julgamento 
---------------------------------
Serviço que permite consultar os critérios de julgamento cadastrados no PNCP.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~
+-------------------------------------+---------------+-----------------+
| Endpoint                            | Método HTTP   | Exemplo Payload |
+=====================================+===============+=================+
| /v1/criterios-julgamentos           | GET           | Não se aplica   |
+-------------------------------------+---------------+-----------------+
| Exemplo Requisição (cURL)                                             |
+-----------------------------------------------------------------------+
| curl -X 'GET' '${BASE_URL}/v1/criterios-julgamentos' -H 'accept: */*' |
| ou                                                                    |
| curl -X 'GET' '${BASE_URL}/v1/criterios-julgamentos?statusAtivo=true' |
| -H 'accept: */*'                                                      |  
+-----------------------------------------------------------------------+

Dados de entrada
^^^^^^^^^^^^^^^^
.. list-table:: **Nota:** alimentar o query parâmetro {statusAtivo}. 
   :header-rows: 1
   :widths: 25 15 15 45

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Boolean
     - Não
     - Indicador de status do modo de disputa. True = Ativo / False = Inativo

.. list-table:: Dados de retorno
   :header-rows: 1
   :widths: 5 25 15 55

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação do modo de disputa
   * - 2
     - nome
     - Texto
     - Nome do modo de disputa
   * - 3
     - descricao
     - Texto
     - Descrição do modo de disputa
   * - 6
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 7
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 8
     - statusAtivo
     - Booleano
     - Indicador de status do modo de disputa. True = Ativo / False = Inativo

.. list-table:: Códigos de Retorno
   :header-rows: 1
   :widths: 15 50 35

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 200
     - OK
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 404
     - Modo de disputa não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Situação da Contratação 
-----------------------
- **(código = 1) Divulgada no PNCP:** Contratação divulgada no PNCP. Situação atribuída na inclusão da contratação.

- **(código = 2) Revogada:** Contratação revogada conforme justificativa.

- **(código = 3) Anulada:** Contratação anulada conforme justificativa.

- **(código = 4) Suspensa:** Contratação suspensa conforme justificativa.
