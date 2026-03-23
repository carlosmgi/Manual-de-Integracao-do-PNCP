Serviços de Órgão/Entidade
==========================

Incluir Órgão
~~~~~~~~~~~~~

Serviço **destinado exclusivamente aos administradores do PNCP** que permite inserir um órgão/entidade que eventualmente não se encontre nos repositórios do PNCP, ou seja, o portal possui uma base de dados com as informações dos Órgãos ou Entes da Federação. No entanto, caso o Órgão ou Ente não esteja incluso nessa base de dados o usuário pode utilizar este serviço com vistas a inclusão. 

**Observação:** Este serviço não pode ser confundido com o serviço 6.1.1., que cadastra a lista de CNPJs dos entes autorizados (órgão) o qual o usuário estar-se-á apto a divulgar informações. 

A partir de 25/08/2023 este serviço está integrado com o sistema CNPJ bastando informar apenas o número de CNPJ do órgão. 
**Observação:** não está disponível para plataformas públicas e privadas a desde 18/08/2025.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos 
     - POST
	 
Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
  :linenos:
  :emphasize-lines: 5,6
	{
		"cnpj": "10000000000003" 
	} 
  
Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X POST --header "Authorization: Bearer access_token" 
	"${BASE_URL}/v1/orgaos" -H "accept: */*" -H "Content-Type: application/json" 
	--data "@/home/objeto.json" 

Dados de entrada
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
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
     - CNPJ do órgão

Dados de retorno
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição

   * - 1
     - location
     - Texto (255)
     - Sim
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
	location: https://treina.pncp.gov.br/api/pncp/v1/orgaos/1 
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
   * - 200
     - OK
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 422
     - Unprocessable Entity
     - NotFound
   * - 500
     - Internal Server Error
     - Erro

Atualizar Órgão 
~~~~~~~~~~~~~~~

Serviço **destinado exclusivamente aos administradores do PNCP** que permite atualizar os dados de um órgão/entidade no repositório do PNCP que eventualmente esteja 
desatualizado. 

**Observação:** não está disponível para plataformas privadas a partir desde 18/08/2025.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos
     - PUT	 

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
  :linenos:
  :emphasize-lines: 5,6
	{ 
		"cnpj": "10000000000003" 
	}  

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X PUT --header "Authorization: Bearer access_token" 
	"${BASE_URL}/v1/orgaos" -H "accept: */*" -H "Content-Type: application/json" 
	--data "@/home/objeto.json"

Dados de entrada
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
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
     - CNPJ do órgão

Dados de retorno
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição

   * - 1
     - location
     - Texto (255)
     - Sim
     - Endereço HTTP do recurso criado

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
     - NotFound
   * - 500
     - Internal Server Error
     - Erro

Consultar Órgão por CNPJ
~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite consultar um órgão pelo seu CNPJ.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj} 
     - GET	 

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

   curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003" 
   -H "accept: */*" 

Dados de entrada
^^^^^^^^^^^^^^^^

