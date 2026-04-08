Serviços de Contrato ou Empenho
============================

Inserir Contratos ou Empenhos
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite incluir um contrato ou empenho. Este serviço será acionado por qualquer plataforma digital credenciada. 

.. container:: destaque-amarelo

    O sistema exige o upload de um arquivo anexo à ata de registro de preço enviada. As extensões permitidas para o arquivo anexo são listadas na seção Tabelas de domínio - Envio de arquivos pelas APIs de Documento e os tipos de documento/arquivo aceitos pelo PNCP podem ser consultados na seção Tabelas de domínio - Tipo de Documento, deste manual.

\

.. Attention::
  
    Conforme regra de conformidade, prevista no item 5.19, não é possível a inclusão ou retificação de contrato ou empenho que pertença à contratação realizada por Sistema de Registro de Preços (SRP), a qual não possua ao menos uma ata de registro de preços publicada no PNCP. 

**Atualizações da versão 2.3.10**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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
  * - :kbd:`30`
    - :kbd:`sequencialAta`
    - :kbd:`Inteiro`
    - :kbd:`Não`
    - :kbd:`Número sequencial da ata de registro de preço (gerado pelo PNCP no momento da inclusão da ata).`
  * - :kbd:`31`
    - :kbd:`frutoAdesao`
    - :kbd:`Booleano`
    - :kbd:`Sim`
    - :kbd:`Indicador se o contrato/empenho é de um não participante, ou seja, fruto da adesão a uma ata de registro de preço.`

.. versionchanged:: 2.3.10

  não houve alterações.

.. deprecated:: 2.3.10

  não houve alterações.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/contratos
     - POST

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
  :linenos:
  :emphasize-lines: 1,6-8

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
^^^^^^^^^^^^^^^^^^^^^^^^^

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
^^^^^^^^^^^^^^^^

