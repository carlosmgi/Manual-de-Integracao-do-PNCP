Serviços de Usuário
===================

Atualizar Usuário
-----------------

Serviço que permite alterar/atualizar os dados de um usuário. Disponível para o próprio usuário logado ou usuário administrador. Com esse serviço é possível que o usuário 
altere sua própria senha ou cadastre a lista de CNPJs dos entes autorizados (órgãos) o qual o usuário estará apto a divulgar informações. 

**Observação:** O item 6.2.1 deste manual (Incluir Órgão) foi construído para incluir um Órgão que eventualmente não se encontre no repositório de dados do PNCP. A funcionalidade não 
deve ser confundida com a inclusão de Órgãos gerenciados pelo usuário. 
 
**Observação:** o parâmetro “entesAutorizados” não está disponível para plataformas privadas desde 18/08/2025.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/usuarios/{id} 
     - PUT

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
  :linenos:
  :emphasize-lines: 5,6
  { 
    "nome": "Fulano de Tal", 
    "email": "fulano@example.com", 
    "senha": "&1NaoCompartilho1Senha&", 
    "entesAutorizados": ["10000000000003", "10000000000005"] 
  } 

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

 curl -k -X PUT --header "Authorization: Bearer access_token" 
 "${BASE_URL}/v1/usuarios/5" -H "accept: */*" -H "Content-Type: application/json" 
 --data "@/home/objeto.json" 

Dados de entrada
^^^^^^^^^^^^^^^^

.. note::
   Informar o parâmetro ``id`` na URL.

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
     - nome
     - Texto (255)
     - Não
     - Nome ou razão social do usuário
   * - 2
     - email
     - Texto (255)
     - Não
     - E-mail do usuário
   * - 3
     - senha
     - Texto (255)
     - Não
     - Senha do usuário
   * - 4
     - entesAutorizados
     - Vetor de string
     - Não
     - Vetor com a lista de CNPJ de órgãos que o usuário possui acesso

Dados de retorno
^^^^^^^^^^^^^^^^

Não se aplica.  

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

Consultar Usuário por Id
------------------------

Serviço que permite consultar os dados de um usuário pelo id. Disponível para o próprio usuário logado ou um usuário administrador. 

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/usuarios/{id} 
     - GET
	 
Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash
 
   curl -k -X GET --header "Authorization: Bearer access_token" 
   "${BASE_URL}/v1/usuarios/5" -H "accept: */*" 

Dados de entrada
^^^^^^^^^^^^^^^^

.. note::
   Informar o parâmetro ``id`` na URL.

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
     - id
     - Inteiro
     - Sim
     - Identificador do usuário

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
     - id
     - Inteiro
     - Identificador do usuário
   * - 2
     - login
     - Texto (255)
     - Login
   * - 3
     - nome
     - Texto (255)
     - Nome ou razão social do usuário
   * - 4
     - cpfCnpj
     - Texto (14)
     - CNPJ ou CPF do usuário
   * - 5
     - email
     - Texto (255)
     - E-mail do usuário
   * - 6
     - telefone
     - Texto (255)
     - Telefone
   * - 7
     - administrador
     - Booleano
     - Identifica se o usuário é um administrador
   * - 8
     - gestaoEnteAutorizado
     - Booleano
     - Indica se o usuário tem permissão para fazer a gestão de seus entes autorizados

   * - 9
     - entesAutorizados
     - Lista
     - Lista de órgãos que o usuário possui acesso
   * - 9.1
     - cnpj
     - Texto (14)
     - CNPJ do órgão
   * - 9.2
     - razaoSocial
     - Texto (255)
     - Razão social do órgão

Exemplo de Retorno
^^^^^^^^^^^^^^^^^^

.. code-block:: json

	Retorno:  
	{ 
	  "id": 5, 
	  "login": "1b182cec-f639-11eb-9a03-0242ac130003", 
	  "nome": "Fulano de Tal", 
	  "cpfCnpj": "10000000001", 
	  "email": fulano@example.com, 
	  "telefone": "string", 
	  "administrador": false, 
	  "gestaoEnteAutorizado": true, 
	  "entesAutorizados": [ 
	    { 
	      "cnpj": "10000000000003", 
	      "razaoSocial": "Organização Alfa" 
	    }, 
	    { 
	      "cnpj": "10000000000005", 
	      "razaoSocial": "Instituição Gama" 
	    } 
	  ] 
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

Consultar Usuário por Login ou por CPF/CNPJ
-------------------------------------------

Serviço que permite consultar os dados de um usuário pelo Login ou por um CPF/CNPJ. Disponível para o próprio usuário logado ou um usuário administrador.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/usuarios 
     - GET
	 
Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

   curl -k -X GET --header "Authorization: Bearer access_token" 
   "${BASE_URL}/v1/usuarios" -H "accept: */*" 

Dados de entrada
^^^^^^^^^^^^^^^^

.. note::
   Utilizar um dos parâmetros para pesquisa: ``login`` ou ``cpfCnpj``.

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
     - login
     - Texto (255)
     - Não
     - Login do usuário
   * - 2
     - cpfCnpj
     - Texto (14)
     - Não
     - CNPJ ou CPF do usuário

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
     - usuarios
     - Lista
     - Lista de usuários

   * - 1.1
     - id
     - Inteiro
     - Identificador do usuário
   * - 1.2
     - login
     - Texto (255)
     - Login do usuário
   * - 1.3
     - nome
     - Texto (255)
     - Nome ou razão social do usuário
   * - 1.4
     - cpfCnpj
     - Texto (14)
     - CNPJ ou CPF do usuário
   * - 1.5
     - email
     - Texto (255)
     - E-mail do usuário
   * - 1.6
     - telefone
     - Texto (255)
     - Telefone
   * - 1.7
     - administrador
     - Booleano
     - Identifica se o usuário é um administrador
   * - 1.8
     - gestaoEnteAutorizado
     - Booleano
     - Indica se o usuário tem permissão para fazer a gestão de seus entes autorizados

   * - 1.9
     - entesAutorizados
     - Lista
     - Lista de órgãos que o usuário possui acesso
   * - 1.9.1
     - cnpj
     - Texto (14)
     - CNPJ do órgão
   * - 1.9.2
     - razaoSocial
     - Texto (255)
     - Razão social do órgão

Exemplo de Retorno
^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	Retorno:  
	  { 
	    "id": 5, 
	    "login": "1b182cec-f639-11eb-9a03-0242ac130003", 
	    "nome": "Fulano de Tal", 
	    "cpfCnpj": "10000000001", 
	    "email": "fulano@example.com", 
	    "telefone": "string", 
	    "administrador": false, 
	    "gestaoEnteAutorizado": true, 
	    "entesAutorizados": [ 
	      { 
	        "cnpj": "10000000000003", 
	        "razaoSocial": "Organização Alfa" 
	      }, 
	      { 
	        "cnpj": "10000000000005", 
	        "razaoSocial": "Instituição Gama" 
	      } 
	    ] 
	  } 
	] 

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

Realizar Login de Usuário
-------------------------

Serviço que recebe os dados para autenticação de um usuário e retorna um token de acesso. O token de acesso vai possibilitar ao usuário enviar informações que alimentam o PNCP.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/usuarios/login
     - POST	 

Exemplo de Payload
------------------

.. code-block:: json
  :linenos:
  :emphasize-lines: 5,6

	{ 
		"login": "1b182cec-f639-11eb-9a03-0242ac130003", 
		"senha": "&1NaoCompartilho1Senha&" 
	}

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

   	curl -X 'GET' --header "Authorization: Bearer access_token" 
	"${BASE_URL}/v1/usuarios/login" -H "accept: */*" -H "Content-Type: application/json" 
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
     - login
     - Texto (255)
     - Sim
     - Login do usuário
   * - 2
     - senha
     - Texto (255)
     - Sim
     - Senha do usuário

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
     - authorization
     - Texto (1024)
     - Token de acesso. Antes do token haverá a expressão "Bearer", que identifica o tipo de token
   * - 2
     - expires
     - Inteiro
     - Tempo de expiração do token em milissegundos

Exemplo de Retorno
^^^^^^^^^^^^^^^^^^

.. code-block:: bash

	Retorno: 
	access-control-allow-credentials: true 
	access-control-allow-headers: Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin, 
	access-control-allow-methods: GET,PUT,POST,DELETE,OPTIONS 
	access-control-allow-origin: * 
	authorization: Bearer access_token 
	cache-control: no-cache,no-store,max-age=0,must-revalidate 
	content-length: 0 
	date: ? 
	expires: 3600000 
	pragma: no-cache 
	strict-transport-security: max-age=? 
	x-content-type-options: ? 
	x-firefox-spdy: ? 
	x-frame-options: ? 
	x-xss-protection: ?; mode=?

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

Inserir Entes Autorizados para um Usuário 
-----------------------------------------

Serviço que permite inserir um ou mais CNPJs de entes autorizados para um usuário. Serviço destinado exclusivamente às plataformas públicas e aos administradores do PNCP. 
Para plataformas privadas, a inclusão de novos entes autorizados requer contato prévio com a central de atendimento e apresentação de comprovação de vínculo com o ente público. 

.. warning::
   Disponível apenas no ambiente de treinamento/homologação. No ambiente de produção, utilize o procedimento do item Gestão de Órgão e Entidade.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/usuarios/{id}/orgaos 
     - POST
	 

Exemplo de Payload
------------------

.. code-block:: json
  :linenos:
  :emphasize-lines: 5,6
  	{
	"entesAutorizados":
		[
			"10000000000003",					
			"10000000000005"
		] 
	}
  

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

  	 curl -k -X POST --header "Authorization: Bearer access_token" 
	"${BASE_URL}/v1/usuarios/5/orgaos" -H "accept: */*" -H "Content-Type: application/json" 
	--data "@/home/objeto.json" 

Dados de entrada
^^^^^^^^^^^^^^^^

.. note::
   Informar o parâmetro ``id`` na URL.

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
     - id
     - Inteiro
     - Sim
     - Identificador do usuário

   * - 2
     - entesAutorizados
     - Lista
     - Sim
     - Lista de CNPJs

   * - 2.1
     - entesAutorizados
     - Vetor
     - Sim
     - Vetor com a lista de CNPJ de órgãos que o usuário possui acesso

Dados de retorno 
^^^^^^^^^^^^^^^^

Não se aplica.  

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

Excluir Entes Autorizados de um Usuário
---------------------------------------

Serviço que permite excluir um ou mais CNPJs de entes autorizados para um usuário.  
Serviço destinado exclusivamente às plataformas públicas e aos administradores do 
PNCP. 
Para plataformas privadas, a exclusão de novos entes autorizados requer contato prévio com a central de atendimento e comprovação de vínculo com a plataforma privada. 

.. warning::
Atenção: disponível apenas no ambiente de treinamento/homologação. No ambiente de produção, utilize o procedimento do item 6.2.9 – Gestão de Órgão e Entidade.


   .. figure:: ../../img/Redefinicao_login_senha.jpg
   :width: 80%
   :align: center
   :alt: Redefinição de login e senha

