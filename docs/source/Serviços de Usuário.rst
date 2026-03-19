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
------------------

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
 "${BASE_URL}/v1/usuarios/5" -H "accept: */*" -H "Content-Type: application/json" --data "@/home/objeto.json" 

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
