Consultar Categorias de Item
============================

Serviço que permite consultar as categorias de item cadastradas no PNCP.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/categoriaItemPcas
     - GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

    Não se aplica

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' '${BASE_URL}/v1/categoriaItemPcas' -H 'accept: */*'
   ou
   curl -X 'GET' '${BASE_URL}/v1/categoriaItemPcas?statusAtivo=true' -H 'accept: */*'   

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note:: 

   Alimentar o query parâmetro {statusAtivo}.

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1 

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Boolean
     - Não
     - Indicador de status da categoria de item. True = Ativa / False = Inativa.

Dados de retorno
~~~~~~~~~~~~~~~~

.. list-table:: 
   :width: 100%
   :header-rows: 1
   :widths: auto

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação da categoria de item.
   * - 2
     - nome
     - Texto
     - Nome da categoria de item.
   * - 3
     - descricao
     - Texto
     - Descrição da categoria de item.
   * - 4
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro.
   * - 5
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro.
   * - 6
     - statusAtivo
     - Booleano
     - Indicador de status da categoria de item. True = Ativa / False = Inativa.

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
     - Categoria de item não encontrado.
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

\
