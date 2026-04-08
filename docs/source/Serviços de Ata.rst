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
   * - :kbd:`1`
     - :kbd:`cnpj`
     - :kbd:`Texto (14)`
     - :kbd:`Sim`
     - :kbd:`CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação)`
   * - :kbd:`2`
     - :kbd:`anoCompra`
     - :kbd:`Inteiro`
     - :kbd:`Sim`
     - :kbd:`Ano da contratação`
   * - :kbd:`3`
     - :kbd:`sequencialCompra`
     - :kbd:`Inteiro`
     - :kbd:`Sim`
     - :kbd:`Sequencial da contratação no PNCP; número sequencial gerado no momento que a contratação foi inserida no PNCP`
   * - :kbd:`4`
     - :kbd:`sequencialAta`
     - :kbd:`Inteiro`
     - :kbd:`Sim`
     - :kbd:`Sequencial da ata no PNCP; número sequencial gerado no momento que a ata foi inserida no PNCP`
   * - :kbd:`5`
     - :kbd:`numeroAtaRegistroPreco`
     - :kbd:`Texto (50)`
     - :kbd:`Não`
     - :kbd:`Número da ata no sistema de origem`
   * - :kbd:`6`
     - :kbd:`anoAta`
     - :kbd:`Inteiro`
     - :kbd:`Não`
     - :kbd:`Ano da ata`
   * - :kbd:`7`
     - :kbd:`dataAssinatura`
     - :kbd:`Data`
     - :kbd:`Não`
     - :kbd:`Informar a data de assinatura da ata`
   * - :kbd:`8`
     - :kbd:`dataInicioVigencia`
     - :kbd:`Data`
     - :kbd:`Não`
     - :kbd:`Informar a data de início de vigência da ata`
   * - :kbd:`9`
     - :kbd:`dataFimVigencia`
     - :kbd:`Data`
     - :kbd:`Não`
     - :kbd:`Informar a data de fim de vigência da ata`
   * - :kbd:`10`
     - :kbd:`cancelado`
     - :kbd:`Booleano`
     - :kbd:`Não`
     - :kbd:`Indicador de cancelamento da ata; se omitido, assume valor "false"`
   * - :kbd:`11`
     - :kbd:`dataCancelamento`
     - :kbd:`Data e Hora`
     - :kbd:`Não`
     - :kbd:`Informar a data e hora de cancelamento da ata, caso o indicador de cancelamento seja verdadeiro`
   * - :kbd:`12`
     - :kbd:`possibilidadeAdesao`
     - :kbd:`Booleano`
     - :kbd:`Não`
     - :kbd:`Indicador se a ata permite adesão de não participantes (false = não / true = sim)`
   * - :kbd:`13`
     - :kbd:`justificativa`
     - :kbd:`Texto (255)`
     - :kbd:`Sim`
     - :kbd:`Motivo/justificativa para a retificação dos atributos da ata`


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
   * - :kbd:`1`
     - :kbd:`ataRegistroPreco`
     - :kbd:`JSON`
     - :kbd:`Dados da ata de registro de preço após alteração`

Códigos de retorno
^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 20 40 20
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - :kbd:`200`
     - :kbd:`OK`
     - :kbd:`Sucesso`
   * - :kbd:`400`
     - :kbd:`BadRequest`
     - :kbd:`Erro`
   * - :kbd:`401`
     - :kbd:`Unauthorized`
     - :kbd:`Erro`
   * - :kbd:`404`
     - :kbd:`NotFound`
     - :kbd:`Erro`
   * - :kbd:`422`
     - :kbd:`Unprocessable Entity`
     - :kbd:`Erro`
   * - :kbd:`500`
     - :kbd:`Internal Server Error`
     - :kbd:`Erro`

Excluir Ata de Registro de Preço
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite remover uma ata de registro de preço. **Não será permitida a exclusão da Ata quando a mesma possuir órgãos não participantes.**

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}
     - DELETE
	 

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
  :linenos:

	{
	  "justificativa": "motivo/justificativa para exclusão da ata"
	}
  

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -X 'DELETE' '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1' \
	  -H 'accept: */*' -H 'Authorization: Bearer **<TOKEN_AUTORIZACAO>**'


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
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para a exclusão da ata


Segue o conteúdo em **RST**, sem `:kbd:`:


Códigos de retorno
^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 20 40 20
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


Consultar Atas de Registro de Preço por Compra
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite recuperar as atas de Registro de Preço de uma contratação.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas
     - GET

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -X 'GET' '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas' \
	-H 'accept: */*'


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

