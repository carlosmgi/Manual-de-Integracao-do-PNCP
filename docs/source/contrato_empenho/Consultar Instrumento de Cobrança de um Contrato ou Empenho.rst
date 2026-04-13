Consultar Instrumento de Cobrança de um Contrato/Empenho
===========================================================

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

Serviço que permite consultar um instrumento de cobrança específico pertencente a um contrato/empenho.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/contratos/{ano}/{sequencialContra-to}/instrumentocobranca/{sequencialInstrumentoCobranca}
     - GET
	 

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:

    Não se aplica  

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

    curl -k -X GET "${BA-SE_URL}/v1/orgaos/10000000000003/contratos/2025/1/instrumentocobranca/1" -H "Ac-cept: */*”

Dados de entrada
~~~~~~~~~~~~~~~~

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
     - Sequencial do contrato/empenho no PNCP; número sequencial gerado no momento em que o contrato/empenho foi inserido no PNCP
   * - 4
     - sequencialInstrumentoCobranca
     - Inteiro
     - Sim
     - Sequencial do instrumento de cobrança no PNCP; número sequencial gerado no momento em que o instrumento de cobrança foi inserido no PNCP

Dados de retorno
~~~~~~~~~~~~~~~~

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
   * - 2
     - ano
     - Inteiro
     - Ano do contrato/empenho
   * - 3
     - sequencialContrato
     - Inteiro
     - Sequencial do contrato/empenho no PNCP; número sequencial gerado no momento em que o contrato/empenho foi inserido no PNCP
   * - 4
     - sequencialInstrumentoCobranca
     - Inteiro
     - Sequencial do instrumento de cobrança no PNCP; número sequencial gerado no momento em que o instrumento de cobrança foi inserido no PNCP
   * - 5
     - numeroInstrumentoCobranca
     - Texto
     - Número do instrumento de cobrança
   * - 6
     - tipoInstrumentoCobranca
     - 
     - Dados do tipo de instrumento de cobrança
   * - 6.1
     - id
     - Inteiro
     - Código do tipo de instrumento de cobrança
   * - 6.2
     - nome
     - Texto
     - Nome do tipo de instrumento de cobrança
   * - 6.3
     - descricao
     - Texto
     - Descrição do tipo de instrumento de cobrança
   * - 6.4
     - dataInclusao
     - Data
     - Data/hora da inclusão do tipo de instrumento de cobrança
   * - 6.5
     - dataAtualizacao
     - Data
     - Data/hora da última atualização do tipo de instrumento de cobrança
   * - 6.6
     - statusAtivo
     - Booleano
     - Status do tipo de instrumento de cobrança
   * - 7
     - dataInclusao
     - Data/Hora
     - Data/hora da inclusão do instrumento de cobrança no PNCP
   * - 8
     - dataAtualizacao
     - Data/Hora
     - Data/hora da última atualização do instrumento de cobrança no PNCP
   * - 9
     - dataEmissaoDocumento
     - Data
     - Data de emissão do instrumento de cobrança
   * - 10
     - observacao
     - Texto
     - Observação opcional sobre o instrumento de cobrança
   * - 11
     - chaveNFe
     - Texto
     - Chave da nota fiscal eletrônica
   * - 12
     - dataConsultaNFe
     - Data/Hora
     - Data/hora da consulta aos dados da nota fiscal eletrônica
   * - 13
     - statusResponseNFe
     - Texto
     - Código de retorno HTTP retornado no momento da consulta aos dados da nota fiscal eletrônica
   * - 14
     - jsonResponseNFe
     - Texto
     - JSON response retornado no momento da consulta aos dados da nota fiscal eletrônica
   * - 15
     - notaFiscalEletronica
     - 
     - Dados da Nota Fiscal Eletrônica
   * - 15.1
     - chave
     - String
     - Chave da nota fiscal eletrônica
   * - 15.2
     - numero
     - Inteiro
     - Número da nota fiscal eletrônica
   * - 15.3
     - serie
     - Inteiro
     - Número de série da nota fiscal eletrônica
   * - 15.4
     - dataEmissao
     - Texto
     - Data de emissão da nota fiscal eletrônica
   * - 15.5
     - niEmitente
     - Texto
     - CNPJ do emitente da nota fiscal eletrônica
   * - 15.6
     - nomeEmitente
     - Texto
     - Nome do emitente da nota fiscal eletrônica
   * - 15.7
     - nomeMunicipioEmitente
     - Texto
     - Nome do município do emitente da nota fiscal eletrônica
   * - 15.8
     - codigoOrgaoDestinatario
     - Texto
     - Código do órgão destinatário da nota fiscal eletrônica
   * - 15.9
     - nomeOrgaoDestinatario
     - Texto
     - Nome do órgão destinatário da nota fiscal eletrônica
   * - 15.10
     - codigoOrgaoSuperiorDestinatario
     - Texto
     - Código do órgão superior destinatário da nota fiscal eletrônica
   * - 15.11
     - nomeOrgaoSuperiorDestinatario
     - Texto
     - Nome do órgão superior destinatário da nota fiscal eletrônica
   * - 15.12
     - valorNotaFiscal
     - Texto
     - Valor da nota fiscal eletrônica
   * - 15.13
     - tipoEventoMaisRecente
     - Texto
     - Tipo do evento mais recente da nota fiscal eletrônica
   * - 15.14
     - dataTipoEventoMaisRecente
     - Texto
     - Data do evento mais recente da nota fiscal eletrônica
   * - 15.15
     - dataInclusao
     - Data/Hora
     - Data/hora da gravação dos dados da nota fiscal eletrônica no PNCP
   * - 15.16
     - dataAtualizacao
     - Data/Hora
     - Data/hora da atualização dos dados da nota fiscal eletrônica no PNCP
   * - 15.17
     - itens
     - 
     - Lista de itens da Nota Fiscal Eletrônica
   * - 15.17.1
     - numeroItem
     - Texto
     - Número do item
   * - 15.17.2
     - descricaoProdutoServico
     - Texto
     - Descrição do produto ou serviço
   * - 15.17.3
     - codigoNCM
     - Texto
     - Código NCM do produto
   * - 15.17.4
     - descricaoNCM
     - Texto
     - Descrição NCM do produto
   * - 15.17.5
     - cfop
     - Texto
     - Código CFOP
   * - 15.17.6
     - quantidade
     - Texto
     - Quantidade do item
   * - 15.17.7
     - unidade
     - Texto
     - Unidade de fornecimento do item
   * - 15.17.8
     - valorUnitario
     - Texto
     - Valor unitário do item
   * - 15.17.9
     - valorTotal
     - Texto
     - Valor total do item
   * - 15.18
     - eventos
     - 
     - Lista de eventos da Nota Fiscal Eletrônica
   * - 15.18.1
     - dataEvento
     - Texto
     - Data do evento da nota fiscal eletrônica
   * - 15.18.2
     - tipoEvento
     - Texto
     - Tipo do evento da nota fiscal eletrônica
   * - 15.18.3
     - evento
     - Texto
     - Evento da nota fiscal eletrônica
   * - 15.18.4
     - motivoEvento
     - Texto
     - Motivo do evento da nota fiscal eletrônica

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
