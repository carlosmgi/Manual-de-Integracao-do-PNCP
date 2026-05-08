Consultar Amparos Legais 
========================

Serviço que permite consultar os amparos legais cadastrados no PNCP. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/amparos-legais
     - GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

    Não se aplica

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' '${BASE_URL}/v1/amparos-legais' -H 'accept: */*'
   ou
   curl -X 'GET' '${BASE_URL}/v1/amparos-legais?statusAtivo=true' -H 'accept: */*'
   ou
   curl -X 'GET' '${BASE_URL}/v1/amparos-legais?tipoAmparoLegalId=1&statusAtivo=true' -H 'accept: */*'

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note:: 

   Alimentar o query parâmetro {statusAtivo} ou {tipoAmparoLegalId}.  

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - tipoAmparoLegalId
     - Inteiro
     - Não
     - Código de identificação do tipo de amparo legal (item 5.15.3. Tipos de Amparos Legais) 
   * - statusAtivo
     - Booleano
     - Não
     - Indicador de status do critério de julgamento. True-Ativa / False-Inativa

Dados de retorno (lista de Amparos Legais)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
