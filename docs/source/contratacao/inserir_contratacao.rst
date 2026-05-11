Inserir Contratação
===================

Serviço que permite inserir uma contratação pública (módulo contratação/edital/aviso) no PNCP. O sistema exige o upload de um arquivo anexo à contratação enviada. O serviço requer que seja enviado pelo menos um item e o limite máximo de recebimento é de 2000 itens por requisição. 
As extensões permitidas para o arquivo anexo são listadas na seção: Tabelas de domínio - Extensões de arquivo aceitos pelas APIs de Documento. 

.. Atention::

    Deve-se observar as regras de conformidade implementadas entre Instrumento Convocatório, Modalidade e Amparo Legal e Instrumento Convocatório e Modo de Disputa     descritas na seção 5 deste Manual. O PNCP não receberá novas contratações ou permitirá a retificação se os campos informados não estiverem em conformidade.

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
    	"fontesOrcamentarias": [1,2],
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
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

       Enviando como arquivo: 
    curl -k -X POST --header "Authorization: Beareraccess_token" "${BASE_URL}/v1/orgaos/10000000000003/compras" -H "accept: */*" -H "Content-Type: multipart/form-data" -H 'Titulo Documento: nome_do_arquivo' -H 'Tipo-Documento-Id: 1' --form ‘compra=@”/home/objeto.json";type=application/json ’ --form ‘documento=@”arquivo.pdf” ’ 
     
    Enviando como JSON: 
    curl -k -X POST --header "Authorization: Beareraccess_token" "${BASE_URL}/v1/orgaos/10000000000003/compras" -H "accept: */*" -H "Content-Type: multipart/form-data" -H 'Titulo Documento: nome_do_arquivo' -H 'Tipo-Documento-Id: 1' --form ‘compra=@” { \"anoCompra\": 2021, \"itensCompra\": [ { \"numeroItem\": 1, \"materialOuServico\": \"M\",  \"tipoBeneficioId\": \"1\", \"incentivoProdutivoBasico\": false,  \"descricao\": \"string\", \"quantidade\": 1, \"unidadeMedida\": \"string\", \"orcamentoSigiloso\": false, \"valorUnitarioEstimado\": 1, \"valorTotal\": 1,     \"criterioJulgamentoId\": \"1\", \"itemCategoriaId\": \"1\", \"patrimonio\": \"string\",     \"codigoRegistroImobiliario\": \"string\", \"aplicabilidadeMargemPreferenciaNormal\": true,     \"aplicabilidadeMargemPreferenciaAdicional\": true, \"percentualMargemPreferenciaNormal\": 10.0000 , \"percentualMargemPreferenciaAdicional\": 10.0000, \"catalogoId\": 1, \"categoriaItemCatalogoId\": 1, \"catalogoCodigoItem\": \"string\", \"informacaoComplementar\":     \"string\"  } ], \"tipoInstrumentoConvocatorioId\": \"1\", \"modalidadeId\": \"6\", \"modoDisputaId\": \"1\", \"numeroCompra\": \"1\", \"numeroProcesso\": \"1\", \"objetoCompra\": \"string\", \"informacaoComplementar\": \"string\", \"amparoLegalId\": 1, \"srp\": true, \"dataAberturaProposta\": \"2022-01-18T14:30:01\", \"dataEncerramentoProposta\": \"2022-01 31T14:30:01\", \"codigoUnidadeCompradora\": \"1\", \"linkSistemaOrigem\": \"string\", \"linkProcessoEletronico\": \"string\", \"justificativaPresencial\": \"string\" }";type=application/json ’ -form ‘documento=@”arquivo.pdf” ’ 


Exemplo Requisição (Java, usando Spring/RestTemplate) 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``cnpj``, ``Titulo-Documento`` e ``Tipo-Documento-Id`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 10 5 5 45
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
     - Cnpj do órgão originário da contratação (proprietário da contratação ou alienação de bens)
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
     - Código da unidade; A unidade deverá estar cadastrada para o órgão originário da contratação (proprietário da contratação ou alienação de bens)
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
     - Número da contratação no sistema de origem sem o ano. Esse número é gerado pelo usuário no seu sistema de origem (ex. Pregão 14)

   * - 9
     - anoCompra
     - Inteiro
     - Sim
     - Ano da contratação. Esse é o ano relacionado ao número da contratação. (Ex: 2021)

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
     - Informações complementares; Se existir;

   * - 13
     - srp
     - Booleano
     - Sim
     - Identifica se a compra trata-se de um SRP (Sistema de registro de preços). Contratações na modalidade leilão informar false.

   * - 14
     - dataAberturaProposta
     - Data/Hora
     - Obrigatório para Tipo de Instrumento Convocatório 1 ou 2. Tipo 3 será desprezado.
     - Informar a data e hora de início do recebimento das propostas (pelo horário de Brasília)

   * - 15
     - dataEncerramentoProposta
     - Data/Hora
     - Obrigatório para Tipo de Instrumento Convocatório 1 ou 2. Tipo 3 será desprezado.
     - Informar a data e hora de encerramento do recebimento das propostas (pelo horário de Brasília)

   * - 16
     - amparoLegalId
     - Inteiro
     - Sim
     - Código da tabela de domínio Amparo Legal

   * - 17
     - itensCompra
     - Lista
     - Sim
     - Lista de itens da contratação

   * - 17.1
     - numeroItem
     - Inteiro
     - Sim
     - Número do item na contratação (único e sequencial crescente)

   * - 17.2
     - materialOuServico
     - Texto (1)
     - Sim
     - Domínio: M - Material; S - Serviço; Contratações na modalidade leilão informar M.

   * - 17.3
     - tipoBeneficioId
     - Inteiro
     - Sim
     - Código da tabela de domínio Tipo de benefício. Contratações na modalidade leilão informar opção “Não se aplica”.

   * - 17.4
     - incentivoProdutivoBasico
     - Booleano
     - Sim
     - Incentivo fiscal PPB (Processo Produtivo Básico); true - Possui o incentivo; false - Não possui o incentivo; Contratações na modalidade leilão informar false.

   * - 17.5
     - descricao
     - Texto (2048)
     - Sim
     - Descrição para o produto ou serviço;

   * - 17.6
     - quantidade
     - Decimal
     - Sim
     - Quantidade do item da contratação. Precisão de 4 dígitos decimais; Ex: 100.0000;

   * - 17.7
     - unidadeMedida
     - Texto (30)
     - Sim
     - Unidade de medida do item da contratação

   * - 17.8
     - valorUnitarioEstimado
     - Decimal
     - Sim
     - Valor unitário estimado para o item da contratação. Maior ou igual a 0 (zero). Precisão de 4 dígitos decimais; Ex: 100.0000;

   * - 17.9
     - valorTotal
     - Decimal
     - Sim
     - Valor total para contratação tradicional. Maior ou igual a 0 (zero). Precisão de 4 dígitos decimais; Ex: 100.0000;

   * - 17.10
     - criterioJulgamentoId
     - Inteiro
     - Sim
     - Código da tabela de domínio Critério de julgamento

   * - 17.11
     - orcamentoSigiloso
     - Booleano
     - Sim
     - Identifica se o orçamento do item é sigiloso; true - Sigiloso; false - Não sigiloso; Contratações na modalidade leilão informar false.

   * - 17.12
     - itemCategoriaId
     - Inteiro
     - Não
     - Categoria do item. Domínios 1 ou 2 aplicados à modalidade leilão. Outras modalidades de contratação utilizar o domínio 3.Domínio: 1 – Bens Imóveis; 2 – Bens Móveis; 3 - Não se aplica

   * - 17.13
     - patrimonio
     - Texto (255)
     - Condicional
     - Código de Patrimonio do Item de bens móveis quando existir.

   * - 17.14
     - codigoRegistroImobiliario
     - Texto (255)
     - Obrigatório para contratação na modalidade leilão cuja categoria do item seja bens imóveis.
     - Código de Registro Imobiliário.

   * - 17.15
     - aplicabilidadeMargemPreferenciaNormal
     - Booleano
     - Sim
     - Indicador da aplicabilidade de Margem de Preferência Normal para o item. (False/Não; True/Sim)

   * - 17.16
     - aplicabilidadeMargemPreferenciaAdicional
     - Booleano
     - Sim
     - Indicador da aplicabilidade de Margem de Preferência Adicional para o item. (False/Não; True/Sim)

   * - 17.17
     - percentualMargemPreferenciaNormal
     - Decimal
     - Obrigatório quando indicador de aplicabilidade de Margem de Preferência Normal for “True/Sim”.
     - Percentual de Margem de Preferência Normal. Maior ou igual a 0 (zero) e menor que 100. Ex: 10.0000; Se indicador de aplicabilidade de Margem de Preferência Normal for “false/Não” enviar NULO.

   * - 17.18
     - percentualMargemPreferenciaAdicional
     - Decimal
     - Obrigatório quando indicador de aplicabilidade de Margem de Preferência Adicional for “True/Sim”.
     - Percentual de Margem de Preferência Adicional. Maior ou igual a 0 (zero) e menor que 100. Ex: 10.0000; Se indicador de aplicabilidade de Margem de Preferência Adicional for “false/Não” enviar NULO.

   * - 17.19
     - ncmNbsCodigo
     - Texto (15)
     - Não
     - Código NCM do material ou Código NBS do serviço com ou sem a formatação da máscara.

   * - 17.20
     - ncmNbsDescricao
     - Texto (2048)
     - Não
     - Descrição respectiva ao NCM para material ou NBS para serviço.

   * - 17.21
     - categoriaItemCatalogoId
     - Inteiro
     - Não
     - Código da categoria do item. Consultar item 5.17 Categoria de Item para mais informações

   * - 17.22
     - catalogoId
     - Inteiro
     - Não
     - Código do Catálogo de itens utilizado como referência. Consultar item 5.23 Catálogos para mais informações

   * - 17.23
     - catalogoCodigoItem
     - Texto (20)
     - Não
     - Código do item conforme consta no Catálogo utilizado como referência.

   * - 17.24
     - informacaoComplementar
     - Texto (4096)
     - Não
     - Descrição complementar para o produto ou serviço

   * - 17.25
     - codigoTipoMargemPreferencia
     - Inteiro
     - Não
     - Código do tipo de margem de preferência. Domínio: 1 – Resolução CIIA-PAC; 2 – Resolução CICS;

   * - 17.26
     - inConteudoNacional
     - Booleano
     - Não
     - Indicador de Exigência de Conteúdo Nacional (False/Não; True/Sim)

   * - 18
     - linkSistemaOrigem
     - Texto (512)
     - Não
     - URL para página/portal do sistema de origem da contratação para recebimento de proposta/lance. Esta url será exibida no Portal PNCP no detalhamento da Contratação.

   * - 19
     - justificativaPresencial
     - Texto (5120)
     - Obrigatório para as modalidades de contratação presencial
     - Justificativa pela escolha da modalidade presencial.

   * - 20
     - linkProcessoEletronico
     - Texto (512)
     - Não
     - URL para página do sistema de controle de processos eletrônicos com os dados do processo desta contratação. Esta url será exibida no Portal PNCP

   * - 21
     - fontesOrcamentarias
     - Lista (Inteiro)
     - Não
     - Lista de fontes orçamentárias da contratação. Código da fonte orçamentária. Consultar itens 5.25. Fonte Orçamentária e 5.26. Regra de conformidade entre Modalidade de Contratação e Fonte Orçamentária para mais informações


Dados de Retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
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
~~~~~~~~~~~~~~~~~~

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
