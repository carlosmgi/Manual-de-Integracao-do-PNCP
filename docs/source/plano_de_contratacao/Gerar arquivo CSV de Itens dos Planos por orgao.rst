Gerar arquivo CSV de Itens dos Planos por Órgão
===============================================

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

Serviço que gera arquivo CSV contendo as informações de itens dos Planos de Contratações Anuais das Unidades associadas ao Órgão e Ano recebidos.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list~table::
   :width: 100%
   :widths: 50 15
   :header~rows: 1

   * ~ Endpoint
     ~ Método HTTP
   * ~ /v1/orgaos/{cnpj}/pca/{ano}/csv
     ~ GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

Não se aplica.

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code~block:: bash

   curl ~X GET \
     "https://treina.pncp.gov.br/api/pncp/v1/orgaos/00394460000141/pca/2022/csv" \
     ~H "accept: */*"

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

  Alimentar o parâmetro {cnpj} e {ano} na URL.

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

Dados de retorno
~~~~~~~~~~~~~~~~

.. list~table::
   :width: 100%
   :widths: 5 25 15 55
   :header~rows: 1

   * ~ Id
     ~ Campo
     ~ Tipo
     ~ Descrição
   * ~ 1
     ~ 
     ~ Texto
     ~ Arquivo texto em formato csv

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