.. note::
   Alimentar o parâmetro {cnpj} na URL.

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
     - CNPJ do órgão do contrato/empenho
   * - 2
     - tituloDocumento
     - Texto (255)
     - Sim
     - Título do documento
   * - 3
     - tipoDocumentoId
     - Inteiro
     - Sim
     - Código da tabela de domínio tipo de documento
   * - 4
     - cnpjCompra
     - Texto (14)
     - Sim
     - CNPJ do órgão originário da contratação (proprietário da contratação ou alienação de bens)
   * - 5
     - anoCompra
     - Inteiro
     - Sim
     - Ano da contratação
   * - 6
     - sequencialCompra
     - Inteiro
     - Sim
     - Número sequencial da contratação (gerado pelo PNCP no momento da inclusão da contratação)
   * - 7
     - tipoContratoId
     - Inteiro
     - Sim
     - Código da tabela de domínio tipo de contrato/empenho
   * - 8
     - numeroContratoEmpenho
     - Texto (50)
     - Sim
     - Número do contrato ou empenho com força de contrato no sistema de origem
   * - 9
     - anoContrato
     - Inteiro
     - Sim
     - Ano do contrato/empenho
   * - 10
     - processo
     - Texto (50)
     - Sim
     - Número do processo
   * - 11
     - categoriaProcessoId
     - Inteiro
     - Sim
     - Código da tabela de domínio categoria
   * - 12
     - receita
     - Booleano
     - Sim
     - Receita ou despesa (true = receita / false = despesa)
   * - 13
     - codigoUnidade
     - Texto (20)
     - Sim
     - Código da unidade executora do órgão do contrato/empenho; a unidade deverá estar cadastrada para o órgão
   * - 14
     - niFornecedor
     - Texto (30)
     - Sim
     - Número de identificação do fornecedor/arrematante (CNPJ, CPF ou identificador de empresa estrangeira)
   * - 15
     - tipoPessoaFornecedor
     - Texto (2)
     - Sim
     - PJ - pessoa jurídica; PF - pessoa física; PE - pessoa estrangeira
   * - 16
     - nomeRazaoSocialFornecedor
     - Texto (100)
     - Sim
     - Nome ou razão social do fornecedor/arrematante
   * - 17
     - niFornecedorSubContratado
     - Texto (30)
     - Não
     - Número de identificação do fornecedor subcontratado (somente em caso de subcontratação; não se aplica a leilão)
   * - 18
     - tipoPessoaFornecedorSubContratado
     - Texto (2)
     - Não
     - Tipo de pessoa do fornecedor subcontratado (somente em caso de subcontratação; não se aplica a leilão)
   * - 19
     - nomeRazaoSocialFornecedorSubContratado
     - Texto (100)
     - Não
     - Nome ou razão social do fornecedor subcontratado (somente em caso de subcontratação; não se aplica a leilão)
   * - 20
     - objetoContrato
     - Texto (5120)
     - Sim
     - Descrição do objeto do contrato/empenho
   * - 21
     - informacaoComplementar
     - Texto (5120)
     - Não
     - Informações complementares, se existirem
   * - 22
     - valorInicial
     - Decimal
     - Sim
     - Valor inicial do contrato/empenho (precisão de 4 dígitos decimais; ex: 100.0000)
   * - 23
     - numeroParcelas
     - Inteiro
     - Sim
     - Número de parcelas
   * - 24
     - valorParcela
     - Decimal
     - Não
     - Valor da parcela (precisão de 4 dígitos decimais; ex: 100.0000)
   * - 25
     - valorGlobal
     - Decimal
     - Sim
     - Valor global do contrato/empenho (precisão de 4 dígitos decimais; ex: 100.0000)
   * - 26
     - valorAcumulado
     - Decimal
     - Não
     - Valor acumulado do contrato/empenho (precisão de 4 dígitos decimais; ex: 100.0000)
   * - 27
     - dataAssinatura
     - Data
     - Sim
     - Data de assinatura do contrato
   * - 28
     - dataVigenciaInicio
     - Data
     - Sim
     - Data de início de vigência do contrato
   * - 29
     - dataVigenciaFim
     - Data
     - Não
     - Data de término da vigência do contrato (opcional apenas para contrato do tipo igual a 1)
   * - 30
     - identificadorCipi
     - String (512)
     - Não
     - Identificador do contrato no Cadastro Integrado de Projetos de Investimento (não se aplica a leilão)
   * - 31
     - urlCipi
     - String (8 a 14)
     - Não
     - URL com informações do contrato no sistema de Cadastro Integrado de Projetos de Investimento (não se aplica a leilão)
   * - :kbd:`32`
     - :kbd:`sequencialAta`
     - :kbd:`Inteiro`
     - :kbd:`Não`
     - :kbd:`Número sequencial da ata de registro de preço (gerado pelo PNCP no momento da inclusão da ata)`
   * - :kbd:`33`
     - :kbd:`frutoAdesao`
     - :kbd:`Booleano`
     - :kbd:`Sim`
     - :kbd:`Indicador se o contrato/empenho é fruto de adesão a ata de registro de preço (false = não / true = sim)`
   * - :kbd:`34`
     - :kbd:`temRemanejamento`
     - :kbd:`Booleano`
     - :kbd:`Sim`
     - :kbd:`Indicador de remanejamento (false = não / true = sim)`

Dados de retorno
^^^^^^^^^^^^^^^^

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
^^^^^^^^^^^^^^^^^^

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
^^^^^^^^^^^^^^^^^^^^^^

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

Retificar Contrato ou Empenho
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite retificar um contrato ou empenho. Este serviço será acionado por
qualquer plataforma digital credenciada. 

.. Attention::
  
  Na Retificação todas as informações terão que ser enviadas novamente, não apenas as que sofreram alteração. Conforme regra de conformidade, prevista no item 5.19, não é possível a inclusão ou retificação de contrato ou empenho que pertença à contratação realizada por Sistema de Registro de Preços (SRP), a qual não possua ao menos uma ata de registro de preços publicada no PNCP.

**Atualizações da versão 2.3.10**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. versionadded:: 2.3.10
 
.. list-table::
  :widths: auto
  :header-rows: 1

  * - Id
    - Campo
    - Tipo
    - Obrigatório
    - Descrição
  * - 30
    - dataVigenciaFim
    - Data
    - Não
    - Data do término da vigência do contrato. Opcional apenas para contrato do tipo igual a 1.
  * - 34
    - sequencialAta
    - Inteiro
    - Não
    - Número sequencial da ata de registro de preço (gerado pelo PNCP no momento da inclusão da ata).
  * - 35
    - frutoAdesao
    - Booleano
    - Sim
    - Indicador se o contrato/empenho é de um não participante, ou seja, fruto da adesão a uma ata de registro de preço.

.. versionchanged:: 2.3.10

  não houve alterações.

