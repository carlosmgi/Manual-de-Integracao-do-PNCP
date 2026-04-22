Tabelas de Domínio
==================



Amparo Legal 
============
Para consulta aos amparos legais acessar a página no Portal PNCP pelo endereço 
`https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP 
foram disponibilizados os serviços para consulta de amparo/os legal/is a seguir. 

Consultar Amparo Legal por Código 
================================~
Serviço que permite consultar um amparo legal pelo seu código.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/amparos-legais/{id}  
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/amparos-legais/{id}' -H 'accept: */*'

Dados de Entrada
~~~~~~~~~~~~~~~~

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
~~~~~~~~~~~~~~~~

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

Consultar Amparos Legais 
========================

Serviço que permite consultar os amparos legais cadastrados no PNCP. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/amparos-legais
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/amparos-legais' -H 'accept: */*'
   ou
   curl -X 'GET' 
   '${BASE_URL}/v1/amparos-legais?statusAtivo=true' -H 'accept: */*'
   ou
   curl -X 'GET' 
   '${BASE_URL}/v1/amparos-legais?tipoAmparoLegalId=1&statusAtivo=true' -H 'accept: */*'

Dados de Entrada
~~~~~~~~~~~~~~~~

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
~~~~~~~~~~~~~~~~

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

Tipos de Amparos Legais
======================~

Domínio do tipo de amparo legal:

- **Contratação:** Tipo de amparo legal que deverá ser utilizado na
  fundamentação legal da contratação.

- **Margem de preferência:** Tipo de amparo legal que deverá ser utilizado na
  fundamentação legal da aplicação da margem de preferência no resultado do item.

- **Critério de desempate:** Tipo de amparo legal que deverá ser utilizado na
  fundamentação legal da aplicação do critério de desempate no resultado do item.

Envio de arquivos pelas APIs de Documento 
========================================-

Ao anexar um documento digital, complementando os metadados enviados, as seguintes extensões de arquivo serão aceitas para upload:

- pdf,  txt,  rtf,  doc,  docx, xls, xlsx,  odt, ods, sxw,  zip, 7z, rar, dwg, dwt, dxf, dwf, dwfx, svg, sldprt, sldasm, dgn, ifc, skp, 3ds, dae, obj, rfa e rte. 

.. note:: 

   O tamanho máximo aceito, por arquivo enviado, é de 30 MB (Megabytes). 

Categoria de Item (Plano de Contratações e Contratações)
========================================================

Para consulta às categorias de item acessar a página no Portal PNCP pelo endereço `https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP foram disponibilizados os serviços para consulta de categorias de item a seguir. 

Consultar Categoria de Item por Código
======================================

Serviço que permite consultar uma categoria de item pelo seu código. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/categoriaItemPcas/{id}  
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/categoriaItemPcas/{id} -H 'accept: */*'
 

Dados de Entrada
~~~~~~~~~~~~~~~~

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
~~~~~~~~~~~~~~~~

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

Consultar Categorias de Item
============================

Serviço que permite consultar as categorias de item cadastradas no PNCP.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/categoriaItemPcas
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   curl -X 'GET' '${BASE_URL}/v1/categoriaItemPcas' -H 'accept: */*'
   ou
   curl -X 'GET' 
   '${BASE_URL}/v1/categoriaItemPcas?statusAtivo=true' -H 'accept: */*'   

Dados de Entrada
~~~~~~~~~~~~~~~~

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
     - Indicador de status da categoria de item. True = Ativa / False = Inativa.

Dados de retorno
~~~~~~~~~~~~~~~~

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
     - Indicador de status da categoria de item. True = Ativa / False = Inativa.

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

Regra de conformidade entre Instrumento Convocatório, Modalidade de Contratação e Amparo Legal 
==============================================================================================

