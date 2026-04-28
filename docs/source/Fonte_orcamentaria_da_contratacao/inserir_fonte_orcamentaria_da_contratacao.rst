Inserir Fonte Orçamentária da Contratação
=========================================

Serviço que permite inserir uma ou mais fontes orçamentárias a uma Contratação. Tabelas de domínio - item 5.25 Fonte Orçamentária.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/fonte-orcamentaria
     - POST
	 

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -X 'POST' -H 'Authorization: Bearer access_token'   "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/fonte-orcamentaria" -H "accept: */*" -H "Content-Type: application/json" -d "{ "listaFonteOrcamentariaId": [ 1, 2 ] }"

Dados de entrada
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - cnpj
     - Texto (14)
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação ou alienação de bens).
   * - 2
     - ano
     - Inteiro
     - Ano da contratação.
   * - 3
     - sequencial
     - Inteiro
     - Sequencial da contratação no PNCP; número gerado no momento que a contratação foi inserida no PNCP.
   * - 4
     - listaFonteOrcamentariaId
     - Lista de Inteiros
     - Lista de códigos de fontes orçamentárias da contratação.

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 201
     - Created
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 422
     - Unprocessable Entity
     - NotFound
   * - 500
     - Internal Server Error
     - Erro

\
