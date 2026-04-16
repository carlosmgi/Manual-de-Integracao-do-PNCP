Consultar Usuário por Id
========================

Serviço que permite consultar os dados de um usuário pelo id. Disponível para o próprio usuário logado ou um usuário administrador. 

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
   * - /v1/usuarios/{id} 
     - GET
	 
Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
 
   curl -k -X GET --header "Authorization: Bearer access_token" 
   "${BASE_URL}/v1/usuarios/5" -H "accept: */*" 

Dados de entrada
~~~~~~~~~~~~~~~~

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
~~~~~~~~~~~~~~~~

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
~~~~~~~~~~~~~~~~~~

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
~~~~~~~~~~~~~~~~~~

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
