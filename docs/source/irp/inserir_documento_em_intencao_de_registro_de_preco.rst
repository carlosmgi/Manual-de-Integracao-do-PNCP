Inserir Documento em Intenção de Registro de Preço
==================================================

Serviço que permite inserir documento a uma Intenção de Registro de Preço (IRP).

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/irp/{ano}/{sequencial}/arquivos 
     - POST
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  :emphasize-lines: 1

	  Não se aplica

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

Enviando como arquivo:

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1-7

  	curl -k -X POST \
  	  --header "Authorization: Bearer access_token" \
  	  "${BASE_URL}/v1/orgaos/10000000000003/irp/2021/1/arquivos" \
  	  -H "accept: */*" \
  	  -H "Titulo-Documento: nome_do_arquivo" \
  	  -H "Tipo-Documento-Id: 1" \
  	  --F "arquivo=@Irp-2021-1.pdf;type=application/pdf"

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
     - :destaque-verde-claro:`ano`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Ano da IRP`
   * - :destaque-verde-claro:`3`
     - :destaque-verde-claro:`sequencial`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Sequencial da IRP`
   * - :destaque-verde-claro:`4`
     - :destaque-verde-claro:`tituloDocumento`
     - :destaque-verde-claro:`Texto (255)`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Título do documento`
   * - :destaque-verde-claro:`5`
     - :destaque-verde-claro:`tipoDocumentoId`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Código da tabela de domínio Tipo de documento`
   * - :destaque-verde-claro:`6`
     - :destaque-verde-claro:`arquivo`
     - :destaque-verde-claro:`Binário`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`String binária do arquivo`

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
     - :destaque-verde-claro:`Created`
     - :destaque-verde-claro:`Sucesso`
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
