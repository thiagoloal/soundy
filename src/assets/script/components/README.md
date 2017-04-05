
![The Boilerplate](http://gitlab.corp.folha.com.br/uploads/project/avatar/2851/boilerplate-embed.jpg)

# Boilerplate Graphics Embed

O Boilerplate Graphics Embed é um chassis (ou clichê) para infográficos embutir (embed) nas reportagens da Folha.

Inspirado em vários boilerplates de imprensa estrangeira.

## Recursos

- [BrowserSync](http://www.browsersync.io/)
- Template usando [Pug](http://www.pugjs.org/)
- Gerenciador de tarefas [Gulp](http://gulpjs.com/)
- Compilar ES2015+ para navegadores antigos [Webpack](http://webpack.github.io)
- Pré-processador de CSS [Stylus](//stylus-lang.com)
- [Post CSS](https://github.com/seaneking/poststylus)
- [pym.js](http://blog.apps.npr.org/pym.js/) included by default for easy embedding in hostile CMS environments

## Estrutura de pastas e pastas

		.
		├── public																# Arquivos prontos para publicação
		|		├── titulo-do-projeto
		|		|		├── css
		|		|		├── js
		|		|		├── json
		|		|		├── images
		|		|		└── *.html
		├── docs																	# Documentação
		├── gulp																	# Tarefas do gulpfile
		├── src																		# Arquivos editáveis
		|		├── assets
		|		|		├── style
		|		|		|		├── components
		|		|		|		|		└── *.styl
		|		|		|		├── layout
		|		|		|		|		└── *.styl
		|		|		|		└── main-titulo-do-projeto.styl
		│   │   ├── json
		|		|		├── images
		|		|		|		├── components
		|		|		|		|		└── **galeria**
		|		|		|		|		|		└── *.{png, jpg, gif}
		|		|		└── script
		|		|		|		├── components
		|		|		|		|		└── *.js
		|		|		|		└── main-titulo-do-projeto.js
		|		└── templates
		|		|		├── data								# Conteúdo para as páginas
		|		|		|		└── *.json
		|		|		├── pages								# Páginas em html
		|		|		|		└── *.pug
		|		|		├── layouts							# Layouts a serem usados
		|		|		|		└── *.pug
		|		|		├── includes						# Páginas que serão inseridas no html, como topo, rodapé, head, etc
		|		|		|		└── *.pug
		├── tools												# Ferramentas e utilitários
		├── node_modules								# Vendors e componentes de terceiros
		├── meta.json										# Informações para as meta tags, descrition, keywords, image, title, etc
		├── data.json										# Conteúdo da página
		└── README.md										# Instruções e afins


## Começar

## Publicação

## Ativos

## Comando disponíveis

## TODO
