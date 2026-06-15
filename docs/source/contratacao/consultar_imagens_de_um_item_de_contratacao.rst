Consultar Imagens de um Item de Contratação
===========================================

Serviço que permite consultar a lista de imagens de um item de contratação.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/itens/{numeroItem}/imagem
     - GET

Exemplo de Payload
------------------

.. code-block:: json
  :linenos:
  
	Não se aplica

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:

	curl -k \
	  "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/itens/1/imagem" \
	  -H "Accept: */*"

Dados de entrada
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 10 10 15 55
   :header-rows: 1
   :class: quebra-linha-ultima-coluna

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
     - Sequencial da Contratação no PNCP; Número sequencial gerado no momento que a contratação foi inserida no PNCP;
   * - 4
     - numeroItem
     - Inteiro
     - Sim
     - Número do item da contratação.

Dados de retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 10 15 55
   :header-rows: 1
   :class: quebra-linha-ultima-coluna

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - idContratacaoPNCP
     - String
     - Número de Controle PNCP da contratação.
   * - 2
     - numeroItem
     - Inteiro
     - Número do Item
   * - 3
     - Imagens
     - Lista
     - Lista de Dados das Imagens
   * - 3.1
     - sequencialImagem
     - Inteiro
     - Número sequencial atribuído à imagem
   * - 3.2
     - titulo
     - Texto
     - Título referente à imagem
   * - 3.3
     - legenda
     - Texto
     - Legenda referente à imagem
   * - 3.4
     - textoAlternativo
     - Texto
     - Texto alternativo da imagem.
   * - 3.5
     - url
     - Texto
     - URL da imagem
   * - 3.6
     - dataPublicacaoPncp
     - Data
     - Data de publicação da imagem no portal PNCP.

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

\
