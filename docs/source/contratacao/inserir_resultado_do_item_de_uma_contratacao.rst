Inserir Resultado do Item de uma Contratação 
============================================

Serviço para inserir o resultado do item de uma contratação. O resultado possui as informações do fornecedor/arrematador vencedor e valores dos itens. 
 
.. warning::

	Fica impedida a inclusão do resultado, caso a contratação não possua documento/arquivo ativo vinculado a ela no PNCP. 
	Ao receber requisição para inclusão de resultado do item da Contratação, o PNCP verifica se entre os resultados, com situação "Informado", existe algum outro registro com valor idêntico à combinação dos parâmetros recebidos: "tipoPessoaId", "niFornecedor" e "ordemClassificacaoSrp". Se houver qualquer registro, a requisição para inclusão do resultado do item da Contratação será recusada. Neste caso, o requisitante será alertado. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/itens/{numeroItem}/resultados 
     - POST
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

	{
		"quantidadeHomologada": 1,
		"valorUnitarioHomologado": 100.0,
		"valorTotalHomologado": 100.0,
		"percentualDesconto": 0,
		"tipoPessoaId": "PJ",
		"niFornecedor": "10000000000010",
		"nomeRazaoSocialFornecedor": "Nome ou razão social do fornecedor/arrematante",
		"porteFornecedorId": 3,
		"naturezaJuridicaId": "2062",
		"codigoPais": "BRA",
		"indicadorSubcontratacao": false,
		"ordemClassificacaoSrp": 1,
		"dataResultado": "2021-07-26",
		"aplicacaoMargemPreferencia": true,
		"amparoLegalMargemPreferenciaId": 143,
		"paisOrigemProdutoServicoId": "BRA",
		"aplicacaoBeneficioMeEpp": true,
		"aplicacaoCriterioDesempate": true,
		"amparoLegalCriterioDesempateId": 146,
		"simboloMoedaEstrangeira": "USD",
		"dataCotacaoMoedaEstrangeira": "2024-07-10T21:17:02",
		"timezoneCotacaoMoedaEstrangeira": "UTC-0400",
		"valorNominalMoedaEstrangeira": 0.24
	}  
  

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X POST --header "Authorization: Bearer access_token" 
	"${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/itens/1/resultados" -H "accept: */*" -H "Content-Type: application/json" --data "@/home/objeto.json" 

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar os parâmetros ``cnpj``, ``ano``, ``sequencial`` e ``numeroItem`` na URL.

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
     - CNPJ do órgão originário da contratação

   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano da contratação

   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP

   * - 4
     - numeroItem
     - Inteiro
     - Sim
     - Número do item na contratação

   * - 5
     - quantidadeHomologada
     - Decimal
     - Sim
     - Quantidade homologada (4 casas decimais)

   * - 6
     - valorUnitarioHomologado
     - Decimal
     - Sim
     - Valor unitário homologado (≥ 0)

   * - 7
     - valorTotalHomologado
     - Decimal
     - Sim
     - Valor total homologado (≥ 0)

   * - 8
     - percentualDesconto
     - Decimal
     - Não
     - Percentual de desconto (quando aplicável)

   * - 9
     - tipoPessoaId
     - Texto (2)
     - Sim
     - PJ, PF ou PE

   * - 10
     - niFornecedor
     - Texto (30)
     - Sim
     - Identificação do fornecedor (CNPJ/CPF/estrangeiro)

   * - 11
     - nomeRazaoSocialFornecedor
     - Texto (100)
     - Sim
     - Nome ou razão social

   * - 12
     - porteFornecedorId
     - Inteiro
     - Sim
     - 1-ME; 2-EPP; 3-Demais; 4-N/A; 5-Não informado

   * - 13
     - naturezaJuridicaId
     - Inteiro
     - Não
     - Código da natureza jurídica

   * - 14
     - codigoPais
     - Texto (3)
     - Sim
     - Código ISO Alpha-3 (ex: BRA)

   * - 15
     - indicadorSubcontratacao
     - Booleano
     - Sim
     - Indica subcontratação

   * - 16
     - ordemClassificacaoSrp
     - Inteiro
     - Não
     - Ordem de classificação no SRP

   * - 17
     - dataResultado
     - Data
     - Sim
     - Data da homologação

   * - 18
     - aplicacaoMargemPreferencia
     - Booleano
     - Sim
     - Indica aplicação de margem de preferência

   * - 19
     - amparoLegalMargemPreferenciaId
     - Inteiro
     - Condicional
     - Obrigatório se houver margem de preferência

   * - 20
     - paisOrigemProdutoId
     - Texto (3)
     - Condicional
     - Código ISO do país de origem

   * - 21
     - aplicacaoBeneficioMeEpp
     - Booleano
     - Sim
     - Indica benefício ME/EPP

   * - 22
     - aplicacaoCriterioDesempate
     - Booleano
     - Sim
     - Indica aplicação de desempate

   * - 23
     - amparoLegalCriterioDesempateId
     - Inteiro
     - Condicional
     - Obrigatório se houver desempate

   * - 24
     - simboloMoedaEstrangeira
     - Texto (3)
     - Não
     - Código ISO da moeda (ex: USD)

   * - 25
     - dataCotacaoMoedaEstrangeira
     - Data
     - Não
     - Data da cotação da moeda

   * - 26
     - timezoneCotacaoMoedaEstrangeira
     - Texto (8)
     - Não
     - Offset UTC (ex: UTC-0300)

   * - 27
     - valorNominalMoedaEstrangeira
     - Decimal
     - Não
     - Valor da moeda estrangeira em BRL

Dados de Retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - 1
     - location
     - Texto (255)
     - Endereço HTTP do recurso criado

Exemplo de Retorno
~~~~~~~~~~~~~~~~~~

.. code-block:: bash
 
	Retorno: 
	access-control-allow-credentials: true 
	access-control-allow-headers: Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin, 
	access-control-allow-methods: GET,PUT,POST,DELETE,OPTIONS 
	access-control-allow-origin: * 
	cache-control: no-cache,no-store,max-age=0,must-revalidate 
	content-length: 0 
	date: ? 
	expires: ? 
	location: https://treina.pncp.gov.br/api/pncp/v1/orgaos/10000000000003/compras/2021/1/itens/1/resultados/1 
	pragma: no-cache 
	strict-transport-security: max-age=? 
	x-content-type-options: nosniff 
	x-firefox-spdy: ? 
	x-frame-options: DENY 
	x-xss-protection: ?; mode=block

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
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
     - NotFound
   * - 500
     - Internal Server Error
     - Erro

\
