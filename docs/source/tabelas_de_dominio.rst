Tabelas de Domínio
==================

Tipo de Instrumento de Cobrança 
===============================

Para consulta aos tipos de instrumentos de cobrança cadastrados acessar a página no Portal PNCP pelo endereço `https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP foram disponibilizados os serviços para consulta de tipos de instrumentos de cobrança a seguir. 

Consultar Tipo de Instrumento de Cobrança por Código 
====================================================

Serviço que permite consultar um tipo de instrumento de cobrança pelo seu código.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/tipos-instrumentos-cobranca/{id} 
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/tipos-instrumentos-cobranca/{id}' -H 'accept: */*'

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Informar o parâmetro de path ``id`` na URL.

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
     - Código de identificação do instrumento convocatório

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
     - id
     - Inteiro
     - Código de identificação do tipo de instrumento de cobrança
   * - 2
     - nome
     - Texto
     - Nome do tipo de instrumento de cobrança
   * - 3
     - descricao
     - Texto
     - Descrição do tipo de instrumento de cobrança
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
     - Indicador de status do tipo de instrumento de cobrança. True-Ativo / False-Inativo

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

Consultar Tipo de Instrumento de Cobrança 
========================================~

Serviço que permite consultar os tipos de instrumentos de cobrança cadastrados no PNCP. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/tipos-instrumentos-cobranca
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/tipos-instrumentos-cobranca' -H 'accept: */*' 
   ou 
   curl -X 'GET' 
   '${BASE_URL}/v1/tipos-instrumentos-cobranca?statusAtivo=true' -H 'accept: */*'

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Informar o parâmetro de query ``statusAtivo``.

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Booleano
     - Não
     - Indicador de status do instrumento convocatório. True-Ativo / False-Inativo

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
     - id
     - Inteiro
     - Código de identificação do tipo de instrumento de cobrança
   * - 2
     - nome
     - Texto
     - Nome do tipo de instrumento de cobrança
   * - 3
     - descricao
     - Texto
     - Descrição do tipo de instrumento de cobrança
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
     - Indicador de status do tipo de instrumento de cobrança. True-Ativo / False-Inativo

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

Fonte Orçamentária
==================

Para consulta às fontes orçamentárias cadastradas acessar a página no Portal PNCP pelo endereço `https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP foram disponibilizados os serviços para consulta de fontes orçamentárias a seguir.

Consultar Fonte Orçamentária por Código 
======================================~

Serviço que permite consultar uma fonte orçamentária pelo seu código. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/fontes-orcamentarias/{id} 
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/fontes-orcamentarias/1' -H 'accept: */*'

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Informar o parâmetro de path ``id`` na URL.

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
     - Código de identificação da fonte orçamentária

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
     - id
     - Inteiro
     - Código de identificação da fonte orçamentária
   * - 2
     - nome
     - Texto
     - Nome da fonte orçamentária
   * - 3
     - descricao
     - Texto
     - Descrição da fonte orçamentária
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
     - Indicador de status da fonte orçamentária. True-Ativo / False-Inativo

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

Consultar Fontes Orçamentárias 
==============================

Serviço que permite consultar as fontes orçamentárias cadastradas no PNCP.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/fontes-orcamentarias 
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/fontes-orcamentarias' -H 'accept: */*' 
   ou 
   curl -X 'GET' 
   '${BASE_URL}/v1/fontes-orcamentarias?statusAtivo=true' -H 'accept: */*' 

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Informar o parâmetro de query ``statusAtivo``.

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - statusAtivo
     - Booleano
     - Não
     - Indicador de status da fonte orçamentária. True-Ativo / False-Inativo

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
     - id
     - Inteiro
     - Código de identificação da fonte orçamentária
   * - 2
     - nome
     - Texto
     - Nome da fonte orçamentária
   * - 3
     - descricao
     - Texto
     - Descrição da fonte orçamentária
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
     - Indicador de status da fonte orçamentária. True-Ativo / False-Inativo

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

Regra de conformidade entre Modalidade de Contratação e Fonte Orçamentária 
==========================================================================

