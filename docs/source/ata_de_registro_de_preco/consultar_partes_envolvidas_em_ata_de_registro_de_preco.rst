Consultar Partes Envolvidas em Ata de Registro de Preço
=======================================================

Serviço que recupera a lista de partes envolvida em uma ata de registro de preço específica.

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

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/partesenvolvidas
     - GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

Não se aplica.

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
   :linenos:

   curl -X 'GET' \
     '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1/partesenvolvidas' \
     -H 'accept: */*'

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar o parâmetro {cnpj}, {anoCompra}, {sequencialCompra}, {sequencialAta} e {sequencialDocumento} na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 15 40
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
     - Cnpj do órgão originário da contratação informado na inclusão (proprietário da contratação)

   * - 2
     - anoCompra
     - Inteiro
     - Sim
     - Ano da contratação

   * - 3
     - sequencialCompra
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP; Número sequencial gerado no momento que a contratação foi inserida no PNCP;

   * - 4
     - sequencialAta
     - Inteiro
     - Sim
     - Sequencial da ata no PNCP; Número sequencial gerado no momento que a ata foi inserida no PNCP;

   * - 5
     - pagina
     - Inteiro
     - Não
     - Número da página a ser retornada quando utilizada a paginação

   * - 6
     - tamanhoPagina
     - Inteiro
     - Não
     - Quantidade de partes envolvidas a serem retornadas na paginação quando informado.

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

   * - 1
     - data
     - Lista
     - Lista com os dados das Partes Envolvidas de uma Ata de Registro de Preço

   * - 1.1
     - dataInclusao
     - Data/Hora
     - Data/Hora da inclusão da informação no PNCP

   * - 1.2
     - tipoParteEnvolvida
     - 
     - Tipo de Parte Envolvida

   * - 1.2.1
     - id
     - Inteiro
     - Código do Tipo de Parte Envolvida

   * - 1.2.2
     - nome
     - Texto
     - Nome do Tipo de Parte Envolvida

   * - 1.2.3
     - descricao
     - Texto
     - Descrição do Tipo de Parte Envolvida

   * - 1.3
     - orgao
     - 
     - Dados do Órgão/Entidade

   * - 1.3.1
     - cnpj
     - Texto
     - CNPJ do Órgão/Entidade

   * - 1.3.2
     - nome
     - Texto
     - Nome do Órgão/Entidade

   * - 1.4
     - unidade
     - 
     - Dados da Unidade Administrativa

   * - 1.4.1
     - codigo
     - Texto
     - Código da Unidade Administrativa

   * - 1.4.2
     - nomeUnidade
     - Texto
     - Nome da Unidade Administrativa

   * - 1.4.3
     - localidade
     - 
     - Localidade da Unidade Administrativa

   * - 1.4.3.1
     - uf
     - Texto
     - Unidade Federativa do Município

   * - 1.4.3.2
     - codigoIbgeMunicipio
     - Texto
     - Código IBGE do Município

   * - 1.4.3.3
     - nomeMunicipio
     - Texto
     - Nome do Município

   * - 2
     - totalRegistros
     - Inteiro
     - Total de registros de partes envolvidas encontrados

   * - 3
     - totalPaginas
     - Inteiro
     - Total de páginas

   * - 4
     - numeroPagina
     - Inteiro
     - Número da página consultado

   * - 5
     - paginasRestantes
     - Inteiro
     - Quantidade de páginas restantes

   * - 6
     - empty
     - Booleano
     - 
