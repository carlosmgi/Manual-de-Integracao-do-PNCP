Serviços de Contratação (Editais, Avisos e Atos) 
================================================

Inserir Contratação
~~~~~~~~~~~~~~~~~~~

Serviço que permite inserir uma contratação pública (módulo contratação/edital/aviso) no PNCP. O sistema exige o upload de um arquivo anexo à contratação enviada. O serviço requer que seja enviado pelo menos um item e o limite máximo de recebimento é de 2000 itens por requisição. 
As extensões permitidas para o arquivo anexo são listadas na seção: Tabelas de domínio - Extensões de arquivo aceitos pelas APIs de Documento. 

.. warning::

    Deve-se observar as regras de conformidade implementadas entre Instrumento Convocatório, Modalidade e Amparo Legal e Instrumento Convocatório e Modo de Disputa     descritas na seção 5 deste Manual. O PNCP não receberá novas contratações ou permitirá a retificação se os campos informados não estiverem em conformidade.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras 
     - POST
	 

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
  :linenos:

        {
    	"codigoUnidadeCompradora": "1010",
    	"tipoInstrumentoConvocatorioId": "1",
    	"modalidadeId": "6",
    	"modoDisputaId": "1",
    	"numeroCompra": "0001",
    	"anoCompra": 2023,
    	"numeroProcesso": "1/2023",
    	"objetoCompra": "Descrição do objeto da contratação",
    	"informacaoComplementar": "",
    	"srp": false,
    	"dataAberturaProposta": "2022-07-21T08:00:00",
    	"dataEncerramentoProposta": "2022-07-21T17:00:00",
    	"amparoLegalId": "1",
    	"linkSistemaOrigem": "url do sistema de origem para envio de proposta / lance",
    	"linkProcessoEletronico": "url para página do sistema de controle de processos eletrônicos com os dados do processo desta contratação",
    	"justificativaPresencial": "texto de justificativa pela escolha da modalidade presencial",
    	"fontesOrcamentarias": [
    		1,
    		2
    	],
    	"itensCompra": [
    		{
    			"numeroItem": 1,
    			"materialOuServico": "S",
    			"criterioJulgamentoId": "1",
    			"tipoBeneficioId": "4",
    			"incentivoProdutivoBasico": false,
    			"quantidade": 1000,
    			"descricao": "Item do tipo serviço",
    			"unidadeMedida": "Unidade",
    			"orcamentoSigiloso": false,
    			"valorUnitarioEstimado": 1.5001,
    			"valorTotal": 1500.0,
    			"itemCategoriaId": 3,
    			"aplicabilidadeMargemPreferenciaNormal": false,
    			"aplicabilidadeMargemPreferenciaAdicional": false,
    			"catalogoId": 1,
    			"categoriaItemCatalogoId": 1,
    			"catalogoCodigoItem": "18805",
    			"informacaoComplementar": "Torrefação / Moagem - Café"
    		},
    		{
    			"numeroItem": 2,
    			"materialOuServico": "M",
    			"criterioJulgamentoId": "1",
    			"tipoBeneficioId": "4",
    			"incentivoProdutivoBasico": false,
    			"quantidade": 10,
    			"descricao": "Item do tipo material",
    			"unidadeMedida": "Kilograma",
    			"orcamentoSigiloso": false,
    			"valorUnitarioEstimado": 100.0,
    			"valorTotal": 1000.0,
    			"itemCategoriaId": 3,
    			"patrimonio": null,
    			"codigoRegistroImobiliario": null,
    			"aplicabilidadeMargemPreferenciaNormal": true,
    			"aplicabilidadeMargemPreferenciaAdicional": true,
    			"percentualMargemPreferenciaNormal": 10.0,
    			"percentualMargemPreferenciaAdicional": 10.0,
    			"codigoTipoMargemPreferencia": 1,
    			"inConteudoNacional": true,
    			"ncmNbsCodigo": "0901.11.10",
    			"ncmNbsDescricao": "Café, chá, mate e especiarias em grão",
    			"catalogoId": 1,
    			"categoriaItemCatalogoId": 1,
    			"catalogoCodigoItem": "618302",
    			"informacaoComplementar": "Café; Apresentação: Torrado Moído"
    		}
    	]
    }
  
  

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

       Enviando como arquivo: 
    curl -k -X POST --header "Authorization: Beareraccess_token" "${BASE_URL}/v1/orgaos
    /10000000000003/compras" -H "accept: */*" -H "Content-Type: multipart/form-data" -H 'Titulo
    Documento: nome_do_arquivo' -H 'Tipo-Documento-Id: 1' --form 
    ‘compra=@”/home/objeto.json";type=application/json ’ --form ‘documento=@”arquivo.pdf” ’ 
     
    Enviando como JSON: 
    curl -k -X POST --header "Authorization: Beareraccess_token" "${BASE_URL}/v1/orgaos
    /10000000000003/compras" -H "accept: */*" -H "Content-Type: multipart/form-data" -H 'Titulo
    Documento: nome_do_arquivo' -H 'Tipo-Documento-Id: 1' --form ‘compra=@” { \"anoCompra\": 2021, 
      \"itensCompra\": [ { \"numeroItem\": 1, \"materialOuServico\": \"M\",  \"tipoBeneficioId\": \"1\", 
    \"incentivoProdutivoBasico\": false,  \"descricao\": \"string\", \"quantidade\": 1, \"unidadeMedida\": 
    \"string\", \"orcamentoSigiloso\": false, \"valorUnitarioEstimado\": 1, \"valorTotal\": 1, 
    \"criterioJulgamentoId\": \"1\", \"itemCategoriaId\": \"1\", \"patrimonio\": \"string\", 
    \"codigoRegistroImobiliario\": \"string\", \"aplicabilidadeMargemPreferenciaNormal\": true, 
    \"aplicabilidadeMargemPreferenciaAdicional\": true, \"percentualMargemPreferenciaNormal\": 
    10.0000 , \"percentualMargemPreferenciaAdicional\": 10.0000, \"catalogoId\": 1, 
    \"categoriaItemCatalogoId\": 1, \"catalogoCodigoItem\": \"string\", \"informacaoComplementar\": 
    \"string\"  } ], \"tipoInstrumentoConvocatorioId\": \"1\", \"modalidadeId\": \"6\", \"modoDisputaId\": 
    \"1\", \"numeroCompra\": \"1\", \"numeroProcesso\": \"1\", \"objetoCompra\": \"string\", 
    \"informacaoComplementar\": \"string\", \"amparoLegalId\": 1, \"srp\": true, 
    \"dataAberturaProposta\": \"2022-01-18T14:30:01\", \"dataEncerramentoProposta\": \"2022-01
    31T14:30:01\", \"codigoUnidadeCompradora\": \"1\", \"linkSistemaOrigem\": \"string\", 
    \"linkProcessoEletronico\": \"string\", \"justificativaPresencial\": \"string\" }";type=application/json ’ -
    form ‘documento=@”arquivo.pdf” ’ 


Exemplo Requisição (Java, usando Spring/RestTemplate) 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

    //gerando headers da requisição 
    HttpHeaders headers = new HttpHeaders(); 
    headers.setContentType(MediaType.MULTIPART_FORM_DATA); 
    headers.setBearerAuth(access_token); 
    headers.add("Titulo-Documento", "tituloDocumento"); 
    headers.add("Tipo-Documento-Id", "16"); 
     
    //gerando body da requisição 
    MultiValueMap<String, Object> body = new LinkedMultiValueMap<>(); 
    body.add("compra", new FileSystemResource ("/path/objetoCompra.json")); 
    body.add("documento", new FileSystemResource ("/path/arquivo.docx")); 
     
    //gerando entidade Http e usando RestTemplate para obter uma Response Entity 
    HttpEntity<MultiValueMap<String, Object>>requestEntity = new HttpEntity<>(body, headers); 
    RestTemplaterestTemplate = new RestTemplate(); 
    ResponseEntity<String> response = restTemplate.postForEntity("${BASE_URL}/v1/orgaos
    /10000000000003/compras", requestEntity, String.class);

Dados de Entrada
^^^^^^^^^^^^^^^^

.. note::

   Alimentar os parâmetros ``cnpj``, ``Titulo-Documento`` e ``Tipo-Documento-Id`` na URL.

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
     - tituloDocumento
     - Texto (255)
     - Sim
     - Título do documento

   * - 3
     - tipoDocumentoId
     - Inteiro
     - Sim
     - Código da tabela de domínio Tipo de documento

   * - 4
     - codigoUnidadeCompradora
     - Texto (20)
     - Sim
     - Código da unidade administrativa cadastrada para o órgão

   * - 5
     - tipoInstrumentoConvocatorioId
     - Inteiro
     - Sim
     - Código da tabela de domínio Tipo de instrumento convocatório

   * - 6
     - modalidadeId
     - Inteiro
     - Sim
     - Código da tabela de domínio Modalidade

   * - 7
     - modoDisputaId
     - Inteiro
     - Sim
     - Código da tabela de domínio Modo de disputa

   * - 8
     - numeroCompra
     - Texto (50)
     - Sim
     - Número da contratação no sistema de origem

   * - 9
     - anoCompra
     - Inteiro
     - Sim
     - Ano da contratação

   * - 10
     - numeroProcesso
     - Texto (50)
     - Sim
     - Número do processo no sistema de origem

   * - 11
     - objetoCompra
     - Texto (5120)
     - Sim
     - Objeto da contratação

   * - 12
     - informacaoComplementar
     - Texto (5120)
     - Não
     - Informações complementares

   * - 13
     - srp
     - Booleano
     - Sim
     - Indica se é Sistema de Registro de Preços (SRP)

   * - 15
     - dataAberturaProposta
     - Data/Hora
     - Condicional
     - Obrigatório para tipos 1 ou 2; informar data de início das propostas

   * - 16
     - dataEncerramentoProposta
     - Data/Hora
     - Condicional
     - Obrigatório para tipos 1 ou 2; informar data de encerramento

   * - 17
     - amparoLegalId
     - Inteiro
     - Sim
     - Código da tabela de domínio Amparo Legal

   * - 18
     - itensCompra
     - Lista
     - Sim
     - Lista de itens da contratação

   * - 18.1
     - numeroItem
     - Inteiro
     - Sim
     - Número sequencial do item

   * - 18.2
     - materialOuServico
     - Texto (1)
     - Sim
     - M = Material; S = Serviço

   * - 18.3
     - tipoBeneficioId
     - Inteiro
     - Sim
     - Código da tabela Tipo de benefício

   * - 18.4
     - incentivoProdutivoBasico
     - Booleano
     - Sim
     - Indica incentivo PPB

   * - 18.5
     - descricao
     - Texto (2048)
     - Sim
     - Descrição do item

   * - 18.6
     - quantidade
     - Decimal
     - Sim
     - Quantidade com até 4 casas decimais

   * - 18.7
     - unidadeMedida
     - Texto (30)
     - Sim
     - Unidade de medida

   * - 18.8
     - valorUnitarioEstimado
     - Decimal
     - Sim
     - Valor unitário estimado

   * - 18.9
     - valorTotal
     - Decimal
     - Sim
     - Valor total do item

   * - 18.10
     - criterioJulgamentoId
     - Inteiro
     - Sim
     - Código do critério de julgamento

   * - 18.11
     - orcamentoSigiloso
     - Booleano
     - Sim
     - Indica se o orçamento é sigiloso

   * - 18.12
     - itemCategoriaId
     - Inteiro
     - Não
     - Categoria do item (domínios 1, 2 ou 3)

   * - 18.13
     - patrimonio
     - Texto (255)
     - Condicional
     - Obrigatório para leilão com bens móveis

   * - 18.14
     - codigoRegistroImobiliario
     - Texto (255)
     - Condicional
     - Obrigatório para leilão com bens imóveis

   * - 18.15
     - aplicabilidadeMargemPreferenciaNormal
     - Booleano
     - Sim
     - Indica margem de preferência normal

   * - 18.16
     - aplicabilidadeMargemPreferenciaAdicional
     - Booleano
     - Sim
     - Indica margem de preferência adicional

   * - 18.17
     - percentualMargemPreferenciaNormal
     - Decimal
     - Condicional
     - Obrigatório se margem normal for verdadeira

   * - 18.18
     - percentualMargemPreferenciaAdicional
     - Decimal
     - Condicional
     - Obrigatório se margem adicional for verdadeira

   * - 18.19
     - ncmNbsCodigo
     - Texto (15)
     - Não
     - Código NCM ou NBS

   * - 18.20
     - ncmNbsDescricao
     - Texto (2048)
     - Não
     - Descrição NCM/NBS

   * - 19
     - linkSistemaOrigem
     - Texto (512)
     - Não
     - URL do sistema de origem

   * - 20
     - justificativaPresencial
     - Texto (5120)
     - Condicional
     - Obrigatório para modalidade presencial

   * - 21
     - linkProcessoEletronico
     - Texto (512)
     - Não
     - URL do processo eletrônico

   * - 22
     - fontesOrcamentarias
     - Lista (Inteiro)
     - Não
     - Lista de fontes orçamentárias


Dados de Retorno
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - compraUri
     - Texto (255)
     - Endereço HTTP da contratação gravada
   * - 2
     - documentoUri
     - Texto (255)
     - Endereço HTTP do documento anexo à contratação

Exemplo de Retorno
^^^^^^^^^^^^^^^^^^

.. code-block:: bash
 
    Retorno:  
    Headers: 
    access-control-allow-credentials: true 
    access-control-allow-headers: Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin, 
    access-control-allow-methods: GET,PUT,POST,DELETE,OPTIONS 
    access-control-allow-origin: * 
    cache-control: no-cache,no-store,max-age=0,must-revalidate 
    content-type: application/json 
    date: ? 
    expires: ? 
    location: https://treina.pncp.gov.br/api/pncp/v1/orgaos/10000000000003/compras/2022/1 
    pragma: no-cache 
    strict-transport-security: max-age=? 
    x-content-type-options: nosniff 
    x-firefox-spdy: ? 
    x-frame-options: DENY 
    x-xss-protection: 1; mode=block 
     
    Body: 
    { 
    "compraUri": https://treina.pncp.gov.br/api/pncp/v1/orgaos/10000000000003/compras/2022/1, 
    "documentoUri": https://treina.pncp.gov.br/api/pncp/v1/orgaos/10000000000003/compras/2022/1/arquivos/1 
    }

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

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
     - Bad Request
     - Erro
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Retificar Contratação
~~~~~~~~~~~~~~~~~~~~~

Serviço que permite retificar os dados de uma contratação. Este serviço será acionado por qualquer plataforma digital credenciada. **Importante lembrar que na Retificação todas as informações terão que ser enviadas novamente, não apenas as que sofreram alteração.**

.. warning::

	Fica impedida a retificação da contratação caso a mesma não possua documento/arquivo ativo vinculado a ela no PNCP. Deve-se observar as regras de conformidade implementadas entre Instrumento Convocatório, Modalidade e Amparo Legal e Instrumento Convocatório e Modo de Disputa descritas na seção 5 deste Manual. O PNCP não receberá novas contratações ou permitirá a retificação se os campos informados não estiverem em conformidade.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial} 
     - PUT
	 

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
  :linenos:

	{
		"tipoInstrumentoConvocatorioId": "1",
		"modalidadeId": "1",
		"modoDisputaId": "1",
		"numeroCompra": "1",
		"numeroProcesso": "1/2021",
		"situacaoCompraId": "1",
		"objetoCompra": "Objeto da contratação",
		"informacaoComplementar": "",
		"cnpjOrgaoSubRogado": "",
		"codigoUnidadeSubRogada": "",
		"srp": true,
		"dataAberturaProposta": "2021-07-21T08:00:00",
		"dataEncerramentoProposta": "2021-07-22T17:00:00",
		"amparoLegalId": "1",
		"linkSistemaOrigem": "url do sistema de origem para envio de proposta / lance",
		"linkProcessoEletronico": "url para página do sistema de controle de processos eletrônicos com os dados do processo desta contratação",
		"justificativaPresencial": "justificativa pela escolha da modalidade presencial",
		"justificativa": "motivo/justificativa para a retificação da contratação"
	}
    

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X  PUT --header "Authorization: Bearer access_token" 
	"${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1" -H "accept: */*" -H "Content-Type: application/json" 

