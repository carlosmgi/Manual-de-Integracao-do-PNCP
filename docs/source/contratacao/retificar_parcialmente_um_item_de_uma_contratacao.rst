Retificar parcialmente um Item de uma Contratação
=================================================

Serviço para retificar parcialmente um item de uma contratação. Pode ser utilizado para alterar a situação do item conforme tabela de domínio de situação do item da contratação. **Na retificação parcial, deverão ser enviadas apenas as informações que sofrerão alteração. Por exemplo, se desejar apenas atualizar a situação de um item, você deve informar apenas o atributo situacaoCompraItemId e ignorar todos os demais atributos.**

.. Attention::

	Fica impedida a retificação do item caso a contratação não possua documento/arquivo ativo vinculado a ela no PNCP. Deve-se observar as regras de conformidade implementadas entre Instrumento Convocatório, Modalidade e Amparo Legal e Instrumento Convocatório e Modo de Disputa descritas na seção 5 deste Manual. O PNCP não receberá novas contratações ou permitirá a retificação se os campos informados não estiverem em conformidade.


Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
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
  :linenos:

	curl -k -X PATCH \
	  --header "Authorization: Bearer access_token" \
	  "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/itens/1" \
	  -H "accept: */*" \
	  -H "Content-Type: application/json" \
	  --data "@/home/objeto.json" 

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``cnpj``, ``ano``, ``sequencial`` e ``numeroItem`` na URL.

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
     - Sequencial da contratação no PNCP; Número sequencial gerado no momento que a contratação foi inserida no PNCP
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
     - Quantidade do item da contratação. Precisão de 4 dígitos decimais; Ex: 100.0000;
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
     - situacaoCompraItemId
     - Inteiro
     - Sim
     - Código da tabela de domínio Situação do item da Contratação
   * - 14
     - criterioJulgamentoId
     - Inteiro
     - Sim
     - Código da tabela de domínio Critério de julgamento
   * - 15
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para a retificação dos atributos do item da contratação.
   * - 16
     - orcamentoSigiloso
     - Booleano
     - Sim
     - Identifica se o orçamento é sigiloso; true - Sigiloso; false - Não sigiloso; Contratações na modalidade leilão informar false.
   * - 17
     - itemCategoriaId
     - Inteiro
     - Sim
     - Categoria do item. Domínios 1 ou 2 aplicados à modalidade leilão. Outras modalidades de contratação utilizar o domínio 3. Domínio: 1 – Bens Imóveis; 2 – Bens Móveis; 3 - Não se aplica
   * - 18
     - patrimonio
     - Texto (255)
     - Não
     - Código de Patrimonio do Item de bens móveis quando existir.
   * - 19
     - codigoRegistroImobiliario
     - Texto (255)
     - Condicional
     - Código de Registro Imobiliário. Obrigatório para contratação na modalidade leilão cuja categoria do item seja bens imóveis.
   * - 20
     - aplicabilidadeMargemPreferenciaNormal
     - Booleano
     - Sim
     - Indicador da aplicabilidade de Margem de Preferência Normal para o item. (False/Não; True/Sim)
   * - 21
     - aplicabilidadeMargemPreferenciaAdicional
     - Booleano
     - Sim
     - Indicador da aplicabilidade de Margem de Preferência Adicional para o item. (False/Não; True/Sim)
   * - 22
     - percentualMargemPreferenciaNormal
     - Decimal
     - Obrigatório quando indicador de aplicabilidade de Margem de Preferência Normal for “True/Sim”.
     - Percentual de Margem de Preferência Normal. Maior ou igual a 0 (zero) e menor que 100. Ex: 10.0000; Se indicador de aplicabilidade de Margem de Preferência Normal for “false/Não” enviar NULO.
   * - 23
     - percentualMargemPreferenciaAdicional
     - Decimal
     - Obrigatório quando indicador de aplicabilidade de Margem de Preferência Adicional for “True/Sim”.
     - Percentual de Margem de Preferência Adicional. Maior ou igual a 0 (zero) e menor que 100. Ex: 10.0000; Se indicador de aplicabilidade de Margem de Preferência Adicional for “false/Não” enviar NULO.
   * - 24
     - ncmNbsCodigo
     - Texto (15)
     - Não
     - Código NCM do material ou Código NBS do serviço com ou sem a formatação da máscara.
   * - 25
     - ncmNbsDescricao
     - Texto (2048)
     - Não
     - Descrição respectiva ao NCM para material ou NBS para serviço.
   * - 26
     - categoriaItemCatalogoId
     - Inteiro
     - Não
     - Código da categoria do item. Consultar item Categoria de Item para mais informações
   * - 27
     - catalogoId
     - Inteiro
     - Não
     - Código do Catálogo de itens utilizado como referência. Consultar item Catálogos para mais informações
   * - 28
     - catalogoCodigoItem
     - Texto (20)
     - Não
     - Código do item conforme consta no Catálogo utilizado como referência.
   * - 29
     - informacaoComplementar
     - Texto (4096)
     - Não
     - Descrição complementar para o produto ou serviço
   * - 30
     - codigoTipoMargemPreferencia
     - Inteiro
     - Não
     - Código do tipo de margem de preferência. Domínio: 1 – Resolução CIIA-PAC; 2 – Resolução CICS;
   * - 31
     - inConteudoNacional
     - Booleano
     - Não
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
