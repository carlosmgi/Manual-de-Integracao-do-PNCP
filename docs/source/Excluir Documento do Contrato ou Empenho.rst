Excluir Documento do Contrato ou Empenho
========================================

Serviço que permite remover um documento pertencente a um contrato ou empenho
específico.

Detalhes da Requisição
----------------------

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/contratos/{ano}/{sequencial}/arquivos/{sequencialDocumento}
     - DELETE

Exemplo de Payload
------------------

.. code-block:: json
  :linenos:
  :emphasize-lines: 5,6
  
  {
   "justificativa": "motivo/justificativa paraexclusão do documento do contrato ou empenho"
  }

Exemplo Requisição (cURL)
-------------------------

.. code-block:: bash

   curl -k -X DELETE \
     --header "Authorization: Bearer access_token" \
     -H "accept: */*" \
     "${BASE_URL}/v1/orgaos/10000000000003/contratos/2021/1/arquivos/1"

Dados de Entrada
----------------

.. note::

  Alimentar os parâmetros {cnpj}, {ano}, {sequencial} e {sequencialDocumento} na URL. 

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
     - CNPJ
     - Texto (14)
     - Sim
     - Cnpj do órgão do contrato ou empenho
   * - 2
     - ano
     - Inteiro
     - Sim
     - Ano do contrato ou empenho 
   * - 3
     - sequencial
     - Inteiro
     - Sim
     - Número sequencial docontrato ou empenho (gerado peloPNCP) 
   * - 4
     - sequencialDocumento
     - Inteiro
     - Sim
     - Número sequencial do documentodo contrato ou empenho (gerado peloPNCP) 
   * - 5
     - justificativa
     - Texto (255)
     - Sim
     - Motivo/justificativa para exclusão do documento do contrato ou empenho.

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