Dados de Entrada
^^^^^^^^^^^^^^^^

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
     - tipoInstrumentoConvocatorioId
     - Inteiro
     - Sim
     - Código da tabela de domínio Tipo de instrumento convocatório

   * - 5
     - modalidadeId
     - Inteiro
     - Sim
     - Código da tabela de domínio Modalidade

   * - 6
     - modoDisputaId
     - Inteiro
     - Sim
     - Código da tabela de domínio Modo de disputa

   * - 7
     - numeroCompra
     - Texto (50)
     - Sim
     - Número da contratação no sistema de origem

   * - 8
     - numeroProcesso
     - Texto (50)
     - Sim
     - Número do processo no sistema de origem

   * - 9
     - situacaoCompraId
     - Inteiro
     - Sim
     - Código da tabela de domínio Situação da Contratação

   * - 10
     - objetoCompra
     - Texto (5120)
     - Sim
     - Objeto da contratação

   * - 11
     - informacaoComplementar
     - Texto (5120)
     - Não
     - Informações complementares

   * - 12
     - cnpjOrgaoSubRogado
     - Texto (14)
     - Não
     - CNPJ do órgão sub-rogado

   * - 13
     - codigoUnidadeSubRogada
     - Texto (30)
     - Não
     - Código da unidade sub-rogada

   * - 14
     - srp
     - Booleano
     - Sim
     - Indica se a contratação é SRP; para leilão informar false

   * - 16
     - dataAberturaProposta
     - Data/Hora
     - Condicional
     - Obrigatório para tipo de instrumento 1 ou 2

   * - 17
     - dataEncerramentoProposta
     - Data/Hora
     - Condicional
     - Obrigatório para tipo de instrumento 1 ou 2

   * - 18
     - amparoLegalId
     - Inteiro
     - Sim
     - Código da tabela de domínio Amparo Legal

   * - 19
     - linkSistemaOrigem
     - Texto (512)
     - Não
     - URL do sistema de origem

   * - 20
     - justificativa
     - Texto (255)
     - Sim
     - Justificativa para retificação da contratação

   * - 21
     - justificativaPresencial
     - Texto (5120)
     - Condicional
     - Obrigatório para modalidade presencial

   * - 22
     - linkProcessoEletronico
     - Texto (512)
     - Não
     - URL do processo eletrônico

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

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

Retificar Parcialmente uma Contratação
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite retificar parcialmente os dados de uma contratação. Este serviço será acionado por qualquer plataforma digital credenciada. **Na retificação parcial, podem se enviados apenas as informações que sofrerão alteração. Por exemplo, se desejar apenas atualizar a situação de uma contratação, deve informar apenas o atributo situacaoCompraId e ignorar todos os demais atributos.** 

.. warning::

	Fica impedida a retificação da contratação caso a mesma não possua documento/arquivo ativo vinculado a ela no PNCP. Deve-se observar as regras de conformidade implementadas entre Instrumento Convocatório, Modalidade e Amparo Legal e Instrumento Convocatório e Modo de Disputa descritas na seção 5 deste Manual. O PNCP não receberá novas contratações ou permitirá a retificação se os campos informados não estiverem em conformidade.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}
     - PATCH
	 

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
  :linenos:

	{
		"tipoInstrumentoConvocatorioId": "1",
		"modalidadeId": "1",
		"modoDisputaId": "1",
		"numeroCompra": "1",
		"numeroProcesso": "1/2021",
		"situacaoCompraId": "1",
		"objetoCompra": "Objeto da contratação",
		"informacaoComplementar": "",
		"cnpjOrgaoSubRogado": "",
		"codigoUnidadeSubRogada": "",
		"srp": true,
		"dataAberturaProposta": "2021-07-21T08:00:00",
		"dataEncerramentoProposta": "2021-07-22T17:00:00",
		"amparoLegalId": "1",
		"linkSistemaOrigem": "url do sistema de origem para envio de proposta / lance",
		"linkProcessoEletronico": "url para página do sistema de controle de processos eletrônicos com os dados do processo desta  contratação",
		"justificativaPresencial": "justificativa pela escolha da modalidade presencial",
		"justificativa": "motivo/justificativa para a retificação da contratação"
	}
  

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X  PATCH --header "Authorization: Bearer access_token" 
	"${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1" -H "accept: */*" -H "Content-Type: application/json" 

Dados de Entrada
^^^^^^^^^^^^^^^^

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
     - tipoInstrumentoConvocatorioId
     - Inteiro
     - Não
     - Código da tabela de domínio Tipo de instrumento convocatório

   * - 5
     - modalidadeId
     - Inteiro
     - Não
     - Código da tabela de domínio Modalidade

   * - 6
     - modoDisputaId
     - Inteiro
     - Não
     - Código da tabela de domínio Modo de disputa

   * - 7
     - numeroCompra
     - Texto (50)
     - Não
     - Número da contratação no sistema de origem

   * - 8
     - numeroProcesso
     - Texto (50)
     - Não
     - Número do processo no sistema de origem

   * - 9
     - situacaoCompraId
     - Inteiro
     - Não
     - Código da tabela de domínio Situação da Contratação

   * - 10
     - objetoCompra
     - Texto (5120)
     - Não
     - Objeto da contratação

   * - 11
     - informacaoComplementar
     - Texto (5120)
     - Não
     - Informações complementares

   * - 12
     - cnpjOrgaoSubRogado
     - Texto (14)
     - Não
     - CNPJ do órgão sub-rogado

   * - 13
     - codigoUnidadeSubRogada
     - Texto (30)
     - Não
     - Código da unidade sub-rogada

   * - 14
     - srp
     - Booleano
     - Não
     - Indica se a contratação é SRP; para leilão informar false

   * - 16
     - dataAberturaProposta
     - Data/Hora
     - Condicional
     - Obrigatório para tipo de instrumento 1 ou 2

   * - 17
     - dataEncerramentoProposta
     - Data/Hora
     - Condicional
     - Obrigatório para tipo de instrumento 1 ou 2

   * - 18
     - amparoLegalId
     - Inteiro
     - Não
     - Código da tabela de domínio Amparo Legal

   * - 19
     - linkSistemaOrigem
     - Texto (512)
     - Não
     - URL do sistema de origem

   * - 20
     - justificativa
     - Texto (255)
     - Sim
     - Justificativa para retificação da contratação

   * - 21
     - justificativaPresencial
     - Texto (5120)
     - Condicional
     - Obrigatório para modalidade presencial

   * - 22
     - linkProcessoEletronico
     - Texto (512)
     - Não
     - URL do processo eletrônico

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 15 25 20
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 200
     - OK
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
	 
Excluir Contratação
~~~~~~~~~~~~~~~~~~~

Serviço que permite excluir uma contratação. Este serviço será acionado por qualquer plataforma digital credenciada. 

.. warning::

	Não será possível excluir Contratação com Ata de Registro de Preços ou Contrato ativo. 

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial} 
     - DELETE
	 

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
  :linenos:

	{ 
		"justificativa": "Motivo/justificativa a exclusão da contratação" 
	} 


Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X  DELETE --header "Authorization: Bearer access_token" 
	"${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1" -H "accept: */*" -H "Content-Type: application/json"

	 Dados de Entrada
^^^^^^^^^^^^^^^^

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
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para exclusão da contratação

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

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
	 
Consultar uma Contratação 
~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite consultar uma contratação. 

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial} 
     - GET
	 

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -X ‘GET’ "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1" -H "accept: */*" 

Dados de Entrada
^^^^^^^^^^^^^^^^

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

