Fluxos de Inclusão de Contratos fruto de Ata de Registro de Preços (ARP) no PNCP
================================================================================

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

.. Container:: destaque-amarelo

    A inclusão de contratos decorrentes de ata de registro de preços (ARP) no PNCP depende, primeiramente, do cadastro prévio da ata, com todas as partes envolvidas corretamente identificadas. No caso de adesão (Não participante), é necessário que a ARP permita adesões e que o órgão contratante esteja registrado na ata.
    O envio do contrato deve conter dados consistentes, como objeto, valor, vigência, fornecedor e a vinculação à ARP correspondente. Além disso, o órgão e suas unidades precisam estar devidamente cadastrados no sistema.
    Esse fluxo assegura a padronização das informações, transparência e conformidade nas contratações públicas.

\

Macroprocesso: 
~~~~~~~~~~~~~~

.. figure:: ../../img/contrato_empenho/Macroprocesso.png
   :width: 80%
   :align: center
   :alt: Macroprocesso

\

Fluxos Específicos: 
~~~~~~~~~~~~~~~~~~~

Publicação de contrato (não SRP):
"""""""""""""""""""""""""""""""""

.. figure:: ../../img/Publicacao_nao_srp.png
   :width: 80%
   :align: center
   :alt: Publicação de contrato (não SRP)

\

.. list-table::
   :width: 100%
   :widths: 25 35 40
   :header-rows: 1

   * - Ator
     - Ação
     - Informações relevantes
   * - Órgão Entidade/Pública
     - Inserir Contratação (item 6.3.1. Inserir Contratação)
     - • informar campo "srp": false
   * - Órgão Entidade/Pública
     - Inserir Contrato (item 6.5.1. Inserir Contrato/Empenho)
     - • informar campo "frutoAdesao": false
       • não informar o campo "sequencialAta"

.. Attention::

	Por não se tratar de uma contratação com indicação de Sistema de Registro de Preços (SRP), a Ata de Registro de Preços (ARP) não deverá ser enviada.   

Publicação de contrato pela gerenciadora (SRP)
""""""""""""""""""""""""""""""""""""""""""""""

.. figure:: ../../img/Publicacao_gerenciadora.png
   :width: 80%
   :align: center
   :alt: Publicação de contrato pela gerenciadora (SRP)

\

Fluxo de Processo
+++++++++++++++++

.. list-table::
   :width: 100%
   :widths: 25 35 40
   :header-rows: 1

   * - Ator
     - Ação
     - Informações relevantes
   * - Gerenciadora
     - Inserir Contratação (item 6.3.1. Inserir Contratação)
     - | • informar campo "srp": true
   * - Gerenciadora
     - Inserir Ata de Registro de Preços (item 6.4.1 Inserir Ata de Registro de Preço)
     - | • informar campo "possibilidadeAdesao": true/false
       | • informar partes envolvidas:
       |   - TipoParteEnvolvidaId: 1 (Gerenciadora)
       |   - TipoParteEnvolvidaId: 2 (Participante)
   * - Gerenciadora
     - Inserir Contrato (item 6.5.1. Inserir Contrato/Empenho)
     - | • informar campo cnpj do contratante (/v1/orgaos/{cnpj}/contratos)
       | • informar campo "cnpjCompra" da gerenciadora
       | • informar o campo "codigoUnidade" do contratante
       | • informar o campo "sequencialAta"
       | • informar o campo "frutoAdesao": false

Exemplos
++++++++

**Exemplo 1 - ARP contendo somente Gerenciadora:**

.. code-block:: json
  :linenos:

	   "partesEnvolvidas": [
	       {
	           "tipoParteEnvolvidaId": 1,
	           "cnpj": "10000000000003",
	           "codigoUnidadeCompradora": "1"
	       }
	   ]

**Exemplo 2 - ARP contendo Gerenciadora e participante(s):**

.. code-block:: json
  :linenos:

	   "partesEnvolvidas": [
	       {
	           "tipoParteEnvolvidaId": 1,
	           "cnpj": "10000000000003",
	           "codigoUnidadeCompradora": "1"
	       },
	       {
	           "tipoParteEnvolvidaId": 2,
	           "cnpj": "10000000000004",
	           "codigoUnidadeCompradora": "2"
	       }
	   ]

.. note::

   • A gerenciadora sempre deverá ser informada quando se tratar de ARP.  
   • Ao inserir Ata de Registro de Preços, não é permitido informar partes envolvidas do tipo "Não Participante" ("tipoParteEnvolvidaId": 3).  
   • O contrato somente poderá ser inserido no PNCP caso o CNPJ e o "codigoUnidade" do órgão contratante constem como Parte Envolvida na ARP informada.

.. Attention::

	As partes envolvidas da ARP somente podem ser informadas ao PNCP pela gerenciadora. 

Publicação de contrato por ente participante (SRP):
"""""""""""""""""""""""""""""""""""""""""""""""""""

.. figure:: ../../img/Publicacao_participante.png
   :width: 80%
   :align: center
   :alt: Publicação de contrato por ente participante (SRP)

\

Fluxo de Processo
+++++++++++++++++

.. list-table::
   :width: 100%
   :widths: 25 35 40
   :header-rows: 1

   * - Ator
     - Ação
     - Informações relevantes
   * - Gerenciadora
     - Inserir Contratação (item 6.3.1. Inserir Contratação)
     - | • informar campo "srp": true
   * - Gerenciadora
     - Inserir Ata de Registro de Preços (item 6.4.1 Inserir Ata de Registro de Preço)
     - | • informar campo "possibilidadeAdesao": true/false
       | • informar partes envolvidas:
       |   - TipoParteEnvolvidaId: 1 (Gerenciadora)
       |   - TipoParteEnvolvidaId: 2 (Participante)
   * - Gerenciadora
     - Inserir Parte Envolvida na Ata de Registro de Preço (item 6.4.13. Inserir Parte Envolvida na Ata de Registro de Preço)
     - | • informar partes envolvidas:
       |   - TipoParteEnvolvidaId: 2 (Participante)
   * - Gerenciadora
     - Inserir Contrato (item 6.5.1. Inserir Contrato/Empenho)
     - | • informar campo cnpj do contratante (/v1/orgaos/{cnpj}/contratos)
       | • informar campo "cnpjCompra" da gerenciadora
       | • informar o campo "codigoUnidade" do contratante
       | • informar o campo "sequencialAta"
       | • informar o campo "frutoAdesao": false

Exemplos
++++++++

**Exemplo 1 - ARP contendo Gerenciadora e participante(s):**


.. code-block:: json
  :linenos:

	   "partesEnvolvidas": [
	       {
	           "tipoParteEnvolvidaId": 1,
	           "cnpj": "10000000000003",
	           "codigoUnidadeCompradora": "1"
	       },
	       {
	           "tipoParteEnvolvidaId": 2,
	           "cnpj": "10000000000004",
	           "codigoUnidadeCompradora": "2"
	       }
	   ]

**Exemplo 2 - Inserir somente participante posteriormente:**

.. code-block:: json
  :linenos:

	   "partesEnvolvidas": [
	       {
	           "tipoParteEnvolvidaId": 2,
	           "cnpj": "10000000000004",
	           "codigoUnidadeCompradora": "2"
	       }
	   ]

.. note::

   • A gerenciadora sempre deverá ser informada quando se tratar de ARP.  
   • O ideal é que o participante seja inserido no momento do envio da ata, contudo poderá ser enviado posteriormente.  
   • Ao inserir Ata de Registro de Preços, não é permitido informar partes envolvidas do tipo "Não Participante" ("tipoParteEnvolvidaId": 3).  
   • Essa etapa de inserção posterior se aplica apenas quando o participante não foi informado na inclusão da ata.  
   • O contrato somente poderá ser inserido no PNCP caso o CNPJ e o "codigoUnidade" do órgão contratante constem como Parte Envolvida na ARP informada.


Publicação de contrato por ente não participante (SRP) 
""""""""""""""""""""""""""""""""""""""""""""""""""""""

.. figure:: ../../img/Publicacao_nao_participante.png
   :width: 80%
   :align: center
   :alt: Publicação de contrato por ente não participante (SRP)

\

Fluxo de Processo
+++++++++++++++++

.. list-table::
   :width: 100%
   :widths: 25 35 40
   :header-rows: 1

   * - Ator
     - Ação
     - Informações relevantes
   * - Gerenciadora
     - Inserir Contratação (item 6.3.1. Inserir Contratação)
     - | • informar campo "srp": true
   * - Gerenciadora
     - Inserir Ata de Registro de Preços (item 6.4.1 Inserir Ata de Registro de Preço)
     - | • informar campo "possibilidadeAdesao": true
       | • informar partes envolvidas:
       |   - TipoParteEnvolvidaId: 1 (Gerenciadora)
       |   - TipoParteEnvolvidaId: 2 (Participante)
   * - Gerenciadora
     - Inserir Parte Envolvida na Ata de Registro de Preço (item 6.4.13. Inserir Parte Envolvida na Ata de Registro de Preço)
     - | • informar partes envolvidas:
       |   - TipoParteEnvolvidaId: 2 (Participante)
       |   - TipoParteEnvolvidaId: 3 (Não Participante)
   * - Gerenciadora
     - Inserir Contrato (item 6.5.1. Inserir Contrato/Empenho)
     - | • informar campo cnpj do contratante (/v1/orgaos/{cnpj}/contratos)
       | • informar campo "cnpjCompra" da gerenciadora
       | • informar o campo "codigoUnidade" do contratante
       | • informar o campo "sequencialAta"
       | • informar o campo "frutoAdesao": true

Exemplos
++++++++

**Exemplo 1 - ARP contendo Gerenciadora e participante(s):**

.. code-block:: json
  :linenos:

	   "partesEnvolvidas": [
	       {
	           "tipoParteEnvolvidaId": 1,
	           "cnpj": "10000000000003",
	           "codigoUnidadeCompradora": "1"
	       },
	       {
	           "tipoParteEnvolvidaId": 2,
	           "cnpj": "10000000000004",
	           "codigoUnidadeCompradora": "2"
	       }
	   ]

**Exemplo 2 - Inserção posterior com participante(s) e não participante(s):**

.. code-block:: json
  :linenos:

	   "partesEnvolvidas": [
	       {
	           "tipoParteEnvolvidaId": 2,
	           "cnpj": "10000000000004",
	           "codigoUnidadeCompradora": "2"
	       },
	       {
	           "tipoParteEnvolvidaId": 3,
	           "cnpj": "10000000000005",
	           "codigoUnidadeCompradora": "3"
	       }
	   ]

.. note::

   • A gerenciadora sempre deverá ser informada quando se tratar de ARP.  
   • O ideal é que o participante seja inserido no momento do envio da ata, contudo poderá ser enviado posteriormente.  
   • Ao inserir Ata de Registro de Preços, não é permitido informar partes envolvidas do tipo "Não Participante" ("tipoParteEnvolvidaId": 3); estes devem ser informados posteriormente.  
   • A gerenciadora deve ser informada no momento da inserção da ata.  
   • O contrato da parte envolvida do tipo "Não participante" somente poderá ser inserido no PNCP caso:
     - o campo "possibilidadeAdesao" seja true na ARP; e
     - o CNPJ e o "codigoUnidade" do órgão contratante constem como Parte Envolvida na ARP.


.. Attention::

	As partes envolvidas da ARP somente podem ser informadas ao PNCP pela gerenciadora. 
