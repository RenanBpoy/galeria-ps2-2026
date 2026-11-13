# Galeria de Projeto de Software II

Tema Hugo para a galeria de projetos da disciplina, com gravuras anatômicas e páginas individuais.

Site: https://renanbpoy.github.io/galeria-ps2-2026/

## Adicionar ou alterar projetos

- **Adicionar:** crie `content/projetos/nome-do-projeto/index.md`, copie o modelo de `archetypes/projetos.md` e preencha os dados e a descrição.
- **Alterar:** edite o `index.md` na pasta do projeto existente.
- Coloque capa, vídeo e prévia do vídeo na mesma pasta e informe seus nomes em `capa`, `video` e `previa_video`. Esses arquivos são opcionais.
- Use `draft: false` para exibir e `draft: true` para esconder. O campo `weight` define a ordem: menores números primeiro.

Salve as alterações em um commit na branch `main`. O GitHub Pages atualiza automaticamente; o card e a página são gerados sem editar a home.

- **Página inicial:** edite [content/_index.md](content/_index.md).
- **Página Sobre:** edite o conteúdo abaixo do segundo `---` em [content/sobre/index.md](content/sobre/index.md). O GIF fica na mesma pasta.

O visual fica em `themes/galeria-ps2/`.
