# Configuration file for the Sphinx documentation builder.

# -- Project information

project = 'Manual de Integração do PNCP'
copyright = '2026, Ministério da Gestão e Inovação em Serviços Públicos'
author = 'COPNCP/CGGES/DELOG/SEGES/MGI'

release = '2.3.10'
version = '2.3.10'

# -- General configuration

extensions = [
    'sphinx.ext.duration',
    'sphinx.ext.doctest',
    'sphinx.ext.autodoc',
    'sphinx.ext.autosummary',
    'sphinx.ext.intersphinx',
]

intersphinx_mapping = {
    'python': ('https://docs.python.org/3/', None),
    'sphinx': ('https://www.sphinx-doc.org/en/master/', None),
}
intersphinx_disabled_domains = ['std']

templates_path = ['_templates']

# -- Options for HTML output

html_theme = 'sphinx_rtd_theme'

# -- Options for EPUB output
epub_show_urls = 'footnote'