Dados de retorno
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 30 20 45
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - Atas
     - Lista
     - Agrupador da lista de atas
   * - 1.1
     - numeroAtaRegistroPreco
     - Texto (50)
     - Número da ata no sistema de origem
   * - 1.2
     - anoAta
     - Inteiro
     - Ano da ata
   * - 1.3
     - dataAssinatura
     - Data
     - Data de assinatura da ata
   * - 1.4
     - dataVigenciaInicio
     - Data
     - Data de início de vigência da ata
   * - 1.5
     - dataVigenciaFim
     - Data
     - Data de fim de vigência da ata
   * - 1.6
     - dataCancelamento
     - Data
     - Data de cancelamento da ata
   * - 1.7
     - cancelado
     - Booleano
     - Indicador de cancelamento da ata
   * - 1.8
     - dataPublicacaoPncp
     - Data
     - Data de publicação da ata no PNCP
   * - 1.9
     - dataInclusao
     - Data
     - Data de inclusão do registro da ata no PNCP
   * - 1.10
     - dataAtualizacao
     - Data
     - Data da última atualização do registro da ata
   * - 1.11
     - sequencialAta
     - Inteiro
     - Número sequencial da ata, gerado pelo PNCP
   * - 1.12
     - numeroControlePNCP
     - String
     - Número de controle PNCP da ata
   * - 1.13
     - localCompra
     - String
     - Município e estado referentes à contratação
   * - 1.14
     - orgaoCompra
     - String
     - Órgão referente à contratação
   * - 1.15
     - orgaoSubRogadoCompra
     - String
     - Órgão sub-rogado referente à contratação
   * - 1.16
     - modalidadeNome
     - String
     - Modalidade referente à contratação
   * - 1.17
     - objetoCompra
     - String
     - Descrição do objeto referente à contratação
   * - 1.18
     - informacaoComplementarCompra
     - String
     - Informação complementar do objeto referente à contratação
   * - 1.19
     - dataAtualizacaoGlobal
     - Data
     - Data da última atualização global do registro da ata, considerando seus dependentes (documentos da ata)
   * - 1.20
     - usuarioNome
     - Texto
     - Nome da plataforma que publicou a ata no PNCP
   * - 1.21
     - possibilidadeAdesao
     - Booleano
     - Indicador se a ata permite adesão de não participantes (false = não / true = sim)


Consultar Ata de Registro de Preço
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite recuperar uma ata específica.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}
     - GET


Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -X 'GET' '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1' \
	-H 'accept: */*'


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


Dados de retorno
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 30 20 45
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - numeroAtaRegistroPreco
     - Texto (50)
     - Número da ata no sistema de origem
   * - 2
     - anoAta
     - Inteiro
     - Ano da ata
   * - 3
     - dataAssinatura
     - Data
     - Data de assinatura da ata
   * - 4
     - dataVigenciaInicio
     - Data
     - Data de início de vigência da ata
   * - 5
     - dataVigenciaFim
     - Data
     - Data de fim de vigência da ata
   * - 6
     - dataCancelamento
     - Data
     - Data de cancelamento da ata
   * - 7
     - cancelado
     - Booleano
     - Indicador de cancelamento da ata
   * - 8
     - dataPublicacaoPncp
     - Data
     - Data de publicação da ata no PNCP
   * - 9
     - dataInclusao
     - Data
     - Data de inclusão do registro da ata no PNCP
   * - 10
     - dataAtualizacao
     - Data
     - Data da última atualização do registro da ata
   * - 11
     - sequencialAta
     - Inteiro
     - Número sequencial da ata, gerado pelo PNCP
   * - 12
     - numeroControlePNCP
     - String
     - Número de controle PNCP da ata
   * - 13
     - localCompra
     - String
     - Município e estado referentes à contratação
   * - 14
     - orgaoCompra
     - String
     - Órgão referente à contratação
   * - 15
     - orgaoSubRogadoCompra
     - String
     - Órgão sub-rogado referente à contratação
   * - 16
     - modalidadeNome
     - String
     - Modalidade referente à contratação
   * - 17
     - objetoCompra
     - String
     - Descrição do objeto referente à contratação
   * - 18
     - informacaoComplementarCompra
     - String
     - Informação complementar do objeto referente à contratação
   * - 19
     - dataAtualizacaoGlobal
     - Data
     - Data da última atualização global do registro da ata, considerando seus dependentes (documentos da ata)
   * - 20
     - usuarioNome
     - Texto
     - Nome da plataforma que publicou a ata no PNCP
   * - :kbd:`21`
     - :kbd:`possibilidadeAdesao`
     - :kbd:`Booleano`
     - :kbd:`Indicador se a ata permite adesão de não participantes (false = não / true = sim)`


Inserir Documento de uma Ata
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite inserir/anexar documento/arquivo a uma Ata. O sistema permite o upload de arquivos com as extensões listadas na seção: Tabelas de domínio - Extensões de arquivos aceitos pelas APIs de Documento.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/arquivos
     - POST

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -X 'POST' '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1/arquivos' \
	  -H 'accept: */*' -H 'Titulo-Documento: teste doc' -H 'Tipo-Documento: 1' \
	  -H 'Authorization: Bearer<TOKEN_AUTORIZACAO>' \
	  -H 'Content-Type: multipart/form-data' \
	  -F 'arquivo=@10_coisas_que_todo_programador_Java_deve_saber.pdf;type=application/pdf'

