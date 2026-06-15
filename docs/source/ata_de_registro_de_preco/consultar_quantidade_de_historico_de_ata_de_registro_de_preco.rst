Consultar quantidade de histórico de Ata de Registro de Preço
============================================================

Serviço que permite consultar a quantidade de registros de histórico vinculados a uma ata de registro de preço.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/atas/{sequencialAta}/historico/quantidade
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
	  "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/atas/1/historico/quantidade" \
	  -H "Accept: */*"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``{cnpj}``, ``{ano}``, ``{sequencial}`` e ``{sequencialAta}`` na URL.

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
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação)

   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano da contratação

   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP; número sequencial gerado no momento que a contratação foi inserida no PNCP

   * - 4
     - sequencialAta
     - Inteiro
     - Sim
     - Sequencial da ata no PNCP; número sequencial gerado no momento que a ata foi inserida no PNCP


Dados de retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - 1
     - quantidade
     - Inteiro
     - Quantidade de registros de histórico vinculados à ata

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 25
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo

   * - 200
     - OK
     - Sucesso

   * - 204
     - No Content
     - Sucesso

   * - 400
     - Bad Request
     - Erro

   * - 401
     - Unauthorized
     - Erro

   * - 422
     - Unprocessable Entity
     - Erro

   * - 500
     - Internal Server Error
     - Erro
