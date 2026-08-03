Inserir Itens da Intenção de Registro de Preço
==============================================

Serviço que permite inserir Itens a uma Intenção de Registro de Preço (IRP).

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/irp/{ano}/{sequencial}/itens
     - POST
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  :emphasize-lines: 1-20

    [
    	{
				"numeroItem": 1,
				"materialOuServico": "M",
				"categoriaItemId": 1,
				"criterioJulgamentoId": 1,
				"aplicabilidadeMargemPreferencia": false,
				"exigenciaConteudoNacional": false,
				"descricao": "Item do tipo material",
				"informacaoComplementar": "SUCO DE UVA INTEGRAL 200ml",
				"unidadeFornecimento": "UN",
				"valorUnitarioEstimado": 10.5,
				"indicadorValorSigiloso": false,
				"codigoGtin": "7891141029318",
				"codigoNcmNbs": "2009.69.00",
				"descricaoNcmNbs": "suco de uva integral 200ml",
				"catalogoId": 1,
				"codigoItemCatalogo": "9999999"
			}
    ]

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1-6

  	curl -k -X POST \
  	  --header "Authorization: Bearer access_token" \
  	  "${BASE_URL}/v1/orgaos/10000000000003/irp/2021/1/itens" \
  	  -H "accept: */*" \
  	  -H "Content-Type: application/json" \
  	  --data "@/home/objeto.json"


Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``cnpj``, ``ano`` e ``sequencial`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 10 10 55
   :header-rows: 1
   :class: quebra-linha-dois-ultima

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição

   * - :destaque-verde-claro:`1`
     - :destaque-verde-claro:`itensIrp`
     - :destaque-verde-claro:`Lista`
     - :destaque-verde-claro:`Sim`
     - 
   * - :destaque-verde-claro:`1.1`
     - :destaque-verde-claro:`numeroItem`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Número do item na IRP (único e sequencial crescente)`
   * - :destaque-verde-claro:`1.2`
     - :destaque-verde-claro:`materialOuServico`
     - :destaque-verde-claro:`Texto (1)`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Domínio: M - Material; S - Serviço;`
   * - :destaque-verde-claro:`1.3`
     - :destaque-verde-claro:`categoriaItemId`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Código da categoria do item. Consultar Categoria de Item para mais informações.`
   * - :destaque-verde-claro:`1.4`
     - :destaque-verde-claro:`criterioJulgamentoId`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Código da tabela de domínio Critério de julgamento`
   * - :destaque-verde-claro:`1.5`
     - :destaque-verde-claro:`aplicabilidadeMargemPreferencia`
     - :destaque-verde-claro:`Booleano`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Indicador da aplicabilidade de Margem de Preferência para o item. (False/Não; True/Sim)`
   * - :destaque-verde-claro:`1.6`
     - :destaque-verde-claro:`exigenciaConteudoNacional`
     - :destaque-verde-claro:`Booleano`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Indicador de Exigência de Conteúdo Nacional (False/Não; True/Sim)`
   * - :destaque-verde-claro:`1.7`
     - :destaque-verde-claro:`descricao`
     - :destaque-verde-claro:`Texto (512)`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Descrição para o item`
   * - :destaque-verde-claro:`1.8`
     - :destaque-verde-claro:`informacaoComplementar`
     - :destaque-verde-claro:`Texto (5120)`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Informações complementares; Se existir;`
   * - :destaque-verde-claro:`1.9`
     - :destaque-verde-claro:`unidadeFornecimento`
     - :destaque-verde-claro:`Texto (30)`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Unidade de Fornecimento`
   * - :destaque-verde-claro:`1.10`
     - :destaque-verde-claro:`valorUnitarioEstimado`
     - :destaque-verde-claro:`Decimal`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Valor unitário estimado para o item da IRP. Maior ou igual a 0 (zero). Precisão de 4 dígitos decimais; Ex: 100.0000;`
   * - :destaque-verde-claro:`1.11`
     - :destaque-verde-claro:`indicadorValorSigiloso`
     - :destaque-verde-claro:`Booleano`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Identifica se o valor do item é sigiloso; true - Sigiloso; false - Não sigiloso;`
   * - :destaque-verde-claro:`1.12`
     - :destaque-verde-claro:`codigoGtin`
     - :destaque-verde-claro:`Texto (20)`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Identifica precisamente um item quando ele possui um código de barras padronizado`
   * - :destaque-verde-claro:`1.13`
     - :destaque-verde-claro:`codigoNcmNbs`
     - :destaque-verde-claro:`Texto (15)`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Código NCM do material ou Código NBS do serviço com ou sem a formatação da máscara.`
   * - :destaque-verde-claro:`1.14`
     - :destaque-verde-claro:`descricaoNcmNbs`
     - :destaque-verde-claro:`Texto (2048)`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Descrição respectiva ao NCM para material ou NBS para serviço.`
   * - :destaque-verde-claro:`1.15`
     - :destaque-verde-claro:`catalogoId`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Código do Catálogo de itens utilizado como referência. Consultar 7.45. Catálogos (Itens de Plano de Contratações e Contratações) para mais informações.`
   * - :destaque-verde-claro:`1.16`
     - :destaque-verde-claro:`codigoItemCatalogo`
     - :destaque-verde-claro:`Texto (20)`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Código do item conforme consta no Catálogo utilizado como referência.`


Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - :destaque-verde-claro:`200`
     - :destaque-verde-claro:`Created`
     - :destaque-verde-claro:`Sucesso`
   * - :destaque-verde-claro:`204`
     - :destaque-verde-claro:`No Content`
     - :destaque-verde-claro:`Sucesso`
   * - :destaque-verde-claro:`400`
     - :destaque-verde-claro:`Bad Request`
     - :destaque-verde-claro:`Erro`
   * - :destaque-verde-claro:`401`
     - :destaque-verde-claro:`Unauthorized`
     - :destaque-verde-claro:`Erro`
   * - :destaque-verde-claro:`422`
     - :destaque-verde-claro:`Unprocessable Entity`
     - :destaque-verde-claro:`Erro`
   * - :destaque-verde-claro:`500`
     - :destaque-verde-claro:`Internal Server Error`
     - :destaque-verde-claro:`Erro`
