Consultar Histórico de Intenção de Registro de Preço
====================================================

Serviço que permite recuperar o histórico pertencente a uma Intenção de Registro de Preço (IRP).

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Endpoint
     - Método HTTP
   * - /v1/orgaos/{cnpj}/irp/{ano}/{sequencial}/historico 
     - GET
	 
Exemplo de Payload
~~~~~~~~~~~~~~~~~~

.. code-block:: json
  :linenos:
  :emphasize-lines: 1

	Não se aplica

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash
  :linenos:
  :emphasize-lines: 1-3

	curl -k -X GET \
	  "${BASE_URL}/v1/orgaos/10000000000003/irp/2021/1/historico" \
	  -H "accept: */*"

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::
   Alimentar os parâmetros ``cnpj``, ``ano`` e ``sequencial`` na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1
   :class: quebra-linha-dois-quatro

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - :destaque-verde-claro:`1`
     - :destaque-verde-claro:`cnpj`
     - :destaque-verde-claro:`Texto (14)`
     - :destaque-verde-claro:`Cnpj do órgão originário da IRP informado na inclusão (proprietário da IRP)`
   * - :destaque-verde-claro:`2`
     - :destaque-verde-claro:`ano`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Ano da IRP`
   * - :destaque-verde-claro:`3`
     - :destaque-verde-claro:`sequencial`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Sequencial da IRP no PNCP; Número sequencial gerado no momento que a IRP foi inserida no PNCP`
   * - :destaque-verde-claro:`4`
     - :destaque-verde-claro:`pagina`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Utilizado para paginação dos itens. Número da página.`
   * - :destaque-verde-claro:`5`
     - :destaque-verde-claro:`tamanhoPagina`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Utilizado para paginação dos itens. Quantidade itens por página.`


Dados de Retorno
~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 5 25 15 55
   :header-rows: 1
   :class: quebra-linha-dois-quatro

   * - Id
     - Campo
     - Tipo
     - Descrição

   * - :destaque-verde-claro:`1`
     - :destaque-verde-claro:`Lista de itens`
     - 
     - 
   * - :destaque-verde-claro:`1.1`
     - :destaque-verde-claro:`justificativa`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Motivo/justificativa para a ação na IRP`
   * - :destaque-verde-claro:`1.2`
     - :destaque-verde-claro:`tipoLogManutencao`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Código da operação efetuada. Domínio: 0 - Inclusão; 1 - Retificação; 2 - Exclusão;`
   * - :destaque-verde-claro:`1.3`
     - :destaque-verde-claro:`categoriaLogManutencao`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Código do tipo de recurso que sofreu a operação.`
   * - :destaque-verde-claro:`1.4`
     - :destaque-verde-claro:`logManutencaoDataInclusao`
     - :destaque-verde-claro:`Data/Hora`
     - :destaque-verde-claro:`Data e hora da operação de inclusão, retificação ou exclusão do recurso.`
   * - :destaque-verde-claro:`1.5`
     - :destaque-verde-claro:`irpOrgaoCnpj`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Cnpj do órgão originário da IRP informado na inclusão (proprietário da IRP)`
   * - :destaque-verde-claro:`1.6`
     - :destaque-verde-claro:`irpSequencial`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Sequencial da IRP no PNCP; Número sequencial gerado no momento que a IRP foi inserida no PNCP`
   * - :destaque-verde-claro:`1.7`
     - :destaque-verde-claro:`itemNumero`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Número do item na IRP (único e sequencial crescente)`
   * - :destaque-verde-claro:`1.8`
     - :destaque-verde-claro:`documentoTipo`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Tipo de documento na tabela de domínio`
   * - :destaque-verde-claro:`1.9`
     - :destaque-verde-claro:`documentoTitulo`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Título do documento`
   * - :destaque-verde-claro:`1.10`
     - :destaque-verde-claro:`documentoSequencial`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Número do documento na IRP (único e sequencial crescente)`   
   * - :destaque-verde-claro:`1.11`
     - :destaque-verde-claro:`tipoLogManutencaoNome`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Nome da operação efetuada. Domínio: 0 - Inclusão; 1 - Retificação; 2 - Exclusão;`
   * - :destaque-verde-claro:`1.12`
     - :destaque-verde-claro:`categoriaLogManutencaoNome`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Nome da operação efetuada. Domínio: 0 - Inclusão; 1 - Retificação; 2 - Exclusão;`
   * - :destaque-verde-claro:`1.13`
     - :destaque-verde-claro:`irpAno`
     - :destaque-verde-claro:`Inteiro`
     - :destaque-verde-claro:`Ano da IRP`      
   * - :destaque-verde-claro:`1.14`
     - :destaque-verde-claro:`usuarioNome`
     - :destaque-verde-claro:`String`
     - :destaque-verde-claro:`Nome do usuário/plataforma responsável pela alteração.`  


Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: auto
   :header-rows: 1

   * - Código HTTP
     - Mensagem
     - Tipo
   * - :destaque-verde-claro:`200`
     - :destaque-verde-claro:`OK`
     - :destaque-verde-claro:`Sucesso`
   * - :destaque-verde-claro:`400`
     - :destaque-verde-claro:`BadRequest`
     - :destaque-verde-claro:`Erro`
   * - :destaque-verde-claro:`422`
     - :destaque-verde-claro:`Unprocessable Entity`
     - :destaque-verde-claro:`Erro`
   * - :destaque-verde-claro:`500`
     - :destaque-verde-claro:`Internal Server Error`
     - :destaque-verde-claro:`Erro`



