Inserir Ata de Registro de Preço
================================

Serviço que permite inserir uma ata de Registro de Preço no PNCP referente a uma contratação.

.. container:: destaque-amarelo

   O sistema exige o upload de um arquivo anexo à ata de registro de preço enviada. As extensões permitidas para o arquivo anexo são listadas na seção Tabelas de domínio - Envio de arquivos pelas APIs de Documento e os tipos de documento/arquivo aceitos pelo PNCP podem ser consultados na seção Tabelas de domínio - Tipo de Documento, deste manual.

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

**Atualizações da versão 2.3.10**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. versionadded:: 2.3.10
 
.. list-table::
   :widths: auto
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição

   * - :destaque:`4`
     - :destaque:`Titulo-Documento`
     - :destaque:`Texto(255)`
     - :destaque:`Sim`
     - :destaque:`Título do documento`

   * - :destaque:`5`
     - :destaque:`Tipo-Documento-Id`
     - :destaque:`Inteiro`
     - :destaque:`Sim`
     - :destaque:`Código da tabela de domínio Tipo de documento .`
  
   * - :linha-destaque-amarelo:`11`
     - :linha-destaque-amarelo:`possibilidadeAdesao`
     - :linha-destaque-amarelo:`Booleano`
     - :linha-destaque-amarelo:`Sim`
     - :linha-destaque-amarelo:`Indicador se a Ata permite adesão de não participantes (False=Não / True=Sim)`

   * - :linha-destaque-amarelo:`12`
     - :linha-destaque-amarelo:`Lista de Partes Envolvidas`
     - :linha-destaque-amarelo:`List`
     - :linha-destaque-amarelo:`Sim`
     - :linha-destaque-amarelo:`Lista de partes envolvidas. É permitido somente os códigos 1 e 2 ao inserir a ARP.`

   * - :linha-destaque-amarelo:`12.1`
     - :linha-destaque-amarelo:`tipoParteEnvolvidaId`
     - :linha-destaque-amarelo:`Inteiro`
     - :linha-destaque-amarelo:`Sim`
     - :linha-destaque-amarelo:`Código do Tipo de Parte Envolvida. Código 1 - Gerenciadora Código 2 - Participante Código 3 - Não Participante`

   * - :linha-destaque-amarelo:`12.2`
     - :linha-destaque-amarelo:`cnpj`
     - :linha-destaque-amarelo:`Texto (14)`
     - :linha-destaque-amarelo:`Sim`
     - :linha-destaque-amarelo:`CNPJ do órgão`

   * - :linha-destaque-amarelo:`12.3`
     - :linha-destaque-amarelo:`codigoUnidadeCompradora`
     - :linha-destaque-amarelo:`Texto (30)`
     - :linha-destaque-amarelo:`Sim`
     - :linha-destaque-amarelo:`Código da Unidade Administrativa`

.. versionchanged:: 2.3.10

   não houve alterações.

.. deprecated:: 2.3.10

   não houve alterações.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas
     - POST

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  :emphasize-lines: 1,8-15

    Arquivo JSON:
      {
      "cnpjCompra": "10000000000003",
      "anoCompra": 2021,
      "sequencialCompra": 1,
      "sequencialAta": 1,
      "frutoAdesao": true,
      "temRemanejamento": false,
      "tipoContratoId": 1,
      "numeroContratoEmpenho": "1",
      "anoContrato": 2021,
      "processo": "1/2021",
      "categoriaProcessoId": 2,
      "receita": false,
      "codigoUnidade": "1",
      "niFornecedor": "10000000000010",
      "tipoPessoaFornecedor": "PJ",
      "nomeRazaoSocialFornecedor": "Fornecedor do Teste I",
      "objetoContrato": "Contrato para exemplificar uso da API PNCP",
      "informacaoComplementar": "",
      "valorInicial": 10000.0000,
      "numeroParcelas": 2,
      "valorParcela": 5000.0000,
      "valorGlobal": 10000.0000,
      "valorAcumulado": 10000.0000,
      "dataAssinatura": "2021-07-27",
      "dataVigenciaInicio": "2021-07-28",
      "dataVigenciaFim": "2021-07-29",
      "identificadorCipi": "111.11-011",
      "urlCipi": "https://cipi.economia.gov.br/111.11-011"
    }

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1-6

   curl -X POST \
     --header "Authorization: Bearer access_token" \
     --header "accept: */*" \
     --header "Content-Type: application/json" \
     --data "@home/objeto.json" \
     "$BASE_URL/v1/orgaos/100000000000003/contratos"
