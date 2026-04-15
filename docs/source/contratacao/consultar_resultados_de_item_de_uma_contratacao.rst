Consultar Resultados de Item de uma Contratação 
===============================================

Serviço para recuperar os resultados cadastrados para um item de uma contratação.

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
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/itens/{numeroItem}/resultados 
     - GET
	 

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/itens/1/resultados" -H "accept: */*" 

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros {cnpj}, {ano}, {sequencial} e {numeroItem} na URL.

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
     - Sequencial da contratação no PNCP; número gerado no momento da inclusão.

   * - 4
     - numeroItem
     - Inteiro
     - Sim
     - Número do item na contratação (único e sequencial crescente).

Dados de Retorno
~~~~~~~~~~~~~~~~

.. note::
   A resposta apresenta a lista de resultados dos itens da contratação, incluindo dados do fornecedor, valores homologados e informações complementares.

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - 1
     - listaResultados
     - Lista
     - Resultados de um item da contratação.

   * - 1.1
     - numeroItem
     - Inteiro
     - Número do item na contratação (único e sequencial crescente) a que está relacionado o resultado.

   * - 1.2
     - sequencialResultado
     - Inteiro
     - Sequencial do resultado do item da contratação no PNCP.

   * - 1.3
     - quantidadeHomologada
     - Decimal
     - Quantidade do item homologada. Precisão de até 4 casas decimais. Ex: 1.0001.

   * - 1.4
     - valorUnitarioHomologado
     - Decimal
     - Valor unitário do item homologado. Precisão de até 4 casas decimais. Ex: 100.0001.

   * - 1.5
     - percentualDesconto
     - Decimal
     - Percentual de desconto aplicado quando o critério for maior desconto. Precisão de 4 casas decimais. Ex: 10.0000.

   * - 1.6
     - tipoPessoa
     - Texto (2)
     - PJ (jurídica); PF (física); PE (estrangeira).

   * - 1.7
     - niFornecedor
     - Texto (30)
     - Identificação do fornecedor (CNPJ, CPF ou identificador estrangeiro).

   * - 1.8
     - nomeRazaoSocialFornecedor
     - Texto (100)
     - Nome ou razão social do fornecedor.

   * - 1.9
     - porteFornecedorId
     - Inteiro
     - Porte: 1-ME; 2-EPP; 3-Demais; 4-Não se aplica; 5-Não informado.

   * - 1.10
     - porteFornecedorNome
     - Texto (30)
     - Nome do porte do fornecedor.

   * - 1.11
     - naturezaJuridicaId
     - Inteiro
     - Código da natureza jurídica do fornecedor.

   * - 1.12
     - naturezaJuridicaNome
     - Texto (100)
     - Nome da natureza jurídica do fornecedor.

   * - 1.13
     - codigoPais
     - Texto (3)
     - Código ISO Alpha-3 do país do fornecedor (ex: BRA).

   * - 1.14
     - indicadorSubcontratacao
     - Booleano
     - Indica subcontratação (false: não; true: sim).

   * - 1.15
     - ordemClassificacaoSrp
     - Inteiro
     - Ordem de classificação do fornecedor na contratação.

   * - 1.16
     - dataResultado
     - Data
     - Data do resultado da homologação do item.

   * - 1.17
     - dataCancelamento
     - Data e Hora
     - Data de cancelamento do resultado do item.

   * - 1.18
     - motivoCancelamento
     - Texto (200)
     - Motivo do cancelamento do resultado.

   * - 1.19
     - situacaoCompraItemResultadoId
     - Inteiro
     - Código conforme tabela de situação do resultado do item.

   * - 1.20
     - situacaoCompraItemResultadoNome
     - Texto (30)
     - Descrição da situação do resultado do item.

   * - 1.21
     - dataInclusao
     - Data e Hora
     - Data de inclusão do registro no PNCP.

   * - 1.22
     - dataAtualizacao
     - Data e Hora
     - Data da última atualização do registro no PNCP.

   * - 1.23
     - numeroControlePNCPCompra
     - Texto (30)
     - Número de controle PNCP da contratação.

   * - 1.24
     - aplicacaoMargemPreferencia
     - Booleano
     - Indica aplicação de margem de preferência (false/não; true/sim).

   * - 1.25
     - amparoLegalMargemPreferencia
     - Objeto
     - Dados da fundamentação legal da margem de preferência.

   * - 1.25.1
     - id
     - Inteiro
     - Código da fundamentação legal.

   * - 1.25.2
     - nome
     - Texto
     - Nome da fundamentação legal.

   * - 1.25.3
     - descricao
     - Texto
     - Descrição da fundamentação legal.

   * - 1.25.4
     - statusAtivo
     - Booleano
     - Status (false: inativo; true: ativo).

   * - 1.26
     - paisOrigemProdutoServico
     - Objeto
     - Dados do país de origem do produto ou serviço.

   * - 1.26.1
     - id
     - Texto
     - Código ISO Alpha-3 do país (ex: BRA, ARG).

   * - 1.26.2
     - nome
     - Texto
     - Nome do país.

   * - 1.27
     - aplicacaoBeneficioMeEpp
     - Booleano
     - Indica aplicação de benefício ME/EPP.

   * - 1.28
     - aplicacaoCriterioDesempate
     - Booleano
     - Indica aplicação de critério de desempate (Art. 60).

   * - 1.29
     - amparoLegalCriterioDesempate
     - Objeto
     - Dados da fundamentação legal do critério de desempate.

   * - 1.29.1
     - id
     - Inteiro
     - Código da fundamentação legal.

   * - 1.29.2
     - nome
     - Texto
     - Nome da fundamentação legal.

   * - 1.29.3
     - descricao
     - Texto
     - Descrição da fundamentação legal.

   * - 1.29.4
     - statusAtivo
     - Booleano
     - Status (false: inativo; true: ativo).

   * - 1.30
     - dataCotacaoMoedaEstrangeira
     - Data
     - Data/hora da cotação (timestamp sem timezone).

   * - 1.31
     - timezoneCotacaoMoedaEstrangeira
     - Texto
     - Fuso horário no formato UTC±[hh][mm] ou UTC±[hh].

   * - 1.32
     - valorNominalMoedaEstrangeira
     - Decimal
     - Valor em BRL correspondente a 1 unidade da moeda estrangeira.

   * - 1.33
     - moedaEstrangeira
     - Objeto
     - Dados da moeda estrangeira.

   * - 1.33.1
     - id
     - Inteiro
     - Código da moeda estrangeira.

   * - 1.33.2
     - simbolo
     - Texto
     - Código ISO Alpha-3 (ex: USD, EUR, GBP).

   * - 1.33.3
     - nome
     - Texto
     - Nome da moeda estrangeira.

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
     - NotFound
   * - 500
     - Internal Server Error
     - Erro

\