Para consulta às combinações de conformidade entre instrumento convocatório, modalidade de contratação e amparo legal acessar a página no Portal PNCP pelo endereço `https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP foram disponibilizados os serviços para consulta das combinações de conformidade entre instrumento convocatório, modalidade de contratação e amparo legal a seguir.

Consultar conformidade entre Instrumento Convocatório, Modalidade de Contratação e Amparo Legal por Código
==========================================================================================================

Serviço que permite consultar a combinação de conformidade pelo código do instrumento convocatório, código da modalidade de contratação e código do amparo 
legal. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/tipos-instrumentos-convocatoriosmodalidade-amparo-legal/{amparoLegalId}/{modalidadeId}/{tipoInstrumentoConvocatorioId}
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/instrumento-convocatorio-modalidade-amparo-legal/1/6/1' -H 'accept: */*'

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note:: 

Alimentar o path parâmetro {amparoLegalId} e {modalidadeId} e {tipoInstrumentoConvocatorioId} na URL. 

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

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
~~~~~~~~~~~~~~~~

.. list-table:: 
   :width: 100%
   :header-rows: 1
   :widths: 5 25 15 25

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

Consultar conformidade entre Instrumento Convocatório, Modalidade de Contratação e Amparo Legal
==============================================================================================~

Serviço que permite consultar as combinações de conformidade entre instrumento convocatório, modalidade de contratação e amparo legal cadastradas no PNCP. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/instrumento-convocatorio-modalidade-amparo-legal
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/instrumento-convocatorio-modalidade-amparo-legal' -H 'accept: */*' 
   ou 
   curl -X 'GET' 
   '${BASE_URL}/v1/instrumento-convocatorio-modalidade-amparo-legal?tipoInstrumentoConvocatorioId=1&modalidadeId=6' -H 'accept: */*' 


Dados de Entrada
~~~~~~~~~~~~~~~~

.. note:: 

Alimentar o query parâmetro {amparoLegalId} ou {modalidadeId} ou {tipoInstrumentoConvocatorioId}.

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1 

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
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table:: 
   :width: 100%
   :header-rows: 1
   :widths: 5 25 15 25

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

Regra de conformidade entre Instrumento Convocatório e Modo de Disputa 
======================================================================

Para consulta às combinações de conformidade entre instrumento convocatório e modo de disputa acessar a página no Portal PNCP pelo endereço 
`https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP foram disponibilizados os serviços para consulta de combinações de conformidade entre instrumento convocatório e modo de disputa a seguir. 

Consultar conformidade entre Instrumentos Convocatórios e Modos de Disputa por Código 
====================================================================================~

Serviço que permite consultar a combinação de conformidade pelo código do instrumento convocatório e pelo código do modo de disputa.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/tipo-instrumento-convocatorio-modo-disputa/{tipoInstrumentoConvocatorioId}/{modoDisputaId} 
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/tipo-instrumento-convocatorio-modo-disputa/1/1' -H 'accept: */*'

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note:: 

   Alimentar o path parâmetro '{tipoInstrumentoConvocatorioId}' e '{modoDisputaId}' na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 25
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - tipoInstrumentoConvocatorioId
     - Inteiro
     - Sim
     - Código de identificação do instrumento convocatório
   * - modoDisputaId
     - Inteiro
     - Sim
     - Código de identificação do modo de disputa

Dados de Retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - tipoInstrumentoConvocatorio
     - 
     - Dados do Instrumento Convocatório
   * - 1.1
     - id
     - Inteiro
     - Código de identificação do instrumento convocatório
   * - 1.2
     - nome
     - Texto
     - Nome do instrumento convocatório
   * - 1.3
     - descricao
     - Texto
     - Descrição do instrumento convocatório
   * - 1.4
     - statusAtivo
     - Booleano
     - Indicador de status do instrumento convocatório. True-Ativo / False-Inativo
   * - 2
     - modoDisputa
     - 
     - Dados do Modo de Disputa
   * - 2.1
     - id
     - Inteiro
     - Código de identificação do modo de disputa
   * - 2.2
     - nome
     - Texto
     - Nome do modo de disputa
   * - 2.3
     - descricao
     - Texto
     - Descrição do modo de disputa
   * - 2.4
     - statusAtivo
     - Booleano
     - Indicador de status do modo de disputa. True-Ativo / False-Inativo
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

Consultar conformidade entre Instrumentos Convocatórios e Modos de Disputa
==========================================================================

Serviço que permite consultar as combinações de conformidade de instrumento convocatório e/ou modo de disputa ou todas as combinações cadastradas no PNCP. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/tipo-instrumento-convocatorio-modo-disputa 
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/tipo-instrumento-convocatorio-modo-disputa' -H 'accept: */*'
   ou 
   curl -X 'GET' 
   '${BASE_URL}/v1/tipo-instrumento-convocatorio-modo-disputa?tipoInstrumentoConvocatorioId=1' -H 'accept: */*' 
   ou 
   curl -X 'GET' 
   '${BASE_URL}/v1/tipo-instrumento-convocatorio-modo-disputa?tipoInstrumentoConvocatorioId=1&modoDisputaId=1' -H 'accept: */*' 

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar o query parâmetro ``tipoInstrumentoConvocatorioId`` ou ``modoDisputaId``.

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - tipoInstrumentoConvocatorioId
     - Inteiro
     - Não
     - Código de identificação do instrumento convocatório
   * - modoDisputaId
     - Inteiro
     - Não
     - Código de identificação do modo de disputa