.. note::
   Informar o parâmetro ``cnpj`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
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
     - CNPJ do órgão

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
     - cnpj
     - Texto (14)
     - CNPJ do órgão
   * - 2
     - razaoSocial
     - Texto (100)
     - Razão social do órgão

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
     - NotFound
   * - 500
     - Internal Server Error
     - Erro

Incluir Unidade
~~~~~~~~~~~~~~~

Serviço que permite inserir uma unidade em um órgão/entidade.
As unidades são divisões administrativas que realizam as contratações e celebram os contratos. Todo órgão/entidade deverá ter cadastrado ao menos uma unidade no PNCP.
Para a inclusão de nova unidade, a plataforma deve ter o órgão/entidade habilitado como ente autorizado.

**Exemplo:**
- Órgão: Município de Itapuranga
- Unidade Administrativa: Fundo Municipal de Assistência Social
Para unidades localizadas fora do território brasileiro, foi incluído o código genérico ``9097071`` para ser cadastrado no campo ``codigoIBGE``.
Será retornado nome do município ``Exterior`` e UF ``EX``.

.. warning::

   Disponível apenas no ambiente de treinamento/homologação.
   No ambiente de produção, utilize o procedimento do item 6.2.9 – Gestão de Órgão e Entidade.

.. figure:: ../../img/Incluir_unidade_administrativa.jpg
	:width: 80%
	:align: center
	:alt: Incluir Unidade Administrativa

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/unidades
     - POST
	 

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
  :linenos:
  :emphasize-lines: 5,6
	{ 
		"codigoIBGE": "1000001", 
		"codigoUnidade": "1", 
		"nomeUnidade": "Unidade administrativa" 
	}
  

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

   curl -k -X POST --header "Authorization: Bearer access_token" 
   "${BASE_URL}/v1/orgaos/10000000000003/unidades" -H "accept: */*" -H "Content-Type: 
   application/json" --data "@/home/objeto.json"

Dados de entrada
^^^^^^^^^^^^^^^^

.. note::
   A URL possui o parâmetro ``cnpj``.

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
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
     - CNPJ do órgão ao qual a unidade será vinculada
   * - 2
     - codigoIBGE
     - Texto (7)
     - Sim
     - Código do município definido pelo IBGE ou utilizar o código ``9097071`` para localidade no exterior
   * - 3
     - codigoUnidade
     - Texto (30)
     - Sim
     - Código da unidade administrativa a ser vinculada (definido pelo próprio órgão)
   * - 4
     - nomeUnidade
     - Texto (100)
     - Sim
     - Nome da unidade administrativa

Dados de retorno
^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição

   * - 1
     - location
     - Texto (255)
     - Sim
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
	location: https://treina.pncp.gov.br/api/pncp/v1/orgaos/10000000000003/unidades/1 
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
   * - 200
     - OK
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 422
     - Unprocessable Entity
     - NotFound
   * - 500
     - Internal Server Error
     - Erro

Atualizar Unidade
~~~~~~~~~~~~~~~~~

Serviço que permite atualizar os dados (nome da unidade e código IBGE do município) de uma unidade em um órgão/entidade. 
Incluído no PNCP o código genérico 9097071 a ser usado como codigoIBGE possibilitando inclusão de Unidade localizada no exterior. Será retornado nome do 
município “Exterior” e UF “EX”. 

.. warning::

	Disponível apenas no ambiente de treinamento/homologação. No ambiente de produção, utilize o procedimento do item 6.2.9 – Gestão de Órgão e Entidade. 

.. figure:: ../../img/Editar_unidade_administrativa.jpg
	:width: 80%
	:align: center
	:alt: Editar Unidade Administrativa

.. warning::
	- Status: Ativar/Inativar 
	- Nome da Unidade: campo alfanumérico de livre escolha; 
	- Código Unidade: campo único para o órgão alfanumérico de livre escolha (não pode ser editado); 
	- Código IBGE: Códigos de Municípios do IBGE composto de 7 dígitos, sendo os dois primeiros referentes ao código da Unidade da Federação. 	`https://www.ibge.gov.br/explica/codigos-dos-municipios.php <https://www.ibge.gov.br/explica/codigos-dos-municipios.php>`_

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/unidades
     - PUT	 

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
  :linenos:
  :emphasize-lines: 5,6
  	{ 
  		"codigoUnidade": "1", 
  		"nomeUnidade": "Unidade administrativa", 
  		"codigoIBGE": "1000001" 
	}
  

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

   curl -k -X PUT --header "Authorization: Bearer access_token" 
	"${BASE_URL}/v1/orgaos/10000000000003 /unidades" -H "accept: */*" -H "Content-Type: 
	application/json" --data "@/home/objeto.json"

Dados de entrada
^^^^^^^^^^^^^^^^

.. note::
   A URL possui o parâmetro ``cnpj``.

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
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
     - CNPJ do órgão ao qual a unidade será vinculada
   * - 2
     - codigoUnidade
     - Texto (30)
     - Sim
     - Código da unidade administrativa a ser vinculada (definido pelo próprio órgão). Obs: dado não atualizável
   * - 3
     - nomeUnidade
     - Texto (100)
     - Sim
     - Nome da unidade administrativa
   * - 4
     - codigoIBGE
     - Texto (7)
     - Sim
     - Código do município definido pelo IBGE ou utilizar o código ``9097071`` para localidade no exterior

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
     - Endereço HTTP do recurso atualizado

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
     - NotFound
   * - 500
     - Internal Server Error
     - Erro

