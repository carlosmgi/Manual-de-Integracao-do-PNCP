Baixar Arquivo/Documento de Intenção de Registro de Preço
=========================================================

Serviço que permite recuperar um arquivo/Documento pertencente a uma Intenção de Registro de Preço.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/irp/{ano}/{sequencial}/arquivos/{sequencialDocumento}
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
	  "${BASE_URL}/v1/orgaos/10000000000003/irp/2021/1/arquivos/1" \
	  -H "accept: */*"

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``cnpj``, ``ano``, ``sequencial`` e ``sequencialDocumento`` na URL.

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
     - :destaque-verde-claro:`sequencialDocumento`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Sequencial do arquivo/documento na IRP no PNCP.


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
     - :destaque-verde-claro:`urlDownload`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Url para download do arquivo/documento`

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - :destaque-verde-claro:`200`
     - :destaque-verde-claro:`OK`
     - :destaque-verde-claro:`Sucesso`
   * - :destaque-verde-claro:`400`
     - :destaque-verde-claro:`BadRequest`
     - :destaque-verde-claro:`Erro`
   * - :destaque-verde-claro:`422`
     - :destaque-verde-claro:`Unprocessable Entity`
     - :destaque-verde-claro:`Erro`
   * - :destaque-verde-claro:`500`
     - :destaque-verde-claro:`Internal Server Error`
     - :destaque-verde-claro:`Erro`