Dados de Retorno
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - 1
     - numeroControlePNCP
     - Texto
     - Número de controle PNCP da contratação

   * - 2
     - numeroCompra
     - Texto (50)
     - Número da contratação no sistema de origem

   * - 3
     - anoCompra
     - Inteiro
     - Ano da contratação

   * - 4
     - processo
     - Texto (50)
     - Número do processo no sistema de origem

   * - 5
     - tipoInstrumentoConvocatorioId
     - Inteiro
     - Código do instrumento convocatório

   * - 6
     - tipoInstrumentoConvocatorioNome
     - Texto
     - Nome do instrumento convocatório

   * - 7
     - modalidadeId
     - Inteiro
     - Código da modalidade

   * - 8
     - modalidadeNome
     - Texto
     - Nome da modalidade

   * - 9
     - modoDisputaId
     - Inteiro
     - Código do modo de disputa

   * - 10
     - modoDisputaNome
     - Texto
     - Nome do modo de disputa

   * - 11
     - situacaoCompraId
     - Inteiro
     - Código da situação da contratação

   * - 12
     - situacaoCompraNome
     - Texto
     - Nome da situação da contratação

   * - 13
     - objetoCompra
     - Texto (5120)
     - Descrição do objeto da contratação

   * - 14
     - informacaoComplementar
     - Texto (5120)
     - Informação complementar

   * - 15
     - srp
     - Booleano
     - Indica se a contratação é SRP

   * - 16
     - amparoLegal
     - 
     - Dados do amparo legal
   * - 16.1
     - amparoLegalNome
     - Texto
     - Nome do amparo legal
   * - 16.2
     - amparoLegalDescricao
     - Texto (100)
     - Descrição do amparo legal

   * - 17
     - orcamentoSigilosoCodigo
     - Inteiro
     - Código do sigilo (1 sem sigilo, 2 parcial, 3 total)

   * - 18
     - orcamentoSigilosoDescricao
     - Texto
     - Descrição do sigilo do orçamento

   * - 19
     - valorTotalEstimado
     - Decimal
     - Valor total estimado da contratação

   * - 20
     - valorTotalHomologado
     - Decimal
     - Valor total homologado

   * - 21
     - dataAberturaProposta
     - Data/Hora
     - Data de abertura das propostas

   * - 22
     - dataEncerramentoProposta
     - Data/Hora
     - Data de encerramento das propostas

   * - 23
     - dataPublicacaoPncp
     - Data
     - Data de publicação no PNCP

   * - 24
     - dataInclusao
     - Data
     - Data de inclusão do registro

   * - 25
     - dataAtualizacao
     - Data
     - Data de atualização

   * - 26
     - sequencialCompra
     - Inteiro
     - Sequencial da contratação no PNCP

   * - 27
     - orgaoEntidade
     - 
     - Dados do órgão/entidade
   * - 27.1
     - cnpj
     - Texto
     - CNPJ do órgão
   * - 27.2
     - razaoSocial
     - Texto
     - Razão social
   * - 27.3
     - poderId
     - Texto
     - Código do poder (L, E, J)
   * - 27.4
     - esferaId
     - Texto
     - Código da esfera (F, E, M, D)

   * - 28
     - unidadeOrgao
     - 
     - Dados da unidade administrativa
   * - 28.1
     - codigoUnidade
     - Texto
     - Código da unidade
   * - 28.2
     - nomeUnidade
     - Texto
     - Nome da unidade
   * - 28.3
     - municipioId
     - Inteiro
     - Código IBGE do município
   * - 28.4
     - municipioNome
     - Texto
     - Nome do município
   * - 28.5
     - ufSigla
     - Texto
     - Sigla da UF
   * - 28.6
     - ufNome
     - Texto
     - Nome da UF

   * - 29
     - orgaoSubRogado
     - 
     - Dados do órgão sub-rogado
   * - 29.1
     - cnpj
     - Texto
     - CNPJ do órgão
   * - 29.2
     - razaoSocial
     - Texto
     - Razão social
   * - 29.3
     - poderId
     - Texto
     - Código do poder
   * - 29.4
     - esferaId
     - Texto
     - Código da esfera
   * - 30
     - unidadeSubRogada
     - 
     - Dados da unidade sub-rogada
   * - 30.1
     - codigoUnidade
     - Texto
     - Código da unidade
   * - 30.2
     - nomeUnidade
     - Texto
     - Nome da unidade
   * - 30.3
     - municipioId
     - Inteiro
     - Código IBGE
   * - 30.4
     - municipioNome
     - Texto
     - Nome do município
   * - 30.5
     - ufSigla
     - Texto
     - Sigla da UF
   * - 30.6
     - ufNome
     - Texto
     - Nome da UF
   * - 31
     - usuarioNome
     - Texto
     - Nome do usuário/sistema
   * - 32
     - linkSistemaOrigem
     - Texto
     - URL do sistema de origem
   * - 33
     - justificativaPresencial
     - Texto
     - Justificativa da modalidade presencial
   * - 34
     - linkProcessoEletronico
     - Texto
     - URL do processo eletrônico
   * - 35
     - dataAtualizacaoGlobal
     - Data
     - Data da última atualização global
   * - 36
     - fontesOrcamentarias
     - 
     - Lista de fontes orçamentárias
   * - 36.1
     - codigo
     - Inteiro
     - Código da fonte
   * - 36.2
     - nome
     - Texto
     - Nome da fonte
   * - 36.3
     - descricao
     - Texto
     - Descrição da fonte
   * - 36.4
     - dataInclusao
     - Data/Hora
     - Data de inclusão

Inserir Documento a uma Contratação
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite inserir/anexar um documento/arquivo a uma Contratação. O sistema permite o upload de arquivos com as extensões listadas na seção: Tabelas de domínio - Extensões de arquivo aceitos pelas APIs de Documento.


Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/arquivos 
     - POST


Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X POST --header "Authorization: Bearer access_token" 
	"${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/arquivos" -H "accept: */*" -H 
	"Content-Type: multipart/form-data" -H "Titulo-Documento: Edital-2021-1" -H "Tipo-Documento-Id: 2" -F "arquivo=@Edital-2021-1.pdf;type=application/pdf" 

Dados de Entrada
^^^^^^^^^^^^^^^^

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
     - tituloDocumento
     - Texto (255)
     - Sim
     - Título do documento

   * - 5
     - tipoDocumentoId
     - Inteiro
     - Sim
     - Código da tabela de domínio Tipo de documento

   * - 6
     - arquivo
     - Binário
     - Sim
     - Conteúdo do arquivo em formato binário

Dados de Retorno
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - location
     - Texto (255)
     - Endereço HTTP do recurso criado


Exemplo de Retorno
^^^^^^^^^^^^^^^^^^

.. code-block:: bash

 
	Retorno: 
	access-control-allow-credentials: true 
	access-control-allow-headers: Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin, 
	access-control-allow-methods: GET,PUT,POST,DELETE,OPTIONS 
	access-control-allow-origin: * 
	cache-control: no-cache,no-store,max-age=0,must-revalidate 
	content-length: 0 
	date: ? 
	expires: 0 
	location: https://treina.pncp.gov.br/api/pncp/v1/orgaos/10000000000003/compras/2021/1/arquivos/1 
	nome-bucket: ? 
	pragma: no-cache 
	strict-transport-security: max-age=? 
	x-content-type-options: nosniff 
	x-firefox-spdy: ? 
	x-frame-options: DENY 
	x-xss-protection: 1; mode=block


Códigos de Retorno
^^^^^^^^^^^^^^^^^^

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

Excluir Documento de uma Contratação
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite remover documento pertencente a uma Contratação. 

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/arquivos/{sequencialDocumento} 
     - DELETE
	 

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
  :linenos:

	{ 
		"justificativa": "Motivo/justificativa para exclusão do documento da contratação" 
	} 
  

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X DELETE --header "Authorization: Bearer access_token" 
	"${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/arquivos/1" -H "accept: */* -H 
	"Content-Type: application/pdf" -H Content-Disposition: filename="nome_arquivo" 

Dados de Entrada
^^^^^^^^^^^^^^^^

.. note::

   Alimentar os parâmetros ``cnpj``, ``ano``, ``sequencial`` e ``sequencialDocumento`` na URL.

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
     - sequencialDocumento
     - Inteiro
     - Sim
     - Sequencial do documento no PNCP

   * - 5
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para exclusão do documento da contratação

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

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
     - Bad Request
     - Erro
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro


Consultar Todos Documentos de uma Contratação 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite consultar a lista de documentos pertencentes a uma contratação. 

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/arquivos 
     - GET


Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/arquivos" -H 
	"Accept: */*”

Dados de Entrada
^^^^^^^^^^^^^^^^

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

Dados de Retorno
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - 1
     - documentos
     - Lista
     - Lista de documentos

   * - 1.1
     - sequencialDocumento
     - Inteiro
     - Número sequencial atribuído ao arquivo

   * - 1.2
     - url
     - Texto
     - URL para download do arquivo

   * - 1.3
     - tipoDocumentoId
     - Inteiro
     - Código do tipo de documento conforme PNCP

   * - 1.4
     - tipoDocumentoNome
     - Texto
     - Nome do tipo de documento conforme PNCP

   * - 1.5
     - titulo
     - Texto
     - Título referente ao arquivo

   * - 1.6
     - dataPublicacaoPncp
     - Data
     - Data de publicação do arquivo no portal PNCP

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

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