Dados de entrada
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 20 25
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
     - Sequencial da contratação no PNCP; número gerado no momento em que a contratação foi inserida
   * - 4
     - sequencialAta
     - Inteiro
     - Sim
     - Sequencial da ata no PNCP; número gerado no momento em que a ata foi inserida
   * - 5
     - tituloDocumento
     - Texto (50)
     - Sim
     - Título do documento
   * - 6
     - tipoDocumento
     - Inteiro
     - Sim
     - Código da tabela de domínio tipo de documento
   * - 7
     - arquivo
     - String binária
     - Sim
     - String binária do arquivo

Dados de retorno
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
     - Endereço HTTP do recurso criado

Exemplo de Retorno
^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	Retorno:
	
	access-control-allow-credentials: true
	access-control-allow-headers: Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin,
	access-control-allow-methods: GET,PUT,POST,DELETE,OPTIONS
	access-control-allow-origin: *
	cache-control: no-cache,no-store,max-age=0,must-revalidate
	content-length: 0
	date: ?
	expires: 0
	location: https://treina.pncp.gov.br/api/pncp/v1/orgaos/10000000000003/compras/2021/1/atas/1/arquivos/1
	nome-bucket: ?
	pragma: no-cache
	strict-transport-security: max-age=?
	x-content-type-options: nosniff
	x-firefox-spdy: ?
	x-frame-options: DENY
	x-xss-protection: 1; mode=block

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

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
   * - 404
     - NotFound
     - Erro
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Excluir Documento de uma Ata
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite remover um documento em uma ata específica.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/arquivos/{sequencialDocumento}
     - DELETE
	 

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
  :linenos:
  
	  {
	     "justificativa": "motivo/justificativa para exclusão do documento da ata"
	  }


Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X DELETE --header "Authorization: Bearer access_token"
	"${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/atas/1/arquivos/1" -H "accept: */* -H "Content-Type: application/pdf"

Dados de entrada
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 20 25
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
     - Sequencial da contratação no PNCP; número gerado no momento em que a contratação foi inserida
   * - 4
     - sequencialAta
     - Inteiro
     - Sim
     - Sequencial da ata no PNCP; número gerado no momento em que a ata foi inserida
   * - 5
     - sequencialDocumento
     - Inteiro
     - Sim
     - Sequencial do documento da ata no PNCP; número gerado no momento em que o documento foi inserido
   * - 6
     - justificativa
     - Texto (255)
     - Sim
     - Motivo ou justificativa para a exclusão do documento da ata

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

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

Consultar Todos os Documentos de uma Ata
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite consultar a lista de documentos pertencentes a uma ata específica.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/arquivos
     - GET


Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/atas/1/arquivos" \
	 -H "Accept: */*”


Dados de entrada
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 20 25
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
     - Sequencial da contratação no PNCP; número gerado no momento em que a contratação foi inserida
   * - 4
     - sequencialAta
     - Inteiro
     - Sim
     - Sequencial da ata no PNCP; número gerado no momento em que a ata foi inserida

Dados de retorno
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
     - documentos
     - Lista
     - Lista de documentos
   * - 1.1
     - sequencialDocumento
     - Inteiro
     - Número sequencial atribuído ao arquivo
   * - 1.2
     - url
     - Texto
     - URL para download do arquivo
   * - 1.3
     - tipoDocumentoId
     - Inteiro
     - Código do tipo de documento conforme PNCP
   * - 1.4
     - tipoDocumentoNome
     - Texto
     - Nome do tipo de documento conforme PNCP
   * - 1.5
     - titulo
     - Texto
     - Título referente ao arquivo
   * - 1.6
     - dataPublicacaoPncp
     - Data
     - Data de publicação do arquivo no portal PNCP

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
   * - 404
     - NotFound
     - Erro
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Consultar Documento de uma Ata
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite consultar um documento específico pertencente a uma ata.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/arquivos/{sequencialDocumento}
     - GET

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/atas/1/arquivos/1" \
	 -H "Accept: */*”

Dados de entrada
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 20 25
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
     - Sequencial da contratação no PNCP; número gerado no momento em que a contratação foi inserida
   * - 4
     - sequencialAta
     - Inteiro
     - Sim
     - Sequencial da ata no PNCP; número gerado no momento em que a ata foi inserida
   * - 5
     - sequencialDocumento
     - Inteiro
     - Sim
     - Sequencial do documento da ata no PNCP; número gerado no momento em que o documento foi inserido

