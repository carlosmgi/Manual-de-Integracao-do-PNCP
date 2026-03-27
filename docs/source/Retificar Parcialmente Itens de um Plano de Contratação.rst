Retificar Parcialmente Itens de um Plano de Contratação
=======================================================

Serviço que permite retificar itens de um plano de contratação no PNCP. Este serviço
requer autenticação para ser acionado.

.. Attention::
  
   Na retificação parcial, você precisa enviar
apenas as informações que sofreram alteração. Por exemplo, se você desejar apenas
atualizar a categoria de um item, você deve informar apenas o atributo
categoriaItemPca e ignorar todos os demais atributos.

Detalhes da Requisição
----------------------

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/pca/{ano}/{sequencial}/itens
     - PATCH

Exemplo de Payload
------------------

.. code-block:: json

   {
     "lista": [
       {
         "numeroItem": 2,
         "categoriaItemPca": "2",
         "catalogo": "1",
         "classificacaoCatalogo": "2",
         "classificacaoSuperiorCodigo": "547",
         "classificacaoSuperiorNome": "Serviço de acabamento e finalização dos edifícios",
         "codigoItem": "1090",
         "descricao": "Pintura industrial",
         "unidadeFornecimento": "UNIDADE",
         "quantidade": 10,
         "valorUnitario": 50.00,
         "valorTotal": 500.00,
         "valorOrcamentoExercicio": 500.00,
         "dataDesejada": "2022-07-10",
         "unidadeRequisitante": "Departamento Logístico",
         "grupoContratacaoCodigo": "",
         "grupoContratacaoNome": ""
       },
       {
         "numeroItem": 3,
         "categoriaItemPca": "2",
         "catalogo": "1",
         "classificacaoCatalogo": "2",
         "classificacaoSuperiorCodigo": "8405",
         "classificacaoSuperiorNome": "Vestuário externo masculino",
         "pdmCodigo": "8524",
         "pdmDescricao": "Japona",
         "codigoItem": "19",
         "descricao": "Japona Masculina",
         "unidadeFornecimento": "UNIDADE",
         "quantidade": 20,
         "valorUnitario": 20.00,
         "valorTotal": 400.00,
         "valorOrcamentoExercicio": 400.00,
         "dataDesejada": "2022-07-10",
         "unidadeRequisitante": "Departamento RH",
         "grupoContratacaoCodigo": "200999-2/2022",
         "grupoContratacaoNome": "Contratação 2022"
       }
     ],
     "justificativa": ""
   }

Exemplo Requisição (cURL)
-------------------------

.. code-block:: bash
   :linenos:

   curl -k -X PATCH \
     --header "Authorization: Bearer access_token" \
     "${BASE_URL}/v1/orgaos/10000000000003/pca/2022/1/itens" \
     -H "accept: */*" \
     -H "Content-Type: application/json" \
     --data "@/home/objeto.json"

Dados de Entrada
----------------

.. note::

  Alimentar o parâmetro {cnpj}, {ano} e {sequencial} na URL

.. list-table::
   :width: 100%
   :widths: 5 25 15 10 45
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
     - Cnpj do órgão a que a
       unidade administrativa do
       PCA está vinculada
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do PCA
   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Número sequencial
       gerado pelo PNCP para o
       plano incluído
   * - 4
     - lista
     - Lista
     - Sim
     - Lista de Itens do Plano
   * - 4.1
     - numeroItem
     - Inteiro
     - Sim
     - Número do item no Plano
       (único e sequencial
       crescente)
   * - 4.2
     - categoriaItemPca
     - Inteiro
     - Não
     - Código da categoria do
       item. Consultar item 5.17
       Categoria de Item para
       mais informações
   * - 4.3
     - catalogo
     - Inteiro
     - Não
     - Código do Catálogo de
       itens utilizado como
       referência. Consultar item
       5.23 Catálogos para mais
       informações
   * - 4.4
     - classificacaoCatalogo
     - Inteiro
     - Não
     - Indica se é Material ou
       Serviço. Domínio: 1 -
       Material; 2 - Serviço;
   * - 4.5
     - classificacaoSuperiorCodigo
     - Texto (100)
     - Não
     - Código da Classe do
       material ou Grupo do
       serviço conforme
       catálogo
   * - 4.6
     - classificacaoSuperiorNome
     - Texto (255)
     - Não
     - Descrição da Classe do
       material ou Grupo do
       serviço conforme
       catálogo
   * - 4.7
     - pdmCodigo
     - Texto (100)
     - Não
     - Código PDM referente ao
       material conforme o
       CNBS
   * - 4.8
     - pdmDescricao
     - Texto (255)
     - Não
     - Descrição PDM referente
       ao material conforme o
       CNBS
   * - 4.9
     - codigoItem
     - Texto (100)
     - Não
     - Código do Material ou
       Serviço conforme o
       catálogo utilizado
   * - 4.10
     - descricao
     - Texto (2048)
     - Não
     - Descrição do material ou
       serviço conforme
       catálogo utilizado
   * - 4.11
     - unidadeFornecimento
     - Texto (255)
     - Não
     - Unidade de fornecimento
   * - 4.12
     - quantidade
     - Decimal (17,4)
     - Não
     - Quantidade do item do
       plano (maior ou igual a
       zero). Precisão de 4 dígitos
       decimais; Ex: 100.0000;
   * - 4.13
     - valorUnitario
     - Decimal (17,4)
     - Não
     - Valor unitário do item
       (maior ou igual a zero).
       Precisão de 4 dígitos
       decimais; Ex: 100.0000;
   * - 4.14
     - valorTotal
     - Decimal (17,4)
     - Não
     - Valor total do item (maior
       ou igual a zero). Precisão
       de 4 dígitos decimais; Ex:
       100.0000;
   * - 4.15
     - valorOrcamentoExercicio
     - Decimal (17,4)
     - Não
     - Valor orçamentário
       estimado para o exercício
       (maior ou igual a zero)
       Precisão de 4 dígitos
       decimais; Ex: 100.0000;
   * - 4.16
     - dataDesejada
     - Date
     - Não
     - Data desejada para a
       contratação
   * - 4.17
     - unidadeRequisitante
     - Texto (255)
     - Não
     - Nome da unidade
       requisitante
   * - 4.18
     - grupoContratacaoCodigo
     - Texto (100)
     - Não
     - Código da Contratação
       Futura
   * - 4.19
     - grupoContratacaoNome
     - Texto (255)
     - Não
     - Nome da Contratação
       Futura
   * - 5
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para
       retificação dos itens do
       plano

**Códigos de Retorno**
----------------------

.. list-table::
   :width: 100%
   :widths: 10 25 25
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 201
     - Created
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro
