Inserir Ata de Registro de Preço
================================
  
Serviço que permite inserir uma ata de Registro de Preço no PNCP referente a uma contratação.

**Detalhes da Requisição**

=============================================================  ======================================================================
**Endpoint**                                                   **Método HTTP**
-------------------------------------------------------------  ----------------------------------------------------------------------
/v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas  POST      
=============================================================  ====================================================================== 

.. code-block:: JSON

    {
        "name": "John Doe",
        "age": 30,
        "is_active": true,
        "skills": ["Python", "Sphinx", "JSON"]
    }

**Exemplo de Payload**

.. code-block:: JSON
  
    { 
        "numeroAtaRegistroPreco": "00001",
        "anoAta": 2021,
        "dataAssinatura": “2021-07-21",
        "dataVigenciaInicio": “2021-07-21",
        "dataVigenciaFim": “2022-07-21",
        "possibilidadeAdesao": true
    }

.. code-block:: JSON
  
    { 
        "numeroAtaRegistroPreco": "00001",
        "anoAta": 2021,
        "dataAssinatura": “2021-07-21",
        "dataVigenciaInicio": “2021-07-21",
        "dataVigenciaFim": “2022-07-21",
        "possibilidadeAdesao": true,
        "partesEnvolvidas":[
            {
              "tipoParteEnvolvidaId": 1,
              "cnpj": "10000000000003",
              "codigoUnidadeCompradora": "1"
            }
        ]
    }
  
**Dados de Entrada**

.. note::
  
  alimentar o parâmetro {cnpj}, {anoCompra} e {sequencialCompra} na URL.

.. list-table::
   :width: 100
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
     - CNPJ do órgão originário da contratação informado na inclusão (proprietário da contratação).
   * - 2
     - anoCompra
     - Inteiro
     - Sim
     - Ano da contratação.
   * - 3
     - sequencialCompra
     - Inteiro
     - Sim
     - Sequencial da contratação no PNCP; Número sequencial gerado no momento que a contratação foi inserida no PNCP.
   * - 4
     - numeroAtaRegistroPreco
     - Texto (50)
     - Sim
     - Número da ata no sistema de origem.
   * - 5
     - anoAta
     - Inteiro
     - Sim
     - Ano da ata.
   * - 6
     - dataAssinatura
     - Data
     - Sim
     - Informar a data de assinatura da ata.
   * - 7
     - dataVigenciaInicio
     - Data
     - Sim
     - Informar a data de início de vigência da ata.
   * - 8
     - dataVigenciaFim
     - Data
     - Sim
     - Informar a data de fim de vigência da ata.
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
  