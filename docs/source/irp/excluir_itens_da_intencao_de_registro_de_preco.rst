Excluir Itens da Intenção de Registro de Preço
==============================================

Serviço destinado a excluir itens de uma Intenção de Registro de Preços (IRP).

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/irp/{ano}/{sequencial}/itens
     - DELETE

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  :emphasize-lines: 1-4

    {
      "numerosItens": [1,2,3],
      "justificativa": "string"
    }

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1-6

   curl -k -X DELETE \
     --header "Authorization: Bearer access_token" \
     "${BASE_URL}/v1/orgaos/10000000000003/irp/2022/1/itens" \
     -H "accept: */*" \
     -H "Content-Type: application/json" \
     --data "@/home/objeto.json"

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``cnpj``, ``ano`` e ``sequencial`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 10 10 55
   :header-rows: 1
   :class: quebra-linha-dois-ultima

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição

   * - :destaque-verde-claro:`1`
     - :destaque-verde-claro:`itensIrp`
     - :destaque-verde-claro:`Lista`
     - :destaque-verde-claro:`Sim`
     - 
   * - :destaque-verde-claro:`1.1`
     - :destaque-verde-claro:`numerosItens`
     - :destaque-verde-claro:`inteiro`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Lista dos itens da IRP a serem excluídos`
   * - :destaque-verde-claro:`2`
     - :destaque-verde-claro:`justificativa`
     - :destaque-verde-claro:`Texto (255)`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Motivo/justificativa para exclusão dos itens da IRP`
     
Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - :destaque-verde-claro:`204`
     - :destaque-verde-claro:`No Content`
     - :destaque-verde-claro:`Sucesso`
   * - :destaque-verde-claro:`400`
     - :destaque-verde-claro:`Bad Request`
     - :destaque-verde-claro:`Erro`
   * - :destaque-verde-claro:`401`
     - :destaque-verde-claro:`Unauthorized`
     - :destaque-verde-claro:`Erro`
   * - :destaque-verde-claro:`422`
     - :destaque-verde-claro:`Unprocessable Entity`
     - :destaque-verde-claro:`Erro`
   * - :destaque-verde-claro:`500`
     - :destaque-verde-claro:`Internal Server Error`
     - :destaque-verde-claro:`Erro`
