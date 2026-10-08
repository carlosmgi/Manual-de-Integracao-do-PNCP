Consultar Normativos Base Por Código
====================================

Serviço que permite consultar os normativos base por código cadastrados no PNCP. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/normativo-base/{id}
     - GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

    Não se aplica

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:

   curl -k -X GET \
     "${BASE_URL}/v1normativo-base/{id}" \
     -H "accept: */*"


Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar  o parâmetro ``id`` na URL.

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - id
     - Inteiro
     - Sim
     - Código de identificação do normativo base


Dados de retorno
~~~~~~~~~~~~~~~~

.. list-table:: 
   :width: 100%
   :header-rows: 1
   :widths: auto
   :class: quebra-linha-dois-quatro

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação do normativo base.
   * - 2
     - nome
     - Texto
     - Nome do normativo base.
   * - 3
     - descricao
     - Texto
     - Descrição do normativo base.
   * - 4
     - statusAtivo
     - Booleano
     - Indicador de status do normativo base.

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 200
     - OK
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 404
     - Amparo legal não encontrado.
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro
\
