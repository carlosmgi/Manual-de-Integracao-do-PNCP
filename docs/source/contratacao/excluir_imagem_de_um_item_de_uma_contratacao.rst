Excluir Imagem de um Item de uma Contratação
============================================

Serviço que permite remover imagem pertencente a um item de uma Contratação.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/{numeroItem}/imagens/{sequencialImagem}
     - DELETE
	 

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X DELETE --header "Authorization: Bearer access_token"
	"${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/1/imagens/1" -H "accept: */* -H "Content-Type: application/pdf" -H Content-Disposition: filename="nome_arquivo"


Dados de entrada
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
     - Número do item na contratação.
   * - 5
     - sequencialImagem
     - Inteiro
     - Sequencial da imagem no PNCP; número gerado no momento que a imagem foi inserida no PNCP.
   * - 6
     - justificativa
     - Texto (255)
     - Motivo/justificativa para exclusão da imagem do item da contratação.


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
     - Delete
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