Baixar Documento de uma Contratação 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite baixar um documento específico pertencente a uma contratação.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/arquivos/{sequencialDocumento} 
     - GET


Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/arquivos/1" -H 
	"Accept: */*”

Dados de Entrada
^^^^^^^^^^^^^^^^

.. note::

   Alimentar os parâmetros ``cnpj``, ``ano``, ``sequencial`` e ``sequencialDocumento`` na URL.

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
     - sequencialDocumento
     - Inteiro
     - Sim
     - Sequencial do documento no PNCP

Dados de Retorno
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - 1
     - string
     - String
     - String do arquivo

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

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

Inserir Itens a uma Contratação 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço para inserir um ou vários itens a uma contratação. Os itens podem ser inseridos de duas formas: ao inserir uma contratação, pode já informar a lista de itens a ser inserida. Alternativamente pode usar o presente serviço para adicionar um ou vários itens a uma contratação existente. 

.. warning::
	Fica impedida a inclusão de itens caso a contratação não possua documento/arquivo ativo vinculado a ela no PNCP.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/itens 
     - POST
	 

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

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
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X POST --header "Authorization: Bearer access_token" "${BASE_URL}/v1/orgaos
	/10000000000003/compras/2021/1/itens" -H "accept: */*" -H "Content-Type: application/json" -
	data "@/home/objeto.json" 


Dados de Entrada
^^^^^^^^^^^^^^^^

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
^^^^^^^^^^^^^^^^

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
	["https://treina.pncp.gov.br/api/pncp/v1/orgaos/10000000000003/compras/2021/1/itens/1"]

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

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

Retificar Item de uma Contratação 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço para retificar um item de uma contratação. Ou utilizado para alterar a situação do item conforme tabela de domínio de situação do item da contratação. **Importante lembrar que na Retificação todas as informações terão que ser enviadas novamente, não apenas as que sofreram alteração.**

.. warning::

	Fica impedida a retificação do item caso a contratação não possua documento/arquivo ativo vinculado a ela no PNCP.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/itens/{numeroItem} 
     - PUT
	 

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
  :linenos:

	{
		"numeroItem": 2,
		"materialOuServico": "M",
		"tipoBeneficioId": "4",
		"incentivoProdutivoBasico": false,
		"descricao": "Item exemplificativo 2",
		"quantidade": 100,
		"unidadeMedida": "Unidade",
		"orcamentoSigiloso": false,
		"valorUnitarioEstimado": 10.0,
		"valorTotal": 1000.0,
		"situacaocompraitemid": "1",
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
		"catalogoId": 1,
		"categoriaItemCatalogoId": 1,
		"catalogoCodigoItem": "618302",
		"informacaoComplementar": "Café; Apresentação: Torrado Moído",
		"justificativa": "motivo/justificativa para a retificação dos atributos do item da contratação"
	}  
  

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X PUT --header "Authorization: Bearer access_token" "${BASE_URL}/v1/orgaos
	/10000000000003/compras/2021/1/itens/1" -H "accept: */*" -H "Content-Type: application/json" --data "@/home/objeto.json" 

Dados de Entrada
^^^^^^^^^^^^^^^^

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
     - situacaoCompraItemId
     - Inteiro
     - Sim
     - Código da situação do item da contratação

   * - 14
     - criterioJulgamentoId
     - Inteiro
     - Sim
     - Código do critério de julgamento

   * - 15
     - justificativa
     - Texto (255)
     - Sim
     - Justificativa para retificação do item

   * - 16
     - orcamentoSigiloso
     - Booleano
     - Sim
     - Indica se o orçamento é sigiloso

   * - 17
     - itemCategoriaId
     - Inteiro
     - Sim
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
     - Sim
     - Indica margem de preferência normal

   * - 21
     - aplicabilidadeMargemPreferenciaAdicional
     - Booleano
     - Sim
     - Indica margem de preferência adicional

   * - 22
     - percentualMargemPreferenciaNormal
     - Decimal
     - Condicional
     - Obrigatório se margem normal = true

   * - 23
     - percentualMargemPreferenciaAdicional
     - Decimal
     - Condicional
     - Obrigatório se margem adicional = true

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
^^^^^^^^^^^^^^^^^^

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


Retificar parcialmente um Item de uma Contratação
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço para retificar parcialmente um item de uma contratação. Pode ser utilizado para alterar a situação do item conforme tabela de domínio de situação do item da contratação. Na retificação parcial, deverão ser enviadas apenas as informações que sofrerão alteração. Por exemplo, se desejar apenas atualizar a situação de um item, você deve informar apenas o atributo situacaoCompraItemId e ignorar todos os demais atributos. 

.. warning::

	Fica impedida a retificação do item caso a contratação não possua documento/arquivo ativo vinculado a ela no PNCP.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/itens/{numeroItem} 
     - PATCH
	 

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

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
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X PATCH --header "Authorization: Bearer access_token" "${BASE_URL}/v1/orgaos
	/10000000000003/compras/2021/1/itens/1" -H "accept: */*" -H "Content-Type: application/json" --data "@/home/objeto.json" 

Dados de Entrada
^^^^^^^^^^^^^^^^

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
^^^^^^^^^^^^^^^^^^

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

Consultar Itens de uma Contratação
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço para recuperar os itens de uma contratação.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/itens 
     - GET
	 

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/itens" -H "accept: */*" '

Dados de Entrada
^^^^^^^^^^^^^^^^

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
^^^^^^^^^^^^^^^^

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
^^^^^^^^^^^^^^^^^^

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

Consultar Item de uma Contratação
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço para consultar um item específico de uma contratação.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/itens/{numeroItem}
     - GET
	 

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/itens/1" -H "accept: */*"

Dados de Entrada
^^^^^^^^^^^^^^^^

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
^^^^^^^^^^^^^^^^

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
^^^^^^^^^^^^^^^^^^

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


Inserir Resultado do Item de uma Contratação 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço para inserir o resultado do item de uma contratação. O resultado possui as informações do fornecedor/arrematador vencedor e valores dos itens. 
 
.. warning::

	Fica impedida a inclusão do resultado, caso a contratação não possua documento/arquivo ativo vinculado a ela no PNCP. 
	Ao receber requisição para inclusão de resultado do item da Contratação, o PNCP verifica se entre os resultados, com situação "Informado", existe algum outro registro com valor idêntico à combinação dos parâmetros recebidos: "tipoPessoaId", "niFornecedor" e "ordemClassificacaoSrp". Se houver qualquer registro, a requisição para inclusão do resultado do item da Contratação será recusada. Neste caso, o requisitante será alertado. 

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/itens/{numeroItem}/resultados 
     - POST
	 

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
  :linenos:

	{
		"quantidadeHomologada": 1,
		"valorUnitarioHomologado": 100.0,
		"valorTotalHomologado": 100.0,
		"percentualDesconto": 0,
		"tipoPessoaId": "PJ",
		"niFornecedor": "10000000000010",
		"nomeRazaoSocialFornecedor": "Nome ou razão social do fornecedor/arrematante",
		"porteFornecedorId": 3,
		"naturezaJuridicaId": "2062",
		"codigoPais": "BRA",
		"indicadorSubcontratacao": false,
		"ordemClassificacaoSrp": 1,
		"dataResultado": "2021-07-26",
		"aplicacaoMargemPreferencia": true,
		"amparoLegalMargemPreferenciaId": 143,
		"paisOrigemProdutoServicoId": "BRA",
		"aplicacaoBeneficioMeEpp": true,
		"aplicacaoCriterioDesempate": true,
		"amparoLegalCriterioDesempateId": 146,
		"simboloMoedaEstrangeira": "USD",
		"dataCotacaoMoedaEstrangeira": "2024-07-10T21:17:02",
		"timezoneCotacaoMoedaEstrangeira": "UTC-0400",
		"valorNominalMoedaEstrangeira": 0.24
	}  
  

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X POST --header "Authorization: Bearer access_token" 
	"${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/itens/1/resultados" -H "accept: */*" -H "Content-Type: application/json" --data "@/home/objeto.json" 

