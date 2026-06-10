Inserir Resultado do Item de uma Contratação 
============================================

Serviço para inserir o resultado do item de uma contratação. O resultado possui as informações do fornecedor/arrematador vencedor e valores dos itens. 
 
.. Attention::

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
		"valorNominalMoedaEstrangeira": 0.24,
  		:destaque-azul-claro:`"codigoIbgeMunicipio": "5300108",`
   		:destaque-azul-claro:`"localidadeExterior": "Miami - Estados Unidos da América",`
   		:destaque-azul-claro:`"reservaRemanescenteId": 2`
	}  
  

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X POST --header "Authorization: Bearer access_token" "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/itens/1/resultados" 
	-H "accept: */*" -H "Content-Type: application/json" --data "@/home/objeto.json" 


Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``cnpj``, ``ano``, ``sequencial`` e ``numeroItem`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 10 30 55
   :header-rows: 1
   :class: quebra-linha

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - 1
     - cnpj
     - Texto (14)
     - Sim
     - Cnpj do órgão originário da contratação informado na inclusão (proprietário da contratação ou alienação de bens)
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano da contratação
   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP; Número sequencial gerado no momento que a contratação foi inserida no PNCP;
   * - 4
     - numeroItem
     - Inteiro
     - Sim
     - Número do item na contratação
   * - 5
     - quantidadeHomologada
     - Decimal
     - Sim
     - Quantidade do item homologada. Precisão de 4 dígitos decimais; Ex: 1.0000;
   * - 6
     - valorUnitarioHomologado
     - Decimal
     - Sim
     - Valor unitário do item homologado. Maior ou igual a 0 (zero). Precisão de 4 dígitos decimais; Ex: 100.0000;
   * - 7
     - valorTotalHomologado
     - Decimal
     - Sim
     - Valor total do item homologado. Maior ou igual a 0 (zero). Precisão de 4 dígitos decimais; Ex: 1000.0000;
   * - 8
     - percentualDesconto
     - Decimal
     - Não
     - Percentual de desconto aplicado quando o critério de julgamento for Maior Desconto. Precisão de 4 dígitos decimais; Ex: 10.0000;
   * - 9
     - tipoPessoaId
     - Texto (2)
     - Sim
     - PJ - Pessoa jurídica; PF - Pessoa física; PE - Pessoa estrangeira;
   * - 10
     - niFornecedor
     - Texto (30)
     - Sim
     - Número de identificação do fornecedor/arrematante; CNPJ, CPF ou identificador de empresa estrangeira;
   * - 11
     - nomeRazaoSocialFornecedor
     - Texto (100)
     - Sim
     - Nome ou razão social do fornecedor/arrematante
   * - 12
     - porteFornecedorId
     - Inteiro
     - Sim
     - Porte do fornecedor: 1 - ME; 2 - EPP; 3 - Demais; 4 - Não se aplica; 5 - Não Informado;
   * - 13
     - naturezaJuridicaId
     - Inteiro
     - Não
     - Código da tabela de domínio Natureza jurídica
   * - 14
     - codigoPais
     - Texto (3)
     - Sim
     - Código ISO para o país do fornecedor que deve ser informado no padrão ISO Alpha-3. Ex: BRA - para fornecedores/arrematantes do Brasil.
   * - 15
     - indicadorSubcontratacao
     - Booleano
     - Sim
     - Indicador de sub-contratação do item; false - Não haverá subcontratação; true - Haverá subcontratação de fornecedor; Contratações na modalidade leilão informar false.
   * - 16
     - ordemClassificacaoSrp
     - Inteiro
     - Não
     - Ordem de classificação do fornecedor/arrematante na contratação
   * - 17
     - dataResultado
     - Data
     - Sim
     - Data do resultado da homologação do item
   * - 18
     - aplicacaoMargemPreferencia
     - Booleano
     - Sim
     - Indicador da aplicação da Margem de Preferência para o item. (False/Não; True/Sim)
   * - 19
     - amparoLegalMargemPreferenciaId
     - Inteiro
     - Opcional.Porém obrigatório quando indicador de aplicação da margem de preferência for “True/Sim”.
     - Código da fundamentação legal da aplicação da margem de preferência.
   * - 20
     - paisOrigemProdutoId
     - Texto (3)
     - Opcional. Porém obrigatório quando indicador de aplicação da margem de preferência for “True/Sim”.
     - Símbolo do País de origem do produto ou serviço que deve ser informado no padrão ISO Alpha-3. Ex: BRA, ARG etc.
   * - 21
     - aplicacaoBeneficioMeEpp
     - Booleano
     - Sim
     - Indicador da aplicação do benefício ME/EPP para o item. (False/Não; True/Sim)
   * - 22
     - aplicacaoCriterioDesempate
     - Booleano
     - Sim
     - Indicador da aplicação de critério de desempate conforme Art. 60 para o item. (False/Não; True/Sim)
   * - 23
     - amparoLegalCriterioDesempateId
     - Inteiro
     - Opcional. Porém obrigatório quando indicador de aplicação de critério de desempate for “True/Sim”.
     - Código da fundamentação legal da aplicação de critério de desempate conforme o Art. 60.
   * - 24
     - simboloMoedaEstrangeira
     - Texto (3)
     - Não
     - Símbolo da moeda que deve ser informado no padrão ISO Alpha-3. Ex: USD, EUR, GBP etc.
   * - 25
     - dataCotacaoMoedaEstrangeira
     - Data
     - Não
     - Data/Hora da cotação da moeda estrangeira no formato timestampwithout zone.
   * - 26
     - timezoneCotacaoMoedaEstrangeira
     - Texto (8)
     - Não
     - Time Zone no momento da cotação da moeda estrangeira. Offset no formato 'UTC±[hh][mm]' ou somente 'UTC±[hh]', onde:
       
         - **'hh'** representa as horas de diferença em relação ao UTC;
         - **'mm'** representa os minutos de diferença em relação ao UTC;
         - **'+'** indica que o fuso horário está adiantado em relação ao UTC;
         - **'-'** indica que o fuso horário está atrasado em relação ao UTC.
       
        Exemplos de Offsets:
       
         - **'UTC+0000'** é o próprio horário UTC (também conhecido como GMT);
         - **'UTC+0100'** é uma hora adiantada em relação ao UTC (horário da Europa Central durante o horário padrão);
         - **'UTC-0500'** é cinco horas atrasado em relação ao UTC (horário da Costa Leste dos Estados Unidos durante o horário padrão);
         - **'UTC+0930'** é nove horas e trinta minutos adiantado em relação ao UTC (horário de Adelaide, Austrália).
   * - 27
     - valorNominalMoedaEstrangeira
     - Decimal
     - Não
     - Valor nominal da moeda nacional (BRL) em relação uma unidade da moeda estrangeira no momento da cotação. Ex: 1 USD = 5,450 BRL, então enviar 5.450
   * - :destaque-azul-claro:`28`
     - :destaque-azul-claro:`codigoIbgeMunicipio`
     - :destaque-azul-claro:`Texto`
     - :destaque-azul-claro:`Não`
     - :destaque-azul-claro:`Código IBGE do Município`
   * - :destaque-azul-claro:`29`
     - :destaque-azul-claro:`localidadeExterior`
     - :destaque-azul-claro:`Texto`
     - :destaque-azul-claro:`Não`
     - :destaque-azul-claro:`Nome Localidade Exterior do Fornecedor/Arrematante`
   * - :destaque-azul-claro:`30`
     - :destaque-azul-claro:`reservaRemanescenteId`
     - :destaque-azul-claro:`Inteiro`
     - :destaque-azul-claro:`Não`
     - :destaque-azul-claro:`Identificador de Fornecedor Reserva ou Remanescente (1 - Não se aplica; 2 – Remanescente; 3 - Cadastro de Reserva`

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
     - Erro
   * - 500
     - Internal Server Error
     - Erro

\
