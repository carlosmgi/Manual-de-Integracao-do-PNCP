Excluir Arquivo/Documento de Intenção de Registro de Preço
==========================================================

Serviço destinado a excluir Arquivo/Documento de uma Intenção de Registro de Preços (IRP).

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/irp/{ano}/{sequencial}/arquivos/{sequencialDocumento}
     - DELETE

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  :emphasize-lines: 1-3

    {
      "justificativa": "string"
    }

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1-6

   curl -k -X DELETE \
     --header "Authorization: Bearer access_token" \
     "${BASE_URL}/v1/orgaos/10000000000003/irp/2022/1/arquivos/1" \
     -H "accept: */*" \
     -H "Content-Type: application/json" \
     --data "@/home/objeto.json"

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``cnpj``, ``ano``, ``sequencial`` e ``sequencialDocumento``  na URL.

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
     - :destaque-verde-claro:`justificativa`
     - :destaque-verde-claro:`Texto (255)`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Motivo/justificativa para exclusão do Arquivo/Documento na IRP`


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
