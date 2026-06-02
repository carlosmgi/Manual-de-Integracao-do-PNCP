Consultar conformidade entre Modalidade de Contratação e Fonte Orçamentária por Código 
======================================================================================

Serviço que permite consultar a combinação de conformidade pelo código da modalidade de contratação e pelo código da fonte orçamentária. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/modalidade-fonte-orcamentaria/{modalidadeId}/{fonteOrcamentariaId} 
     - GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

    Não se aplica

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' '${BASE_URL}/v1/modalidade-fonte-orcamentaria/6/1' -H 'accept: */*'

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   
   Alimentar o path parâmetro ``modalidadeId`` e ``fonteOrcamentariaId`` na URL.

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
     - Sim
     - Código de identificação da modalidade da contratação
   * - fonteOrcamentariaId
     - Inteiro
     - Sim
     - Código de identificação da fonte orçamentária

Dados de retorno
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
     - fonteOrcamentaria
     - 
     - Dados da Fonte Orçamentária
   * - 2.1
     - id
     - Inteiro
     - Código de identificação da fonte orçamentária
   * - 2.2
     - nome
     - Texto
     - Nome da fonte orçamentária
   * - 2.3
     - descricao
     - Texto
     - Descrição da fonte orçamentária
   * - 2.4
     - statusAtivo
     - Booleano
     - Indicador de status da fonte orçamentária. True-Ativo / False-Inativo

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
