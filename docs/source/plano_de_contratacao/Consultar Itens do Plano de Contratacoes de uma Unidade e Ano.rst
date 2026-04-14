Consultar Itens do Plano de Contratações de uma Unidade e Ano
=============================================================

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

Serviço que permite recuperar a lista de itens pertencentes a um determinado Plano de Contratações Anual (PCA) de uma unidade em determinado ano, opcionalmente filtrando via Categoria do Item.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1
   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/pca/{ano}/{sequencial}/itens
     - GET
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
    
	Não se aplica
  
Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1

	  curl -X 'GET' 'https://treina.pncp.gov.br/api/pncp/v1/orgaos/00394460000141/pca/2022/1/itens' \
	   -H 'accept: */*'

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Informar os parâmetros necessários para consulta do PCA com filtro por categoria e paginação.

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
     - CNPJ do órgão ao qual a unidade administrativa do PCA está vinculada
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do PCA
   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial do PCA no PNCP; número sequencial gerado no momento da inclusão
   * - 4
     - categoria
     - Inteiro
     - Não
     - Código da tabela de domínio Categoria do Item do Plano de Contratações
   * - 5
     - pagina
     - Inteiro
     - Não
     - Número da página com os registros a serem recuperados
   * - 6
     - tamanhoPagina
     - Inteiro
     - Não
     - Quantidade de registros por página a serem recuperados

Dados de retorno
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
     - 
     - Lista
     - Lista de itens de PCAs por unidade
   * - 1.1
     - cnpj
     - Texto
     - CNPJ do órgão
   * - 1.2
     - codigoUnidade
     - Texto
     - Código da unidade responsável
   * - 1.3
     - nomeUnidade
     - Texto
     - Nome da unidade responsável
   * - 1.4
     - anoPca
     - Inteiro
     - Ano do plano de contratações da unidade
   * - 1.5
     - sequencialPca
     - Inteiro
     - Número sequencial do PCA da unidade (gerado pelo PNCP)
   * - 1.6
     - numeroItem
     - Inteiro
     - Número do item no plano (único e sequencial crescente)
   * - 1.7
     - categoriaItemPcaId
     - Inteiro
     - Código da categoria do item (consultar domínio correspondente)
   * - 1.8
     - nomeClassificacao
     - Texto
     - Indica se o item é material ou serviço (1 - Material; 2 - Serviço)
   * - 1.9
     - nomeCatalogo
     - Texto
     - Nome do catálogo de itens utilizado como referência
   * - 1.10
     - classificacaoSuperiorCodigo
     - Texto (100)
     - Código da classe do material ou grupo do serviço conforme catálogo
   * - 1.11
     - classificacaoSuperiorNome
     - Texto (255)
     - Descrição da classe do material ou grupo do serviço conforme catálogo
   * - 1.12
     - pdmCodigo
     - Texto (100)
     - Código PDM referente ao material conforme o CNBS
   * - 1.13
     - pdmDescricao
     - Texto (255)
     - Descrição PDM referente ao material conforme o CNBS
   * - 1.14
     - codigoItem
     - Texto (100)
     - Código do material ou serviço conforme o catálogo utilizado
   * - 1.15
     - descricao
     - Texto (2048)
     - Descrição do material ou serviço conforme catálogo utilizado
   * - 1.16
     - unidadeFornecimento
     - Texto
     - Unidade de fornecimento
   * - 1.17
     - quantidade
     - Decimal
     - Quantidade do item (≥ 0), com até 4 casas decimais (ex: 10.0001)
   * - 1.18
     - valorUnitario
     - Decimal
     - Valor unitário do item (≥ 0), com até 4 casas decimais (ex: 100.0001)
   * - 1.19
     - valorTotal
     - Decimal
     - Valor total do item (≥ 0), com até 4 casas decimais (ex: 100.0001)
   * - 1.20
     - valorOrcamentoExercicio
     - Decimal
     - Valor orçamentário estimado para o exercício (≥ 0), com até 4 casas decimais
   * - 1.21
     - dataDesejada
     - Data
     - Data desejada para a contratação
   * - 1.22
     - unidadeRequisitante
     - Texto
     - Nome da unidade requisitante
   * - 1.23
     - grupoContratacaoCodigo
     - Texto
     - Código da contratação futura
   * - 1.24
     - grupoContratacaoNome
     - Texto
     - Nome da contratação futura
   * - 1.25
     - dataPublicacaoPncp
     - Data
     - Data de publicação do item no PNCP
   * - 1.26
     - dataInclusao
     - Data
     - Data de inclusão do registro no PNCP
   * - 1.27
     - dataAtualizacao
     - Data
     - Data da última atualização do registro
   * - 1.28
     - catalogoId
     - Inteiro
     - Código do catálogo utilizado (1 - CNBS; 2 - Outros)
   * - 1.29
     - categoriaItemPcaNome
     - Texto
     - Nome da categoria do item conforme domínio
   * - 1.30
     - classificacaoCatalogoId
     - Texto
     - Código da classificação (1 - Material; 2 - Serviço)

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
     - Erro
   * - 500
     - Internal Server Error
     - Erro

\
