Consultar Plano de Contratação por Órgão e Ano
===============================

Serviço que permite consultar o plano de contratações anual específico de um determinado órgão.


Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/pca/{ano}/consolidado
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

	curl -k -X GET \
	  "https://treina.pncp.gov.br/api/pncp/v1/orgaos/00394460000141/pca/2022/consolidado" \
	  -H "accept: */*"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Informar os parâmetros necessários para consulta do PCA.

.. list-table::
   :width: 100%
   :widths: auto
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
     - CNPJ do órgão
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do PCA

Dados de retorno
~~~~~~~~~~~~~~~~

.. note::
   Estrutura de dados retornada na consulta do PCA do órgão.

.. list-table::
   :width: 100%
   :widths: 5 10 15 55
   :header-rows: 1
   :class: quebra-linha-ultima-coluna

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - cnpj
     - Texto
     - CNPJ do órgão
   * - 2
     - razaoSocial
     - Texto
     - Razão Social do órgão
   * - 3
     - esfera
     - Texto
     - Esfera do órgão
   * - 4
     - poder
     - Texto
     - Poder do órgão
   * - 5
     - anoPca
     - Inteiro
     - Ano do Plano de Contratações
   * - 6
     - quantidade
     - Decimal (17,4)
     - Quantidade total de itens do plano do órgão (somatório dos itens de todas as unidades). Precisão de até 4 casas decimais; Ex: 10.0001
   * - 7
     - valorTotal
     - Decimal (17,4)
     - Valor total do plano do órgão (somatório dos valores das unidades). Precisão de até 4 casas decimais; Ex: 100.0001
   * - 8
     - dataPublicacaoPncp
     - Data
     - Data da publicação do primeiro plano de unidade no PNCP
   * - 9
     - dataAtualizacao
     - Data
     - Data da última atualização do registro de PCA

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
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

\
