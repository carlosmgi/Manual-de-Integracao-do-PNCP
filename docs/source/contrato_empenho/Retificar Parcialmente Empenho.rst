Retificar Parcialmente Empenho
==============================

.. container:: destaque-amarelo

	Serviço que permite retificar um empenho. Além da justificativa, pelo menos um dos campos relacionados ao empenho deve ser enviado para retificação. Este serviço será acionado por qualquer plataforma digital credenciada.

\

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - :destaque:`/v1/orgaos/{cnpj}/contratos/{ano}/{sequencialContra-to}/empenhos/{sequencialEmpenho}`
     - :destaque:`PUT`
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  :emphasize-lines: 1-15

	{
	  "numeroEmpenho": "string",
	  "tipoPessoa": "PJ",
	  "niCredorFornecedor": "string",
	  "nomeCredorFornecedor": "string",
	  "numeroPlanoInterno": "string",
	  "codigoNaturezaDespesa": "string",
	  "dataEmissaoEmpenho": "2026-01-01T12:00:00",
	  "valorTotal": 1000.0000,
	  "valorSubItem": 1000.0000,
	  "codigoEmenda": "string"
	  "situacaoEmpenhoId": 2,
	  "dataSituacaoEmpenho": "2026-01-01T12:00:00",
	  "justificativa": "motivo/justificativa para a retificação do empenho",
	}

  
Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1,2

	curl -k -X  PUT --header "Authorization: Bearer access_token" "${BASE_URL}/v1/orgaos/10000000000003/contratos/2025/1/empenhos/1" -H "accept: */*" -H "Content-Type: application/json" --data "@/home/objeto.json"

Dados de entrada
~~~~~~~~~~~~~~~~

.. Note::

	Alimentar os parâmetros :destaque:`{cnpj}`, :destaque:`{ano}`, :destaque:`{sequencialContrato}` e :destaque:`{sequencialEmpenho}` na URL

.. list-table::
   :width: 100%
   :widths: 5 20 15 10 50
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - :destaque:`1`
     - :destaque:`cnpj`
     - :destaque:`Texto (14)`
     - :destaque:`Sim`
     - :destaque:`CNPJ do órgão do contrato/empenho`
   * - :destaque:`2`
     - :destaque:`ano`
     - :destaque:`Inteiro`
     - :destaque:`Sim`
     - :destaque:`Ano do contrato/empenho`
   * - :destaque:`3`
     - :destaque:`sequencial`
     - :destaque:`Inteiro`
     - :destaque:`Sim`
     - :destaque:`Número sequencial do contrato/empenho (gerado pelo PNCP no momento da inclusão)`
   * - :destaque:`4`
     - :destaque:`sequencialEmpenho`
     - :destaque:`Inteiro`
     - :destaque:`Sim`
     - :destaque:`Número sequencial do empenho (gerado pelo PNCP no momento da inclusão)`
   * - :destaque:`5`
     - :destaque:`justificativa`
     - :destaque:`Texto (255)`
     - :destaque:`Sim`
     - :destaque:`Motivo/justificativa para a retificação do empenho`
   * - :destaque:`6`
     - :destaque:`numeroEmpenho`
     - :destaque:`Texto (50)`
     - :destaque:`Não`
     - :destaque:`Número do empenho`
   * - :destaque:`7`
     - :destaque:`tipoPessoa`
     - :destaque:`Texto (2)`
     - :destaque:`Não`
     - :destaque:`PJ - Pessoa jurídica; PF - Pessoa física; PE - Pessoa estrangeira`
   * - :destaque:`8`
     - :destaque:`niCredorFornecedor`
     - :destaque:`Texto (30)`
     - :destaque:`Não`
     - :destaque:`CNPJ, CPF ou identificador de empresa estrangeira`
   * - :destaque:`9`
     - :destaque:`nomeCredorFornecedor`
     - :destaque:`Texto (250)`
     - :destaque:`Não`
     - :destaque:`Nome do credor/fornecedor`
   * - :destaque:`10`
     - :destaque:`numeroPlanoInterno`
     - :destaque:`Texto (50)`
     - :destaque:`Não`
     - :destaque:`Número do Plano Interno`
   * - :destaque:`11`
     - :destaque:`codigoNaturezaDespesa`
     - :destaque:`Texto (10)`
     - :destaque:`Não`
     - :destaque:`Código da natureza de despesa`
   * - :destaque:`12`
     - :destaque:`dataEmissaoEmpenho`
     - :destaque:`Data/Hora`
     - :destaque:`Não`
     - :destaque:`Data/Hora da emissão do empenho`
   * - :destaque:`13`
     - :destaque:`valorTotal`
     - :destaque:`Decimal`
     - :destaque:`Não`
     - :destaque:`Valor total do empenho`
   * - :destaque:`14`
     - :destaque:`valorSubItem`
     - :destaque:`Decimal`
     - :destaque:`Não`
     - :destaque:`Valor do subelemento ou subitem`
   * - :destaque:`15`
     - :destaque:`codigoEmenda`
     - :destaque:`Texto (50)`
     - :destaque:`Não`
     - :destaque:`Código da Emenda Parlamentar`
   * - :destaque:`16`
     - :destaque:`situacaoEmpenhoId`
     - :destaque:`Inteiro`
     - :destaque:`Não`
     - :destaque:`Identificador da situação do empenho (1 – Empenhado / 2 - Cancelado)`
   * - :destaque:`17`
     - :destaque:`dataSituacaoEmpenho`
     - :destaque:`Data/Hora`
     - :destaque:`Não`
     - :destaque:`Data/Hora da situação do empenho`

Dados de retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 20 15 30
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - :destaque:`1`
     - :destaque:`location`
     - :destaque:`Texto (255)`
     - :destaque:`Sim`
     - :destaque:`Endereço HTTP do recurso criado`

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 20
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - :destaque:`200`
     - :destaque:`Update`
     - :destaque:`Sucesso`
   * - :destaque:`400`
     - :destaque:`BadRequest`
     - :destaque:`Erro`
   * - :destaque:`401`
     - :destaque:`Unauthorized`
     - :destaque:`Erro`
   * - :destaque:`422`
     - :destaque:`Unprocessable Entity`
     - :destaque:`Erro`
   * - :destaque:`500`
     - :destaque:`Internal Server Error`
     - :destaque:`Erro`
