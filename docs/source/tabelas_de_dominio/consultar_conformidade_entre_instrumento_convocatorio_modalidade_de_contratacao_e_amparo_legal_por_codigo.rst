Consultar conformidade entre Instrumento Convocatório, Modalidade de Contratação e Amparo Legal por Código
==========================================================================================================

Serviço que permite consultar a combinação de conformidade pelo código do instrumento convocatório, código da modalidade de contratação e código do amparo 
legal. 

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
   * - /v1/tipos-instrumentos-convocatoriosmodalidade-amparo-legal/{amparoLegalId}/{modalidadeId}/{tipoInstrumentoConvocatorioId}
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/instrumento-convocatorio-modalidade-amparo-legal/1/6/1' -H 'accept: */*'

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note:: 

Alimentar o path parâmetro {amparoLegalId} e {modalidadeId} e {tipoInstrumentoConvocatorioId} na URL. 

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - amparoLegalId
     - Inteiro
     - Sim
     - Código de identificação do amparo legal.
   * - modalidadeId
     - Inteiro
     - Sim
     - Código de identificação da modalidade de contratação.
   * - tipoInstrumentoConvocatorioId
     - Inteiro
     - Sim
     - Código de identificação do instrumento convocatório.

Dados de retorno
~~~~~~~~~~~~~~~~

.. list-table:: 
   :width: 100%
   :header-rows: 1
   :widths: 5 25 15 25

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - amparoLegal
     -
     - Dados do Amparo Legal.
   * - 1.1
     - id
     - Inteiro
     - Código de identificação do amparo legal.
   * - 1.2
     - nome
     - Texto
     - Nome do amparo legal.
   * - 1.3
     - descricao
     - Texto
     - Descrição do amparo legal.
   * - 1.4
     - statusAtivo
     - Booleano
     - Indicador de status do amparo legal. True = Ativo / False = Inativo.
   * - 2
     - modalidade
     -
     - Dados da Modalidade de Contratação.
   * - 2.1
     - id
     - Inteiro
     - Código de identificação da modalidade de contratação.
   * - 2.2
     - nome
     - Texto
     - Nome da modalidade de contratação.
   * - 2.3
     - descricao
     - Texto
     - Descrição da modalidade de contratação.
   * - 2.4
     - statusAtivo
     - Booleano
     - Indicador de status da modalidade de contratação. True = Ativo / False = Inativo.
   * - 3
     - tipoInstrumentoConvocatorio
     -
     - Dados do Instrumento Convocatório.
   * - 3.1
     - id
     - Inteiro
     - Código de identificação do instrumento convocatório.
   * - 3.2
     - nome
     - Texto
     - Nome do instrumento convocatório.
   * - 3.3
     - descricao
     - Texto
     - Descrição do instrumento convocatório.
   * - 3.4
     - statusAtivo
     - Booleano
     - Indicador de status do instrumento convocatório. True = Ativo / False = Inativo.
   * - 4
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
