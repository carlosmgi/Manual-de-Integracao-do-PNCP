Tabelas de Domínio
==================

Instrumento Convocatório
------------------------
Para consulta aos instrumentos convocatórios cadastrados acessar a página no Portal PNCP pelo endereço `https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP foram disponibilizados os serviços para consulta de instrumento/os convocatório/os a seguir.

Consultar Instrumento Convocatório por Código
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Serviço que permite consultar um instrumento convocatório pelo seu código. 

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/tipos-instrumentos-convocatorios/{id}
     - GET

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

   curl -X GET 
   "${BASE_URL}/v1/tipos-instrumentos-convocatorios/{id}"
   
Dados de Entrada
^^^^^^^^^^^^^^^^

.. note:: 

Alimentar o path parâmetro {id} na URL.  

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - id
     - Inteiro
     - Sim
     - Código de identificação do instrumento convocatório. 


Dados de retorno
^^^^^^^^^^^^^^^^

.. list-table:: 
   :width: 100%
   :header-rows: 1
   :widths: 5 25 15 25

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação do instrumento convocatório
   * - 2
     - nome
     - Texto
     - Nome do instrumento convocatório
   * - 3
     - descricao
     - Texto
     - Descrição do instrumento convocatório
   * - 4
     - obrigatoriedadeDataAberturaPropostaNome
     - Texto
     - Indica se é obrigatório ou não o envio da data de início do recebimento de proposta/lances para o instrumento convocatório
   * - 5
     - obrigatoriedadeDataEncerramentoPropostaNome
     - Texto
     - Indica se é obrigatório ou não o envio da data de encerramento do recebimento de proposta/lances para o instrumento convocatório
   * - 6
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 7
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 8
     - statusAtivo
     - Booleano
     - Indicador de status do instrumento convocatório. True = Ativo / False = Inativo

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 10 25 20
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
   * - 404
     - Instrumento convocatório não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Consultar Instrumentos Convocatórios 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Serviço que permite consultar os instrumentos convocatórios cadastrados no PNCP. 

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/tipos-instrumentos-convocatorios
     - GET

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/tipos-instrumentos-convocatorios 
   -H 'accept: */*'
   ou
   curl -X 'GET' '${BASE_URL}/v1/tipos-instrumentos-convocatorios?statusAtivo=true'
   -H 'accept: */*'

   
Dados de Entrada
^^^^^^^^^^^^^^^^

.. note:: 

Alimentar o query parâmetro `statusAtivo`.  

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Boolean
     - Não
     - Indicador de status do instrumento convocatório. True = Ativo / False = Inativo

Dados de retorno
^^^^^^^^^^^^^^^^

.. list-table:: 
   :width: 100%
   :header-rows: 1
   :widths: 5 25 15 25

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação do instrumento convocatório
   * - 2
     - nome
     - Texto
     - Nome do instrumento convocatório
   * - 3
     - descricao
     - Texto
     - Descrição do instrumento convocatório
   * - 4
     - obrigatoriedadeDataAberturaPropostaNome
     - Texto
     - Indica se é obrigatório ou não o envio da data de início do recebimento de proposta/lances para o instrumento convocatório
   * - 5
     - obrigatoriedadeDataEncerramentoPropostaNome
     - Texto
     - Indica se é obrigatório ou não o envio da data de encerramento do recebimento de proposta/lances para o instrumento convocatório
   * - 6
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 7
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 8
     - statusAtivo
     - Booleano
     - Indicador de status do instrumento convocatório. True = Ativo / False = Inativo

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 10 25 20
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
   * - 404
     - Instrumento convocatório não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Modalidade de Contratação
-------------------------
Para consulta às modalidades de contratação acessar a página no Portal PNCP pelo endereço `https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP foram disponibilizados os serviços para consulta de modalidade/es de contratação a seguir. 

Consultar Modalidade de Contratação por Código
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Serviço que permite consultar uma modalidade de contratação pelo seu código. 

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/modalidades/{id} 
     - GET

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/modalidades/{id}' 
   -H 'accept: */*

Dados de Entrada
^^^^^^^^^^^^^^^^

.. note:: 

Alimentar o path parâmetro `{id}` na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - id
     - Inteiro
     - Sim
     - Código de identificação da modalidade de contratação

Dados de retorno
^^^^^^^^^^^^^^^^

.. list-table:: 
   :width: 100%
   :header-rows: 1
   :widths: 5 25 15 25

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação da modalidade de contratação
   * - 2
     - nome
     - Texto
     - Nome da modalidade de contratação
   * - 3
     - descricao
     - Texto
     - Descrição da modalidade de contratação
   * - 4
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 5
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 6
     - statusAtivo
     - Booleano
     - Indicador de status da modalidade de contratação. True = Ativo / False = Inativo

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 10 25 20
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
   * - 404
     - Modalidade de contratação não encontrada
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Consultar Modalidades de Contratação 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Serviço que permite consultar as modalidades de contratação cadastradas no PNCP. 

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/modalidades
     - GET

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/modalidades' -H 'accept: */*' 
   -H 'accept: */*'
   ou
   curl -X 'GET' '${BASE_URL}/v1/modalidades?statusAtivo=true'
   -H 'accept: */* 

