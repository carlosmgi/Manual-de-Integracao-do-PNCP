Excluir Plano de Contratações
=============================

Serviço que permite excluir um plano de contratações específico de uma unidade. Este
serviço requer autenticação para ser acionado.

Detalhes da Requisição
----------------------

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/pca/{ano}/{sequencial}
     - DELETE

Exemplo de Payload
------------------

.. code-block:: json

   {
     "justificativa": "motivo/justificativa para a exclusão do plano"
   }

Exemplo Requisição (cURL)
-------------------------

.. code-block:: bash

   curl -k -X DELETE \
     --header "Authorization: Bearer access_token" \
     "${BASE_URL}/v1/orgaos/10000000000003/pca/2021/1" \
     -H "accept: */*" \
     -H "Content-Type: application/json"

Dados de Entrada
----------------

.. note::

   Alimentar o parâmetro {cnpj}, {ano} e {sequencial} na URL

.. list-table::
   :width: 100%
   :widths: 5 25 15 10 25
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
     - Cnpj do órgão a que a unidade
       administrativa do PCA está
       vinculada

   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do PCA

   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial do PCA no PNCP;
       Número sequencial gerado no
       momento que o plano da unidade
       foi inserido no PNCP

   * - 4
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para exclusão
       do plano

**Códigos de Retorno**
----------------------

.. list-table::
   :width: 100%
   :widths: 10 25 25
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 201
     - Created
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