Dados de retorno
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
     - arquivo
     - String binária
     - String binária do arquivo

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
   * - 404
     - NotFound
     - Erro
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Consultar Histórico da Ata
~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite consultar todos os eventos de uma ata específica e de seus documentos/arquivos.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/atas/{sequencialAta}/historico
     - GET
	 
Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/atas/1/historico" \
	 -H "accept: */*"

Dados de entrada
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
     - cnpj
     - Texto (14)
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação)
   * - 2
     - ano
     - Inteiro
     - Ano da contratação
   * - 3
     - sequencial
     - Inteiro
     - Sequencial da contratação no PNCP
   * - 4
     - sequencialAta
     - Inteiro
     - Sequencial da ata no PNCP
   * - 5
     - pagina
     - Inteiro
     - Utilizado para paginação dos itens; número da página
   * - 6
     - tamanhoPagina
     - Inteiro
     - Utilizado para paginação dos itens; quantidade de itens por página

Dados de retorno
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
     - eventos
     - Lista
     - Lista de eventos
   * - 1.1
     - compraOrgaoCnpj
     - String
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação ou alienação de bens)
   * - 1.2
     - compraAno
     - Inteiro
     - Ano da contratação
   * - 1.3
     - compraSequencial
     - Inteiro
     - Sequencial da contratação no PNCP; número gerado no momento em que a contratação foi inserida
   * - 1.4
     - logManutencaoDataInclusao
     - Data/Hora
     - Data e hora da operação de inclusão, retificação ou exclusão do recurso
   * - 1.5
     - tipoLogManutencao
     - Inteiro
     - Código do tipo de operação efetuada
   * - 1.6
     - tipoLogManutencaoNome
     - String
     - Nome da operação efetuada: 0 - Inclusão; 1 - Retificação; 2 - Exclusão
   * - 1.7
     - categoriaLogManutencao
     - Inteiro
     - Código do tipo de recurso que sofreu a operação
   * - 1.8
     - categoriaLogManutencaoNome
     - String
     - Nome do recurso que sofreu a operação: 1 - Contratação; 2 - Ata; 3 - Contrato; 4 - Item de Contratação; 5 - Resultado de Item de Contratação; 6 - Documento de Contratação; 7 - Documento de Ata; 8 - Documento de Contrato; 9 - Termo de Contrato; 10 - Documento de Termo de Contrato
   * - 1.9
     - anoAta
     - Inteiro
     - Ano da ata
   * - 1.10
     - numeroAtaRegistroPreco
     - String
     - Número da ata
   * - 1.11
     - documentoAtaSequencial
     - Inteiro
     - Sequencial do documento da ata no PNCP; retornado caso ``categoriaLogManutencao = 7``
   * - 1.12
     - documentoAtaTipo
     - String
     - Nome do tipo de documento conforme PNCP; retornado caso ``categoriaLogManutencao = 7``
   * - 1.13
     - documentoAtaTitulo
     - String
     - Título referente ao arquivo ou documento; retornado caso ``categoriaLogManutencao = 7``
   * - 1.14
     - usuarioNome
     - String
     - Nome do usuário ou sistema que efetuou a operação
   * - 1.15
     - justificativa
     - String
     - Motivo ou justificativa da operação de retificação ou exclusão do recurso

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
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro


Consultar Contratos de Ata de Registro de Preço
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. container:: destaque-amarelo

	Serviço que permite consultar todos os contratos/empenhos vinculados a uma ata de registro de preço específica.

\

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/atas/{sequencialAta}/contratos
     - GET
	 

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash
	:linenos:
  	:emphasize-lines: 1,2

	curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/atas/1/contratos" \
	 -H "accept: */*"

Dados de entrada
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - :kbd:`1`
     - :kbd:`cnpj`
     - :kbd:`Texto (14)`
     - :kbd:`CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação)`
   * - :kbd:`2`
     - :kbd:`ano`
     - :kbd:`Inteiro`
     - :kbd:`Ano da contratação`
   * - :kbd:`3`
     - :kbd:`sequencial`
     - :kbd:`Inteiro`
     - :kbd:`Sequencial da contratação no PNCP`
   * - :kbd:`4`
     - :kbd:`sequencialAta`
     - :kbd:`Inteiro`
     - :kbd:`Sequencial da ata no PNCP`
   * - :kbd:`5`
     - :kbd:`pagina`
     - :kbd:`Inteiro`
     - :kbd:`Utilizado para paginação dos itens. Número da página`
   * - :kbd:`6`
     - :kbd:`tamanhoPagina`
     - :kbd:`Inteiro`
     - :kbd:`Utilizado para paginação dos itens. Quantidade de itens por página`

