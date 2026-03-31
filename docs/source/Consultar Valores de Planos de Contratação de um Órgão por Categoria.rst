Consultar Valores de Planos de Contratação de um Órgão por Categoria
====================================================================

Serviço que permite consultar a quantidade de itens e o valor total dos itens por categoria de item dos planos de contratações de um órgão específico em determinado ano, opcionalmente filtrando por uma dada Categoria de Item. 

Detalhes da Requisição
----------------------

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/pca/{ano}/valorcategoriaitem
     - GET

Exemplo de Payload
------------------

Não se aplica. 

Exemplo Requisição (cURL)
-------------------------

.. code-block:: bash
  :linenos:

   curl -X GET \
     "https://treina.pncp.gov.br/api/pncp/v1/orgaos/00394460000141/pca/2022/valorc" \
     -H "accept: */*"

Dados de Entrada
----------------

.. note::

  Alimentar o parâmetro {cnpj} e {ano} na URL.

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
     - Cnpj do órgão a que a unidade
       administrativa do PCA está
       vinculada
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do PCA
   * - 3
     - categoriaItem
     - Inteiro
     - Não
     - Código da categoria do item
       conforme tabela de domínio
       Categoria do Item do Plano de
       Contratações

Dados de retorno
----------------

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - Lista
     - Lista
     - Lista de informações
   * - 1.1
     - categoriaItemNome
     - Texto
     - Nome da categoria do item conforme tabela
       de domínio Categoria do Item do Plano de
       Contratações
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
     - Código da categoria do item conforme tabela
       de domínio Categoria do Item do Plano de
       Contratações

**Códigos de Retorno**
----------------------

.. list-table::
   :width: 100%
   :widths: 10 25 25
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 201
     - Created
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
