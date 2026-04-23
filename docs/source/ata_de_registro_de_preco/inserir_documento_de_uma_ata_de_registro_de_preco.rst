Inserir Documento de uma Ata de Registro de Preço
=================================================

Serviço que permite inserir/anexar documento/arquivo a uma Ata. O sistema permite o upload de arquivos com as extensões listadas na seção: Tabelas de domínio - Extensões de arquivos aceitos pelas APIs de Documento.

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

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/arquivos
     - POST

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

Não se aplica.

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
   :linenos:

   curl -X 'POST' '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1/arquivos' \
     -H 'accept: */*' \
     -H 'Titulo-Documento: teste doc' \
     -H 'Tipo-Documento: 1' \
     -H 'Authorization: Bearer <TOKEN_AUTORIZACAO>' \
     -H 'Content-Type: multipart/form-data' \
     -F 'arquivo=@10_coisas_que_todo_programador_Java_deve_saber.pdf;type=application/pdf'

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar o parâmetro {cnpj}, {anoCompra}, {sequencialCompra} e {sequencialAta} na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 15 40
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
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação)

   * - 2
     - anoCompra
     - Inteiro
     - Sim
     - Ano da contratação

   * - 3
     - sequencialCompra
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP; número sequencial gerado no momento que a contratação foi inserida no PNCP

   * - 4
     - sequencialAta
     - Inteiro
     - Sim
     - Sequencial da ata no PNCP; número sequencial gerado no momento que a ata foi inserida no PNCP

   * - 5
     - Titulo-Documento
     - Texto (50)
     - Sim
     - Título do documento

   * - 6
     - Tipo-Documento
     - Inteiro
     - Sim
     - Código da tabela de domínio Tipo de documento

   * - 7
     - arquivo
     - String Binária
     - Sim
     - String binária do arquivo

Dados de retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 10 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - 1
     - location
     - Texto (255) 
     - Sim
     - Endereço http do recurso criado

Exemplo de Retorno
~~~~~~~~~~~~~~~~~~

.. code-block:: http
   :linenos:

   access-control-allow-credentials: true
   access-control-allow-headers: Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin
   access-control-allow-methods: GET,PUT,POST,DELETE,OPTIONS
   access-control-allow-origin: *
   cache-control: no-cache,no-store,max-age=0,must-revalidate
   content-length: 0
   date: ?
   expires: 0
   location: https://treina.pncp.gov.br/api/pncp/v1/orgaos/10000000000003/compras/2021/1/atas/1/arquivos/1
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
   :widths: 10 25 25
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
   * - 401
     - Unauthorized
     - Erro
   * - 404
     - NotFound
     - Erro
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro
