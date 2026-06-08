Consultar Instrumentos Convocatórios 
====================================

Serviço que permite consultar os instrumentos convocatórios cadastrados no PNCP. 
  
Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/tipos-instrumentos-convocatorios
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' '${BASE_URL}/v1/tipos-instrumentos-convocatorios' -H 'accept: */*'

   ou

   curl -X 'GET' '${BASE_URL}/v1/tipos-instrumentos-convocatorios?statusAtivo=true' -H 'accept: */*'
   
Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar o query parâmetro ``statusAtivo``.

.. list-table::
   :width: 100%
   :widths: 15 10 10 65
   :header-rows: 1
   :class: quebra-linha-ultima-coluna

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Booleano
     - Não
     - Indicador de status do instrumento convocatório.
       True = Ativo / False = Inativo

Dados de retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1
   :class: quebra-linha-dois-quatro

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação do instrumento convocatório
   * - 2
     - nome
     - Texto
     - Nome do instrumento convocatório
   * - 3
     - descricao
     - Texto
     - Descrição do instrumento convocatório
   * - 4
     - obrigatoriedadeDataAberturaPropostaNome
     - Texto
     - Indica se é obrigatório ou não o envio da data de início do recebimento de proposta/lances para o instrumento convocatório
   * - 5
     - obrigatoriedadeDataEncerramentoPropostaNome
     - Texto
     - Indica se é obrigatório ou não o envio da data de encerramento do recebimento de proposta/lances para o instrumento convocatório
   * - 6
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 7
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 8
     - statusAtivo
     - Booleano
     - Indicador de status do instrumento convocatório. True = Ativo / False = Inativo

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
     - Instrumento convocatório não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro
\
