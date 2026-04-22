Retificar Ata de Registro de Preço
==================================

Serviço que permite retificar os dados de uma ata de Registro de Preço. 

  **Importante lembrar que na Retificação todas as informações terão que ser enviadas novamente, não apenas as que sofreram alteração.**

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

.. Attention::
  
    Conforme regra de conformidade, prevista no item 5.19, não é possível a inclusão ou retificação de contrato ou empenho que pertença à contratação realizada por Sistema de Registro de Preços (SRP), a qual não possua ao menos uma ata de registro de preços publicada no PNCP. 

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
  * - :destaque-amarelo-claro:`13`
    - :destaque-amarelo-claro:`possibilidadeAdesao`
    - :destaque-amarelo-claro:`Booleano`
    - :destaque-amarelo-claro:`Sim`
    - :destaque-amarelo-claro:`Indicador se a Ata permite adesão de não participantes (False=Não /True=Sim)`

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
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}
     - PUT

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

**Para retificação dos dados da ata, informe todos os campos:**

.. code-block:: json
   :linenos:

   {
     "numeroAtaRegistroPreco": "1/2021",
     "anoAta": 2021,
     "dataAssinatura": "2021-07-01",
     "dataInicioVigencia": "2021-07-01",
     "dataFimVigencia": "2022-07-01",
     :destaque-amarelo-claro:`"possibilidadeAdesao": true,`
     "justificativa": "motivo/justificativa para retificacao da ata"
   }

**Para o cancelamento da ata:**

.. code-block:: json
   :linenos:

   {
     "numeroAtaRegistroPreco": "1/2021",
     "anoAta": 2021,
     "dataAssinatura": "2021-07-01",
     "dataInicioVigencia": "2021-07-01",
     "dataFimVigencia": "2022-07-01",
     :destaque-amarelo-claro:`"possibilidadeAdesao": true,`
     "cancelado": true,
     "dataCancelamento": "2023-01-01T12:00:00",
     "justificativa": "motivo/justificativa para cancelamento da ata"
   }

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
   :linenos:

   curl -X 'PUT' '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1' \
     -H 'accept: */*' \
     -H 'Authorization: Bearer <TOKEN_AUTORIZACAO>' \
     -H 'Content-Type: application/json' \
     -d '@/home/objeto.json'

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar o parâmetro {cnpj}, {anoCompra}, {sequencialCompra} e {sequencialAta} na URL.

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
     - Sequencial da contratação no PNCP; número sequencial gerado no momento em que a contratação foi inserida no PNCP

   * - 4
     - sequencialAta
     - Inteiro
     - Sim
     - Sequencial da ata no PNCP; número sequencial gerado no momento em que a ata foi inserida no PNCP

   * - 5
     - numeroAtaRegistroPreco
     - Texto (50)
     - Sim
     - Número da ata no sistema de origem

   * - 6
     - anoAta
     - Inteiro
     - Sim
     - Ano da ata

   * - 7
     - dataAssinatura
     - Data
     - Sim
     - Informar a data de assinatura da ata

   * - 8
     - dataInicioVigencia
     - Data
     - Sim
     - Informar a data de início de vigência da ata

   * - 9
     - dataFimVigencia
     - Data
     - Sim
     - Informar a data de fim de vigência da ata

   * - 10
     - cancelado
     - Booleano
     - Não
     - Indicador de cancelamento da ata; se omitido, assume valor “Falso”

   * - 11
     - dataCancelamento
     - Data e Hora
     - Não
     - Informar a data e hora de cancelamento da ata caso o indicador de cancelamento seja verdadeiro

   * - 12
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para a retificação dos atributos da ata

   * - :destaque-amarelo-claro:`13`
     - :destaque-amarelo-claro:`possibilidadeAdesao`
     - :destaque-amarelo-claro:`Booleano`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Indicador se a ata permite adesão de não participantes (False = Não / True = Sim)`

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
     - -
     - JSON
     - Dados da Ata de Registro de Preço após alteração

Exemplo de Retorno
~~~~~~~~~~~~~~~~~~

.. code-block:: http
   :linenos:

   Retorno (headers HTTP):

   access-control-allow-credentials: true
   access-control-allow-headers: Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin
   access-control-allow-methods: GET,PUT,POST,DELETE,OPTIONS
   access-control-allow-origin: *
   cache-control: no-cache,no-store,max-age=0,must-revalidate
   connection: keep-alive
   content-type: application/json
   date: Tue, 27 Jul 2021 22:50:21 GMT
   expires: 0
   keep-alive: timeout=60
   pragma: no-cache
   transfer-encoding: chunked
   x-content-type-options: nosniff
   x-frame-options: DENY
   x-xss-protection: 1; mode=block

   Retorno (corpo da requisição):
   {
     "numeroAtaRegistroPreco": "1/2021",
     "anoAta": 2021,
     "dataAssinatura": "2021-07-27",
     "dataVigenciaInicio": "2021-07-27",
     "dataVigenciaFim": "2022-07-27",
     "dataCancelamento": null,
     "cancelado": false,
     "dataPublicacaoPncp": "2021-07-27T19:45:57.969+00:00",
     "dataInclusao": "2021-07-27T19:45:57.969+00:00",
     "dataAtualizacao": "2021-07-27T22:50:20.352+00:00",
     "sequencialAta": 1,
     "numeroControlePNCP": "00394460000141-1-000001/2021-000001",
     "orgaoEntidade": {
       "cnpj": "00394460000141",
       "razaoSocial": "Ministério da Economia",
       "poderId": "E",
       "esferaId": "F"
     },
     "orgaoSubRogado": null,
     "unidadeOrgao": {
       "ufNome": "Distrito Federal",
       "ufSigla": "DF",
       "municipioId": 5570,
       "municipioNome": "Brasília",
       "codigoUnidade": "1",
       "nomeUnidade": "Unidade de serviços"
     },
     "unidadeSubRogada": null,
     "modalidadeNome": "Leilão",
     "objetoCompra": "Teste Teste",
     "informacaoComplementarCompra": "slfkweofndfejf"
   }

**Códigos de Retorno**
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 25
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 201
     - Created
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 401
     - Unauthorized
     - Erro
   * - 404
     - NotFound
     - Erro
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

