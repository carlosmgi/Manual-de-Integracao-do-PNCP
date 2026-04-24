Excluir Parte Envolvida em Ata de Registro de Preço
===================================================

Serviço que recupera os dados de uma parte envolvida específica de uma ata de registro de preço.

.. Attention::

   A parte envolvida não poderá ser excluída caso exista contrato vinculado a ela na respectiva ARP.

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
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/partesenvolvidas/{cnpjOrgao}/{codUnidade}/{tipoParteEnvolvida}
     - DELETE

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
   :linenos:

   {
     "justificativa": "Motivo/justificativa para exclusão da parte envolvida"
   }

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
   :linenos:

   curl -k -X DELETE --header "Authorization: Bearer access_token" \
     "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/atas/1/partesenvolvidas/10000000000003/1/2" \
     -H "accept: */* -H "Content-Type: application/pdf"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar o parâmetro {cnpj}, {anoCompra}, {sequencialCompra}, {sequencialAta} na URL.

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
     - Cnpj do órgão originário da contratação informado na inclusão (proprietário da contratação)

   * - 2
     - anoCompra
     - Inteiro
     - Sim
     - Ano da contratação

   * - 3
     - sequencialCompra
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP; Número sequencial gerado no momento que a contratação foi inserida no PNCP;

   * - 4
     - sequencialAta
     - Inteiro
     - Sim
     - Sequencial da ata no PNCP; Número sequencial gerado no momento que a ata foi inserida no PNCP;

   * - 5
     - cnpjOrgao
     - Texto (14)
     - Sim
     - CNPJ do órgão/entidade da parte envolvida

   * - 6
     - codUnidade
     - Texto (30)
     - Sim
     - Código da unidade administrativa da parte envolvida

   * - 7
     - tipoParteEnvolvida
     - Inteiro
     - Sim
     - Código do tipo da parte envolvida

   * - 8
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para a exclusão da parte envolvida da ata.

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 25
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo

   * - 204
     - No Content
     - Sucesso

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

