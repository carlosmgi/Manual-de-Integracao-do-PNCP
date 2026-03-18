Consultar Contratos ou Empenhos de uma Contratação
==================================================

Serviço que permite recuperar os contratos/empenhos de uma contratação.

**Atualizações da versão 2.3.10**
---------------------------------

.. versionadded:: 2.3.10
 
.. list-table::
   :widths: auto
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 36
     - frutoAdesao
     - Booleano
     - Indicador se o contrato/empenho é de um não participante, ou seja, fruto da adesão a uma ata de registro de preço (False-Não / True-Sim)
   * - 37
     - numeroControlePncpAta
     - String
     - Número de controle PNCP da Ata de Registro de Preço relacionada (id ata PNCP)


Detalhes da Requisição
----------------------

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/contratos/contratacao/{anoContratacao}/{sequencialContratacao}
     - GET

Exemplo de Payload
------------------

Não se aplica.

Exemplo Requisição (cURL)
-------------------------

.. code-block:: bash

   curl -X 'GET' \
     '${BASE_URL}/v1/orgaos/00394460000141/contratos/contratacao/2021/1' \
     -H 'accept: */*'

Dados de Entrada
----------------

.. note::

  Alimentar o parâmetro {cnpj}, {anoContratacao} e {sequencialContratacao} na URL.

.. list-table::
   
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
----------------

.. list-table::
   :width: 100%
   :widths: 5 30 20 45
   :header-rows: 1

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
     - Agrupador
     - Dados do tipo de contrato/empenho
   * - 7.1
     - Id
     - Inteiro
     - Código da tabela de domínio Tipo de contrato
   * - 7.2
     - Nome
     - String
     - Nome do Tipo de Contrato
   * - 8
     - categoriaProcesso
     - Agrupador
     - Dados da categoria do processo
   * - 8.1
     - Id
     - Inteiro
     - Código da tabela de domínio Categoria
   * - 8.2
     - Nome
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
     - Informações complementares; se existir
   * - 12
     - orgaoEntidade
     - Agrupador
     - Dados do órgão/entidade do contrato/empenho
   * - 12.1
     - cnpj
     - String
     - CNPJ do órgão referente ao contrato/empenho
   * - 12.2
     - razaosocial
     - String
     - Razão social do órgão
   * - 12.3
     - poderId
     - String
     - L - Legislativo; E - Executivo; J - Judiciário
   * - 12.4
     - esferaId
     - String
     - F - Federal; E - Estadual; M - Municipal; D - Distrital
   * - 13
     - unidadeOrgao
     - Agrupador
     - Dados da unidade executora do órgão
   * - 13.1
     - codigoUnidade
     - String
     - Código da unidade executora
   * - 13.2
     - nomeUnidade
     - String
     - Nome da unidade executora
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
     - Nome da UF
   * - 16
     - tipoPessoa
     - Texto (2)
     - PJ, PF ou PE
   * - 17
     - niFornecedor
     - Texto (30)
     - Identificação do fornecedor (CNPJ/CPF/estrangeiro)
   * - 18
     - nomeRazaoSocialFornecedor
     - Texto (100)
     - Nome ou razão social do fornecedor
   * - 22
     - valorInicial
     - Decimal
     - Valor inicial (até 4 casas decimais)
   * - 23
     - numeroParcelas
     - Inteiro
     - Número de parcelas
   * - 24
     - valorParcela
     - Decimal
     - Valor da parcela
   * - 25
     - valorGlobal
     - Decimal
     - Valor global
   * - 26
     - valorAcumulado
     - Decimal
     - Valor acumulado
   * - 27
     - dataAssinatura
     - Data
     - Data de assinatura
   * - 28
     - dataVigenciaInicio
     - Data
     - Início da vigência
   * - 29
     - dataVigenciaFim
     - Data
     - Fim da vigência
   * - 30
     - numeroRetificacao
     - Inteiro
     - Número de retificações
   * - 31
     - usuarioNome
     - String
     - Nome do sistema que enviou
   * - 32
     - dataPublicacaoPncp
     - Data/Hora
     - Data de publicação no PNCP
   * - 33
     - dataAtualizacao
     - Data/Hora
     - Última atualização
   * - 34
     - identificadorCipi
     - String
     - Identificador no CIPI
   * - 35
     - urlCipi
     - String
     - URL do CIPI
   * - 36
     - frutoAdesao
     - Booleano
     - Indica se é fruto de adesão
   * - 37
     - numeroControlePncpAta
     - String
     - Número de controle da ata relacionada






