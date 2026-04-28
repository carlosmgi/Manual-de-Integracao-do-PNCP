Consultar Histórico da Contratação
==================================

Serviço que permite consultar todos os eventos de uma contratação específica, dos Itens, dos Resultados e de seus documentos/arquivos.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/historico
     - GET
	 

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/historico" -H "accept: */*"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Informar os parâmetros ``{cnpj}``, ``{ano}`` e ``{sequencial}`` na URL da requisição.

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - cnpj
     - Texto (14)
     - CNPJ do órgão originário da contratação, conforme informado na inclusão (proprietário da contratação ou alienação de bens).
   * - 2
     - ano
     - Inteiro
     - Ano da contratação.
   * - 3
     - sequencial
     - Inteiro
     - Número sequencial da contratação no PNCP, gerado no momento da sua inclusão.
   * - 4
     - pagina
     - Inteiro
     - Número da página para fins de paginação dos itens.
   * - 5
     - tamanhoPagina
     - Inteiro
     - Quantidade de itens por página na paginação dos resultados.

Dados de retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - Lista de Eventos
     - Lista
     - Lista contendo os eventos de manutenção da contratação.
   * - 1.1
     - compraOrgaoCnpj
     - String
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação ou alienação de bens).
   * - 1.2
     - compraAno
     - Inteiro
     - Ano da contratação.
   * - 1.3
     - compraSequencial
     - Inteiro
     - Sequencial da contratação no PNCP; número gerado no momento da inclusão.
   * - 1.4
     - logManutencaoDataInclusao
     - Data/Hora
     - Data e hora da operação de inclusão, retificação ou exclusão do recurso.
   * - 1.5
     - tipoLogManutencao
     - Inteiro
     - Código do tipo de operação efetuada.
   * - 1.6
     - tipoLogManutencaoNome
     - String
     - Nome da operação efetuada. Domínio: 0 - Inclusão; 1 - Retificação; 2 - Exclusão.
   * - 1.7
     - categoriaLogManutencao
     - Inteiro
     - Código do tipo de recurso que sofreu a operação.
   * - 1.8
     - categoriaLogManutencaoNome
     - String
     - Nome do recurso afetado. Domínio: 1 - Contratação; 2 - Ata; 3 - Contrato; 4 - Item de Contratação; 5 - Resultado de Item de Contratação; 6 - Documento de Contratação; 7 - Documento de Ata; 8 - Documento de Contrato; 9 - Termo de Contrato; 10 - Documento de Termo de Contrato.
   * - 1.9
     - itemNumero
     - Inteiro
     - Número do item na contratação. Retornado quando categoriaLogManutencao = 4.
   * - 1.10
     - itemResultadoNumero
     - Inteiro
     - Número do item da contratação. Retornado quando categoriaLogManutencao = 5.
   * - 1.11
     - itemResultadoSequencial
     - Inteiro
     - Sequencial do resultado do item da contratação no PNCP. Retornado quando categoriaLogManutencao = 5.
   * - 1.12
     - documentoSequencial
     - Inteiro
     - Sequencial do documento da contratação no PNCP. Retornado quando categoriaLogManutencao = 6.
   * - 1.13
     - documentoTipo
     - String
     - Nome do tipo de documento conforme PNCP. Retornado quando categoriaLogManutencao = 6.
   * - 1.14
     - documentoTitulo
     - String
     - Título do documento. Retornado quando categoriaLogManutencao = 6.
   * - 1.15
     - usuarioNome
     - String
     - Nome do usuário ou sistema que efetuou a operação.
   * - 1.16
     - justificativa
     - String
     - Motivo/justificativa da operação de retificação ou exclusão do recurso.


Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 200
     - OK
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 422
     - Unprocessable Entity
     - NotFound
   * - 500
     - Internal Server Error
     - Erro

\
