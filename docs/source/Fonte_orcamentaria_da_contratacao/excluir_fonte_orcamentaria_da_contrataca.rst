Excluir Fonte Orçamentária da Contratação
=========================================

Serviço que permite remover uma ou mais fontes orçamentárias de uma Contratação.

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
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/fonte-orcamentaria
     - DELETE
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

	{
	    "listaFonteOrcamentariaId": [ 2, 3 ],
	    “justificativaAtualizacao": "Motivo/justificativa para exclusão da fonte orçamentária da contratação"
	}


Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X ‘DELETE’ --header 'Authorization: Bearer access_token' \
	'${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/arquivos/1' -H 'accept: */*’ \
	-H 'Content-Type: application/json' \
	-d '{ "listaFonteOrcamentariaId": [ 2 ], "justificativaAtualizacao": "Justificativa da exclusão" }'

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
     - listaFonteOrcamentariaId
     - Inteiro
     - Código de identificação da fonte orçamentária. Permite o envio de múltiplos códigos separados por vírgula.
   * - 5
     - justificativaAtualizacao
     - Texto (255)
     - Motivo/justificativa para exclusão da fonte orçamentária da contratação.

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
