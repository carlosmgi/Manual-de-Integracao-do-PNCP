Consultar Unidade
=================

Serviço que permite consultar uma unidade pertencente a um órgão/entidade a partir de seu código. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/unidades/{codigoUnidade} 
     - GET
	 

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/unidades/1" -H "accept: */*" 

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``cnpj`` e ``codigoUnidade``.

.. list-table::
   :width: 100%
   :widths: 5 10 10 15 55
   :header-rows: 1
   :class: quebra-linha-ultima-coluna

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
