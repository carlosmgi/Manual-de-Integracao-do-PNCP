Consultar quantidade de documentos de Ata de Registro de Preços
===============================================================

Serviço que permite consultar todos os documentos pertencentes a uma ata.

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
     - :destaque:`anoCompra`
     - :destaque:`Inteiro`
     - :destaque:`Ano da contratação`
   * - 3
     - sequencialCompra
     - Inteiro
     - Sequencial da contratação no PNCP; número sequencial gerado no momento da inclusão

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}/arquivos
     - GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

Não se aplica.

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
   :linenos:

   curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/atas/1/arquivos/1" \
     -H "Accept: */*"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar o parâmetro {cnpj}, {anoCompra}, {sequencialCompra} e {sequencialAta} na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 15 40
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição

   * - 1
     - cnpj
     - Texto (14)
     - Sim
     - Cnpj do órgão originário da contratação informado na inclusão (proprietário da contratação).


   * - 2
     - anoCompra
     - Inteiro
     - Sim
     - Ano da contratação.

   * - 3
     - sequencialCompra
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP; Número sequencial gerado no momento que a contratação foi inserida no PNCP;

   * - 4
     - sequencialAta
     - Inteiro
     - Sim
     - Sequencial da ata no PNCP; Número sequencial gerado no momento que a ata foi inserida no PNCP;

   * - 5
     - pagina
     - Inteiro
     - Não
     - Utilizado para paginação dos itens. Número da página.

   * - 6
     - tamanhoPagina
     - Inteiro
     - Não
     - Utilizado para paginação dos itens. Quantidade itens por página.

Dados de retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - 1
     - documentos
     - Lista
     - Lista de documentos

   * - 1.1
     - url
     - Texto
     - URL para download do arquivo

   * - 1.2
     - tipoDocumentoId
     - Inteiro
     - Código do tipo de documento conforme PNCP

   * - 1.3
     - sequencialDocumento
     - Inteiro
     - Número sequencial atribuído ao arquivo

   * - 1.4
     - dataPublicacaoPncp
     - Data/Hora
     - Data de publicação do arquivo no portal PNCP

   * - 1.5
     - titulo
     - Texto
     - Título referente ao arquivo

   * - 1.6
     - tipoDocumentoNome
     - Texto
     - Nome do tipo de documento conforme PNCP

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 25
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo

   * - 200
     - OK
     - Sucesso
   * - 204
     - No Content
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 401
     - Unauthorized
     - Erro
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro
