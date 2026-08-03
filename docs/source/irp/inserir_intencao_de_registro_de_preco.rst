Inserir Intenção de Registro de Preço
=====================================

Serviço que permite inserir uma Intenção de Registro de Preço. Este serviço será acionado por qualquer plataforma digital credenciada.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras 
     - POST
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

		"codigoUnidadeGerenciadora": "1010",
		"tipoInstrumentoConvocatorioId": 1,
		"modalidadeId": 6,
		"amparoLegalId": 1,
		"modoDisputaId": 1,
		"numeroIrp": "0001",
		"anoIrp": 2026,
		"numeroProcesso": "1/2026",
		"objetoIrp": "Descrição do objeto da contratação",
		"informacaoComplementar": "",
		"indicadorPossibilidadeAdesao": true,
		"dataHoraFinalManifestacaoInteresse": "2026-12-30T10:00:00",
		"urlPlataformaOrigem": "url do sistema de origem da IRP",
		"urlProcessoEletronico": "url para página do sistema de controle de processos eletrônicos com os dados da IRP.",
		"itensIrp": [
			{
				"numeroItem": 1,
				"materialOuServico": "M",
				"categoriaItemId": 1,
				"criterioJulgamentoId": 1,
				"aplicabilidadeMargemPreferencia": false,
				"exigenciaConteudoNacional": false,
				"descricao": "Item do tipo material",
				"informacaoComplementar": "SUCO DE UVA INTEGRAL 200ML",
				"unidadeFornecimento": "UN",
				"valorUnitarioEstimado": 10.5,
				"indicadorValorSigiloso": false,
				"codigoGtin": "7891141029318",
				"codigoNcmNbs": "2009.69.00",
				"descricaoNcmNbs": "suco de uva integral 200 ml",
				"catalogoId": 1,
				"codigoItemCatalogo": "9999999"
			}
		]
	}

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

Enviando como arquivo:

.. code-block:: bash
  :linenos:

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``cnpj``, ``Titulo-Documento`` e ``Tipo-Documento-Id`` na URL.

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
     - codigoUnidadeGerenciadora
     - String
     - Sim
     - Código da unidade executora do órgão da IRP; a unidade deverá estar cadastrada para o órgão
   * - 2
     - tipoInstrumentoConvocatorioId
     - Inteiro
     - Sim
     - Código da tabela de domínio Tipo de instrumento convocatório
   * - 3
     - modalidadeId
     - Inteiro
     - Sim
     - Código da tabela de domínio Modalidade
   * - 4
     - amparoLegalId
     - Inteiro
     - Sim
     - Código da tabela de domínio Amparo Legal
   * - 5
     - modoDisputaId
     - Inteiro
     - Sim
     - Código da tabela de domínio Modo de disputa
   * - 6
     - numeroIrp
     - Texto (50)
     - Sim
     - Número da IRP no sistema de origem
   * - 7
     - anoIrp
     - Inteiro
     - Sim
     - Ano da IRP. Esse é o ano relacionado à IRP. (Ex: 2021)
   * - 8
     - numeroProcesso
     - Texto (50)
     - Sim
     - Número do processo no sistema de origem
   * - 9
     - objetoIrp
     - Texto (512)
     - Sim
     - Objeto da IRP.
   * - 10
     - informacaoComplementar
     - Texto (512)
     - Não
     - Informações complementares; Se existir;
   * - 11
     - indicadorPossibilidadeAdesao
     - Booleano
     - Sim
     - Indica se a IRP poderá admitir adesão por órgãos ou entidades participantes
   * - 12
     - dataHoraFinalManifestacaoInteresse
     - Data
     - Sim
     - Data/Hora Final de Manifestação de Interesse (AAAA-MM-DD)
   * - 13
     - urlPlataformaOrigem
     - Texto (512)
     - Sim
     - URL para página/portal do sistema de origem da IRP. Esta url será exibida no Portal PNCP.
   * - 14
     - urlProcessoEletronico
     - Texto (512)
     - Sim
     - URL para página do sistema de controle de processos eletrônicos com os dados do processo desta contratação. Esta url será exibida no Portal PNCP.
   * - 15
     - itensIrp
     - Lista
     - Sim
     - 
   * - 15.1
     - numeroItem
     - Inteiro
     - Sim
     - Número do item na IRP (único e sequencial crescente)
   * - 15.2
     - materialOuServico
     - Texto (1)
     - Sim
     - Domínio: M - Material; S - Serviço;
   * - 15.3
     - categoriaItemId
     - Inteiro
     - Não
     - Código da categoria do item. Consultar `Categoria de Item <https://pncp.gov.br/app/entidades-dominio>`_ para mais informações.
   * - 15.4
     - criterioJulgamentoId
     - Inteiro
     - Sim
     - Código da tabela de domínio Critério de julgamento
   * - 15.5
     - aplicabilidadeMargemPreferencia
     - Booleano
     - Sim
     - Indicador da aplicabilidade de Margem de Preferência para o item. (False/Não; True/Sim)
   * - 15.6
     - exigenciaConteudoNacional
     - Booleano
     - Sim
     - Indicador de Exigência de Conteúdo Nacional (False/Não; True/Sim)
   * - 15.7
     - descricao
     - Texto (512)
     - Sim
     - Descrição para o item
   * - 15.8
     - informacaoComplementar
     - Texto (512)
     - Não
     - Informações complementares; Se existir;
   * - 15.9
     - unidadeFornecimento
     - Texto (30)
     - Sim
     - Unidade de Fornecimento
   * - 15.10
     - valorUnitarioEstimado
     - Decimal
     - Sim
     - Valor unitário estimado para o item da IRP. Maior ou igual a 0 (zero). Precisão de 4 dígitos decimais; Ex: 100.0000;
   * - 15.11
     - indicadorValorSigiloso
     - Booleano
     - Sim
     - Identifica se o valor do item é sigiloso; true - Sigiloso; false - Não sigiloso;
   * - 15.12
     - codigoGtin
     - Texto (20)
     - Não
     - Identifica precisamente um item quando ele possui um código de barras padronizado
   * - 15.13
     - codigoNcmNbs
     - Texto (15)
     - Não
     - Código NCM do material ou Código NBS do serviço com ou sem a formatação da máscara.
   * - 15.14
     - descricaoNcmNbs
     - Texto (2048)
     - Não
     - Descrição respectiva ao NCM para material ou NBS para serviço.
   * - 15.15
     - catalogoId
     - Inteiro
     - Não
     - Código do Catálogo de itens utilizado como referência. Consultar 7.45. Catálogos (Itens de Plano de Contratações e Contratações) para mais informações.
   * - 15.16
     - codigoItemCatalogo
     - Texto (20)
     - Não
     - Código do item conforme consta no Catálogo utilizado como referência.

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
     - Bad Request
     - Erro
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro
