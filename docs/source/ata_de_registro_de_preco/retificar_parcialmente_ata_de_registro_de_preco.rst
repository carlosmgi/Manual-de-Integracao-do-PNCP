Retificar Parcialmente Ata de Registro de Preço
===============================================

Serviço que permite retificar parcialmente os dados de uma ata de Registro de Preço.

.. Attention::

   Não será permitida a retificação do atributo "possibilidadeAdesao" de “true” para “false” da Ata quando a mesma possuir órgãos não participantes e/ou contratos de não participantes vinculados

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}
     - PATCH

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

Para retificação dos dados da ata:

.. code-block:: json
   :linenos:
   :emphasize-lines: 1-4

   {
      "possibilidadeAdesao": true,
      "justificativa": "motivo/justificativa para retificacao da ata"
   }

Para o cancelamento da ata:

.. code-block:: json
   :linenos:
   :emphasize-lines: 1-5

   {
      "cancelado": true,
      "dataCancelamento": "2023-01-01T12:00:00",
      "justificativa": "motivo/justificativa para cancelamento da ata"
   }

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
   :linenos:
   :emphasize-lines: 1-5

   curl -X 'PATCH' '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1' \
     -H 'accept: */*' \
     -H 'Authorization: Bearer <TOKEN_AUTORIZACAO>' \
     -H 'Content-Type: application/json' \
     -d '@/home/objeto.json'

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
     - Sequencial da contratação no PNCP; número sequencial gerado no momento em que a contratação foi inserida no PNCP
   * - 4
     - sequencialAta
     - Inteiro
     - Sim
     - Sequencial da ata no PNCP; número sequencial gerado no momento em que a ata foi inserida no PNCP
   * - 5
     - numeroAtaRegistroPreco
     - Texto (50)
     - Não
     - Número da ata no sistema de origem
   * - 6
     - anoAta
     - Inteiro
     - Não
     - Ano da ata
   * - 7
     - dataAssinatura
     - Data
     - Não
     - Informar a data de assinatura da ata
   * - 8
     - dataInicioVigencia
     - Data
     - Não
     - Informar a data de início de vigência da ata
   * - 9
     - dataFimVigencia
     - Data
     - Não
     - Informar a data de fim de vigência da ata
   * - 10
     - cancelado
     - Booleano
     - Não
     - Indicador de cancelamento da ata; se omitido, assume valor “Falso”
   * - 11
     - dataCancelamento
     - Data e Hora
     - Não
     - Informar a data e hora de cancelamento da ata caso o indicador de cancelamento seja verdadeiro
   * - :destaque-amarelo-claro:`12`
     - :destaque-amarelo-claro:`possibilidadeAdesao`
     - :destaque-amarelo-claro:`Booleano`
     - :destaque-amarelo-claro:`Não`
     - :destaque-amarelo-claro:`Indicador se a ata permite adesão de não participantes (False = Não / True = Sim)`
   * - 13
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para a retificação dos atributos da ata

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
     - -
     - JSON
     - Dados da Ata de Registro de Preço após alteração

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
