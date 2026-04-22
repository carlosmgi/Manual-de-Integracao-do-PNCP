Consultar conformidade entre Instrumentos Convocatórios e Modos de Disputa
==========================================================================

Serviço que permite consultar as combinações de conformidade de instrumento convocatório e/ou modo de disputa ou todas as combinações cadastradas no PNCP. 

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
   * - /v1/tipo-instrumento-convocatorio-modo-disputa 
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/tipo-instrumento-convocatorio-modo-disputa' -H 'accept: */*'
   ou 
   curl -X 'GET' 
   '${BASE_URL}/v1/tipo-instrumento-convocatorio-modo-disputa?tipoInstrumentoConvocatorioId=1' -H 'accept: */*' 
   ou 
   curl -X 'GET' 
   '${BASE_URL}/v1/tipo-instrumento-convocatorio-modo-disputa?tipoInstrumentoConvocatorioId=1&modoDisputaId=1' -H 'accept: */*' 

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar o query parâmetro ``tipoInstrumentoConvocatorioId`` ou ``modoDisputaId``.

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - tipoInstrumentoConvocatorioId
     - Inteiro
     - Não
     - Código de identificação do instrumento convocatório
   * - modoDisputaId
     - Inteiro
     - Não
     - Código de identificação do modo de disputa

Dados de Retorno (lista de combinações)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - tipoInstrumentoConvocatorio
     - 
     - Dados do Instrumento Convocatório
   * - 1.1
     - id
     - Inteiro
     - Código de identificação do instrumento convocatório
   * - 1.2
     - nome
     - Texto
     - Nome do instrumento convocatório
   * - 1.3
     - descricao
     - Texto
     - Descrição do instrumento convocatório
   * - 1.4
     - statusAtivo
     - Booleano
     - Indicador de status do instrumento convocatório. True-Ativo / False-Inativo
   * - 2
     - modoDisputa
     - 
     - Dados do Modo de Disputa
   * - 2.1
     - id
     - Inteiro
     - Código de identificação do modo de disputa
   * - 2.2
     - nome
     - Texto
     - Nome do modo de disputa
   * - 2.3
     - descricao
     - Texto
     - Descrição do modo de disputa
   * - 2.4
     - statusAtivo
     - Booleano
     - Indicador de status do modo de disputa. True-Ativo / False-Inativo
   * - 3
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 20
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
   * - 404
     - Modo de disputa não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

\
