Consultar Tipos de Instrumento de Cobrança 
==========================================

Serviço que permite consultar os tipos de instrumentos de cobrança cadastrados no PNCP. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/tipos-instrumentos-cobranca
     - GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

    Não se aplica

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:

   curl -k -X GET \
     "${BASE_URL}/v1/tipos-instrumentos-cobranca" \
     -H "accept: */*"

   ou 

   curl -k -X GET \
     "${BASE_URL}/v1/tipos-instrumentos-cobranca?statusAtivo=true" \
     -H "accept: */*"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar o parâmetro ``statusAtivo``.

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1
   :class: quebra-linha-ultima-coluna

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Booleano
     - Não
     - Indicador de status do instrumento convocatório. True-Ativo / False-Inativo

Dados de retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 10 15 55
   :header-rows: 1
   :class: quebra-linha-ultima-coluna

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - 1
     - id
     - Inteiro
     - Código de identificação do tipo de instrumento de cobrança
   * - 2
     - nome
     - Texto
     - Nome do tipo de instrumento de cobrança
   * - 3
     - descricao
     - Texto
     - Descrição do tipo de instrumento de cobrança
   * - 4
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 5
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 6
     - statusAtivo
     - Booleano
     - Indicador de status do tipo de instrumento de cobrança. True-Ativo / False-Inativo

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
     - Erro
   * - 500
     - Internal Server Error
     - Erro

\