Dados de Retorno (lista de combinações)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - tipoInstrumentoConvocatorio
     - 
     - Dados do Instrumento Convocatório
   * - 1.1
     - id
     - Inteiro
     - Código de identificação do instrumento convocatório
   * - 1.2
     - nome
     - Texto
     - Nome do instrumento convocatório
   * - 1.3
     - descricao
     - Texto
     - Descrição do instrumento convocatório
   * - 1.4
     - statusAtivo
     - Booleano
     - Indicador de status do instrumento convocatório. True-Ativo / False-Inativo
   * - 2
     - modoDisputa
     - 
     - Dados do Modo de Disputa
   * - 2.1
     - id
     - Inteiro
     - Código de identificação do modo de disputa
   * - 2.2
     - nome
     - Texto
     - Nome do modo de disputa
   * - 2.3
     - descricao
     - Texto
     - Descrição do modo de disputa
   * - 2.4
     - statusAtivo
     - Booleano
     - Indicador de status do modo de disputa. True-Ativo / False-Inativo
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

Regra para permissão de inclusão ou retificação de contrato oriundos de contratações no Sistema de Registro de Preços (SRP)
==========================================================================================================================-

O sistema não permitirá a inclusão ou retificação de Contrato oriundos de Contratação no Sistema de Registro de Preços (SRP) que não possua pelo menos uma Ata de Registro de Preço publicada no Portal PNCP para esta Contratação. 

Envio de imagens pelas APIs de Imagens de Item
==============================================

Ao enviar uma imagem digital, complementando os metadados enviados, as seguintes extensões de arquivo serão aceitas para upload: 

- webp, jpg, jpeg, jpe, jfif, pjpeg, pjp, png, apng, tiff, tif, svg, avif, bmp e gif. 

.. note::

   Cada item de contratação poderá ter até 5 imagens sendo o tamanho máximo aceito, por arquivo de imagem enviado, é de 3 MB (Megabytes). Serviço disponível atualmente para modalidade leilão, saiba mais no item 6.3.20. 

Regra de conformidade entre Modalidade de Contratação e Critério de Julgamento 
==============================================================================

Para consulta às combinações de conformidade entre modalidades de contratação e critérios de julgamento acessar a página no Portal PNCP pelo endereço  `https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP foram disponibilizados os serviços para consulta de combinações de conformidade entre modalidades de contratação e critérios de julgamento a seguir. 

Consultar conformidade entre Modalidade de Contratação e Critério de Julgamento por Código
==========================================================================================

Serviço que permite consultar a combinação de conformidade pelo código da modalidade de contratação e pelo código do critério de julgamento. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/modalidade-criterio-julgamento/{modalidadeId}/{criterioJulgamentoId} 
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/modalidade-criterio-julgamento/6/1' -H 'accept: */*'

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar os parâmetros de path ``modalidadeId`` e ``criterioJulgamentoId`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - modalidadeId
     - Inteiro
     - Sim
     - Código de identificação da modalidade da contratação
   * - criterioJulgamentoId
     - Inteiro
     - Sim
     - Código de identificação do critério de julgamento

