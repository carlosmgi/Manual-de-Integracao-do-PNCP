# Configuration file for the Sphinx documentation builder.

# -- Permite destacar as linhas das tabelas via .CSS
from docutils import nodes
from docutils.parsers.rst import roles

def destaque_role(name, rawtext, text, lineno, inliner, options={}, content=[]):
    node = nodes.inline(text, text, classes=['linha-destaque'])
    return [node], []

roles.register_local_role('destaque', destaque_role)

#-- Alterar a versão do manual em todas as páginas
version = "2.5"

rst_epilog = f"""
.. |versao| replace:: {version}
"""

# -- Project information
project = 'Manual de Integração do PNCP'
copyright = '2026, Ministério da Gestão e Inovação em Serviços Públicos - MGI'
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

# -- Permite destacar as linhas "kbd" das tabelas via .CSS
html_static_path = ['_static']
html_css_files = ['custom.css',]

# -- Options for HTML output
html_theme = 'sphinx_rtd_theme'

# -- Options for EPUB output
epub_show_urls = 'footnote'

# -- Options for PDF output
latex_documents = [
    ('index', 'project.tex', 'Project Documentation',
     'Author', 'manual'),
]
