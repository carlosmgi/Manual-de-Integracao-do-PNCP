Consultar Tipo de Contrato por Código
=====================================

.. Attention::
  Serviço que permite consultar um tipo de contrato pelo seu código.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - :destaque:`/v1/tipos-contratos/{id}`
     - :destaque:`GET`

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  :emphasize-lines: 1

    Não se aplica.
  
Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1

   curl -X 'GET' '${BASE_URL}/v1/tipos-contratos/{id}' -H 'accept: */*'

Dados de entrada
~~~~~~~~~~~~~~~~

.. Note::
  Alimentar o parâmetro ``{id}`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 10 10 15 55
   :header-rows: 1
   :class: quebra-linha-ultima-coluna

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - :destaque:`id`
     - :destaque:`Inteiro`
     - :destaque:`Sim`
     - :destaque:`Código de identificação do tipo de contrato`


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
     * - :destaque:`1`
       - :destaque:`id`
       - :destaque:`Inteiro`
       - :destaque:`Código de identificação do tipo de contrato`
     * - :destaque:`2`
       - :destaque:`nome`
       - :destaque:`Texto`
       - :destaque:`Nome do tipo de contrato`
     * - :destaque:`3`
       - :destaque:`descricao`
       - :destaque:`Texto`
       - :destaque:`Descrição do tipo de contrato`
     * - :destaque:`4`
       - :destaque:`dataInclusao`
       - :destaque:`Data/Hora`
       - :destaque:`Data e hora da inclusão do registro`
     * - :destaque:`5`
       - :destaque:`dataAtualizacao`
       - :destaque:`Data/Hora`
       - :destaque:`Data e hora da última atualização do registro`
     * - :destaque:`6`
       - :destaque:`statusAtivo`
       - :destaque:`Booleano`
       - :destaque:`Indicador de status do tipo de contrato. True-Ativo / False-Inativo`

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
     - Tipo de contrato não encontrado.
     - Erro     
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

\
