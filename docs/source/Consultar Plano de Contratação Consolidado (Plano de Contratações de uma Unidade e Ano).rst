Consultar Plano de Contratação Consolidado (Plano de Contratações de uma Unidade e Ano)
=======================================================================================

Serviço que permite consultar um plano de contratações específico de uma unidade em
determinado ano.

Detalhes da Requisição
----------------------

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/pca/{ano}/{sequencial}/consolidado
     - GET

Exemplo de Payload
------------------

Não se aplica.

Exemplo Requisição (cURL)
-------------------------

.. code-block:: bash

   curl -X GET \
     "https://treina.pncp.gov.br/api/pncp/v1/orgaos/00394460000141/pca/2022/1/consolidado" \
     -H "accept: */*"

Dados de Entrada
----------------

.. note::

   Alimentar o parâmetro {cnpj}, {ano} e {sequencial} na URL.

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
     - sequencial
     - Inteiro
     - Sim
     - Sequencial do PCA no PNCP;
       Número sequencial gerado no
       momento que o plano da
       unidade foi inserido no PNCP

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
     - cnpj
     - Texto
     - CNPJ do Órgão
   * - 2
     - codigoUnidade
     - Texto
     - Código da Unidade Responsável
   * - 3
     - nomeUnidade
     - Texto
     - Nome da Unidade Responsável
   * - 4
     - anoPca
     - Inteiro
     - Ano do Plano de Contratações
   * - 5
     - numeroControlePNCP
     - Texto
     - Número de Controle PNCP do Plano da
       Unidade
   * - 6
     - quantidade
     - Decimal (17,4)
     - Quantidade de itens do Plano da Unidade.
       Precisão de até 4 dígitos decimais; Ex:
       10.0001;
   * - 7
     - valorTotal
     - Decimal (17,4)
     - Valor Total estimado de contratações do
       Plano da Unidade. Precisão de até 4 dígitos
       decimais; Ex: 100.0001;
   * - 8
     - dataPublicacaoPncp
     - Data
     - Data da publicação do Plano no PNCP
   * - 9
     - dataAtualizacao
     - Data
     - Data da última atualização do Plano
   * - 10
     - usuario
     - String
     - Nome do Usuário/Sistema que enviou o plano
   * - 11
     - municipio
     - String
     - Município da Unidade Responsável
   * - 12
     - uf
     - String
     - Sigla da unidade federativa da Unidade
       Responsável

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
