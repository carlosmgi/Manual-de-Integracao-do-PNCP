Consultar Partes Envolvidas em Ata de Registro de Preço
=======================================================

:destaque-amarelo-claro:`Serviço que recupera a lista de partes envolvida em uma ata de registro de preço específica.`

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - :destaque-amarelo-claro:`/v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/partesenvolvidas`
     - :destaque-amarelo-claro:`GET`

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
   :emphasize-lines: 1-3

	curl -X GET \
	  "${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1/partesenvolvidas" \
	  -H "Accept: */*"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   :destaque-amarelo-claro:`Alimentar os parâmetros {cnpj}, {anoCompra}, {sequencialCompra}, {sequencialAta} e {sequencialDocumento} na URL.`

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

   * - :destaque-amarelo-claro:`1`
     - :destaque-amarelo-claro:`cnpj`
     - :destaque-amarelo-claro:`Texto (14)`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Cnpj do órgão originário da contratação informado na inclusão (proprietário da contratação)`

   * - :destaque-amarelo-claro:`2`
     - :destaque-amarelo-claro:`anoCompra`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Ano da contratação`

   * - :destaque-amarelo-claro:`3`
     - :destaque-amarelo-claro:`sequencialCompra`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Sequencial da contratação no PNCP; Número sequencial gerado no momento que a contratação foi inserida no PNCP;`

   * - :destaque-amarelo-claro:`4`
     - :destaque-amarelo-claro:`sequencialAta`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Sequencial da ata no PNCP; Número sequencial gerado no momento que a ata foi inserida no PNCP;`

   * - :destaque-amarelo-claro:`5`
     - :destaque-amarelo-claro:`pagina`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Não`
     - :destaque-amarelo-claro:`Número da página a ser retornada quando utilizada a paginação`

   * - :destaque-amarelo-claro:`6`
     - :destaque-amarelo-claro:`tamanhoPagina`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Não`
     - :destaque-amarelo-claro:`Quantidade de partes envolvidas a serem retornadas na paginação quando informado.`

Dados de retorno
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

   * - :destaque-amarelo-claro:`1`
     - :destaque-amarelo-claro:`data`
     - :destaque-amarelo-claro:`Lista`
     - :destaque-amarelo-claro:`Lista com os dados das Partes Envolvidas de uma Ata de Registro de Preço`

   * - :destaque-amarelo-claro:`1.1`
     - :destaque-amarelo-claro:`dataInclusao`
     - :destaque-amarelo-claro:`Data/Hora`
     - :destaque-amarelo-claro:`Data/Hora da inclusão da informação no PNCP`

   * - :destaque-amarelo-claro:`1.2`
     - :destaque-amarelo-claro:`tipoParteEnvolvida`
     - :destaque-amarelo-claro:``
     - :destaque-amarelo-claro:`Tipo de Parte Envolvida`

   * - :destaque-amarelo-claro:`1.2.1`
     - :destaque-amarelo-claro:`id`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Código do Tipo de Parte Envolvida`

   * - :destaque-amarelo-claro:`1.2.2`
     - :destaque-amarelo-claro:`nome`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Nome do Tipo de Parte Envolvida`

   * - :destaque-amarelo-claro:`1.2.3`
     - :destaque-amarelo-claro:`descricao`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Descrição do Tipo de Parte Envolvida`

   * - :destaque-amarelo-claro:`1.3`
     - :destaque-amarelo-claro:`orgao`
     - :destaque-amarelo-claro:``
     - :destaque-amarelo-claro:`Dados do Órgão/Entidade`

   * - :destaque-amarelo-claro:`1.3.1`
     - :destaque-amarelo-claro:`cnpj`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`CNPJ do Órgão/Entidade`

   * - :destaque-amarelo-claro:`1.3.2`
     - :destaque-amarelo-claro:`nome`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Nome do Órgão/Entidade`

   * - :destaque-amarelo-claro:`1.4`
     - :destaque-amarelo-claro:`unidade`
     - :destaque-amarelo-claro:``
     - :destaque-amarelo-claro:`Dados da Unidade Administrativa`

   * - :destaque-amarelo-claro:`1.4.1`
     - :destaque-amarelo-claro:`codigo`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Código da Unidade Administrativa`

   * - :destaque-amarelo-claro:`1.4.2`
     - :destaque-amarelo-claro:`nomeUnidade`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Nome da Unidade Administrativa`

   * - :destaque-amarelo-claro:`1.4.3`
     - :destaque-amarelo-claro:`localidade`
     - :destaque-amarelo-claro:``
     - :destaque-amarelo-claro:`Localidade da Unidade Administrativa`

   * - :destaque-amarelo-claro:`1.4.3.1`
     - :destaque-amarelo-claro:`uf`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Unidade Federativa do Município`

   * - :destaque-amarelo-claro:`1.4.3.2`
     - :destaque-amarelo-claro:`codigoIbgeMunicipio`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Código IBGE do Município`

   * - :destaque-amarelo-claro:`1.4.3.3`
     - :destaque-amarelo-claro:`nomeMunicipio`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Nome do Município`

   * - :destaque-amarelo-claro:`2`
     - :destaque-amarelo-claro:`totalRegistros`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Total de registros de partes envolvidas encontrados`

   * - :destaque-amarelo-claro:`3`
     - :destaque-amarelo-claro:`totalPaginas`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Total de páginas`

   * - :destaque-amarelo-claro:`4`
     - :destaque-amarelo-claro:`numeroPagina`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Número da página consultado`

   * - :destaque-amarelo-claro:`5`
     - :destaque-amarelo-claro:`paginasRestantes`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Quantidade de páginas restantes`

   * - :destaque-amarelo-claro:`6`
     - :destaque-amarelo-claro:`empty`
     - :destaque-amarelo-claro:`Booleano`
     - 

\
