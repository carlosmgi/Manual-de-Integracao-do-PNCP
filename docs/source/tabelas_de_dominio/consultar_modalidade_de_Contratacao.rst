Consultar Modalidades de Contratação 
====================================

Serviço que permite consultar as modalidades de contratação cadastradas no PNCP. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/modalidades
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
     "${BASE_URL}/v1/modalidades" \
     -H "accept: */*"

    ou

   curl -k -X GET \
     "${BASE_URL}/v1/modalidades?statusAtivo=true" \
     -H "accept: */*"

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar o parâmetro ``statusAtivo``.

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1
   :class: quebra-linha-ultima-coluna

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Boolean
     - Não
     - Indicador de status da modalidade de contratação. True = Ativa / False = Inativa

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
     - Código de identificação da modalidade de contratação
   * - 2
     - nome
     - Texto
     - Nome da modalidade de contratação
   * - 3
     - descricao
     - Texto
     - Descrição da modalidade de contratação
   * - 4
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 5
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 6
     - statusAtivo
     - Booleano
     - Indicador de status da modalidade de contratação. True = Ativa / False = Inativa

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
     - Modalidade de contratação não encontrada
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

\