Dados de Entrada
^^^^^^^^^^^^^^^^

.. note:: 

Alimentar o query parâmetro `statusAtivo`.

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Boolean
     - Não
     - Indicador de status da modalidade de contratação. True = Ativa / False = Inativa

Dados de retorno
^^^^^^^^^^^^^^^^

.. list-table:: 
   :width: 100%
   :header-rows: 1
   :widths: 5 25 15 25

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação da modalidade de contratação
   * - 2
     - nome
     - Texto
     - Nome da modalidade de contratação
   * - 3
     - descricao
     - Texto
     - Descrição da modalidade de contratação
   * - 4
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 5
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 6
     - statusAtivo
     - Booleano
     - Indicador de status da modalidade de contratação. True = Ativa / False = Inativa

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 10 25 20
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
   * - 404
     - Modalidade de contratação não encontrada
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Modo de Disputa
---------------
Para consulta aos modos de disputa acessar a página no Portal PNCP pelo endereço `https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP foram disponibilizados os serviços para consulta de modo/os de disputa a seguir. 

Consultar Modo de Disputa por Código 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Serviço que permite consultar um modo de disputa pelo seu código. 

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/modos-disputas/{id}
     - GET

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

   curl -X 'GET' 
  '${BASE_URL}/v1/modos-disputas/{id} 
   -H 'accept: */*'

Dados de Entrada
^^^^^^^^^^^^^^^^

.. note:: 

Alimentar o path parâmetro `{id}` na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - id
     - Inteiro
     - Sim
     - Código de identificação do modo de disputa

Dados de retorno
^^^^^^^^^^^^^^^^

.. list-table:: 
   :width: 100%
   :header-rows: 1
   :widths: 5 25 15 25

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação do modo de disputa
   * - 2
     - nome
     - Texto
     - Nome do modo de disputa
   * - 3
     - descricao
     - Texto
     - Descrição do modo de disputa
   * - 4
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 5
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 6
     - statusAtivo
     - Booleano
     - Indicador de status do modo de disputa. True = Ativo / False = Inativo

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 10 25 20
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
   * - 404
     - Modalidade de contratação não encontrada
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Consultar Modos de Disputa
~~~~~~~~~~~~~~~~~~~~~~~~~~
Serviço que permite consultar os modos de disputa cadastrados no PNCP.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/tipos-instrumentos-convocatorios
     - GET

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/modos-disputas' 
   -H 'accept: */*'
   ou
   curl -X 'GET' 
   '${BASE_URL}/v1/modos-disputas?statusAtivo=true'
   -H 'accept: */*'


Dados de Entrada
^^^^^^^^^^^^^^^^

.. note:: 

Alimentar o query parâmetro `statusAtivo`.

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Boolean
     - Não
     - Indicador de status do modo de disputa. True = Ativo / False = Inativo

Dados de retorno
^^^^^^^^^^^^^^^^

.. list-table:: 
   :width: 100%
   :header-rows: 1
   :widths: 5 25 15 25

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação do modo de disputa
   * - 2
     - nome
     - Texto
     - Nome do modo de disputa
   * - 3
     - descricao
     - Texto
     - Descrição do modo de disputa
   * - 4
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 5
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 6
     - statusAtivo
     - Booleano
     - Indicador de status do modo de disputa. True = Ativo / False = Inativo

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 10 25 20
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
   * - 404
     - Modo de disputa não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Critério de Julgamento
----------------------
Para consulta aos critérios de julgamento acessar a página no Portal PNCP pelo endereço `https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP foram disponibilizados os serviços para consulta de critério/os de julgamento a seguir.

Consultar Critério de Julgamento por Código 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Serviço que permite consultar um critério de julgamento pelo seu código.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/criterios-julgamentos/{id}
     - GET

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/criterios-julgamentos/{id}'  
   -H 'accept: */*'

Dados de Entrada
^^^^^^^^^^^^^^^^

.. note:: 

Alimentar o path parâmetro {id} na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Boolean
     - Não
     - Indicador de status do modo de disputa. True = Ativo / False = Inativo

Dados de retorno
^^^^^^^^^^^^^^^^

.. list-table:: 
   :width: 100%
   :header-rows: 1
   :widths: 5 25 15 25

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação do modo de disputa
   * - 2
     - nome
     - Texto
     - Nome do modo de disputa
   * - 3
     - descricao
     - Texto
     - Descrição do modo de disputa
   * - 4
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 5
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 6
     - statusAtivo
     - Booleano
     - Indicador de status do modo de disputa. True = Ativo / False = Inativo

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 10 25 20
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
   * - 404
     - Modo de disputa não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Consultar Critérios de Julgamento 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Serviço que permite consultar os critérios de julgamento cadastrados no PNCP.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/criterios-julgamentos
     - GET

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/criterios-julgamentos' 
   -H 'accept: */*'
   ou
   curl -X 'GET' 
   '${BASE_URL}/v1/criterios-julgamentos?statusAtivo=true'
   -H 'accept: */*'