Para consulta às combinações de conformidade entre modalidades de contratação e fontes orçamentárias acessar a página no Portal PNCP pelo endereço `https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP foram disponibilizados os serviços para consulta de combinações de conformidade entre modalidades de contratação e fontes orçamentárias a seguir.

Consultar conformidade entre Modalidade de Contratação e Fonte Orçamentária por Código 
======================================================================================

Serviço que permite consultar a combinação de conformidade pelo código da modalidade de contratação e pelo código da fonte orçamentária. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/modalidade-fonte-orcamentaria/{modalidadeId}/{fonteOrcamentariaId} 
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/modalidade-fonte-orcamentaria/6/1' -H 'accept: */*'

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Informar os parâmetros de path ``modalidadeId`` e ``fonteOrcamentariaId`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - modalidadeId
     - Inteiro
     - Sim
     - Código de identificação da modalidade da contratação
   * - fonteOrcamentariaId
     - Inteiro
     - Sim
     - Código de identificação da fonte orçamentária

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
     - modalidadeContratacao
     - Objeto
     - Dados da Modalidade de Contratação
   * - 1.1
     - id
     - Inteiro
     - Código de identificação da modalidade de contratação
   * - 1.2
     - nome
     - Texto
     - Nome da modalidade de contratação
   * - 1.3
     - descricao
     - Texto
     - Descrição da modalidade de contratação
   * - 1.4
     - statusAtivo
     - Booleano
     - Indicador de status da modalidade de contratação. True-Ativo / False-Inativo

   * - 2
     - fonteOrcamentaria
     - Objeto
     - Dados da Fonte Orçamentária
   * - 2.1
     - id
     - Inteiro
     - Código de identificação da fonte orçamentária
   * - 2.2
     - nome
     - Texto
     - Nome da fonte orçamentária
   * - 2.3
     - descricao
     - Texto
     - Descrição da fonte orçamentária
   * - 2.4
     - statusAtivo
     - Booleano
     - Indicador de status da fonte orçamentária. True-Ativo / False-Inativo

   * - 3
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro

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

Consultar conformidade entre Modalidade de Contratação e Fonte Orçamentaria
==========================================================================~

Serviço que permite consultar as combinações de conformidade entre modalidade de contratação e/ou fonte orçamentária ou todas as combinações cadastradas no PNCP. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/modalidade-fonte-orcamentaria 
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/modalidade-fonte-orcamentaria' -H 'accept: */*' 
   ou 
   curl -X 'GET' 
   '${BASE_URL}/v1/modalidade-fonte-orcamentaria?modalidadeId=6' -H 'accept: */*' 
   ou 
   curl 'GET' 
   '${BASE_URL}/v1/modalidade-fonte-orcamentaria?fonteOrcamentariaId=1' -H 'accept: */*' 
   ou 
   curl -X 'GET' 
   '${BASE_URL}/v1/modalidade-fonte-orcamentaria?modalidadeId=6&fonteOrcamentariaId=1' -H 'accept: */*'

Dados de entrada
~~~~~~~~~~~~~~~~

.. note::
   Informar um dos parâmetros de query: ``modalidadeId`` ou ``fonteOrcamentariaId``.

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - modalidadeId
     - Inteiro
     - Não
     - Código de identificação da modalidade da contratação
   * - fonteOrcamentariaId
     - Inteiro
     - Não
     - Código de identificação da fonte orçamentária

Dados de retorno (lista de combinações)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - 1
     - modalidadeContratacao
     - Objeto
     - Dados da Modalidade de Contratação
   * - 1.1
     - id
     - Inteiro
     - Código de identificação da modalidade de contratação
   * - 1.2
     - nome
     - Texto
     - Nome da modalidade de contratação
   * - 1.3
     - descricao
     - Texto
     - Descrição da modalidade de contratação
   * - 1.4
     - statusAtivo
     - Booleano
     - Indicador de status da modalidade de contratação. True-Ativo / False-Inativo

   * - 2
     - fonteOrcamentaria
     - Objeto
     - Dados da Fonte Orçamentária
   * - 2.1
     - id
     - Inteiro
     - Código de identificação da fonte orçamentária
   * - 2.2
     - nome
     - Texto
     - Nome da fonte orçamentária
   * - 2.3
     - descricao
     - Texto
     - Descrição da fonte orçamentária
   * - 2.4
     - statusAtivo
     - Booleano
     - Indicador de status da fonte orçamentária. True-Ativo / False-Inativo

   * - 3
     - dataInclusao
     - Data/Hora
     - Data e hora da inclusão do registro

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