Dados de retorno
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - :kbd:`1`
     - :kbd:`data`
     - :kbd:``
     - :kbd:`Dados retornados pela consulta`
   * - :kbd:`1.1`
     - :kbd:`numeroControle`
     - :kbd:`Texto`
     - :kbd:`Número de controle PNCP do contrato/empenho (id contrato PNCP)`
   * - :kbd:`1.2`
     - :kbd:`sequencialContrato`
     - :kbd:`Inteiro`
     - :kbd:`Sequencial do contrato/empenho no PNCP; número gerado no momento em que foi inserido`
   * - :kbd:`1.3`
     - :kbd:`frutoAdesao`
     - :kbd:`Booleano`
     - :kbd:`Indicador se o contrato/empenho é fruto de adesão a ata (False-Não / True-Sim)`
   * - :kbd:`1.4`
     - :kbd:`orgaoEntidade`
     - :kbd:``
     - :kbd:`Dados do órgão/entidade do contrato/empenho`
   * - :kbd:`1.4.1`
     - :kbd:`cnpj`
     - :kbd:`Texto`
     - :kbd:`CNPJ do órgão/entidade`
   * - :kbd:`1.4.2`
     - :kbd:`nome`
     - :kbd:`Texto`
     - :kbd:`Nome do órgão/entidade`
   * - :kbd:`1.5`
     - :kbd:`unidadeExecutora`
     - :kbd:``
     - :kbd:`Dados da unidade administrativa`
   * - :kbd:`1.5.1`
     - :kbd:`codigo`
     - :kbd:`Texto`
     - :kbd:`Código da unidade administrativa`
   * - :kbd:`1.5.2`
     - :kbd:`nomeUnidade`
     - :kbd:`Texto`
     - :kbd:`Nome da unidade administrativa`
   * - :kbd:`1.5.3`
     - :kbd:`localidade`
     - :kbd:``
     - :kbd:`Localidade da unidade administrativa`
   * - :kbd:`1.5.3.1`
     - :kbd:`uf`
     - :kbd:`Texto`
     - :kbd:`Unidade federativa`
   * - :kbd:`1.5.3.2`
     - :kbd:`codigoIbgeMunicipio`
     - :kbd:`Texto`
     - :kbd:`Código IBGE do município`
   * - :kbd:`1.5.3.3`
     - :kbd:`nomeMunicipio`
     - :kbd:`Texto`
     - :kbd:`Nome do município`
   * - :kbd:`1.6`
     - :kbd:`numeroContratoEmpenho`
     - :kbd:`Texto`
     - :kbd:`Número do contrato ou empenho`
   * - :kbd:`1.7`
     - :kbd:`anoContrato`
     - :kbd:`Inteiro`
     - :kbd:`Ano do contrato ou empenho`
   * - :kbd:`1.8`
     - :kbd:`objetoContrato`
     - :kbd:`Texto`
     - :kbd:`Descrição do objeto do contrato ou empenho`
   * - :kbd:`1.9`
     - :kbd:`dataAssinatura`
     - :kbd:`Data`
     - :kbd:`Data da assinatura`
   * - :kbd:`1.10`
     - :kbd:`dataVigenciaInicio`
     - :kbd:`Data`
     - :kbd:`Data inicial de vigência`
   * - :kbd:`1.11`
     - :kbd:`dataVigenciaFim`
     - :kbd:`Data`
     - :kbd:`Data final de vigência`
   * - :kbd:`1.12`
     - :kbd:`valorGlobal`
     - :kbd:``
     - :kbd:`Valor global do contrato ou empenho`
   * - :kbd:`1.13`
     - :kbd:`dataPublicacaoPncp`
     - :kbd:`Data/Hora`
     - :kbd:`Data e hora da inclusão no PNCP`
   * - :kbd:`1.14`
     - :kbd:`usuarioNome`
     - :kbd:`String`
     - :kbd:`Nome do usuário ou sistema que efetuou a operação`
   * - :kbd:`2`
     - :kbd:`totalRegistros`
     - :kbd:`Inteiro`
     - :kbd:`Total de registros encontrados`
   * - :kbd:`3`
     - :kbd:`totalPaginas`
     - :kbd:`Inteiro`
     - :kbd:`Total de páginas`
   * - :kbd:`4`
     - :kbd:`numeroPagina`
     - :kbd:`Inteiro`
     - :kbd:`Número da página consultada`
   * - :kbd:`5`
     - :kbd:`paginasRestantes`
     - :kbd:`Inteiro`
     - :kbd:`Quantidade de páginas restantes`
   * - :kbd:`6`
     - :kbd:`empty`
     - :kbd:`Booleano`
     - :kbd:`Indicador se a lista está vazia`

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 10 25 20
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - :kbd:`200`
     - :kbd:`OK`
     - :kbd:`Sucesso`
   * - :kbd:`400`
     - :kbd:`BadRequest`
     - :kbd:`Erro`
   * - :kbd:`422`
     - :kbd:`Unprocessable Entity`
     - :kbd:`Erro`
   * - :kbd:`500`
     - :kbd:`Internal Server Error`
     - :kbd:`Erro`

Inserir Parte Envolvida na Ata de Registro de Preço
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. container:: destaque-amarelo

	Serviço que permite inserir uma lista de partes envolvidas a uma ata de registro de preço.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/partesenvolvidas
     - POST
	 

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

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
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash
	:linenos:
  	:emphasize-lines: 1,2

		curl -X 'POST' '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1/partesenvolvidas' \
		  -H 'accept: */*' -H 'Authorization: Bearer<TOKEN_AUTORIZACAO>' \?????????????????????????


