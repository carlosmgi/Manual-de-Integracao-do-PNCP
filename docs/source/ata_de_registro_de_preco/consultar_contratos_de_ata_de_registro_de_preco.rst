Consultar Contratos de Ata de Registro de Preço
===============================================

Serviço que permite consultar todos os contratos/empenhos vinculados a uma ata de registro de preço específica.

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

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/atas/{sequencialAta}/contratos
     - GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

Não se aplica.

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
   :linenos:

   curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/atas/1/contratos" \
     -H "accept: */*"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar o parâmetro {cnpj}, {ano}, {sequencial} e {sequencialAta} na URL.

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
     - ano
     - Inteiro
     - Sim
     - Ano da contratação

   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP

   * - 4
     - sequencialAta
     - Inteiro
     - Sim
     - Sequencial da Ata no PNCP

   * - 5
     - pagina
     - Inteiro
     - Não
     - Utilizado para paginação dos itens. Número da página

   * - 6
     - tamanhoPagina
     - Inteiro
     - Não
     - Utilizado para paginação dos itens. Quantidade de itens por página

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
     - data
     - -
     - Dados retornados pela consulta

   * - 1.1
     - numeroControle
     - Texto
     - Número de controle PNCP do contrato/empenho (id contrato PNCP)

   * - 1.2
     - sequencialContrato
     - Inteiro
     - Sequencial do contrato/empenho no PNCP; número sequencial gerado no momento que o contrato/empenho foi inserido no PNCP

   * - 1.3
     - frutoAdesao
     - Booleano
     - Indicador se o contrato/empenho é de um não participante, ou seja, fruto da adesão a uma ata de registro de preço (False = Não / True = Sim)

   * - 1.4
     - orgaoEntidade
     - -
     - Dados do órgão/entidade do contrato/empenho

   * - 1.4.1
     - cnpj
     - Texto
     - CNPJ do órgão/entidade

   * - 1.4.2
     - nome
     - Texto
     - Nome do órgão/entidade

   * - 1.5
     - unidadeExecutora
     - -
     - Dados da Unidade Administrativa

   * - 1.5.1
     - codigo
     - Texto
     - Código da Unidade Administrativa

   * - 1.5.2
     - nomeUnidade
     - Texto
     - Nome da Unidade Administrativa

   * - 1.5.3
     - localidade
     - -
     - Localidade da Unidade Administrativa

   * - 1.5.3.1
     - uf
     - Texto
     - Unidade Federativa

   * - 1.5.3.2
     - codigoIbgeMunicipio
     - Texto
     - Código IBGE do Município

   * - 1.5.3.3
     - nomeMunicipio
     - Texto
     - Nome do Município

   * - 1.6
     - numeroContratoEmpenho
     - Texto
     - Número do contrato/empenho

   * - 1.7
     - anoContrato
     - Inteiro
     - Ano do contrato/empenho

   * - 1.8
     - objetoContrato
     - Texto
     - Descrição do objeto do contrato/empenho

   * - 1.9
     - dataAssinatura
     - Data
     - Data da assinatura

   * - 1.10
     - dataVigenciaInicio
     - Data
     - Data inicial de vigência

   * - 1.11
     - dataVigenciaFim
     - Data
     - Data final de vigência

   * - 1.12
     - valorGlobal
     - -
     - Valor global do contrato/empenho

   * - 1.13
     - dataPublicacaoPncp
     - Data/Hora
     - Data e hora da inclusão no PNCP

   * - 1.14
     - usuarioNome
     - String
     - Nome do usuário/sistema que efetuou a operação

   * - 2
     - totalRegistros
     - Inteiro
     - Total de registros de contratos/empenhos encontrados

   * - 3
     - totalPaginas
     - Inteiro
     - Total de páginas

   * - 4
     - numeroPagina
     - Inteiro
     - Número da página consultada

   * - 5
     - paginasRestantes
     - Inteiro
     - Quantidade de páginas restantes

   * - 6
     - emendaParlamentar
     - Booleano
     - Marcador de emenda parlamentar na contratação

   * - 7
     - temRemanejamento
     - Booleano
     - Indicador de remanejamento (False = Não / True = Sim). O remanejamento permite a transferência de saldos entre órgãos participantes ou não participantes (caronas), mediante autorização do órgão gerenciador e anuência do fornecedor

   * - 8
     - empty
     - Booleano
     - Indica se o retorno está vazio

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

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
