Retificar parcialmente um Item de uma Contratação
=================================================

Serviço para retificar parcialmente um item de uma contratação. Pode ser utilizado para alterar a situação do item conforme tabela de domínio de situação do item da contratação. Na retificação parcial, deverão ser enviadas apenas as informações que sofrerão alteração. Por exemplo, se desejar apenas atualizar a situação de um item, você deve informar apenas o atributo situacaoCompraItemId e ignorar todos os demais atributos. 

.. warning::

	Fica impedida a retificação do item caso a contratação não possua documento/arquivo ativo vinculado a ela no PNCP.

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
     - PATCH
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

	{
		"materialOuServico": "M",
		"tipoBeneficioId": "1",
		"incentivoProdutivoBasico": true,
		"descricao": "string",
		"quantidade": 0,
		"unidadeMedida": "string",
		"orcamentoSigiloso": false,
		"valorUnitarioEstimado": 0,
		"valorTotal": 0,
		"situacaoCompraItemId": "1",
		"criterioJulgamentoId": "1",
		"itemCategoriaId": 0,
		"aplicabilidadeMargemPreferenciaNormal": true,
		"aplicabilidadeMargemPreferenciaNormal": false,
		"percentualMargemPreferenciaNormal": 10.0,
		"percentualMargemPreferenciaAdicional": null,
		"codigoTipoMargemPreferencia": 1,
		"inConteudoNacional": true,
		"catalogoId": 1,
		"categoriaItemCatalogoId": 1,
		"catalogoCodigoItem": "618302",
		"informacaoComplementar": "Café; Apresentação: Torrado Moído",
		"justificativa": "motivo/justificativa para a retificação dos atributos do item da contratação"
	}
	
  
Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X PATCH --header "Authorization: Bearer access_token" "${BASE_URL}/v1/orgaos
	/10000000000003/compras/2021/1/itens/1" -H "accept: */*" -H "Content-Type: application/json" --data "@/home/objeto.json" 

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar os parâmetros ``cnpj``, ``ano``, ``sequencial`` e ``numeroItem`` na URL.

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
     - Não
     - M - Material; S - Serviço

   * - 6
     - tipoBeneficioId
     - Inteiro
     - Não
     - Código do tipo de benefício

   * - 7
     - incentivoProdutivoBasico
     - Booleano
     - Não
     - Indica incentivo PPB

   * - 8
     - descricao
     - Texto (2048)
     - Não
     - Descrição do item

   * - 9
     - quantidade
     - Decimal
     - Não
     - Quantidade (4 casas decimais)

   * - 10
     - unidadeMedida
     - Texto (30)
     - Não
     - Unidade de medida

   * - 11
     - valorUnitarioEstimado
     - Decimal
     - Não
     - Valor unitário estimado

   * - 12
     - valorTotal
     - Decimal
     - Não
     - Valor total do item

   * - 13
     - situacaoCompraItemId
     - Inteiro
     - Não
     - Código da situação do item

   * - 14
     - criterioJulgamentoId
     - Inteiro
     - Não
     - Código do critério de julgamento

   * - 15
     - justificativa
     - Texto (255)
     - Sim
     - Justificativa para retificação do item

   * - 16
     - orcamentoSigiloso
     - Booleano
     - Não
     - Indica se o orçamento é sigiloso

   * - 17
     - itemCategoriaId
     - Inteiro
     - Não
     - Categoria do item (1, 2 ou 3)

   * - 18
     - patrimonio
     - Texto (255)
     - Não
     - Código de patrimônio

   * - 19
     - codigoRegistroImobiliario
     - Texto (255)
     - Condicional
     - Obrigatório para bens imóveis em leilão

   * - 20
     - aplicabilidadeMargemPreferenciaNormal
     - Booleano
     - Não
     - Indica margem de preferência normal

   * - 21
     - aplicabilidadeMargemPreferenciaAdicional
     - Booleano
     - Não
     - Indica margem de preferência adicional

   * - 22
     - percentualMargemPreferenciaNormal
     - Decimal
     - Não
     - Percentual da margem normal (0 a <100 ou nulo)

   * - 23
     - percentualMargemPreferenciaAdicional
     - Decimal
     - Não
     - Percentual da margem adicional (0 a <100 ou nulo)

   * - 24
     - ncmNbsCodigo
     - Texto (15)
     - Não
     - Código NCM/NBS

   * - 25
     - ncmNbsDescricao
     - Texto (2048)
     - Não
     - Descrição NCM/NBS

   * - 26
     - categoriaItemCatalogoId
     - Inteiro
     - Não
     - Categoria do item no catálogo

   * - 27
     - catalogoId
     - Inteiro
     - Não
     - Código do catálogo

   * - 28
     - catalogoCodigoItem
     - Texto (20)
     - Não
     - Código do item no catálogo

   * - 29
     - informacaoComplementar
     - Texto (4096)
     - Não
     - Informação complementar

   * - 30
     - codigoTipoMargemPreferencia
     - Inteiro
     - Não
     - Tipo de margem (1 ou 2)

   * - 31
     - inConteudoNacional
     - Booleano
     - Não
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
