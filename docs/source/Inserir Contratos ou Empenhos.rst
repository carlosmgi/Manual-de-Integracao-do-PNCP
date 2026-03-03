Inserir Contratos ou Empenhos
=============================

Serviço que permite incluir um contrato ou empenho. Este serviço será acionado por 
qualquer plataforma digital credenciada.  

.. Attention::
  
  Conforme regra de conformidade, prevista no item 5.19, não é possível a inclusão ou retificação de contrato ou empenho que pertença à contratação realizada por Sistema de Registro de Preços (SRP), a qual não possua ao menos uma ata de registro de preços publicada no PNCP. 

Detalhes da Requisição

.. list-table::
   :header-rows: 1
   :widths: 20 10 70

   * - Endpoint
     - Método HTTP
     - Exemplo de Payload
   * - ``/v1/orgaos/{cnpj}/contratos``
     - **POST**
     - .. code-block:: json

           {
             "cnpjCompra": "100000000000003",
             "anoCompra": 2021,
             "sequencialCompra": 1,
             "sequencialAta": 1,
             "frutoAdesao": true,
             "tipoContrato": 1,
             "numeroContratoEmpenho": "1",
             "anoContrato": 2021,
             "processo": "1/2021",
             "categoriaProcesso": 2,
             "receita": false,
             "codigoUnidade": "1",
             "niFornecedor": "100000000000010",
             "tipoPessoaFornecedor": "PJ",
             "nomeRazaoSocialFornecedor": "Fornecedor do Teste I",
             "objetoContrato": "Contrato para exemplificar uso da API PNCP",
             "informacaoComplementar": "",
             "valorInicial": 10000.0000,
             "numeroParcelas": 2,
             "valorParcela": 5000.0000,
             "valorGlobal": 10000.0000,
             "valorAcumulado": 10000.0000,
             "dataAssinatura": "2021-07-27",
             "dataVigenciaInicio": "2021-07-28",
             "dataVigenciaFim": "2021-07-29",
             "identificadorCipi": "11111-011",
             "urlCipi": "https://cipi.economia.gov.br/11111-011"
           }
