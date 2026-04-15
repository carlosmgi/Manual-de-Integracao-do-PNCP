Retificar Parcialmente um Contrato/Empenho
==========================================

.. container:: destaque-amarelo

	Serviço que permite retificar parcialmente um contrato/empenho. Além da justificativa, pelo menos um dos campos relacionados ao empenho deve ser enviado para retificação. Este serviço será acionado por qualquer plataforma digital credenciada.

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

Detalhes da Requisição
~~~~~~~~~~~~~~~~~~~~~~
		
.. Note::
		
	Nota: alimentar os parâmetros {cnpj}, {ano} e {sequencial} na URL.
		
.. list-table::
	:width: 100%
	:widths: 50 15
	:header-rows: 1
		
		   * - Endpoint
		     - Método HTTP
		   * - :destaque:`/v1/orgaos/{cnpj}/contratos/{ano}/{sequencial}`
		     - :destaque:`PATCH`
			 
		
Exemplo de Payload
~~~~~~~~~~~~~~~~~~
		
.. code-block:: json
	:linenos:
	:emphasize-lines: 1-35
		
				{
			  "cnpjCompra": "10000000000003",
			  "anoCompra": 2021,
			  "sequencialCompra": 1,
			  "sequencialAta": 1,
			  "frutoAdesao": true,
			  "temRemanejamento": false,
			  "tipoContratoId": 1,
			  "numeroContratoEmpenho": "1",
			  "processo": "1/2021",
			  "categoriaProcessoId": 2,
			  "receita": false,
			  "codigoUnidade": "1",
			  "cnpjOrgaoSubRogado": "",
			  "codigoUnidadeSubRogada": "",
			  "niFornecedor": "10000000000010",
			  "tipoPessoaFornecedor": "PJ",
			  "nomeRazaoSocialFornecedor": "Fornecedor do Teste I",
			  "niFornecedorSubContratado": "",
			  "tipoPessoaFornecedorSubContratado": "",
			  "nomeRazaoSocialFornecedorSubContratado": "",
			  "objetoContrato": "Contrato para exemplificar uso da API de retificação no PNCP.",
			  "informacaoComplementar": "",
			  "valorInicial": 10000.00,
			  "numeroParcelas": 2,
			  "valorParcela": 5000.00,
			  "valorGlobal": 10000.00,
			  "valorAcumulado": 10000.00,
			  "dataAssinatura": "2021-07-21",
			  "dataVigenciaInicio": "2021-07-22",
			  "dataVigenciaFim": "2021-07-23",
			  "justificativa": "motivo/justificativa para a retificação do contrato"
			  “identificadorCipi”: “111.11-011”,
			  “urlCipi”: ” https://cipi.economia.gov.br/111.11-011”
			}
		
		
Exemplo Requisição (cURL)
~~~~~~~~~~~~~~~~~~~~~~~~~
		
.. code-block:: bash
	:linenos:
	:emphasize-lines: 1,2
		
			curl -k -X  PATCH --header "Authorization: Bearer access_token" "${BASE_URL}/v1/orgaos/10000000000003/contratos/2021/1" -H "accept: */*" -H "Content-Type: application/json" --data "@/home/objeto.json"


Dados de entrada
~~~~~~~~~~~~~~~~

.. note::

   Alimentar os parâmetros {cnpj}, {ano} e {sequencial} na URL.

