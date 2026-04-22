:destaque-amarelo-claro:`Retificar Parcialmente Ata de Registro de Preço`
===============================================

:destaque-amarelo-claro:`Serviço que permite retificar parcialmente os dados de uma ata de Registro de Preço.`

.. Attention::

   Não será permitida a retificação do atributo "possibilidadeAdesao" de “true” para “false” da Ata quando a mesma possuir órgãos não participantes e/ou contratos de não participantes vinculados

:destaque-amarelo-claro:`Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}
     - PATCH`

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

**Para retificação dos dados da ata:**

.. code-block:: json
   :linenos:
   :emphasize-lines: 1-4

   {
     "possibilidadeAdesao": true,
     "justificativa": "motivo/justificativa para retificacao da ata"
   }

**Para o cancelamento da ata:**

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
   :emphasize-lines: 1-4

   curl -X 'PATCH' '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1' \
     -H 'accept: */*' \
     -H 'Authorization: Bearer <TOKEN_AUTORIZACAO>' \
     -H 'Content-Type: application/json' \
     -d '@/home/objeto.json'
