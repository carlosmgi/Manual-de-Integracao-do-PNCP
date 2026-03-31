Consultar Documento de um Termo de Contrato
===========================================

Serviço que permite consultar um documento específico pertencente a um termo de
contrato.

Detalhes da Requisição
----------------------

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/contratos/{ano}/{sequencial}/termos/{sequencialTermo}/arquivos/{sequencialDocumento}
     - GET

Exemplo de Payload
------------------

Não se aplica.

Exemplo Requisição (cURL)
-------------------------

.. code-block:: bash
  :linenos:

   curl -X GET \
     "${BASE_URL}/v1/orgaos/10000000000003/contratos/2021/1/termos/1/arquivos/1" \
     -H "accept: */*"

Dados de Entrada
----------------

.. note::

   Alimentar o parâmetro {cnpj}, {ano}, {sequencial}, {sequencialTermo} e {sequencialDocumento} na URL.

.. list-table::
   :width: 100%
   :widths: 10 30 15 10 35
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
     - CNPJ do órgão do contrato
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do contrato
   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial do contrato no PNCP; Número sequencial gerado no momento que o contrato foi inserido no PNCP;
   * - 4
     - sequencialTermo
     - Inteiro
     - Sim
     - Sequencial do termo de contrato no PNCP; Número sequencial gerado no momento que o termo de contrato foi inserido no PNCP;
   * - 5
     - sequencialDocumento
     - Inteiro
     - Sim
     - Sequencial do documento no PNCP; Número sequencial gerado no momento que o documento foi inserido no PNCP;

**Dados de Retorno**
--------------------

.. list-table::

 * - Id
   - Campo
   - Tipo
   - Descrição
 * - 1
   - string
   - String
   - string do arquivo

**Códigos de Retorno**
----------------------

.. list-table::
   :width: 100%
   :widths: 10 25 25
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 200
     - Created
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 401
     - Unauthorized
     - Erro
   * - 422
     - Unprocessable
     - Erro
   * - 500
     - Internal Server Error
     - Erro
