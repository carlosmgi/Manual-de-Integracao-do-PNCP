Retificar Resultado do Item de uma Contratação 
==============================================

Serviço para retificar um resultado do item de uma contratação, ou para alterar a situação de um resultado do item conforme tabela de domínio de situação do Resultado do item de uma contratação. **Importante lembrar que na Retificação todas as informações terão que ser enviadas novamente, não apenas as que sofreram alteração.**

.. Attention::

	Fica impedida a retificação do resultado, caso a contratação não possua documento/arquivo ativo vinculado a ela no PNCP. 
	Ao receber requisição para inclusão de resultado do item da Contratação, o PNCP verifica se entre os resultados, com situação "Informado", existe algum outro registro com valor idêntico à combinação dos parâmetros recebidos: "tipoPessoaId", "niFornecedor" e "ordemClassificacaoSrp". Se houver qualquer registro, a requisição para inclusão do resultado do item da Contratação será recusada. Neste caso, o requisitante será alertado.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/itens/{numeroItem}/resultados/{sequencialResultado} 
     - PUT
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  :emphasize-lines: 29-31

	{
		"quantidadeHomologada": 1,
		"valorUnitarioHomologado": 100.0,
		"valorTotalHomologado": 100.0,
		"percentualDesconto": 0,
		"tipoPessoaId": "PJ",
		"niFornecedor": "10000000000010",
		"nomeRazaoSocialFornecedor": " Fornecedor/arrematante para exemplo",
		"porteFornecedorId": 3,
		"naturezaJuridicaId": "2062",
		"codigoPais": "BRA",
		"indicadorSubcontratacao": false,
		"ordemClassificacaoSrp": 1,
		"dataResultado": "2021-07-26",
		"dataCancelamento": "",
		"motivoCancelamento": "",
		"situacaoCompraItemResultadoId": 1,
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
		"justificativa": "motivo/justificativa para a retificação dos atributos do resultado do item da contratação",
		"codigoIbgeMunicipio": "5300108",
		"localidadeExterior": "Miami - Estados Unidos da América",
		"reservaRemanescenteId": 2
	}
    

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:

	curl -k -X PUT \
	  --header "Authorization: Bearer access_token" \
	  "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/itens/1/resultados" \
	  -H "accept: */*" \
	  -H "Content-Type: application/json" \
	  --data "@/home/objeto.json"


Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``{cnpj}``, ``{ano}``, ``{sequencial}``, ``{numeroItem}`` e ``{sequencialResultado}`` na URL.


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
     - sequencialResultado
     - Inteiro
     - Sim
     - Sequencial do resultado do item da contratação no PNCP; Número sequencial gerado no momento que o resultado do item foi inserido no PNCP
   * - 6
     - quantidadeHomologada
     - Decimal
     - Sim
     - Quantidade do item homologada. Precisão de 4 dígitos decimais; Ex: 1.0000;
   * - 7
     - valorUnitarioHomologado
     - Decimal
     - Sim
     - Valor unitário do item homologado. Maior ou igual a 0 (zero). Precisão de 4 dígitos decimais; Ex: 100.0000;
   * - 8
     - valorTotalHomologado
     - Decimal
     - Sim
     - Valor total do item homologado. Maior ou igual a 0 (zero). Precisão de 4 dígitos decimais; Ex: 1000.0000;
   * - 9
     - percentualDesconto
     - Decimal
     - Não
     - Percentual de desconto aplicado quando o critério de julgamento for Maior Desconto. Precisão de 4 dígitos decimais; Ex: 10.0000;
   * - 10
     - tipoPessoaId
     - Texto (2)
     - Sim
     - PJ - Pessoa jurídica; PF - Pessoa física; PE - Pessoa estrangeira;
   * - 11
     - niFornecedor
     - Texto (30)
     - Sim
     - Número de identificação do fornecedor/arrematante; CNPJ, CPF ou identificador de empresa estrangeira;
   * - 12
     - nomeRazaoSocialFornecedor
     - Texto (100)
     - Sim
     - Nome ou razão social do fornecedor/arrematante
   * - 13
     - porteFornecedorId
     - Inteiro
     - Sim
     - Porte do fornecedor: 1 - ME; 2 - EPP; 3 - Demais; 4 - Não se aplica; 5 - Não Informado;
   * - 14
     - naturezaJuridicaId
     - Inteiro
     - Não
     - Código da tabela de domínio Natureza jurídica
   * - 15
     - codigoPais
     - Texto (3)
     - Sim
     - Código ISO para o país do fornecedor que deve ser informado no padrão ISO Alpha-3. Ex: BRA - para fornecedores/arrematantes do Brasil.
   * - 16
     - indicadorSubcontratacao
     - Booleano
     - Sim
     - Indicador de sub-contratação do item; false - Não haverá subcontratação; true - Haverá subcontratação de fornecedor; Contratações na modalidade leilão informar false.
   * - 17
     - ordemClassificacaoSrp
     - Inteiro
     - Não
     - Ordem de classificação do fornecedor/arrematante na contratação
   * - 18
     - dataResultado
     - Data
     - Sim
     - Data do resultado da homologação do item
   * - 19
     - dataCancelamento
     - Data e Hora
     - Não
     - Data de cancelamento do resultado item
   * - 20
     - motivoCancelamento
     - Texto (200)
     - Não
   * - 21
     - situacaoCompraItemResultadoId
     - Inteiro
     - Sim
     - Código conforme tabela Situação do Resultado do Item
   * - 22
     - aplicacaoMargemPreferencia
     - Booleano
     - Sim
     - Indicador da aplicação da Margem de Preferência para o item. (False/Não; True/Sim)
   * - 23
     - amparoLegalMargemPreferenciaId
     - Inteiro
     - Opcional.Porém obrigatório quando indicador de aplicação da margem de preferência for “True/Sim”.
     - Código da fundamentação legal da aplicação da margem de preferência.
   * - 24
     - paisOrigemProdutoId
     - Texto (3)
     - Opcional. Porém obrigatório quando indicador de aplicação da margem de preferência for “True/Sim”.
     - Símbolo do País de origem do produto ou serviço que deve ser informado no padrão ISO Alpha-3. Ex: BRA, ARG etc.
   * - 25
     - aplicacaoBeneficioMeEpp
     - Booleano
     - Sim
     - Indicador da aplicação do benefício ME/EPP para o item. (False/Não; True/Sim)
   * - 26
     - aplicacaoCriterioDesempate
     - Booleano
     - Sim
     - Indicador da aplicação de critério de desempate conforme Art. 60 para o item. (False/Não; True/Sim)
   * - 27
     - amparoLegalCriterioDesempateId
     - Inteiro
     - Opcional. Porém obrigatório quando indicador de aplicação de critério de desempate for “True/Sim”. 
     - Código da fundamentação legal da aplicação de critério de desempate conforme o Art. 60.
   * - 28
     - simboloMoedaEstrangeira
     - Texto (3)
     - Não
     - Símbolo da moeda que deve ser informado no padrão ISO Alpha-3. Ex: USD, EUR, GBP etc.
   * - 29
     - dataCotacaoMoedaEstrangeira
     - Data
     - Não
     - Data/Hora da cotação da moeda estrangeira no formato timestampwithout zone.
   * - 30
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
   * - 31
     - valorNominalMoedaEstrangeira
     - Decimal
     - Não
     - Valor nominal da moeda nacional (BRL) em relação uma unidade da moeda estrangeira no momento da cotação. Ex: 1 USD = 5,450 BRL, então enviar 5.450
   * - 32
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para a retificação dos atributos do resultado de um item da contratação.
   * - :destaque-azul-claro:`33`
     - :destaque-azul-claro:`codigoIbgeMunicipio`
     - :destaque-azul-claro:`Texto`
     - :destaque-azul-claro:`Não`
     - :destaque-azul-claro:`Código IBGE do Município`
   * - :destaque-azul-claro:`34`
     - :destaque-azul-claro:`localidadeExterior`
     - :destaque-azul-claro:`Texto`
     - :destaque-azul-claro:`Não`
     - :destaque-azul-claro:`Nome Localidade Exterior do Fornecedor/Arrematante`
   * - :destaque-azul-claro:`35`
     - :destaque-azul-claro:`reservaRemanescenteId`
     - :destaque-azul-claro:`Inteiro`
     - :destaque-azul-claro:`Não`
     - :destaque-azul-claro:`Identificador de Fornecedor Reserva ou Remanescente (1 - Não se aplica; 2 – Remanescente; 3 - Cadastro de Reserva`

** Para cancelamento do Resultado informar situação do resultado igual a 2, data e motivo do cancelamento junto com os outros dados do resultado.

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
     - Up Date
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
