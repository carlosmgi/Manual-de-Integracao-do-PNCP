Retificar Parcialmente Instrumento de Cobrança de Contrato/Empenho
==================================================================

Serviço que permite retificar um instrumento de cobrança de um contrato/empenho. Este serviço será acionado por qualquer plataforma digital credenciada.

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
   * - /v1/orgaos/{cnpj}/contra-tos/{ano}/{sequencialContra-to}/instrumentocobran-ca/{sequencialInstrumentoCobranca}
     - PUT	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

    {
      "justificativa": "motivo/justificativa para a retificação do instrumento de cobrança do contrato/empenho",
      "numeroInstrumentoCobranca": "001",
      "dataEmissaoDocumento": "2025-01-15",
      "observacao": "Nota Fiscal do Empenho",
      "tipoInstrumentoCobrancaId": 1,
      "chaveNFe": "chave da nota fiscal"
    }


Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:

    curl -k -X  PUT --header "Authorization: Bearer access_token" "${BASE_URL}/v1/orgaos/10000000000003/contratos/2025/1/instrumentocobranca/1" -H "accept: */*" -H "Content-Type: application/json" --data "@/home/objeto.json"


Dados de entrada
~~~~~~~~~~~~~~~~

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
     - CNPJ do órgão do contrato/empenho
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do contrato/empenho
   * - 3
     - sequencialContrato
     - Inteiro
     - Sim
     - Número sequencial do contrato/empenho (gerado pelo PNCP no momento da inclusão)
   * - 4
     - sequencialInstrumentoCobranca
     - Inteiro
     - Sim
     - Número sequencial do instrumento de cobrança do contrato/empenho (gerado pelo PNCP no momento da inclusão)
   * - 5
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para a retificação do instrumento de cobrança do contrato/empenho
   * - 6
     - tipoInstrumentoCobrancaId
     - Inteiro
     - Sim
     - Código da tabela de domínio Tipo de Instrumento de Cobrança
   * - 7
     - numeroInstrumentoCobranca
     - Texto (50)
     - Não
     - Número do instrumento de cobrança do contrato ou empenho
   * - 8
     - chaveNFe
     - Texto (50)
     - Não
     - Chave da Nota Fiscal quando o instrumento de cobrança for do tipo “Nota Fiscal”
   * - 9
     - dataEmissaoDocumento
     - Data
     - Não
     - Data de emissão do instrumento de cobrança
   * - 10
     - observacao
     - Texto (2048)
     - Não
     - Observação opcional sobre o instrumento de cobrança

Dados de retorno
~~~~~~~~~~~~~~~~

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
     - location
     - Texto (255)
     - Sim
     - Endereço HTTP do recurso criado

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 20
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 200
     - Update
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 401
     - Unauthorized
     - Erro
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

\
