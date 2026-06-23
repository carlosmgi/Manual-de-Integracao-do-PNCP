Histórico de Versões
====================

O Histórico de Versões do Manual de Integração do PNCP. tem como objetivo registrar a evolução cronológica das atualizações e melhorias técnicas do documento, assegurando que todas as equipes de desenvolvimento e órgãos integradores acompanhem as mudanças normativas e sistêmicas. Ao utilizar esse histórico, os desenvolvedores e gestores garantem o alinhamento com os schemas e endpoints vigentes, o que otimiza a manutenção das APIs, a correção de inconformidades e a implementação de novas funcionalidades no portal. O uso do histórico de versões contribui para a previsibilidade, a transparência e a governança das manutenções evolutivas no ecossistema de contratações públicas.
 

.. Attention::

   As alterações da versão 2.5 estão destacadas em azul, conforme o exemplo a seguir:

.. list-table::
   :width: 100%
   :widths: 5 10 15 55
   :header-rows: 1
   :class: quebra-linha-ultima-coluna

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - cnpj
     - Texto
     - CNPJ do órgão do contrato/empenho
   * - :destaque-azul-claro:`2`
     - :destaque-azul-claro:`ano`
     - :destaque-azul-claro:`Inteiro`
     - :destaque-azul-claro:`Ano do contrato/empenho`
   * - 3
     - sequencialContrato
     - Inteiro
     - Sequencial do contrato/empenho no PNCP; número sequencial gerado no momento da inclusão


.. Attention::

   As alterações da versão 2.4 estão destacadas em alaranjado, conforme o exemplo a seguir:

.. list-table::
   :width: 100%
   :widths: 5 10 15 55
   :header-rows: 1
   :class: quebra-linha-ultima-coluna

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


.. Attention::

  As alterações da versão 2.3.11 estão destacadas em amarelo-claro, conforme o exemplo a seguir:

.. list-table::
   :width: 100%
   :widths: 5 10 15 55
   :header-rows: 1
   :class: quebra-linha-ultima-coluna

   * - Id
     - Campo
     - Tipo
     - Descrição
   * - 1
     - cnpj
     - Texto
     - CNPJ do órgão do contrato/empenho
   * - :destaque-amarelo-claro:`2`
     - :destaque-amarelo-claro:`ano`
     - :destaque-amarelo-claro:`Inteiro`
     - :destaque-amarelo-claro:`Ano do contrato/empenho`
   * - 3
     - sequencialContrato
     - Inteiro
     - Sequencial do contrato/empenho no PNCP; número sequencial gerado no momento da inclusão

Versão: 2.5
-----------

Data: 11/06/2026

Novo Padrão CNPJ:

