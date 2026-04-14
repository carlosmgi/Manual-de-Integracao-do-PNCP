Recuperar Itens de Plano de Contratação por Número da Contratação
=================================================================

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

Serviço que permite recuperar a lista de itens pertencentes a um determinado Plano de Contratações Anual (PCA) de uma unidade em determinado ano, opcionalmente filtrando via Categoria do Item.

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~

.. list~table::
   :width: 100%
   :widths: 50 15
   :header~rows: 1

   * ~ Endpoint
     ~ Método HTTP
   * ~ /v1/orgaos/{cnpj}/pca/{ano}/{sequencial}/itens/contratacao
     ~ GET

Exemplo de Payload
~~~~~~~~~~~~~~~~~~

Não se aplica.

Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~

.. code~block:: bash

   curl ~X GET \
     "https://treina.pncp.gov.br/api/pncp/v1/orgaos/00394460000141/pca/2022/1/itens/contratacao" \
     ~H "accept: */*"

Dados de Entrada
~~~~~~~~~~~~~~~~

.. note::

  Alimentar o parâmetro {cnpj}, {ano} e {sequencial} na URL.

.. list~table::
   :width: 100%
   :widths: 5 25 15 10 45
   :header~rows: 1

   * ~ Id
     ~ Campo
     ~ Tipo
     ~ Obrigatório
     ~ Descrição
   * ~ 1
     ~ cnpj
     ~ Texto (14)
     ~ Sim
     ~ Cnpj do órgão a que a unidade
       administrativa do PCA está
       vinculada
   * ~ 2
     ~ ano
     ~ Inteiro
     ~ Sim
     ~ Ano do PCA
   * ~ 3
     ~ sequencial
     ~ Inteiro
     ~ Sim
     ~ Sequencial do PCA no PNCP;
       Número sequencial gerado no
       momento que o plano da
       unidade foi inserido no PNCP
   * ~ 3.1
     ~ numeroContratacao
     ~ Texto (14)
     ~ Sim
     ~ Número ou Código da
       Contratação Futura
   * ~ 4
     ~ categoria
     ~ Inteiro
     ~ Não
     ~ Código da tabela de domínio
       Categoria do Item do Plano de
       Contratações
   * ~ 5
     ~ pagina
     ~ Inteiro
     ~ Não
     ~ Número da página com os
       registros a serem recuperados
   * ~ 6
     ~ tamanhoPagina
     ~ Inteiro
     ~ Não
     ~ Quantidade de registros por
       página a serem recuperados

Dados de retorno
~~~~~~~~~~~~~~~~

