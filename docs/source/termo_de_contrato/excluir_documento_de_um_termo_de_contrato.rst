Excluir Documento de um Termo de Contrato
=========================================

Serviço que permite remover um documento/arquivo pertencente a um termo de contrato específico.

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
   * - /v1/orgaos/{cnpj}/contratos/{ano}/{sequencial}/termos/{sequencialTermo}/arquivos/{sequencialDocumento}
     - DELETE	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  
    {
      "justificativa": "motivo/justificativa para exclusão do documento do termo do contrato"
    }

  
Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1

    curl -k -X DELETE --header "Authorization: Beareraccess_token" "${BASE_URL}/v1/orgaos/10000000000003/contratos/2021/1/termos/1/arquivos/1" -H "accept: */*"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros {cnpj}, {ano}, {sequencial}, {sequencialTermo} e {sequencialDocumento} na URL.

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
     - CNPJ do órgão do contrato
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do contrato
   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Número sequencial do contrato (gerado pelo PNCP)
   * - 4
     - sequencialTermo
     - Inteiro
     - Sim
     - Número sequencial do termo de contrato (gerado pelo PNCP)
   * - 5
     - sequencialDocumento
     - Inteiro
     - Sim
     - Número sequencial do documento do contrato (gerado pelo PNCP)
   * - 6
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para exclusão do documento do termo do contrato

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 15 35 20
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
