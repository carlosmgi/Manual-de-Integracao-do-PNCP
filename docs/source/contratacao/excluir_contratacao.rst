Excluir Contratação
===================

Serviço que permite excluir uma contratação. Este serviço será acionado por qualquer plataforma digital credenciada. 

.. warning::

	Não será possível excluir Contratação com Ata de Registro de Preços ou Contrato ativo. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial} 
     - DELETE
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

	{ 
		"justificativa": "Motivo/justificativa a exclusão da contratação" 
	} 


Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X  DELETE --header "Authorization: Bearer access_token" 
	"${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1" -H "accept: */*" -H "Content-Type: application/json"

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar os parâmetros ``cnpj``, ``ano`` e ``sequencial`` na URL.

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - 1
     - cnpj
     - Texto (14)
     - Sim
     - CNPJ do órgão originário da contratação
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano da contratação
   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP
   * - 4
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para exclusão da contratação

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
   * - 422
     - Unprocessable Entity
     - NotFound
   * - 500
     - Internal Server Error
     - Erro

\
