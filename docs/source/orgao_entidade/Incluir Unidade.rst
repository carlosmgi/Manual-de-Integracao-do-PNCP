Incluir Unidade
===============
  
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

.. figure:: ../../_static/img/Incluir_unidade_administrativa.jpg
	:width: 80%
	:align: center
	:alt: Incluir Unidade Administrativa

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/unidades
     - POST
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

	{ 
		"codigoIBGE": "1000001", 
		"codigoUnidade": "1", 
		"nomeUnidade": "Unidade administrativa" 
	}
  

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -k -X POST --header "Authorization: Bearer access_token" 
   "${BASE_URL}/v1/orgaos/10000000000003/unidades" -H "accept: */*" -H "Content-Type: 
   application/json" --data "@/home/objeto.json"

Dados de entrada
~~~~~~~~~~~~~~~~

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
~~~~~~~~~~~~~~~~

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
	location: https://treina.pncp.gov.br/api/pncp/v1/orgaos/10000000000003/unidades/1 
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
