Excluir Contrato/Empenho
========================

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

Serviço que permite remover um contrato ou empenho. Este serviço será acionado por
qualquer plataforma digital credenciada

.. Attention::
  
   Não será possível excluir o Contrato com Termo ativo.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/contratos/{ano}/{sequencial}
     - DELETE

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

   {
      "justificativa": "motivo/justificativa para exclusão do contrato ou empenho"
   }

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:  

   curl -k -X DELETE \
   --header "Authorization: Bearer access_token" \
   -H "accept: */*" \
   "${BASE_URL}/v1/orgaos/10000000000003/contratos/2021/1"

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

  Alimentar os parâmetros {cnpj}, {ano} e {sequencial} na URL. 

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
     - CNPJ
     - Texto (14)
     - Sim
     - Cnpj do órgão do contrato ou empenho 
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do contrato ou empenho 
   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Número sequencial do contrato ou empenho (gerado pelo PNCP no momento da inclusão do mesmo) 
   * - 4
     - justificativa
     - Texto (255) 
     - Sim
     - Motivo/justificativa para exclusão do contrato ou empenho.

**Códigos de Retorno**
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 25
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
