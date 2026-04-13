Excluir Instrumento de Cobrança de Contrato/Empenho
======================================================

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

Serviço que permite remover um instrumento de cobrança de um contrato ou empenho.
Este serviço será acionado por qualquer plataforma digital credenciada.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/contratos/{ano}/{sequencialContrato}/instrumentocobranca/{sequencialInstrumentoCobranca}
     - DELETE

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

   {
     "justificativa": "motivo/justificativa da exclusão do instrumento de cobrança do contrato ou empenho"
   }

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:

   curl -k -X DELETE \
     --header "Authorization: Bearer access_token" \
     "${BASE_URL}/v1/orgaos/10000000000003/contratos/2025/1/instrumentocobranca/1" \
     -H "accept: */*"

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

  Alimentar os parâmetros {cnpj}, {ano}, {sequencialContrato} e {sequencialInstrumentoCobranca} na URL.

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
     - Cnpj do órgão do contrato ou empenho
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do contrato ou empenho
   * - 3
     - sequencialContrato
     - Inteiro
     - Sim
     - Número sequencial do contrato ou empenho (gerado pelo PNCP no momento da inclusão do contrato/empenho)
   * - 4
     - sequencialInstrumentoCobranca
     - Inteiro
     - Sim
     - Número sequencial do instrumento de cobrança do contrato ou empenho (gerado pelo PNCP no momento da inclusão do instrumento de cobrança)
   * - 5
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa da exclusão do instrumento de cobrança do contrato ou empenho

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
     - Delete
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 401
     - Unauthorized
     - Erro
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro
