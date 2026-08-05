Consultar Dados de Todos os Documentos de uma Intenção de Registro de Preço
===========================================================================

Serviço que permite recuperar arquivos pertencentes a uma Intenção de Registro de Preço. Este serviço será acionado por qualquer plataforma digital credenciada.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/irp/{ano}/{sequencial}/arquivos 
     - GET
	 
Exemplo de Payload
------------------

.. code-block:: json
  :linenos:
  :emphasize-lines: 1

    Não se aplica

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1-3

	curl -k -X GET \
	  "${BASE_URL}/v1/orgaos/10000000000003/irp/2021/1/arquivos" \
	  -H "accept: */*"

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``cnpj``, ``ano`` e ``sequencial`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1
   :class: quebra-linha-dois-quatro

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - :destaque-verde-claro:`1`
     - :destaque-verde-claro:`cnpj`
     - :destaque-verde-claro:`Texto (14)`
     - :destaque-verde-claro:`Cnpj do órgão originário da IRP informado na inclusão (proprietário da IRP)`
   * - :destaque-verde-claro:`2`
     - :destaque-verde-claro:`ano`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Ano da IRP`
   * - :destaque-verde-claro:`3`
     - :destaque-verde-claro:`sequencial`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Sequencial da IRP no PNCP; Número sequencial gerado no momento que a IRP foi inserida no PNCP`
   * - :destaque-verde-claro:`4`
     - :destaque-verde-claro:`pagina`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Utilizado para paginação dos itens. Número da página.`
   * - :destaque-verde-claro:`5`
     - :destaque-verde-claro:`tamanhoPagina`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Utilizado para paginação dos itens. Quantidade itens por página.`

Dados de Retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1
   :class: quebra-linha-dois-quatro

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - :destaque-verde-claro:`1`
     - :destaque-verde-claro:`Lista de arquivos`
     - 
     - 
   * - :destaque-verde-claro:`1.1`
     - :destaque-verde-claro:`urlDownload`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Url para download do arquivo/documento`
   * - :destaque-verde-claro:`1.2`
     - :destaque-verde-claro:`dataPublicacaoPncp`
     - :destaque-verde-claro:Data/hora`
     - :destaque-verde-claro:`Data/hora de inclusão do arquivo na IRP.`
   * - :destaque-verde-claro:`1.3`
     - :destaque-verde-claro:`sequencialIrp`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Sequencial da IRP no PNCP; Número sequencial gerado no momento que a IRP foi inserida no PNCP`
   * - :destaque-verde-claro:`1.4`
     - :destaque-verde-claro:`sequencialDocumento`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Sequencial do arquivo/documento na IRP`
   * - :destaque-verde-claro:`1.5`
     - :destaque-verde-claro:`titulo`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Título do arquivo/documento na IRP

