Consultar Parte Envolvida em Ata de Registro de Preço
=====================================================

.. container:: destaque-amarelo

  Serviço que recupera os dados de uma parte envolvida específica de uma ata de registro de preço.

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
   * - :destaque:`/v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/partesenvolvidas/{cnpjOrgao}/{codUnidade}/{tipoParteEnvolvida}`
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
  :emphasize-lines: 1,2

    curl -X 'GET' '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1/partesenvolvidas/00394460000141/1/1' \
    -H 'accept: */*'

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   :destaque:`Alimentar os parâmetros {cnpj}, {anoCompra}, {sequencialCompra} e {sequencialAta} na URL.`

.. list-table::
   :width: 100%
   :widths: 5 25 15 10 45
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
     - :destaque:`CNPJ do órgão originário da contratação (proprietário da contratação)`
   * - :destaque:`2`
     - :destaque:`anoCompra`
     - :destaque:`Inteiro`
     - :destaque:`Sim`
     - :destaque:`Ano da contratação`
   * - :destaque:`3`
     - :destaque:`sequencialCompra`
     - :destaque:`Inteiro`
     - :destaque:`Sim`
     - :destaque:`Sequencial da contratação no PNCP; número sequencial gerado no momento da inclusão`
   * - :destaque:`4`
     - :destaque:`sequencialAta`
     - :destaque:`Inteiro`
     - :destaque:`Sim`
     - :destaque:`Sequencial da ata no PNCP; número sequencial gerado no momento da inclusão`
   * - :destaque:`5`
     - :destaque:`cnpjOrgao`
     - :destaque:`Texto (14)`
     - :destaque:`Sim`
     - :destaque:`CNPJ do órgão/entidade da parte envolvida`
   * - :destaque:`6`
     - :destaque:`codUnidade`
     - :destaque:`Texto (30)`
     - :destaque:`Sim`
     - :destaque:`Código da unidade administrativa da parte envolvida`
   * - :destaque:`7`
     - :destaque:`tipoParteEnvolvida`
     - :destaque:`Inteiro`
     - :destaque:`Sim`
     - :destaque:`Código do tipo da parte envolvida`

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
     - :destaque:`dataInclusao`
     - :destaque:`Data/Hora`
     - :destaque:`Data/Hora da inclusão da informação no PNCP`
   * - :destaque:`2`
     - :destaque:`tipoParteEnvolvida`
     - :destaque:``
     - :destaque:`Tipo de Parte Envolvida`
   * - :destaque:`2.1`
     - :destaque:`id`
     - :destaque:`Inteiro`
     - :destaque:`Código do Tipo de Parte Envolvida`
   * - :destaque:`2.2`
     - :destaque:`nome`
     - :destaque:`Texto`
     - :destaque:`Nome do Tipo de Parte Envolvida`
   * - :destaque:`2.3`
     - :destaque:`descricao`
     - :destaque:`Texto`
     - :destaque:`Descrição do Tipo de Parte Envolvida`
   * - :destaque:`3`
     - :destaque:`orgao`
     - :destaque:``
     - :destaque:`Dados do Órgão/Entidade`
   * - :destaque:`3.1`
     - :destaque:`cnpj`
     - :destaque:`Texto`
     - :destaque:`CNPJ do Órgão/Entidade`
   * - :destaque:`3.2`
     - :destaque:`nome`
     - :destaque:`Texto`
     - :destaque:`Nome do Órgão/Entidade`
   * - :destaque:`4`
     - :destaque:`unidade`
     - :destaque:``
     - :destaque:`Dados da Unidade Administrativa`
   * - :destaque:`4.1`
     - :destaque:`codigo`
     - :destaque:`Texto`
     - :destaque:`Código da Unidade Administrativa`
   * - :destaque:`4.2`
     - :destaque:`nomeUnidade`
     - :destaque:`Texto`
     - :destaque:`Nome da Unidade Administrativa`
   * - :destaque:`4.3`
     - :destaque:`localidade`
     - :destaque:``
     - :destaque:`Localidade da Unidade Administrativa`
   * - :destaque:`4.4.1`
     - :destaque:`uf`
     - :destaque:`Texto`
     - :destaque:`Unidade Federativa do Município`
   * - :destaque:`4.4.2`
     - :destaque:`codigoIbgeMunicipio`
     - :destaque:`Texto`
     - :destaque:`Código IBGE do Município`
   * - :destaque:`4.4.3`
     - :destaque:`nomeMunicipio`
     - :destaque:`Texto`
     - :destaque:`Nome do Município`

\