.. list-table::
   :width: 100%
   :widths: 5 25 15 10 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - :destaque:`1`
     - :destaque:`cnpj`
     - :destaque:`Texto (14)`
     - :destaque:`Sim`
     - :destaque:`Cnpj do órgão do contrato/empenho`
   * - :destaque:`2`
     - :destaque:`ano`
     - :destaque:`Inteiro`
     - :destaque:`Sim`
     - :destaque:`Ano do contrato/empenho`
   * - :destaque:`3`
     - :destaque:`sequencial`
     - :destaque:`Inteiro`
     - :destaque:`Sim`
     - :destaque:`Número sequencial do contrato/empenho (gerado pelo PNCP no momento da inclusão do mesmo)`
   * - :destaque:`4`
     - :destaque:`cnpjCompra`
     - :destaque:`Texto (14)`
     - :destaque:`Não`
     - :destaque:`Cnpj do órgão originário da contratação (proprietário da contratação ou alienação de bens)`
   * - :destaque:`5`
     - :destaque:`anoCompra`
     - :destaque:`Inteiro`
     - :destaque:`Não`
     - :destaque:`Ano da contratação`
   * - :destaque:`6`
     - :destaque:`sequencialCompra`
     - :destaque:`Inteiro`
     - :destaque:`Não`
     - :destaque:`Número sequencial da contratação (gerado pelo PNCP no momento da inclusão da contratação)`
   * - :destaque:`7`
     - :destaque:`tipoContratoId`
     - :destaque:`Inteiro`
     - :destaque:`Não`
     - :destaque:`Código da tabela de domínio Tipo de contrato`
   * - :destaque:`8`
     - :destaque:`numeroContratoEmpenho`
     - :destaque:`Texto (50)`
     - :destaque:`Não`
     - :destaque:`Número do contrato ou empenho com força de contrato`
   * - :destaque:`9`
     - :destaque:`processo`
     - :destaque:`Texto (50)`
     - :destaque:`Não`
     - :destaque:`Número do processo`
   * - :destaque:`10`
     - :destaque:`categoriaProcessoId`
     - :destaque:`Inteiro`
     - :destaque:`Não`
     - :destaque:`Código da tabela de domínio Categoria`
   * - :destaque:`11`
     - :destaque:`receita`
     - :destaque:`Boleano`
     - :destaque:`Não`
     - :destaque:`Receita ou despesa: True - Receita; False - Despesa`
   * - :destaque:`12`
     - :destaque:`codigoUnidade`
     - :destaque:`Texto (20)`
     - :destaque:`Não`
     - :destaque:`Código da unidade executora do órgão do contrato/empenho; a unidade deverá estar cadastrada para o órgão`
   * - :destaque:`13`
     - :destaque:`cnpjOrgaoSubRogado`
     - :destaque:`Texto (14)`
     - :destaque:`Não`
     - :destaque:`Cnpj do órgão sub-rogado; somente em caso de sub-rogação`
   * - :destaque:`14`
     - :destaque:`codigoUnidadeSubRogada`
     - :destaque:`Texto (20)`
     - :destaque:`Não`
     - :destaque:`Código da unidade executora do órgão sub-rogado do contrato/empenho; obrigatório caso ocorra sub-rogação do órgão`
   * - :destaque:`15`
     - :destaque:`niFornecedor`
     - :destaque:`Texto (30)`
     - :destaque:`Não`
     - :destaque:`Número de identificação do fornecedor/arrematante; CNPJ, CPF ou identificador de empresa estrangeira`
   * - :destaque:`16`
     - :destaque:`tipoPessoaFornecedor`
     - :destaque:`Texto (2)`
     - :destaque:`Não`
     - :destaque:`PJ - Pessoa jurídica; PF - Pessoa física; PE - Pessoa estrangeira`
   * - :destaque:`17`
     - :destaque:`nomeRazaoSocialFornecedor`
     - :destaque:`Texto (100)`
     - :destaque:`Não`
     - :destaque:`Nome ou razão social do fornecedor/arrematante`
   * - :destaque:`18`
     - :destaque:`niFornecedorSubContratado`
     - :destaque:`Texto (30)`
     - :destaque:`Não`
     - :destaque:`Número de identificação do fornecedor subcontratado; somente em caso de subcontratação; não se aplica a leilão`
   * - :destaque:`19`
     - :destaque:`tipoPessoaFornecedorSubContratado`
     - :destaque:`Texto (2)`
     - :destaque:`Não`
     - :destaque:`PJ - Pessoa jurídica; PF - Pessoa física; PE - Pessoa estrangeira; somente em caso de subcontratação; não se aplica a leilão`
   * - :destaque:`20`
     - :destaque:`nomeRazaoSocialFornecedorSubContratado`
     - :destaque:`Texto (100)`
     - :destaque:`Não`
     - :destaque:`Nome ou razão social do fornecedor subcontratado; somente em caso de subcontratação; não se aplica a leilão`
   * - :destaque:`21`
     - :destaque:`objetoContrato`
     - :destaque:`Texto (5120)`
     - :destaque:`Não`
     - :destaque:`Descrição do objeto do contrato/empenho`
   * - :destaque:`22`
     - :destaque:`informacaoComplementar`
     - :destaque:`Texto (5120)`
     - :destaque:`Não`
     - :destaque:`Informações complementares; se existir`
   * - :destaque:`23`
     - :destaque:`valorInicial`
     - :destaque:`Decimal`
     - :destaque:`Não`
     - :destaque:`Valor inicial do contrato/empenho; precisão de 4 dígitos decimais; ex: 100.0000`
   * - :destaque:`24`
     - :destaque:`numeroParcelas`
     - :destaque:`Inteiro`
     - :destaque:`Não`
     - :destaque:`Número de parcelas`
   * - :destaque:`25`
     - :destaque:`valorParcela`
     - :destaque:`Decimal`
     - :destaque:`Não`
     - :destaque:`Valor da parcela; precisão de 4 dígitos decimais; ex: 100.0000`
   * - :destaque:`26`
     - :destaque:`valorGlobal`
     - :destaque:`Decimal`
     - :destaque:`Não`
     - :destaque:`Valor global do contrato/empenho; precisão de 4 dígitos decimais; ex: 100.0000`
   * - :destaque:`27`
     - :destaque:`valorAcumulado`
     - :destaque:`Decimal`
     - :destaque:`Não`
     - :destaque:`Valor acumulado do contrato/empenho; precisão de 4 dígitos decimais; ex: 100.0000`
   * - :destaque:`28`
     - :destaque:`dataAssinatura`
     - :destaque:`Data`
     - :destaque:`Não`
     - :destaque:`Data de assinatura do contrato`
   * - :destaque:`29`
     - :destaque:`dataVigenciaInicio`
     - :destaque:`Data`
     - :destaque:`Não`
     - :destaque:`Data de início de vigência do contrato`
   * - :destaque:`30`
     - :destaque:`dataVigenciaFim`
     - :destaque:`Data`
     - :destaque:`Não`
     - :destaque:`Data do término da vigência do contrato`
   * - :destaque:`31`
     - :destaque:`justificativa`
     - :destaque:`Texto (255)`
     - :destaque:`Sim`
     - :destaque:`Motivo/justificativa para a retificação dos atributos do contrato/empenho`
   * - :destaque:`32`
     - :destaque:`identificadorCipi`
     - :destaque:`String (512)`
     - :destaque:`Não`
     - :destaque:`Identificador do contrato no Cadastro Integrado de Projetos de Investimento`
   * - :destaque:`33`
     - :destaque:`urlCipi`
     - :destaque:`String (8 a 14)`
     - :destaque:`Não`
     - :destaque:`Url com informações do contrato no sistema de Cadastro Integrado de Projetos de Investimento`
   * - :destaque:`34`
     - :destaque:`sequencialAta`
     - :destaque:`Inteiro`
     - :destaque:`Não`
     - :destaque:`Número sequencial da ata de registro de preço`
   * - :destaque:`35`
     - :destaque:`frutoAdesao`
     - :destaque:`Booleano`
     - :destaque:`Não`
     - :destaque:`Indicador se o contrato/empenho é fruto de adesão a uma ata (False-Não / True-Sim)`
   * - :destaque:`36`
     - :destaque:`temRemanejamento`
     - :destaque:`Boleano`
     - :destaque:`Não`
     - :destaque:`O remanejamento de quantidade em atas de registro de preços (SRP) é a transferência de saldos de itens entre órgãos participantes ou para não participantes (caronas), permitindo otimizar a compra. Deve ser autorizado pelo órgão gerenciador, respeitando limites legais e a anuência do fornecedor para garantir o equilíbrio econômico-financeiro. Indicador de Remanejamento (False-Não / True-Sim)`

.. list-table::
   :width: 100%
   :widths: 5 25 15 10 25
   :header-rows: 1

   * - Id
     - Campo
     - Tipo
     - Obrigatório
     - Descrição
   * - :destaque:`1`
     - :destaque:`location`
     - :destaque:`Texto (255)`
     - :destaque:`Sim`
     - :destaque:`Endereço http do recurso retificado`

Códigos de Retorno
~~~~~~~~~~~~~~~~~~

.. list-table::
   :width: 100%
   :widths: 10 25 20
   :header-rows: 1

   * - Código HTTP
     - `Mensagem
     - Tipo
   * - :destaque:`201`
     - :destaque:`Created`
     - :destaque:`Sucesso`
   * - :destaque:`400`
     - :destaque:`BadRequest`
     - :destaque:`Erro`
   * - :destaque:`422`
     - :destaque:`Unprocessable Entity`
     - :destaque:`Erro`
   * - :destaque:`500`
     - :destaque:`Internal Server Error`
     - :destaque:`Erro`