Consultar Unidade
~~~~~~~~~~~~~~~~~

Serviço que permite consultar uma unidade pertencente a um órgão/entidade a partir de seu código. 

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/unidades/{codigoUnidade} 
     - GET
	 

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X GET 
	"${BASE_URL}/v1/orgaos/10000000000003/unidades/1" -H "accept: */*" 

Dados de Entrada
^^^^^^^^^^^^^^^^

.. note::

   A URL possui os parâmetros ``cnpj`` e ``codigoUnidade``.

.. list-table::
   :width: 100%
   :widths: 5 25 15 10 45
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
     - CNPJ do órgão
   * - 2
     - codigoUnidade
     - Texto (30)
     - Sim
     - Código da unidade administrativa responsável pelas contratações

Dados de Retorno
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
     - id
     - Inteiro
     - Identificador da Unidade Administrativa
   * - 2
     - orgao
     - 
     - Dados do Órgão ao qual a unidade está vinculada
   * - 2.1
     - id
     - Inteiro
     - Identificador do Órgão
   * - 2.2
     - cnpj
     - Texto (14)
     - CNPJ do Órgão
   * - 2.3
     - razaoSocial
     - Texto (100)
     - Razão Social
   * - 2.4
     - cnpjEnteResponsavel
     - Texto (14)
     - CNPJ do Ente Responsável
   * - 2.5
     - poderId
     - Texto
     - Código do poder a que pertence o Órgão. L - Legislativo; E - Executivo; J - Judiciário
   * - 2.6
     - esferaId
     - Texto
     - Código da esfera a que pertence o Órgão. F - Federal; E - Estadual; M - Municipal; D - Distrital
   * - 2.7
     - hashChaveAcesso
     - Texto
     - Hash da chave de acesso
   * - 2.8
     - validado
     - Booleano
     - Indicador de validação
   * - 2.9
     - dataValidacao
     - Data/Hora
     - Data de validação
   * - 2.10
     - dataInclusao
     - Data/Hora
     - Data de inclusão
   * - 2.11
     - dataAtualizacao
     - Data/Hora
     - Data de atualização
   * - 3
     - codigoUnidade
     - Texto (30)
     - Código da unidade administrativa do órgão/entidade
   * - 4
     - nomeUnidade
     - Texto (100)
     - Nome da unidade administrativa do órgão/entidade
   * - 5
     - municipio
     - 
     - Dados do Município
   * - 5.1
     - id
     - Inteiro
     - Identificador do Município
   * - 5.2
     - uf
     - 
     - Dados da Unidade Federativa
   * - 5.2.1
     - siglaUF
     - Texto (2)
     - Sigla da Unidade Federativa
   * - 5.2.2
     - nomeUF
     - Texto
     - Nome da Unidade Federativa
   * - 5.2.3
     - dataHoraRegistro
     - Data/Hora
     - Data de registro
   * - 5.3
     - nome
     - Texto
     - Nome do Município
   * - 5.4
     - codigoIbge
     - Texto
     - Código IBGE do Município
   * - 5.5
     - dataHoraRegistro
     - Data/Hora
     - Data de registro
   * - 6
     - dataInclusao
     - Data/Hora
     - Data de inclusão do registro
   * - 7
     - dataAtualizacao
     - Data/Hora
     - Data de atualização do registro

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
     - NotFound
   * - 500
     - Internal Server Error
     - Erro

Consultar Unidades de um Órgão
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite consultar unidades pertencentes a um órgão/entidade.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/unidades 
     - GET

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	curl -k -X GET 
	"${BASE_URL}/v1/orgaos/10000000000003/unidades" -H "accept: */*"

Dados de Entrada
^^^^^^^^^^^^^^^^

.. note::

   A URL possui o parâmetro ``cnpj``.

.. list-table::
   :width: 100%
   :widths: 5 25 15 10 45
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
     - CNPJ do órgão contratante

