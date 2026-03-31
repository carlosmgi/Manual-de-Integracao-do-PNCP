Serviços de Ata
===============


Inserir Ata de Registro de Preço
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  
Serviço que permite inserir uma ata de Registro de Preço no PNCP referente a uma contratação.

**Atualizações da versão 2.3.10**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. versionadded:: 2.3.10

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
  :emphasize-lines: 7-14

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

Dados de Entrada
^^^^^^^^^^^^^^^^

.. list-table::
  :widths: auto
  :header-rows: 1

  * - Id
    - Campo
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

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas
     - POST

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

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

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

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

Dados de Entrada
^^^^^^^^^^^^^^^^

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
  
Dados de Retorno
^^^^^^^^^^^^^^^^

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

Exemplo de Retorno
^^^^^^^^^^^^^^^^^^

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

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

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

Retificar Ata de Registro de Preço
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite retificar os dados de uma ata de Registro de Preço.
Importante lembrar que na Retificação todas as informações terão que ser enviadas novamente, não apenas as que sofreram alteração.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}
     - PUT
	 

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
  :linenos:
  :emphasize-lines: 8, 19
  
     Para retificação dos dados da ata informe todos os campos.
    {
      "numeroAtaRegistroPreco": "1/2021",
      "anoAta": 2021,
      "dataAssinatura": “2021-07-01",
      "dataInicioVigencia": “2021-07-01",
      "dataFimVigencia": “2022-07-01",
      "possibilidadeAdesao": true,
      "justificativa": "motivo/justificativa para retificação da ata"
    }
    
    Para o cancelamento da ata:
    {
      "numeroAtaRegistroPreco": "1/2021",
      "anoAta": 2021,
      "dataAssinatura": “2021-07-01",
      "dataInicioVigencia": “2021-07-01",
      "dataFimVigencia": “2022-07-01",
      "possibilidadeAdesao": true,
      "cancelado": true,
      "dataCancelamento": "2023-01-01T12:00:00",
      "justificativa": "motivo/justificativa para cancelamento da ata"
    }


Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

  curl -X 'PUT' '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1' \
    -H 'accept: */*' \
    -H 'Authorization: Bearer <TOKEN_AUTORIZACAO>' \
    -H 'Content-Type: application/json' \
    -d '@/home/objeto.json'


Dados de entrada
^^^^^^^^^^^^^^^^

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
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação)
   * - 2
     - anoCompra
     - Inteiro
     - Sim
     - Ano da contratação
   * - 3
     - sequencialCompra
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP; número sequencial gerado no momento que a contratação foi inserida no PNCP
   * - 4
     - sequencialAta
     - Inteiro
     - Sim
     - Sequencial da ata no PNCP; número sequencial gerado no momento que a ata foi inserida no PNCP
   * - 5
     - numeroAtaRegistroPreco
     - Texto (50)
     - Sim
     - Número da ata no sistema de origem
   * - 6
     - anoAta
     - Inteiro
     - Sim
     - Ano da ata
   * - 7
     - dataAssinatura
     - Data
     - Sim
     - Informar a data de assinatura da ata
   * - 8
     - dataInicioVigencia
     - Data
     - Sim
     - Informar a data de início de vigência da ata
   * - 9
     - dataFimVigencia
     - Data
     - Sim
     - Informar a data de fim de vigência da ata
   * - 10
     - cancelado
     - Booleano
     - Não
     - Indicador de cancelamento da ata; se omitido, assume valor "false"
   * - 11
     - dataCancelamento
     - Data e Hora
     - Não
     - Informar a data e hora de cancelamento da ata, caso o indicador de cancelamento seja verdadeiro
   * - 12
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para a retificação dos atributos da ata
   * - :kbd:`13`
     - :kbd:`possibilidadeAdesao`
     - :kbd:`Booleano`
     - :kbd:`Sim`
     - :kbd:`Indicador se a ata permite adesão de não participantes (false = não / true = sim)`

Dados de retorno
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - ataRegistroPreco
     - JSON
     - Dados da ata de registro de preço após alteração

Exemplo de Retorno
^^^^^^^^^^^^^^^^^^

.. code-block:: json

 
	 Retorno (headers HTTP):
	
	 access-control-allow-credentials: true
	 access-control-allow-headers: Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin,
	 access-control-allow-methods: GET,PUT,POST,DELETE,OPTIONS
	 access-control-allow-origin: *
	 cache-control: no-cache,no-store,max-age=0,must-revalidate
	 connection: keep-alive
	 content-type: application/json
	 date: Tue,27 Jul 2021 22:50:21 GMT
	 expires: 0
	 keep-alive: timeout=60
	 pragma: no-cache
	 transfer-encoding: chunked
	 x-content-type-options: nosniff
	 x-frame-options: DENY
	 x-xss-protection: 1; mode=block
	
	Retorno (corpo da requisição)
	{
	  "numeroAtaRegistroPreco": "1/2021",
	  "anoAta": 2021,
	  "dataAssinatura": "2021-07-27",
	  "dataVigenciaInicio": "2021-07-27",
	  "dataVigenciaFim": "2022-07-27",
	  "dataCancelamento": null,
	  "cancelado": false,
	  "dataPublicacaoPncp": "2021-07-27T19:45:57.969+00:00",
	  "dataInclusao": "2021-07-27T19:45:57.969+00:00",
	  "dataAtualizacao": "2021-07-27T22:50:20.352+00:00",
	  "sequencialAta": 1,
	  "numeroControlePNCP": "00394460000141-1-000001/2021-000001",
	  "orgaoEntidade": {
	    "cnpj": "00394460000141",
	    "razaoSocial": "Ministério da Economia",
	    "poderId": "E",
	    "esferaId": "F"
	  },
	  "orgaoSubRogado": null,
	  "unidadeOrgao": {
	    "ufNome": "Distrito Federal",
	    "ufSigla": "DF",
	    "municipioId": 5570,
	    "municipioNome": "Brasília",
	    "codigoUnidade": "1",
	    "nomeUnidade": "Unidade de serviços"
	  },
	  "unidadeSubRogada": null,
	  "modalidadeNome": "Leilão",
	  "objetoCompra": "Teste Teste",
	  "informacaoComplementarCompra": "slfkweofndfejf"
	}


Códigos de Retorno
^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 10 25 20
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
   * - 401
	 - Unauthorized
	 - Erro
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro
	 
**Retificar Parcialmente Ata de Registro de Preço**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Serviço que permite retificar parcialmente os dados de uma ata de Registro de Preço.**

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}
     - PATCH
	 

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
  :linenos:
  :emphasize-lines: 1-11

	{
	  "possibilidadeAdesao": true,
	  "justificativa": "motivo/justificativa para retificação da ata"
	}
	
	Para o cancelamento da ata:
	{
	  "cancelado": true,
	  "dataCancelamento": "2023-01-01T12:00:00",
	  "justificativa": "motivo/justificativa para cancelamento da ata"
	}

  
Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash
	:emphasize-lines: 1-4
		curl -X 'PATCH' '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1' \
		  -H 'accept: */*' -H 'Authorization: Bearer <TOKEN_AUTORIZACAO>' \
		  -H 'Content-Type: application/json' \
		  -d '@/home/objeto.json'




