Consultar Empenho pelo Número Sequencial
========================================

.. container:: destaque-amarelo

	Serviço que permite consultar um empenho específico pertencente a um contra-to/empenho.

\

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
   * - :destaque:`/v1/orgaos/{cnpj}/contratos/{ano}/{sequencialContra-to}/empenhos/{sequencialEmpenho}`
     - :destaque:`GET`	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  :emphasize-lines: 1

	Não se aplica  

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1

	curl -k -X GET "${BA-SE_URL}/v1/orgaos/10000000000003/contratos/2025/1/empenhos/1" -H "Accept: */*”

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros :destaque:`{cnpj}`, :destaque:`{ano}`, :destaque:`{sequencial}` na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 10 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - 1
     - :destaque:`cnpj`
     - :destaque:`Texto (14)`
     - :destaque:`Sim`
     - :destaque:`CNPJ do órgão`

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - :destaque:`1`
     - :destaque:`cnpj`
     - :destaque:`Texto`
     - :destaque:`CNPJ do órgão do contrato/empenho`
   * - :destaque:`2`
     - :destaque:`ano`
     - :destaque:`Inteiro`
     - :destaque:`Ano do contrato/empenho`
   * - :destaque:`3`
     - :destaque:`sequencialContrato`
     - :destaque:`Inteiro`
     - :destaque:`Sequencial do contrato/empenho no PNCP; número sequencial gerado no momento que o contrato/empenho foi inserido no PNCP`
   * - :destaque:`4`
     - :destaque:`sequencialEmpenho`
     - :destaque:`Inteiro`
     - :destaque:`Sequencial do empenho no PNCP; número sequencial gerado no momento que o empenho foi inserido no PNCP`
   * - :destaque:`5`
     - :destaque:`numeroEmpenho`
     - :destaque:`Texto`
     - :destaque:`Número do empenho`
   * - :destaque:`6`
     - :destaque:`situacaoEmpenhoId`
     - :destaque:`Inteiro`
     - :destaque:`Identificador da situação do empenho`
   * - :destaque:`7`
     - :destaque:`situacaoEmpenhoNome`
     - :destaque:`Texto`
     - :destaque:`Nome da situação do empenho`
   * - :destaque:`8`
     - :destaque:`dataSituacaoEmpenho`
     - :destaque:`Data/Hora`
     - :destaque:`Data/hora da situação do empenho`
   * - :destaque:`9`
     - :destaque:`tipoPessoa`
     - :destaque:`Texto`
     - :destaque:`PJ - Pessoa jurídica; PF - Pessoa física; PE - Pessoa estrangeira`
   * - :destaque:`10`
     - :destaque:`niCredorFornecedor`
     - :destaque:`Texto`
     - :destaque:`Número de identificação do credor/fornecedor; CNPJ, CPF ou identificador de empresa estrangeira`
   * - :destaque:`11`
     - :destaque:`nomeCredorFornecedor`
     - :destaque:`Texto`
     - :destaque:`Nome do credor/fornecedor`
   * - :destaque:`12`
     - :destaque:`numeroPlanoInterno`
     - :destaque:`Texto`
     - :destaque:`Número do plano interno`
   * - :destaque:`13`
     - :destaque:`codigoNaturezaDespesa`
     - :destaque:`Texto`
     - :destaque:`Código da natureza de despesa`
   * - :destaque:`14`
     - :destaque:`dataEmissaoEmpenho`
     - :destaque:`Data/Hora`
     - :destaque:`Data/hora da emissão do empenho`
   * - :destaque:`15`
     - :destaque:`valorTotal`
     - :destaque:`Decimal`
     - :destaque:`Valor total do empenho`
   * - :destaque:`16`
     - :destaque:`valorSubItem`
     - :destaque:`Decimal`
     - :destaque:`Valor do subelemento ou subitem`
   * - :destaque:`17`
     - :destaque:`codigoEmenda`
     - :destaque:`Texto`
     - :destaque:`Código da emenda parlamentar`
   * - :destaque:`18`
     - :destaque:`fonteEmenda`
     - :destaque:`Inteiro`
     - :destaque:`Identificador da fonte da consulta aos dados de emenda parlamentar (1 – Portal da Transparência)`
   * - :destaque:`19`
     - :destaque:`statusResponseEmenda`
     - :destaque:`Texto`
     - :destaque:`Código de retorno HTTP retornado no momento da consulta aos dados da emenda parlamentar`
   * - :destaque:`20`
     - :destaque:`jsonResponseEmenda`
     - :destaque:`Texto`
     - :destaque:`JSON response retornado no momento da consulta aos dados da emenda parlamentar`
   * - :destaque:`21`
     - :destaque:`dataConsultaEmenda`
     - :destaque:`Data/Hora`
     - :destaque:`Data/hora da consulta aos dados da emenda parlamentar`
   * - :destaque:`22`
     - :destaque:`dataInclusao`
     - :destaque:`Data/Hora`
     - :destaque:`Data/hora da inclusão do empenho no PNCP`
   * - :destaque:`23`
     - :destaque:`dataAtualizacao`
     - :destaque:`Data/Hora`
     - :destaque:`Data/hora da última atualização do empenho no PNCP`
   * - :destaque:`24`
     - :destaque:`emendaParlamentar`
     - :destaque:``
     - :destaque:`Dados da emenda parlamentar`
   * - :destaque:`24.1`
     - :destaque:`codigoEmenda`
     - :destaque:`String`
     - :destaque:`Código da emenda parlamentar`
   * - :destaque:`24.2`
     - :destaque:`ano`
     - :destaque:`Inteiro`
     - :destaque:`Ano da emenda parlamentar`
   * - :destaque:`24.3`
     - :destaque:`tipoEmenda`
     - :destaque:`Texto`
     - :destaque:`Tipo da emenda parlamentar`
   * - :destaque:`24.4`
     - :destaque:`autor`
     - :destaque:`Texto`
     - :destaque:`Autor`
   * - :destaque:`24.5`
     - :destaque:`nomeAutor`
     - :destaque:`Texto`
     - :destaque:`Nome do autor`
   * - :destaque:`24.6`
     - :destaque:`numeroEmenda`
     - :destaque:`Texto`
     - :destaque:`Número da emenda parlamentar`
   * - :destaque:`24.7`
     - :destaque:`localidadeDoGasto`
     - :destaque:`Texto`
     - :destaque:`Localidade do gasto`
   * - :destaque:`24.8`
     - :destaque:`funcao`
     - :destaque:`Texto`
     - :destaque:`Função`
   * - :destaque:`24.9`
     - :destaque:`subFuncao`
     - :destaque:`Inteiro`
     - :destaque:`Subfunção`
   * - :destaque:`24.10`
     - :destaque:`valorEmpenhado`
     - :destaque:`Texto`
     - :destaque:`Valor empenhado`
   * - :destaque:`24.11`
     - :destaque:`valorLiquidado`
     - :destaque:`Texto`
     - :destaque:`Valor liquidado`
   * - :destaque:`24.12`
     - :destaque:`valorPago`
     - :destaque:`Texto`
     - :destaque:`Valor pago`
   * - :destaque:`24.13`
     - :destaque:`valorRestoInscrito`
     - :destaque:`Texto`
     - :destaque:`Valor resto inscrito`
   * - :destaque:`24.14`
     - :destaque:`valorRestoCancelado`
     - :destaque:`Texto`
     - :destaque:`Valor resto cancelado`
   * - :destaque:`24.15`
     - :destaque:`valorRestoPago`
     - :destaque:`Texto`
     - :destaque:`Valor resto pago`
   * - :destaque:`24.16`
     - :destaque:`dataInclusao`
     - :destaque:`Data/Hora`
     - :destaque:`Data/hora da gravação dos dados no PNCP`
   * - :destaque:`24.17`
     - :destaque:`dataAtualizacao`
     - :destaque:`Data/Hora`
     - :destaque:`Data/hora da atualização dos dados no PNCP`
