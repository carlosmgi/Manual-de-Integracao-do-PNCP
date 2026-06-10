Consultar Porte de Empresa por Código
=====================================

.. container:: destaque-azul-claro

   Serviço que permite consultar o porte de empresa por código.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - :destaque-azul-claro:`Endpoint`
     - :destaque-azul-claro:`Método HTTP`
   * - :destaque-azul-claro:`/v1/portes-empresa/{id}`
     - :destaque-azul-claro:`GET`

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

    Não se aplica

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
   :linenos:
   :emphasize-lines: 1-3

   curl -k -X GET \
     "${BASE_URL}/v1/portes-empresa" \
     -H "accept: */*"

Dados de entrada
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1
   :class: quebra-linha-dois-ultima

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - :destaque-azul-claro:`id`
     - :destaque-azul-claro:`Inteiro`
     - :destaque-azul-claro:`Sim`
     - :destaque-azul-claro:`Código de identificação do porte da empresa.`

Dados de retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1
   :class: quebra-linha-dois-ultima

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - :destaque-azul-claro:`1`
     - :destaque-azul-claro:`id`
     - :destaque-azul-claro:`Inteiro`
     - :destaque-azul-claro:`Código de identificação do porte da empresa`
   * - :destaque-azul-claro:`2`
     - :destaque-azul-claro:`nome`
     - :destaque-azul-claro:`Texto`
     - :destaque-azul-claro:`Nome do porte da empresa`
   * - :destaque-azul-claro:`3`
     - :destaque-azul-claro:`descricao`
     - :destaque-azul-claro:`Texto`
     - :destaque-azul-claro:`Descrição do porte da empresa`
   * - :destaque-azul-claro:`4`
     - :destaque-azul-claro:`dataInclusao`
     - :destaque-azul-claro:`Data/Hora`
     - :destaque-azul-claro:`Data e hora da inclusão do registro`
   * - :destaque-azul-claro:`5`
     - :destaque-azul-claro:`dataAtualizacao`
     - :destaque-azul-claro:`Data/Hora`
     - :destaque-azul-claro:`Data e hora da última atualização do registro`
   * - :destaque-azul-claro:`6`
     - :destaque-azul-claro:`statusAtivo`
     - :destaque-azul-claro:`Booleano`
     - :destaque-azul-claro:`Indicador de status do porte da empresa. True-Ativa / False-Inativa`

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
     - Catálogo não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro
\

