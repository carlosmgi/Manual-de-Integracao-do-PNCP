Retificar Resultado do Item de uma Contratação 
==============================================

Serviço para retificar um resultado do item de uma contratação, ou para alterar a situação de um resultado do item conforme tabela de domínio de situação do Resultado do item de uma contratação. **Importante lembrar que na Retificação todas as informações terão que ser enviadas novamente, não apenas as que sofreram alteração.**

.. warning::

	Fica impedida a retificação do resultado, caso a contratação não possua documento/arquivo ativo vinculado a ela no PNCP. 
	Ao receber requisição para inclusão de resultado do item da Contratação, o PNCP verifica se entre os resultados, com situação "Informado", existe algum outro registro com valor idêntico à combinação dos parâmetros recebidos: "tipoPessoaId", "niFornecedor" e "ordemClassificacaoSrp". Se houver qualquer registro, a requisição para inclusão do resultado do item da Contratação será recusada. Neste caso, o requisitante será alertado.

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

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/itens/{numeroItem}/resultados/{sequencialResultado} 
     - PUT
	 

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
		"justificativa": "motivo/justificativa para a retificação dos atributos do resultado do item da contratação"
	}
    

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X PUT --header "Authorization: Bearer access_token" "${BASE_URL}/v1/orgaos
	/10000000000003/compras/2021/1/itens/1/resultados" -H "accept: */*" -H "Content-Type: 
	application/json" --data "@/home/objeto.json" 


Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros {cnpj}, {ano}, {sequencial}, {numeroItem} e {sequencialResultado} na URL.

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
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação ou alienação de bens).

   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano da contratação.

   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP, gerado no momento da inclusão.

   * - 4
     - numeroItem
     - Inteiro
     - Sim
     - Número do item na contratação (único e sequencial crescente).

   * - 5
     - sequencialResultado
     - Inteiro
     - Sim
     - Sequencial do resultado do item no PNCP, gerado no momento da inclusão do resultado.

   * - 6
     - quantidadeHomologada
     - Decimal
     - Sim
     - Quantidade do item homologada.

   * - 7
     - valorUnitarioHomologado
     - Decimal
     - Sim
     - Valor unitário do item homologado. Maior ou igual a 0 (zero). Precisão de 4 casas decimais (ex: 100.0000).

   * - 8
     - valorTotalHomologado
     - Decimal
     - Sim
     - Valor total do item homologado. Maior ou igual a 0 (zero). Precisão de 4 casas decimais (ex: 1000.0000).

   * - 9
     - percentualDesconto
     - Decimal
     - Não
     - Percentual de desconto quando o critério for maior desconto. Precisão de 4 casas decimais (ex: 10.0000).

   * - 10
     - tipoPessoaId
     - Texto (2)
     - Sim
     - Tipo de pessoa: PJ (jurídica), PF (física), PE (estrangeira).

   * - 11
     - niFornecedor
     - Texto (30)
     - Sim
     - Identificação do fornecedor (CNPJ, CPF ou identificador estrangeiro).

   * - 12
     - nomeRazaoSocialFornecedor
     - Texto (100)
     - Sim
     - Nome ou razão social do fornecedor.

   * - 13
     - porteFornecedorId
     - Inteiro
     - Sim
     - Porte: 1-ME; 2-EPP; 3-Demais; 4-Não se aplica; 5-Não informado.

   * - 14
     - naturezaJuridicaId
     - Inteiro
     - Não
     - Código da natureza jurídica conforme tabela de domínio.

   * - 15
     - codigoPais
     - Texto (3)
     - Sim
     - Código ISO Alpha-3 do país (ex: BRA).

   * - 16
     - indicadorSubcontratacao
     - Booleano
     - Sim
     - Indica subcontratação (false: não; true: sim). Para leilão, informar false.

   * - 17
     - ordemClassificacaoSrp
     - Inteiro
     - Não
     - Ordem de classificação do fornecedor.

   * - 18
     - dataResultado
     - Data
     - Sim
     - Data de homologação do resultado do item.

   * - 19
     - dataCancelamento
     - Data e Hora
     - Não
     - Data de cancelamento do resultado.

   * - 20
     - motivoCancelamento
     - Texto (200)
     - Não
     - Motivo do cancelamento do resultado.

   * - 21
     - situacaoCompraItemResultadoId
     - Inteiro
     - Sim
     - Código da situação do resultado do item.

   * - 22
     - aplicacaoMargemPreferencia
     - Booleano
     - Sim
     - Indica aplicação de margem de preferência.

   * - 23
     - amparoLegalMargemPreferenciaId
     - Inteiro
     - Condicional
     - Obrigatório quando houver aplicação de margem de preferência.

   * - 24
     - paisOrigemProdutoId
     - Texto (3)
     - Condicional
     - Código ISO Alpha-3 do país de origem do produto.

   * - 25
     - aplicacaoBeneficioMeEpp
     - Booleano
     - Sim
     - Indica aplicação de benefício ME/EPP.

   * - 26
     - aplicacaoCriterioDesempate
     - Booleano
     - Sim
     - Indica aplicação de critério de desempate (Art. 60).

   * - 27
     - amparoLegalCriterioDesempateId
     - Inteiro
     - Condicional
     - Obrigatório quando houver critério de desempate.

   * - 28
     - simboloMoedaEstrangeira
     - Texto (3)
     - Não
     - Código ISO Alpha-3 da moeda (ex: USD, EUR).

   * - 29
     - dataCotacaoMoedaEstrangeira
     - Data
     - Não
     - Data/hora da cotação (timestamp sem timezone).

   * - 30
     - timezoneCotacaoMoedaEstrangeira
     - Texto (8)
     - Não
     - Fuso horário no formato UTC±hhmm (ex: UTC-0300, UTC+0100).

   * - 31
     - valorNominalMoedaEstrangeira
     - Decimal
     - Não
     - Valor em BRL para 1 unidade da moeda estrangeira (ex: 5.450).

   * - 32
     - justificativa
     - Texto (255)
     - Sim
     - Justificativa da retificação.

** Para cancelamento do Resultado informar situação do resultado igual a 2, data e motivo do cancelamento junto com os outros dados do resultado.

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
     - Up Date
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
