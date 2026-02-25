Inserir Ata de Registro de Preço
================================
  
Serviço que permite inserir uma ata de Registro de Preço no PNCP referente a uma contratação.

**Atualizações da versão 2.3.10**
---------------------------------

.. versionadded:: 2.3.10

.. code-block:: json

  "possibilidadeAdesao": true,
  "partesEnvolvidas":[
      {
        "tipoParteEnvolvidaId": 1,
        "cnpj": "10000000000003",
        "codigoUnidadeCompradora": "1"
      }
  ]

.. list-table::
  :widths: auto
  :header-rows: 1

  * - Id
    - .. centered:: Campo
    - Tipo
    - Obrigatório
    - Descrição
  * - 9
    - possibilidadeAdesao
    - Booleano
    - Sim
    - Indicador se a Ata permite adesão de não participantes (False=Não / True=Sim).
  * - 10
    - Lista de Partes Envolvidas
    - 
    - Não
    - Lista de partes envolvidas.
  * - 10.1
    - tipoParteEnvolvidaId
    - Inteiro
    - Não
    - Código do Tipo de Parte Envolvida:
      * **Código 1** - Gerenciadora;
      * **Código 2** - Participante; e
      * **Código 3** - Não Participante.
  * - 10.2
    - cnpj
    - Texto (14)
    - Não
    - CNPJ do órgão.
  * - 10.3
    - codigoUnidadeCompradora
    - Texto (30)
    - Não
    - Código da Unidade Administrativa.

.. versionchanged:: 2.3.10

  não houve alterações.

.. deprecated:: 2.3.10

  não houve alterações.

**Detalhes da Requisição**
--------------------------

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas
     - POST

**Exemplo de Payload**
----------------------

.. code-block:: json
  :linenos:

  {
      "numeroAtaRegistroPreco": "00001",
      "anoAta": 2021,
      "dataAssinatura": "2021-07-21",
      "dataVigenciaInicio": "2021-07-21",
      "dataVigenciaFim": "2022-07-21",
      "possibilidadeAdesao": true,
      "partesEnvolvidas":[
          {
            "tipoParteEnvolvidaId": 1,
            "cnpj": "10000000000003",
            "codigoUnidadeCompradora": "1"
          }
      ]
  }

**Exemplo Requisição (cURL)**
-----------------------------

.. code-block:: lua
  :linenos:

  curl -k -X POST --header "Authorization: Bearer access_token"
  "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/atas" -H "Accept: application/json” -H “ContentType: application/json” -d '{
    "numeroAtaRegistroPreco": "string",
    "anoAta": 0,
    "dataAssinatura": "2021-07-27",
    "dataVigenciaInicio": "2021-07-27",
    "dataVigenciaFim": "2021-07-27",
    "possibilidadeAdesao": true
  }'

**Dados de Entrada**
--------------------

.. note::
  
  informar o parâmetro {cnpj}, {anoCompra} e {sequencialCompra} na URL.

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
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação).
   * - 2
     - anoCompra
     - Inteiro
     - Sim
     - Ano da contratação.
   * - 3
     - sequencialCompra
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP; Número sequencial gerado no momento que a contratação foi inserida no PNCP.
   * - 4
     - numeroAtaRegistroPreco
     - Texto (50)
     - Sim
     - Número da ata no sistema de origem.
   * - 5
     - anoAta
     - Inteiro
     - Sim
     - Ano da ata.
   * - 6
     - dataAssinatura
     - Data
     - Sim
     - Informar a data de assinatura da ata.
   * - 7
     - dataVigenciaInicio
     - Data
     - Sim
     - Informar a data de início de vigência da ata.
   * - 8
     - dataVigenciaFim
     - Data
     - Sim
     - Informar a data de fim de vigência da ata.
   * - 9
     - possibilidadeAdesao
     - Booleano
     - Sim
     - Indicador se a Ata permite adesão de não participantes (False=Não / True=Sim).
   * - 10
     - Lista de Partes Envolvidas
     - 
     - Não
     - Lista de partes envolvidas.
   * - 10.1
     - tipoParteEnvolvidaId
     - Inteiro
     - Não
     - Código do Tipo de Parte Envolvida:
       * **Código 1** - Gerenciadora;
       * **Código 2** - Participante; e
       * **Código 3** - Não Participante.
   * - 10.2
     - cnpj
     - Texto (14)
     - Não
     - CNPJ do órgão.
   * - 10.3
     - codigoUnidadeCompradora
     - Texto (30)
     - Não
     - Código da Unidade Administrativa.
  
**Dados de Retorno**
--------------------

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - location
     - Texto (255)
     - Endereço http do recurso criado 

**Exemplo de Retorno**
----------------------

.. code-block:: c
  :linenos:

  access-control-allow-credentials: true
  access-control-allow-headers: Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin,
  access-control-allow-methods: GET,PUT,POST,DELETE,OPTIONS
  access-control-allow-origin: *
  cache-control: no-cache,no-store,max-age=0,must-revalidate
  content-length: 0
  date: ?
  expires: ?
  location: https://treina.pncp.gov.br/api/pncp/v1/orgaos/10000000000003/compras/2021/1/atas/1
  pragma: no-cache
  strict-transport-security: max-age=?
  x-content-type-options: nosniff
  x-firefox-spdy: ?
  x-frame-options: DENY
  x-xss-protection: ?; mode=block

**Códigos de Retorno**
----------------------

.. list-table::
   :width: 100%
   :widths: 10 25 25
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 200
     - Created
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 401
     - Unauthorized
     - Erro
   * - 422
     - Unprocessable
     - Erro
   * - 500
     - Internal Server Error
     - Erro