.. tip:: 

   Diante do crescimento contínuo do número de empresas e do iminente esgotamento dos números de CNPJ disponíveis, a Receita Federal do Brasil lança o CNPJ Alfanumérico. Essa solução tem como objetivo facilitar a identificação de todas as empresas e aprimorar o ambiente de negócios, contribuindo para o desenvolvimento econômico e social do Brasil.

   O CNPJ Alfanumérico será atribuído a partir de Julho de 2026, exclusivamente a novas inscrições. Os números de CNPJ já existentes não sofrerão nenhuma alteração, ou seja, quem já está inscrito no CNPJ permanecerá com o seu número válido!

   CNPJ do órgão (Alfanumérico) - https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/cnpj-alfanumerico
   Recepção de novas informações do fornecedor como localidade e identificação de Cadastro de Reserva ou Remanescente.`

**Tabelas de domínio:**

`Consultar Porte de Empresa por Código  <../tabelas_de_dominio/consultar_porte_de_empresa_por_codigo.html>`_ 

`Consultar Porte de Empresao  <../tabelas_de_dominio/consultar_porte_de_empresa.html>`_ 

**Serviços de Contratação (Editais, Avisos e Atos):**

`Inserir Resultado do Item de uma Contratação  <../contratacao/inserir_resultado_do_item_de_uma_contratacao.html>`_ 

`Retificar Resultado do Item de uma Contratação  <../contratacao/retificar_resultado_do_item_de_uma_contratacao.html>`_ 

`Consultar Resultados de Item de uma Contratação  <../contratacao/consultar_resultados_de_item_de_uma_contratacao.html>`_ 

`Consultar um Resultado específico de Item de uma Contratação  <../contratacao/consultar_um_resultado_especifico_de_item_de_uma_contratacao.html>`_ 


Versão: 2.4
-----------

Data: 09/04/2026

.. note::
    Funcionalidades que possibilitam recepcionar Emendas Parlamentares (Empenho) e novas tabelas de domínio de Tipo de Contrato e Documento.

**Tabelas de domínio:**

`Tipo de Contrato  <../tabelas_de_dominio/tipo_de_contrato.html>`_ 

`Consultar Tipo de Contrato por Código  <../tabelas_de_dominio/consultar_tipo_de_contrato_por_codigo.html>`_ 

`Consultar Tipos de Contrato  <../tabelas_de_dominio/consultar_tipos_de_contrato.html>`_    

`Tipo de Documento  <../tabelas_de_dominio/tipo_de_documento.html>`_ 

`Consultar Tipo de Documento por Código    <../tabelas_de_dominio/consultar_tipo_documento_por_codigo.html>`_ 

`Consultar Tipos de Documento  <../tabelas_de_dominio/consultar_tipos_de_documento.html>`_ 

**Serviços de Contratação (Editais, Avisos e Atos):**

`Retificar Parcialmente uma Contratação   <../contratacao/retificar_parcialmente_uma_contratacao.html>`_ 

`Consultar uma Contratação   <../contratacao/consultar_uma_contratacao.html>`_ 

**Serviços de Ata:**

`Inserir Ata de Registro de Preço   <../ata_de_registro_de_preco/inserir_ata_de_registro_de_preco.html>`_ 

**Serviços de Contrato/Empenho:**

`Inserir Contrato/Empenho  <../contrato_empenho/inserir_contratos_ou_empenhos.html>`_ 

`Retificar Contrato/Empenho  <../contrato_empenho/retificar_contrato_ou_empenho.html>`_ 

`Consultar Contrato/Empenho  <../contrato_empenho/consultar_contrato_ou_empenho.html>`_  

`Consultar Contratos/Empenhos de uma Contratação  <../contrato_empenho/consultar_contratos_ou_empenhos_de_uma_contratacao.html>`_  

`Consultar Histórico do Contrato/Empenho  <../contrato_empenho/consultar_historico_do_contrato_ou_empenho.html>`_  

`Retificar Parcialmente um Contrato/Empenho  <../contrato_empenho/retificar_parcialmente_um_contrato_ou_empenho.html>`_  

`Inserir Empenho  <../empenho/inserir_empenho.html>`_ 

`Retificar Parcialmente Empenho  <../empenho/retificar_parcialmente_empenho.html>`_  

`Excluir Empenho  <../empenho/excluir_empenho.html>`_ 

`Consultar Empenho pelo Número Sequencial  <../empenho/consultar_empenho_pelo_numero_sequencial.html>`_ 

`Consultar Empenhos  <../empenho/consultar_empenhos.html>`_ 

Versão: 2.3.11
--------------

Data: 18/03/2026

.. note::
 Funcionalidades que possibilitam recepcionar e identificar contratos fruto de ata de registro de preços no PNCP, bem como informações sobre as partes envolvidas.

`Fluxos de Inclusão de Contratos fruto de Ata de Registro de Preços (ARP) no PNCP <../contrato_empenho/fluxos_de_inclusao_de_contratos_fruto_de_ata_de_registro_de_precos_(arp)_no_pncp.html>`_ 

Versão: 2.3.10
--------------

Data: 24/02/2026

.. note::
 Funcionalidades que possibilitam recepcionar e identificar contratos fruto de ata de registro de preços no PNCP, bem como informações sobre as partes envolvidas.
 
`Inserir Ata de Registro de Preço <../ata_de_registro_de_preco/inserir_ata_de_registro_de_preco
.html>`_ 

`Retificar Ata de Registro de Preço <../ata_de_registro_de_preco/retificar_ata_de_registro_de_preco.html>`_ 

`Retificar Parcialmente Ata de Registro de Preço  <../ata_de_registro_de_preco/retificar_parcialmente_ata_de_registro_de_preco.html>`_

`Excluir Ata de Registro de Preço  <../ata_de_registro_de_preco/excluir_ata_de_registro_de_preco.html>`_

`Consultar Atas de Registro de Preço por Compra   <../ata_de_registro_de_preco/consultar_atas_de_registro_de_preco_por_compra.html>`_

`Consultar Ata de Registro de Preço   <../ata_de_registro_de_preco/consultar_ata_de_registro_de_preco.html>`_

`Consultar Contratos de Ata de Registro de Preço   <../ata_de_registro_de_preco/consultar_contratos_de_ata_de_registro_de_preco.html>`_

`Inserir Parte Envolvida na Ata de Registro de Preço   <../ata_de_registro_de_preco/inserir_parte_envolvida_na_ata_de_registro_de_preco.html>`_

`Excluir Parte Envolvida em Ata de Registro de Preço   <../ata_de_registro_de_preco/excluir_parte_envolvida_em_ata_de_registro_de_preco.html>`_

`Consultar Parte Envolvida em Ata de Registro de Preço   <../ata_de_registro_de_preco/consultar_parte_envolvida_em_ata_de_registro_de_preco.html>`_

`Consultar Partes Envolvidas em Ata de Registro de Preço   <../ata_de_registro_de_preco/consultar_partes_envolvidas_em_ata_de_registro_de_preco.html>`_

**Serviços de Contrato/Empenho**

`Inserir Contrato/Empenho   <../contrato_empenho/inserir_contratos_ou_empenhos.html>`_

`Retificar Contrato/Empenho   <../contrato_empenho/retificar_contrato_ou_empenho.html>`_

`Consultar Contrato/Empenho   <../contrato_empenho/consultar_contrato_ou_empenho.html>`_

`Consultar Contratos/Empenhos de uma Contratação   <../contrato_empenho/consultar_contratos_ou_empenhos_de_uma_contratacao.html>`_

Versão: 2.3.9
-------------

Data: 06/01/2026

.. note::
 Funcionalidades voltadas ao fortalecimento da segurança e à padronização da gestão de acessos, órgãos e plataformas. As alterações impactam órgãos e entidades da Administração Pública, bem como plataformas públicas e privadas integradas ao Portal.

**Recomendações Iniciais:**

`Cadastro Inicial dos Órgãos/Entidades e suas Unidades <../recomendacoes_iniciais/index.html>`_

**Serviços de Usuário:**

`Inserir Entes Autorizados para um Usuário  <../usuario/atualizar_usuario.html>`_

`Excluir Entes Autorizados de um Usuário  <../usuario/excluir_entes_autorizados_de_um_usuario.html>`_ 

**Gestão de Plataforma**

**Serviços de Órgão/Entidade**

`Incluir Unidade  <../orgao_entidade/incluir_unidade.html>`_  

`Atualizar Unidade  <../orgao_entidade/atualizar_unidade.html>`_   

`Requerimento Perfil Gestor  <../orgao_entidade/requerimento_perfil_gestor.html>`_  

**Gestão de Órgão e Entidade** 

`Incluir Gestor de Órgão e Entidade  <../orgao_entidade/gestao_de_orgao_e_entidade.html>`_ 

`Habilitar/Desabilitar plataforma  <../orgao_entidade/gestao_de_orgao_e_entidade.html>`_  

`Incluir Unidade Administrativa  <../orgao_entidade/gestao_de_orgao_e_entidade.html>`_  

`Editar, Ativar/Inativar Unidade Administrativa  <../orgao_entidade/gestao_de_orgao_e_entidade.html>`_  

Versão: 2.3.8
-------------

Data: 18/08/2025

.. note::
 Funcionalidades que possibilitam a gestão de entes públicos, com o objetivo de reforçar a segurança e a confiabilidade das informações divulgadas no PNCP.

**Recomendações Iniciais**

Cadastro Inicial dos Órgãos/Entidades e suas Unidades 

**Serviços de Usuário**

Atualizar Usuário 

Consultar Usuário por Id 

Consultar Usuário por Login ou por CPF/CNPJ 

Inserir Entes Autorizados para um Usuário 

Excluir Entes Autorizados de um Usuário 

**Serviços de Órgão/Entidade**

Incluir Órgão 

Atualizar Órgão 

Incluir Unidade 

Atualizar Unidade 

Versão: 2.3.7
-------------

Data: 13/06/2025

.. note::
   Funcionalidade que possibilita recepcionar e exibir o tipo de margem de preferência utilizado em contratações públicas, sendo elas Resolução CIIA-PAC e CICS, conforme a Lei nº 14.133/2021.

**Serviços de Contratação (Editais, Avisos e Atos)**

Inserir Contratação 

Inserir Itens a uma Contratação 

Retificar Item de uma Contratação 

Retificar parcialmente um Item de uma Contratação 

Consultar Itens de uma Contratação 

Consultar Item de uma Contratação

Versão: 2.3.6
-------------

Data: 13/05/2025

.. note::
 Funcionalidade que possibilita recepcionar e exibir a origem dos recursos utilizados em contratações públicas, sendo eles municipais, estaduais, federais ou oriundos de entidades internacionais, conforme a Lei nº 14.133/2021. 

**Fonte Orçamentária**

Consultar Fonte Orçamentária por Código 

Consultar Fontes Orçamentárias 

**Regra de conformidade entre Modalidade de Contratação e Fonte Orçamentária**

Consultar conformidade entre Modalidade de Contratação e Fonte Orçamentária por Código 

Consultar conformidade entre Modalidade de Contratação e Fonte Orçamentária 

**Incluir Unidade**

Atualizar Unidade 

**Inserir Contratação**

Consultar uma Contratação 

**Inserir Fonte Orçamentária da Contratação**

Excluir Fonte Orçamentária da Contratação 

Consultar Fonte Orçamentária da Contratação 

Consultar Todas as Fontes Orçamentárias da Contratação
