Consultar Item de uma Contratação
=================================

Serviço para consultar um item específico de uma contratação.

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
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/itens/{numeroItem}
     - GET
	 

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/itens/1" -H "accept: */*"

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar os parâmetros ``cnpj``, ``ano`` e ``sequencial`` na URL.

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
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação ou alienação de bens)

   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano da contratação

   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP; número gerado no momento da inclusão

   * - 4
     - numeroItem
     - Inteiro
     - Sim
     - Número do item na contratação

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
     - numeroItem
     - Inteiro
     - Número do item na contratação (único e sequencial crescente)

   * - 2
     - materialOuServico
     - Texto (1)
     - Domínio: M ou S

   * - 3
     - materialOuServicoNome
     - Texto
     - M - Material; S - Serviço

   * - 4
     - tipoBeneficioId
     - Inteiro
     - Código do tipo de benefício

   * - 5
     - tipoBeneficioNome
     - Texto
     - Nome do tipo de benefício

   * - 6
     - incentivoProdutivoBasico
     - Booleano
     - Indica incentivo PPB

   * - 7
     - descricao
     - Texto (2048)
     - Descrição do item

   * - 8
     - quantidade
     - Decimal
     - Quantidade (até 4 casas decimais)

   * - 9
     - unidadeMedida
     - Texto (30)
     - Unidade de medida

   * - 10
     - valorUnitarioEstimado
     - Decimal
     - Valor unitário estimado (pode ser 0 se sigiloso)

   * - 11
     - valorTotal
     - Decimal
     - Valor total (pode ser 0 se sigiloso)

   * - 12
     - situacaoCompraItemId
     - Inteiro
     - Código da situação do item

   * - 13
     - situacaoCompraItemNome
     - Texto
     - Nome da situação do item

   * - 14
     - criterioJulgamentoId
     - Inteiro
     - Código do critério de julgamento

   * - 15
     - criterioJulgamentoNome
     - Texto (30)
     - Nome do critério de julgamento

   * - 16
     - temResultado
     - Booleano
     - Indica existência de resultado

   * - 17
     - dataInclusao
     - Data
     - Data de inclusão do registro

   * - 18
     - dataAtualizacao
     - Data
     - Data da última atualização

   * - 19
     - orcamentoSigiloso
     - Booleano
     - Indica se o orçamento é sigiloso

   * - 20
     - itemCategoriaId
     - Inteiro
     - Código da categoria do item

   * - 21
     - itemCategoriaNome
     - Texto
     - Nome da categoria do item

   * - 22
     - patrimonio
     - Texto
     - Código de patrimônio

   * - 23
     - codigoRegistroImobiliario
     - Texto
     - Código de registro imobiliário

   * - 24
     - aplicabilidadeMargemPreferenciaNormal
     - Booleano
     - Indica margem de preferência normal

   * - 25
     - aplicabilidadeMargemPreferenciaAdicional
     - Booleano
     - Indica margem de preferência adicional

   * - 26
     - percentualMargemPreferenciaNormal
     - Decimal
     - Percentual da margem normal

   * - 27
     - percentualMargemPreferenciaAdicional
     - Decimal
     - Percentual da margem adicional

   * - 28
     - ncmNbsCodigo
     - Texto
     - Código NCM/NBS

   * - 29
     - ncmNbsDescricao
     - Texto
     - Descrição NCM/NBS

   * - 30
     - informacaoComplementar
     - Texto
     - Informação complementar

   * - 31
     - catalogoCodigoItem
     - Texto
     - Código do item no catálogo

   * - 32
     - catalogo
     - Objeto
     - Dados do catálogo

   * - 32.1
     - id
     - Inteiro
     - Identificador do catálogo

   * - 32.2
     - nome
     - Texto
     - Nome do catálogo

   * - 32.3
     - descricao
     - Texto
     - Descrição do catálogo

   * - 32.4
     - dataInclusao
     - Data/Hora
     - Data de inclusão

   * - 32.5
     - dataAtualizacao
     - Data/Hora
     - Data de atualização

   * - 32.6
     - statusAtivo
     - Booleano
     - Status do catálogo

   * - 32.7
     - url
     - Texto
     - URL do catálogo

   * - 33
     - categoriaItemCatalogo
     - Objeto
     - Dados da categoria do item

   * - 33.1
     - id
     - Inteiro
     - Identificador da categoria

   * - 33.2
     - nome
     - Texto
     - Nome da categoria

   * - 33.3
     - descricao
     - Texto
     - Descrição da categoria

   * - 33.4
     - dataInclusao
     - Data/Hora
     - Data de inclusão

   * - 33.5
     - dataAtualizacao
     - Data/Hora
     - Data de atualização

   * - 33.6
     - statusAtivo
     - Booleano
     - Status da categoria

   * - 34
     - tipoMargemPreferencia
     - Objeto
     - Dados do tipo de margem de preferência

   * - 34.1
     - codigo
     - Inteiro
     - Código do tipo de margem

   * - 34.2
     - nome
     - Texto
     - Nome do tipo de margem

   * - 35
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
