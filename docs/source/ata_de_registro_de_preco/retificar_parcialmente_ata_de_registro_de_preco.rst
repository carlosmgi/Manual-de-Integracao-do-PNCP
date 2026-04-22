:destaque-amarelo-claro:`Retificar Parcialmente Ata de Registro de Preço`
===============================================

:destaque-amarelo-claro:`Serviço que permite retificar parcialmente os dados de uma ata de Registro de Preço.`

.. Attention::

   Não será permitida a retificação do atributo "possibilidadeAdesao" de “true” para “false” da Ata quando a mesma possuir órgãos não participantes e/ou contratos de não participantes vinculados

:destaque-amarelo-claro:`Detalhes da Requisição`
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - :destaque-amarelo-claro:`Endpoint`
     - :destaque-amarelo-claro:`Método HTTP`
   * - :destaque-amarelo-claro:`/v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}`
     - :destaque-amarelo-claro:`PATCH`

:destaque-amarelo-claro:`Exemplo de Payload`
~~~~~~~~~~~~~~~~~~

:destaque-amarelo-claro:`Para retificação dos dados da ata:`

.. code-block:: json
   :linenos:
   :emphasize-lines: 1-4

   {
      "possibilidadeAdesao": true,
      "justificativa": "motivo/justificativa para retificacao da ata"
   }

:destaque-amarelo-claro:`Para o cancelamento da ata:`

.. code-block:: json
   :linenos:
   :emphasize-lines: 1-5

   {
      "cancelado": true,
      "dataCancelamento": "2023-01-01T12:00:00",
      "justificativa": "motivo/justificativa para cancelamento da ata"
   }

:destaque-amarelo-claro:`Exemplo Requisição (cURL)`
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
   :linenos:
   :emphasize-lines: 1-5

   curl -X 'PATCH' '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1' \
     -H 'accept: */*' \
     -H 'Authorization: Bearer <TOKEN_AUTORIZACAO>' \
     -H 'Content-Type: application/json' \
     -d '@/home/objeto.json'

:destaque-amarelo-claro:`Dados de entrada`
~~~~~~~~~~~~~~~~

.. note::
   Alimentar o parâmetro {cnpj}, {anoCompra}, {sequencialCompra} e {sequencialAta} na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 15 40
   :header-rows: 1

   * - :destaque-amarelo-claro:`Id`
     - :destaque-amarelo-claro:`Campo`
     - :destaque-amarelo-claro:`Tipo`
     - :destaque-amarelo-claro:`Obrigatório`
     - :destaque-amarelo-claro:`Descrição`

   * - :destaque-amarelo-claro:`1`
     - :destaque-amarelo-claro:`cnpj`
     - :destaque-amarelo-claro:`Texto (14)`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação)`

   * - :destaque-amarelo-claro:`2`
     - :destaque-amarelo-claro:`anoCompra`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Ano da contratação`

   * - :destaque-amarelo-claro:`3`
     - :destaque-amarelo-claro:`sequencialCompra`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Sequencial da contratação no PNCP; número sequencial gerado no momento em que a contratação foi inserida no PNCP`

   * - :destaque-amarelo-claro:`4`
     - :destaque-amarelo-claro:`sequencialAta`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Sequencial da ata no PNCP; número sequencial gerado no momento em que a ata foi inserida no PNCP`

   * - :destaque-amarelo-claro:`5`
     - :destaque-amarelo-claro:`numeroAtaRegistroPreco`
     - :destaque-amarelo-claro:`Texto (50)`
     - :destaque-amarelo-claro:`Não`
     - :destaque-amarelo-claro:`Número da ata no sistema de origem`

   * - :destaque-amarelo-claro:`6`
     - :destaque-amarelo-claro:`anoAta`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Não`
     - :destaque-amarelo-claro:`Ano da ata`

   * - :destaque-amarelo-claro:`7`
     - :destaque-amarelo-claro:`dataAssinatura`
     - :destaque-amarelo-claro:`Data`
     - :destaque-amarelo-claro:`Não`
     - :destaque-amarelo-claro:`Informar a data de assinatura da ata`

   * - :destaque-amarelo-claro:`8`
     - :destaque-amarelo-claro:`dataInicioVigencia`
     - :destaque-amarelo-claro:`Data`
     - :destaque-amarelo-claro:`Não`
     - :destaque-amarelo-claro:`Informar a data de início de vigência da ata`

   * - :destaque-amarelo-claro:`9`
     - :destaque-amarelo-claro:`dataFimVigencia`
     - :destaque-amarelo-claro:`Data`
     - :destaque-amarelo-claro:`Não`
     - :destaque-amarelo-claro:`Informar a data de fim de vigência da ata`

   * - :destaque-amarelo-claro:`10`
     - :destaque-amarelo-claro:`cancelado`
     - :destaque-amarelo-claro:`Booleano`
     - :destaque-amarelo-claro:`Não`
     - :destaque-amarelo-claro:`Indicador de cancelamento da ata; se omitido, assume valor “Falso”`

   * - :destaque-amarelo-claro:`11`
     - :destaque-amarelo-claro:`dataCancelamento`
     - :destaque-amarelo-claro:`Data e Hora`
     - :destaque-amarelo-claro:`Não`
     - :destaque-amarelo-claro:`Informar a data e hora de cancelamento da ata caso o indicador de cancelamento seja verdadeiro`

   * - :destaque-amarelo-claro:`12`
     - :destaque-amarelo-claro:`possibilidadeAdesao`
     - :destaque-amarelo-claro:`Booleano`
     - :destaque-amarelo-claro:`Não`
     - :destaque-amarelo-claro:`Indicador se a ata permite adesão de não participantes (False = Não / True = Sim)`

   * - :destaque-amarelo-claro:`13`
     - :destaque-amarelo-claro:`justificativa`
     - :destaque-amarelo-claro:`Texto (255)`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Motivo/justificativa para a retificação dos atributos da ata`

Dados de retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - :destaque-amarelo-claro:`Id`
     - :destaque-amarelo-claro:`Campo`
     - :destaque-amarelo-claro:`Tipo`
     - :destaque-amarelo-claro:`Descrição`

   * - :destaque-amarelo-claro:`1`
     - :destaque-amarelo-claro:`-`
     - :destaque-amarelo-claro:`JSON`
     - :destaque-amarelo-claro:`Dados da Ata de Registro de Preço após alteração`

**Códigos de Retorno**
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 25
   :header-rows: 1

   * - :destaque-amarelo-claro:`Código HTTP`
     - :destaque-amarelo-claro:`Mensagem`
     - :destaque-amarelo-claro:`Tipo`

   * - :destaque-amarelo-claro:`201`
     - :destaque-amarelo-claro:`Created`
     - :destaque-amarelo-claro:`Sucesso`

   * - :destaque-amarelo-claro:`400`
     - :destaque-amarelo-claro:`BadRequest`
     - :destaque-amarelo-claro:`Erro`

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
