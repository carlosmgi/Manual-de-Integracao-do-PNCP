Consultar um Resultado específico de Item de uma Contratação
============================================================

Serviço para consultar os dados de um resultado específico de um item da contratação. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/itens/{numeroItem}/resultados/{sequencialResultado} 
     - GET

Exemplo de Payload
------------------

.. code-block:: json
  :linenos:

	Não se aplica

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/itens/1/resultados/1" -H "accept: */*" 

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``{cnpj}``, ``{ano}``, ``{sequencial}``, ``{numeroItem}`` e ``{sequencialResultado}`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 10 10 15 55
   :header-rows: 1
   :class: quebra-ultima-coluna

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - 1
     - cnpj
     - Texto (14)
     - Sim
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação ou alienação de bens)
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano da contratação.
   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP; Número sequencial gerado no momento que a contratação foi inserida no PNCP
   * - 4
     - numeroItem
     - Inteiro
     - Sim
     - Número do item na contratação (único e sequencial crescente)
   * - 5
     - sequencialResultado
     - Inteiro
     - Sim
     - Sequencial do resultado no PNCP; Número sequencial gerado no momento que o resultado do item foi inserido no PNCP

.. list-table::
   :width: 100%
   :widths: 5 10 15 55
   :header-rows: 1
   :class: quebra-ultima-coluna

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
     - Número do item na contratação (único e sequencial crescente) a que está relacionado o Resultado
   * - 1.2
     - sequencialResultado
     - Inteiro
     - Sequencial do resultado do item da contratação no PNCP; Número sequencial gerado no momento que o resultado do item foi inserido no PNCP
   * - 1.3
     - quantidadeHomologada
     - Decimal
     - Quantidade do item homologada. Precisão de até 4 dígitos decimais; Ex: 1.0001;
   * - 1.4
     - valorUnitarioHomologado
     - Decimal
     - Valor unitário do item homologado. Precisão de até 4 dígitos decimais; Ex: 100.0001;
   * - 1.5
     - percentualDesconto
     - Decimal
     - Percentual de desconto aplicado quando o critério de julgamento for Maior Desconto. Precisão de 4 dígitos decimais; Ex: 10.0000;
   * - 1.6
     - tipoPessoa
     - Texto (2)
     - PJ - Pessoa jurídica; PF - Pessoa física; PE - Pessoa estrangeira;
   * - 1.7
     - niFornecedor
     - Texto (30)
     - Número de identificação do fornecedor/arrematante; CNPJ, CPF ou identificador de empresa estrangeira;
   * - 1.8
     - nomeRazaoSocialFornecedor
     - Texto (100)
     - Nome ou razão social do fornecedor/arrematante
   * - 1.9
     - porteFornecedorId
     - Inteiro
     - Porte do fornecedor: 1 - ME; 2 - EPP; 3 - Demais; 4 - Não se aplica; 5 - Não Informado;
   * - 1.10
     - porteFornecedorNome
     - Texto (30)
     - Nome do porte do fornecedor.
   * - 1.11
     - naturezaJuridicaId
     - Inteiro
     - Código da Natureza Jurídica do fornecedor
   * - 1.12
     - naturezaJuridicaNome
     - Texto (100)
     - Natureza Jurídica do fornecedor
   * - 1.13
     - codigoPais
     - Texto (3)
     - Código ISO para o país dofornecedor/arrematante;Ex: BRA - para fornecedores do Brasil;
   * - 1.14
     - indicadorSubcontratacao
     - Booleano
     - Indicador de sub-contratação do item; false - Não haverá subcontratação; true - Haverá subcontratação de fornecedor;
   * - 1.15
     - ordemClassificacaoSrp
     - Inteiro
     - Ordem de classificação do fornecedor/arrematante na contratação
   * - 1.16
     - dataResultado
     - Data
     - Data do resultado da homologação do item
   * - 1.17
     - dataCancelamento
     - Data e Hora
     - Data de cancelamento do resultado item
   * - 1.18
     - motivoCancelamento
     - Texto (200)
     - Observação com o motivo do cancelamento do resultado item
   * - 1.19
     - situacaoCompraItemResultadoId
     - Inteiro
     - Código conforme tabela Situação do Resultado do Item
   * - 1.20
     - situacaoCompraItemResultadoNome
     - Texto (30)
     - Texto situação conforme tabela Situação do Resultado do Item
   * - 1.21
     - dataInclusao
     - Data e Hora
     - Data da inclusão do registro do resultado do item no PNCP
   * - 1.22
     - dataAtualizacao
     - Data e Hora
     - Data da última atualização do registro do resultado do item no PNCP
   * - 1.23
     - numeroControlePNCPCompra
     - Texto (30)
     - Número de Controle PNCP da contratação
   * - 1.24
     - aplicacaoMargemPreferencia
     - Booleano
     - Indicador da aplicação da Margem de Preferência para o item. (False/Não; True/Sim)
   * - 1.25
     - amparoLegalMargemPreferencia
     - 
     - Dados da fundamentação legal da aplicação da margem de preferência.
   * - 1.25.1
     - id
     - Inteiro
     - Código da fundamentação legal da aplicação da margem de preferência.
   * - 1.25.2
     - nome
     - Texto
     - Nome da fundamentação legal da aplicação da margem de preferência.
   * - 1.25.3
     - descricao
     - Texto
     - Descrição da fundamentação legal da aplicação da margem de preferência.
   * - 1.25.4
     - statusAtivo
     - Booleano
     - Status da fundamentação legal no PNCP. (False/Inativo; True/Ativo)
   * - 1.26
     - paisOrigemProdutoServico
     - 
     - Dados do País de origem do produto ou serviço
   * - 1.26.1
     - id
     - Texto
     - Símbolo do País de origem do produto ou serviço no padrão ISO Alpha-3. Ex: BRA, ARG etc.
   * - 1.26.2
     - nome
     - Texto
     - Nome do País de origem do produto ou serviço.
   * - 1.27
     - aplicacaoBeneficioMeEpp
     - Booleano
     - Indicador da aplicação do benefício ME/EPP para o item. (False/Não; True/Sim)
   * - 1.28
     - aplicacaoCriterioDesempate
     - Booleano
     - Indicador da aplicação de critério de desempate conforme Art. 60 para o item. (False/Não; True/Sim)
   * - 1.29
     - amparoLegalCriterioDesempate
     - 
     - Dados da fundamentação legal da aplicação de critério de desempate conforme o Art. 60.
   * - 1.29.1
     - id
     - Inteiro
     - Código da fundamentação legal da aplicação de critério de desempate
   * - 1.29.2
     - nome
     - Texto
     - Nome da fundamentação legal da aplicação de critério de desempate
   * - 1.29.3
     - descricao
     - Texto
     - Descrição da fundamentação legal da aplicação de critério de desempate
   * - 1.29.4
     - statusAtivo
     - Booleano
     - Status da fundamentação legal no PNCP. (False/Inativo; True/Ativo)
   * - 1.30
     - dataCotacaoMoedaEstrangeira
     - Data
     - Data/Hora da cotação da moeda estrangeira no formato timestampwithout zone.
   * - 1.31
     - timezoneCotacaoMoedaEstrangeira
     - Texto
     - Time Zone no momento da cotação da moeda estrangeira. Offset no formato 'UTC±[hh][mm]' ou somente 'UTC±[hh]'.
   * - 1.32
     - valorNominalMoedaEstrangeira
     - Decimal
     - Valor nominal da moeda nacional (BRL) em relação uma unidade da moeda estrangeira no momento da cotação.
   * - 1.33
     - moedaEstrangeira
     - Objeto
     - Dados da moeda estrangeira
   * - 1.33.1
     - id
     - Inteiro
     - Código da moeda estrangeira.
   * - 1.33.2
     - simbolo
     - Texto
     - Símbolo da moeda estrangeira no padrão ISO Alpha-3. Ex: USD, EUR, GBP etc.
   * - 1.33.3
     - nome
     - Texto
     - Nome da moeda estrangeira.

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
