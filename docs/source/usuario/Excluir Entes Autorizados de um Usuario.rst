Excluir Entes Autorizados de um Usuário
=======================================

Serviço que permite excluir um ou mais CNPJs de entes autorizados para um usuário.  
Serviço destinado exclusivamente às plataformas públicas e aos administradores do 
PNCP. 
Para plataformas privadas, a exclusão de novos entes autorizados requer contato prévio com a central de atendimento e comprovação de vínculo com a plataforma privada. 

.. Attention::
	Disponível apenas no ambiente de treinamento/homologação. No ambiente de produção, utilize o procedimento do item 6.2.9 – Gestão de Órgão e Entidade.


Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/usuarios/{id}/orgaos
     - DELETE
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

	{
  		"entesAutorizados": ["10000000000003", "10000000000005"]
	}
  

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1

	curl -k -X DELETE --header "Authorization: Bearer access_token" "${BASE_URL}/v1/usuarios/5/orgaos" -H "accept: */*" -H "Content-Type: application/json" --data "@/home/objeto.json"

Dados de retorno
~~~~~~~~~~~~~~~~

.. note::
   Lista de dados retornados pela API.

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
     - id
     - Inteiro
     - Sim
     - Identificador do usuário
   * - 2
     - Lista de EntesAutorizados
     - 
     - 
     - Lista de CNPJs
   * - 2.1
     - entesAutorizados
     - Vetor
     - Sim
     - Vetor com a lista de CNPJs de órgãos que o usuário possui acesso

Dados de retorno
~~~~~~~~~~~~~~~~

Não se aplica. 

Exemplo de Retorno
~~~~~~~~~~~~~~~~~~

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
     - Erro
   * - 500
     - Internal Server Error
     - Erro

