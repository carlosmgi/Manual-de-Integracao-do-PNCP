Consultar Contratos/Empenhos de uma Contratação
===============================================

Serviço que permite recuperar os contratos/empenhos de uma contratação.

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
     - Indicador se o contrato/empenho é de um não participante, ou seja, fruto da adesão a uma ata de registro de preço (False-Não / True-Sim)
   * - 37
     - numeroControlePncpAta
     - String
     - Número de controle PNCP da Ata de Registro de Preço relacionada (id ata PNCP)


Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/contratos/contratacao/{anoContratacao}/{sequencialContratacao}
     - GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

Não se aplica.

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:

   curl -X 'GET' \
     '${BASE_URL}/v1/orgaos/00394460000141/contratos/contratacao/2021/1' \
     -H 'accept: */*'

Dados de Entrada
~~~~~~~~~~~~~~~~

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
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 30 20 45
   :header-rows: 1

  * - Id
     - Campo
     - Tipo
     - Descrição

   * - :destaque:`1`
     - :destaque:`numeroControlePNCP`
     - :destaque:`String`
     - :destaque:`Número de controle PNCP do contrato/empenho (id contrato PNCP)`

   * - :destaque:`2`
     - :destaque:`numeroControlePNCPCompra`
     - :destaque:`String`
     - :destaque:`Número de controle PNCP da contratação relacionada (id contratação PNCP)`

   * - :destaque:`3`
     - :destaque:`numeroContratoEmpenho`
     - :destaque:`Texto (50)`
     - :destaque:`Número do contrato ou empenho com força de contrato`

   * - :destaque:`4`
     - :destaque:`anoContrato`
     - :destaque:`Inteiro`
     - :destaque:`Ano do contrato/empenho`

   * - :destaque:`5`
     - :destaque:`sequencialContrato`
     - :destaque:`Inteiro`
     - :destaque:`Número sequencial do contrato/empenho (gerado pelo PNCP)`

   * - :destaque:`6`
     - :destaque:`processo`
     - :destaque:`Texto (50)`
     - :destaque:`Número do processo`

   * - :destaque:`7`
     - :destaque:`tipoContrato`
     - :destaque:``
     - :destaque:`Dados do tipo de contrato/empenho`

   * - :destaque:`7.1`
     - :destaque:`Id`
     - :destaque:`Inteiro`
     - :destaque:`Código da tabela de domínio Tipo de contrato`

   * - :destaque:`7.2`
     - :destaque:`Nome`
     - :destaque:`String`
     - :destaque:`Nome do Tipo de Contrato`

   * - :destaque:`8`
     - :destaque:`categoriaProcesso`
     - :destaque:``
     - :destaque:`Dados da categoria do processo`

   * - :destaque:`8.1`
     - :destaque:`Id`
     - :destaque:`Inteiro`
     - :destaque:`Código da tabela de domínio Categoria`

   * - :destaque:`8.2`
     - :destaque:`Nome`
     - :destaque:`String`
     - :destaque:`Nome da Categoria do processo`

   * - :destaque:`9`
     - :destaque:`receita`
     - :destaque:`Booleano`
     - :destaque:`Receita ou despesa: True - Receita; False - Despesa`

   * - :destaque:`10`
     - :destaque:`objetoContrato`
     - :destaque:`Texto (5120)`
     - :destaque:`Descrição do objeto do contrato/empenho`

   * - :destaque:`11`
     - :destaque:`informacaoComplementar`
     - :destaque:`Texto (5120)`
     - :destaque:`Informações complementares, se houver`

   * - :destaque:`12`
     - :destaque:`orgaoEntidade`
     - :destaque:``
     - :destaque:`Dados do Órgão/Entidade do Contrato/Empenho`

   * - :destaque:`12.1`
     - :destaque:`cnpj`
     - :destaque:`String`
     - :destaque:`CNPJ do Órgão`

   * - :destaque:`12.2`
     - :destaque:`razaosocial`
     - :destaque:`String`
     - :destaque:`Razão social do Órgão`

   * - :destaque:`12.3`
     - :destaque:`poderId`
     - :destaque:`String`
     - :destaque:`Código do poder: L - Legislativo; E - Executivo; J - Judiciário`

   * - :destaque:`12.4`
     - :destaque:`esferaId`
     - :destaque:`String`
     - :destaque:`Código da esfera: F - Federal; E - Estadual; M - Municipal; D - Distrital`

   * - :destaque:`13`
     - :destaque:`unidadeOrgao`
     - :destaque:``
     - :destaque:`Dados da Unidade executora do Órgão`

   * - :destaque:`13.1`
     - :destaque:`codigoUnidade`
     - :destaque:`String`
     - :destaque:`Código da Unidade Executora`

   * - :destaque:`13.2`
     - :destaque:`nomeUnidade`
     - :destaque:`String`
     - :destaque:`Nome da Unidade Executora`

   * - :destaque:`13.3`
     - :destaque:`municipioId`
     - :destaque:`Inteiro`
     - :destaque:`Código IBGE do município`

   * - :destaque:`13.4`
     - :destaque:`municipioNome`
     - :destaque:`String`
     - :destaque:`Nome do município`

   * - :destaque:`13.5`
     - :destaque:`ufSigla`
     - :destaque:`String`
     - :destaque:`Sigla da UF`

   * - :destaque:`13.6`
     - :destaque:`ufNome`
     - :destaque:`String`
     - :destaque:`Nome da UF`

   * - :destaque:`36`
     - :destaque:`frutoAdesao`
     - :destaque:`Booleano`
     - :destaque:`Indicador se é adesão à ata (False-Não / True-Sim)`

   * - :destaque:`38`
     - :destaque:`temRemanejamento`
     - :destaque:`Booleano`
     - :destaque:`O remanejamento de quantidade em atas de registro de preços (SRP) é a transferência de saldos |
       de itens entre órgãos participantes ou não participantes (caronas), permitindo otimizar a compra. |
       Deve ser autorizado pelo órgão gerenciador, respeitando limites legais e a anuência do fornecedor. |
       Indicador de Remanejamento (False-Não / True-Sim)`

   * - :destaque:`39`
     - :destaque:`emendaParlamentar`
     - :destaque:`Booleano`
     - :destaque:`Indicador de Emenda Parlamentar (False-Não / True-Sim)`
