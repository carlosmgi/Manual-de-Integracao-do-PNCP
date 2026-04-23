Consultar Histórico da Ata de Registro de Preço
===============================================

Serviço que permite consultar todos os eventos de uma ata específica e de seus documentos/arquivos.

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
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/atas/{sequencialAta}/historico
     - GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

Não se aplica.

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
   :linenos:

   curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/atas/1/historico" \
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
     - Descrição

   * - 1
     - cnpj
     - Texto (14)
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação)

   * - 2
     - ano
     - Inteiro
     - Ano da contratação

   * - 3
     - sequencial
     - Inteiro
     - Sequencial da contratação no PNCP

   * - 4
     - sequencialAta
     - Inteiro
     - Sequencial da ata no PNCP

   * - 5
     - pagina
     - Inteiro
     - Utilizado para paginação dos itens. Número da página

   * - 6
     - tamanhoPagina
     - Inteiro
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
     - Lista de Eventos
     - Lista
     - Lista de eventos retornados
   * - 1.1
     - compraOrgaoCnpj
     - String
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação ou alienação de bens)
   * - 1.2
     - compraAno
     - Inteiro
     - Ano da contratação
   * - 1.3
     - compraSequencial
     - Inteiro
     - Sequencial da contratação no PNCP; número sequencial gerado no momento que a contratação foi inserida no PNCP
   * - 1.4
     - logManutencaoDataInclusao
     - Data/Hora
     - Data e hora da operação de inclusão, retificação ou exclusão do recurso
   * - 1.5
     - tipoLogManutencao
     - Inteiro
     - Código do tipo de operação efetuada
   * - 1.6
     - tipoLogManutencaoNome
     - String
     - Nome da operação efetuada (0 - Inclusão; 1 - Retificação; 2 - Exclusão)
   * - 1.7
     - categoriaLogManutencao
     - Inteiro
     - Código do tipo de recurso que sofreu a operação
   * - 1.8
     - categoriaLogManutencaoNome
     - String
     - Nome do recurso que sofreu a operação (1 - Contratação; 2 - Ata; 3 - Contrato; 4 - Item de Contratação; 5 - Resultado de Item de Contratação; 6 - Documento de Contratação; 7 - Documento de Ata; 8 - Documento de Contrato; 9 - Termo de Contrato; 10 - Documento de Termo de Contrato)
   * - 1.9
     - anoAta
     - Inteiro
     - Ano da Ata
   * - 1.10
     - numeroAtaRegistroPreco
     - String
     - Número da Ata
   * - 1.11
     - documentoAtaSequencial
     - Inteiro
     - Sequencial do documento da Ata no PNCP (retornado quando categoriaLogManutencao = 7)
   * - 1.12
     - documentoAtaTipo
     - String
     - Nome do tipo de documento conforme PNCP (retornado quando categoriaLogManutencao = 7)
   * - 1.13
     - documentoAtaTitulo
     - String
     - Título referente ao arquivo/documento (retornado quando categoriaLogManutencao = 7)
   * - 1.14
     - usuarioNome
     - String
     - Nome do usuário/sistema que efetuou a operação
   * - 1.15
     - justificativa
     - String
     - Motivo/justificativa da operação de retificação ou exclusão do recurso

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
