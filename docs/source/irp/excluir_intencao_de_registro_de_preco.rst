Excluir Intenção de Registro de Preço
=====================================

Serviço que permite marcar uma Intenção Registro de Preço como excluída logicamente. Este serviço será acionado por qualquer plataforma digital credenciada.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/irp/{ano}/{sequencial} 
     - DELETE

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  :emphasize-lines: 1-3

  	{ 
  		"justificativa": "Motivo/justificativa a exclusão da IRP" 
  	} 

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1-5

  	curl -k -X DELETE \
  	  --header "Authorization: Bearer access_token" \
  	  "${BASE_URL}/v1/orgaos/10000000000003/irp/2021/1" \
  	  -H "accept: */*" \
  	  -H "Content-Type: application/json"

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``cnpj``, ``ano`` e ``sequencial`` na URL.

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
   * - :destaque-verde-claro:`1`
     - :destaque-verde-claro:`cnpj`
     - :destaque-verde-claro:`Texto (14)`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Cnpj do órgão originário da IRP informado na inclusão (proprietário da IRP)`
   * - :destaque-verde-claro:`2`
     - ano`
     - :destaque-verde-claro:`Inteiro`
     - Sim`
     - :destaque-verde-claro:`Ano da IRP`
   * - :destaque-verde-claro:`3`
     - :destaque-verde-claro:`sequencial`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Sequencial da contratação no PNCP; Número sequencial gerado no momento que a contratação foi inserida no PNCP`
   * - :destaque-verde-claro:`4`
     - :destaque-verde-claro:`justificativa`
     - :destaque-verde-claro:`Texto (255)`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Motivo/justificativa para exclusão da IRP.`

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - :destaque-verde-claro:`204`
     - :destaque-verde-claro:`No Content`
     - :destaque-verde-claro:`Sucesso`
   * - :destaque-verde-claro:`400`
     - :destaque-verde-claro:`Bad Request`
     - :destaque-verde-claro:`Erro`
   * - :destaque-verde-claro:`401`
     - :destaque-verde-claro:`Unauthorized`
     - :destaque-verde-claro:`Erro`
   * - :destaque-verde-claro:`422`
     - :destaque-verde-claro:`Unprocessable Entity`
     - :destaque-verde-claro:`Erro`
   * - :destaque-verde-claro:`500`
     - :destaque-verde-claro:`Internal Server Error`
     - :destaque-verde-claro:`Erro`

