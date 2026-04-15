Consultar Itens de uma Contratação
==================================

Serviço para recuperar os itens de uma contratação.

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
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/itens 
     - GET
	 

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/itens" -H "accept: */*" '

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar os parâmetros ``cnpj``, ``ano`` e ``sequencial`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - 1
     - cnpj
     - Texto (14)
     - CNPJ do órgão originário da contratação

   * - 2
     - ano
     - Inteiro
     - Ano da contratação

   * - 3
     - sequencial
     - Inteiro
     - Sequencial da contratação no PNCP

   * - 4
     - pagina
     - Inteiro
     - Número da página para paginação dos itens

   * - 5
     - tamanhoPagina
     - Inteiro
     - Quantidade de itens por página

Dados de Retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 30 15 50
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - 1
     - itens
     - Lista
     - Lista de itens da contratação

   * - 1.1
     - numeroItem
     - Inteiro
     - Número do item (sequencial)

   * - 1.2
     - materialOuServico
     - Texto (1)
     - Domínio: M ou S

   * - 1.3
     - materialOuServicoNome
     - Texto
     - M - Material; S - Serviço

   * - 1.4
     - tipoBeneficioId
     - Inteiro
     - Código do tipo de benefício

   * - 1.5
     - tipoBeneficioNome
     - Texto
     - Nome do tipo de benefício

   * - 1.6
     - incentivoProdutivoBasico
     - Booleano
     - Indica incentivo PPB

   * - 1.7
     - descricao
     - Texto (2048)
     - Descrição do item

   * - 1.8
     - quantidade
     - Decimal
     - Quantidade (até 4 casas decimais)

   * - 1.9
     - unidadeMedida
     - Texto (30)
     - Unidade de medida

   * - 1.10
     - valorUnitarioEstimado
     - Decimal
     - Valor unitário estimado (pode ser 0 se sigiloso)

   * - 1.11
     - valorTotal
     - Decimal
     - Valor total (pode ser 0 se sigiloso)

   * - 1.12
     - situacaoCompraItemId
     - Inteiro
     - Código da situação do item

   * - 1.13
     - situacaoCompraItemNome
     - Texto
     - Nome da situação do item

   * - 1.14
     - criterioJulgamentoId
     - Inteiro
     - Código do critério de julgamento

   * - 1.15
     - criterioJulgamentoNome
     - Texto
     - Nome do critério de julgamento

   * - 1.16
     - temResultado
     - Booleano
     - Indica existência de resultado

   * - 1.17
     - dataInclusao
     - Data
     - Data de inclusão

   * - 1.18
     - dataAtualizacao
     - Data
     - Data da última atualização

   * - 1.19
     - orcamentoSigiloso
     - Booleano
     - Indica se o orçamento é sigiloso

   * - 1.20
     - itemCategoriaId
     - Inteiro
     - Código da categoria do item

   * - 1.21
     - itemCategoriaNome
     - Texto
     - Nome da categoria do item

   * - 1.22
     - patrimonio
     - Texto
     - Código de patrimônio

   * - 1.23
     - codigoRegistroImobiliario
     - Texto
     - Código de registro imobiliário

   * - 1.24
     - aplicabilidadeMargemPreferenciaNormal
     - Booleano
     - Indica margem de preferência normal

   * - 1.25
     - aplicabilidadeMargemPreferenciaAdicional
     - Booleano
     - Indica margem de preferência adicional

   * - 1.26
     - percentualMargemPreferenciaNormal
     - Decimal
     - Percentual da margem normal

   * - 1.27
     - percentualMargemPreferenciaAdicional
     - Decimal
     - Percentual da margem adicional

   * - 1.28
     - ncmNbsCodigo
     - Texto
     - Código NCM/NBS

   * - 1.29
     - ncmNbsDescricao
     - Texto
     - Descrição NCM/NBS

   * - 1.30
     - informacaoComplementar
     - Texto
     - Informação complementar

   * - 1.31
     - catalogoCodigoItem
     - Texto
     - Código do item no catálogo

   * - 1.32
     - catalogo
     - Objeto
     - Dados do catálogo

   * - 1.32.1
     - id
     - Inteiro
     - Identificador do catálogo

   * - 1.32.2
     - nome
     - Texto
     - Nome do catálogo

   * - 1.32.3
     - descricao
     - Texto
     - Descrição do catálogo

   * - 1.32.4
     - dataInclusao
     - Data/Hora
     - Data de inclusão

   * - 1.32.5
     - dataAtualizacao
     - Data/Hora
     - Data de atualização

   * - 1.32.6
     - statusAtivo
     - Booleano
     - Status do catálogo

   * - 1.32.7
     - url
     - Texto
     - URL do catálogo

   * - 1.33
     - categoriaItemCatalogo
     - Objeto
     - Dados da categoria do item

   * - 1.33.1
     - id
     - Inteiro
     - Identificador da categoria

   * - 1.33.2
     - nome
     - Texto
     - Nome da categoria

   * - 1.33.3
     - descricao
     - Texto
     - Descrição da categoria

   * - 1.33.4
     - dataInclusao
     - Data/Hora
     - Data de inclusão

   * - 1.33.5
     - dataAtualizacao
     - Data/Hora
     - Data de atualização

   * - 1.33.6
     - statusAtivo
     - Booleano
     - Status da categoria

   * - 1.34
     - tipoMargemPreferencia
     - Objeto
     - Dados do tipo de margem

   * - 1.34.1
     - codigo
     - Inteiro
     - Código do tipo de margem

   * - 1.34.2
     - nome
     - Texto
     - Nome do tipo de margem

   * - 1.35
     - exigenciaConteudoNacional
     - Booleano
     - Indica exigência de conteúdo nacional

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
