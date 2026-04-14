Inserir Entes Autorizados para um Usuário 
=========================================

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

Serviço que permite inserir um ou mais CNPJs de entes autorizados para um usuário. Serviço destinado exclusivamente às plataformas públicas e aos administradores do PNCP. 
Para plataformas privadas, a inclusão de novos entes autorizados requer contato prévio com a central de atendimento e apresentação de comprovação de vínculo com o ente público. 

.. warning::
   Disponível apenas no ambiente de treinamento/homologação. No ambiente de produção, utilize o procedimento do item Gestão de Órgão e Entidade.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/usuarios/{id}/orgaos 
     - POST
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

  	{
	"entesAutorizados":
		[
			"10000000000003",					
			"10000000000005"
		] 
	}
  

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

  	 curl -k -X POST --header "Authorization: Bearer access_token" 
	"${BASE_URL}/v1/usuarios/5/orgaos" -H "accept: */*" -H "Content-Type: application/json" 
	--data "@/home/objeto.json" 

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
~~~~~~~~~~~~~~~~

Não se aplica.  

Exemplo de Retorno
~~~~~~~~~~~~~~~~~~

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
