Consultar Intenção de Registro de Preço
=======================================

Serviço que permite recuperar os dados de uma Intenção de Registro de Preço (IRP).

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/irp/{ano}/{sequencial}
     - GET
	 
Exemplo de Payload
------------------

.. code-block:: json
  :linenos:
  :emphasize-lines: 1

	Não se aplica

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1-3

	curl -k -X GET \
	  "${BASE_URL}/v1/orgaos/10000000000003/irp/2021/1" \
	  -H "accept: */*"

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``cnpj``, ``ano`` e ``sequencial`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1
   :class: quebra-linha-dois-quatro

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - :destaque-verde-claro:`1`
     - :destaque-verde-claro:`cnpj`
     - :destaque-verde-claro:`Texto (14)`
     - :destaque-verde-claro:`Cnpj do órgão originário da IRP informado na inclusão (proprietário da IRP)`
   * - :destaque-verde-claro:`2`
     - :destaque-verde-claro:`ano`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Ano da IRP`
   * - :destaque-verde-claro:`3`
     - :destaque-verde-claro:`sequencial`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Sequencial da IRP no PNCP; Número sequencial gerado no momento que a IRP foi inserida no PNCP`


Dados de Retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1
   :class: quebra-linha-dois-quatro

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - :destaque-verde-claro:`1`
     - :destaque-verde-claro:`numeroControlePNCP`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Número de Controle PNCP da IRP (id IRP PNCP)`
   * - :destaque-verde-claro:`2`
     - :destaque-verde-claro:`numeroItem`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Sequencial da IRP`
   * - :destaque-verde-claro:`3`
     - :destaque-verde-claro:`numeroIrp`
     - :destaque-verde-claro:`Texto (50)`
     - :destaque-verde-claro:`Número da IRP no sistema de origem`     
   * - :destaque-verde-claro:`4`
     - :destaque-verde-claro:`anoIrp`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Ano da IRP. Esse é o ano relacionado à IRP. (Ex: 2021)`
   * - :destaque-verde-claro:`5`
     - :destaque-verde-claro:`numeroProcesso`
     - :destaque-verde-claro:`Texto (50)`
     - :destaque-verde-claro:`Número do processo no sistema de origem`
   * - :destaque-verde-claro:`6`
     - :destaque-verde-claro:`situacaoIrpId`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Código da situação da IRP (1 = Divulgada no PNCP; 2 = Cancelada; 3 = Suspensa; 4 = Anulada)`
   * - :destaque-verde-claro:`7`
     - :destaque-verde-claro:`situacaoIrpNome`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Nome da Identificação da Situações da Intenção de Registro de Preço  (1 = Divulgada no PNCP; 2 = Cancelada; 3 = Suspensa; 4 = Anulada)`
   * - :destaque-verde-claro:`8`
     - :destaque-verde-claro:`orgaoEntidade`
     - :destaque-verde-claro:`Objeto`
     - 
   * - :destaque-verde-claro:`8.1`
     - :destaque-verde-claro:`cnpj`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`CNPJ do órgão`
   * - :destaque-verde-claro:`8.2`
     - :destaque-verde-claro:`razaoSocial`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Razão social do órgão`
   * - :destaque-verde-claro:`8.3`
     - :destaque-verde-claro:`esferaId`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Código da esfera a que pertence o Órgão. F - Federal; E - Estadual; M - Municipal; D - Distrital`
   * - :destaque-verde-claro:`8.4`
     - :destaque-verde-claro:`poderId`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Código do poder a que pertence o Órgão. L - Legislativo; E - Executivo; J - Judiciário`     
   * - :destaque-verde-claro:`9`
     - :destaque-verde-claro:`unidadeOrgao`
     - :destaque-verde-claro:`Objeto`
     - 
   * - :destaque-verde-claro:`9.1`
     - :destaque-verde-claro:`codigoUnidade`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Código da Unidade Administrativa pertencente ao Órgão`
   * - :destaque-verde-claro:`9.2`
     - :destaque-verde-claro:`nomeUnidade`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Nome da unidade`     
   * - :destaque-verde-claro:`9.3`
     - :destaque-verde-claro:`municipioNome`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Nome do município`  
   * - :destaque-verde-claro:`9.4`
     - :destaque-verde-claro:`codigoIbge`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Código IBGE do município`       
   * - :destaque-verde-claro:`9.5`
     - :destaque-verde-claro:`ufSigla`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Sigla da unidade federativa`            
   * - :destaque-verde-claro:`9.6`
     - :destaque-verde-claro:`ufNome`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Nome da unidade federativa`      
   * - :destaque-verde-claro:`10`
     - :destaque-verde-claro:`orgaoSubRogado`
     - :destaque-verde-claro:`Objeto`
     - 
   * - :destaque-verde-claro:`10.1`
     - :destaque-verde-claro:`cnpj`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`CNPJ do órgão SubRogado`
   * - :destaque-verde-claro:`10.2`
     - :destaque-verde-claro:`razaoSocial`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Razão social do órgão SubRogado`
   * - :destaque-verde-claro:`10.3`
     - :destaque-verde-claro:`esferaId`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Código da esfera a que pertence o Órgão SubRogado. F - Federal; E - Estadual; M - Municipal; D - Distrital`
   * - :destaque-verde-claro:`10.4`
     - :destaque-verde-claro:`poderId`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Código do poder a que pertence o Órgão SubRogado. L - Legislativo; E - Executivo; J - Judiciário` 
   * - :destaque-verde-claro:`11`
     - :destaque-verde-claro:`unidadeSubRogada`
     - :destaque-verde-claro:`Objeto`
     - 
   * - :destaque-verde-claro:`11.1`
     - :destaque-verde-claro:`codigoUnidade`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Código da Unidade Administrativa SubRogada pertencente ao Órgão`
   * - :destaque-verde-claro:`11.2`
     - :destaque-verde-claro:`nomeUnidade`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Nome da unidade SubRogada`     
   * - :destaque-verde-claro:`11.3`
     - :destaque-verde-claro:`municipioNome`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Nome do município`  
   * - :destaque-verde-claro:`11.4`
     - :destaque-verde-claro:`codigoIbge`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Código IBGE do município`       
   * - :destaque-verde-claro:`11.5`
     - :destaque-verde-claro:`ufSigla`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Sigla da unidade federativa`            
   * - :destaque-verde-claro:`11.6`
     - :destaque-verde-claro:`ufNome`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Nome da unidade federativa`  
   * - :destaque-verde-claro:`12`
     - :destaque-verde-claro:`tipoInstrumentoConvocatorioCodigo`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Código do instrumento convocatório da Contratação`  
   * - :destaque-verde-claro:`13`
     - :destaque-verde-claro:`tipoInstrumentoConvocatorioNome`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Nome do instrumento convocatório da Contratação`      
   * - :destaque-verde-claro:`14`
     - :destaque-verde-claro:`amparoLegalId`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Código do Amparo Legal na tabela de domínio`
   * - :destaque-verde-claro:`15`
     - :destaque-verde-claro:`amparoLegalNome`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Nome do Amparo Legal na tabela de domínio`
   * - :destaque-verde-claro:`16`
     - :destaque-verde-claro:`modalidadeId`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Código da Modalidade na tabela de domínio`
   * - :destaque-verde-claro:`17`
     - :destaque-verde-claro:`modalidadeNome`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Nome da Modalidade na tabela de domínio`
   * - :destaque-verde-claro:`18`
     - :destaque-verde-claro:`modoDisputaId`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Código do Modo de disputa na tabela de domínio`
   * - :destaque-verde-claro:`19`
     - :destaque-verde-claro:`modoDisputaNome`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Nome do Modo de disputa na tabela de domínio`
   * - :destaque-verde-claro:`20`
     - :destaque-verde-claro:`objetoIrp`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Objeto da IRP.`
   * - :destaque-verde-claro:`21`
     - :destaque-verde-claro:`informacaoComplementar`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Informações complementares; Se existir;`
   * - :destaque-verde-claro:`22`
     - :destaque-verde-claro:`dataHoraFinalManifestacaoInteresse`
     - :destaque-verde-claro:`Data`
     - :destaque-verde-claro:`Data/Hora Final de Manifestação de Interesse (AAAA-MM-DD)`
   * - :destaque-verde-claro:`23`
     - :destaque-verde-claro:`urlPlataformaOrigem`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`URL para página/portal do sistema de origem da IRP. Esta url será exibida no Portal PNCP.`
   * - :destaque-verde-claro:`24`
     - :destaque-verde-claro:`urlProcessoEletronico`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`URL para página do sistema de controle de processos eletrônicos com os dados do processo desta contratação. Esta url será exibida no Portal PNCP.`
   * - :destaque-verde-claro:`25`
     - :destaque-verde-claro:`usuarioNome`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Nome do usuário/plataforma que enviou a publicação`
   * - :destaque-verde-claro:`26`
     - :destaque-verde-claro:`dataPublicacaoPncp`
     - :destaque-verde-claro:`Data`
     - :destaque-verde-claro:`data da publicação no PNCP`
   * - :destaque-verde-claro:`27`
     - :destaque-verde-claro:`dataCancelamento`
     - :destaque-verde-claro:`Data`
     - :destaque-verde-claro:`data do cancelamento da publicação no PNCP`
   * - :destaque-verde-claro:`28`
     - :destaque-verde-claro:`motivoCancelamento`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Motivo/justificativa do cancelamento da IRP`
   * - :destaque-verde-claro:`29`
     - :destaque-verde-claro:`dataInclusao`
     - :destaque-verde-claro:`Data`
     - :destaque-verde-claro:`Data de inclusão da IRP no PNCP`
   * - :destaque-verde-claro:`30`
     - :destaque-verde-claro:`dataAtualizacao`
     - :destaque-verde-claro:`Data`
     - :destaque-verde-claro:`Data de atualização da IRP no PNCP`
   * - :destaque-verde-claro:`31`
     - :destaque-verde-claro:`dataAtualizacaoGlobal`
     - :destaque-verde-claro:`Data`
     - :destaque-verde-claro:`Data da última atualização global do registro da IRP considerando seus dependentes (item da IRP, arquivo/documento da IRP, etc)`


Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - :destaque-verde-claro:`200`
     - :destaque-verde-claro:`OK`
     - :destaque-verde-claro:`Sucesso`
   * - :destaque-verde-claro:`400`
     - :destaque-verde-claro:`BadRequest`
     - :destaque-verde-claro:`Erro`
   * - :destaque-verde-claro:`422`
     - :destaque-verde-claro:`Unprocessable Entity`
     - :destaque-verde-claro:`Erro`
   * - :destaque-verde-claro:`500`
     - :destaque-verde-claro:`Internal Server Error`
     - :destaque-verde-claro:`Erro`
