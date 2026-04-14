Excluir Itens de Plano de Contratação por Número da Contratação
===============================================================

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

Serviço que permite excluir itens de um plano de contratação no PNCP pelo Código da Contratação Futura. Este serviço requer autenticação para ser acionado.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list~table::
   :width: 100%
   :widths: 50 15
   :header~rows: 1

   * ~ Endpoint
     ~ Método HTTP
   * ~ /v1/orgaos/{cnpj}/pca/{ano}/{sequencial}/itens/contratacao
     ~ DELETE

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code~block:: json

   {
     "justificativa": ""
   }

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code~block:: bash

   curl ~k ~X DELETE \
     ~~header "Authorization: Bearer access_token" \
     "${BASE_URL}/v1/orgaos/10000000000003/pca/2022/1/itens/contratacao" \
     ~H "accept: */*" \
     ~H "Content~Type: application/json" \
     ~~data "@/home/objeto.json"

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar o parâmetro {cnpj}, {ano} e {sequencial} na URL.

.. list~table::
   :width: 100%
   :widths: 5 25 15 10 45
   :header~rows: 1

   * ~ Id
     ~ Campo
     ~ Tipo
     ~ Obrigatório
     ~ Descrição
   * ~ 1
     ~ cnpj
     ~ Texto (14)
     ~ Sim
     ~ Cnpj do órgão a que a unidade
       administrativa do PCA está
       vinculada
   * ~ 2
     ~ ano
     ~ Inteiro
     ~ Sim
     ~ Ano do PCA
   * ~ 3
     ~ sequencial
     ~ Inteiro
     ~ Sim
     ~ Número sequencial gerado
       pelo PNCP para o plano
       incluído
   * ~ 4
     ~ numeroContratacao
     ~ Texto (XXX)
     ~ Sim
     ~ 
   * ~ 5
     ~ justificativa
     ~ Texto (255)
     ~ Sim
     ~ Motivo/justificativa para
       exclusão dos itens do plano

**Códigos de Retorno**
~~~~~~~~~~~~~~~~~~~~~~

.. list~table::
   :width: 100%
   :widths: 10 25 25
   :header~rows: 1

   * ~ Código HTTP
     ~ Mensagem
     ~ Tipo
   * ~ 201
     ~ Created
     ~ Sucesso
   * ~ 400
     ~ BadRequest
     ~ Erro
   * ~ 422
     ~ Unprocessable Entity
     ~ Erro
   * ~ 500
     ~ Internal Server Error
     ~ Erro

\
