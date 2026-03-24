Serviços de Plano de Contratações
=================================

Inserir Plano de Contratações
-----------------------------

Serviço que permite inserir um plano de contratações de um ano de uma respectiva unidade no PNCP.

.. Attention::
  
   O serviço requer que seja enviado pelo menos um item e o limite máximo de recebimento é de 1000 itens.

Este serviço requer autenticação para ser acionado.

Detalhes da Requisição
----------------------

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/pca
     - POST

Exemplo de Payload
------------------

.. code-block:: json

   {
     "codigoUnidade": "170456",
     "anoPca": 2022,
     "itensPlano": [
       {
         "numeroItem": 1,
         "categoriaItemPca": "1",
         "catalogo": "1",
         "classificacaoCatalogo": "1",
         "classificacaoSuperiorCodigo": "7510",
         "classificacaoSuperiorNome": "Artigos para escritório",
         "codigoItem": "468205",
         "descricao": "Apontador Lápis",
         "unidadeFornecimento": "Caixa 100 unidades",
         "quantidade": 500,
         "valorUnitario": 50.00,
         "valorTotal": 25000.00,
         "valorOrcamentoExercicio": 25000.00,
         "renovacaoContrato": false,
         "dataDesejada": "2022-05-15",
         "unidadeRequisitante": "Departamento Administrativo",
         "grupoContratacaoCodigo": "",
         "grupoContratacaoNome": ""
       },
       {
         "numeroItem": 2,
         "categoriaItemPca": "2",
         "catalogo": "1",
         "classificacaoCatalogo": "2",
         "classificacaoSuperiorCodigo": "547",
         "classificacaoSuperiorNome": "Serviço de acabamento e finalização dos edifícios",
         "codigoItem": "21776",
         "descricao": "Troca Filtro - Veículo Automotivo",
         "unidadeFornecimento": "UNIDADE",
         "quantidade": 10,
         "valorUnitario": 50.00,
         "valorTotal": 500.00,
         "valorOrcamentoExercicio": 500.00,
         "dataDesejada": "2022-07-10",
         "unidadeRequisitante": "Departamento Logístico",
         "grupoContratacaoCodigo": "",
         "grupoContratacaoNome": ""
       }
     ]
   }

Exemplo Requisição (cURL)
-------------------------

.. code-block:: bash
   :linenos:

   curl -k -X POST \
     --header "Authorization: Bearer access_token" \
     "${BASE_URL}/v1/orgaos/10000000000003/pca" \
     -H "accept: */*" \
     -H "Content-Type: application/json" \
     --data "@/home/objeto.json"

Dados de Entrada
----------------

.. note::

  Alimentar os parâmetros {cnpj}, {ano} e {sequencial} na URL. 

.. list-table::
   :width: 100%
   :widths: 5 25 15 10 25
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
     - codigoUnidade
     - Texto (20)
     - Sim
     - Código da unidade
       administrativa; Unidade
       deverá estar cadastrada
       para o órgão;

   * - 3
     - anoPca
     - Inteiro
     - Sim
     - Ano do PCA

   * - 4
     - itensPlano
     - Lista
     - Sim
     - Lista de itens do Plano

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
     - Sim
     - Código da categoria do
       item. Consultar item 5.17 Categoria de Item para mais 
       informações.

   * - 4.3
     - catalogo
     - Inteiro
     - Sim
     - Código do Catálogo de itens
       utilizado como referência.
       Consultar item 5.23
       Catálogos para mais
       informações

   * - 4.4
     - classificacaoCatalogo
     - Inteiro
     - Sim
     - Indica se é Material ou
       Serviço. Domínio: 1 -
       Material; 2 - Serviço;

   * - 4.5
     - classificacaoSuperiorCodigo
     - Texto (100)
     - Sim
     - Código da Classe do
       material ou Grupo do
       serviço conforme catálogo

   * - 4.6
     - classificacaoSuperiorNome
     - Texto (255)
     - Sim
     - Descrição da Classe do
       material ou Grupo do
       serviço conforme catálogo

   * - 4.7
     - pdmCodigo
     - Texto (100)
     - Não
     - Código PDM referente ao
       material conforme o CNBS

   * - 4.8
     - pdmDescricao
     - Texto (255)
     - Não
     - Descrição PDM referente ao
       material conforme o CNBS

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
       serviço conforme catálogo
       utilizado

   * - 4.11
     - unidadeFornecimento
     - Texto (255)
     - Não
     - Unidade de fornecimento

   * - 4.12
     - quantidade
     - Decimal (17,4)
     - Sim
     - Quantidade de itens do
       plano (maior ou igual a zero).
       Precisão de 4 dígitos
       decimais; Ex: 100.0000;

   * - 4.13
     - valorUnitario
     - Decimal (17,4)
     - Sim
     - Valor unitário do item (maior
       ou igual a zero). Precisão de
       4 dígitos decimais; Ex:
       100.0000;

   * - 4.14
     - valorTotal
     - Decimal (17,4)
     - Sim
     - Valor total do item (maior ou
       igual a zero). Precisão de 4
       dígitos decimais; Ex:
       100.0000;

   * - 4.15
     - valorOrcamentoExercicio
     - Decimal (17,4)
     - Sim
     - Valor orçamentário
       estimado para o exercício
       (maior ou igual a zero).
       Precisão de 4 dígitos
       decimais; Ex: 100.0000;

   * - 4.16
     - dataDesejada
     - Date
     - Sim
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

Dados de Retorno
----------------

.. list-table::
   :width: 100%
   :widths: 5 25 15 10 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição

   * - 1
     - location
     - Texto (255)
     - Sim
     - Endereço http do recurso criado

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