Dados de Entrada
^^^^^^^^^^^^^^^^

.. note:: 

Alimentar o query parâmetro {statusAtivo}. 

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Boolean
     - Não
     - Indicador de status do modo de disputa. True = Ativo / False = Inativo

Dados de retorno
^^^^^^^^^^^^^^^^

.. list-table:: 
   :width: 100%
   :header-rows: 1
   :widths: 5 25 15 25

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação do modo de disputa
   * - 2
     - nome
     - Texto
     - Nome do modo de disputa
   * - 3
     - descricao
     - Texto
     - Descrição do modo de disputa
   * - 4
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro
   * - 5
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro
   * - 6
     - statusAtivo
     - Booleano
     - Indicador de status do modo de disputa. True = Ativo / False = Inativo

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 10 25 20
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
   * - 404
     - Modo de disputa não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Situação da Contratação 
-----------------------
- (código = 1) **Divulgada no PNCP:** Contratação divulgada no PNCP. Situação atribuída na inclusão da contratação.

- (código = 2) **Revogada:** Contratação revogada conforme justificativa.

- (código = 3) **Anulada:** Contratação anulada conforme justificativa.

- (código = 4) **Suspensa:** Contratação suspensa conforme justificativa.

Situação do Item da Contratação
-------------------------------
- (código = 1) **Em Andamento:** Item com disputa/seleção do fornecedor/arrematante não finalizada. Situação atribuída na inclusão do item da contratação.

- (código = 2) **Homologado:** Item com resultado (fornecedor/arrematante informado).

- (código = 3) **Anulado/Revogado/Cancelado:** Item cancelado conforme justificativa.

- (código = 4) **Deserto:** Item sem resultado (sem fornecedores/arrematantes interessados).

- (código = 5) **Fracassado:** Item sem resultado (fornecedores/arrematantes desclassificados ou inabilitados).

Tipo de Benefício
-----------------
- (código = 1) **Participação exclusiva para ME/EPP**

- (código = 2) **Subcontratação para ME/EPP**

- (código = 3) **Cota reservada para ME/EPP**

- (código = 4) **Sem benefício**

- (código = 5) **Não se aplica**

Situação do Resultado do Item da Contratação
--------------------------------------------
- (código = 1) **Informado:** Possui valor, fornecedor e marca oriundos do resultado da contratação. Situação atribuída na inclusão do resultado do item da contratação.

- (código = 2) **Cancelado:** Resultado do item cancelado conforme justificativa.

Tipo de Contrato
----------------
- (código = 1) **Contrato (termo inicial):** Acordo formal recíproco de vontades firmado entre as partes.

- (código = 2) **Comodato:** Contrato de concessão de uso gratuito de bem móvel ou imóvel.

- (código = 3) **Arrendamento:** Contrato de cessão de um bem por um determinado período mediante pagamento.

- (código = 4) **Concessão:** Contrato firmado com empresa privada para execução de serviço público, sendo remunerada por tarifa.

- (código = 5) **Termo de Adesão:** Contrato em que uma das partes estipula todas as cláusulas, sem que a outra possa modificá-las.

.. raw:: html

   <ul>
     <li><del><strong>(código = 6) Convênio:</strong> Acordos firmados entre as partes buscando a realização de um objetivo em comum.</del> (Revogado pelo art. 40 da Portaria Conjunta MGI/MF/CGU nº 33/2023).</li>
   </ul>

- (código = 7) **Empenho:** Promessa de pagamento por parte do Estado para um fim específico.

- (código = 8) **Outros:** Outros tipos de contratos que não os listados.

.. raw:: html

   <ul>
     <li><del><strong>(código = 9) Termo de Execução Descentralizada (TED):** Instrumento utilizado para a descentralização de crédito entre órgãos/entidades da União. (Revogado pelo art. 40 da Portaria Conjunta MGI/MF/CGU nº 33/2023).</li>
   </ul>

.. raw:: html
   <ul>
     <li><del><strong>(código = 10) Acordo de Cooperação Técnica (ACT):** Acordos firmados entre órgãos visando à execução de programas de trabalho ou projetos. (Revogado pelo art. 40 da Portaria Conjunta MGI/MF/CGU nº 33/2023).</li>
   </ul>

.. raw:: html

   <ul>
     <li><del><strong>(código = 11) Termo de Compromisso:** Acordo firmado para cumprir compromisso estabelecido entre as partes. (Revogado pelo art. 40 da Portaria Conjunta MGI/MF/CGU nº 33/2023).</li>
   </ul>

- (código = 12) **Carta Contrato:** Documento que formaliza e ratifica acordo entre duas ou mais partes nas hipóteses em que a lei dispensa a celebração de contrato.

