# Galeria de Projeto de Software II

Tema Hugo para a galeria de projetos da disciplina, com gravuras anatômicas e páginas individuais.

Site: https://renanbpoy.github.io/galeria-ps2-2026/

## Editar conteúdo

- `content/_index.md`: título, semestre, descrição, textos da galeria e apresentações.
- `content/projetos/nome-do-projeto/index.md`: todas as informações de um projeto.
- Coloque capas e vídeos na mesma pasta do respectivo `index.md`.
- `draft: true` esconde o projeto; `draft: false` publica.
- `weight` define a ordem; os menores números vêm primeiro.

Para adicionar um projeto com Hugo instalado:

```sh
hugo new content --kind projetos projetos/nome-do-projeto/index.md
```

Preencha o arquivo e altere `draft` para `false` quando estiver pronto. Também é possível criar a pasta e copiar o conteúdo de `archetypes/projetos.md` para seu `index.md`.

O visual fica em `themes/galeria-ps2/`. Veja também `LEIA-ME.md` para exemplos dos campos e listas.

## Conferir no computador

Use Hugo 0.169.0 ou posterior:

```sh
hugo server
```

Abra http://localhost:1313. O botão temporário para ocultar os projetos aparece apenas nessa prévia local.

## Publicar no GitHub Pages

A configuração está em `.github/workflows/hugo-pages.yml`. O envio de alterações para `main` gera e publica o site automaticamente, usando o endereço identificado pelo GitHub Pages. Também é possível iniciar a publicação pela aba **Actions**.

O repositório deve usar **Settings → Pages → Source → GitHub Actions**.

As pastas `public/`, `resources/`, o executável local do Hugo, os comandos `.cmd` e a pasta de exemplo para cópia manual são ignorados pelo Git. A automação instala sua própria cópia do Hugo no Linux.