.. deprecated:: 2.3.10

  não houve alterações.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/contratos/{ano}/{sequencial}
     - PUT

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
   :linenos:
   :emphasize-lines: 5-7

       {
      "cnpjCompra": "10000000000003",
      "anoCompra": 2021,
      "sequencialCompra": 1,
      "sequencialAta": 1,
      "frutoAdesao": true,
      "temRemanejamento": false,
      "tipoContratoId": 1,
      "numeroContratoEmpenho": "1",
      "processo": "1/2021",
      "categoriaProcessoId": 2,
      "receita": false,
      "codigoUnidade": "1",
      "cnpjOrgaoSubRogado": "",
      "codigoUnidadeSubRogada": "",
      "niFornecedor": "10000000000010",
      "tipoPessoaFornecedor": "PJ",
      "nomeRazaoSocialFornecedor": "Fornecedor do Teste I",
      "niFornecedorSubContratado": "",
      "tipoPessoaFornecedorSubContratado": "",
      "nomeRazaoSocialFornecedorSubContratado": "",
      "objetoContrato": "Contrato para exemplificar uso da API de retificação no PNCP.",
      "informacaoComplementar": "",
      "valorInicial": 10000.00,
      "numeroParcelas": 2,
      "valorParcela": 5000.00,
      "valorGlobal": 10000.00,
      "valorAcumulado": 10000.00,
      "dataAssinatura": "2021-07-21",
      "dataVigenciaInicio": "2021-07-22",
      "dataVigenciaFim": "2021-07-23",
      "justificativa": "motivo/justificativa para a retificação do contrato"
      “identificadorCipi”: “111.11-011”,
      “urlCipi”: ” https://cipi.economia.gov.br/111.11-011”
    }

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash
  :linenos:

   curl -k -X PUT \
     --header "Authorization: Bearer access_token" \
     -H "accept: */*" \
     -H "Content-Type: application/json" \
     "${BASE_URL}/v1/orgaos/10000000000003/contratos/2021/1" \
     --data "@/home/objeto.json"

Dados de Entrada
^^^^^^^^^^^^^^^^

