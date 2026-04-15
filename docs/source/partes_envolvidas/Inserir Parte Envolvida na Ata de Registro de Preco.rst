Inserir Parte Envolvida na Ata de Registro de Preço
===================================================

Serviço que permite inserir uma lista de partes envolvidas a uma ata de registro de preço.

.. Attention::

  A parte envolvida poderá assumir mais de um papel, sendo participante e não participante, conforme apresentado a seguir:

\

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

.. code-block:: json
  :linenos:
  :emphasize-lines: 1-12

    [ 
      { 
        "tipoParteEnvolvidaId": 2, 
        "cnpj": "00394460000141", 
        "codigoUnidadeCompradora": "1" 
      }, 
      { 
        "tipoParteEnvolvidaId": 3, 
        "cnpj": "00394460000141", 
        "codigoUnidadeCompradora": "1" 
      } 
    ]

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - :destaque: `/v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/partesenvolvidas`
     - :destaque: `POST`
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  :emphasize-lines: 1,12

    [
    {
      "tipoParteEnvolvidaId": 1,
      "cnpj": "00394460000141",
      "codigoUnidadeCompradora": "1"
    },
    {
      "tipoParteEnvolvidaId": 2,
      "cnpj": "00394460000141",
      "codigoUnidadeCompradora": "2"
    }
  ]

  
  

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1,2

    curl -X 'POST' '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1/partesenvolvidas' \
      -H 'accept: */*' -H 'Authorization: Bearer<TOKEN_AUTORIZACAO>' \?????????????????????????

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
     - :destaque:``
     - :destaque:`Lista`
     - :destaque:`Não`
     - :destaque:`Lista de partes envolvidas`
   * - :destaque:`5.1`
     - :destaque:`tipoParteEnvolvidaId`
     - :destaque:`Inteiro`
     - :destaque:`Não`
     - :destaque:`Código do tipo de parte envolvida (1 - Gerenciadora; 2 - Participante; 3 - Não participante)`
   * - :destaque:`5.2`
     - :destaque:`cnpj`
     - :destaque:`Texto (14)`
     - :destaque:`Não`
     - :destaque:`CNPJ do órgão`
   * - :destaque:`5.3`
     - :destaque:`codigoUnidadeCompradora`
     - :destaque:`Texto (30)`
     - :destaque:`Não`
     - :destaque:`Código da unidade administrativa`

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 20
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
