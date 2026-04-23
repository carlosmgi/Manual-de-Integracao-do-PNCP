Consultar Ata de Registro de Preço
==================================

Serviço que permite recuperar uma ata específica.

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

**Atualizações da versão 2.3.10**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. versionadded:: 2.3.10

Destaque em amarelo destinado à identificação das atualizações relativas às entregas de ARP Caronas.

.. list-table::
   :widths: auto
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - :destaque-amarelo-claro:`21`
     - :destaque-amarelo-claro:`possibilidadeAdesao`
     - :destaque-amarelo-claro:`Booleano`
     - :destaque-amarelo-claro:`Indicador se a Ata permite adesão de não participantes (False = Não / True = Sim)`

.. versionchanged:: 2.3.10

  não houve alterações.

.. deprecated:: 2.3.10

  não houve alterações.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas/{sequencialAta}
     - GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

Não se aplica.

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:

  curl -X 'GET' '${BASE_URL}/v1/orgaos/00394460000141/compras/2021/1/atas/1' \
    -H 'accept: */*'

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
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação)

   * - 2
     - anoCompra
     - Inteiro
     - Sim
     - Ano da contratação

   * - 3
     - sequencialCompra
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP; número sequencial gerado no momento que a contratação foi inserida no PNCP

   * - 4
     - sequencialAta
     - Inteiro
     - Sim
     - Sequencial da ata no PNCP; número sequencial gerado no momento que a ata foi inserida no PNCP

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
     - numeroAtaRegistroPreco
     - Texto (50)
     - Número da Ata no sistema de origem

   * - 2
     - anoAta
     - Inteiro
     - Ano da Ata

   * - 3
     - dataAssinatura
     - Data
     - Data de assinatura da Ata

   * - 4
     - dataVigenciaInicio
     - Data
     - Data de início de vigência da Ata

   * - 5
     - dataVigenciaFim
     - Data
     - Data de fim de vigência da Ata

   * - 6
     - dataCancelamento
     - Data
     - Data de cancelamento da Ata

   * - 7
     - cancelado
     - Booleano
     - Indicador de cancelamento da Ata

   * - 8
     - dataPublicacaoPncp
     - Data
     - Data da publicação da Ata no PNCP

   * - 9
     - dataInclusao
     - Data
     - Data da inclusão do registro da Ata no PNCP

   * - 10
     - dataAtualizacao
     - Data
     - Data da última atualização do registro da Ata

   * - 11
     - sequencialAta
     - Inteiro
     - Número sequencial da Ata, gerado pelo PNCP

   * - 12
     - numeroControle
     - String
     - Número de Controle PNCP da Ata

   * - 13
     - localCompra
     - String
     - Município e Estado referente à contratação

   * - 14
     - orgaoCompra
     - String
     - Órgão referente à contratação

   * - 15
     - orgaoSubRogadoCompra
     - String
     - Órgão sub-rogado referente à contratação

   * - 16
     - modalidadeNome
     - String
     - Modalidade referente à contratação

   * - 17
     - objetoCompra
     - String
     - Descrição do objeto referente à contratação

   * - 18
     - informacaoComplementarCompra
     - String
     - Informação complementar do objeto referente à contratação

   * - 19
     - dataAtualizacaoGlobal
     - Data
     - Data da última atualização global do registro da Ata considerando seus dependentes (documento da ata)

   * - 20
     - usuarioNome
     - Texto
     - Nome da plataforma que publicou a Ata no PNCP

   * - :destaque-amarelo-claro:`21`
     - :destaque-amarelo-claro:`possibilidadeAdesao`
     - :destaque-amarelo-claro:`Booleano`
     - :destaque-amarelo-claro:`Indicador se a Ata permite adesão de não participantes (False = Não / True = Sim)`
