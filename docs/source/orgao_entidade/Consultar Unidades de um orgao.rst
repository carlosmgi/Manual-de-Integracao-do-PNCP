Consultar Unidades de um Órgão
==============================

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

Serviço que permite consultar unidades pertencentes a um órgão/entidade.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/unidades 
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X GET 
	"${BASE_URL}/v1/orgaos/10000000000003/unidades" -H "accept: */*"

Dados de Entrada
~~~~~~~~~~~~~~~~

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
~~~~~~~~~~~~~~~~

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
~~~~~~~~~~~~~~~~~~

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
