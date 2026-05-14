Inserir Parte Envolvida na Ata de Registro de Preço
===================================================

:destaque-amarelo-claro:`Serviço que permite inserir uma lista de partes envolvidas a uma ata de registro de preço.`

.. Attention::

   A parte envolvida poderá assumir mais de um papel, sendo participante e não participante, conforme apresentado a seguir:

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
   * - :destaque-amarelo-claro:`/v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/partesenvolvidas`
     - :destaque-amarelo-claro:`POST`

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
   :linenos:
   :emphasize-lines: 1-12

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
   :emphasize-lines: 1-2

   curl -X 'POST' '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1/partesenvolvidas' 
   -H 'accept: */*' -H 'Authorization: Bearer<TOKEN_AUTORIZACAO>' 
    

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   :destaque-amarelo-claro:`Alimentar o parâmetro {cnpj}, {anoCompra}, {sequencialCompra} e {sequencialAta} na URL.`

.. list-table::
   :width: 100%
   :widths: 5 10 10 15 55
   :header-rows: 1
   :class: quebra-linha-ultima-coluna

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição

   * - :destaque-amarelo-claro:`1`
     - :destaque-amarelo-claro:`cnpj`
     - :destaque-amarelo-claro:`Texto (14)`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Cnpj do órgão originário da contratação informado na inclusão (proprietário da contratação)`

   * - :destaque-amarelo-claro:`2`
     - :destaque-amarelo-claro:`anoCompra`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Ano da contratação`

   * - :destaque-amarelo-claro:`3`
     - :destaque-amarelo-claro:`sequencialCompra`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Sequencial da contratação no PNCP; Número sequencial gerado no momento que a contratação foi inserida no PNCP;`

   * - :destaque-amarelo-claro:`4`
     - :destaque-amarelo-claro:`sequencialAta`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Sequencial da ata no PNCP; Número sequencial gerado no momento que a ata foi inserida no PNCP;`

   * - :destaque-amarelo-claro:`5`
     - :destaque-amarelo-claro:`Lista de Partes Envolvidas`
     - :destaque-amarelo-claro:`List`
     - :destaque-amarelo-claro:`Não`
     - :destaque-amarelo-claro:`Lista de partes envolvidas`

   * - :destaque-amarelo-claro:`5.1`
     - :destaque-amarelo-claro:`tipoParteEnvolvidaId`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Não`
     - :destaque-amarelo-claro:`Código do Tipo de Parte Envolvida. Código 1 - Gerenciadora Código 2 - Participante Código 3 - Não Participante`

   * - :destaque-amarelo-claro:`5.2`
     - :destaque-amarelo-claro:`cnpj`
     - :destaque-amarelo-claro:`Texto (14)`
     - :destaque-amarelo-claro:`Não`
     - :destaque-amarelo-claro:`CNPJ do órgão`

   * - :destaque-amarelo-claro:`5.3`
     - :destaque-amarelo-claro:`codigoUnidadeCompradora`
     - :destaque-amarelo-claro:`Texto (30)`
     - :destaque-amarelo-claro:`Não`
     - :destaque-amarelo-claro:`Código da Unidade Administrativa`

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 25
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo

   * - :destaque-amarelo-claro:`201`
     - :destaque-amarelo-claro:`Created`
     - :destaque-amarelo-claro:`Sucesso`
   * - :destaque-amarelo-claro:`400`
     - :destaque-amarelo-claro:`BadRequest`
     - :destaque-amarelo-claro:`Erro`
   * - :destaque-amarelo-claro:`401`
     - :destaque-amarelo-claro:`Unauthorized`
     - :destaque-amarelo-claro:`Erro`
   * - :destaque-amarelo-claro:`404`
     - :destaque-amarelo-claro:`NotFound`
     - :destaque-amarelo-claro:`Erro`
   * - :destaque-amarelo-claro:`422`
     - :destaque-amarelo-claro:``
     - :destaque-amarelo-claro:``
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro
