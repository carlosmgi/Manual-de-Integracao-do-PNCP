Inserir Contratos ou Empenhos
=============================

Serviço que permite incluir um contrato ou empenho. Este serviço será acionado por 
qualquer plataforma digital credenciada.  

.. Attention::
  
  Conforme regra de conformidade, prevista no item 5.19, não é possível a inclusão ou retificação de contrato ou empenho que pertença à contratação realizada por Sistema de Registro de Preços (SRP), a qual não possua ao menos uma ata de registro de preços publicada no PNCP. 

**Atualizações da versão 2.3.10**
---------------------------------

.. versionadded:: 2.3.10
 
.. list-table::
  :widths: auto
  :header-rows: 1

  * - Id
    - Campo
    - Tipo
    - Obrigatório
    - Descrição
  * - 27
    - dataVigenciaFim
    - Data
    - Não
    - Data do término da vigência do contrato. Opcional apenas para contrato do tipo igual a 1.
  * - 30
    - sequencialAta
    - Inteiro
    - Não
    - Número sequencial da ata de registro de preço (gerado pelo PNCP no momento da inclusão da ata).
  * - 31
    - frutoAdesao
    - Booleano
    - Sim
    - Indicador se o contrato/empenho é de um não participante, ou seja, fruto da adesão a uma ata de registro de preço.

.. versionchanged:: 2.3.10

  não houve alterações.

.. deprecated:: 2.3.10

  não houve alterações.

Detalhes da Requisição
----------------------

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/contratos
     - POST

Exemplo de Payload
------------------

.. code-block:: json
  :linenos:
  :emphasize-lines: 5,6
  
  {
      "cnpjCompra": "100000000000003",
      "anoCompra": 2021,
      "sequencialCompra": 1,
      "sequencialAta": 1,
      "frutoAdesao": true,
      "tipoContrato": 1,
      "numeroContratoEmpenho": "1",
      "anoContrato": 2021,
      "processo": "1/2021",
      "categoriaProcesso": 2,
      "receita": false,
      "codigoUnidade": "1",
      "niFornecedor": "100000000000010",
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
      "identificadorCipi": "11111-011",
      "urlCipi": "https://cipi.economia.gov.br/11111-011"
  }

Exemplo Requisição (cURL)
-------------------------

.. code-block:: bash

   curl -X POST \
     --header "Authorization: Bearer access_token" \
     --header "accept: */*" \
     --header "Content-Type: application/json" \
     --data "@home/objeto.json" \
     "$BASE_URL/v1/orgaos/100000000000003/contratos"

Dados de Entrada
----------------

