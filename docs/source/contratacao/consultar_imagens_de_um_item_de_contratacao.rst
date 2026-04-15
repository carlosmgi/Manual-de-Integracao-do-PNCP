Consultar Imagens de um Item de Contratação
===========================================

Serviço que permite consultar a lista de imagens de um item de contratação.

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

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/itens/{numeroItem}/imagem
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/itens/1/imagem" -H "Accept: */*”

Dados de entrada
~~~~~~~~~~~~~~~~

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
     - Texto (14)
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação ou alienação de bens).
   * - 2
     - ano
     - Inteiro
     - Ano da contratação.
   * - 3
     - sequencial
     - Inteiro
     - Sequencial da contratação no PNCP; número gerado no momento que a contratação foi inserida no PNCP.
   * - 4
     - numeroItem
     - Inteiro
     - Número do item da contratação.

Dados de retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

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
     - Número do item da contratação.
   * - 3
     - Imagens
     - Lista
     - Lista de dados das imagens associadas ao item.
   * - 3.1
     - sequencialImagem
     - Inteiro
     - Número sequencial atribuído à imagem.
   * - 3.2
     - titulo
     - Texto
     - Título da imagem.
   * - 3.3
     - legenda
     - Texto
     - Legenda da imagem.
   * - 3.4
     - textoAlternativo
     - Texto
     - Texto alternativo da imagem.
   * - 3.5
     - url
     - Texto
     - URL de acesso à imagem.
   * - 3.6
     - dataPublicacaoPncp
     - Data
     - Data de publicação da imagem no portal PNCP.

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

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

\
