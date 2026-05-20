Consultar Contratos/Empenhos de uma Contratação
===============================================

Serviço que permite recuperar os contratos/empenhos de uma contratação.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/contratos/contratacao/{anoContratacao}/{sequencialContratacao}
     - GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  
	 Não se aplica

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:

   curl -X 'GET' '${BASE_URL}/v1/orgaos/00394460000141/contratos/contratacao/2021/1' -H 'accept: */*'

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
  Alimentar os parâmetros ``{cnpj}``, ``{anoContratacao}`` e ``{sequencialContratacao}`` na URL.

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
   * - 1
     - cnpj
     - Texto (14)
     - Sim
     - Cnpj do órgão originário da contratação informado na inclusão (proprietário da contratação)
   * - 2
     - anoContratacao
     - Inteiro
     - Sim
     - Ano da contratação
   * - 3
     - sequencialContratacao
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP; número sequencial gerado no momento que a contratação foi inserida no PNCP

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

   * - 1
     - numeroControlePNCP
     - String
     - Número de controle PNCP do contrato/empenho (id contrato PNCP)

   * - 2
     - numeroControlePNCPCompra
     - String
     - Número de controle PNCP da contratação relacionada (id contratação PNCP)

   * - 3
     - numeroContratoEmpenho
     - Texto (50)
     - Número do contrato ou empenho com força de contrato

   * - 4
     - anoContrato
     - Inteiro
     - Ano do contrato/empenho

   * - 5
     - sequencialContrato
     - Inteiro
     - Número sequencial do contrato/empenho (gerado pelo PNCP)

   * - 6
     - processo
     - Texto (50)
     - Número do processo

   * - 7
     - tipoContrato
     -
     - Dados do tipo de contrato/empenho

   * - 7.1
     - id
     - Inteiro
     - Código da tabela de domínio Tipo de contrato

   * - 7.2
     - nome
     - String
     - Nome do Tipo de Contrato

   * - 8
     - categoriaProcesso
     -
     - Dados da categoria do processo

   * - 8.1
     - id
     - Inteiro
     - Código da tabela de domínio Categoria

   * - 8.2
     - nome
     - String
     - Nome da Categoria do processo

   * - 9
     - receita
     - Booleano
     - Receita ou despesa: True - Receita; False - Despesa

   * - 10
     - objetoContrato
     - Texto (5120)
     - Descrição do objeto do contrato/empenho

   * - 11
     - informacaoComplementar
     - Texto (5120)
     - Informações complementares, se houver

   * - 12
     - orgaoEntidade
     -
     - Dados do Órgão/Entidade do Contrato/Empenho

   * - 12.1
     - cnpj
     - String
     - CNPJ do Órgão

   * - 12.2
     - razaosocial
     - String
     - Razão social do Órgão

   * - 12.3
     - poderId
     - String
     - Código do poder: L - Legislativo; E - Executivo; J - Judiciário

   * - 12.4
     - esferaId
     - String
     - Código da esfera: F - Federal; E - Estadual; M - Municipal; D - Distrital

   * - 13
     - unidadeOrgao
     -
     - Dados da Unidade executora do Órgão

   * - 13.1
     - codigoUnidade
     - String
     - Código da Unidade Executora

   * - 13.2
     - nomeUnidade
     - String
     - Nome da Unidade Executora

   * - 13.3
     - municipioId
     - Inteiro
     - Código IBGE do município

   * - 13.4
     - municipioNome
     - String
     - Nome do município

   * - 13.5
     - ufSigla
     - String
     - Sigla da UF

   * - 13.6
     - ufNome
     - String
     - Nome da unidade federativa do município

   * - 14
     - orgaoSubRogado
     -
     - Dados do Órgão/Entidade subrogado do Contrato

   * - 14.1
     - cnpj
     - String
     - CNPJ do Órgão referente à Contrato

   * - 14.2
     - razaosocial
     - String
     - Razão social do Órgão referente à Contrato

   * - 14.3
     - poderId
     - String
     - Código do poder a que pertence o Órgão. L - Legislativo; E - Executivo; J - Judiciário

   * - 14.4
     - esferaId
     - String
     - Código da esfera a que pertence o Órgão. F - Federal; E - Estadual; M - Municipal; D - Distrital

   * - 15
     - unidadeSubRogada
     -
     - Dados da Unidade Executora do Órgão subrogado

   * - 15.1
     - codigoUnidade
     - String
     - Código da Unidade Executora pertencente ao Órgão

   * - 15.2
     - nomeUnidade
     - String
     - Nome da Unidade Executora pertencente ao Órgão

   * - 15.3
     - municipioId
     - Inteiro
     - Código IBGE do município

   * - 15.4
     - municipioNome
     - String
     - Nome do município

   * - 15.5
     - ufSigla
     - String
     - Sigla da unidade federativa do município

   * - 15.6
     - ufNome
     - String
     - Nome da unidade federativa do município

   * - 16
     - tipoPessoa
     - Texto (2)
     - PJ - Pessoa jurídica; PF - Pessoa física; PE - Pessoa estrangeira;

   * - 17
     - niFornecedor
     - Texto (30)
     - Número de identificação do fornecedor/arrematante; CNPJ, CPF ou identificador de empresa estrangeira;

   * - 18
     - nomeRazaoSocialFornecedor
     - Texto (100)
     - Nome ou razão social do fornecedor/arrematante

   * - 19
     - tipoPessoaSubContratada
     - Texto (2)
     - PJ - Pessoa jurídica; PF - Pessoa física; PE - Pessoa estrangeira; Somente em caso de subcontratação;

   * - 20
     - niFornecedorSubContratado
     - Texto (30)
     - Número de identificação do fornecedor subcontratado; CNPJ, CPF ou identificador de empresa estrangeira; Somente em caso de subcontratação;

   * - 21
     - nomeFornecedorSubContratado
     - Texto (100)
     - Nome ou razão social do fornecedor subcontratado; Somente em caso de subcontratação;

   * - 22
     - valorInicial
     - Decimal
     - Valor inicial do contrato/empenho. Precisão de até 4 dígitos decimais; Ex: 100.0001;

   * - 23
     - numeroParcelas
     - Inteiro
     - Número de parcelas

   * - 24
     - valorParcela
     - Decimal
     - Valor da parcela. Precisão de até 4 dígitos decimais; Ex: 100.0001;

   * - 25
     - valorGlobal
     - Decimal
     - Valor global do contrato/empenho. Precisão de até 4 dígitos decimais; Ex: 100.0001;

   * - 26
     - valorAcumulado
     - Decimal
     - Valor acumulado do contrato/empenho. Precisão de até 4 dígitos decimais; Ex: 100.0001;

   * - 27
     - dataAssinatura
     - Data
     - Data de assinatura do contrato

   * - 28
     - dataVigenciaInicio
     - Data
     - Data de início de vigência do contrato

   * - 29
     - dataVigenciaFim
     - Data
     - Data do término da vigência do contrato

   * - 30
     - numeroRetificacao
     - Inteiro
     - Número de retificações; Número de vezes que este registro está sendo alterado;

   * - 31
     - usuarioNome
     - String
     - Nome do sistema/portal que enviou o contrato

   * - 32
     - dataPublicacaoPncp
     - Data/Hora
     - Data de publicação do contrato no PNCP

   * - 33
     - dataAtualizacao
     - Data/Hora
     - Data da última atualização do contrato no PNCP

   * - 34
     - identificadorCipi
     - String
     - Identificador do contrato no Cadastro Integrado de Projetos de Investimento

   * - 35
     - urlCipi
     - String
     - Url com informações do contrato no sistema de Cadastro Integrado de Projetos de Investimento

   * - :destaque-amarelo-claro:`36`
     - :destaque-amarelo-claro:`frutoAdesao`
     - :destaque-amarelo-claro:`Booleano`
     - :destaque-amarelo-claro:`Indicador se é adesão à ata (False-Não / True-Sim)`

   * - :destaque-amarelo-claro:`37`
     - :destaque-amarelo-claro:`numeroControlePncpAta`
     - :destaque-amarelo-claro:`String`
     - :destaque-amarelo-claro:`Número de controle PNCP da Ata de Registro de Preço relacionada (id ata PNCP)`

   * - :destaque:`38`
     - :destaque:`temRemanejamento`
     - :destaque:`Booleano`
     - :destaque:`O remanejamento de quantidade em atas de registro de preços (SRP) é a transferência de saldos de itens entre órgãos participantes ou não participantes (caronas), permitindo otimizar a compra. Deve ser autorizado pelo órgão gerenciador, respeitando limites legais e a anuência do fornecedor. Indicador de Remanejamento (False-Não / True-Sim)`

   * - :destaque:`39`
     - :destaque:`emendaParlamentar`
     - :destaque:`Booleano`
     - :destaque:`Indicador de Emenda Parlamentar (False-Não / True-Sim)`

\