Dados de Entrada
^^^^^^^^^^^^^^^^

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
     - quantidadeHomologada
     - Decimal
     - Sim
     - Quantidade homologada (4 casas decimais)

   * - 6
     - valorUnitarioHomologado
     - Decimal
     - Sim
     - Valor unitário homologado (≥ 0)

   * - 7
     - valorTotalHomologado
     - Decimal
     - Sim
     - Valor total homologado (≥ 0)

   * - 8
     - percentualDesconto
     - Decimal
     - Não
     - Percentual de desconto (quando aplicável)

   * - 9
     - tipoPessoaId
     - Texto (2)
     - Sim
     - PJ, PF ou PE

   * - 10
     - niFornecedor
     - Texto (30)
     - Sim
     - Identificação do fornecedor (CNPJ/CPF/estrangeiro)

   * - 11
     - nomeRazaoSocialFornecedor
     - Texto (100)
     - Sim
     - Nome ou razão social

   * - 12
     - porteFornecedorId
     - Inteiro
     - Sim
     - 1-ME; 2-EPP; 3-Demais; 4-N/A; 5-Não informado

   * - 13
     - naturezaJuridicaId
     - Inteiro
     - Não
     - Código da natureza jurídica

   * - 14
     - codigoPais
     - Texto (3)
     - Sim
     - Código ISO Alpha-3 (ex: BRA)

   * - 15
     - indicadorSubcontratacao
     - Booleano
     - Sim
     - Indica subcontratação

   * - 16
     - ordemClassificacaoSrp
     - Inteiro
     - Não
     - Ordem de classificação no SRP

   * - 17
     - dataResultado
     - Data
     - Sim
     - Data da homologação

   * - 18
     - aplicacaoMargemPreferencia
     - Booleano
     - Sim
     - Indica aplicação de margem de preferência

   * - 19
     - amparoLegalMargemPreferenciaId
     - Inteiro
     - Condicional
     - Obrigatório se houver margem de preferência

   * - 20
     - paisOrigemProdutoId
     - Texto (3)
     - Condicional
     - Código ISO do país de origem

   * - 21
     - aplicacaoBeneficioMeEpp
     - Booleano
     - Sim
     - Indica benefício ME/EPP

   * - 22
     - aplicacaoCriterioDesempate
     - Booleano
     - Sim
     - Indica aplicação de desempate

   * - 23
     - amparoLegalCriterioDesempateId
     - Inteiro
     - Condicional
     - Obrigatório se houver desempate

   * - 24
     - simboloMoedaEstrangeira
     - Texto (3)
     - Não
     - Código ISO da moeda (ex: USD)

   * - 25
     - dataCotacaoMoedaEstrangeira
     - Data
     - Não
     - Data da cotação da moeda

   * - 26
     - timezoneCotacaoMoedaEstrangeira
     - Texto (8)
     - Não
     - Offset UTC (ex: UTC-0300)

   * - 27
     - valorNominalMoedaEstrangeira
     - Decimal
     - Não
     - Valor da moeda estrangeira em BRL

Dados de Retorno
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 10 30 20 40
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - 1
     - location
     - Texto (255)
     - Endereço HTTP do recurso criado

Exemplo de Retorno
^^^^^^^^^^^^^^^^^^

.. code-block:: bash

 
Retorno: 
access-control-allow-credentials: true 
access-control-allow-headers: Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin, 
access-control-allow-methods: GET,PUT,POST,DELETE,OPTIONS 
access-control-allow-origin: * 
cache-control: no-cache,no-store,max-age=0,must-revalidate 
content-length: 0 
date: ? 
expires: ? 
location: https://treina.pncp.gov.br/api/pncp/v1/orgaos/10000000000003/compras/2021/1/itens/1/resultados/1 
pragma: no-cache 
strict-transport-security: max-age=? 
x-content-type-options: nosniff 
x-firefox-spdy: ? 
x-frame-options: DENY 
x-xss-protection: ?; mode=block

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

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

Retificar Resultado do Item de uma Contratação 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço para retificar um resultado do item de uma contratação, ou para alterar a situação de um resultado do item conforme tabela de domínio de situação do Resultado do item de uma contratação. **Importante lembrar que na Retificação todas as informações terão que ser enviadas novamente, não apenas as que sofreram alteração.**

.. warning::

	Fica impedida a retificação do resultado, caso a contratação não possua documento/arquivo ativo vinculado a ela no PNCP. 
	Ao receber requisição para inclusão de resultado do item da Contratação, o PNCP verifica se entre os resultados, com situação "Informado", existe algum outro registro com valor idêntico à combinação dos parâmetros recebidos: "tipoPessoaId", "niFornecedor" e "ordemClassificacaoSrp". Se houver qualquer registro, a requisição para inclusão do resultado do item da Contratação será recusada. Neste caso, o requisitante será alertado.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/itens/{numeroItem}/resultados/{sequencialResultado} 
     - PUT
	 

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
  :linenos:

	{
		"quantidadeHomologada": 1,
		"valorUnitarioHomologado": 100.0,
		"valorTotalHomologado": 100.0,
		"percentualDesconto": 0,
		"tipoPessoaId": "PJ",
		"niFornecedor": "10000000000010",
		"nomeRazaoSocialFornecedor": " Fornecedor/arrematante para exemplo",
		"porteFornecedorId": 3,
		"naturezaJuridicaId": "2062",
		"codigoPais": "BRA",
		"indicadorSubcontratacao": false,
		"ordemClassificacaoSrp": 1,
		"dataResultado": "2021-07-26",
		"dataCancelamento": "",
		"motivoCancelamento": "",
		"situacaoCompraItemResultadoId": 1,
		"aplicacaoMargemPreferencia": true,
		"amparoLegalMargemPreferenciaId": 143,
		"paisOrigemProdutoServicoId": "BRA",
		"aplicacaoBeneficioMeEpp": true,
		"aplicacaoCriterioDesempate": true,
		"amparoLegalCriterioDesempateId": 146,
		"simboloMoedaEstrangeira": "USD",
		"dataCotacaoMoedaEstrangeira": "2024-07-10T21:17:02",
		"timezoneCotacaoMoedaEstrangeira": "UTC-0400",
		"valorNominalMoedaEstrangeira": 0.24,
		"justificativa": "motivo/justificativa para a retificação dos atributos do resultado do item da contratação"
	}
    

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X PUT --header "Authorization: Bearer access_token" "${BASE_URL}/v1/orgaos
	/10000000000003/compras/2021/1/itens/1/resultados" -H "accept: */*" -H "Content-Type: 
	application/json" --data "@/home/objeto.json" 


Dados de Entrada
^^^^^^^^^^^^^^^^

.. note::
   Alimentar os parâmetros {cnpj}, {ano}, {sequencial}, {numeroItem} e {sequencialResultado} na URL.

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
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação ou alienação de bens).

   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano da contratação.

   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP, gerado no momento da inclusão.

   * - 4
     - numeroItem
     - Inteiro
     - Sim
     - Número do item na contratação (único e sequencial crescente).

   * - 5
     - sequencialResultado
     - Inteiro
     - Sim
     - Sequencial do resultado do item no PNCP, gerado no momento da inclusão do resultado.

   * - 6
     - quantidadeHomologada
     - Decimal
     - Sim
     - Quantidade do item homologada.

   * - 7
     - valorUnitarioHomologado
     - Decimal
     - Sim
     - Valor unitário do item homologado. Maior ou igual a 0 (zero). Precisão de 4 casas decimais (ex: 100.0000).

   * - 8
     - valorTotalHomologado
     - Decimal
     - Sim
     - Valor total do item homologado. Maior ou igual a 0 (zero). Precisão de 4 casas decimais (ex: 1000.0000).

   * - 9
     - percentualDesconto
     - Decimal
     - Não
     - Percentual de desconto quando o critério for maior desconto. Precisão de 4 casas decimais (ex: 10.0000).

   * - 10
     - tipoPessoaId
     - Texto (2)
     - Sim
     - Tipo de pessoa: PJ (jurídica), PF (física), PE (estrangeira).

   * - 11
     - niFornecedor
     - Texto (30)
     - Sim
     - Identificação do fornecedor (CNPJ, CPF ou identificador estrangeiro).

   * - 12
     - nomeRazaoSocialFornecedor
     - Texto (100)
     - Sim
     - Nome ou razão social do fornecedor.

   * - 13
     - porteFornecedorId
     - Inteiro
     - Sim
     - Porte: 1-ME; 2-EPP; 3-Demais; 4-Não se aplica; 5-Não informado.

   * - 14
     - naturezaJuridicaId
     - Inteiro
     - Não
     - Código da natureza jurídica conforme tabela de domínio.

   * - 15
     - codigoPais
     - Texto (3)
     - Sim
     - Código ISO Alpha-3 do país (ex: BRA).

   * - 16
     - indicadorSubcontratacao
     - Booleano
     - Sim
     - Indica subcontratação (false: não; true: sim). Para leilão, informar false.

   * - 17
     - ordemClassificacaoSrp
     - Inteiro
     - Não
     - Ordem de classificação do fornecedor.

   * - 18
     - dataResultado
     - Data
     - Sim
     - Data de homologação do resultado do item.

   * - 19
     - dataCancelamento
     - Data e Hora
     - Não
     - Data de cancelamento do resultado.

   * - 20
     - motivoCancelamento
     - Texto (200)
     - Não
     - Motivo do cancelamento do resultado.

   * - 21
     - situacaoCompraItemResultadoId
     - Inteiro
     - Sim
     - Código da situação do resultado do item.

   * - 22
     - aplicacaoMargemPreferencia
     - Booleano
     - Sim
     - Indica aplicação de margem de preferência.

   * - 23
     - amparoLegalMargemPreferenciaId
     - Inteiro
     - Condicional
     - Obrigatório quando houver aplicação de margem de preferência.

   * - 24
     - paisOrigemProdutoId
     - Texto (3)
     - Condicional
     - Código ISO Alpha-3 do país de origem do produto.

   * - 25
     - aplicacaoBeneficioMeEpp
     - Booleano
     - Sim
     - Indica aplicação de benefício ME/EPP.

   * - 26
     - aplicacaoCriterioDesempate
     - Booleano
     - Sim
     - Indica aplicação de critério de desempate (Art. 60).

   * - 27
     - amparoLegalCriterioDesempateId
     - Inteiro
     - Condicional
     - Obrigatório quando houver critério de desempate.

   * - 28
     - simboloMoedaEstrangeira
     - Texto (3)
     - Não
     - Código ISO Alpha-3 da moeda (ex: USD, EUR).

   * - 29
     - dataCotacaoMoedaEstrangeira
     - Data
     - Não
     - Data/hora da cotação (timestamp sem timezone).

   * - 30
     - timezoneCotacaoMoedaEstrangeira
     - Texto (8)
     - Não
     - Fuso horário no formato UTC±hhmm (ex: UTC-0300, UTC+0100).

   * - 31
     - valorNominalMoedaEstrangeira
     - Decimal
     - Não
     - Valor em BRL para 1 unidade da moeda estrangeira (ex: 5.450).

   * - 32
     - justificativa
     - Texto (255)
     - Sim
     - Justificativa da retificação.

** Para cancelamento do Resultado informar situação do resultado igual a 2, data e motivo do cancelamento junto com os outros dados do resultado.

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 10 25 20
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 200
     - Up Date
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

Consultar Resultados de Item de uma Contratação 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço para recuperar os resultados cadastrados para um item de uma contratação.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/itens/{numeroItem}/resultados 
     - GET
	 

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/itens/1/resultados" -H "accept: */*" 

Dados de Entrada
^^^^^^^^^^^^^^^^

.. note::
   Alimentar os parâmetros {cnpj}, {ano}, {sequencial} e {numeroItem} na URL.

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
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação ou alienação de bens).

   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano da contratação.

   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP; número gerado no momento da inclusão.

   * - 4
     - numeroItem
     - Inteiro
     - Sim
     - Número do item na contratação (único e sequencial crescente).

Dados de Retorno
^^^^^^^^^^^^^^^^

.. note::
   A resposta apresenta a lista de resultados dos itens da contratação, incluindo dados do fornecedor, valores homologados e informações complementares.

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - 1
     - listaResultados
     - Lista
     - Resultados de um item da contratação.

   * - 1.1
     - numeroItem
     - Inteiro
     - Número do item na contratação (único e sequencial crescente) a que está relacionado o resultado.

   * - 1.2
     - sequencialResultado
     - Inteiro
     - Sequencial do resultado do item da contratação no PNCP.

   * - 1.3
     - quantidadeHomologada
     - Decimal
     - Quantidade do item homologada. Precisão de até 4 casas decimais. Ex: 1.0001.

   * - 1.4
     - valorUnitarioHomologado
     - Decimal
     - Valor unitário do item homologado. Precisão de até 4 casas decimais. Ex: 100.0001.

   * - 1.5
     - percentualDesconto
     - Decimal
     - Percentual de desconto aplicado quando o critério for maior desconto. Precisão de 4 casas decimais. Ex: 10.0000.

   * - 1.6
     - tipoPessoa
     - Texto (2)
     - PJ (jurídica); PF (física); PE (estrangeira).

   * - 1.7
     - niFornecedor
     - Texto (30)
     - Identificação do fornecedor (CNPJ, CPF ou identificador estrangeiro).

   * - 1.8
     - nomeRazaoSocialFornecedor
     - Texto (100)
     - Nome ou razão social do fornecedor.

   * - 1.9
     - porteFornecedorId
     - Inteiro
     - Porte: 1-ME; 2-EPP; 3-Demais; 4-Não se aplica; 5-Não informado.

   * - 1.10
     - porteFornecedorNome
     - Texto (30)
     - Nome do porte do fornecedor.

   * - 1.11
     - naturezaJuridicaId
     - Inteiro
     - Código da natureza jurídica do fornecedor.

   * - 1.12
     - naturezaJuridicaNome
     - Texto (100)
     - Nome da natureza jurídica do fornecedor.

   * - 1.13
     - codigoPais
     - Texto (3)
     - Código ISO Alpha-3 do país do fornecedor (ex: BRA).

   * - 1.14
     - indicadorSubcontratacao
     - Booleano
     - Indica subcontratação (false: não; true: sim).

   * - 1.15
     - ordemClassificacaoSrp
     - Inteiro
     - Ordem de classificação do fornecedor na contratação.

   * - 1.16
     - dataResultado
     - Data
     - Data do resultado da homologação do item.

   * - 1.17
     - dataCancelamento
     - Data e Hora
     - Data de cancelamento do resultado do item.

   * - 1.18
     - motivoCancelamento
     - Texto (200)
     - Motivo do cancelamento do resultado.

   * - 1.19
     - situacaoCompraItemResultadoId
     - Inteiro
     - Código conforme tabela de situação do resultado do item.

   * - 1.20
     - situacaoCompraItemResultadoNome
     - Texto (30)
     - Descrição da situação do resultado do item.

   * - 1.21
     - dataInclusao
     - Data e Hora
     - Data de inclusão do registro no PNCP.

   * - 1.22
     - dataAtualizacao
     - Data e Hora
     - Data da última atualização do registro no PNCP.

   * - 1.23
     - numeroControlePNCPCompra
     - Texto (30)
     - Número de controle PNCP da contratação.

   * - 1.24
     - aplicacaoMargemPreferencia
     - Booleano
     - Indica aplicação de margem de preferência (false/não; true/sim).

   * - 1.25
     - amparoLegalMargemPreferencia
     - Objeto
     - Dados da fundamentação legal da margem de preferência.

   * - 1.25.1
     - id
     - Inteiro
     - Código da fundamentação legal.

   * - 1.25.2
     - nome
     - Texto
     - Nome da fundamentação legal.

   * - 1.25.3
     - descricao
     - Texto
     - Descrição da fundamentação legal.

   * - 1.25.4
     - statusAtivo
     - Booleano
     - Status (false: inativo; true: ativo).

   * - 1.26
     - paisOrigemProdutoServico
     - Objeto
     - Dados do país de origem do produto ou serviço.

   * - 1.26.1
     - id
     - Texto
     - Código ISO Alpha-3 do país (ex: BRA, ARG).

   * - 1.26.2
     - nome
     - Texto
     - Nome do país.

   * - 1.27
     - aplicacaoBeneficioMeEpp
     - Booleano
     - Indica aplicação de benefício ME/EPP.

   * - 1.28
     - aplicacaoCriterioDesempate
     - Booleano
     - Indica aplicação de critério de desempate (Art. 60).

   * - 1.29
     - amparoLegalCriterioDesempate
     - Objeto
     - Dados da fundamentação legal do critério de desempate.

   * - 1.29.1
     - id
     - Inteiro
     - Código da fundamentação legal.

   * - 1.29.2
     - nome
     - Texto
     - Nome da fundamentação legal.

   * - 1.29.3
     - descricao
     - Texto
     - Descrição da fundamentação legal.

   * - 1.29.4
     - statusAtivo
     - Booleano
     - Status (false: inativo; true: ativo).

   * - 1.30
     - dataCotacaoMoedaEstrangeira
     - Data
     - Data/hora da cotação (timestamp sem timezone).

   * - 1.31
     - timezoneCotacaoMoedaEstrangeira
     - Texto
     - Fuso horário no formato UTC±[hh][mm] ou UTC±[hh].

   * - 1.32
     - valorNominalMoedaEstrangeira
     - Decimal
     - Valor em BRL correspondente a 1 unidade da moeda estrangeira.

   * - 1.33
     - moedaEstrangeira
     - Objeto
     - Dados da moeda estrangeira.

   * - 1.33.1
     - id
     - Inteiro
     - Código da moeda estrangeira.

   * - 1.33.2
     - simbolo
     - Texto
     - Código ISO Alpha-3 (ex: USD, EUR, GBP).

   * - 1.33.3
     - nome
     - Texto
     - Nome da moeda estrangeira.

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

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

