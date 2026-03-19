Serviços de Usuário
===================

Atualizar Usuário
-----------------

Serviço que permite alterar/atualizar os dados de um usuário. Disponível para o próprio usuário logado ou usuário administrador. Com esse serviço é possível que o usuário 
altere sua própria senha ou cadastre a lista de CNPJs dos entes autorizados (órgãos) o qual o usuário estará apto a divulgar informações. 

**Observação:** O item 6.2.1 deste manual (Incluir Órgão) foi construído para incluir um Órgão que eventualmente não se encontre no repositório de dados do PNCP. A funcionalidade não 
deve ser confundida com a inclusão de Órgãos gerenciados pelo usuário. 
 
**Observação:** o parâmetro “entesAutorizados” não está disponível para plataformas privadas desde 18/08/2025.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/usuarios/{id} 
     - PUT

Exemplo de Payload
------------------

.. code-block:: json
  :linenos:
  :emphasize-lines: 5,6

{ 
  "nome": "Fulano de Tal", 
  "email": "fulano@example.com", 
  "senha": "&1NaoCompartilho1Senha&", 
  "entesAutorizados": ["10000000000003", "10000000000005"] 
} 

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/tipos-instrumentos-convocatorios 
   -H 'accept: */*'
