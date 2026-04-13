Consultar Contrato/Empenho
==========================
  
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

Serviço que permite consultar um contrato ou empenho específico.

**Atualizações da versão 2.3.10**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
     - Indica se é fruto de adesão
   * - 37
     - numeroControlePncpAta
     - String
     - Número de controle da ata relacionada

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/contratos/{ano}/{sequencial}
     - GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

Não se aplica.

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:

   curl -k -X GET \
     "${BASE_URL}/v1/orgaos/{cnpj}/contratos/{ano}/{sequencial}" \
     -H "accept: */*"

Dados de Entrada
~~~~~~~~~~~~~~~~

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
     - Cnpj do órgão do contrato ou empenho
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do contrato ou empenho
   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial do contrato ou empenho no PNCP; número sequencial gerado no momento que o contrato ou empenho foi inserido no PNCP

**Dados de Retorno**
~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - numeroControlePNCP
     - String
     - Número de controle PNCP do contrato ou empenho (id contrato PNCP)
   * - 2
     - sequencialContrato
     - Inteiro
     - Número sequencial do contrato ou empenho (gerado pelo PNCP)
   * - 3
     - numeroControlePNCPCompra
     - String
     - Número de controle PNCP da contratação relacionada (id contratação PNCP)
   * - 4
     - numeroContratoEmpenho
     - Texto (50)
     - Número do contrato ou empenho com força de contrato ou empenho
   * - 5
     - anoContrato
     - Inteiro
     - Ano do contrato ou empenho
   * - 6
     - tipoContrato
     - Objeto
     - Agrupador com os dados do tipo de contrato ou empenho
   * - 6.1
     - id
     - Inteiro
     - Código da tabela de domínio Tipo de contrato
   * - 6.2
     - nome
     - String
     - Nome do tipo de contrato
   * - 7
     - processo
     - Texto (50)
     - Número do processo
   * - 8
     - categoriaProcesso
     - Objeto
     - Agrupador com os dados da categoria do processo
   * - 8.1
     - id
     - Inteiro
     - Código da tabela de domínio Categoria
   * - 8.2
     - nome
     - String
     - Nome da categoria do processo
   * - 9
     - receita
     - Booleano
     - Receita ou despesa: True - Receita; False - Despesa
   * - 10
     - objetoContrato
     - Texto (5120)
     - Descrição do objeto do contrato ou empenho
   * - 11
     - informacaoComplementar
     - Texto (5120)
     - Informações complementares, se existirem
   * - 12
     - orgaoEntidade
     - Objeto
     - Dados do órgão/entidade do contrato ou empenho
   * - 12.1
     - cnpj
     - String
     - CNPJ do órgão referente ao contrato ou empenho
   * - 12.2
     - razaosocial
     - String
     - Razão social do órgão
   * - 12.3
     - poderId
     - String
     - Código do poder (L, E, J)
   * - 12.4
     - esferaId
     - String
     - Código da esfera (F, E, M, D)
   * - 13
     - unidadeOrgao
     - Objeto
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
   * - 14
     - orgaoSubRogado
     - Objeto
     - Dados do órgão sub-rogado
   * - 14.1
     - cnpj
     - String
     - CNPJ do órgão
   * - 14.2
     - razaosocial
     - String
     - Razão social do órgão
   * - 14.3
     - poderId
     - String
     - Código do poder (L, E, J)
   * - 14.4
     - esferaId
     - String
     - Código da esfera (F, E, M, D)
   * - 15
     - unidadeSubRogada
     - Objeto
     - Dados da unidade sub-rogada
   * - 15.1
     - codigoUnidade
     - String
     - Código da unidade
   * - 15.2
     - nomeUnidade
     - String
     - Nome da unidade
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
     - Nome/razão social do fornecedor
   * - 22
     - valorInicial
     - Decimal
     - Valor inicial do contrato
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
     - Valor global do contrato
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
     - Sistema que enviou o contrato
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
   * - :destaque:`36`
     - :destaque:`frutoAdesao`
     - :destaque:`Booleano`
     - :destaque:`Indica se é fruto de adesão`
   * - :destaque:`37`
     - :destaque:`numeroControlePncpAta`
     - :destaque:`String`
     - :destaque:`Número de controle da ata relacionada`
   * - :destaque:`38`
     - :destaque:`temRemanejamento`
     - :destaque:`Boleano`
     - :destaque:`O remanejamento de quantidade em atas de registro de preços (SRP) é a transferência de saldos de itens entre órgãos participantes ou para não participantes (caronas), permitindo otimizar a compra. Deve ser autorizado pelo órgão gerenciador, respeitando limites legais e a anuência do fornecedor para garantir o equilíbrio econômico-financeiro. Indicador de Remanejamento (False-Não / True-Sim)`
   * - :destaque:`39`
     - :destaque:`emendaParlamentar`
     - :destaque:`Boleano`
     - :destaque:`Indicador de Emenda Parlamentar (False-Não / True-Sim)`

**Códigos de Retorno**
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 25
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 400
     - BadRequest
     - Erro
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro
