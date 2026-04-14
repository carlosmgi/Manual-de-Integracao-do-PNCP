Consultar Plano das Unidades por Órgão e Ano
============================================

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

Serviço que permite consultar os dados dos planos de contratações das unidades de um órgão específico em determinado ano.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/pca/{ano}/consolidado/unidades
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

    curl -X 'GET' 'https://treina.pncp.gov.br/api/pncp/v1/orgaos/00394460000141/pca/2022/consolidado/unidades' -H 'accept: */*'

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Informar os parâmetros necessários para consulta paginada do PCA.

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
~~~~~~~~~~~~~~~~

.. note::
   Lista de PCAs por unidade administrativa do órgão.

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
     - Sequencial do PCA no PNCP; número sequencial gerado no momento da inclusão
   * - 1.9
     - numeroControlePNCP
     - Texto
     - Número de controle PNCP do plano (ID do PCA)
   * - 1.10
     - dataPublicacaoPncp
     - Data
     - Data da publicação no PNCP
   * - 1.11
     - dataAtualizacao
     - Data
     - Data da última atualização do registro
   * - 1.12
     - quantidade
     - Decimal (17,4)
     - Quantidade de itens do plano; precisão de até 4 casas decimais (ex: 10.0001)
   * - 1.13
     - valorTotal
     - Decimal (17,4)
     - Valor total do plano; precisão de até 4 casas decimais (ex: 100.0001)

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
