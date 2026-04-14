Atualizar Unidade
=================

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
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/unidades
     - PUT	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  
  	{ 
  		"codigoUnidade": "1", 
  		"nomeUnidade": "Unidade administrativa", 
  		"codigoIBGE": "1000001" 
	}
  

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -k -X PUT --header "Authorization: Bearer access_token" 
	"${BASE_URL}/v1/orgaos/10000000000003 /unidades" -H "accept: */*" -H "Content-Type: 
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
     - location
     - Texto (255)
     - Endereço HTTP do recurso atualizado

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
