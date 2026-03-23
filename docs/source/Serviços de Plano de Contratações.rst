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
   :linenos:
   :emphasize-lines: 5,6

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