Dados de entrada
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 20 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição

   * - :kbd:`1`
     - :kbd:`cnpj`
     - :kbd:`Texto (14)`
     - :kbd:`Sim`
     - :kbd:`CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação)`
   * - :kbd:`2`
     - :kbd:`anoCompra`
     - :kbd:`Inteiro`
     - :kbd:`Sim`
     - :kbd:`Ano da contratação`
   * - :kbd:`3`
     - :kbd:`sequencialCompra`
     - :kbd:`Inteiro`
     - :kbd:`Sim`
     - :kbd:`Sequencial da contratação no PNCP; número gerado no momento em que a contratação foi inserida`
   * - :kbd:`4`
     - :kbd:`sequencialAta`
     - :kbd:`Inteiro`
     - :kbd:`Sim`
     - :kbd:`Sequencial da ata no PNCP; número gerado no momento em que a ata foi inserida`
   * - :kbd:`5`
     - :kbd:`partesEnvolvidas`
     - :kbd:`Lista`
     - :kbd:`Não`
     - :kbd:`Lista de partes envolvidas`
   * - :kbd:`5.1`
     - :kbd:`tipoParteEnvolvidaId`
     - :kbd:`Inteiro`
     - :kbd:`Não`
     - :kbd:`Código do tipo de parte envolvida: 1 - Gerenciadora; 2 - Participante; 3 - Não participante`
   * - :kbd:`5.2`
     - :kbd:`cnpj`
     - :kbd:`Texto (14)`
     - :kbd:`Não`
     - :kbd:`CNPJ do órgão`
   * - :kbd:`5.3`
     - :kbd:`codigoUnidadeCompradora`
     - :kbd:`Texto (30)`
     - :kbd:`Não`
     - :kbd:`Código da unidade administrativa`


Códigos de Retorno
^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 10 25 20
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - :kbd:`201`
     - :kbd:`Created`
     - :kbd:`Sucesso`
   * - :kbd:`400`
     - :kbd:`BadRequest`
     - :kbd:`Erro`
   * - :kbd:`401`
     - :kbd:`Unauthorized`
     - :kbd:`Erro`
   * - :kbd:`404`
     - :kbd:`NotFound`
     - :kbd:`Erro`
   * - :kbd:`422`
     - :kbd:`Unprocessable Entity`
     - :kbd:`Erro`
   * - :kbd:`500`
     - :kbd:`Internal Server Error`
     - :kbd:`Erro`


Excluir Parte Envolvida em Ata de Registro de Preço
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. container:: destaque-amarelo

	Serviço que recupera os dados de uma parte envolvida específica de uma ata de registro de preço.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/partesenvolvidas/{cnpjOrgao}/{codUnidade}/{tipoParteEnvolvida}
     - DELETE
	 

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
  :linenos:
  :emphasize-lines: 1-3

		{
		  "justificativa": "Motivo/justificativa para exclusão da parte envolvida"
		}

  
Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash
	:linenos:
 	:emphasize-lines: 1,2

	curl -k -X DELETE --header "Authorization: Bearer access_token"
	"${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/atas/1/partesenvolvidas/10000000000003/1/2" -H "accept: */* -H "Content-Type: application/pdf"

Dados de entrada
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 20 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição

   * - :kbd:`1`
     - :kbd:`cnpj`
     - :kbd:`Texto (14)`
     - :kbd:`Sim`
     - :kbd:`CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação)`
   * - :kbd:`2`
     - :kbd:`anoCompra`
     - :kbd:`Inteiro`
     - :kbd:`Sim`
     - :kbd:`Ano da contratação`
   * - :kbd:`3`
     - :kbd:`sequencialCompra`
     - :kbd:`Inteiro`
     - :kbd:`Sim`
     - :kbd:`Sequencial da contratação no PNCP; número gerado no momento em que a contratação foi inserida`
   * - :kbd:`4`
     - :kbd:`sequencialAta`
     - :kbd:`Inteiro`
     - :kbd:`Sim`
     - :kbd:`Sequencial da ata no PNCP; número gerado no momento em que a ata foi inserida`
   * - :kbd:`5`
     - :kbd:`cnpjOrgao`
     - :kbd:`Texto (14)`
     - :kbd:`Sim`
     - :kbd:`CNPJ do órgão ou entidade da parte envolvida`
   * - :kbd:`6`
     - :kbd:`codUnidade`
     - :kbd:`Texto (30)`
     - :kbd:`Sim`
     - :kbd:`Código da unidade administrativa da parte envolvida`
   * - :kbd:`7`
     - :kbd:`tipoParteEnvolvida`
     - :kbd:`Inteiro`
     - :kbd:`Sim`
     - :kbd:`Código do tipo da parte envolvida`
   * - :kbd:`8`
     - :kbd:`justificativa`
     - :kbd:`Texto (255)`
     - :kbd:`Sim`
     - :kbd:`Motivo ou justificativa para a exclusão da parte envolvida da ata`

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 10 25 20
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - :kbd:`204`
     - :kbd:`No Content`
     - :kbd:`Sucesso`
   * - :kbd:`401`
     - :kbd:`Unauthorized`
     - :kbd:`Erro`
   * - :kbd:`404`
     - :kbd:`NotFound`
     - :kbd:`Erro`
   * - :kbd:`422`
     - :kbd:`Unprocessable Entity`
     - :kbd:`Erro`
   * - :kbd:`500`
     - :kbd:`Internal Server Error`
     - :kbd:`Erro`

