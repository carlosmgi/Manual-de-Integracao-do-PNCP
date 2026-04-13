Consultar Empenhos
==================

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

.. container:: destaque-amarelo

	Serviço que permite consultar empenhos pertencentes a um contrato/empenho.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - :destaque:`/v1/orgaos/{cnpj}/contratos/{ano}/{sequencialContrato}/empenhos`
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

	curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/contratos/2025/1/empenhos" -H "Accept: */*”

Dados de entrada
~~~~~~~~~~~~~~~~

.. Note::

Alimentar o parâmetro {cnpj}, {ano} e {sequencialContrato} na URL.


.. list-table::
   :width: 100%
   :widths: 5 20 15 10 50
   :header-rows: 1
   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - :destaque:`1`
     - :destaque:`cnpj`
     - :destaque:`Texto (14)`
     - :destaque:`Sim`
     - :destaque:`CNPJ do órgão do contrato/empenho`
   * - :destaque:`2`
     - :destaque:`ano`
     - :destaque:`Inteiro`
     - :destaque:`Sim`
     - :destaque:`Ano do contrato/empenho`
   * - :destaque:`3`
     - :destaque:`sequencialContrato`
     - :destaque:`Inteiro`
     - :destaque:`Sim`
     - :destaque:`Sequencial do contrato/empenho no PNCP; número sequencial gerado no momento da inclusão no PNCP`
   * - :destaque:`4`
     - :destaque:`pagina`
     - :destaque:`Inteiro`
     - :destaque:`Não`
     - :destaque:`Número da página com os registros a serem recuperados`
   * - :destaque:`5`
     - :destaque:`tamanhoPagina`
     - :destaque:`Inteiro`
     - :destaque:`Não`
     - :destaque:`Quantidade de registros por página a serem recuperados`

Dados de retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1
   * - Id
     - Campo
     - Tipo
     - Descrição
   * - :destaque:`1`
     - :destaque:`data`
     - :destaque:``
     - :destaque:`Dados retornados pela consulta`
   * - :destaque:`1.1`
     - :destaque:`cnpj`
     - :destaque:`Texto`
     - :destaque:`CNPJ do órgão do contrato/empenho`
   * - :destaque:`1.2`
     - :destaque:`ano`
     - :destaque:`Inteiro`
     - :destaque:`Ano do contrato/empenho`
   * - :destaque:`1.3`
     - :destaque:`sequencialContrato`
     - :destaque:`Inteiro`
     - :destaque:`Sequencial do contrato/empenho no PNCP; número sequencial gerado no momento da inclusão`
   * - :destaque:`1.4`
     - :destaque:`sequencialEmpenho`
     - :destaque:`Inteiro`
     - :destaque:`Sequencial do empenho no PNCP; número sequencial gerado no momento da inclusão`
   * - :destaque:`1.5`
     - :destaque:`numeroEmpenho`
     - :destaque:`Texto`
     - :destaque:`Número do empenho`
   * - :destaque:`1.6`
     - :destaque:`situacaoEmpenhoId`
     - :destaque:`Inteiro`
     - :destaque:`Identificador da situação do empenho`
   * - :destaque:`1.7`
     - :destaque:`situacaoEmpenhoNome`
     - :destaque:`Texto`
     - :destaque:`Nome da situação do empenho`
   * - :destaque:`1.8`
     - :destaque:`dataSituacaoEmpenho`
     - :destaque:`Data/Hora`
     - :destaque:`Data/Hora da situação do empenho`
   * - :destaque:`1.9`
     - :destaque:`tipoPessoa`
     - :destaque:`Texto`
     - :destaque:`PJ - Pessoa jurídica; PF - Pessoa física; PE - Pessoa estrangeira`
   * - :destaque:`1.10`
     - :destaque:`niCredorFornecedor`
     - :destaque:`Texto`
     - :destaque:`CNPJ, CPF ou identificador de empresa estrangeira`
   * - :destaque:`1.11`
     - :destaque:`nomeCredorFornecedor`
     - :destaque:`Texto`
     - :destaque:`Nome do credor/fornecedor`
   * - :destaque:`1.12`
     - :destaque:`numeroPlanoInterno`
     - :destaque:`Texto`
     - :destaque:`Número do Plano Interno`
   * - :destaque:`1.13`
     - :destaque:`codigoNaturezaDespesa`
     - :destaque:`Texto`
     - :destaque:`Código da natureza de despesa`
   * - :destaque:`1.14`
     - :destaque:`dataEmissaoEmpenho`
     - :destaque:`Data/Hora`
     - :destaque:`Data/Hora da emissão do empenho`
   * - :destaque:`1.15`
     - :destaque:`valorTotal`
     - :destaque:`Decimal`
     - :destaque:`Valor total do empenho`
   * - :destaque:`1.16`
     - :destaque:`valorSubItem`
     - :destaque:`Decimal`
     - :destaque:`Valor do subelemento ou subitem`
   * - :destaque:`1.17`
     - :destaque:`codigoEmenda`
     - :destaque:`Texto`
     - :destaque:`Código da Emenda Parlamentar`
   * - :destaque:`1.18`
     - :destaque:`fonteEmenda`
     - :destaque:`Inteiro`
     - :destaque:`Identificador da fonte (1 – Portal da Transparência)`
   * - :destaque:`1.19`
     - :destaque:`statusResponseEmenda`
     - :destaque:`Texto`
     - :destaque:`Código HTTP retornado na consulta de emenda`
   * - :destaque:`1.20`
     - :destaque:`jsonResponseEmenda`
     - :destaque:`Texto`
     - :destaque:`JSON retornado na consulta de emenda`
   * - :destaque:`1.21`
     - :destaque:`dataConsultaEmenda`
     - :destaque:`Data/Hora`
     - :destaque:`Data/Hora da consulta`
   * - :destaque:`1.22`
     - :destaque:`dataInclusao`
     - :destaque:`Data/Hora`
     - :destaque:`Data/Hora da inclusão no PNCP`
   * - :destaque:`1.23`
     - :destaque:`dataAtualizacao`
     - :destaque:`Data/Hora`
     - :destaque:`Data/Hora da última atualização`
   * - :destaque:`1.24`
     - :destaque:`emendaParlamentar`
     - :destaque:``
     - :destaque:`Dados da Emenda Parlamentar`
   * - :destaque:`1.24.1`
     - :destaque:`codigoEmenda`
     - :destaque:`String`
     - :destaque:`Código da emenda parlamentar`
   * - :destaque:`1.24.2`
     - :destaque:`ano`
     - :destaque:`Inteiro`
     - :destaque:`Ano da emenda parlamentar`
   * - :destaque:`1.24.3`
     - :destaque:`tipoEmenda`
     - :destaque:`Texto`
     - :destaque:`Tipo da emenda parlamentar`
   * - :destaque:`2`
     - :destaque:`totalRegistros`
     - :destaque:`Inteiro`
     - :destaque:`Total de registros encontrados`
   * - :destaque:`3`
     - :destaque:`totalPaginas`
     - :destaque:`Inteiro`
     - :destaque:`Total de páginas`
   * - :destaque:`4`
     - :destaque:`numeroPagina`
     - :destaque:`Inteiro`
     - :destaque:`Número da página consultada`
   * - :destaque:`5`
     - :destaque:`paginasRestantes`
     - :destaque:`Inteiro`
     - :destaque:`Quantidade de páginas restantes`
   * - :destaque:`6`
     - :destaque:`empty`
     - :destaque:`Booleano`
     - :destaque:`Indica se a consulta retornou vazio`
