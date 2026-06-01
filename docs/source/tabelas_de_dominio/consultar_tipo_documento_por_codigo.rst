Consultar Tipo de Documento por Código
======================================

.. container:: destaque-amarelo

  Serviço que permite consultar um tipo de documento/arquivo pelo seu código.

\

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - :destaque:`/v1/tipos-documentos/{id}`
     - :destaque:`GET`
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  :emphasize-lines: 1

    Não se aplica

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1

    curl -X 'GET' '${BASE_URL}/v1/tipos-documentos/{id}' -H 'accept: */*'
    
Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
  Alimentar o path parâmetro ``{id}`` na URL

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - :destaque:`Id`
     - :destaque:`Inteiro`
     - :destaque:`Sim`
     - :destaque:`Código de identificação do tipo de documento/arquivo`

Dados de Retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 20 15 60
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - :destaque:`1`
     - :destaque:`id`
     - :destaque:`Inteiro`
     - :destaque:`Código de identificação do tipo de documento/arquivo`
   * - :destaque:`2`
     - :destaque:`nome`
     - :destaque:`Texto`
     - :destaque:`Nome do tipo de documento/arquivo`
   * - :destaque:`3`
     - :destaque:`descricao`
     - :destaque:`Texto`
     - :destaque:`Descrição do tipo de documento/arquivo`
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
     - :destaque:`Indicador de status do tipo de documento/arquivo. True-Ativo / False-Inativo`
   * - :destaque:`7`
     -  :destaque:`tipoInformacao`
     - 
     - :destaque:`Informação a qual o tipo de documento/arquivo está relacionado.`
   * - :destaque:`7.1`
     - :destaque:`codigo`
     - :destaque:`Inteiro`
     - :destaque:`Identificador do tipo de informação relacionada`
   * - :destaque:`7.2`
     - :destaque:`nome`
     - :destaque:`Texto`
     - :destaque:`Nome do tipo de informação relacionada`

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - :destaque:`200`
     - :destaque:`Created`
     - :destaque:`Sucesso`
   * - :destaque:`400`
     - :destaque:`BadRequest`
     - :destaque:`Erro`
   * - :destaque:`404`
     - :destaque:`Tipo de documento/arquivo não encontrado.`
     - :destaque:`NotFound`
   * - :destaque:`422`
     - :destaque:`Unprocessable Entity`
     - :destaque:`Erro`
   * - :destaque:`500`
     - :destaque:`Internal Server Error`
     - :destaque:`Erro`

\