Consultar Parte Envolvida em Ata de Registro de Preço
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. container:: destaque-amarelo

	Serviço que recupera os dados de uma parte envolvida específica de uma ata de registro de preço.


Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/partesenvolvidas/{cnpjOrgao}/{codUnidade}/{tipoParteEnvolvida}
     - GET

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash
	:linenos:
	:emphasize-lines: 1,2

		curl -X 'GET' '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1/partesenvolvidas/00394460000141/1/1' \
		-H 'accept: */*'

Dados de entrada
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 20 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição

   * - :kbd:`1`
     - :kbd:`cnpj`
     - :kbd:`Texto (14)`
     - :kbd:`Sim`
     - :kbd:`CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação)`
   * - :kbd:`2`
     - :kbd:`anoCompra`
     - :kbd:`Inteiro`
     - :kbd:`Sim`
     - :kbd:`Ano da contratação`
   * - :kbd:`3`
     - :kbd:`sequencialCompra`
     - :kbd:`Inteiro`
     - :kbd:`Sim`
     - :kbd:`Sequencial da contratação no PNCP; número gerado no momento em que a contratação foi inserida`
   * - :kbd:`4`
     - :kbd:`sequencialAta`
     - :kbd:`Inteiro`
     - :kbd:`Sim`
     - :kbd:`Sequencial da ata no PNCP; número gerado no momento em que a ata foi inserida`
   * - :kbd:`5`
     - :kbd:`cnpjOrgao`
     - :kbd:`Texto (14)`
     - :kbd:`Sim`
     - :kbd:`CNPJ do órgão ou entidade da parte envolvida`
   * - :kbd:`6`
     - :kbd:`codUnidade`
     - :kbd:`Texto (30)`
     - :kbd:`Sim`
     - :kbd:`Código da unidade administrativa da parte envolvida`
   * - :kbd:`7`
     - :kbd:`tipoParteEnvolvida`
     - :kbd:`Inteiro`
     - :kbd:`Sim`
     - :kbd:`Código do tipo da parte envolvida`

Dados de retorno
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - :kbd:`1`
     - :kbd:`dataInclusao`
     - :kbd:`Data/Hora`
     - :kbd:`Data e hora da inclusão da informação no PNCP`
   * - :kbd:`2`
     - :kbd:`tipoParteEnvolvida`
     - 
     - :kbd:`Tipo de parte envolvida`
   * - :kbd:`2.1`
     - :kbd:`id`
     - :kbd:`Inteiro`
     - :kbd:`Código do tipo de parte envolvida`
   * - :kbd:`2.2`
     - :kbd:`nome`
     - :kbd:`Texto`
     - :kbd:`Nome do tipo de parte envolvida`
   * - :kbd:`2.3`
     - :kbd:`descricao`
     - :kbd:`Texto`
     - :kbd:`Descrição do tipo de parte envolvida`
   * - :kbd:`3`
     - :kbd:`orgao`
     - 
     - :kbd:`Dados do órgão ou entidade`
   * - :kbd:`3.1`
     - :kbd:`cnpj`
     - :kbd:`Texto`
     - :kbd:`CNPJ do órgão ou entidade`
   * - :kbd:`3.2`
     - :kbd:`nome`
     - :kbd:`Texto`
     - :kbd:`Nome do órgão ou entidade`
   * - :kbd:`4`
     - :kbd:`unidade`
     - 
     - :kbd:`Dados da unidade administrativa`
   * - :kbd:`4.1`
     - :kbd:`codigo`
     - :kbd:`Texto`
     - :kbd:`Código da unidade administrativa`
   * - :kbd:`4.2`
     - :kbd:`nomeUnidade`
     - :kbd:`Texto`
     - :kbd:`Nome da unidade administrativa`
   * - :kbd:`4.3`
     - :kbd:`localidade`
     - 
     - :kbd:`Localidade da unidade administrativa`
   * - :kbd:`4.3.1`
     - :kbd:`uf`
     - :kbd:`Texto`
     - :kbd:`Unidade federativa do município`
   * - :kbd:`4.3.2`
     - :kbd:`codigoIbgeMunicipio`
     - :kbd:`Texto`
     - :kbd:`Código IBGE do município`
   * - :kbd:`4.3.3`
     - :kbd:`nomeMunicipio`
     - :kbd:`Texto`
     - :kbd:`Nome do município`

