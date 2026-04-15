Excluir Parte Envolvida em Ata de Registro de Preço
===================================================

Serviço que recupera os dados de uma parte envolvida específica de uma ata de registro de preço.

.. Attention::

  A parte envolvida não poderá ser excluída caso exista contrato vinculado a ela na respectiva ARP.

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
   * - :destaque:`/v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/partesenvolvidas/{cnpjOrgao}/{codUnidade}/{tipoParteEnvolvida}`
     - :destaque:`DELETE`
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  :emphasize-lines: 1-3

    {
      "justificativa": "Motivo/justificativa para exclusão da parte envolvida"
    }


Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1,2

    curl -k -X DELETE --header "Authorization: Bearer access_token"
    "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/atas/1/partesenvolvidas/10000000000003/1/2" -H "accept: */* -H "Content-Type: application/pdf"


Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   :destaque:`Alimentar os parâmetros {cnpj}, {anoCompra}, {sequencialCompra} e {sequencialAta} na URL.`

.. list-table::
   :width: 100%
   :widths: 5 25 15 10 45
   :header-rows: 1
   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - :destaque:`1`
     - :destaque:`cnpj`
     - :destaque:`Texto (14)`
     - :destaque:`Sim`
     - :destaque:`CNPJ do órgão originário da contratação (proprietário da contratação)`
   * - :destaque:`2`
     - :destaque:`anoCompra`
     - :destaque:`Inteiro`
     - :destaque:`Sim`
     - :destaque:`Ano da contratação`
   * - :destaque:`3`
     - :destaque:`sequencialCompra`
     - :destaque:`Inteiro`
     - :destaque:`Sim`
     - :destaque:`Sequencial da contratação no PNCP; número sequencial gerado no momento da inclusão`
   * - :destaque:`4`
     - :destaque:`sequencialAta`
     - :destaque:`Inteiro`
     - :destaque:`Sim`
     - :destaque:`Sequencial da ata no PNCP; número sequencial gerado no momento da inclusão`
   * - :destaque:`5`
     - :destaque:`cnpjOrgao`
     - :destaque:`Texto (14)`
     - :destaque:`Sim`
     - :destaque:`CNPJ do órgão/entidade da parte envolvida`
   * - :destaque:`6`
     - :destaque:`codUnidade`
     - :destaque:`Texto (30)`
     - :destaque:`Sim`
     - :destaque:`Código da unidade administrativa da parte envolvida`
   * - :destaque:`7`
     - :destaque:`tipoParteEnvolvida`
     - :destaque:`Inteiro`
     - :destaque:`Sim`
     - :destaque:`Código do tipo da parte envolvida`
   * - :destaque:`8`
     - :destaque:`justificativa`
     - :destaque:`Texto (255)`
     - :destaque:`Sim`
     - :destaque:`Motivo/justificativa para a exclusão da parte envolvida da ata`

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 20
   :header-rows: 1
   * - Código HTTP
     - Mensagem
     - Tipo
   * - 204
     - No Content
     - Sucesso
   * - 401
     - Unauthorized
     - Erro
   * - 404
     - NotFound
     - Erro
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

\
