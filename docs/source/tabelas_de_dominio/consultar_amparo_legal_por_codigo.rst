Consultar Amparo Legal por Código 
=================================

Serviço que permite consultar um amparo legal pelo seu código.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/amparos-legais/{id}  
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
     "${BASE_URL}/v1/amparos-legais/{id}" \
     -H "accept: */*"

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note:: 
   Alimentar o parâmetro ``{id}`` na URL.   

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
     - Código de identificação do amparo legal 

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
     - Código de identificação do amparo legal.
   * - 2
     - nome
     - Texto
     - Nome do amparo legal.
   * - 3
     - descricao
     - Texto
     - Descrição do amparo legal.
   * - 4
     - tipoAmparoLegal
     - 
     - Tipo do Amparo Legal (item 5.15.3 – Tipos de Amparos Legais).
   * - 4.1
     - id
     - Inteiro
     - Código de identificação do tipo de amparo legal.
   * - 4.2
     - nome
     - Texto
     - Nome do tipo de amparo legal.
   * - 4.3
     - descricao
     - Texto
     - Descrição do tipo de amparo legal.
   * - 4.4
     - statusAtivo
     - Booleano
     - Indicador de status do tipo de amparo legal. True = Ativo / False = Inativo.
   * - 5
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro.
   * - 6
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro.
   * - 7
     - statusAtivo
     - Booleano
     - Indicador de status do amparo legal. True = Ativo / False = Inativo.

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
