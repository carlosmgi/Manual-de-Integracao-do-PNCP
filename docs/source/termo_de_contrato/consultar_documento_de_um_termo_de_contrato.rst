Consultar Documento de um Termo de Contrato
===========================================

Serviço que permite consultar um documento específico pertencente a um termo de contrato.

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
   * - /v1/orgaos/{cnpj}/contratos/{ano}/{sequencial}/termos/{sequencialTermo}/arquivos/{sequencialDocumento}
     - GET	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  
    Não se aplica
  
Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1

    curl -X GET  "${BASE_URL}/v1/orgaos/10000000000003/contratos/2021/1/termos/1/arquivos/1" \
     -H "accept: */*"

Dados de entrada
~~~~~~~~~~~~~~~~

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
     - Sequencial do contrato no PNCP; número sequencial gerado no momento que o contrato foi inserido no PNCP
   * - 4
     - sequencialTermo
     - Inteiro
     - Sim
     - Sequencial do termo de contrato no PNCP; número sequencial gerado no momento que o termo de contrato foi inserido no PNCP
   * - 5
     - sequencialDocumento
     - Inteiro
     - Sim
     - Sequencial do documento no PNCP; número sequencial gerado no momento que o documento foi inserido no PNCP

Dados de retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - string
     - String
     - String do arquivo

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 15 35 20
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
     - Erro
   * - 500
     - Internal Server Error
     - Erro

\
