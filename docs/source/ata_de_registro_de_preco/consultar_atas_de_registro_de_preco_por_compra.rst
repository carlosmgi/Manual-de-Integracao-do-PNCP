Consultar Atas de Registro de preço por Compra
==============================================

Serviço que permite recuperar as atas de Registro de Preço de uma contratação.


Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas
     - GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

Não se aplica.

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  
   curl -X GET \
     "${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas" \
     -H "Accept: */*"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``{cnpj}``, ``{anoCompra}`` e ``{sequencialCompra}`` na URL.

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
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação)

   * - 2
     - anoCompra
     - Inteiro
     - Sim
     - Ano da contratação

   * - 3
     - sequencialCompra
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP; número sequencial gerado no momento que a contratação foi inserida no PNCP

Dados de retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1
   :class: quebra-linha-dois-ultima

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - 1
     - Atas
     - List
     - Agrupador da lista de atas

   * - 1.1
     - numeroAtaRegistroPreco
     - Texto (50)
     - Número da Ata no sistema de origem

   * - 1.2
     - anoAta
     - Inteiro
     - Ano da Ata

   * - 1.3
     - dataAssinatura
     - Data
     - Data de assinatura da Ata

   * - 1.4
     - dataVigenciaInicio
     - Data
     - Data de início de vigência da Ata

   * - 1.5
     - dataVigenciaFim
     - Data
     - Data de fim de vigência da Ata

   * - 1.6
     - dataCancelamento
     - Data
     - Data de cancelamento da Ata

   * - 1.7
     - cancelado
     - Booleano
     - Indicador de cancelamento da Ata

   * - 1.8
     - dataPublicacaoPncp
     - Data
     - Data da publicação da Ata no PNCP

   * - 1.9
     - dataInclusao
     - Data
     - Data da inclusão do registro da Ata no PNCP

   * - 1.10
     - dataAtualizacao
     - Data
     - Data da última atualização do registro da Ata

   * - 1.11
     - sequencialAta
     - Inteiro
     - Número sequencial da Ata, gerado pelo PNCP

   * - 1.12
     - numeroControlePNCP
     - String
     - Número de Controle PNCP da Ata

   * - 1.13
     - localCompra
     - String
     - Município e Estado referente à contratação

   * - 1.14
     - orgaoCompra
     - String
     - Órgão referente à contratação

   * - 1.15
     - orgaoSubRogadoCompra
     - String
     - Órgão sub-rogado referente à contratação

   * - 1.16
     - modalidadeNome
     - String
     - Modalidade referente à contratação

   * - 1.17
     - objetoCompra
     - String
     - Descrição do objeto referente à contratação

   * - 1.18
     - informacaoComplementarCompra
     - String
     - Informação complementar do objeto referente à contratação

   * - 1.19
     - dataAtualizacaoGlobal
     - Data
     - Data da última atualização global do registro da Ata considerando seus dependentes (documento da ata)

   * - 1.20
     - usuarioNome
     - Texto
     - Nome da plataforma que publicou a Ata no PNCP

   * - :destaque-amarelo-claro:`1.21`
     - :destaque-amarelo-claro:`possibilidadeAdesao`
     - :destaque-amarelo-claro:`Booleano`
     - :destaque-amarelo-claro:`Indicador se a Ata permite adesão de não participantes (False = Não / True = Sim)`
