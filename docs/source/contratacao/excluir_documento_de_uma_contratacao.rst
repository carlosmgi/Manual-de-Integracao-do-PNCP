Excluir Documento de uma Contratação
====================================

Serviço que permite remover documento pertencente a uma Contratação. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/arquivos/{sequencialDocumento} 
     - DELETE
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

	{ 
		"justificativa": "Motivo/justificativa para exclusão do documento da contratação" 
	} 
  

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X DELETE --header "Authorization: Bearer access_token" 
	"${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/arquivos/1" -H "accept: */* -H 
	"Content-Type: application/pdf" -H Content-Disposition: filename="nome_arquivo" 

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar os parâmetros ``cnpj``, ``ano``, ``sequencial`` e ``sequencialDocumento`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 15 10 25 55
   :header-rows: 1
   :class: quebra-ultima-coluna

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição

   * - 1
     - cnpj
     - Texto (14)
     - Sim
     - Cnpj do órgão originário da contratação informado na inclusão (proprietário da contratação ou alienação de bens)

   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano da contratação

   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial da Contratação no PNCP; Número sequencial gerado no momento que a contratação foi inserida no PNCP;

   * - 4
     - sequencialDocumento
     - Inteiro
     - Sim
     - Sequencial do documento no PNCP; Número sequencial gerado no momento que o documento foi inserido no PNCP;

   * - 5
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para exclusão do documento da contratação.

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
     - Delete
     - Sucesso
   * - 400
     - Bad Request
     - Erro
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro


\
