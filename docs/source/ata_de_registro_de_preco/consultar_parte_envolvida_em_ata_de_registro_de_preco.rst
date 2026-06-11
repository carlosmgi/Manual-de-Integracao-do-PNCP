Consultar Parte Envolvida em Ata de Registro de Preço
=====================================================

:destaque-amarelo-claro:`Serviço que recupera os dados de uma parte envolvida específica de uma ata de registro de preço.`

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - :destaque-amarelo-claro:`/v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/partesenvolvidas/{cnpjOrgao}/{codUnidade}/{tipoParteEnvolvida}`
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
	:emphasize-lines: 1,2

	curl -k -X GET \
	  "${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1/partesenvolvidas/00394460000141/1/1" \
	  -H "accept: */*"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   :destaque-amarelo-claro:`Alimentar os parâmetros {cnpj}, {anoCompra}, {sequencialCompra}, {sequencialAta} na URL.`

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
     - :destaque-amarelo-claro:`cnpjOrgao`
     - :destaque-amarelo-claro:`Texto (14)`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`CNPJ do órgão/entidade da parte envolvida`

   * - :destaque-amarelo-claro:`6`
     - :destaque-amarelo-claro:`codUnidade`
     - :destaque-amarelo-claro:`Texto (30)`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Código da unidade administrativa da parte envolvida`

   * - :destaque-amarelo-claro:`7`
     - :destaque-amarelo-claro:`tipoParteEnvolvida`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Código do tipo da parte envolvida`

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
     - :destaque-amarelo-claro:`dataInclusao`
     - :destaque-amarelo-claro:`Data/Hora`
     - :destaque-amarelo-claro:`Data/Hora da inclusão da informação no PNCP`

   * - :destaque-amarelo-claro:`2`
     - :destaque-amarelo-claro:`tipoParteEnvolvida`
     - :destaque-amarelo-claro:`Lista`
     - :destaque-amarelo-claro:`Tipo de Parte Envolvida`

   * - :destaque-amarelo-claro:`2.1`
     - :destaque-amarelo-claro:`id`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Código do Tipo de Parte Envolvida`

   * - :destaque-amarelo-claro:`2.2`
     - :destaque-amarelo-claro:`nome`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Nome do Tipo de Parte Envolvida`

   * - :destaque-amarelo-claro:`2.3`
     - :destaque-amarelo-claro:`descricao`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Descrição do Tipo de Parte Envolvida`

   * - :destaque-amarelo-claro:`3`
     - :destaque-amarelo-claro:`orgao`
     - :destaque-amarelo-claro:`Lista`
     - :destaque-amarelo-claro:`Dados do Órgão/Entidade`

   * - :destaque-amarelo-claro:`3.1`
     - :destaque-amarelo-claro:`cnpj`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`CNPJ do Órgão/Entidade`

   * - :destaque-amarelo-claro:`3.2`
     - :destaque-amarelo-claro:`nome`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Nome do Órgão/Entidade`

   * - :destaque-amarelo-claro:`4`
     - :destaque-amarelo-claro:`unidade`
     - :destaque-amarelo-claro:`Lista`
     - :destaque-amarelo-claro:`Dados da Unidade Administrativa`

   * - :destaque-amarelo-claro:`4.1`
     - :destaque-amarelo-claro:`codigo`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Código da Unidade Administrativa`

   * - :destaque-amarelo-claro:`4.2`
     - :destaque-amarelo-claro:`nomeUnidade`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Nome da Unidade Administrativa`

   * - :destaque-amarelo-claro:`4.3`
     - :destaque-amarelo-claro:`localidade`
     - :destaque-amarelo-claro:`Lista`
     - :destaque-amarelo-claro:`Localidade da Unidade Administrativa`

   * - :destaque-amarelo-claro:`4.4.1`
     - :destaque-amarelo-claro:`uf`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Unidade Federativa do Município`

   * - :destaque-amarelo-claro:`4.4.2`
     - :destaque-amarelo-claro:`codigoIbgeMunicipio`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Código IBGE do Município`

   * - :destaque-amarelo-claro:`4.4.3`
     - :destaque-amarelo-claro:`nomeMunicipio`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Nome do Município`
\
