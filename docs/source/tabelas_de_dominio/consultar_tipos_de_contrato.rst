Consultar Tipos de Contrato
===========================

.. container:: destaque-amarelo

  Serviço que permite consultar os tipos de contrato cadastrados no PNCP.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - :destaque:`/v1/tipos-contratos`
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
  :emphasize-lines: 1-3

    curl -X 'GET' '${BASE_URL}/v1/tipos-contratos' -H 'accept: */*'
    ou
    curl -X 'GET' '${BASE_URL}/v1/tipos-contratos?statusAtivo=true' -H 'accept: */*'

Dados de entrada
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - :destaque:`statusAtivo`
     - :destaque:`Boolean`
     - :destaque:`Não`
     - :destaque:`Indicador de status do tipo de contrato. True = Ativa / False = Inativa`

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
     - :destaque:`Indicador de status do tipo de contrato. True = Ativa / False = Inativa`

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
   * - :destaque:`401`
     - :destaque:`Unauthorized`
     - :destaque:`Erro`
   * - :destaque:`422`
     - :destaque:`Unprocessable Entity`
     - :destaque:`Erro`
   * - :destaque:`500`
     - :destaque:`Internal Server Error`
     - :destaque:`Erro`

\


