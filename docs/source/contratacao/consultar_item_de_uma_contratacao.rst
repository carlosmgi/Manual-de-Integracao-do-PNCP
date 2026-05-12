Consultar Item de uma Contratação
=================================

Serviço para consultar um item específico de uma contratação.


Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/itens/{numeroItem}
     - GET
	 
Exemplo de Payload
------------------

.. code-block:: json
  :linenos:

	Não se aplica

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
     - Ano da contratação
   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP; Número sequencial gerado no momento que a contratação foi inserida no PNCP
   * - 4
     - numeroItem
     - Inteiro
     - Sim
     - Número do item na contratação

Dados de Retorno
~~~~~~~~~~~~~~~~

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
     - Domínio: M - Material; S - Serviço;
   * - 4
     - tipoBeneficioId
     - Inteiro
     - Código da tabela de domínio Tipo de benefício
   * - 5
     - tipoBeneficioNome
     - Texto
     - Nome do tipo de benefício
   * - 6
     - incentivoProdutivoBasico
     - Booleano
     - Incentivo fiscal PPB (Processo Produtivo Básico); true - Possui o incentivo; false - Não possui o incentivo;
   * - 7
     - descricao
     - Texto (2048)
     - Descrição para o produto ou serviço;
   * - 8
     - quantidade
     - Decimal
     - Quantidade do item. Precisão de até 4 dígitos decimais; Ex: 1.0001;
   * - 9
     - unidadeMedida
     - Texto (30)
     - Unidade de medida
   * - 10
     - valorUnitarioEstimado
     - Decimal
     - Valor unitário estimado/avaliado. Precisão de até 4 dígitos decimais; Ex: 100.0001; Obs: Retornará valor zero (0) se atributo orcamentoSigiloso for true e o item não possuir resultado.
   * - 11
     - valorTotal
     - Decimal
     - Valor total. Precisão de até 4 dígitos decimais; Ex: 100.0001; Obs: Retornará valor zero (0) se atributo orcamentoSigiloso for true e o item não possuir resultado.
   * - 12
     - situacaoCompraItemId
     - Inteiro
     - Código da tabela de domínio Situação do item da Contratação
   * - 13
     - situacaoCompraItemNome
     - Texto
     - Nome da Situação do item da Contratação
   * - 14
     - criterioJulgamentoId
     - Inteiro
     - Código da tabela de domínio Critério de julgamento
   * - 15
     - criterioJulgamentoNome
     - Texto (30)
     - Nome do Critério de Julgamento
   * - 16
     - temResultado
     - Booleano
     - Indicador de existência de resultado do item
   * - 17
     - dataInclusao
     - Data
     - Data de inclusão do registro do item no PNCP
   * - 18
     - dataAtualizacao
     - Data
     - Data da última atualização do registro do item no PNCP
   * - 19
     - orcamentoSigiloso
     - Booleano
     - Identifica se o orçamento é sigiloso; true - Sigiloso; false - Não sigiloso;
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
     - Código de patrimonio de bens móveis quando existir
   * - 23
     - codigoRegistroImobiliario
     - Texto
     - Código de Registro Imobiliário de bens imóveis
   * - 24
     - aplicabilidadeMargemPreferenciaNormal
     - Booleano
     - Indicador da aplicabilidade de Margem de Preferência Normal para o item. (False/Não; True/Sim)
   * - 25
     - aplicabilidadeMargemPreferenciaAdicional
     - Booleano
     - Indicador da aplicabilidade de Margem de Preferência Adicional para o item. (False/Não; True/Sim)
   * - 26
     - percentualMargemPreferenciaNormal
     - Decimal
     - Percentual de Margem de Preferência Normal. Ex: 10.0000;
   * - 27
     - percentualMargemPreferenciaAdicional
     - Decimal
     - Percentual de Margem de Preferência Adicional. Ex: 10.0000;
   * - 28
     - ncmNbsCodigo
     - Texto
     - Código NCM do material ou Código NBS do serviço com ou sem a formatação da máscara.
   * - 29
     - ncmNbsDescricao
     - Texto
     - Descrição respectiva ao NCM para material ou NBS para serviço
   * - 30
     - informacaoComplementar
     - Texto
     - Descrição complementar para o produto ou serviço
   * - 31
     - catalogoCodigoItem
     - Texto
     - Código do item conforme consta no Catálogo utilizado como referência.
   * - 32
     - catalogo
     - Objeto
     - Dados referente ao Catálogo de referência utilizado
   * - 32.1
     - id
     - Inteiro
     - Código de identificação do catálogo
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
     - Data e hora da inclusão do registro
   * - 32.5
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 32.6
     - statusAtivo
     - Booleano
     - Indicador de status do catálogo. True-Ativo / False-Inativo
   * - 32.7
     - url
     - Texto
     - URL do catálogo
   * - 33
     - categoriaItemCatalogo
     - Objeto
     - Dados referente a Categoria Item
   * - 33.1
     - id
     - Inteiro
     - Código de identificação da categoria de item
   * - 33.2
     - nome
     - Texto
     - Nome da categoria de item
   * - 33.3
     - descricao
     - Texto
     - Descrição da categoria de item
   * - 33.4
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 33.5
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 33.6
     - statusAtivo
     - Booleano
     - Indicador de status da categoria de item. True-Ativo / False-Inativo
   * - 34
     - tipoMargemPreferencia
     - Objeto
     - Dados referente ao Tipo de Margem de Preferência
   * - 34.1
     - codigo
     - Inteiro
     - Código do tipo de margem de preferência
   * - 34.2
     - nome
     - Texto
     - Nome do tipo de margem de preferência
   * - 35
     - exigenciaConteudoNacional
     - Booleano
     - Indicador de Exigência de Conteúdo Nacional (False/Não; True/Sim)

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
