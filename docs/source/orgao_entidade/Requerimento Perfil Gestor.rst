Requerimento Perfil Gestor
==========================

A funcionalidade **“Requerimento Perfil Gestor”**, disponível na **Área de Trabalho do PNCP**,  é utilizada para o cadastro do primeiro Gestor do órgão ou entidade no PNCP. 
O acesso à funcionalidade é realizado pelo endereço: `https://pncp.gov.br/app/area-de-trabalho. <https://pncp.gov.br/app/area-de-trabalho>`_  
O responsável pelo órgão acessa o PNCP, realiza a autenticação com login gov.br (nível prata) e preenche o requerimento.
Junto com o requerimento, deverá ser anexado documento comprobatório de sua vinculação ao órgão (portaria de nomeação, por exemplo). Será realizada a validação 
pelo Ministério da Gestão e da Inovação em Serviços Públicos (MGI) e habilitação do gestor. 
Com essa habilitação, o gestor se torna o responsável por fazer a gestão de acesso de outros agentes públicos de seu órgão, autorizar plataformas e gerenciar unidades administrativas.  

\

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

.. figure:: ../../_static/img/Requerimento_perfil_gestor_1.jpg
	:width: 80%
	:align: center
	:alt: Requerimento Perfil Gestor (dados do solicitante)

\

.. figure:: ../../_static/img/Requerimento_perfil_gestor_2.jpg
	:width: 80%
	:align: center
	:alt: Requerimento Perfil Gestor (dados do órgão/entidade)

\

.. figure:: ../../_static/img/Requerimento_perfil_gestor_3.jpg
	:width: 80%
	:align: center
	:alt: Requerimento Perfil Gestor (documentação comprobatória)

\
