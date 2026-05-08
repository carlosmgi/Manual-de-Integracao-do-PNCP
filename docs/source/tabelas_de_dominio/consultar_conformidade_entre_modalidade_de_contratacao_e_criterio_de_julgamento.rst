Consultar conformidade entre Modalidade de Contratação e Critério de Julgamento 
===============================================================================

Serviço que permite consultar as combinações de conformidade entre modalidade de contratação e/ou critério de julgamento ou todas as combinações cadastradas no PNCP.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/modalidade-criterio-julgamento
     - GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

    Não se aplica

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' '${BASE_URL}/v1/modalidade-criterio-julgamento' -H 'accept: */*'
   ou
   curl -X 'GET' '${BASE_URL}/v1/modalidade-criterio-julgamento?modalidadeId=6' -H 'accept: */*' 
   ou 
   curl 'GET' '${BASE_URL}/v1/modalidade-criterio-julgamento?criterioJulgamentoId=1' -H 'accept: */*' 
   ou 
   curl -X 'GET' '${BASE_URL}/v1/modalidade-criterio-julgamento?modalidadeId=6&criterioJulgamentoId=1' -H 'accept: */*' 

Dados de entrada
~~~~~~~~~~~~~~~~

.. Note:: 

   Informar um dos parâmetros de consulta: ``modalidadeId`` ou ``criterioJulgamentoId``.

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - modalidadeId
     - Inteiro
     - Não
     - Código de identificação da modalidade da contratação
   * - criterioJulgamentoId
     - Inteiro
     - Não
     - Código de identificação do critério de julgamento

Dados de retorno (lista de combinações)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - 1
     - modalidadeContratacao
     - Objeto
     - Dados da Modalidade de Contratação
   * - 1.1
     - id
     - Inteiro
     - Código de identificação da modalidade de contratação
   * - 1.2
     - nome
     - Texto
     - Nome da modalidade de contratação
   * - 1.3
     - descricao
     - Texto
     - Descrição da modalidade de contratação
   * - 1.4
     - statusAtivo
     - Booleano
     - Indicador de status da modalidade de contratação. True-Ativo / False-Inativo

   * - 2
     - criterioJulgamento
     - Objeto
     - Dados do Critério de Julgamento
   * - 2.1
     - id
     - Inteiro
     - Código de identificação do critério de julgamento
   * - 2.2
     - nome
     - Texto
     - Nome do critério de julgamento
   * - 2.3
     - descricao
     - Texto
     - Descrição do critério de julgamento
   * - 2.4
     - statusAtivo
     - Booleano
     - Indicador de status do critério de julgamento. True-Ativo / False-Inativo

   * - 3
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

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
     - Registro não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

\