Dados de Retorno
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
     - listaUnidades
     - 
     - Agrupador da lista de unidades
   * - 1.1
     - id
     - Inteiro
     - Identificador da Unidade Administrativa
   * - 1.2
     - orgao
     - 
     - Dados do Órgão
   * - 1.2.1
     - id
     - Inteiro
     - Identificador do Órgão
   * - 1.2.2
     - cnpj
     - Texto (14)
     - CNPJ do Órgão
   * - 1.2.3
     - razaoSocial
     - Texto (100)
     - Razão Social
   * - 1.2.4
     - cnpjEnteResponsavel
     - Texto (14)
     - CNPJ do Ente Responsável
   * - 1.2.5
     - poderId
     - Texto
     - Código do poder a que pertence o Órgão. L - Legislativo; E - Executivo; J - Judiciário
   * - 1.2.6
     - esferaId
     - Texto
     - Código da esfera a que pertence o Órgão. F - Federal; E - Estadual; M - Municipal; D - Distrital
   * - 1.2.7
     - hashChaveAcesso
     - Texto
     - Hash da chave de acesso
   * - 1.2.8
     - validado
     - Booleano
     - Indicador de validação
   * - 1.2.9
     - dataValidacao
     - Data/Hora
     - Data de validação
   * - 1.2.10
     - dataInclusao
     - Data/Hora
     - Data de inclusão
   * - 1.2.11
     - dataAtualizacao
     - Data/Hora
     - Data de atualização
   * - 1.3
     - codigoUnidade
     - Texto (30)
     - Código da unidade do órgão/entidade (definido pelo próprio órgão)
   * - 1.4
     - nomeUnidade
     - Texto (100)
     - Nome da unidade do órgão/entidade
   * - 1.5
     - municipio
     - 
     - Dados do Município
   * - 1.5.1
     - id
     - Inteiro
     - Identificador do Município
   * - 1.5.2
     - uf
     - 
     - Dados da Unidade Federativa
   * - 1.5.2.1
     - siglaUF
     - Texto (2)
     - Sigla da Unidade Federativa
   * - 1.5.2.2
     - nomeUF
     - Texto
     - Nome da Unidade Federativa
   * - 1.5.2.3
     - dataHoraRegistro
     - Data/Hora
     - Data de registro
   * - 1.5.3
     - nome
     - Texto
     - Nome do Município
   * - 1.5.4
     - codigoIbge
     - Texto
     - Código IBGE do Município
   * - 1.5.5
     - dataHoraRegistro
     - Data/Hora
     - Data de registro
   * - 1.6
     - dataInclusao
     - Data/Hora
     - Data de inclusão do registro
   * - 1.7
     - dataAtualizacao
     - Data/Hora
     - Data de atualização do registro

Exemplo de Retorno
^^^^^^^^^^^^^^^^^^

