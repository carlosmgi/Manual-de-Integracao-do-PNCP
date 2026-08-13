Retificar Parcialmente Itens da Intenção de Registro de Preço
=============================================================

Serviço que permite retificar parcialmente uma Intenção de Registro de Preço específica (IRP).

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/irp/{ano}/{sequencial}/itens
     - PATCH

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  :emphasize-lines: 1-23

    {
    	"itens": [
    		{
    			"numeroItem": 0,
    			"materialOuServico": "M",
    			"categoriaItemId": 0,
    			"criterioJulgamentoId": 0,
    			"aplicabilidadeMargemPreferencia": true,
    			"exigenciaConteudoNacional": true,
    			"descricao": "string",
    			"informacaoComplementar": "string",
    			"unidadeFornecimento": "string",
    			"valorUnitarioEstimado": 0,
    			"indicadorValorSigiloso": true,
    			"codigoGtin": "string",
    			"codigoNcmNbs": "string",
    			"descricaoNcmNbs": "string",
    			"catalogoId": 0,
    			"codigoItemCatalogo": "string"
    		}
    	],
    	"justificativa": "string"
    }

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1-6

  	curl -k -X PATCH \
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
     - :destaque-verde-claro:`cnpj`
     - :destaque-verde-claro:`Texto (14)`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Cnpj do órgão originário da IRP informado na inclusão (proprietário da IRP)`
   * - :destaque-verde-claro:`2`
     - :destaque-verde-claro:`ano`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Ano da IRP`
   * - :destaque-verde-claro:`3`
     - :destaque-verde-claro:`sequencial`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Sequencial da IRP no PNCP; Número sequencial gerado no momento que a IRP foi inserida no PNCP`
   * - :destaque-verde-claro:`4`
     - :destaque-verde-claro:`itensIrp`
     - :destaque-verde-claro:`Lista`
     - :destaque-verde-claro:`Sim`
     - 
   * - :destaque-verde-claro:`4.1`
     - :destaque-verde-claro:`numeroItem`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Número do item na IRP (único e sequencial crescente)`
   * - :destaque-verde-claro:`4.2`
     - :destaque-verde-claro:`materialOuServico`
     - :destaque-verde-claro:`Texto (1)`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Domínio: M - Material; S - Serviço;`
   * - :destaque-verde-claro:`4.3`
     - :destaque-verde-claro:`categoriaItemId`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Código da categoria do item. Consultar Categoria de Item para mais informações.`
   * - :destaque-verde-claro:`4.4`
     - :destaque-verde-claro:`criterioJulgamentoId`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Código da tabela de domínio Critério de julgamento`
   * - :destaque-verde-claro:`4.5`
     - :destaque-verde-claro:`aplicabilidadeMargemPreferencia`
     - :destaque-verde-claro:`Booleano`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Indicador da aplicabilidade de Margem de Preferência para o item. (False/Não; True/Sim)`
   * - :destaque-verde-claro:`4.6`
     - :destaque-verde-claro:`exigenciaConteudoNacional`
     - :destaque-verde-claro:`Booleano`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Indicador de Exigência de Conteúdo Nacional (False/Não; True/Sim)`
   * - :destaque-verde-claro:`4.7`
     - :destaque-verde-claro:`descricao`
     - :destaque-verde-claro:`Texto (2048)`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Descrição para o item`
   * - :destaque-verde-claro:`4.8`
     - :destaque-verde-claro:`informacaoComplementar`
     - :destaque-verde-claro:`Texto (4096)`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Informações complementares; Se existir;`
   * - :destaque-verde-claro:`4.9`
     - :destaque-verde-claro:`unidadeFornecimento`
     - :destaque-verde-claro:`Texto (30)`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Unidade de Fornecimento`
   * - :destaque-verde-claro:`4.10`
     - :destaque-verde-claro:`valorUnitarioEstimado`
     - :destaque-verde-claro:`Decimal`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Valor unitário estimado para o item da IRP. Maior ou igual a 0 (zero). Precisão de 4 dígitos decimais; Ex: 100.0000;`
   * - :destaque-verde-claro:`4.11`
     - :destaque-verde-claro:`indicadorValorSigiloso`
     - :destaque-verde-claro:`Booleano`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Identifica se o valor do item é sigiloso; true - Sigiloso; false - Não sigiloso;`
   * - :destaque-verde-claro:`4.12`
     - :destaque-verde-claro:`codigoGtin`
     - :destaque-verde-claro:`Texto (20)`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Identifica precisamente um item quando ele possui um código de barras padronizado`
   * - :destaque-verde-claro:`4.13`
     - :destaque-verde-claro:`codigoNcmNbs`
     - :destaque-verde-claro:`Texto (15)`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Código NCM do material ou Código NBS do serviço com ou sem a formatação da máscara.`
   * - :destaque-verde-claro:`4.14`
     - :destaque-verde-claro:`descricaoNcmNbs`
     - :destaque-verde-claro:`Texto (2048)`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Descrição respectiva ao NCM para material ou NBS para serviço.`
   * - :destaque-verde-claro:`4.15`
     - :destaque-verde-claro:`catalogoId`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Código do Catálogo de itens utilizado como referência. Consultar 7.45. Catálogos (Itens de Plano de Contratações e Contratações) para mais informações.`
   * - :destaque-verde-claro:`4.16`
     - :destaque-verde-claro:`codigoItemCatalogo`
     - :destaque-verde-claro:`Texto (20)`
     - :destaque-verde-claro:`Não`
     - :destaque-verde-claro:`Código do item conforme consta no Catálogo utilizado como referência.`
   * - :destaque-verde-claro:`2`
     - :destaque-verde-claro:`justificativa`
     - :destaque-verde-claro:`Texto (255)`
     - :destaque-verde-claro:`Sim`
     - :destaque-verde-claro:`Motivo/justificativa para retificação dos itens da IRP`

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
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