Tipo de Termo de Contrato
-------------------------
- (código = 1) **Termo de Rescisão:** Encerramento é antes da data final do contrato. 

- (código = 2) **Termo Aditivo:** Atualiza o contrato como um todo, podendo prorrogar, reajustar, acrescer, suprimir, alterar cláusulas e reajustar. 

- (código = 3) **Termo de Apostilamento:** Atualiza o valor do contrato. 

Categoria do Processo
---------------------
- (código = 1) **Cessão** 

- (código = 2) **Compras**

- (código = 3) **Informática (TIC)**

- (código = 4) **Internacional**

- (código = 5) **Locação Imóveis**

- (código = 6) **Mão de Obr** 

- (código = 7) **Obras**

- (código = 8) **Serviços**

- (código = 9) **Serviços de Engenharia**

- (código = 10) **Serviços de Saúde**

- (código = 11) Alienação de bens móveis/imóveis**

Tipo de Documento 
-----------------
Tipos de documentos da contratação: 

- (código = 1) **Aviso de Contratação Direta**

- (código = 2) **Edital** 

- (código = 3) **Minuta do Contrato** 

- (código = 4) **Termo de Referência** 

- (código = 5) **Anteprojeto** 

- (código = 6) **Projeto Básico** 

- (código = 7) **Estudo Técnico Preliminar** 

- (código = 8) **Projeto Executivo** 

- (código = 9) **Mapa de Riscos** 

- (código = 10) **DFD** 

- (código = 19) **Minuta de Ata de Registro de Preços** 

- (código = 20) **Ato que autoriza a Contratação Direta**

Tipos de documentos da ata de registro de preço:

- (código = 11) **Ata de Registro de Preço** 

Tipos de documentos de contrato: 

- (código = 12) **Contrato** 

- (código = 13) **Termo de Rescisão** 
- (código = 14) **Termo Aditivo** 
- (código = 15) **Termo de Apostilamento** 
- (código = 17) **Nota de Empenho** 
- (código = 18) **Relatório Final de Contrato** 

** Para outros documentos do processo, usar o código 16.

Natureza Jurídica
-----------------

Código – Natureza Jurídica

- **0000** – Natureza Jurídica não informada
- **1015** – Órgão Público do Poder Executivo Federal
- **1023** – Órgão Público do Poder Executivo Estadual ou do Distrito Federal
- **1031** – Órgão Público do Poder Executivo Municipal
- **1040** – Órgão Público do Poder Legislativo Federal
- **1058** – Órgão Público do Poder Legislativo Estadual ou do Distrito Federal
- **1066** – Órgão Público do Poder Legislativo Municipal
- **1074** – Órgão Público do Poder Judiciário Federal
- **1082** – Órgão Público do Poder Judiciário Estadual
- **1104** – Autarquia Federal
- **1112** – Autarquia Estadual ou do Distrito Federal
- **1120** – Autarquia Municipal
- **1139** – Fundação Pública de Direito Público Federal
- **1147** – Fundação Pública de Direito Público Estadual ou do Distrito Federal
- **1155** – Fundação Pública de Direito Público Municipal
- **1163** – Órgão Público Autônomo Federal
- **1171** – Órgão Público Autônomo Estadual ou do Distrito Federal
- **1180** – Órgão Público Autônomo Municipal
- **1198** – Comissão Polinacional
- **1210** – Consórcio Público de Direito Público (Associação Pública)
- **1228** – Consórcio Público de Direito Privado
- **1236** – Estado ou Distrito Federal
- **1244** – Município
- **1252** – Fundação Pública de Direito Privado Federal
- **1260** – Fundação Pública de Direito Privado Estadual ou do Distrito Federal
- **1279** – Fundação Pública de Direito Privado Municipal
- **1287** – Fundo Público da Administração Indireta Federal
- **1295** – Fundo Público da Administração Indireta Estadual ou do Distrito Federal
- **1309** – Fundo Público da Administração Indireta Municipal
- **1317** – Fundo Público da Administração Direta Federal
- **1325** – Fundo Público da Administração Direta Estadual ou do Distrito Federal
- **1333** – Fundo Público da Administração Direta Municipal
- **1341** – União
- **2011** – Empresa Pública
- **2038** – Sociedade de Economia Mista
- **2046** – Sociedade Anônima Aberta
- **2054** – Sociedade Anônima Fechada
- **2062** – Sociedade Empresária Limitada
- **2070** – Sociedade Empresária em Nome Coletivo
- **2089** – Sociedade Empresária em Comandita Simples
- **2097** – Sociedade Empresária em Comandita por Ações
- **2100** – Sociedade Mercantil de Capital e Indústria
- **2127** – Sociedade em Conta de Participação
- **2135** – Empresário (Individual)
- **2143** – Cooperativa
- **2151** – Consórcio de Sociedades
- **2160** – Grupo de Sociedades
- **2178** – Estabelecimento, no Brasil, de Sociedade Estrangeira
- **2194** – Estabelecimento, no Brasil, de Empresa Binacional Argentino-Brasileira
- **2216** – Empresa Domiciliada no Exterior
- **2224** – Clube/Fundo de Investimento
- **2232** – Sociedade Simples Pura
- **2240** – Sociedade Simples Limitada
- **2259** – Sociedade Simples em Nome Coletivo
- **2267** – Sociedade Simples em Comandita Simples
- **2275** – Empresa Binacional
- **2283** – Consórcio de Empregadores
- **2291** – Consórcio Simples
- **2305** – Empresa Individual de Responsabilidade Limitada (Natureza Empresária)
- **2313** – Empresa Individual de Responsabilidade Limitada (Natureza Simples)
- **2321** – Sociedade Unipessoal de Advocacia
- **2330** – Cooperativas de Consumo
- **2348** – Empresa Simples de Inovação – Inova Simples
- **2356** – Investidor Não Residente
- **3034** – Serviço Notarial e Registral (Cartório)
- **3069** – Fundação Privada
- **3077** – Serviço Social Autônomo
- **3085** – Condomínio Edilício
- **3107** – Comissão de Conciliação Prévia
- **3115** – Entidade de Mediação e Arbitragem
- **3131** – Entidade Sindical
- **3204** – Estabelecimento, no Brasil, de Fundação ou Associação Estrangeiras
- **3212** – Fundação ou Associação Domiciliada no Exterior
- **3220** – Organização Religiosa
- **3239** – Comunidade Indígena
- **3247** – Fundo Privado
- **3255** – Órgão de Direção Nacional de Partido Político
- **3263** – Órgão de Direção Regional de Partido Político
- **3271** – Órgão de Direção Local de Partido Político
- **3280** – Comitê Financeiro de Partido Político
- **3298** – Frente Plebiscitária ou Referendária
- **3301** – Organização Social (OS)
- **3328** – Plano de Benefícios de Previdência Complementar Fechada
- **3999** – Associação Privada
- **4014** – Empresa Individual Imobiliária
- **4090** – Candidato a Cargo Político Eletivo
- **4120** – Produtor Rural (Pessoa Física)
- **5010** – Organização Internacional
- **5029** – Representação Diplomática Estrangeira
- **5037** – Outras Instituições Extraterritoriais
- **8885** – Natureza Jurídica não informada