.. code-block:: bash

 
Retorno: 
{ 
  "orgao": { 
    "cnpj": "10000000000003", 
    "razaoSocial": "SECRETARIA MUNICIPAL DO BEM ESTAR SOCIAL", 
    "cnpjEnteResponsavel": "", 
    "poderId": "E", 
    "esferaId": "F", 
    "validado": false, 
    "dataValidacao": null 
  }, 
  "codigoUnidade": "1", 
  "nomeUnidade": "Unidade de compra e contrataçoes", 
  "municipio": { 
    "uf": { 
      "siglaUF": "SP", 
      "nomeUF": "São Paulo", 
      "dataHoraRegistro": "2021-05-14T02:24:08.239+00:00" 
    }, 
    "nome": "Município Xpto", 
    "codigoIbge": "0000001", 
    "dataHoraRegistro": "2021-06-17T18:09:18.634+00:00" 
  }, 
  "dataInclusao": "2021-06-24T23:40:44.491+00:00", 
  "dataAtualizacao": "2021-06-24T23:40:44.491+00:00" 
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
   * - 422
     - Unprocessable Entity
     - NotFound
   * - 500
     - Internal Server Error
     - Erro


Requerimento Perfil Gestor
~~~~~~~~~~~~~~~~~~~~~~~~~~

A funcionalidade **“Requerimento Perfil Gestor”**, disponível na **Área de Trabalho do PNCP**,  é utilizada para o cadastro do primeiro Gestor do órgão ou entidade no PNCP. 
O acesso à funcionalidade é realizado pelo endereço: `https://pncp.gov.br/app/area-de-trabalho. <https://pncp.gov.br/app/area-de-trabalho>`_  
O responsável pelo órgão acessa o PNCP, realiza a autenticação com login gov.br (nível prata) e preenche o requerimento.
Junto com o requerimento, deverá ser anexado documento comprobatório de sua vinculação ao órgão (portaria de nomeação, por exemplo). Será realizada a validação 
pelo Ministério da Gestão e da Inovação em Serviços Públicos (MGI) e habilitação do gestor. 
Com essa habilitação, o gestor se torna o responsável por fazer a gestão de acesso de outros agentes públicos de seu órgão, autorizar plataformas e gerenciar unidades administrativas.  


.. figure:: ../../img/Requerimento_perfil_gestor_1.jpg
	:width: 80%
	:align: center
	:alt: Requerimento Perfil Gestor (dados do solicitante)


.. figure:: ../../img/Requerimento_perfil_gestor_2.jpg
	:width: 80%
	:align: center
	:alt: Requerimento Perfil Gestor (dados do órgão/entidade)


.. figure:: ../../img/Requerimento_perfil_gestor_3.jpg
	:width: 80%
	:align: center
	:alt: Requerimento Perfil Gestor (documentação comprobatória)


Gestão de Órgão e Entidade 
~~~~~~~~~~~~~~~~~~~~~~~~~~

A funcionalidade “Gestão de Órgão/Entidade”, disponível na Área de Trabalho do PNCP, é utilizada pelo Gestor habilitado para realizar a gestão de acessos, a gestão de plataformas e a gestão de unidades. 
O acesso à funcionalidade se dá pelo endereço: `https://pncp.gov.br/app/area-de-trabalho. <https://pncp.gov.br/app/area-de-trabalho.>`_  
Cabe ao gestor órgão autorizar plataforma publicadora, seja ela pública ou privada, que passe a representar um novo órgão perante o PNCP.


.. figure:: ../../img/Consultar_orgao_entidade.jpg
	:width: 80%
	:align: center
	:alt: Consultar Órgão/Entidade


.. figure:: ../../img/Gestao_orgao_entidade.jpg
	:width: 80%
	:align: center
	:alt: Gestão de Órgão/Entidade



Incluir Gestor de Órgão e Entidade
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


.. figure:: ../../img/Incluir_gestor_orgao_entidade.jpg
	:width: 80%
	:align: center
	:alt: Incluir Gestor de Órgão e Entidade



Habilitar/Desabilitar plataforma 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


.. figure:: ../../img/Habilitar_desabilitar_plataforma_busca.jpg
	:width: 80%
	:align: center
	:alt: Habilitar/Desabilitar plataforma (busca)


.. figure:: ../../img/Habilitar_desabilitar_plataforma_adicionar.jpg
	:width: 80%
	:align: center
	:alt: Habilitar/Desabilitar plataforma (adicionar)



Incluir Unidade Administrativa
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


.. figure:: ../../img/Incluir_unidade_administrativa.jpg
	:width: 80%
	:align: center
	:alt: Incluir Unidade Administrativa (adicionar)



Editar, Ativar/Inativar Unidade Administrativa
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


.. figure:: ../../img/Editar_unidade_administrativa.jpg
	:width: 80%
	:align: center
	:alt: Editar, Ativar/Inativar Unidade Administrativa


.. warning::

	- Nome da Unidade: campo alfanumérico de livre escolha;
	- Código Unidade: campo único para o órgão alfanumérico de livre escolha (não é editável);
	- Código IBGE: Códigos de Municípios do IBGE composto de 7 dígitos, sendo os dois primeiros referentes ao código da Unidade da Federação. `https://www.ibge.gov.br/explica/codigos-dos-municipios.php. <https://www.ibge.gov.br/explica/codigos-dos-municipios.php>`_
