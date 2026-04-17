Consultar um Termo de Contrato
==============================

Serviço que permite recuperar um termo de contrato.

.. Attention::

   As alterações da versão |versao| estão em destaque, conforme exemplo a seguir:

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - cnpj
     - Texto
     - CNPJ do órgão do contrato/empenho
   * - :destaque:`2`
     - :destaque:`ano`
     - :destaque:`Inteiro`
     - :destaque:`Ano do contrato/empenho`
   * - 3
     - sequencialContrato
     - Inteiro
     - Sequencial do contrato/empenho no PNCP; número sequencial gerado no momento da inclusão

\

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/contratos/{ano}/{sequencial}/termos/{sequencialTermoContrato}
     - GET
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  
    Não se aplica
  
Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:

  curl -k -X GET "${BASE_URL}/v1/orgaos/10000000000003/contratos/2021/1/termos/1" \
   -H "accept: */*"

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros {cnpj}, {ano}, {sequencial} e {sequencialTermoContrato} na URL.

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
     - CNPJ do órgão do contrato
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
   * - 4
     - sequencialTermoContrato
     - Inteiro
     - Sim
     - Número sequencial do termo de contrato (gerado pelo PNCP)

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 15 35 20
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 200
     - OK
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

Exemplo de Retorno
~~~~~~~~~~~~~~~~~~

.. code-block:: bash

	Retorno:
	{
	  "unidade": { dados da unidade },
	  "fornecedor": { dados do fornecedor },
	  "niFornecedor": "string",
	  "tipoPessoa": "PJ",
	  "processo": "string",
	  "contrato": { dados do contrato },
	  "tipoTermoContrato": { dados do tipo do termo de contrato },
	  "sequencialTermoContrato": 0,
	  "fornecedorSubContratado": { dados do fornecedor subcontratado },
	  "unidadeSubrogada": { dados da unidade subrogada },
	  "dataVigenciaInicio": "yyyy-mm-dd",
	  "orgaoEntidade": { dados do órgão do contrato },
	"dataInclusao": "yyyy-mm-ddThh:mm:ss",
	"excluido": boolean,
	  "compra": { dados da compra },
	  "informativoObservacao": "string",
	  "prazoAditadoDias": 0,
	  "qualificacaoAcrescimoSupressao": boolean,
	  "qualificacaoVigencia": boolean,
	  "qualificacaoFornecedor": boolean,
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
	  "orgaoSubrogado": { dados do órgão subrogado },
	"dataPublicacaoPncp": "yyyy-mm-ddThh:mm:ss"
	}

\
