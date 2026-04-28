Consultar Todos Documentos de uma Contratação 
=============================================

Serviço que permite consultar a lista de documentos pertencentes a uma contratação. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/arquivos 
     - GET


Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/arquivos" -H 
	"Accept: */*”

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
     - NotFound
   * - 500
     - Internal Server Error
     - Erro


\
