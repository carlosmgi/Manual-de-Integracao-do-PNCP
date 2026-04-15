Inserir Itens de Plano de Contratação
=====================================

Serviço que permite inserir itens em um plano de contratação de um ano de uma respectiva unidade no PNCP. **O serviço requer que seja enviado pelo menos um item e o limite máximo de recebimento é de 1000 itens.** Este serviço requer autenticação para ser acionado.

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
   * - /v1/orgaos/{cnpj}/pca/{ano}/{sequencial}/itens
     - POST
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

    [
    {
      "numeroItem": 1,
      "categoriaItemPca": "1",
      "catalogo": "1",
      "classificacaoCatalogo": "1",
      "classificacaoSuperiorCodigo": "7510",
      " classificacaoSuperiorNome": "Artigos para escritório",
      "codigoItem": "468205",
      "descricao": "Apontador Lápis",
      "unidadeFornecimento": "Caixa 100 unidades",
      "quantidade": 500,
      "valorUnitario": 50,00,
      "valorTotal": 25000,00,
      "valorOrcamentoExercicio": 25000,00,
      "dataDesejada": "2022-05-15",
      "unidadeRequisitante": "Departamento Administrativo",
      "grupoContratacaoCodigo": "",
      "grupoContratacaoNome": ""
    },
    {
      "numeroItem": 2,
      "categoriaItemPca": "2",
      "catalogo": "1",
      "classificacaoCatalogo": "2",
      "classificacaoSuperiorCodigo": "547",
      " classificacaoSuperiorNome": "Serviço de acabamento e finalização dos edifícios",
      "codigoItem": "1090",
      "descricao": "Pintura industrial",
      "unidadeFornecimento": "UNIDADE",
      "quantidade": 10,
      "valorUnitario": 50,00,
      "valorTotal": 500,00,
      "valorOrcamentoExercicio": 500,00,
      "dataDesejada": "2022-07-10",
      "unidadeRequisitante": "Departamento Logístico",
      "grupoContratacaoCodigo": "",
      "grupoContratacaoNome": ""
    }
  ]

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1

	curl -k -X POST --header "Authorization: Bearer access_token" "${BASE_URL}/v1/orgaos/10000000000003/pca/2022/1/itens " -H "accept: */*" -H "Content-Type: application/json" --data "@/home/objeto.json"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``{cnpj}``, ``{ano}`` e ``{sequencial}`` na URL.

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
     - Número sequencial gerado pelo PNCP para o plano incluído
   * - 4
     - 
     - Lista
     - Sim
     - Lista de itens do plano
   * - 4.1
     - numeroItem
     - Inteiro
     - Sim
     - Número do item no plano (único e sequencial crescente)
   * - 4.2
     - categoriaItemPca
     - Inteiro
     - Sim
     - Código da categoria do item (consultar domínio correspondente)
   * - 4.3
     - catalogo
     - Inteiro
     - Sim
     - Código do catálogo de itens utilizado como referência
   * - 4.4
     - classificacaoCatalogo
     - Inteiro
     - Sim
     - Indica se é material ou serviço (1 - Material; 2 - Serviço)
   * - 4.5
     - classificacaoSuperiorCodigo
     - Texto (100)
     - Sim
     - Código da classe do material ou grupo do serviço conforme catálogo
   * - 4.6
     - classificacaoSuperiorNome
     - Texto (255)
     - Sim
     - Descrição da classe do material ou grupo do serviço conforme catálogo
   * - 4.7
     - pdmCodigo
     - Texto (100)
     - Não
     - Código PDM referente ao material conforme o CNBS
   * - 4.8
     - pdmDescricao
     - Texto (255)
     - Não
     - Descrição PDM referente ao material conforme o CNBS
   * - 4.9
     - codigoItem
     - Texto (100)
     - Não
     - Código do material ou serviço conforme o catálogo utilizado
   * - 4.10
     - descricao
     - Texto (2048)
     - Não
     - Descrição do material ou serviço conforme catálogo utilizado
   * - 4.11
     - unidadeFornecimento
     - Texto (255)
     - Sim
     - Unidade de fornecimento
   * - 4.12
     - quantidade
     - Decimal (17,4)
     - Sim
     - Quantidade (maior ou igual a zero)
   * - 4.13
     - valorUnitario
     - Decimal (17,4)
     - Sim
     - Valor unitário do item (maior ou igual a zero)
   * - 4.14
     - valorTotal
     - Decimal (17,4)
     - Sim
     - Valor total do item (maior ou igual a zero)
   * - 4.15
     - valorOrcamentoExercicio
     - Decimal (17,4)
     - Sim
     - Valor orçamentário estimado para o exercício (maior ou igual a zero)
   * - 4.16
     - dataDesejada
     - Date
     - Sim
     - Data desejada para a contratação
   * - 4.17
     - unidadeRequisitante
     - Texto (255)
     - Não
     - Nome da unidade requisitante
   * - 4.18
     - grupoContratacaoCodigo
     - Texto (100)
     - Não
     - Código da contratação futura
   * - 4.19
     - grupoContratacaoNome
     - Texto (255)
     - Não
     - Nome da contratação futura

Dados de retorno
~~~~~~~~~~~~~~~~

.. note::
   Endereço do recurso criado após o processamento da requisição.

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
     - location
     - Texto (255)
     - Sim
     - Endereço HTTP do recurso criado

Exemplo de Retorno
^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	Retorno:
	[ https://treina.pncp.gov.br/api/pncp/v1/orgaos/10000000000003/pca/2021/1/itens/1 ]

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
     - Created
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
