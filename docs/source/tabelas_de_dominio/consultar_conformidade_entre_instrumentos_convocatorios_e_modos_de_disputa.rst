Consultar conformidade entre Instrumentos Convocatórios e Modos de Disputa
==========================================================================

Serviço que permite consultar as combinações de conformidade de instrumento convocatório e/ou modo de disputa ou todas as combinações cadastradas no PNCP. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/tipo-instrumento-convocatorio-modo-disputa 
     - GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

    Não se aplica

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' '${BASE_URL}/v1/tipo-instrumento-convocatorio-modo-disputa' -H 'accept: */*'
   ou 
   curl -X 'GET' '${BASE_URL}/v1/tipo-instrumento-convocatorio-modo-disputa?tipoInstrumentoConvocatorioId=1' -H 'accept: */*' 
   ou 
   curl -X 'GET' '${BASE_URL}/v1/tipo-instrumento-convocatorio-modo-disputa?tipoInstrumentoConvocatorioId=1&modoDisputaId=1' -H 'accept: */*' 

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar o query parâmetro ``tipoInstrumentoConvocatorioId`` ou ``modoDisputaId``.

.. list-table::
   :width: 100%
   :widths: auto
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
   :widths: auto
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
   * - 404
     - Registro não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

\