.. note::

  Alimentar o parâmetro {cnpj} na URL. 

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
     - CNPJ
     - Texto (14)
     - Sim
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação).
   * - 2
     - cnpjCompra
     - Texto (14)
     - Sim
     - Cnpj do órgão originário da contratação (proprietário da contratação ou alienação de bens) 
   * - 3
     - anoCompra
     - Inteiro
     - Sim
     - Ano da contratação 
   * - 4
     - sequencialCompra
     - Inteiro
     - Sim
     - Número sequencial da contratação (gerado pelo PNCP no momento da inclusão da contratação) 
   * - 5
     - tipoContratoId
     - Inteiro
     - Sim
     - Código da tabela de domínio Tipo de contrato/empenho
   * - 6
     - numeroContratoEmpenho 
     - Texto (50) 
     - Sim
     - Número do contrato ou empenho com força de contrato no sistema de origem 
   * - 7
     - anoContrato
     - Inteiro
     - Sim
     - Ano do contrato/empenho 
   * - 8
     - processo
     - Texto (50)
     - Sim
     - Número do processo
   * - 9
     - categoriaProcessoId
     - Inteiro
     - Sim
     - Código da tabela de domínio Categoria 
   * - 10
     - receita
     - Booleano
     - Sim
     - Receita ou despesa: True - Receita; False - Despesa; 
   * - 11
     - codigoUnidade
     - Texto (20) 
     - Sim
     - Código da unidade executora do órgão do contrato/empenho; A unidade deverá estar cadastrada para o órgão;
   * - 12
     - niFornecedor
     - Texto (30) 
     - Sim
     - Número de identificação do fornecedor/arrematante; CNPJ, CPF ou identificador de empresa estrangeira; 
   * - 13
     - tipoPessoaFornecedor
     - Texto (2) 
     - Sim
     - PJ - Pessoa jurídica; PF - Pessoa física; PE - Pessoa estrangeira; 
   * - 14
     - nomeRazaoSocialFornecedor 
     - Texto (100)
     - Sim
     - Nome ou razão social do fornecedor/arrematante 
   * - 15
     - niFornecedorSubContratado 
     - Texto (30)
     - Não
     - Número de identificação do fornecedor subcontratado; CNPJ, CPF ou identificador de empresa estrangeira; Somente em caso de subcontratação; Não se aplica a leilão
   * - 16
     - tipoPessoaFornecedorSubContratado
     - Texto (2)
     - Não
     - PJ - Pessoa jurídica; PF - Pessoa física; PE - Pessoa estrangeira; Somente em caso de subcontratação; Não se aplica a leilão.
   * - 17
     - nomeRazaoSocialFornecedorSubContratado
     - Texto (100)
     - Não
     - Nome ou razão social do fornecedor subcontratado; Somente em caso de subcontratação; Não se aplica a leilão.
   * - 18
     - objetoContrato
     - Texto (5120)
     - Sim
     - Descrição do objeto do contrato/empenho.
   * - 19
     - informacaoComplementar
     - Texto (5120)
     - Não
     - Informações complementares; se existir.
   * - 20
     - valorInicial
     - Decimal
     - Sim
     - Valor inicial do contrato/empenho. Precisão de 4 dígitos decimais. Ex: 100.0000.
   * - 21
     - numeroParcelas
     - Inteiro
     - Sim
     - Número de parcelas.
   * - 22
     - valorParcela
     - Decimal
     - Não
     - Valor da parcela. Precisão de 4 dígitos decimais. Ex: 100.0000.
   * - 23
     - valorGlobal
     - Decimal
     - Sim
     - Valor global do contrato/empenho; Precisão de 4 dígitos decimais; Ex: 100.0000.
   * - 24
     - valorAcumulado
     - Decimal
     - Não
     - Valor acumulado do contrato/empenho; Precisão de 4 dígitos decimais; Ex: 100.0000.
   * - 25
     - dataAssinatura
     - Data
     - Sim
     - Data de assinatura do contrato.
   * - 26
     - dataVigenciaInicio
     - Data
     - Sim
     - Data de início de vigência do contrato.
   * - 27
     - dataVigenciaFim
     - Data
     - Não
     - Data do término da vigência do contrato. Opcional apenas para contrato do tipo igual a 1.
   * - 28
     - identificadorCipi
     - String (512)
     - Não
     - Identificador do contrato no Cadastro Integrado de Projetos de Investimento. Não se aplica a leilão.
   * - 29
     - urlCipi
     - String (8 a 14)
     - Não
     - URL com informações do contrato no sistema de Cadastro Integrado de Projetos de Investimento. Não se aplica a leilão.
   * - 30
     - sequencialAta
     - Inteiro
     - Não
     - Número sequencial da ata de registro de preço (gerado pelo PNCP no momento da inclusão da ata).
   * - 31
     - frutoAdesao
     - Booleano
     - Sim
     - Indicador se o contrato/empenho é de um não participante, ou seja, fruto da adesão a uma ata de registro de preço.

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

Exemplo de Retorno
----------------------

.. code-block:: http
   :linenos:

   HTTP/1.1 201 Created
   access-control-allow-credentials: true
   access-control-allow-headers: Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin
   access-control-allow-methods: GET,PUT,POST,DELETE,OPTIONS
   access-control-allow-origin: *
   cache-control: no-cache,no-store,max-age=0,must-revalidate
   content-length: 0
   date: Tue, 21 Jul 2021 10:00:00 GMT
   expires: 0
   location: https://treina.pncp.gov.br/api/pncp/v1/orgaos/10000000000003/contratos/2021/1
   pragma: no-cache
   strict-transport-security: max-age=31536000
   x-content-type-options: nosniff
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
