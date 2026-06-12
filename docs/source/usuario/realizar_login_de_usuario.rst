Realizar Login de Usuário
=========================

Serviço que recebe os dados para autenticação de um usuário e retorna um token de acesso. O token de acesso vai possibilitar ao usuário enviar informações que alimentam o PNCP.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/usuarios/login
     - POST	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

	{ 
		"login": "1b182cec-f639-11eb-9a03-0242ac130003", 
		"senha": "&1NaoCompartilho1Senha&" 
	}

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:

	curl -k -X GET \
	  --header "Authorization: Bearer access_token" \
	  "${BASE_URL}/v1/usuarios/login" \
	  -H "accept: */*"

Dados de entrada
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
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
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 10 15 55
   :header-rows: 1
   :class: quebra-linha-ultima-coluna

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
~~~~~~~~~~~~~~~~~~

.. code-block:: http
  :linenos:

   Retorno:
   access-control-allow-credentials: true
   access-control-allow-headers: Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin
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
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
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
