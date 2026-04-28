Retificar Parcialmente uma Contratação
======================================

Serviço que permite retificar parcialmente os dados de uma contratação. Este serviço será acionado por qualquer plataforma digital credenciada. **Na retificação parcial, podem se enviados apenas as informações que sofrerão alteração. Por exemplo, se desejar apenas atualizar a situação de uma contratação, deve informar apenas o atributo situacaoCompraId e ignorar todos os demais atributos.** 

.. warning::

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
     - PATCH
	 

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
		"linkProcessoEletronico": "url para página do sistema de controle de processos eletrônicos com os dados do processo desta  contratação",
		"justificativaPresencial": "justificativa pela escolha da modalidade presencial",
		"justificativa": "motivo/justificativa para a retificação da contratação"
	}
  

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X  PATCH --header "Authorization: Bearer access_token" 
	"${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1" -H "accept: */*" -H "Content-Type: application/json" 

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar os parâmetros ``cnpj``, ``ano`` e ``sequencial`` na URL.

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
     - Bad Request
     - Erro
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

\