Dados de Retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - modalidadeContratacao
     - 
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
     - criterioJulgamento
     - 
     - Dados do Critério de Julgamento
   * - 2.1
     - id
     - Inteiro
     - Código de identificação do critério de julgamento
   * - 2.2
     - nome
     - Texto
     - Nome do critério de julgamento
   * - 2.3
     - descricao
     - Texto
     - Descrição do critério de julgamento
   * - 2.4
     - statusAtivo
     - Booleano
     - Indicador de status do critério de julgamento. True-Ativo / False-Inativo
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

Consultar conformidade entre Modalidade de Contratação e Critério de Julgamento 
==============================================================================~

Serviço que permite consultar as combinações de conformidade entre modalidade de contratação e/ou critério de julgamento ou todas as combinações cadastradas no PNCP.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/modalidade-criterio-julgamento
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/modalidade-criterio-julgamento' -H 'accept: */*'
   ou
   curl -X 'GET' '${BASE_URL}/v1/modalidade-criterio-julgamento?modalidadeId=6' -H 'accept: */*' 
   ou 
   curl 
   'GET' '${BASE_URL}/v1/modalidade-criterio-julgamento?criterioJulgamentoId=1' -H 'accept: */*' 
   ou 
   curl -X 'GET' 
   '${BASE_URL}/v1/modalidade-criterio-julgamento?modalidadeId=6&criterioJulgamentoId=1' -H 'accept: */*' 

Dados de entrada
~~~~~~~~~~~~~~~~

.. Note:: 
   Informar um dos parâmetros de consulta: ``modalidadeId`` ou ``criterioJulgamentoId``.

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
   * - criterioJulgamentoId
     - Inteiro
     - Não
     - Código de identificação do critério de julgamento

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
     - criterioJulgamento
     - Objeto
     - Dados do Critério de Julgamento
   * - 2.1
     - id
     - Inteiro
     - Código de identificação do critério de julgamento
   * - 2.2
     - nome
     - Texto
     - Nome do critério de julgamento
   * - 2.3
     - descricao
     - Texto
     - Descrição do critério de julgamento
   * - 2.4
     - statusAtivo
     - Booleano
     - Indicador de status do critério de julgamento. True-Ativo / False-Inativo

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

Catálogos (Itens de Plano de Contratações e Contratações) 
========================================================-

Para consulta aos catálogos acessar a página no Portal PNCP pelo endereço ``https://pncp.gov.br/app/entidades-dominio <https://pncp.gov.br/app/entidades-dominio>`_. Para ajudar na integração com o PNCP foram disponibilizados os serviços para consulta de catálogos a seguir. 

Consultar Catálogo por Código 
============================~

Serviço que permite consultar um catálogo pelo seu código. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/catalogos/{id}
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/catalogos/{id}' -H 'accept: */*'

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
     - Código de identificação do catálogo

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
     - Código de identificação do catálogo
   * - 2
     - nome
     - Texto
     - Nome do catálogo
   * - 3
     - descricao
     - Texto
     - Descrição do catálogo
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
     - Indicador de status do catálogo. True-Ativo / False-Inativo
   * - 7
     - url
     - Texto
     - URL para o catálogo

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

Consultar Catálogos 
==================~

Serviço que permite consultar os catálogos cadastrados no PNCP. 

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 50 15
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/catalogos
     - GET

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   curl -X 'GET' 
   '${BASE_URL}/v1/catalogos' -H 'accept: */*'
   ou
   curl -X 'GET' 
   '${BASE_URL}/v1/catalogos?statusAtivo=true' -H 'accept: */*'

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
     - Indicador de status do catálogo. True-Ativo / False-Inativo

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
     - Código de identificação do catálogo
   * - 2
     - nome
     - Texto
     - Nome do catálogo
   * - 3
     - descricao
     - Texto
     - Descrição do catálogo
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
     - Indicador de status do catálogo. True-Ativo / False-Inativo

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

Tipo de Instrumento de Cobrança 
==============================-

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

