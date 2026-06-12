Consultar conformidade entre Modalidade de Contratação e Critério de Julgamento por Código
==========================================================================================

Serviço que permite consultar a combinação de conformidade pelo código da modalidade de contratação e pelo código do critério de julgamento. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/modalidade-criterio-julgamento/{modalidadeId}/{criterioJulgamentoId} 
     - GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

    Não se aplica

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:

   curl -k -X GET \
     "${BASE_URL}/v1/modalidade-criterio-julgamento/6/1" \
     -H "accept: */*"

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar os parâmetros ``modalidadeId`` e ``criterioJulgamentoId`` na URL.

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1
   :class: quebra-linha-ultima-coluna

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - modalidadeId
     - Inteiro
     - Sim
     - Código de identificação da modalidade da contratação
   * - criterioJulgamentoId
     - Inteiro
     - Sim
     - Código de identificação do critério de julgamento

Dados de Retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 10 15 55
   :header-rows: 1
   :class: quebra-linha-ultima-coluna

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - modalidadeContratacao
     - 
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
     - 
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
