Consultar Valores de um Plano de Contratação por Categoria
==========================================================

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

Serviço que permite consultar a quantidade de itens e o valor total dos itens por categoria de item dos planos de contratações de uma Unidade específica em determinado ano, opcionalmente filtrando por uma dada Categoria de Item.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/pca/{ano}/{sequencial}/valorcategoriaitem
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
  :emphasize-lines: 1

    curl -X 'GET' \ 'https://treina.pncp.gov.br/api/pncp/v1/orgaos/00394460000141/pca/2022/1/ valorcategoriaitem' \ -H 'accept: */*'

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Informar os parâmetros necessários para consulta do PCA por sequencial e categoria de item.

.. list-table::
   :width: 100%
   :widths: 5 25 15 10 45
   :header-rows: 1
   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - 1
     - cnpj
     - Texto (14)
     - Sim
     - CNPJ do órgão ao qual a unidade administrativa do PCA está vinculada
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do PCA
   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Número sequencial do PCA da unidade (gerado pelo PNCP)
   * - 4
     - categoriaItem
     - Inteiro
     - Não
     - Código da categoria do item conforme tabela de domínio Categoria do Item do Plano de Contratações

Dados de retorno
~~~~~~~~~~~~~~~~

.. note::
   Lista de informações agregadas por categoria de item para o PCA informado.

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1
   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - 
     - Lista
     - Lista de informações
   * - 1.1
     - categoriaItemNome
     - Texto
     - Nome da categoria do item conforme tabela de domínio Categoria do Item do Plano de Contratações
   * - 1.2
     - quantidadeItens
     - Decimal (17,4)
     - Quantidade de itens do plano por categoria
   * - 1.3
     - valorTotal
     - Decimal (17,4)
     - Valor total por categoria
   * - 1.4
     - categoriaItemId
     - Inteiro
     - Código da categoria do item conforme tabela de domínio Categoria do Item do Plano de Contratações

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
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

\