Porte da Empresa 
----------------
- (código = 1) **ME:** Microempresa
- (código = 2) **EPP:** Empresa de pequeno porte
- (código = 3) **Demais:** Demais empresas
- (código = 4) **Não se aplica:** Quando o fornecedor/arrematante for pessoa física.
- (código = 5) **Não informado:** Quando não possuir o porte da empresa.

Amparo Legal 
------------
Para consulta aos amparos legais acessar a página no Portal PNCP pelo endereço 
`https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP 
foram disponibilizados os serviços para consulta de amparo/os legal/is a seguir. 

Consultar Amparo Legal por Código 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Serviço que permite consultar um amparo legal pelo seu código.

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/amparos-legais/{id}  
     - GET

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/amparos-legais/{id}'
   -H 'accept: */*'

Dados de Entrada
^^^^^^^^^^^^^^^^

.. note:: 

Alimentar o path parâmetro {id} na URL.   

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Inteiro
     - Sim
     - Código de identificação do amparo legal 

Dados de retorno
^^^^^^^^^^^^^^^^

.. list-table:: 
   :width: 100%
   :header-rows: 1
   :widths: 5 25 15 25

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação do amparo legal.
   * - 2
     - nome
     - Texto
     - Nome do amparo legal.
   * - 3
     - descricao
     - Texto
     - Descrição do amparo legal.
   * - 4
     - tipoAmparoLegal
     - 
     - Tipo do Amparo Legal (item 5.15.3 – Tipos de Amparos Legais).
   * - 4.1
     - id
     - Inteiro
     - Código de identificação do tipo de amparo legal.
   * - 4.2
     - nome
     - Texto
     - Nome do tipo de amparo legal.
   * - 4.3
     - descricao
     - Texto
     - Descrição do tipo de amparo legal.
   * - 4.4
     - statusAtivo
     - Booleano
     - Indicador de status do tipo de amparo legal. True = Ativo / False = Inativo.
   * - 5
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro.
   * - 6
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro.
   * - 7
     - statusAtivo
     - Booleano
     - Indicador de status do amparo legal. True = Ativo / False = Inativo.

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 10 25 20
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
   * - 404
     - Modo de disputa não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Consultar Amparos Legais 
~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite consultar os amparos legais cadastrados no PNCP. 

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/amparos-legais
     - GET

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/amparos-legais'
   -H 'accept: */*'
   ou
   curl -X 'GET' 
   '${BASE_URL}/v1/amparos-legais?statusAtivo=true'
   -H 'accept: */*'
   ou
   curl -X 'GET' 
   '${BASE_URL}/v1/amparos-legais?tipoAmparoLegalId=1&statusAtivo=true'
   -H 'accept: */*'

Dados de Entrada
^^^^^^^^^^^^^^^^

.. note:: 

Alimentar o path parâmetro {id} na URL.  

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - tipoAmparoLegalId
     - Inteiro
     - Não
     - Código de identificação do tipo de amparo legal (item 5.15.3. Tipos de Amparos Legais) 
   * - statusAtivo
     - Booleano
     - Não
     - Indicador de status do critério de julgamento. True-Ativa / False-Inativa

Dados de retorno
^^^^^^^^^^^^^^^^

.. list-table:: 
   :width: 100%
   :header-rows: 1
   :widths: 5 25 15 25

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação do amparo legal.
   * - 2
     - nome
     - Texto
     - Nome do amparo legal.
   * - 3
     - descricao
     - Texto
     - Descrição do amparo legal.
   * - 4
     - tipoAmparoLegal
     -
     - Tipo do Amparo Legal (item 5.15.3 – Tipos de Amparos Legais).
   * - 4.1
     - id
     - Inteiro
     - Código de identificação do tipo de amparo legal.
   * - 4.2
     - nome
     - Texto
     - Nome do tipo de amparo legal.
   * - 4.3
     - descricao
     - Texto
     - Descrição do tipo de amparo legal.
   * - 4.4
     - statusAtivo
     - Booleano
     - Indicador de status do tipo de amparo legal.
       | True = Ativo / False = Inativo.
   * - 5
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro.
   * - 6
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro.
   * - 7
     - statusAtivo
     - Booleano
     - Indicador de status do amparo legal. True = Ativo / False = Inativo.

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 10 25 20
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
   * - 404
     - Modo de disputa não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Tipos de Amparos Legais
~~~~~~~~~~~~~~~~~~~~~~~

Domínio do tipo de amparo legal:

- **Contratação:** Tipo de amparo legal que deverá ser utilizado na
  fundamentação legal da contratação.

- **Margem de preferência:** Tipo de amparo legal que deverá ser utilizado na
  fundamentação legal da aplicação da margem de preferência no resultado do item.

- **Critério de desempate:** Tipo de amparo legal que deverá ser utilizado na
  fundamentação legal da aplicação do critério de desempate no resultado do item.

Envio de arquivos pelas APIs de Documento 
-----------------------------------------

Ao anexar um documento digital, complementando os metadados enviados, as seguintes extensões de arquivo serão aceitas para upload:

- pdf,  txt,  rtf,  doc,  docx, xls, xlsx,  odt, ods, sxw,  zip, 7z, rar, dwg, dwt, dxf, dwf, dwfx, svg, sldprt, sldasm, dgn, ifc, skp, 3ds, dae, obj, rfa e rte. 

**Nota:** O tamanho máximo aceito, por arquivo enviado, é de 30 MB (Megabytes). 

Categoria de Item (Plano de Contratações e Contratações)
--------------------------------------------------------

Para consulta às categorias de item acessar a página no Portal PNCP pelo endereço `https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP foram disponibilizados os serviços para consulta de categorias de item a seguir. 