.. note::

  Alimentar os parâmetros {cnpj}, {ano} e {sequencial} na URL.

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
     - Cnpj do órgão do contrato/empenho
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do contrato/empenho
   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Número sequencial do contrato/empenho (gerado pelo PNCP no momento da inclusão do mesmo)
   * - 4
     - cnpjCompra
     - Texto (14)
     - Sim
     - Cnpj do órgão originário da contratação (proprietário da contratação ou alienação de bens)
   * - 5
     - anoCompra
     - Inteiro
     - Sim
     - Ano da contratação
   * - 6
     - sequencialCompra
     - Inteiro
     - Sim
     - Número sequencial da contratação (gerado pelo PNCP no momento da inclusão da contratação)
   * - 7
     - tipoContratoId
     - Inteiro
     - Sim
     - Código da tabela de domínio Tipo de contrato
   * - 8
     - numeroContratoEmpenho
     - Texto (50)
     - Sim
     - Número do contrato ou empenho com força de contrato
   * - 9
     - processo
     - Texto (50)
     - Sim
     - Número do processo
   * - 10
     - categoriaProcessoId
     - Inteiro
     - Sim
     - Código da tabela de domínio Categoria
   * - 11
     - receita
     - Booleano
     - Sim
     - Receita ou despesa: True - Receita; False - Despesa
   * - 12
     - codigoUnidade
     - Texto (20)
     - Sim
     - Código da unidade executora do órgão do contrato/empenho; a unidade deverá estar cadastrada para o órgão
   * - 13
     - cnpjOrgaoSubRogado
     - Texto (14)
     - Não
     - Cnpj do órgão sub-rogado; somente em caso de sub-rogação
   * - 14
     - codigoUnidadeSubRogada
     - Texto (20)
     - Não
     - Código da unidade executora do órgão sub-rogado do contrato/empenho. Obrigatório caso ocorra sub-rogação do órgão
   * - 15
     - niFornecedor
     - Texto (30)
     - Sim
     - Número de identificação do fornecedor/arrematante; CNPJ, CPF ou identificador de empresa estrangeira
   * - 16
     - tipoPessoaFornecedor
     - Texto (2)
     - Sim
     - PJ - Pessoa jurídica; PF - Pessoa física; PE - Pessoa estrangeira
   * - 17
     - nomeRazaoSocialFornecedor
     - Texto (100)
     - Sim
     - Nome ou razão social do fornecedor/arrematante
   * - 18
     - niFornecedorSubContratado
     - Texto (30)
     - Não
     - Número de identificação do fornecedor subcontratado; CNPJ, CPF ou identificador de empresa estrangeira; somente em caso de subcontratação; não se aplica a leilão
   * - 19
     - tipoPessoaFornecedorSubContratado
     - Texto (2)
     - Não
     - PJ - Pessoa jurídica; PF - Pessoa física; PE - Pessoa estrangeira; somente em caso de subcontratação; não se aplica a leilão
   * - 20
     - nomeRazaoSocialFornecedorSubContratado
     - Texto (100)
     - Não
     - Nome ou razão social do fornecedor subcontratado; somente em caso de subcontratação; não se aplica a leilão
   * - 21
     - objetoContrato
     - Texto (5120)
     - Sim
     - Descrição do objeto do contrato/empenho
   * - 22
     - informacaoComplementar
     - Texto (5120)
     - Não
     - Informações complementares, se existirem
   * - 23
     - valorInicial
     - Decimal
     - Sim
     - Valor inicial do contrato/empenho; precisão de 4 dígitos decimais. Ex: 100.0000
   * - 24
     - numeroParcelas
     - Inteiro
     - Sim
     - Número de parcelas
   * - 25
     - valorParcela
     - Decimal
     - Não
     - Valor da parcela; precisão de 4 dígitos decimais. Ex: 100.0000
   * - 26
     - valorGlobal
     - Decimal
     - Sim
     - Valor global do contrato/empenho; precisão de 4 dígitos decimais. Ex: 100.0000
   * - 27
     - valorAcumulado
     - Decimal
     - Não
     - Valor acumulado do contrato/empenho; precisão de 4 dígitos decimais. Ex: 100.0000
   * - 28
     - dataAssinatura
     - Data
     - Sim
     - Data de assinatura do contrato
   * - 29
     - dataVigenciaInicio
     - Data
     - Sim
     - Data de início de vigência do contrato
   * - 30
     - dataVigenciaFim
     - Data
     - :kbd:`Não`
     - :kbd:`Data do término da vigência do contrato. Opcional apenas para contrato do tipo igual a 1`
   * - 31
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para a retificação dos atributos do contrato/empenho
   * - 32
     - identificadorCipi
     - String (512)
     - Não
     - Identificador do contrato no Cadastro Integrado de Projetos de Investimento. Não se aplica a leilão
   * - 33
     - urlCipi
     - String (8 a 14)
     - Não
     - Url com informações do contrato no sistema de Cadastro Integrado de Projetos de Investimento. Não se aplica a leilão
   * - :kbd:`34`
     - :kbd:`sequencialAta`
     - :kbd:`Inteiro`
     - :kbd:`Não`
     - :kbd:`Número sequencial da ata de registro de preço (gerado pelo PNCP no momento da inclusão da ata)`
   * - :kbd:`35`
     - :kbd:`frutoAdesao`
     - :kbd:`Booleano`
     - :kbd:`Sim`
     - :kbd:`Indicador se o contrato/empenho é de um não participante, ou seja, fruto da adesão a uma ata de registro de preço (False-Não / True-Sim)`
   * - :kbd:`36`
     - :kbd:`temRemanejamento`
     - :kbd:`Boleano`
     - :kbd:`Sim`
     - :kbd:`Indicador de Remanejamento (False-Não / True-Sim)`

Dados de retorno
^^^^^^^^^^^^^^^^

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
^^^^^^^^^^^^^^^^^^

.. code-block:: http
   :linenos:

   HTTP/1.1 204 No Content
   Access-Control-Allow-Credentials: true
   Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, Content-Length, Accept, Origin
   Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS
   Access-Control-Allow-Origin: *
   Cache-Control: no-cache, no-store, max-age=0, must-revalidate
   Content-Length: 0
   Date: ?
   Expires: 0
   Location: https://treina.pncp.gov.br/api/pncp/v1/orgaos/10000000000003/contratos/2021/1
   Pragma: no-cache
   Strict-Transport-Security: max-age=?
   X-Content-Type-Options: nosniff
   X-Frame-Options: DENY
   X-XSS-Protection: 1; mode=block

**Códigos de Retorno**
^^^^^^^^^^^^^^^^^^^^^^

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


