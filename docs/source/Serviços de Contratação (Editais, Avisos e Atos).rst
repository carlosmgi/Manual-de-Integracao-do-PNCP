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
  :emphasize-lines: 5,6

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
  :emphasize-lines: 5,6

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
  :emphasize-lines: 5,6

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
  :emphasize-lines: 5,6

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
  :emphasize-lines: 5,6

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
     - Delete
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

 Consultar Todos Documentos de uma Contratação 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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



