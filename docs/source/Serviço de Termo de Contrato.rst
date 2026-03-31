Serviço de Termo de Contrato
============================

Inserir Termo de Contrato
-------------------------

Serviço que permite inserir um termo de contrato a um contrato. O termo pode ser um
termo aditivo, um termo de rescisão ou um termo de apostilamento.

Detalhes da Requisição
----------------------

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/contratos/{ano}/{sequencial}/termos
     - POST

Exemplo de Payload
------------------

.. code-block:: json
  :linenos:

   {
     "tipoTermoContratoId": 2,
     "numeroTermoContrato": "1",
     "objetoTermoContrato": "Termo de contrato para exemplificar uso da API.",
     "dataAssinatura": "2021-07-22",
     "qualificacaoAcrescimoSupressao": false,
     "qualificacaoVigencia": false,
     "qualificacaoFornecedor": false,
     "qualificacaoReajuste": false,
     "qualificacaoInformativo": true,
     "informativoObservacao": "Registro exemplificativo.",
     "niFornecedor": "12345678000190",
     "tipoPessoaFornecedor": "PJ",
     "nomeRazaoSocialFornecedor": "Fornecedor de teste",
     "niFornecedorSubContratado": "",
     "tipoPessoaFornecedorSubContratado": "",
     "nomeRazaoSocialFornecedorSubContratado": "",
     "fundamentoLegal": "",
     "valorAcrescido": 0,
     "numeroParcelas": 0,
     "valorParcela": 0,
     "valorGlobal": 0,
     "prazoAditadoDias": 0,
     "dataVigenciaInicio": "2021-07-23",
     "dataVigenciaFim": "2021-07-24"
   }

Exemplo Requisição (cURL)
-------------------------

.. code-block:: bash
  :linenos:

   curl -k -X POST \
     --header "Authorization: Bearer access_token" \
     "${BASE_URL}/v1/orgaos/10000000000003/contratos/2021/1/termos" \
     -H "accept: */*" \
     -H "Content-Type: application/json" \
     --data "@/home/objeto.json"

Dados de Entrada
----------------

.. note::

   A URL possui os parâmetros {cnpj}, {ano} e {sequencial}

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
     - cnpj
     - Texto (14)
     - Sim
     - Cnpj do órgão do contrato
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do contrato
   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Número sequencial do contrato (gerado pelo PNCP)
   * - 4
     - tipoTermoContratoId
     - Inteiro
     - Sim
     - Código da tabela de domínio Tipo de termo de contrato
   * - 5
     - numeroTermoContrato
     - Texto (50)
     - Sim
     - Número do termo de contrato
   * - 6
     - objetoTermoContrato
     - Texto (5120)
     - Sim
     - Descrição do objeto do termo de contrato
   * - 7
     - dataAssinatura
     - Date
     - Sim
     - Data de assinatura do termo de contrato
   * - 8
     - qualificacaoAcrescimoSupressao
     - Booleano
     - Sim
     - Identifica se o termo aditivo terá acréscimo ou supressão
   * - 9
     - qualificacaoVigencia
     - Booleano
     - Sim
     - Identifica se o termo aditivo terá alteração na vigência e número de parcelas
   * - 10
     - qualificacaoFornecedor
     - Booleano
     - Sim
     - Identifica se o termo aditivo terá alteração do fornecedor
   * - 11
     - qualificacaoReajuste
     - Booleano
     - Sim
     - Identifica se o termo aditivo altera valor unitário do item do contrato
   * - 12
     - qualificacaoInformativo
     - Booleano
     - Sim
     - Identifica se o termo aditivo tem alguma observação
   * - 13
     - niFornecedor
     - Texto (30)
     - Não
     - Número de identificação do fornecedor/arrematante (CNPJ, CPF ou estrangeiro)
   * - 14
     - tipoPessoaFornecedor
     - Texto (2)
     - Não
     - PJ - Pessoa jurídica; PF - Pessoa física; PE - Pessoa estrangeira
   * - 15
     - nomeRazaoSocialFornecedor
     - Texto (255)
     - Não
     - Nome ou razão social do fornecedor
   * - 16
     - niFornecedorSubContratado
     - Texto (30)
     - Não
     - Identificação do fornecedor subcontratado (somente em caso de subcontratação)
   * - 17
     - tipoPessoaFornecedorSubContratado
     - Texto (2)
     - Não
     - Tipo de pessoa do subcontratado (PJ, PF, PE)
   * - 18
     - nomeRazaoSocialFornecedorSubContratado
     - Texto (255)
     - Não
     - Nome ou razão social do fornecedor subcontratado
   * - 19
     - informativoObservacao
     - Texto (5120)
     - Não
     - Observação do termo aditivo
   * - 20
     - fundamentoLegal
     - Texto (5120)
     - Não
     - Fundamento legal do termo de contrato
   * - 21
     - valorAcrescido
     - Decimal
     - Não
     - Valor acrescido ou suprimido do contrato (4 casas decimais)
   * - 22
     - numeroParcelas
     - Inteiro
     - Não
     - Número de parcelas
   * - 23
     - valorParcela
     - Decimal
     - Não
     - Valor da parcela
   * - 24
     - valorGlobal
     - Decimal
     - Não
     - Valor global do termo de contrato
   * - 25
     - prazoAditadoDias
     - Inteiro
     - Não
     - Prazo aditado em dias
   * - 26
     - dataVigenciaInicio
     - Date
     - Não
     - Data de início de vigência do contrato
   * - 27
     - dataVigenciaFim
     - Date
     - Não
     - Data do término da vigência do contrato

Dados de retorno
----------------

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
     - location
     - Texto (255) 
     - Sim
     - Endereço http do recurso criado

Exemplo de retorno
------------------

.. code-block:: text
  :linenos:

   Retorno:
   access-control-allow-credentials: true
   access-control-allow-headers: Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin
   access-control-allow-methods: GET,PUT,POST,DELETE,OPTIONS
   access-control-allow-origin: *
   cache-control: no-cache,no-store,max-age=0,must-revalidate
   content-length: 0
   date: ?
   expires: 0
   location: https://treina.pncp.gov.br/api/pncp/v1/orgaos/10000000000003/contratos/2021/1/termos/1
   pragma: no-cache
   strict-transport-security: max-age=?
   x-content-type-options: nosniff
   x-firefox-spdy: ?
   x-frame-options: DENY
   x-xss-protection: 1; mode=block

**Códigos de Retorno**
----------------------

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
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro
