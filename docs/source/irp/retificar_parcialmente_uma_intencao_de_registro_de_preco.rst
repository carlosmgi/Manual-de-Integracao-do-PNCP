Retificar parcialmente uma Intenção de Registro de Preço
========================================================

Serviço que permite retificar parcialmente uma Intenção de Registro de Preço específica. Este serviço será acionado por qualquer plataforma digital credenciada.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/irp/{ano}/{sequencial}
     - PATCH
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  :emphasize-lines: 1-25

    {
    	"codigoUnidadeGerenciadora": "1010",
    	"cnpjOrgaoSubRogado": "00000000000101",
    	"codigoUnidadeSubRogada": "01",
    	"numeroIrp": "0001",
    	"numeroProcesso": "1/2026",
    	"tipoInstrumentoConvocatorioId": 1,
    	"amparoLegalId": 1,
    	"modalidadeId": 6,
    	"modoDisputaId": 1,
    	"situacaoIrpId": {
    		"id": 1,
    		"nome": "Divulgada",
    		"descricao": "Intenção de Registro de Preço divulgada no PNCP",
    		"dataInclusao": "2026-07-31T10:21:34",
    		"dataAtualizacao": "2026-07-31T10:21:34"
    	},
    	"objetoIrp": "Descrição do objeto da contratação",
    	"informacaoComplementar": "",
    	"indicadorPossibilidadeAdesao": true,
    	"dataHoraFinalManifestacaoInteresse": "2026-07-31T10:21:34",
    	"urlPlataformaOrigem": "url do sistema de origem da IRP",
    	"urlProcessoEletronico": "url para página do sistema de controle de processos eletrônicos com os dados da IRP.",
    	"justificativa": "motivo/justificativa para a retificação da IRP"
    }

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1-5

  	curl -k -X PATCH \
  	  --header "Authorization: Bearer access_token" \
  	  "${BASE_URL}/v1/orgaos/10000000000003/irp/2021/1" \
  	  -H "accept: */*" \
  	  -H "Content-Type: application/json"

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar os parâmetros ``cnpj``, ``ano`` e ``sequencial`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 10 10 55
   :header-rows: 1
   :class: quebra-linha-dois-ultima
   
   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição
     
   * - :destaque-verde-claro:`1`
     - :destaque-verde-claro:`codigoUnidadeGerenciadora`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Código da unidade executora do órgão da IRP; a unidade deverá estar cadastrada para o órgão`
   * - :destaque-verde-claro:`2`
     - :destaque-verde-claro:`cnpjOrgaoSubRogado`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`CNPJ do órgão subrogado`     
   * - :destaque-verde-claro:`3`
     - :destaque-verde-claro:`codigoUnidadeSubRogada`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Código da Unidade Gerenciadora Subrogada do Órgão/Entidade Subrogado`   
   * - :destaque-verde-claro:`4`
     - :destaque-verde-claro:`numeroIrp`
     - :destaque-verde-claro:`Texto (50)`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Número da IRP no sistema de origem` 
   * - :destaque-verde-claro:`5`
     - :destaque-verde-claro:`numeroProcesso`
     - :destaque-verde-claro:`Texto (50)`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Número do processo no sistema de origem`
   * - :destaque-verde-claro:`6`
     - :destaque-verde-claro:`tipoInstrumentoConvocatorioId`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Código da tabela de domínio Tipo de instrumento convocatório`
   * - :destaque-verde-claro:`7`
     - :destaque-verde-claro:`amparoLegalId`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Código da tabela de domínio Amparo Legal`
   * - :destaque-verde-claro:`8`
     - :destaque-verde-claro:`modalidadeId`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Código da tabela de domínio Modalidade`
   * - :destaque-verde-claro:`9`
     - :destaque-verde-claro:`modoDisputaId`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Código da tabela de domínio Modo de disputa`
   * - :destaque-verde-claro:`10`
     - :destaque-verde-claro:`situacaoIrpId`
     - 
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Caso informe este campo, os itens até 10.5 serão obrigatórios.`
   * - :destaque-verde-claro:`10.1`
     - :destaque-verde-claro:`id`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Condicional`
     - :destaque-verde-claro:`Identificação da Situações da Intenção de Registro de Preço (1 = Divulgada no PNCP; 2 = Cancelada; 3 = Suspensa; 4 = Anulada)`
   * - :destaque-verde-claro:`10.2`
     - :destaque-verde-claro:`nome`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Condicional`
     - :destaque-verde-claro:`Nome da Identificação da Situações da Intenção de Registro de Preço  (1 = Divulgada no PNCP; 2 = Cancelada; 3 = Suspensa; 4 = Anulada)`
   * - :destaque-verde-claro:`10.3`
     - :destaque-verde-claro:`descricao`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Condicional`
     - :destaque-verde-claro:`Descrição da Identificação da Situações da Intenção de Registro de Preço  (1 = Divulgada no PNCP     (Intenção de Registro de Preço divulgada no PNCP); 2 = Cancelada  (Intenção de Registro de Preço cancelada conforme justificativa); 3 = Suspensa (Intenção de Registro de Preço suspensa conforme justificativa); 4 = Anulada (Intenção de Registro de Preço anulada conforme justificativa))`
   * - :destaque-verde-claro:`10.4`
     - :destaque-verde-claro:`dataInclusao`
     - :destaque-verde-claro:`Data/Hora`
     - :destaque-verde-claro:`Condicional`
     - :destaque-verde-claro:`Data e hora inclusão da Situações da Intenção de Registro de Preço`
   * - :destaque-verde-claro:`10.5`
     - :destaque-verde-claro:`dataInclusao`
     - :destaque-verde-claro:`Data/Hora`
     - :destaque-verde-claro:`Condicional`
     - :destaque-verde-claro:`Data e hora atualização da Situações da Intenção de Registro de Preço`
   * - :destaque-verde-claro:`11`
     - :destaque-verde-claro:`objetoIrp`
     - :destaque-verde-claro:`Texto (5120)`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Objeto da IRP.`
   * - :destaque-verde-claro:`12`
     - :destaque-verde-claro:`informacaoComplementar`
     - :destaque-verde-claro:`Texto (512)`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Informações complementares; Se existir;`
   * - :destaque-verde-claro:`13`
     - :destaque-verde-claro:`indicadorPossibilidadeAdesao`
     - :destaque-verde-claro:`Booleano`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Indica se a IRP poderá admitir adesão por órgãos ou entidades participantes`
   * - :destaque-verde-claro:`14`
     - :destaque-verde-claro:`dataHoraFinalManifestacaoInteresse`
     - :destaque-verde-claro:`Data`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Data/Hora Final de Manifestação de Interesse (AAAA-MM-DD)`
   * - :destaque-verde-claro:`15`
     - :destaque-verde-claro:`urlPlataformaOrigem`
     - :destaque-verde-claro:`Texto (512)`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`URL para página/portal do sistema de origem da IRP. Esta url será exibida no Portal PNCP.`
   * - :destaque-verde-claro:`16`
     - :destaque-verde-claro:`urlProcessoEletronico`
     - :destaque-verde-claro:`Texto (512)`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`URL para página do sistema de controle de processos eletrônicos com os dados do processo desta contratação. Esta url será exibida no Portal PNCP.`
   * - :destaque-verde-claro:`17`
     - :destaque-verde-claro:`justificativa`
     - :destaque-verde-claro:`Texto (255)`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Motivo/justificativa para retificação da IRP`


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
     - :destaque-verde-claro:`Created`
     - :destaque-verde-claro:`Sucesso`
   * - :destaque-verde-claro:`204`
     - :destaque-verde-claro:`No Content`
     - :destaque-verde-claro:`Sucesso`
   * - :destaque-verde-claro:`400`
     - :destaque-verde-claro:`Bad Request`
     - :destaque-verde-claro:`Erro`
   * - :destaque-verde-claro:`401`
     - :destaque-verde-claro:`Unauthorized`
     - :destaque-verde-claro:`Erro`
   * - :destaque-verde-claro:`422`
     - :destaque-verde-claro:`Unprocessable Entity`
     - :destaque-verde-claro:`Erro`
   * - :destaque-verde-claro:`500`
     - :destaque-verde-claro:`Internal Server Error`
     - :destaque-verde-claro:`Erro`
