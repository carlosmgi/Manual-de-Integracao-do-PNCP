Consultar Todos os Termos de um Contrato
========================================

Serviço que permite recuperar a lista de termos de um contrato.

Detalhes da Requisição
----------------------

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/contratos/{ano}/{sequencial}/termos
     - GET

Exemplo de Payload
------------------

Não se aplica.

Exemplo Requisição (cURL)
-------------------------

.. code-block:: bash
  :linenos:

   curl -k -X GET \
     "${BASE_URL}/v1/orgaos/10000000000003/contratos/2021/1/termos" \
     -H "accept: */*"

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
     - Cnpj do órgão do contrato
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do contrato
   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Número sequencial do contrato (gerado pelo PNCP)

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

Formato do Retorno
------------------

.. code-block:: json
  :linenos:

   [
     {
       "unidade": { "dados": "da unidade" },
       "fornecedor": { "dados": "do fornecedor" },
       "niFornecedor": "string",
       "tipoPessoa": "PJ",
       "processo": "string",
       "contrato": { "dados": "do contrato" },
       "tipoTermoContrato": { "dados": "do tipo do termo de contrato" },
       "sequencialTermoContrato": 0,
       "fornecedorSubContratado": { "dados": "do fornecedor subcontratado" },
       "unidadeSubrogada": { "dados": "da unidade subrogada" },
       "dataVigenciaInicio": "yyyy-mm-dd",
       "orgaoEntidade": { "dados": "do órgão do contrato" },
       "dataInclusao": "yyyy-mm-ddThh:mm:ss",
       "excluido": false,
       "compra": { "dados": "da compra" },
       "informativoObservacao": "string",
       "prazoAditadoDias": 0,
       "qualificacaoAcrescimoSupressao": false,
       "qualificacaoVigencia": false,
       "qualificacaoFornecedor": false,
       "tipoPessoaSubContratada": "string",
       "numeroTermoContrato": "string",
       "objetoTermoContrato": "string",
       "nomeRazaoSocialFornecedor": "string",
       "informacaoComplementar": "string",
       "niFornecedorSubContratado": "string",
       "nomeFornecedorSubContratado": "string",
       "numeroContratoEmpenho": "string",
       "dataAssinatura": "yyyy-mm-dd",
       "dataVigenciaFim": "yyyy-mm-dd",
       "dataAtualizacao": "yyyy-mm-ddThh:mm:ss",
       "valorAcrescido": 0,
       "fundamentoLegal": "string",
       "valorParcela": 0,
       "valorGlobal": 0,
       "numeroParcelas": 0,
       "orgaoSubrogado": { "dados": "do órgão subrogado" },
       "dataPublicacaoPncp": "yyyy-mm-ddThh:mm:ss"
     }
   ]
