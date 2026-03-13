Inserir Documento a um Contrato ou Empenho
==========================================

Serviço que permite inserir um documento/arquivo a um contrato/empenho. O sistema
permite o upload de arquivos com as extensões listadas na seção: Tabelas de domínio -
Extensões de arquivos aceitos pelas APIs de Documento.

Detalhes da Requisição
----------------------

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/contratos/{ano}/{sequencial}/arquivos
     - POST

Exemplo de Payload
------------------

Não se aplica.

Exemplo Requisição (cURL)
-------------------------

.. code-block:: bash

   curl -k -X POST \
     --header "Authorization: Bearer access_token" \
     -H "accept: */*" \
     -H "Content-Type: multipart/form-data" \
     -H "Titulo-Documento: Contrato-2021-1" \
     -H "Tipo-Documento-Id: 12" \
     "${BASE_URL}/v1/orgaos/10000000000003/contratos/2021/1/arquivos" \
     -F "arquivo=@Contrato-2021-1.pdf;type=application/pdf"

Dados de Entrada
----------------

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
     - CNPJ
     - Texto (14)
     - Sim
     - Cnpj do órgão do contrato ou empenho
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do contrato ou empenho
   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial do contrato ou empenhono PNCP; Número sequencialgerado no momento que o contratofoi inserido no PNCP;
   * - 4
     - Titulo-Documento
     - Texto (50)
     - Sim
     - Título do documento
   * - 5
     - Tipo-Documento-Id
     - Inteiro
     - Sim
     - Código da tabela de domínio Tipo de documento

Dados de retorno
----------------

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
----------------------

.. code-block:: http
   :linenos:

   Retorno:
   access-control-allow-credentials: true
   access-control-allow-headers: Content-Type, Authorization, X-Requested-With, Content-Length, Accept, Origin
   access-control-allow-methods: GET, PUT, POST, DELETE, OPTIONS
   access-control-allow-origin: *
   cache-control: no-cache, no-store, max-age=0, must-revalidate
   content-length: 0
   date: ?
   expires: 0
   location: https://treina.pncp.gov.br/api/pncp/v1/orgaos/10000000000003/contratos/2021/1/arquivos/1
   nome-bucket: ?
   pragma: no-cache
   strict-transport-security: max-age=?
   x-content-type-options: nosniff
   x-firefox-spdy: ?
   x-frame-options: DENY
   x-xss-protection: 1; mode=block

**Códigos de Retorno**
----------------------

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
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro
