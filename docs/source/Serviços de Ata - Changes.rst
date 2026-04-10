Serviços de Ata - Changes
=========================


Inserir Ata de Registro de Preço
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  
Serviço que permite inserir uma ata de Registro de Preço no PNCP referente a uma contratação.

**Atualizações da versão 2.3.10**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. versionadded:: 2.3.10

Exemplo de Payload
^^^^^^^^^^^^^^^^^^

.. code-block:: json
	:linenos:
    :emphasize-lines: 7-14

	  {
	      "numeroAtaRegistroPreco": "00001",
	      "anoAta": 2021,
	      "dataAssinatura": "2021-07-21",
	      "dataVigenciaInicio": "2021-07-21",
	      "dataVigenciaFim": "2022-07-21",
	      "possibilidadeAdesao": true,
	      "partesEnvolvidas":[
	          {
	            "tipoParteEnvolvidaId": 1,
	            "cnpj": "10000000000003",
	            "codigoUnidadeCompradora": "1"
	          }
	      ]
	  }

Dados de Entrada
^^^^^^^^^^^^^^^^

.. list-table::
  :widths: auto
  :header-rows: 1

  * - Id
    - Campo
    - Tipo
    - Obrigatório
    - Descrição
  * - 9
    - possibilidadeAdesao
    - Booleano
    - Sim
    - Indicador se a Ata permite adesão de não participantes (False=Não / True=Sim).
  * - 10
    - Lista de Partes Envolvidas
    - 
    - Não
    - Lista de partes envolvidas.
  * - 10.1
    - tipoParteEnvolvidaId
    - Inteiro
    - Não
    - Código do Tipo de Parte Envolvida:
      * **Código 1** - Gerenciadora;
      * **Código 2** - Participante; e
      * **Código 3** - Não Participante.
  * - 10.2
    - cnpj
    - Texto (14)
    - Não
    - CNPJ do órgão.
  * - 10.3
    - codigoUnidadeCompradora
    - Texto (30)
    - Não
    - Código da Unidade Administrativa.

.. versionchanged:: 2.3.10

  não houve alterações.

.. deprecated:: 2.3.10

  não houve alterações.
