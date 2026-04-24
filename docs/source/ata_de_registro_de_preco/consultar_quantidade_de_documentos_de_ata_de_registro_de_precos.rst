Consultar quantidade de documentos de Ata de Registro de Preços
==============================================================

Serviço que permite consultar a quantidade de documentos vinculados a uma ata de registro de preço.

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
     - :destaque:`anoCompra`
     - :destaque:`Inteiro`
     - :destaque:`Ano da contratação`
   * - 3
     - sequencialCompra
     - Inteiro
     - Sequencial da contratação no PNCP; número sequencial gerado no momento da inclusão

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/arquivos/quantidade
     - GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

Não se aplica.

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
   :linenos:

   curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/atas/1/arquivos/quantidade" \
     -H "accept: */*"

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

Dados de retorno
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
     - quantidade
     - Inteiro
     - Quantidade de documentos vinculados à ata

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 25
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo

   * - 200
     - OK
     - Sucesso

   * - 204
     - No Content
     - Sucesso

   * - 400
     - Bad Request
     - Erro

   * - 401
     - Unauthorized
     - Erro

   * - 422
     - Unprocessable Entity
     - Erro

   * - 500
     - Internal Server Error
     - Erro

