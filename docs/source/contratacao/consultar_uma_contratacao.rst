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

	curl -X ‘GET’ "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1" -H "accept: */*" 

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar os parâmetros ``cnpj``, ``ano`` e ``sequencial`` na URL.

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
     - numeroControlePNCP
     - Texto
     - Número de controle PNCP da contratação

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
     - Número do processo no sistema de origem

   * - 5
     - tipoInstrumentoConvocatorioId
     - Inteiro
     - Código do instrumento convocatório

   * - 6
     - tipoInstrumentoConvocatorioNome
     - Texto
     - Nome do instrumento convocatório

   * - 7
     - modalidadeId
     - Inteiro
     - Código da modalidade

   * - 8
     - modalidadeNome
     - Texto
     - Nome da modalidade

   * - 9
     - modoDisputaId
     - Inteiro
     - Código do modo de disputa

   * - 10
     - modoDisputaNome
     - Texto
     - Nome do modo de disputa

   * - 11
     - situacaoCompraId
     - Inteiro
     - Código da situação da contratação

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
     - Informação complementar

   * - 15
     - srp
     - Booleano
     - Indica se a contratação é SRP

   * - 16
     - amparoLegal
     - 
     - Dados do amparo legal
   * - 16.1
     - amparoLegalNome
     - Texto
     - Nome do amparo legal
   * - 16.2
     - amparoLegalDescricao
     - Texto (100)
     - Descrição do amparo legal

   * - 17
     - orcamentoSigilosoCodigo
     - Inteiro
     - Código do sigilo (1 sem sigilo, 2 parcial, 3 total)

   * - 18
     - orcamentoSigilosoDescricao
     - Texto
     - Descrição do sigilo do orçamento

   * - 19
     - valorTotalEstimado
     - Decimal
     - Valor total estimado da contratação

   * - 20
     - valorTotalHomologado
     - Decimal
     - Valor total homologado

   * - 21
     - dataAberturaProposta
     - Data/Hora
     - Data de abertura das propostas

   * - 22
     - dataEncerramentoProposta
     - Data/Hora
     - Data de encerramento das propostas

   * - 23
     - dataPublicacaoPncp
     - Data
     - Data de publicação no PNCP

   * - 24
     - dataInclusao
     - Data
     - Data de inclusão do registro

   * - 25
     - dataAtualizacao
     - Data
     - Data de atualização

   * - 26
     - sequencialCompra
     - Inteiro
     - Sequencial da contratação no PNCP

   * - 27
     - orgaoEntidade
     - 
     - Dados do órgão/entidade
   * - 27.1
     - cnpj
     - Texto
     - CNPJ do órgão
   * - 27.2
     - razaoSocial
     - Texto
     - Razão social
   * - 27.3
     - poderId
     - Texto
     - Código do poder (L, E, J)
   * - 27.4
     - esferaId
     - Texto
     - Código da esfera (F, E, M, D)

   * - 28
     - unidadeOrgao
     - 
     - Dados da unidade administrativa
   * - 28.1
     - codigoUnidade
     - Texto
     - Código da unidade
   * - 28.2
     - nomeUnidade
     - Texto
     - Nome da unidade
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
     - Sigla da UF
   * - 28.6
     - ufNome
     - Texto
     - Nome da UF

   * - 29
     - orgaoSubRogado
     - 
     - Dados do órgão sub-rogado
   * - 29.1
     - cnpj
     - Texto
     - CNPJ do órgão
   * - 29.2
     - razaoSocial
     - Texto
     - Razão social
   * - 29.3
     - poderId
     - Texto
     - Código do poder
   * - 29.4
     - esferaId
     - Texto
     - Código da esfera
   * - 30
     - unidadeSubRogada
     - 
     - Dados da unidade sub-rogada
   * - 30.1
     - codigoUnidade
     - Texto
     - Código da unidade
   * - 30.2
     - nomeUnidade
     - Texto
     - Nome da unidade
   * - 30.3
     - municipioId
     - Inteiro
     - Código IBGE
   * - 30.4
     - municipioNome
     - Texto
     - Nome do município
   * - 30.5
     - ufSigla
     - Texto
     - Sigla da UF
   * - 30.6
     - ufNome
     - Texto
     - Nome da UF
   * - 31
     - usuarioNome
     - Texto
     - Nome do usuário/sistema
   * - 32
     - linkSistemaOrigem
     - Texto
     - URL do sistema de origem
   * - 33
     - justificativaPresencial
     - Texto
     - Justificativa da modalidade presencial
   * - 34
     - linkProcessoEletronico
     - Texto
     - URL do processo eletrônico
   * - 35
     - dataAtualizacaoGlobal
     - Data
     - Data da última atualização global
   * - 36
     - fontesOrcamentarias
     - 
     - Lista de fontes orçamentárias
   * - 36.1
     - codigo
     - Inteiro
     - Código da fonte
   * - 36.2
     - nome
     - Texto
     - Nome da fonte
   * - 36.3
     - descricao
     - Texto
     - Descrição da fonte
   * - 36.4
     - dataInclusao
     - Data/Hora
     - Data de inclusão


\
