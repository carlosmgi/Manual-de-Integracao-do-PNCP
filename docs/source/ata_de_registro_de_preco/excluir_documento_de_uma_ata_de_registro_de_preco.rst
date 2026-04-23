Excluir Documento de uma Ata de Registro de Preço
=================================================

Serviço que permite remover um documento em uma ata específica.

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
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/arquivos/{sequencialDocumento}
     - DELETE

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

Arquivo JSON:

.. code-block:: json
   :linenos:

   {
     "justificativa": "motivo/justificativa para exclusão do documento da ata"
   }

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
   :linenos:

   curl -k -X DELETE \
     "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/atas/1/arquivos/1" \
     -H "Authorization: Bearer access_token" \
     -H "accept: */*" \
     -H "Content-Type: application/pdf"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar o parâmetro {cnpj} na URL.

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
     - sequencialDocumento
     - Inteiro
     - Sim
     - Sequencial do documento da ata no PNCP; número sequencial gerado no momento que o documento da ata foi inserido no PNCP

   * - 6
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para a exclusão do documento da ata

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
