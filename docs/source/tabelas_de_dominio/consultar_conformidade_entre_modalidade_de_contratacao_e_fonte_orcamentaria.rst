Consultar conformidade entre Modalidade de Contratação e Fonte Orçamentaria
===========================================================================

Serviço que permite consultar as combinações de conformidade entre modalidade de contratação e/ou fonte orçamentária ou todas as combinações cadastradas no PNCP. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/modalidade-fonte-orcamentaria 
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
     "${BASE_URL}/v1/modalidade-fonte-orcamentaria" \
     -H "accept: */*"

   ou 

   curl -k -X GET \
     "${BASE_URL}/v1/modalidade-fonte-orcamentaria?modalidadeId=6" \
     -H "accept: */*"

   ou 

   curl -k -X GET \
     "${BASE_URL}/v1/modalidade-fonte-orcamentaria?fonteOrcamentariaId=1" \
     -H "accept: */*"

   ou 

   curl -k -X GET \
     "${BASE_URL}/v1/modalidade-fonte-orcamentaria?modalidadeId=6&fonteOrcamentariaId=1" \
     -H "accept: */*"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   
   Alimentar o query parâmetro ``modalidadeId`` ou ``fonteOrcamentariaId``.

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1
   :class: quebra-linha-ultima-coluna

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - modalidadeId
     - Inteiro
     - Não
     - Código de identificação da modalidade da contratação
   * - fonteOrcamentariaId
     - Inteiro
     - Não
     - Código de identificação da fonte orçamentária

Dados de retorno (lista de combinações)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
     - modalidadeContratacao
     - 
     - Dados da Modalidade de Contratação
   * - 1.1
     - id
     - Inteiro
     - Código de identificação da modalidade de contratação
   * - 1.2
     - nome
     - Texto
     - Nome da modalidade de contratação
   * - 1.3
     - descricao
     - Texto
     - Descrição da modalidade de contratação
   * - 1.4
     - statusAtivo
     - Booleano
     - Indicador de status da modalidade de contratação. True-Ativo / False-Inativo

   * - 2
     - fonteOrcamentaria
     - 
     - Dados da Fonte Orçamentária
   * - 2.1
     - id
     - Inteiro
     - Código de identificação da fonte orçamentária
   * - 2.2
     - nome
     - Texto
     - Nome da fonte orçamentária
   * - 2.3
     - descricao
     - Texto
     - Descrição da fonte orçamentária
   * - 2.4
     - statusAtivo
     - Booleano
     - Indicador de status da fonte orçamentária. True-Ativo / False-Inativo

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
