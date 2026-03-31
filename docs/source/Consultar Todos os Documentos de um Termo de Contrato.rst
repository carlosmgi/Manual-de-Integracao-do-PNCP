Consultar Todos os Documentos de um Termo de Contrato
=====================================================

Serviço que permite consultar a lista de documentos pertencentes a um termo de
contrato específico.

Detalhes da Requisição
----------------------

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/contratos/{ano}/{sequencial}/termos/{sequencialTermo}/arquivos
     - GET

Exemplo de Payload
------------------

Não se aplica.

Exemplo Requisição (cURL)
-------------------------

.. code-block:: bash

   curl -k -X GET \
     "${BASE_URL}/v1/orgaos/10000000000003/contratos/2021/1/termos/1/arquivos" \
     -H "accept: */*"

Dados de Entrada
----------------

.. note::

   Alimentar o parâmetro {cnpj}, {ano}, {sequencial} e {sequencialTermo} na URL.

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
     - Sequencial do contrato no PNCP; Número sequencial gerado no momento que o contrato foi inserido no PNCP;
   * - 4
     - sequencialTermo
     - Inteiro
     - Sim
     - Sequencial do termo de contrato no PNCP; Número sequencial gerado no momento que o termo de contrato foi inserido no PNCP;

Dados de retorno
----------------

.. list-table::
   :width: 100%
   :widths: 10 30 15 45
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - documentos
     - Lista
     - Lista de documentos
   * - 1.1
     - sequencialDocumento
     - Inteiro
     - Número sequencial atribuído ao arquivo
   * - 1.2
     - url
     - Texto
     - URL para download do arquivo
   * - 1.3
     - tipoDocumentoNome
     - Texto
     - Nome do tipo de documento conforme PNCP
   * - 1.4
     - titulo
     - Texto
     - Título referente ao arquivo
   * - 1.5
     - dataPublicacaoPncp
     - Data
     - Data de publicação do arquivo no portal PNCP
   * - 1.6
     - uri
     - Texto
     - URI para download do arquivo
   * - 1.7
     - cnpj
     - Texto
     - CNPJ do órgão contratante
   * - 1.8
     - anoCompra
     - Inteiro
     - Ano da contratação associada ao termo de contrato
   * - 1.9
     - sequencialCompra
     - Inteiro
     - Sequencial da contratação no PNCP; número gerado no momento da inclusão

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
