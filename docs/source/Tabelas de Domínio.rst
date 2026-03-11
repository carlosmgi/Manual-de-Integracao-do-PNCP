Tabelas de Domínio
==================

Instrumento Convocatório
------------------------
Para consulta aos instrumentos convocatórios cadastrados acessar a página no Portal PNCP pelo endereço `https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP foram disponibilizados os serviços para consulta de instrumento/os convocatório/os a seguir.

Consultar Instrumento Convocatório por Código
---------------------------------------------
Serviço que permite consultar um instrumento convocatório pelo seu código. 

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^
+-----------------------------+-------------+---------------------------+
| Endpoint                    | Método HTTP | Exemplo Payload           |
+=============================+=============+===========================+
| /v1/tipos-instrumentos-     | GET         | Não se aplica             |
| convocatorios/{id}|         |             |                           |
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
