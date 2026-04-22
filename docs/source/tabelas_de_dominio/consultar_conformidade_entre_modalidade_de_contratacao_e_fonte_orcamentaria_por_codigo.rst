Consultar conformidade entre Modalidade de Contratação e Fonte Orçamentária por Código 
======================================================================================

Serviço que permite consultar a combinação de conformidade pelo código da modalidade de contratação e pelo código da fonte orçamentária. 

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
   * - /v1/modalidade-fonte-orcamentaria/{modalidadeId}/{fonteOrcamentariaId} 
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/modalidade-fonte-orcamentaria/6/1' -H 'accept: */*'

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Informar os parâmetros de path ``modalidadeId`` e ``fonteOrcamentariaId`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - modalidadeId
     - Inteiro
     - Sim
     - Código de identificação da modalidade da contratação
   * - fonteOrcamentariaId
     - Inteiro
     - Sim
     - Código de identificação da fonte orçamentária

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
     - modalidadeContratacao
     - Objeto
     - Dados da Modalidade de Contratação
   * - 1.1
     - id
     - Inteiro
     - Código de identificação da modalidade de contratação
   * - 1.2
     - nome
     - Texto
     - Nome da modalidade de contratação
   * - 1.3
     - descricao
     - Texto
     - Descrição da modalidade de contratação
   * - 1.4
     - statusAtivo
     - Booleano
     - Indicador de status da modalidade de contratação. True-Ativo / False-Inativo

   * - 2
     - fonteOrcamentaria
     - Objeto
     - Dados da Fonte Orçamentária
   * - 2.1
     - id
     - Inteiro
     - Código de identificação da fonte orçamentária
   * - 2.2
     - nome
     - Texto
     - Nome da fonte orçamentária
   * - 2.3
     - descricao
     - Texto
     - Descrição da fonte orçamentária
   * - 2.4
     - statusAtivo
     - Booleano
     - Indicador de status da fonte orçamentária. True-Ativo / False-Inativo

   * - 3
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro

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
