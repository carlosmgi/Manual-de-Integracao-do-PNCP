Consultar Fontes Orçamentárias 
==============================

Serviço que permite consultar as fontes orçamentárias cadastradas no PNCP.

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
   * - /v1/fontes-orcamentarias 
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/fontes-orcamentarias' -H 'accept: */*' 
   ou 
   curl -X 'GET' 
   '${BASE_URL}/v1/fontes-orcamentarias?statusAtivo=true' -H 'accept: */*' 

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Informar o parâmetro de query ``statusAtivo``.

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Booleano
     - Não
     - Indicador de status da fonte orçamentária. True-Ativo / False-Inativo

Dados de retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - 1
     - id
     - Inteiro
     - Código de identificação da fonte orçamentária
   * - 2
     - nome
     - Texto
     - Nome da fonte orçamentária
   * - 3
     - descricao
     - Texto
     - Descrição da fonte orçamentária
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
     - Indicador de status da fonte orçamentária. True-Ativo / False-Inativo

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