.. list~table::
   :width: 100%
   :widths: 5 25 15 55
   :header~rows: 1

   * ~ Id
     ~ Campo
     ~ Tipo
     ~ Descrição
   * ~ 1
     ~ Lista
     ~ Lista
     ~ Itens de PCAs por Unidade
   * ~ 1.1
     ~ cnpj
     ~ Texto
     ~ CNPJ do Órgão
   * ~ 1.2
     ~ codigoUnidade
     ~ Texto
     ~ Código da Unidade Responsável
   * ~ 1.3
     ~ nomeUnidade
     ~ Texto
     ~ Nome da Unidade Responsável
   * ~ 1.4
     ~ anoPca
     ~ Inteiro
     ~ Ano do Plano de Contratações da Unidade
   * ~ 1.5
     ~ sequencialPca
     ~ Inteiro
     ~ Número sequencial do PCA da Unidade
       (gerado pelo PNCP)
   * ~ 1.6
     ~ numeroItem
     ~ Inteiro
     ~ Número do item no Plano (único e
       sequencial crescente)
   * ~ 1.7
     ~ nomeClassificacao
     ~ Texto
     ~ Nome da Indicação se Item é Material
       ou Serviço. Domínio: 1 ~ Material; 2 ~
       Serviço;
   * ~ 1.8
     ~ categoriaItemPcaid
     ~ Inteiro
     ~ Código da categoria do item. Consultar
       item 5.17 Categoria de Item para mais
       informações
   * ~ 1.9
     ~ nomeCatalogo
     ~ Texto
     ~ Código do Catálogo de itens utilizado
       como referência. Consultar item 5.23
       Catálogos para mais informações
   * ~ 1.10
     ~ classificacaoSuperiorCodigo
     ~ Texto (100)
     ~ Código da Classe do material ou Grupo
       do serviço conforme catálogo
   * ~ 1.11
     ~ classificacaoSuperiorNome
     ~ Texto (255)
     ~ Descrição da Classe do material ou
       Grupo do serviço conforme catálogo
   * ~ 1.12
     ~ pdmCodigo
     ~ Texto (100)
     ~ Código PDM referente ao material
       conforme o CNBS
   * ~ 1.13
     ~ pdmDescricao
     ~ Texto (255)
     ~ Descrição PDM referente ao material
       conforme o CNBS
   * ~ 1.14
     ~ codigoItem
     ~ Texto (100)
     ~ Código do Material ou Serviço
       conforme o catálogo utilizado
   * ~ 1.15
     ~ descricao
     ~ Texto (2048)
     ~ Descrição do material ou serviço
       conforme catálogo utilizado
   * ~ 1.16
     ~ unidadeFornecimento
     ~ Texto
     ~ Unidade de fornecimento
   * ~ 1.17
     ~ quantidade
     ~ Decimal
     ~ Quantidade do item do plano de
       contratação (maior ou igual a zero).
       Precisão de até 4 dígitos decimais;
       Ex: 10.0001;
   * ~ 1.18
     ~ valorUnitario
     ~ Decimal
     ~ Valor unitário do item (maior ou igual
       a zero). Precisão de até 4 dígitos
       decimais; Ex: 100.0001;
   * ~ 1.19
     ~ valorTotal
     ~ Decimal
     ~ Valor total do item (maior ou igual a
       zero). Precisão de até 4 dígitos
       decimais; Ex: 100.0001;
   * ~ 1.20
     ~ valorOrcamentoExercicio
     ~ Decimal
     ~ Valor orçamentário estimado para o
       exercício (maior ou igual a zero).
       Precisão de até 4 dígitos decimais;
       Ex: 100.0001;
   * ~ 1.21
     ~ dataDesejada
     ~ Data
     ~ Data desejada para a contratação
   * ~ 1.22
     ~ unidadeRequisitante
     ~ Texto
     ~ Nome da unidade requisitante
   * ~ 1.23
     ~ grupoContratacaoCodigo
     ~ Texto
     ~ Código da Contratação Futura
   * ~ 1.24
     ~ grupoContratacaoNome
     ~ Texto
     ~ Nome da Contratação Futura
   * ~ 1.25
     ~ dataPublicacaoPncp
     ~ Data
     ~ Data da publicação do item do plano no PNCP
   * ~ 1.26
     ~ dataInclusao
     ~ Data
     ~ Data da inclusão do registro do item do
       plano no PNCP
   * ~ 1.27
     ~ dataAtualizacao
     ~ Data
     ~ Data da última atualização do registro
       do item do plano
   * ~ 1.28
     ~ catalogoId
     ~ Inteiro
     ~ Código do catálogo de materiais e/ ou
       serviços utilizado. Domínio:
       1 ~ CNBS (Catálogo Nacional de Bens e Serviços);
       2 ~ Outros;
   * ~ 1.29
     ~ categoriaItemPcaNome
     ~ Inteiro
     ~ Nome da categoria do item conforme
       tabela de domínio Categoria do Item
       do Plano de Contratações
   * ~ 1.30
     ~ ClassificacaocatalogoId
     ~ Texto
     ~ Código da Indicação se Item é Material
       ou Serviço. Domínio:
       1 ~ Material; 2 ~ Serviço;

**Códigos de Retorno**
~~~~~~~~~~~~~~~~~~~~~~

.. list~table::
   :width: 100%
   :widths: 10 25 25
   :header~rows: 1

   * ~ Código HTTP
     ~ Mensagem
     ~ Tipo
   * ~ 201
     ~ Created
     ~ Sucesso
   * ~ 400
     ~ BadRequest
     ~ Erro
   * ~ 422
     ~ Unprocessable Entity
     ~ Erro
   * ~ 500
     ~ Internal Server Error
     ~ Erro

\
