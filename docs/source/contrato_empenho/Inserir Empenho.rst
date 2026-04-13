Inserir Empenho
===============

.. Attention::

   As alterações da versão |versao| estão em destaque, conforme exemplo a seguir:

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - cnpj
     - Texto
     - CNPJ do órgão do contrato/empenho
   * - :destaque:`2`
     - :destaque:`ano`
     - :destaque:`Inteiro`
     - :destaque:`Ano do contrato/empenho`
   * - 3
     - sequencialContrato
     - Inteiro
     - Sequencial do contrato/empenho no PNCP; número sequencial gerado no momento da inclusão

\

.. container:: destaque-amarelo

	Serviço que permite incluir um empenho para um respectivo Contrato. Este serviço será acionado por qualquer plataforma digital credenciada.

\

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - :destaque:`/v1/orgaos/{cnpj}/contratos/{ano}/{sequencialContrato}/empenhos`
     - :destaque:`POST`
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  :emphasize-lines: 1-16

		{
		  "empenhos": [
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
		    }
		  ]
		}


Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1,2

	   curl -X 'GET' '${BASE_URL}/v1/tipos-instrumentos-convocatorios 
	   -H 'accept: */*'


Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Nota: alimentar os parâmetros :destaque:`{cnpj}`, :destaque:`{ano}` e :destaque:`{sequencial}` na URL.

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
     - :destaque:`sequencialContrato`
     - :destaque:`Inteiro`
     - :destaque:`Sim`
     - :destaque:`Número sequencial do contrato/empenho (gerado pelo PNCP no momento da inclusão)`
   * - :destaque:`4`
     - :destaque:`empenhos`
     - 
     - :destaque:`Sim`
     - :destaque:`Lista de metadados dos empenhos`
   * - :destaque:`4.1`
     - :destaque:`numeroEmpenho`
     - :destaque:`Texto (50)`
     - :destaque:`Sim`
     - :destaque:`Número do empenho`
   * - :destaque:`4.2`
     - :destaque:`tipoPessoa`
     - :destaque:`Texto (2)`
     - :destaque:`Sim`
     - :destaque:`PJ - Pessoa jurídica; PF - Pessoa física; PE - Pessoa estrangeira`
   * - :destaque:`4.3`
     - :destaque:`niCredorFornecedor`
     - :destaque:`Texto (30)`
     - :destaque:`Sim`
     - :destaque:`CNPJ, CPF ou identificador estrangeiro do credor/fornecedor`
   * - :destaque:`4.4`
     - :destaque:`nomeCredorFornecedor`
     - :destaque:`Texto (250)`
     - :destaque:`Sim`
     - :destaque:`Nome do credor/fornecedor`
   * - :destaque:`4.5`
     - :destaque:`numeroPlanoInterno`
     - :destaque:`Texto (50)`
     - :destaque:`Não`
     - :destaque:`Número do Plano Interno`
   * - :destaque:`4.6`
     - :destaque:`codigoNaturezaDespesa`
     - :destaque:`Texto (10)`
     - 
     - :destaque:`Código da natureza de despesa`
   * - :destaque:`4.7`
     - :destaque:`dataEmissaoEmpenho`
     - :destaque:`Data/Hora`
     - :destaque:`Sim`
     - :destaque:`Data/Hora da emissão do empenho`
   * - :destaque:`4.8`
     - :destaque:`valorTotal`
     - :destaque:`Decimal`
     - :destaque:`Sim`
     - :destaque:`Valor total do empenho`
   * - :destaque:`4.9`
     - :destaque:`valorSubItem`
     - :destaque:`Decimal`
     - :destaque:`Não`
     - :destaque:`Valor do subelemento`
   * - :destaque:`4.10`
     - :destaque:`codigoEmenda`
     - :destaque:`Texto (50)`
     - :destaque:`Não`
     - :destaque:`Código da Emenda Parlamentar`

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
     - :destaque:`Created`
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
