Consultar Plano das Unidades por Órgão e Ano
============================================

Serviço que permite consultar os dados dos planos de contratações das unidades de
um órgão específico em determinado ano.

Detalhes da Requisição
----------------------

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/pca/{ano}/consolidado/unidades
     - GET

Exemplo de Payload
------------------

Não se aplica.

Exemplo Requisição (cURL)
-------------------------

.. code-block:: bash

   curl -X GET \
     "https://treina.pncp.gov.br/api/pncp/v1/orgaos/00394460000141/pca/2022/consolidado/unidades" \
     -H "accept: */*"

Dados de Entrada
----------------

.. note::

  Alimentar o parâmetro {cnpj} na URL. 

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
     - Cnpj do órgão a que a unidade administrativa do PCA está vinculada

   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do PCA

   * - 3
     - pagina
     - Inteiro
     - Não
     - Número da página com os registros a serem recuperados

   * - 4
     - tamanhoPagina
     - Inteiro
     - Não
     - Quantidade de registros por página a serem recuperados

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
     - Lista de PCAs por Unidade

   * - 1.1
     - cnpj
     - Texto
     - CNPJ do órgão

   * - 1.2
     - razaoSocial
     - Texto
     - Razão Social do órgão

   * - 1.3
     - esfera
     - Texto
     - Esfera do órgão

   * - 1.4
     - poder
     - Texto
     - Poder do órgão

   * - 1.5
     - codigoUnidade
     - Texto
     - Código da Unidade Responsável

   * - 1.6
     - nomeUnidade
     - Texto
     - Nome da Unidade Responsável

   * - 1.7
     - anoPca
     - Inteiro
     - Ano do Plano de Contratações

   * - 1.8
     - sequencialPca
     - Inteiro
     - Sequencial do pca no PNCP; Número
       sequencial gerado no momento que o plano
       de contratações da unidade foi inserido no
       PNCP

   * - 1.9
     - numeroControlePNCP
     - Texto
     - Número de Controle PNCP do Plano (id pca
       PNCP)

   * - 1.10
     - dataPublicacaoPncp
     - Data
     - Data da publicação da Ata no PNCP

   * - 1.11
     - dataAtualizacao
     - Data
     - Data da última atualização do registro da Ata

   * - 1.12
     - quantidade
     - Decimal (17,4)
     - Quantidade de itens do plano. Precisão de até
       4 dígitos decimais; Ex: 10.0001;

   * - 1.13
     - valorTotal
     - Decimal (17,4)
     - Valor total do plano. Precisão de até 4 dígitos
       decimais; Ex: 100.0001;

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
