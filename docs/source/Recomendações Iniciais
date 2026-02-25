4.1. Cadastro Inicial dos Órgãos/Entidades e suas Unidades
==========================================================

.. note::

   Disponível apenas no ambiente de treinamento/homologação.  
   No ambiente de produção, utilize o procedimento do item :ref:`gestao-orgao-entidade`.

**Plataforma pública:** operada por órgãos ou entidades da Administração Pública.  

**Plataforma privada:** operada por empresas privadas para prestar serviço à Administração Pública.

A plataforma deverá cadastrar os órgãos/entidades e suas respectivas unidades compradoras antes de enviar os dados das contratações realizadas por estas.

Uma vez habilitada, a plataforma usuária deve realizar os seguintes passos:

#. Realizar login;
#. Verificar se os órgãos desejados já estão cadastrados no PNCP*;
#. Cadastrar as unidades compradoras desses órgãos*;
#. Vincular os entes autorizados junto ao seu usuário da API de Integração do PNCP, conforme orientação contida no tópico :ref:`vinculo-entes-api`;
#. Iniciar o envio das informações através dos serviços disponíveis.

.. note::
Nota:

   O PNCP possui os CNPJs da administração pública divulgados pela RFB previamente cadastrados no portal.  
   Caso o órgão desejado não seja encontrado, é necessário inserir o dado antes de seguir para o próximo passo.


.. _manutencao-dados-contratacoes:

4.2. Manutenção dos Dados das Contratações Enviadas
==================================================

É responsabilidade da plataforma do usuário garantir a precisão e a manutenção adequada dos dados enviados para o PNCP, a fim de refletir a realidade das contratações públicas em questão.

Para garantir o cumprimento desse objetivo, vários domínios foram definidos para orientar a utilização das APIs. É importante ressaltar que esses domínios representam os diversos estados e situações das contratações e devem ser atualizados sempre que houver mudanças nos dados divulgados anteriormente no PNCP.

Além das APIs de inclusão, também estão disponíveis serviços para retificar e excluir os metadados enviados.


.. _composicao-numero-controle-pncp:

4.3. Composição do Número de Controle PNCP de PCA/Contratação/Ata/Contrato
==========================================================================

O PNCP gera automaticamente um identificador (número de controle) utilizado para reconhecer todas as demais transações realizadas para aquele registro.

Atualmente encontram-se disponíveis: plano de contratações anual (PCA), contratação (licitação ou contratação direta), ata de registro de preços ou contrato, conforme a composição abaixo.

.. _numero-controle-pca:

Número de Controle do PCA (id pca pncp)
---------------------------------------

**Máscara:** ``99999999999999-0-999999/9999``

Cada PCA receberá um número de controle composto por:

* CNPJ do Órgão/Entidade do PCA (14 dígitos)
* Dígito ``0`` — marcador que indica tratar-se de um plano de contratação anual
* Número sequencial do Plano no PNCP *
* Ano do Plano (4 dígitos)


.. _numero-controle-contratacao:

Número de Controle da Contratação (id contratação pncp)
-------------------------------------------------------

**Máscara:** ``99999999999999-1-999999/9999``

Cada contratação receberá um número de controle composto por:

* CNPJ do Órgão/Entidade da contratação (14 dígitos)
* Dígito ``1`` — marcador que indica tratar-se de uma contratação
* Número sequencial da contratação no PNCP *
* Ano da contratação (4 dígitos)


.. _numero-controle-ata:

Número de Controle da Ata (id ata pncp)
---------------------------------------

**Máscara:** ``99999999999999-1-999999/9999-999999``

Cada ata receberá um número de controle composto por:

* Número de Controle PNCP da Contratação (24 dígitos)
* Número sequencial da ata no PNCP *


.. _numero-controle-contrato:

Número de Controle do Contrato (id contrato pncp)
-------------------------------------------------

**Máscara:** ``99999999999999-2-999999/9999``

Cada contrato receberá um número de controle composto por:

* CNPJ do Órgão/Entidade do Contrato (14 dígitos)
* Dígito ``2`` — marcador que indica tratar-se de um contrato
* Número sequencial do contrato no PNCP *
* Ano do contrato (4 dígitos)


.. note::
Nota:

   O número PNCP será gerado sequencialmente com 6 dígitos e reiniciado a cada mudança de ano.