Consultar um Resultado específico de Item de uma Contratação
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço para consultar os dados de um resultado específico de um item da contratação. 

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/itens/{numeroItem}/resultados/{sequencialResultado} 
     - GET
	 
Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X GET 
	"${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/itens/1/resultados/1" -H "accept: */*" 

Dados de Entrada
^^^^^^^^^^^^^^^^

.. note::
   Alimentar os parâmetros {cnpj}, {ano}, {sequencial}, {numeroItem} e {sequencialResultado} na URL.

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
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação ou alienação de bens).

   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano da contratação.

   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP; número gerado no momento da inclusão.

   * - 4
     - numeroItem
     - Inteiro
     - Sim
     - Número do item na contratação (único e sequencial crescente).

   * - 5
     - sequencialResultado
     - Inteiro
     - Sim
     - Sequencial do resultado no PNCP; número gerado no momento da inclusão do resultado.

Dados de Retorno
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - 1
     - numeroItem
     - Inteiro
     - Número do item na contratação (único e sequencial crescente).

   * - 2
     - sequencialResultado
     - Inteiro
     - Sequencial do resultado do item da contratação no PNCP.

   * - 3
     - quantidadeHomologada
     - Decimal
     - Quantidade do item homologada. Precisão de até 4 casas decimais. Ex: 1.0001.

   * - 4
     - valorUnitarioHomologado
     - Decimal
     - Valor unitário do item homologado. Precisão de até 4 casas decimais. Ex: 100.0001.

   * - 5
     - percentualDesconto
     - Decimal
     - Percentual de desconto aplicado quando o critério for maior desconto. Precisão de 4 casas decimais. Ex: 10.0000.

   * - 6
     - tipoPessoa
     - Texto (2)
     - PJ (jurídica); PF (física); PE (estrangeira).

   * - 7
     - niFornecedor
     - Texto (30)
     - Identificação do fornecedor (CNPJ, CPF ou identificador estrangeiro).

   * - 8
     - nomeRazaoSocialFornecedor
     - Texto (100)
     - Nome ou razão social do fornecedor.

   * - 9
     - porteFornecedorId
     - Inteiro
     - Porte: 1-ME; 2-EPP; 3-Demais; 4-Não se aplica; 5-Não informado.

   * - 10
     - porteFornecedorNome
     - Texto (30)
     - Nome do porte do fornecedor.

   * - 11
     - naturezaJuridicaId
     - Inteiro
     - Código da natureza jurídica do fornecedor.

   * - 12
     - naturezaJuridicaNome
     - Texto (100)
     - Nome da natureza jurídica do fornecedor.

   * - 13
     - codigoPais
     - Texto (3)
     - Código ISO Alpha-3 do país do fornecedor (ex: BRA).

   * - 14
     - indicadorSubcontratacao
     - Booleano
     - Indica subcontratação (false: não; true: sim).

   * - 15
     - ordemClassificacaoSrp
     - Inteiro
     - Ordem de classificação do fornecedor na contratação.

   * - 16
     - dataResultado
     - Data
     - Data do resultado da homologação do item.

   * - 17
     - dataCancelamento
     - Data e Hora
     - Data de cancelamento do resultado do item.

   * - 18
     - motivoCancelamento
     - Texto (200)
     - Motivo do cancelamento do resultado.

   * - 19
     - situacaoCompraItemResultadoId
     - Inteiro
     - Código conforme tabela de situação do resultado do item.

   * - 20
     - situacaoCompraItemResultadoNome
     - Texto (30)
     - Descrição da situação do resultado do item.

   * - 21
     - dataInclusao
     - Data e Hora
     - Data da inclusão do registro no PNCP.

   * - 22
     - dataAtualizacao
     - Data e Hora
     - Data da última atualização do registro no PNCP.

   * - 23
     - numeroControlePNCPCompra
     - Texto (30)
     - Número de controle PNCP da contratação.

   * - 24
     - aplicacaoMargemPreferencia
     - Booleano
     - Indica aplicação de margem de preferência (false/não; true/sim).

   * - 25
     - amparoLegalMargemPreferencia
     - Objeto
     - Dados da fundamentação legal da margem de preferência.

   * - 25.1
     - id
     - Inteiro
     - Código da fundamentação legal.

   * - 25.2
     - nome
     - Texto
     - Nome da fundamentação legal.

   * - 25.3
     - descricao
     - Texto
     - Descrição da fundamentação legal.

   * - 25.4
     - statusAtivo
     - Booleano
     - Status (false: inativo; true: ativo).

   * - 26
     - paisOrigemProdutoServico
     - Objeto
     - Dados do país de origem do produto ou serviço.

   * - 26.1
     - id
     - Texto
     - Código ISO Alpha-3 do país (ex: BRA, ARG).

   * - 26.2
     - nome
     - Texto
     - Nome do país.

   * - 27
     - aplicacaoBeneficioMeEpp
     - Booleano
     - Indica aplicação de benefício ME/EPP.

   * - 28
     - aplicacaoCriterioDesempate
     - Booleano
     - Indica aplicação de critério de desempate (Art. 60).

   * - 29
     - amparoLegalCriterioDesempate
     - Objeto
     - Dados da fundamentação legal do critério de desempate.

   * - 29.1
     - id
     - Inteiro
     - Código da fundamentação legal.

   * - 29.2
     - nome
     - Texto
     - Nome da fundamentação legal.

   * - 29.3
     - descricao
     - Texto
     - Descrição da fundamentação legal.

   * - 29.4
     - statusAtivo
     - Booleano
     - Status (false: inativo; true: ativo).

   * - 30
     - dataCotacaoMoedaEstrangeira
     - Data
     - Data/hora da cotação (timestamp sem timezone).

   * - 31
     - timezoneCotacaoMoedaEstrangeira
     - Texto
     - Fuso horário no formato UTC±[hh][mm] ou UTC±[hh].

   * - 32
     - valorNominalMoedaEstrangeira
     - Decimal
     - Valor em BRL correspondente a 1 unidade da moeda estrangeira.

   * - 33
     - moedaEstrangeira
     - Objeto
     - Dados da moeda estrangeira.

   * - 33.1
     - id
     - Inteiro
     - Código da moeda estrangeira.

   * - 33.2
     - simbolo
     - Texto
     - Código ISO Alpha-3 (ex: USD, EUR, GBP).

   * - 33.3
     - nome
     - Texto
     - Nome da moeda estrangeira.


Códigos de Retorno
^^^^^^^^^^^^^^^^^^

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

Consultar Histórico da Contratação
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite consultar todos os eventos de uma contratação específica, dos Itens, dos Resultados e de seus documentos/arquivos.


