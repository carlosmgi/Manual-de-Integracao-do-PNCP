Excluir Item de Plano de Contratação
====================================

Serviço que permite excluir um item específico de um plano de contratação no PNCP.
Este serviço requer autenticação para ser acionado.

Detalhes da Requisição
----------------------

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/pca/{ano}/{sequencial}/itens/{numeroItem}
     - DELETE

Exemplo de Payload
------------------

.. code-block:: json

   {
      "justificativa": ""
   }

Exemplo Requisição (cURL)
-------------------------

.. code-block:: bash

   curl -k -X DELETE \
     --header "Authorization: Bearer access_token" \
     "${BASE_URL}/v1/orgaos/10000000000003/pca/2022/1/itens/1" \
     -H "accept: */*" \
     -H "Content-Type: application/json" \
     --data "@/home/objeto.json"

Dados de Entrada
----------------

.. note::

  Alimentar o parâmetro {cnpj}, {ano}, {sequencial} e {numeroItem} na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 10 45
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
     - Número sequencial gerado pelo PNCP para o plano incluído
   * - 4
     - numeroItem
     - Inteiro
     - Sim
     - Número do item no Plano (único
       e sequencial crescente)
   * - 5
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para
       exclusão do item do plano

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
