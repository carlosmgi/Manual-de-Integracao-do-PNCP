Retificar Parcialmente Item de Plano de Contratação
===================================================

Serviço que permite retificar um item específico de um plano de contratação no PNCP.
Este serviço requer autenticação para ser acionado.  

.. Attention::
  
   Na retificação parcial, você precisa enviar apenas as informações que sofreram alteração. Por exemplo, se você desejar apenas atualizar a categoria de um item, você deve informar apenas o atributo categoriaItemPca e ignorar todos os demais atributos.

Detalhes da Requisição
----------------------

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/pca/{ano}/{sequencial}/itens/{numeroItem}
     - PATCH

Exemplo de Payload
------------------

.. code-block:: json

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
     "grupoContratacaoNome": "",
     "justificativa": ""
   }

Exemplo Requisição (cURL)
-------------------------

.. code-block:: bash

   curl -k -X PATCH \
     --header "Authorization: Bearer access_token" \
     "${BASE_URL}/v1/orgaos/10000000000003/pca/2022/1/itens/1" \
     -H "accept: */*" \
     -H "Content-Type: application/json" \
     --data "@/home/objeto.json"

Dados de Entrada
----------------

.. note::

  Alimentar o parâmetro {cnpj}, {ano}, {sequencial} e {numeroItem} na URL.

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
     - Cnpj do órgão a que a unidade administrativa do
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
     - Número sequencial gerado
       pelo PNCP para o plano
       incluído
   * - 4
     - numeroItem
     - Inteiro
     - Não
     - Número do item no Plano
       (único e sequencial
       crescente)
   * - 5
     - categoriaItemPca
     - Inteiro
     - Não
     - Código da categoria do
       item. Consultar item 5.17
       Categoria de Item para
       mais informações
   * - 6
     - catalogo
     - Inteiro
     - Não
     - Código do Catálogo de
       itens utilizado como
       referência. Consultar item
       5.23 Catálogos para mais
       informações
   * - 7
     - classificacaoCatalogo
     - Inteiro
     - Não
     - Indica se é Material ou
       Serviço. Domínio: 1 -
       Material; 2 - Serviço;
   * - 8
     - classificacaoSuperiorCodigo
     - Texto (100)
     - Não
     - Código da Classe do
       material ou Grupo do
       serviço conforme catálogo
   * - 9
     - classificacaoSuperiorNome
     - Texto (255)
     - Não
     - Descrição da Classe do
       material ou Grupo do
       serviço conforme catálogo
   * - 10
     - pdmCodigo
     - Texto (100)
     - Não
     - Código PDM referente ao
       material conforme o CNBS
   * - 11
     - pdmDescricao
     - Texto (255)
     - Não
     - Descrição PDM referente
       ao material conforme o
       CNBS
   * - 12
     - codigoItem
     - Texto (100)
     - Não
     - Código do Material ou
       Serviço conforme o
       catálogo utilizado
   * - 14
     - unidadeFornecimento
     - Texto (255)
     - Não
     - Unidade de fornecimento
   * - 15
     - quantidade
     - Decimal (17,4)
     - Não
     - Quantidade do item do
       plano (maior ou igual a
       zero). Precisão de 4 dígitos
       decimais; Ex: 100.0000;
   * - 16
     - valorUnitario
     - Decimal (17,4)
     - Não
     - Valor unitário do item
       (maior ou igual a zero).
       Precisão de 4 dígitos
       decimais; Ex: 100.0000;
   * - 17
     - valorTotal
     - Decimal (17,4)
     - Não
     - Valor total do item (maior
       ou igual a zero). Precisão de
       4 dígitos decimais; Ex:
       100.0000;
   * - 18
     - valorOrcamentoExercicio
     - Decimal (17,4)
     - Não
     - Valor orçamentário
       estimado para o exercício
       (maior ou igual a zero).
       Precisão de 4 dígitos
       decimais; Ex: 100.0000;
   * - 19
     - dataDesejada
     - Date
     - Não
     - Data desejada para a
       contratação
   * - 20
     - unidadeRequisitante
     - Texto (255)
     - Não
     - Nome da unidade
       requisitante
   * - 21
     - grupoContratacaoCodigo
     - Texto (100)
     - Não
     - Código da Contratação
       Futura
   * - 22
     - grupoContratacaoNome
     - Texto (255)
     - Não
     - Nome da Contratação
       Futura
   * - 23
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para
       retificação do item do
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
