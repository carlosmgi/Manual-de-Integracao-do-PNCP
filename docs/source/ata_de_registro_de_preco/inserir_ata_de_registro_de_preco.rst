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

*Destaque em amarelo destinado à identificação das atualizações relativas às entregas de ARP Caronas.*

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

   * - :destaque-amarelo-claro:`11`
     - :destaque-amarelo-claro:`possibilidadeAdesao`
     - :destaque-amarelo-claro:`Booleano`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Indicador se a Ata permite adesão de não participantes (False=Não / True=Sim)`

   * - :destaque-amarelo-claro:`12`
     - :destaque-amarelo-claro:`Lista de Partes Envolvidas`
     - :destaque-amarelo-claro:`List`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Lista de partes envolvidas. É permitido somente os códigos 1 e 2 ao inserir a ARP.`

   * - :destaque-amarelo-claro:`12.1`
     - :destaque-amarelo-claro:`tipoParteEnvolvidaId`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Código do Tipo de Parte Envolvida. Código 1 - Gerenciadora Código 2 - Participante Código 3 - Não Participante`

   * - :destaque-amarelo-claro:`12.2`
     - :destaque-amarelo-claro:`cnpj`
     - :destaque-amarelo-claro:`Texto (14)`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`CNPJ do órgão`

   * - :destaque-amarelo-claro:`12.3`
     - :destaque-amarelo-claro:`codigoUnidadeCompradora`
     - :destaque-amarelo-claro:`Texto (30)`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Código da Unidade Administrativa`

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

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar o parâmetro {cnpj}, {anoCompra} e {sequencialCompra} na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
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
     - Cnpj do órgão originário da contratação informado na inclusão(proprietário da contratação)

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
     - Titulo-Documento
     - Texto (255)
     - Sim
     - Título do documento

   * - 5
     - Tipo-Documento-Id
     - Inteiro
     - Sim
     - Código da tabela de domínio Tipo de documento

   * - 6
     - numeroAtaRegistroPreco
     - Texto (50)
     - Sim
     - Número da ata no sistema de origem

   * - 7
     - anoAta
     - Inteiro
     - Sim
     - Ano da ata

   * - 8
     - dataAssinatura
     - Data
     - Sim
     - Informar a data de assinatura da ata

   * - 9
     - dataVigenciaInicio
     - Data
     - Sim
     - Informar a data de início de vigência da ata

   * - 10
     - dataVigenciaFim
     - Data
     - Sim
     - Informar a data de fim de vigência da ata

   * - 11
     - possibilidadeAdesao
     - Booleano
     - Sim
     - Indicador se a Ata permite adesão de não participantes (False=Não /True=Sim)

   * - 12
     - Lista de Partes Envolvidas
     - Lista
     - Sim
     - Lista de partes envolvidas. É permitido somente os códigos 1 e 2 ao inserir a ARP.
  
   * - 12.1
     - tipoParteEnvolvidaId
     - Inteiro
     - Sim
     - Código do Tipo de Parte Envolvida.
       Código 1  Gerenciadora
       Código 2  Participante
       Código 3  Não Participante

   * - 12.2
     - cnpj
     - Texto (14)
     - Sim
     - CNPJ do órgão

   * - 12.3
     - codigoUnidadeCompradora
     - Texto (30)
     - Sim
     - Código da Unidade Administrativa
