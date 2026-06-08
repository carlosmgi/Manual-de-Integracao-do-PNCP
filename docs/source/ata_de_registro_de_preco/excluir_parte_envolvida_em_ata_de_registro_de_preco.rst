Excluir Parte Envolvida em Ata de Registro de Preço
===================================================

:destaque-amarelo-claro:`Serviço que recupera os dados de uma parte envolvida específica de uma ata de registro de preço.`

.. Attention::

   A parte envolvida não poderá ser excluída caso exista contrato vinculado a ela na respectiva ARP.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - :destaque-amarelo-claro:`/v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/partesenvolvidas/{cnpjOrgao}/{codUnidade}/{tipoParteEnvolvida}`
     - :destaque-amarelo-claro:`DELETE`

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
   :linenos:
   :emphasize-lines: 1-3

   {
   	"justificativa": "Motivo/justificativa para exclusão da parte envolvida"
   }

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
   :linenos:
   :emphasize-lines: 1-4

   curl -k -X DELETE \
     "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/atas/1/partesenvolvidas/10000000000003/1/2" \
     -H "Authorization: Bearer access_token" \
     -H "Accept: */*"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   :destaque-amarelo-claro:`Alimentar os parâmetros {cnpj}, {anoCompra}, {sequencialCompra}, {sequencialAta} na URL.`

.. list-table::
   :width: 100%
   :widths: 5 10 10 15 55
   :header-rows: 1
   :class: quebra-linha-ultima-coluna

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição

   * - :destaque-amarelo-claro:`1`
     - :destaque-amarelo-claro:`cnpj`
     - :destaque-amarelo-claro:`Texto (14)`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Cnpj do órgão originário da contratação informado na inclusão (proprietário da contratação)`

   * - :destaque-amarelo-claro:`2`
     - :destaque-amarelo-claro:`anoCompra`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Ano da contratação`

   * - :destaque-amarelo-claro:`3`
     - :destaque-amarelo-claro:`sequencialCompra`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Sequencial da contratação no PNCP; Número sequencial gerado no momento que a contratação foi inserida no PNCP;`

   * - :destaque-amarelo-claro:`4`
     - :destaque-amarelo-claro:`sequencialAta`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Sequencial da ata no PNCP; Número sequencial gerado no momento que a ata foi inserida no PNCP;`

   * - :destaque-amarelo-claro:`5`
     - :destaque-amarelo-claro:`cnpjOrgao`
     - :destaque-amarelo-claro:`Texto (14)`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`CNPJ do órgão/entidade da parte envolvida`

   * - :destaque-amarelo-claro:`6`
     - :destaque-amarelo-claro:`codUnidade`
     - :destaque-amarelo-claro:`Texto (30)`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Código da unidade administrativa da parte envolvida`

   * - :destaque-amarelo-claro:`7`
     - :destaque-amarelo-claro:`tipoParteEnvolvida`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Código do tipo da parte envolvida`

   * - :destaque-amarelo-claro:`8`
     - :destaque-amarelo-claro:`justificativa`
     - :destaque-amarelo-claro:`Texto (255)`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Motivo/justificativa para a exclusão da parte envolvida da ata.`


Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 25
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo

   * - :destaque-amarelo-claro:`204`
     - :destaque-amarelo-claro:`No Content`
     - :destaque-amarelo-claro:`Sucesso`

   * - :destaque-amarelo-claro:`401`
     - :destaque-amarelo-claro:`Unauthorized`
     - :destaque-amarelo-claro:`Erro`

   * - :destaque-amarelo-claro:`404`
     - :destaque-amarelo-claro:`NotFound`
     - :destaque-amarelo-claro:`Erro`

   * - :destaque-amarelo-claro:`422`
     - :destaque-amarelo-claro:`Unprocessable Entity`
     - :destaque-amarelo-claro:`Erro`

   * - :destaque-amarelo-claro:`500`
     - :destaque-amarelo-claro:`Internal Server Error`
     - :destaque-amarelo-claro:`Erro`

\
