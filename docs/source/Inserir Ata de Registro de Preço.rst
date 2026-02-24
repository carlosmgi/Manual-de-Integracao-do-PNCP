Inserir Ata de Registro de Preço
================================

Serviço que permite inserir uma ata de Registro de Preço no PNCP referente a uma contratação. 

**Detalhes da Requisição**

=============================================================  ======================================================================
**Endpoint**                                                   **Método HTTP**
-------------------------------------------------------------  ----------------------------------------------------------------------
/v1/orgaos/{cnpj}/compras/{anoCompra}/{sequencialCompra}/atas  POST      
=============================================================  ====================================================================== 

**Exemplo de Payload**

.. code-block::

{ 

  "numeroAtaRegistroPreco": "00001", 

  "anoAta": 2021, 

  "dataAssinatura": “2021-07-21", 

  "dataVigenciaInicio": “2021-07-21", 

  "dataVigenciaFim": “2022-07-21", 

  "possibilidadeAdesao": true, 

  "partesEnvolvidas": [ 

    { 

      "tipoParteEnvolvidaId": 1, 

      "cnpj": "10000000000003", 

      "codigoUnidadeCompradora": "1" 

    } 

  ] 

} 
