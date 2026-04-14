Consultar Plano de Contratação Consolidado (Plano de Contratações de uma Unidade e Ano)
=======================================================================================

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

Serviço que permite consultar um plano de contratações específico de uma unidade em determinado ano.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/pca/{ano}/{sequencial}/consolidado
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

    curl -X 'GET' \ 'https://treina.pncp.gov.br/api/pncp/v1/orgaos/00394460000141/pca/2022/1/consolidado' \ -H 'accept: */*'


Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Informar os parâmetros necessários para consulta do PCA por identificador sequencial.

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
     - Sequencial do PCA no PNCP; número sequencial gerado no momento da inclusão

Dados de retorno
~~~~~~~~~~~~~~~~

.. note::
   Estrutura de dados detalhada do PCA por unidade administrativa.

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
     - CNPJ do órgão
   * - 2
     - codigoUnidade
     - Texto
     - Código da unidade responsável
   * - 3
     - nomeUnidade
     - Texto
     - Nome da unidade responsável
   * - 4
     - anoPca
     - Inteiro
     - Ano do plano de contratações
   * - 5
     - numeroControlePNCP
     - Texto
     - Número de controle PNCP do plano da unidade
   * - 6
     - quantidade
     - Decimal (17,4)
     - Quantidade de itens do plano; precisão de até 4 casas decimais (ex: 10.0001)
   * - 7
     - valorTotal
     - Decimal (17,4)
     - Valor total estimado das contratações; precisão de até 4 casas decimais (ex: 100.0001)
   * - 8
     - dataPublicacaoPncp
     - Data
     - Data de publicação do plano no PNCP
   * - 9
     - dataAtualizacao
     - Data
     - Data da última atualização do plano
   * - 10
     - usuario
     - String
     - Nome do usuário/sistema que enviou o plano
   * - 11
     - municipio
     - String
     - Município da unidade responsável
   * - 12
     - uf
     - String
     - Sigla da unidade federativa da unidade responsável

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

