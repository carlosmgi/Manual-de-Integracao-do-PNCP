Retificar Contrato ou Empenho
=============================

Serviço que permite retificar um contrato ou empenho. Este serviço será acionado por
qualquer plataforma digital credenciada. 

.. Attention::
  
  Na Retificação todas as informações terão que ser enviadas novamente, não apenas as que sofreram alteração. Conforme regra de conformidade, prevista no item 5.19, não é possível a inclusão ou retificação de contrato ou empenho que pertença à contratação realizada por Sistema de Registro de Preços (SRP), a qual não possua ao menos uma ata de registro de preços publicada no PNCP.


**Atualizações da versão 2.3.10**
---------------------------------

.. versionadded:: 2.3.10
 
.. list-table::
  :widths: auto
  :header-rows: 1

  * - Id
    - Campo
    - Tipo
    - Obrigatório
    - Descrição
  * - 30
    - dataVigenciaFim
    - Data
    - Não
    - Data do término da vigência do contrato. Opcional apenas para contrato do tipo igual a 1.
  * - 34
    -  :guilabel:`sequencialAta`
    - Inteiro
    - Não
    - Número sequencial da ata de registro de preço (gerado pelo PNCP no momento da inclusão da ata).
  * - 35
    -   :guilabel:`frutoAdesao`
    - Booleano
    - Sim
    - Indicador se o contrato/empenho é de um não participante, ou seja, fruto da adesão a uma ata de registro de preço.

.. versionchanged:: 2.3.10

  não houve alterações.

.. deprecated:: 2.3.10

  não houve alterações.

Detalhes da Requisição
----------------------

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/contratos/{ano}/{sequencial}
     - PUT

Exemplo de Payload
------------------

.. code-block:: json
  :linenos:
  :emphasize-lines: 5,6
  
  {
    "cnpjCompra": "10000000000003",
    "anoCompra": 2021,
    "sequencialCompra": 1,
    "sequencialAta": 1,
    "frutoAdesao": true,
    "tipoContratoId": 1,
    "numeroContratoEmpenho": "1",
    "processo": "1/2021",
    "categoriaProcessoId": 2,
    "receita": false,
    "codigoUnidade": "1",
    "cnpjOrgaoSubRogado": "",
    "codigoUnidadeSubRogada": "",
    "niFornecedor": "10000000000010",
    "tipoPessoaFornecedor": "PJ",
    "nomeRazaoSocialFornecedor": "Fornecedor do Teste I",
    "niFornecedorSubContratado": "",
    "tipoPessoaFornecedorSubContratado": "",
    "nomeRazaoSocialFornecedorSubContratado": "",
    "objetoContrato": "Contrato para exemplificar uso da API de retificação no PNCP.",
    "informacaoComplementar": "",
    "valorInicial": 10000.00,
    "numeroParcelas": 2,
    "valorParcela": 5000.00,
    "valorGlobal": 10000.00,
    "valorAcumulado": 10000.00,
    "dataAssinatura": "2021-07-21",
    "dataVigenciaInicio": "2021-07-22",
    "dataVigenciaFim": "2021-07-23",
    "justificativa": "motivo/justificativa para a retificação do contrato"
    “identificadorCipi”: “111.11-011”,
    “urlCipi”: ” https://cipi.economia.gov.br/111.11-011”
}
