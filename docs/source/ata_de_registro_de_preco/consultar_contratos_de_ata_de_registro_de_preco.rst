Consultar Contratos de Ata de Registro de Preço
===============================================

Serviço que permite consultar todos os contratos/empenhos vinculados a uma ata de registro de preço específica.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - :destaque-amarelo-claro:`/v1/orgaos/{cnpj}/compras/{ano}/{sequencial}/atas/{sequencialAta}/contratos`
     - :destaque-amarelo-claro:`GET`

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

      curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/compras/2021/1/atas/1/contratos" -H "accept: */*"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   :destaque-amarelo-claro:`Alimentar o parâmetro ``{cnpj}``, ``{ano}``, ``{sequencial}`` e ``{sequencialAta}`` na URL.`

.. list-table::
   :width: 100%
   :widths: 5 10 10 15 55
   :header-rows: 1
   :class: quebra-linha-ultima-coluna

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição

   * - :destaque-amarelo-claro:`1`
     - :destaque-amarelo-claro:`cnpj`
     - :destaque-amarelo-claro:`Texto (14)`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação)`

   * - :destaque-amarelo-claro:`2`
     - :destaque-amarelo-claro:`ano`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Ano da contratação`

   * - :destaque-amarelo-claro:`3`
     - :destaque-amarelo-claro:`sequencial`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Sequencial da contratação no PNCP`

   * - :destaque-amarelo-claro:`4`
     - :destaque-amarelo-claro:`sequencialAta`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Sim`
     - :destaque-amarelo-claro:`Sequencial da Ata no PNCP`

   * - :destaque-amarelo-claro:`5`
     - :destaque-amarelo-claro:`pagina`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Não`
     - :destaque-amarelo-claro:`Utilizado para paginação dos itens. Número da página`

   * - :destaque-amarelo-claro:`6`
     - :destaque-amarelo-claro:`tamanhoPagina`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Não`
     - :destaque-amarelo-claro:`Utilizado para paginação dos itens. Quantidade de itens por página`

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

   * - :destaque-amarelo-claro:`1`
     - :destaque-amarelo-claro:`data`
     - 
     - :destaque-amarelo-claro:`Dados retornados pela consulta`

   * - :destaque-amarelo-claro:`1.1`
     - :destaque-amarelo-claro:`numeroControle`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Número de controle PNCP do contrato/empenho (id contrato PNCP)`

   * - :destaque-amarelo-claro:`1.2`
     - :destaque-amarelo-claro:`sequencialContrato`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Sequencial do contrato/empenho no PNCP; número sequencial gerado no momento que o contrato/empenho foi inserido no PNCP`

   * - :destaque-amarelo-claro:`1.3`
     - :destaque-amarelo-claro:`frutoAdesao`
     - :destaque-amarelo-claro:`Booleano`
     - :destaque-amarelo-claro:`Indicador se o contrato/empenho é de um não participante, ou seja, fruto da adesão a uma ata de registro de preço (False = Não / True = Sim)`

   * - :destaque-amarelo-claro:`1.4`
     - :destaque-amarelo-claro:`orgaoEntidade`
     - 
     - :destaque-amarelo-claro:`Dados do órgão/entidade do contrato/empenho`

   * - :destaque-amarelo-claro:`1.4.1`
     - :destaque-amarelo-claro:`cnpj`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`CNPJ do órgão/entidade`

   * - :destaque-amarelo-claro:`1.4.2`
     - :destaque-amarelo-claro:`nome`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Nome do órgão/entidade`

   * - :destaque-amarelo-claro:`1.5`
     - :destaque-amarelo-claro:`unidadeExecutora`
     - 
     - :destaque-amarelo-claro:`Dados da Unidade Administrativa`

   * - :destaque-amarelo-claro:`1.5.1`
     - :destaque-amarelo-claro:`codigo`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Código da Unidade Administrativa`

   * - :destaque-amarelo-claro:`1.5.2`
     - :destaque-amarelo-claro:`nomeUnidade`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Nome da Unidade Administrativa`

   * - :destaque-amarelo-claro:`1.5.3`
     - :destaque-amarelo-claro:`localidade`
     - 
     - :destaque-amarelo-claro:`Localidade da Unidade Administrativa`

   * - :destaque-amarelo-claro:`1.5.3.1`
     - :destaque-amarelo-claro:`uf`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Unidade Federativa`

   * - :destaque-amarelo-claro:`1.5.3.2`
     - :destaque-amarelo-claro:`codigoIbgeMunicipio`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Código IBGE do Município`

   * - :destaque-amarelo-claro:`1.5.3.3`
     - :destaque-amarelo-claro:`nomeMunicipio`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Nome do Município`

   * - :destaque-amarelo-claro:`1.6`
     - :destaque-amarelo-claro:`numeroContratoEmpenho`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Número do contrato/empenho`

   * - :destaque-amarelo-claro:`1.7`
     - :destaque-amarelo-claro:`anoContrato`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Ano do contrato/empenho`

   * - :destaque-amarelo-claro:`1.8`
     - :destaque-amarelo-claro:`objetoContrato`
     - :destaque-amarelo-claro:`Texto`
     - :destaque-amarelo-claro:`Descrição do objeto do contrato/empenho`

   * - :destaque-amarelo-claro:`1.9`
     - :destaque-amarelo-claro:`dataAssinatura`
     - :destaque-amarelo-claro:`Data`
     - :destaque-amarelo-claro:`Data da assinatura`

   * - :destaque-amarelo-claro:`1.10`
     - :destaque-amarelo-claro:`dataVigenciaInicio`
     - :destaque-amarelo-claro:`Data`
     - :destaque-amarelo-claro:`Data inicial de vigência`

   * - :destaque-amarelo-claro:`1.11`
     - :destaque-amarelo-claro:`dataVigenciaFim`
     - :destaque-amarelo-claro:`Data`
     - :destaque-amarelo-claro:`Data final de vigência`

   * - :destaque-amarelo-claro:`1.12`
     - :destaque-amarelo-claro:`valorGlobal`
     - 
     - :destaque-amarelo-claro:`Valor global do contrato/empenho`

   * - :destaque-amarelo-claro:`1.13`
     - :destaque-amarelo-claro:`dataPublicacaoPncp`
     - :destaque-amarelo-claro:`Data/Hora`
     - :destaque-amarelo-claro:`Data e hora da inclusão no PNCP`

   * - :destaque-amarelo-claro:`1.14`
     - :destaque-amarelo-claro:`usuarioNome`
     - :destaque-amarelo-claro:`String`
     - :destaque-amarelo-claro:`Nome do usuário/sistema que efetuou a operação`

   * - :destaque-amarelo-claro:`2`
     - :destaque-amarelo-claro:`totalRegistros`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Total de registros de contratos/empenhos encontrados`

   * - :destaque-amarelo-claro:`3`
     - :destaque-amarelo-claro:`totalPaginas`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Total de páginas`

   * - :destaque-amarelo-claro:`4`
     - :destaque-amarelo-claro:`numeroPagina`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Número da página consultada`

   * - :destaque-amarelo-claro:`5`
     - :destaque-amarelo-claro:`paginasRestantes`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Quantidade de páginas restantes`

   * - :destaque-amarelo-claro:`6`
     - :destaque-amarelo-claro:`emendaParlamentar`
     - :destaque-amarelo-claro:`Booleano`
     - :destaque-amarelo-claro:`Marcador de emenda parlamentar na contratação`

   * - :destaque-amarelo-claro:`7`
     - :destaque-amarelo-claro:`temRemanejamento`
     - :destaque-amarelo-claro:`Booleano`
     - :destaque-amarelo-claro:`Indicador de remanejamento (False = Não / True = Sim). O remanejamento permite a transferência de saldos entre órgãos participantes ou não participantes (caronas), mediante autorização do órgão gerenciador e anuência do fornecedor`

   * - :destaque-amarelo-claro:`8`
     - :destaque-amarelo-claro:`empty`
     - :destaque-amarelo-claro:`Booleano`
     - :destaque-amarelo-claro:`Indica se o retorno está vazio`

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 25
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo

   * - :destaque-amarelo-claro:`200`
     - :destaque-amarelo-claro:`Ok`
     - :destaque-amarelo-claro:`Sucesso`
   * - :destaque-amarelo-claro:`400`
     - :destaque-amarelo-claro:`BadRequest`
     - :destaque-amarelo-claro:`Erro`
   * - :destaque-amarelo-claro:`422`
     - :destaque-amarelo-claro:`Unprocessable Entity`
     - :destaque-amarelo-claro:`Erro`
   * - :destaque-amarelo-claro:`500`
     - Internal Server Error`
     - :destaque-amarelo-claro:`Erro`
