Inserir Parte Envolvida na Ata de Registro de Preço
===================================================

Serviço que permite inserir uma lista de partes envolvidas a uma ata de registro de preço.

.. Attention::

   A parte envolvida poderá assumir mais de um papel, sendo participante e não participante, conforme apresentado a seguir:

.. code-block:: json
   :linenos:

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

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/partesenvolvidas
     - POST

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
   :linenos:

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

   curl -X 'POST'
   '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1/partesenvolvidas' \
    -H 'accept: */*' -H 'Authorization: Bearer<TOKEN_AUTORIZACAO>' \
   ????????????????????????? 

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar o parâmetro {cnpj}, {anoCompra}, {sequencialCompra} e {sequencialAta} na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 15 40
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
     - Cnpj do órgão originário da contratação informado na inclusão (proprietário da contratação)

   * - 2
     - anoCompra
     - Inteiro
     - Sim
     - Ano da contratação

   * - 3
     - sequencialCompra
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP; Número sequencial gerado no momento que a contratação foi inserida no PNCP;

   * - 4
     - sequencialAta
     - Inteiro
     - Sim
     - Sequencial da ata no PNCP; Número sequencial gerado no momento que a ata foi inserida no PNCP;

   * - 5
     - Lista de Partes Envolvidas
     - List
     - Não
     - Lista de partes envolvidas

   * - 5.1
     - tipoParteEnvolvidaId
     - Inteiro
     - Não
     - Código do Tipo de Parte Envolvida. Código 1 - Gerenciadora Código 2 - Participante Código 3 - Não Participante

   * - 5.2
     - cnpj
     - Texto (14)
     - Não
     - CNPJ do órgão

   * - 5.3
     - codigoUnidadeCompradora
     - Texto (30)
     - Não
     - Código da Unidade Administrativa

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

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
