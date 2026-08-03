Inserir Intenção de Registro de Preço
=====================================

Serviço que permite inserir uma Intenção de Registro de Preço. Este serviço será acionado por qualquer plataforma digital credenciada.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/compras 
     - POST
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:


Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

Enviando como arquivo:

.. code-block:: bash
  :linenos:

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``cnpj``, ``Titulo-Documento`` e ``Tipo-Documento-Id`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 10 30 55
   :header-rows: 1
   :class: quebra-linha

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição

   * - 1
     - codigoUnidadeGerenciadora
     - String
     - Sim
     - Código da unidade executora do órgão da IRP; a unidade deverá estar cadastrada para o órgão
   * - 2
     - tipoInstrumentoConvocatorioId
     - Inteiro
     - Sim
     - Código da tabela de domínio Tipo de instrumento convocatório
   * - 3
     - modalidadeId
     - Inteiro
     - Sim
     - Código da tabela de domínio Modalidade
   * - 4
     - amparoLegalId
     - Inteiro
     - Sim
     - Código da tabela de domínio Amparo Legal
   * - 5
     - modoDisputaId
     - Inteiro
     - Sim
     - Código da tabela de domínio Modo de disputa
   * - 6
     - numeroIrp
     - Texto (50)
     - Sim
     - Número da IRP no sistema de origem
   * - 7
     - anoIrp
     - Inteiro
     - Sim
     - Ano da IRP. Esse é o ano relacionado à IRP. (Ex: 2021)
   * - 8
     - numeroProcesso
     - Texto (50)
     - Sim
     - Número do processo no sistema de origem
   * - 9
     - objetoIrp
     - Texto (512)
     - Sim
     - Objeto da IRP.
   * - 10
     - informacaoComplementar
     - Texto (512)
     - Não
     - Informações complementares; Se existir;
   * - 11
     - indicadorPossibilidadeAdesao
     - Booleano
     - Sim
     - Indica se a IRP poderá admitir adesão por órgãos ou entidades participantes
   * - 12
     - dataHoraFinalManifestacaoInteresse
     - Data
     - Sim
     - Data/Hora Final de Manifestação de Interesse (AAAA-MM-DD)
   * - 13
     - urlPlataformaOrigem
     - Texto (512)
     - Sim
     - URL para página/portal do sistema de origem da IRP. Esta url será exibida no Portal PNCP.
   * - 14
     - urlProcessoEletronico
     - Texto (512)
     - Sim
     - URL para página do sistema de controle de processos eletrônicos com os dados do processo desta contratação. Esta url será exibida no Portal PNCP.
   * - 15
     - itensIrp
     - Lista
     - Sim
     - 
   * - 15.1
     - numeroItem
     - Inteiro
     - Sim
     - Número do item na IRP (único e sequencial crescente)
   * - 15.2
     - materialOuServico
     - Texto (1)
     - Sim
     - Domínio: M - Material; S - Serviço;
   * - 15.3
     - materialOuServico
     - Texto (1)
     - Sim
     - Domínio: M - Material; S - Serviço;

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 201
     - Created
     - Sucesso
   * - 400
     - Bad Request
     - Erro
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro
