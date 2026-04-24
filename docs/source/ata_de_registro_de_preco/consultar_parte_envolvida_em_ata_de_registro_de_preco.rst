Consultar Parte Envolvida em Ata de Registro de Preço
=====================================================

Serviço que recupera os dados de uma parte envolvida específica de uma ata de registro de preço.

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
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/partesenvolvidas/{cnpjOrgao}/{codUnidade}/{tipoParteEnvolvida}
     - GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

Não se aplica.

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
   :linenos:

   curl -X 'GET' \
     '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1/partesenvolvidas/00394460000141/1/1' \
     -H 'accept: */*'

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar o parâmetro {cnpj}, {anoCompra}, {sequencialCompra}, {sequencialAta} na URL.

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
     - cnpjOrgao
     - Texto (14)
     - Sim
     - CNPJ do órgão/entidade da parte envolvida

   * - 6
     - codUnidade
     - Texto (30)
     - Sim
     - Código da unidade administrativa da parte envolvida

   * - 7
     - tipoParteEnvolvida
     - Inteiro
     - Sim
     - Código do tipo da parte envolvida

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
     - dataInclusao
     - Data/Hora
     - Data/Hora da inclusão da informação no PNCP

   * - 2
     - tipoParteEnvolvida
     - Lista
     - Tipo de Parte Envolvida

   * - 2.1
     - id
     - Inteiro
     - Código do Tipo de Parte Envolvida

   * - 2.2
     - nome
     - Texto
     - Nome do Tipo de Parte Envolvida

   * - 2.3
     - descricao
     - Texto
     - Descrição do Tipo de Parte Envolvida

   * - 3
     - orgao
     - Lista
     - Dados do Órgão/Entidade

   * - 3.1
     - cnpj
     - Texto
     - CNPJ do Órgão/Entidade

   * - 3.2
     - nome
     - Texto
     - Nome do Órgão/Entidade

   * - 4
     - unidade
     - Lista
     - Dados da Unidade Administrativa

   * - 4.1
     - codigo
     - Texto
     - Código da Unidade Administrativa

   * - 4.2
     - nomeUnidade
     - Texto
     - Nome da Unidade Administrativa

   * - 4.3
     - localidade
     - Lista
     - Localidade da Unidade Administrativa

   * - 4.4.1
     - uf
     - Texto
     - Unidade Federativa do Município

   * - 4.4.2
     - codigoIbgeMunicipio
     - Texto
     - Código IBGE do Município

   * - 4.4.3
     - nomeMunicipio
     - Texto
     - Nome do Município