Consultar Categoria de Item por Código
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite consultar uma categoria de item pelo seu código. 

Detalhes da Requisição
^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/categoriaItemPcas/{id}  
     - GET

Exemplo Requisição (cURL)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/categoriaItemPcas/{id} 
   -H 'accept: */*'
 

Dados de Entrada
^^^^^^^^^^^^^^^^

.. note:: 

Alimentar o path parâmetro {id} na URL.  

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - id
     - Inteiro
     - Sim
     - Código de identificação da categoria de item.

Dados de retorno
^^^^^^^^^^^^^^^^

.. list-table:: 
   :width: 100%
   :header-rows: 1
   :widths: 5 25 15 25

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação da categoria de item.
   * - 2
     - nome
     - Texto
     - Nome da categoria de item.
   * - 3
     - descricao
     - Texto
     - Descrição da categoria de item.
   * - 4
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro.
   * - 5
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro.
   * - 6
     - statusAtivo
     - Booleano
     - Indicador de status da categoria de item. True = Ativo / False = Inativo.

Códigos de Retorno
^^^^^^^^^^^^^^^^^^

.. list-table::
   :width: 100%
   :widths: 10 25 20
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
   * - 404
     - Modo de disputa não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Consultar Categorias de Item

Serviço que permite consultar as categorias de item cadastradas no PNCP.

Detalhes da Requisição 

+-------------------------------------+---------------+-----------------+
| Endpoint                            | Método HTTP   | Exemplo Payload |
+=====================================+===============+=================+
| /v1/categoriaItemPcas               | GET           | Não se aplica   |
+-------------------------------------+---------------+-----------------+
| Exemplo Requisição (cURL)                                             |
+-----------------------------------------------------------------------+
| curl -X 'GET' '${BASE_URL}/v1/categoriaItemPcas' -H 'accept: */*'     |
|                                                                       |
| ou                                                                    |
|                                                                       |
| curl -X 'GET' '${BASE_URL}/v1/categoriaItemPcas?statusAtivo=true'     |
| -H 'accept: */*'                                                      |
+-----------------------------------------------------------------------+

