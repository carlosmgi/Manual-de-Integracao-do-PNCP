Retificar Contratação
=====================

Serviço que permite retificar os dados de uma contratação. Este serviço será acionado por qualquer plataforma digital credenciada. **Importante lembrar que na Retificação todas as informações terão que ser enviadas novamente, não apenas as que sofreram alteração.**

.. Atention::

	Fica impedida a retificação da contratação caso a mesma não possua documento/arquivo ativo vinculado a ela no PNCP. Deve-se observar as regras de conformidade implementadas entre Instrumento Convocatório, Modalidade e Amparo Legal e Instrumento Convocatório e Modo de Disputa descritas na seção 5 deste Manual. O PNCP não receberá novas contratações ou permitirá a retificação se os campos informados não estiverem em conformidade.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial} 
     - PUT
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

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
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X  PUT --header "Authorization: Bearer access_token" "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1" -H "accept: */*" -H "Content-Type: application/json" 

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``cnpj``, ``ano`` e ``sequencial`` na URL.

.. list-table::
   :width: 100%
   :widths: 10 25 18 20 45
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
     - Número da Contratação no sistema de origem sem o ano.

   * - 8
     - numeroProcesso
     - Texto (50)
     - Sim
     - Número do processo de contratação no sistema de origem

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
     - Informações complementares; Se existir;

   * - 12
     - cnpjOrgaoSubRogado
     - Texto (14)
     - Não
     - CNPJ do órgão subrogado.

   * - 13
     - codigoUnidadeSubRogada
     - Texto (30)
     - Não
     - Código da unidade subrogada

   * - 14
     - srp
     - Booleano
     - Sim
     - Identifica se a compra trata-se de um SRP (Sistema de registro de preços) Contratações na modalidade leilão informar false.

   * - 15
     - dataAberturaProposta
     - Data/Hora
     - Obrigatório para Tipo de Instrumento Convocatório 1 ou 2. Tipo 3 será desprezado.
     - Informar a data e hora de início do recebimento das propostas (pelo horário de Brasília)

   * - 16
     - dataEncerramentoProposta
     - Data/Hora
     - Obrigatório para Tipo de Instrumento Convocatório 1 ou 2. Tipo 3 será desprezado.
     - Informar a data e hora de encerramento do recebimento das propostas (pelo horário de Brasília)

   * - 17
     - amparoLegalId
     - Inteiro
     - Sim
     - Código da tabela de domínio Amparo Legal

   * - 18
     - linkSistemaOrigem
     - Texto (512)
     - Não
     - URL para página/portal do sistema de origem da contratação para recebimento de proposta/lance. Esta url será exibida no Portal PNCP no detalhamento da Contratação.

   * - 19
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para a retificação dos atributos da contratação.

   * - 20
     - justificativaPresencial
     - Texto (5120)
     - Obrigatório para as modalidades de contratação presencial
     - Justificativa pela escolha da modalidade presencial.

   * - 21
     - linkProcessoEletronico
     - Texto (512)
     - Não
     - URL para página do sistema de controle de processos eletrônicos com os dados do processo desta contratação. Esta url será exibida no Portal PNCP no detalhamento da Contratação.


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
