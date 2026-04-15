Consultar um Resultado específico de Item de uma Contratação
============================================================

Serviço para consultar os dados de um resultado específico de um item da contratação. 

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
     - GET
	 
Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X GET 
	"${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/itens/1/resultados/1" -H "accept: */*" 

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
     - Sequencial da contratação no PNCP; número gerado no momento da inclusão.

   * - 4
     - numeroItem
     - Inteiro
     - Sim
     - Número do item na contratação (único e sequencial crescente).

   * - 5
     - sequencialResultado
     - Inteiro
     - Sim
     - Sequencial do resultado no PNCP; número gerado no momento da inclusão do resultado.

Dados de Retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - 1
     - numeroItem
     - Inteiro
     - Número do item na contratação (único e sequencial crescente).

   * - 2
     - sequencialResultado
     - Inteiro
     - Sequencial do resultado do item da contratação no PNCP.

   * - 3
     - quantidadeHomologada
     - Decimal
     - Quantidade do item homologada. Precisão de até 4 casas decimais. Ex: 1.0001.

   * - 4
     - valorUnitarioHomologado
     - Decimal
     - Valor unitário do item homologado. Precisão de até 4 casas decimais. Ex: 100.0001.

   * - 5
     - percentualDesconto
     - Decimal
     - Percentual de desconto aplicado quando o critério for maior desconto. Precisão de 4 casas decimais. Ex: 10.0000.

   * - 6
     - tipoPessoa
     - Texto (2)
     - PJ (jurídica); PF (física); PE (estrangeira).

   * - 7
     - niFornecedor
     - Texto (30)
     - Identificação do fornecedor (CNPJ, CPF ou identificador estrangeiro).

   * - 8
     - nomeRazaoSocialFornecedor
     - Texto (100)
     - Nome ou razão social do fornecedor.

   * - 9
     - porteFornecedorId
     - Inteiro
     - Porte: 1-ME; 2-EPP; 3-Demais; 4-Não se aplica; 5-Não informado.

   * - 10
     - porteFornecedorNome
     - Texto (30)
     - Nome do porte do fornecedor.

   * - 11
     - naturezaJuridicaId
     - Inteiro
     - Código da natureza jurídica do fornecedor.

   * - 12
     - naturezaJuridicaNome
     - Texto (100)
     - Nome da natureza jurídica do fornecedor.

   * - 13
     - codigoPais
     - Texto (3)
     - Código ISO Alpha-3 do país do fornecedor (ex: BRA).

   * - 14
     - indicadorSubcontratacao
     - Booleano
     - Indica subcontratação (false: não; true: sim).

   * - 15
     - ordemClassificacaoSrp
     - Inteiro
     - Ordem de classificação do fornecedor na contratação.

   * - 16
     - dataResultado
     - Data
     - Data do resultado da homologação do item.

   * - 17
     - dataCancelamento
     - Data e Hora
     - Data de cancelamento do resultado do item.

   * - 18
     - motivoCancelamento
     - Texto (200)
     - Motivo do cancelamento do resultado.

   * - 19
     - situacaoCompraItemResultadoId
     - Inteiro
     - Código conforme tabela de situação do resultado do item.

   * - 20
     - situacaoCompraItemResultadoNome
     - Texto (30)
     - Descrição da situação do resultado do item.

   * - 21
     - dataInclusao
     - Data e Hora
     - Data da inclusão do registro no PNCP.

   * - 22
     - dataAtualizacao
     - Data e Hora
     - Data da última atualização do registro no PNCP.

   * - 23
     - numeroControlePNCPCompra
     - Texto (30)
     - Número de controle PNCP da contratação.

   * - 24
     - aplicacaoMargemPreferencia
     - Booleano
     - Indica aplicação de margem de preferência (false/não; true/sim).

   * - 25
     - amparoLegalMargemPreferencia
     - Objeto
     - Dados da fundamentação legal da margem de preferência.

   * - 25.1
     - id
     - Inteiro
     - Código da fundamentação legal.

   * - 25.2
     - nome
     - Texto
     - Nome da fundamentação legal.

   * - 25.3
     - descricao
     - Texto
     - Descrição da fundamentação legal.

   * - 25.4
     - statusAtivo
     - Booleano
     - Status (false: inativo; true: ativo).

   * - 26
     - paisOrigemProdutoServico
     - Objeto
     - Dados do país de origem do produto ou serviço.

   * - 26.1
     - id
     - Texto
     - Código ISO Alpha-3 do país (ex: BRA, ARG).

   * - 26.2
     - nome
     - Texto
     - Nome do país.

   * - 27
     - aplicacaoBeneficioMeEpp
     - Booleano
     - Indica aplicação de benefício ME/EPP.

   * - 28
     - aplicacaoCriterioDesempate
     - Booleano
     - Indica aplicação de critério de desempate (Art. 60).

   * - 29
     - amparoLegalCriterioDesempate
     - Objeto
     - Dados da fundamentação legal do critério de desempate.

   * - 29.1
     - id
     - Inteiro
     - Código da fundamentação legal.

   * - 29.2
     - nome
     - Texto
     - Nome da fundamentação legal.

   * - 29.3
     - descricao
     - Texto
     - Descrição da fundamentação legal.

   * - 29.4
     - statusAtivo
     - Booleano
     - Status (false: inativo; true: ativo).

   * - 30
     - dataCotacaoMoedaEstrangeira
     - Data
     - Data/hora da cotação (timestamp sem timezone).

   * - 31
     - timezoneCotacaoMoedaEstrangeira
     - Texto
     - Fuso horário no formato UTC±[hh][mm] ou UTC±[hh].

   * - 32
     - valorNominalMoedaEstrangeira
     - Decimal
     - Valor em BRL correspondente a 1 unidade da moeda estrangeira.

   * - 33
     - moedaEstrangeira
     - Objeto
     - Dados da moeda estrangeira.

   * - 33.1
     - id
     - Inteiro
     - Código da moeda estrangeira.

   * - 33.2
     - simbolo
     - Texto
     - Código ISO Alpha-3 (ex: USD, EUR, GBP).

   * - 33.3
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
