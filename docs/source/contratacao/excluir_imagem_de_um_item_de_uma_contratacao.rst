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
	 
Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  
	{
		"justificativa": " Motivo/justificativa para exclusão da imagem do item da contratação"
	}


Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X DELETE \
	  "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/1/imagens/1" \
	  -H "Authorization: Bearer access_token" \
	  -H "Accept: */*" \
	  -H "Content-Type: application/pdf" \
	  -H 'Content-Disposition: filename="nome_arquivo"'



Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
	Alimentar o parâmetro ``{cnpj}``, ``{ano}``, ``{sequencial}``, ``{numeroItem}`` e ``{sequencialImagem}`` na URL.

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
     - Sequencial da contratação no PNCP; Número gerado no momento que a contratação foi inserida no PNCP.
   * - 4
     - numeroItem
     - Inteiro
     - Sim
     - Número do item na contratação.
   * - 5
     - sequencialImagem
     - Inteiro
     - Sim
     - Sequencial da imagem no PNCP; número gerado no momento que a imagem foi inserida no PNCP.
   * - 6
     - justificativa
     - Texto (255)
     - Sim
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
     - Erro
   * - 500
     - Internal Server Error
     - Erro


\
