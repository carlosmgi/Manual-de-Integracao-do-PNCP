Consultar Instrumentos Convocatórios 
====================================

Serviço que permite consultar os instrumentos convocatórios cadastrados no PNCP. 
  
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
   * - /v1/tipos-instrumentos-convocatorios
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/tipos-instrumentos-convocatorios -H 'accept: */*'
   ou
   curl -X 'GET' '${BASE_URL}/v1/tipos-instrumentos-convocatorios?statusAtivo=true' -H 'accept: */*'
   
Dados de Entrada
~~~~~~~~~~~~~~~~

.. note:: 

Alimentar o query parâmetro `statusAtivo`.  

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Boolean
     - Não
     - Indicador de status do instrumento convocatório. True = Ativo / False = Inativo

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
     - Instrumento convocatório não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro
\