Consultar Partes envolvidas em Ata de Registro de Preço
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. container:: destaque-amarelo

	Serviço que recupera a lista de partes envolvida em uma ata de registro de preço específica.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/partesenvolvidas
     - GET


Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash
	:linenos:
  	:emphasize-lines: 1,2

	curl -X 'GET' '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1/partesenvolvidas' \
	-H 'accept: */*'


Dados de entrada
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 20 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição

   * - :kbd:`1`
     - :kbd:`cnpj`
     - :kbd:`Texto (14)`
     - :kbd:`Sim`
     - :kbd:`CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação)`
   * - :kbd:`2`
     - :kbd:`anoCompra`
     - :kbd:`Inteiro`
     - :kbd:`Sim`
     - :kbd:`Ano da contratação`
   * - :kbd:`3`
     - :kbd:`sequencialCompra`
     - :kbd:`Inteiro`
     - :kbd:`Sim`
     - :kbd:`Sequencial da contratação no PNCP; número gerado no momento em que a contratação foi inserida`
   * - :kbd:`4`
     - :kbd:`sequencialAta`
     - :kbd:`Inteiro`
     - :kbd:`Sim`
     - :kbd:`Sequencial da ata no PNCP; número gerado no momento em que a ata foi inserida`
   * - :kbd:`5`
     - :kbd:`pagina`
     - :kbd:`Inteiro`
     - :kbd:`Não`
     - :kbd:`Número da página a ser retornada quando utilizada a paginação`
   * - :kbd:`6`
     - :kbd:`tamanhoPagina`
     - :kbd:`Inteiro`
     - :kbd:`Não`
     - :kbd:`Quantidade de partes envolvidas a serem retornadas na paginação quando informado`

Dados de retorno
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - :kbd:`1`
     - :kbd:`data`
     - :kbd:`Lista`
     - :kbd:`Lista com os dados das partes envolvidas de uma ata de registro de preço`
   * - :kbd:`1.1`
     - :kbd:`dataInclusao`
     - :kbd:`Data/Hora`
     - :kbd:`Data e hora da inclusão da informação no PNCP`
   * - :kbd:`1.2`
     - :kbd:`tipoParteEnvolvida`
     - 
     - :kbd:`Tipo de parte envolvida`
   * - :kbd:`1.2.1`
     - :kbd:`id`
     - :kbd:`Inteiro`
     - :kbd:`Código do tipo de parte envolvida`
   * - :kbd:`1.2.2`
     - :kbd:`nome`
     - :kbd:`Texto`
     - :kbd:`Nome do tipo de parte envolvida`
   * - :kbd:`1.2.3`
     - :kbd:`descricao`
     - :kbd:`Texto`
     - :kbd:`Descrição do tipo de parte envolvida`
   * - :kbd:`1.3`
     - :kbd:`orgao`
     - 
     - :kbd:`Dados do órgão ou entidade`
   * - :kbd:`1.3.1`
     - :kbd:`cnpj`
     - :kbd:`Texto`
     - :kbd:`CNPJ do órgão ou entidade`
   * - :kbd:`1.3.2`
     - :kbd:`nome`
     - :kbd:`Texto`
     - :kbd:`Nome do órgão ou entidade`
   * - :kbd:`1.4`
     - :kbd:`unidade`
     - 
     - :kbd:`Dados da unidade administrativa`
   * - :kbd:`1.4.1`
     - :kbd:`codigo`
     - :kbd:`Texto`
     - :kbd:`Código da unidade administrativa`
   * - :kbd:`1.4.2`
     - :kbd:`nomeUnidade`
     - :kbd:`Texto`
     - :kbd:`Nome da unidade administrativa`
   * - :kbd:`1.4.3`
     - :kbd:`localidade`
     - 
     - :kbd:`Localidade da unidade administrativa`
   * - :kbd:`1.4.3.1`
     - :kbd:`uf`
     - :kbd:`Texto`
     - :kbd:`Unidade federativa do município`
   * - :kbd:`1.4.3.2`
     - :kbd:`codigoIbgeMunicipio`
     - :kbd:`Texto`
     - :kbd:`Código IBGE do município`
   * - :kbd:`1.4.3.3`
     - :kbd:`nomeMunicipio`
     - :kbd:`Texto`
     - :kbd:`Nome do município`
   * - :kbd:`2`
     - :kbd:`totalRegistros`
     - :kbd:`Inteiro`
     - :kbd:`Total de registros de partes envolvidas encontrados`
   * - :kbd:`3`
     - :kbd:`totalPaginas`
     - :kbd:`Inteiro`
     - :kbd:`Total de páginas`
   * - :kbd:`4`
     - :kbd:`numeroPagina`
     - :kbd:`Inteiro`
     - :kbd:`Número da página consultada`
   * - :kbd:`5`
     - :kbd:`paginasRestantes`
     - :kbd:`Inteiro`
     - :kbd:`Quantidade de páginas restantes`
   * - :kbd:`6`
     - :kbd:`empty`
     - :kbd:`Booleano`
     - :kbd:`Indicador se a lista está vazia`
