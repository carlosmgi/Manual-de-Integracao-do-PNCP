Excluir Plano de Contratações
=============================

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

Serviço que permite excluir um plano de contratações específico de uma unidade. Este serviço requer autenticação para ser acionado.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/pca/{ano}/{sequencial}
     - DELETE
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~
.. code-block:: json
  :linenos:

    {
      "justificativa": "motivo/justificativa para a exclusão do plano"
    }

  
Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:

  curl -k -X  DELETE --header "Authorization: Bearer access_token"
  "${BASE_URL}/v1/orgaos/10000000000003/pca/2021/1" -H "accept: */*" -H "Content-Type: application/json"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Informar os dados necessários para identificação e exclusão do PCA no PNCP.

.. list-table::
   :width: 100%
   :widths: 5 20 15 10 50
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
     - CNPJ do órgão a que a unidade administrativa do PCA está vinculada
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do PCA
   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial do PCA no PNCP; número sequencial gerado no momento da inclusão
   * - 4
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para exclusão do plano

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
     - Erro
   * - 500
     - Internal Server Error
     - Erro

\

