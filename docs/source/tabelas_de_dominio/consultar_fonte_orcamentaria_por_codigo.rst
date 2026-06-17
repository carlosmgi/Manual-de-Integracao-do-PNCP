Consultar Fonte Orçamentária por Código 
=======================================

Serviço que permite consultar fonte orçamentária cadastrada no PNCP.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/fontes-orcamentarias/{id} 
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
     "${BASE_URL}/v1/fontes-orcamentarias/1" \
     -H "accept: */*"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar o parâmetro ``id`` na URL.

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - id
     - Inteiro
     - Sim
     - Código de identificação da fonte orçamentária

Dados de retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1
   :class: quebra-linha-dois-quatro

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - 1
     - id
     - Inteiro
     - Código de identificação da fonte orçamentária
   * - 2
     - nome
     - Texto
     - Nome da fonte orçamentária
   * - 3
     - descricao
     - Texto
     - Descrição da fonte orçamentária
   * - 4
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 5
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 6
     - statusAtivo
     - Booleano
     - Indicador de status da fonte orçamentária. True-Ativo / False-Inativo

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
     - Fonte orçamentária não encontrada
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

\