Dados de entrada 
Nota: alimentar o query parâmetro {statusAtivo}.

.. list-table::
   :header-rows: 1
   :widths: 25 15 15 45

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Boolean
     - Não
     - Indicador de status da categoria de item. True = Ativa / False = Inativa.

Dados de retorno

Dados de retorno

.. list-table::
   :header-rows: 1
   :widths: 5 25 15 55

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - id
     - Inteiro
     - Código de identificação da categoria de item.
   * - 2
     - nome
     - Texto
     - Nome da categoria de item.
   * - 3
     - descricao
     - Texto
     - Descrição da categoria de item.
   * - 4
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro.
   * - 5
     - dataAtualizacao
     - Data/Hora
     - Data e hora da última atualização do registro.
   * - 6
     - statusAtivo
     - Booleano
     - Indicador de status da categoria de item. True = Ativa / False = Inativa.

Códigos de Retorno

.. list-table:: 
   :header-rows: 1
   :widths: 15 50 35

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 200
     - OK
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 404
     - Modo de disputa não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Regra de conformidade entre Instrumento Convocatório, Modalidade de Contratação e Amparo Legal 
----------------------------------------------------------------------------------------------

Para consulta às combinações de conformidade entre instrumento convocatório, modalidade de contratação e amparo legal acessar a página no Portal PNCP pelo endereço`https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP foram disponibilizados os serviços para consulta das combinações de conformidade entre instrumento convocatório, modalidade de contratação e amparo legal a seguir.

Consultar conformidade entre Instrumento Convocatório, Modalidade de Contratação e Amparo Legal por Código
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite consultar a combinação de conformidade pelo código do instrumento convocatório, código da modalidade de contratação e código do amparo 
legal. 

Detalhes da Requisição 

+-------------------------------------+---------------+-----------------+
| Endpoint                            | Método HTTP   | Exemplo Payload |
+=====================================+===============+=================+
| /v1/instrumento-convocatorio-       | GET           | Não se aplica   |
| modalidade-amparo                   |               |                 |
| legal/{amparoLegalId}/{modalidadeId}|               |                 | 
| /{tipoInstrumentoConvocatorioId}    |               |                 |
+-------------------------------------+---------------+-----------------+
| Exemplo Requisição (cURL)                                             |
+-----------------------------------------------------------------------+
| curl -X 'GET' '${BASE_URL}/v1/instrumento-convocatorio-modalidade-    |
| amparo-legal/1/6/1' -H 'accept: */*'                                  |
+-----------------------------------------------------------------------+

Dados de entrada 

Nota: alimentar o path parâmetro {amparoLegalId} e {modalidadeId} e {tipoInstrumentoConvocatorioId} na URL. 

.. list-table::
   :header-rows: 1
   :widths: 30 15 15 40

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - amparoLegalId
     - Inteiro
     - Sim
     - Código de identificação do amparo legal.
   * - modalidadeId
     - Inteiro
     - Sim
     - Código de identificação da modalidade de contratação.
   * - tipoInstrumentoConvocatorioId
     - Inteiro
     - Sim
     - Código de identificação do instrumento convocatório.

Dados de retorno

.. list-table::
   :header-rows: 1
   :widths: 5 25 15 55

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - amparoLegal
     -
     - Dados do Amparo Legal.
   * - 1.1
     - id
     - Inteiro
     - Código de identificação do amparo legal.
   * - 1.2
     - nome
     - Texto
     - Nome do amparo legal.
   * - 1.3
     - descricao
     - Texto
     - Descrição do amparo legal.
   * - 1.4
     - statusAtivo
     - Booleano
     - Indicador de status do amparo legal. True = Ativo / False = Inativo.
   * - 2
     - modalidade
     -
     - Dados da Modalidade de Contratação.
   * - 2.1
     - id
     - Inteiro
     - Código de identificação da modalidade de contratação.
   * - 2.2
     - nome
     - Texto
     - Nome da modalidade de contratação.
   * - 2.3
     - descricao
     - Texto
     - Descrição da modalidade de contratação.
   * - 2.4
     - statusAtivo
     - Booleano
     - Indicador de status da modalidade de contratação. True = Ativo / False = Inativo.
   * - 3
     - tipoInstrumentoConvocatorio
     -
     - Dados do Instrumento Convocatório.
   * - 3.1
     - id
     - Inteiro
     - Código de identificação do instrumento convocatório.
   * - 3.2
     - nome
     - Texto
     - Nome do instrumento convocatório.
   * - 3.3
     - descricao
     - Texto
     - Descrição do instrumento convocatório.
   * - 3.4
     - statusAtivo
     - Booleano
     - Indicador de status do instrumento convocatório. True = Ativo / False = Inativo.
   * - 4
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro

Códigos de Retorno

.. list-table:: 
   :header-rows: 1
   :widths: 15 50 35

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 200
     - OK
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 404
     - Modo de disputa não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Consultar conformidade entre Instrumento Convocatório, Modalidade de Contratação e Amparo Legal

Serviço que permite consultar as combinações de conformidade entre instrumento convocatório, modalidade de contratação e amparo legal cadastradas no PNCP. 

Detalhes da Requisição 

+-------------------------------------+---------------+-----------------+
| Endpoint                            | Método HTTP   | Exemplo Payload |
+=====================================+===============+=================+
| /v1/instrumento-convocatorio        |               |                 | 
| modalidade-amparo-legal             | GET           | Não se aplica   |
+-------------------------------------+---------------+-----------------+
| Exemplo Requisição (cURL)                                             |
+-----------------------------------------------------------------------+
| curl -X 'GET' '${BASE_URL}/v1/instrumento-convocatorio-modalidade-    |
| amparo-legal' -H 'accept: */*'                                        |
|                                                                       |
| ou                                                                    |
|                                                                       |
| curl -X 'GET' '${BASE_URL}/v1/instrumento-convocatorio-               |
| modalidade-amparo legal?tipoInstrumentoConvocatorioId=1&              |
| modalidadeId=6' -H 'accept: */*'                                      |
|                                                                       |
| ou                                                                    |
|                                                                       |
| curl -X 'GET' '${BASE_URL}/v1/instrumento-                            |
| convocatorio-modalidade-amparo legal?tipoInstrumentoConvocatorioId=   |
| 1' -H 'accept: */*'                                                   |
+-----------------------------------------------------------------------+

Dados de entrada 

Nota: alimentar o query parâmetro {amparoLegalId} ou {modalidadeId} ou {tipoInstrumentoConvocatorioId}. 

.. list-table::
   :header-rows: 1
   :widths: 30 15 15 40

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - amparoLegalId
     - Inteiro
     - Não
     - Código de identificação do amparo legal.
   * - modalidadeId
     - Inteiro
     - Não
     - Código de identificação da modalidade de contratação.
   * - tipoInstrumentoConvocatorioId
     - Inteiro
     - Não
     - Código de identificação do instrumento convocatório.

Dados de retorno (lista de combinações) 

Dados de retorno

.. list-table::
   :header-rows: 1
   :widths: 5 25 15 55

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - amparoLegal
     -
     - Dados do Amparo Legal.
   * - 1.1
     - id
     - Inteiro
     - Código de identificação do amparo legal.
   * - 1.2
     - nome
     - Texto
     - Nome do amparo legal.
   * - 1.3
     - descricao
     - Texto
     - Descrição do amparo legal.
   * - 1.4
     - statusAtivo
     - Booleano
     - Indicador de status do amparo legal. True = Ativo / False = Inativo.
   * - 2
     - modalidade
     -
     - Dados da Modalidade de Contratação.
   * - 2.1
     - id
     - Inteiro
     - Código de identificação da modalidade de contratação.
   * - 2.2
     - nome
     - Texto
     - Nome da modalidade de contratação.
   * - 2.3
     - descricao
     - Texto
     - Descrição da modalidade de contratação.
   * - 2.4
     - statusAtivo
     - Booleano
     - Indicador de status da modalidade de contratação. True = Ativo / False = Inativo.
   * - 3
     - tipoInstrumentoConvocatorio
     -
     - Dados do Instrumento Convocatório.
   * - 3.1
     - id
     - Inteiro
     - Código de identificação do instrumento convocatório.
   * - 3.2
     - nome
     - Texto
     - Nome do instrumento convocatório.
   * - 3.3
     - descricao
     - Texto
     - Descrição do instrumento convocatório.
   * - 3.4
     - statusAtivo
     - Booleano
     - Indicador de status do instrumento convocatório. True = Ativo / False = Inativo.
   * - 4
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro.

Códigos de Retorno

.. list-table:: 
   :header-rows: 1
   :widths: 15 50 35

   * - Código HTTP
     - Mensagem
     - Tipo
   * - 200
     - OK
     - Sucesso
   * - 400
     - BadRequest
     - Erro
   * - 404
     - Modo de disputa não encontrado
     - NotFound
   * - 422
     - Unprocessable Entity
     - Erro
   * - 500
     - Internal Server Error
     - Erro

Regra de conformidade entre Instrumento Convocatório e Modo de Disputa 
----------------------------------------------------------------------

Para consulta às combinações de conformidade entre instrumento convocatório e modo de disputa acessar a página no Portal PNCP pelo endereço 
`https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP foram disponibilizados os serviços para consulta de combinações de conformidade entre instrumento convocatório e modo de disputa a seguir. 

Consultar conformidade entre Instrumentos Convocatórios e Modos de Disputa por Código 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Serviço que permite consultar a combinação de conformidade pelo código do instrumento convocatório e pelo código do modo de disputa.

