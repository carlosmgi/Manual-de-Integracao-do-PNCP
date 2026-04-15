Inserir Documento a uma Contratação
===================================

Serviço que permite inserir/anexar um documento/arquivo a uma Contratação. O sistema permite o upload de arquivos com as extensões listadas na seção: Tabelas de domínio - Extensões de arquivo aceitos pelas APIs de Documento.

.. Attention::

   As alterações da versão |versao| estão em destaque, conforme exemplo a seguir:

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - cnpj
     - Texto
     - CNPJ do órgão do contrato/empenho
   * - :destaque:`2`
     - :destaque:`ano`
     - :destaque:`Inteiro`
     - :destaque:`Ano do contrato/empenho`
   * - 3
     - sequencialContrato
     - Inteiro
     - Sequencial do contrato/empenho no PNCP; número sequencial gerado no momento da inclusão

\

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/arquivos 
     - POST


Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X POST --header "Authorization: Bearer access_token" 
	"${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/arquivos" -H "accept: */*" -H 
	"Content-Type: multipart/form-data" -H "Titulo-Documento: Edital-2021-1" -H "Tipo-Documento-Id: 2" -F "arquivo=@Edital-2021-1.pdf;type=application/pdf" 

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar os parâmetros ``cnpj``, ``ano`` e ``sequencial`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 10 45
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
     - tituloDocumento
     - Texto (255)
     - Sim
     - Título do documento

   * - 5
     - tipoDocumentoId
     - Inteiro
     - Sim
     - Código da tabela de domínio Tipo de documento

   * - 6
     - arquivo
     - Binário
     - Sim
     - Conteúdo do arquivo em formato binário

Dados de Retorno
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
     - location
     - Texto (255)
     - Endereço HTTP do recurso criado


Exemplo de Retorno
~~~~~~~~~~~~~~~~~~

.. code-block:: bash

 
	Retorno: 
	access-control-allow-credentials: true 
	access-control-allow-headers: Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin, 
	access-control-allow-methods: GET,PUT,POST,DELETE,OPTIONS 
	access-control-allow-origin: * 
	cache-control: no-cache,no-store,max-age=0,must-revalidate 
	content-length: 0 
	date: ? 
	expires: 0 
	location: https://treina.pncp.gov.br/api/pncp/v1/orgaos/10000000000003/compras/2021/1/arquivos/1 
	nome-bucket: ? 
	pragma: no-cache 
	strict-transport-security: max-age=? 
	x-content-type-options: nosniff 
	x-firefox-spdy: ? 
	x-frame-options: DENY 
	x-xss-protection: 1; mode=block


Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 20
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
