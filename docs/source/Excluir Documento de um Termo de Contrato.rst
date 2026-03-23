Excluir Documento de um Termo de Contrato
=========================================

Serviço que permite remover um documento/arquivo pertencente a um termo de
contrato específico.

Detalhes da Requisição
----------------------

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/contratos/{ano}/{sequencial}/termos/{sequencialTermo}/arquivos/{sequencialDocumento}
     - DELETE

Exemplo de Payload
------------------

.. code-block:: json

   {
     "justificativa": "motivo/justificativa para exclusão do documento do termo do contrato"
   }

Exemplo Requisição (cURL)
-------------------------

.. code-block:: bash

   curl -k -X DELETE \
     --header "Authorization: Bearer access_token" \
     "${BASE_URL}/v1/orgaos/10000000000003/contratos/2021/1/termos/1/arquivos/1" \
     -H "accept: */*"

Dados de Entrada
----------------

.. note::

   Alimentar os parâmetros {cnpj}, {ano}, {sequencial}, {sequencialTermo} e {sequencialDocumento} na URL.

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
     - cnpj
     - Texto (14)
     - Sim
     - Cnpj do órgão do contrato
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do contrato
   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Número sequencial do contrato (gerado pelo PNCP)
   * - 4
     - sequencialTermo
     - Inteiro
     - Sim
     - Número sequencial do termo de contrato (gerado pelo PNCP)
   * - 5
     - sequencialDocumento
     - Inteiro
     - Sim
     - Número sequencial do documento do contrato (gerado pelo PNCP)
   * - 6
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para exclusão do documento do termo do contrato

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
