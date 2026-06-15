Consultar uma Contratação 
=========================

Serviço que permite consultar uma contratação. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial} 
     - GET
	 

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:

	curl -k -X GET \
	  "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1" \
	  -H "accept: */*"

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``cnpj``, ``ano`` e ``sequencial`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 20 10 30 55
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
     - Sequencial da contratação no PNCP; Número sequencial gerado no momento que a contratação foi inserida no PNCP

Dados de Retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1
   :class: quebra-linha-dois-quatro

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - 1
     - numeroControlePNCP
     - Texto
     - Número de Controle PNCP da Contratação (id Contratação PNCP)

   * - 2
     - numeroCompra
     - Texto (50)
     - Número da contratação no sistema de origem

   * - 3
     - anoCompra
     - Inteiro
     - Ano da contratação

   * - 4
     - processo
     - Texto (50)
     - Número do processo de Contratação no sistema de origem

   * - 5
     - tipoInstrumentoConvocatorioId
     - Inteiro
     - Código do instrumento convocatório da Contratação

   * - 6
     - tipoInstrumentoConvocatorioNome
     - Texto
     - Nome do instrumento convocatório da Contratação

   * - 7
     - modalidadeId
     - Inteiro
     - Código da Modalidade referente à Contratação

   * - 8
     - modalidadeNome
     - Texto
     - Modalidade referente à Contratação

   * - 9
     - modoDisputaId
     - Inteiro
     - Código do modo de disputa referente à Contratação

   * - 10
     - modoDisputaNome
     - Texto
     - Modo de disputa referente à Contratação

   * - 11
     - situacaoCompraId
     - Inteiro
     - Código da situação da Contratação

   * - 12
     - situacaoCompraNome
     - Texto
     - Nome da situação da contratação

   * - 13
     - objetoCompra
     - Texto (5120)
     - Descrição do objeto da contratação

   * - 14
     - informacaoComplementar
     - Texto (5120)
     - Informação Complementar do objeto referente à Contratação

   * - 15
     - srp
     - Booleano
     - Identifica se a compra se trata de um SRP (Sistema de registro de preços)

   * - 16
     - amparoLegal
     - 
     - Dados do amparo legal
   * - 16.1
     - amparoLegalNome
     - Texto
     - Amparo legal da tabela de domínio Amparo legal
   * - 16.2
     - amparoLegalDescricao
     - Texto (100)
     - Descrição do Amparo legal da tabela de domínio Amparo legal

   * - 17
     - orcamentoSigilosoCodigo
     - Inteiro
     - Código se a Compra tem itens cujo orçamento é sigiloso. 1 - COMPRA_SEM_SIGILO, 2 - COMPRA_PARCIALMENTE_SIGILOSA ou 3 - COMPRA TOTALMENTE SIGILOSA

   * - 18
     - orcamentoSigilosoDescricao
     - Texto
     - Descrição se a Compra tem itens cujo orçamento é sigiloso. 1 - COMPRA_SEM_SIGILO, 2 - COMPRA_PARCIALMENTE_SIGILOSA ou 3 - COMPRA TOTALMENTE SIGILOSA

   * - 19
     - valorTotalEstimado
     - Decimal
     - Valor total estimado da Contratação. Precisão de até 4 dígitos decimais; Ex: 100.0001; Obs: Retornará valor zero (0) se atributo orcamentoSigiloso for true e o item não possuir resultado.

   * - 20
     - valorTotalHomologado
     - Decimal
     - Valor total homologado com base nos resultados incluídos. Precisão de até 4 dígitos decimais; Ex: 100.0001;

   * - 21
     - dataAberturaProposta
     - Data/Hora
     - Data de abertura do recebimento de propostas (horário de Brasília)

   * - 22
     - dataEncerramentoProposta
     - Data/Hora
     - Data de encerramento do recebimento de propostas (horário de Brasília)

   * - 23
     - dataPublicacaoPncp
     - Data
     - Data da publicação da Contratação no PNCP

   * - 24
     - dataInclusao
     - Data
     - Data da inclusão do registro da Contratação no PNCP

   * - 25
     - dataAtualizacao
     - Data
     - Data da última atualização do registro da Contratação

   * - 26
     - sequencialCompra
     - Inteiro
     - Sequencial da Contratação no PNCP; Número sequencial gerado no momento que a contratação foi inserida no PNCP;

   * - 27
     - orgaoEntidade
     - 
     - Dados do órgão/entidade
   * - 27.1
     - cnpj
     - Texto
     - CNPJ do Órgão referente à Contratação
   * - 27.2
     - razaoSocial
     - Texto
     - Razão social do Órgão referente à Contratação
   * - 27.3
     - poderId
     - Texto
     - Código do poder a que pertence o Órgão. L - Legislativo; E - Executivo; J - Judiciário

   * - 27.4
     - esferaId
     - Texto
     - Código da esfera a que pertence o Órgão. F - Federal; E - Estadual; M - Municipal; D - Distrital

   * - 28
     - unidadeOrgao
     - 
     - Dados da unidade administrativa
   * - 28.1
     - codigoUnidade
     - Texto
     - Código da Unidade Administrativa pertencente ao Órgão
   * - 28.2
     - nomeUnidade
     - Texto
     - Nome da Unidade Administrativa pertencente ao Órgão
   * - 28.3
     - municipioId
     - Inteiro
     - Código IBGE do município
   * - 28.4
     - municipioNome
     - Texto
     - Nome do município
   * - 28.5
     - ufSigla
     - Texto
     - Sigla da unidade federativa do município (UF)
   * - 28.6
     - ufNome
     - Texto
     - Nome da unidade federativa do município (UF)

   * - 29
     - orgaoSubRogado
     - 
     - Dados do Órgão/Entidade subrogado
   * - 29.1
     - cnpj
     - Texto
     - CNPJ do Órgão referente à Contratação
   * - 29.2
     - razaoSocial
     - Texto
     - Razão social do Órgão referente à Contratação
   * - 29.3
     - poderId
     - Texto
     - Código do poder a que pertence o Órgão. L - Legislativo; E - Executivo; J - Judiciário

   * - 29.4
     - esferaId
     - Texto
     - Código da esfera a que pertence o Órgão. F - Federal; E - Estadual; M - Municipal; D - Distrital

   * - 30
     - unidadeSubRogada
     - 
     - Código da Unidade Administrativa pertencente ao Órgão subrogado
   * - 30.1
     - codigoUnidade
     - Texto
     - Nome da Unidade Administrativa pertencente ao Órgão subrogado
   * - 30.2
     - nomeUnidade
     - Texto
     - Nome da unidade
   * - 30.3
     - municipioId
     - Inteiro
     - Código IBGE do município
   * - 30.4
     - municipioNome
     - Texto
     - Nome do município
   * - 30.5
     - ufSigla
     - Texto
     - Sigla da unidade federativa do município (UF)
   * - 30.6
     - ufNome
     - Texto
     - Nome da unidade federativa do município (UF)
   * - 31
     - usuarioNome
     - Texto
     - Nome do Usuário/Sistema que enviou a Contratação
   * - 32
     - linkSistemaOrigem
     - Texto
     - URL para página/portal do sistema de origem da contratação para recebimento de propostas.
   * - 33
     - justificativaPresencial
     - Texto
     - Justificativa pela escolha da modalidade presencial.
   * - 34
     - linkProcessoEletronico
     - Texto
     - URL para página do sistema de controle de processos eletrônicos com os dados do processo desta contratação.
   * - 35
     - dataAtualizacaoGlobal
     - Data
     - Data da última atualização global do registro da Contratação considerando seus dependentes (item da contratação, resultado da contratação, documento da contratação e imagem de item da contratação)
   * - 36
     - fontesOrcamentarias
     - 
     - Lista de fontes orçamentárias da contratação
   * - 36.1
     - codigo
     - Inteiro
     - Código da fonte orçamentária
   * - 36.2
     - nome
     - Texto
     - Nome da fonte orçamentária
   * - 36.3
     - descricao
     - Texto
     - Descrição da fonte orçamentária
   * - 36.4
     - dataInclusao
     - Data/Hora
     - Data/hora da inclusão da fonte orçamentária na contratação
   * - :destaque:`37`
     - :destaque:`emendaParlamentar`
     - :destaque:`Booleano`
     - :destaque:`Marcador de existência de emenda parlamentar na contratação (False – Não / True – Sim )`


\
