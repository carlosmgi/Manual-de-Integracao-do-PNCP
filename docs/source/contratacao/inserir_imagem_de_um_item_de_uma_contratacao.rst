Inserir Imagem de um Item de uma Contratação
============================================

Serviço que permite inserir uma imagem de um item de Contratação. O sistema permite o upload de imagem com as extensões listadas na seção: Tabelas de domínio - Extensões de imagem aceitas.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/itens/{numeroItem}/imagem
     - POST
	 

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X POST --header "Authorization: Bearer access_token"
	"${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/itens/1/imagem" -H "accept: */*" -H "Content-Type: multipart/form-data" -H "Titulo-Imagem: Casa" -H "Legenda-Imagem: Casa em condomínio fechado" -H "Texto-Alternativo-Imagem: Texto Alternativo Imagem" -F "arquivo=@lote1_imagem1.jpeg;type=image/jpeg"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Informar os parâmetros ``{cnpj}``, ``{ano}``, ``{sequencial}`` e ``{numeroItem}`` na URL da requisição.

.. list-table::
   :width: 100%
   :widths: auto
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
   * - 5
     - Titulo-Imagem
     - Texto (500)
     - Título da imagem a ser exibido no Portal PNCP.
   * - 6
     - Legenda-Imagem
     - Texto (500)
     - Legenda da imagem a ser exibida no Portal PNCP.
   * - 7
     - Texto-Alternativo-Imagem
     - Texto (500)
     - Texto alternativo da imagem a ser exibido no Portal PNCP.
   * - 8
     - arquivo
     - String Binária
     - Conteúdo binário do arquivo da imagem.

\
