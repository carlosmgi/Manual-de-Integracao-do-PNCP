Inserir Itens a uma Contratação 
===============================

Serviço para inserir um ou vários itens a uma contratação. Os itens podem ser inseridos de duas formas: ao inserir uma contratação, pode já informar a lista de itens a ser inserida. Alternativamente pode usar o presente serviço para adicionar um ou vários itens a uma contratação existente. 

.. warning::
	Fica impedida a inclusão de itens caso a contratação não possua documento/arquivo ativo vinculado a ela no PNCP.

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
     - POST
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

	[
		{
			"numeroItem": 1,
			"materialOuServico": "M",
			"tipoBeneficioId": "4",
			"incentivoProdutivoBasico": false,
			"descricao": "Item exemplificativo",
			"quantidade": 100,
			"unidadeMedida": "Unidade",
			"orcamentoSigiloso": false,
			"valorUnitarioEstimado": 1.0,
			"valorTotal": 100.0,
			"criterioJulgamentoId": "1",
			"itemCategoriaId": 0,
			"patrimonio": "string",
			"codigoRegistroImobiliario": "string",
			"aplicabilidadeMargemPreferenciaNormal": true,
			"aplicabilidadeMargemPreferenciaAdicional": true,
			"percentualMargemPreferenciaNormal": 10.0,
			"percentualMargemPreferenciaAdicional": 10.0,
			"codigoTipoMargemPreferencia": 1,
			"inConteudoNacional": true,
			"ncmNbsCodigo": "0901.11.10",
			"ncmNbsDescricao": "Café, chá, mate e especiarias > Em grão",
			"catalogoId": 1,
			"categoriaItemCatalogoId": 1,
			"catalogoCodigoItem": "618302",
			"informacaoComplementar": "Café; Apresentação: Torrado Moído"
		}
	]
  

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X POST --header "Authorization: Bearer access_token" "${BASE_URL}/v1/orgaos
	/10000000000003/compras/2021/1/itens" -H "accept: */*" -H "Content-Type: application/json" -
	data "@/home/objeto.json" 


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

   * - 4
     - numeroItem
     - Inteiro
     - Sim
     - Número do item na contratação

   * - 5
     - materialOuServico
     - Texto (1)
     - Sim
     - M - Material; S - Serviço

   * - 6
     - tipoBeneficioId
     - Inteiro
     - Sim
     - Código do tipo de benefício

   * - 7
     - incentivoProdutivoBasico
     - Booleano
     - Sim
     - Indica incentivo PPB

   * - 8
     - descricao
     - Texto (2048)
     - Sim
     - Descrição do item

   * - 9
     - quantidade
     - Decimal
     - Sim
     - Quantidade (4 casas decimais)

   * - 10
     - unidadeMedida
     - Texto (30)
     - Sim
     - Unidade de medida

   * - 11
     - valorUnitarioEstimado
     - Decimal
     - Sim
     - Valor unitário estimado

   * - 12
     - valorTotal
     - Decimal
     - Sim
     - Valor total do item

   * - 13
     - criterioJulgamentoId
     - Inteiro
     - Sim
     - Código do critério de julgamento

   * - 14
     - orcamentoSigiloso
     - Booleano
     - Sim
     - Indica se o orçamento é sigiloso

   * - 15
     - itemCategoriaId
     - Inteiro
     - Não
     - Categoria do item (1, 2 ou 3)

   * - 16
     - patrimonio
     - Texto (255)
     - Não
     - Código de patrimônio

   * - 17
     - codigoRegistroImobiliario
     - Texto (255)
     - Condicional
     - Obrigatório para bens imóveis em leilão

   * - 18
     - aplicabilidadeMargemPreferenciaNormal
     - Booleano
     - Sim
     - Indica margem de preferência normal

   * - 19
     - aplicabilidadeMargemPreferenciaAdicional
     - Booleano
     - Sim
     - Indica margem de preferência adicional

   * - 20
     - percentualMargemPreferenciaNormal
     - Decimal
     - Condicional
     - Obrigatório se margem normal = true

   * - 21
     - percentualMargemPreferenciaAdicional
     - Decimal
     - Condicional
     - Obrigatório se margem adicional = true

   * - 22
     - ncmNbsCodigo
     - Texto (15)
     - Não
     - Código NCM/NBS

   * - 23
     - ncmNbsDescricao
     - Texto (2048)
     - Não
     - Descrição NCM/NBS

   * - 24
     - categoriaItemCatalogoId
     - Inteiro
     - Não
     - Categoria do item no catálogo

   * - 25
     - catalogoId
     - Inteiro
     - Não
     - Código do catálogo

   * - 26
     - catalogoCodigoItem
     - Texto (20)
     - Não
     - Código do item no catálogo

   * - 27
     - informacaoComplementar
     - Texto (4096)
     - Não
     - Informação complementar

   * - 28
     - codigoTipoMargemPreferencia
     - Inteiro
     - Não
     - Tipo de margem (1 ou 2)

   * - 29
     - inConteudoNacional
     - Booleano
     - Não
     - Indica exigência de conteúdo nacional

Dados de Retorno
~~~~~~~~~~~~~~~~

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
~~~~~~~~~~~~~~~~~~

.. code-block:: bash
 
	Retorno: 
	["https://treina.pncp.gov.br/api/pncp/v1/orgaos/10000000000003/compras/2021/1/itens/1"]

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 20
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 201
     - Created
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
