Consultar Amparo Legal por Código 
=================================

Serviço que permite consultar um amparo legal pelo seu código.

.. Attention::

   As alterações da versão |versao| estão em destaque, conforme exemplo a seguir:

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - cnpj
     - Texto
     - CNPJ do órgão do contrato/empenho
   * - :destaque:`2`
     - :destaque:`ano`
     - :destaque:`Inteiro`
     - :destaque:`Ano do contrato/empenho`
   * - 3
     - sequencialContrato
     - Inteiro
     - Sequencial do contrato/empenho no PNCP; número sequencial gerado no momento da inclusão

\

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/amparos-legais/{id}  
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/amparos-legais/{id}' -H 'accept: */*'

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note:: 

Alimentar o path parâmetro {id} na URL.   

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Inteiro
     - Sim
     - Código de identificação do amparo legal 

Dados de retorno
~~~~~~~~~~~~~~~~

.. list-table:: 
   :width: 100%
   :header-rows: 1
   :widths: 5 25 15 25

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
   :widths: 10 25 20
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
     - Modo de disputa não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

\
