Consultar Histórico do Contrato/Empenho
=======================================

Serviço que permite consultar todos os eventos de um Contrato/Empenho específico, eventos dos seus Termos e dos documentos/arquivos do Contrato/Empenho e seus Termos.

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

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/contratos/{ano}/{sequencial}/historico
     - GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

Não se aplica.

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/contratos/2021/1/historico" \
     -H "accept: */*"

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

  Alimentar o parâmetro {cnpj}, {ano} e {sequencial} na URL.

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
     - Cnpj do órgão dono do contrato/empenho
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do contrato/empenho
   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Sequencial do contrato/empenho no PNCP
   * - 4
     - pagina
     - Inteiro
     - Não
     - Utilizado para paginação dos itens. Número da página
   * - 5
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
     - Lista de Eventos
     - Lista
     - Lista de eventos do contrato/empenho
   * - 1.1
     - contratoOrgaoCnpj
     - String
     - Cnpj do órgão dono do contrato/empenho
   * - 1.2
     - contratoAno
     - Inteiro
     - Ano do contrato/empenho
   * - 1.3
     - contratoSequencial
     - Inteiro
     - Sequencial do contrato/empenho no PNCP
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
     - Nome da operação efetuada. Domínio: 0 - Inclusão; 1 - Retificação; 2 - Exclusão
   * - 1.7
     - categoriaLogManutencao
     - Inteiro
     - Código do tipo de recurso que sofreu a operação
   * - 1.8
     - categoriaLogManutencaoNome
     - String
     - Nome do recurso que sofreu a operação. Domínio: 1 - Contratação; 2 - Ata; 3 – Contrato/Empenho; 4 - Item de Contratação; 5 - Resultado de Item de Contratação; 6 - Documento de Contratação; 7 - Documento de Ata; 8 - Documento de Contrato/Empenho; 9 - Termo de Contrato; 10 - Documento de Termo de Contrato; 15 – Instrumento de Cobrança; :destaque:`17 - Empenho`
   * - 1.9
     - sequencialTermoContrato
     - Inteiro
     - Sequencial do termo do contrato no PNCP. Retornado caso categoriaLogManutencao = 9
   * - 1.10
     - numeroTermoContrato
     - String
     - Número do termo do contrato. Retornado caso categoriaLogManutencao = 9
   * - 1.11
     - sequencialDocumentoContrato
     - Inteiro
     - Sequencial do documento do contrato no PNCP. Retornado caso categoriaLogManutencao = 8
   * - 1.12
     - tituloDocumentoContrato
     - String
     - Título referente ao arquivo/documento do contrato. Retornado caso categoriaLogManutencao = 8
   * - 1.13
     - sequencialDocumentoTermoContrato
     - Inteiro
     - Sequencial do documento do termo do contrato no PNCP. Retornado caso categoriaLogManutencao = 10
   * - 1.14
     - tituloDocumentoTermoContrato
     - String
     - Título referente ao arquivo/documento do termo do contrato. Retornado caso categoriaLogManutencao = 10
   * - 1.15
     - usuarioNome
     - String
     - Nome do usuário/sistema que efetuou a operação
   * - 1.16
     - justificativa
     - String
     - Motivo/justificativa da operação de retificação ou exclusão do recurso
   * - 1.17
     - sequencialInstrumentoCobranca
     - Inteiro
     - Sequencial do instrumento de cobrança no PNCP.  Retornado caso categoriaLogManutencao = 15.
   * - :destaque:`1.18`
     - :destaque:`sequencialEmpenho`
     - :destaque:`Inteiro`
     - :destaque:`Sequencial do empenho no PNCP.  Retornado caso categoriaLogManutencao = 17.`

**Códigos de Retorno**
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 25
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 200
     - Ok
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
