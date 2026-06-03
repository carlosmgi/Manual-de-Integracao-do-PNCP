Inserir Fonte Orçamentária da Contratação
=========================================

Serviço que permite inserir uma ou mais fontes orçamentárias a uma Contratação. Tabelas de domínio - item Fonte Orçamentária.

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
	 
Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  
	{
    	"listaFonteOrcamentariaId": [ 1, 2 ]
  	}


Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -X 'POST' -H 'Authorization: Bearer access_token' "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/fonte-orcamentaria" 
  	-H "accept: */*" -H "Content-Type: application/json" -d "{ "listaFonteOrcamentariaId": [ 1, 2 ] }"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
	Alimentar os parâmetros ``{cnpj}``, ``{ano}`` e ``{sequencial}`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 10 10 15 55
   :header-rows: 1
   :class: quebra-linha-ultima-coluna

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - 1
     - cnpj
     - Texto (14)
     - Sim
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação ou alienação de bens).
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano da contratação.
   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP; Número gerado no momento que a contratação foi inserida no PNCP.
   * - 4
     - listaFonteOrcamentariaId
     - Lista de Inteiros
     - Sim
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
     - Erro
   * - 500
     - Internal Server Error
     - Erro

\
