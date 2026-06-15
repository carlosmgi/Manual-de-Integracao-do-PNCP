Inserir Itens a uma Contratação 
===============================

Serviço para inserir um ou vários itens a uma contratação. Os itens podem ser inseridos de duas formas: ao inserir uma contratação, pode já informar a lista de itens a ser inserida. Alternativamente pode usar o presente serviço para adicionar um ou vários itens a uma contratação existente. 

.. Attention::
	Fica impedida a inclusão de itens caso a contratação não possua documento/arquivo ativo vinculado a ela no PNCP.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
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
  :linenos:

	curl -k -X POST \
	  --header "Authorization: Bearer access_token" \
	  "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/itens" \
	  -H "accept: */*" \
	  -H "Content-Type: application/json" \
	  --data "@/home/objeto.json"


Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``cnpj``, ``ano`` e ``sequencial`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 10 30 55
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
     - Sequencial da contratação no PNCP; Número sequencial gerado no momento que a contratação foi inserida no PNCP;
   * - 4
     - numeroItem
     - Inteiro
     - Sim
     - Número do item na contratação (único e sequencial crescente)
   * - 5
     - materialOuServico
     - Texto (1)
     - Sim
     - Domínio: M - Material; S - Serviço; Contratações na modalidade leilão informar M.
   * - 6
     - tipoBeneficioId
     - Inteiro
     - Sim
     - Código da tabela de domínio Tipo de benefício. Contratações na modalidade leilão informar opção “Não se aplica”.
   * - 7
     - incentivoProdutivoBasico
     - Booleano
     - Sim
     - Incentivo fiscal PPB (Processo Produtivo Básico); true - Possui o incentivo; false - Não possui o incentivo; Contratações na modalidade leilão informar false.
   * - 8
     - descricao
     - Texto (2048)
     - Sim
     - Descrição para o produto ou serviço;
   * - 9
     - quantidade
     - Decimal
     - Sim
     - Quantidade do item. Precisão de 4 dígitos decimais; Ex: 100.0000;
   * - 10
     - unidadeMedida
     - Texto (30)
     - Sim
     - Unidade de medida do item
   * - 11
     - valorUnitarioEstimado
     - Decimal
     - Sim
     - Valor unitário estimado/avaliado. Maior ou igual a 0 (zero). Precisão de 4 dígitos decimais; Ex: 100.0000;
   * - 12
     - valorTotal
     - Decimal
     - Sim
     - Valor total do item. Maior ou igual a 0 (zero). Precisão de 4 dígitos decimais; Ex: 100.0000;
   * - 13
     - criterioJulgamentoId
     - Inteiro
     - Sim
     - Código da tabela de domínio Critério de julgamento
   * - 14
     - orcamentoSigiloso
     - Booleano
     - Sim
     - Identifica se o orçamento é sigiloso; true - Sigiloso; false - Não sigiloso; Contratações na modalidade leilão informar false.
   * - 15
     - itemCategoriaId
     - Inteiro
     - Não
     - Categoria do item. Domínios 1 ou 2 aplicados à modalidade leilão. Outras modalidades de contratação utilizar o domínio 3. Domínio: 1 – Bens Imóveis; 2 – Bens Móveis; 3 - Não se aplica
   * - 16
     - patrimonio
     - Texto (255)
     - Não
     - Código de Patrimonio do Item de bens móveis quando existir.
   * - 17
     - codigoRegistroImobiliario
     - Texto (255)
     - Condicional
     - Código de Registro Imobiliário. Obrigatório para contratação na modalidade leilão cuja categoria do item seja bens imóveis.
   * - 18
     - aplicabilidadeMargemPreferenciaNormal
     - Booleano
     - Sim
     - Indicador da aplicabilidade de Margem de Preferência Normal para o item. (False/Não; True/Sim)
   * - 19
     - aplicabilidadeMargemPreferenciaAdicional
     - Booleano
     - Sim
     - Indicador da aplicabilidade de Margem de Preferência Adicional para o item. (False/Não; True/Sim)
   * - 20
     - percentualMargemPreferenciaNormal
     - Decimal
     - Obrigatório quando indicador de aplicabilidade de Margem de Preferência Normal for “True/Sim”.
     - Percentual de Margem de Preferência Normal. Maior ou igual a 0 (zero) e menor que 100. Ex: 10.0000; Se indicador de aplicabilidade de Margem de Preferência Normal for “false/Não” enviar NULO.
   * - 21
     - percentualMargemPreferenciaAdicional
     - Decimal
     - Obrigatório quando indicador de aplicabilidade de Margem de Preferência Adicional for “True/Sim”.
     - Percentual de Margem de Preferência Adicional. Maior ou igual a 0 (zero) e menor que 100. Ex: 10.0000; Se indicador de aplicabilidade de Margem de Preferência Adicional for “false/Não” enviar NULO.
   * - 22
     - ncmNbsCodigo
     - Texto (15)
     - Não
     - Código NCM do material ou Código NBS do serviço com ou sem a formatação da máscara.
   * - 23
     - ncmNbsDescricao
     - Texto (2048)
     - Não
     - Descrição respectiva ao NCM para material ou NBS para serviço.
   * - 24
     - categoriaItemCatalogoId
     - Inteiro
     - Não
     - Código da categoria do item. Consultar item Categoria de Item para mais informações
   * - 25
     - catalogoId
     - Inteiro
     - Não
     - Código do Catálogo de itens utilizado como referência. Consultar item Catálogos para mais informações
   * - 26
     - catalogoCodigoItem
     - Texto (20)
     - Não
     - Código do item conforme consta no Catálogo utilizado como referência.
   * - 27
     - informacaoComplementar
     - Texto (4096)
     - Não
     - Descrição complementar para o produto ou serviço
   * - 28
     - codigoTipoMargemPreferencia
     - Inteiro
     - Não
     - Código do tipo de margem de preferência. Domínio: 1 – Resolução CIIA-PAC; 2 – Resolução CICS;
   * - 29
     - inConteudoNacional
     - Booleano
     - Não
     - Indicador de Exigência de Conteúdo Nacional (False/Não; True/Sim)


Dados de Retorno
~~~~~~~~~~~~~~~~

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
     - location
     - Texto (255)
     - Sim
     - Endereço HTTP do recurso criado

Exemplo de Retorno
~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:

	Retorno: 
	["https://treina.pncp.gov.br/api/pncp/v1/orgaos/10000000000003/compras/2021/1/itens/1"]

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
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
     - Erro
   * - 500
     - Internal Server Error
     - Erro

\
