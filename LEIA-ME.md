# Template PS2 - 2026

Cada projeto é editado em uma única pasta. O Hugo cria automaticamente o card da home e a página detalhada a partir do mesmo arquivo.

## Adicionar um projeto

1. Abra **CRIAR-PROJETO.cmd** com dois cliques.
2. Informe um nome curto, sem espaços ou acentos, como `atlas-vet`.
3. Abra `content/projetos/atlas-vet/index.md` em um editor de texto, como VS Code ou Bloco de Notas.
4. Preencha título, resumo, links, tecnologias, equipe e descrição completa.
5. Coloque capa e vídeo na mesma pasta e informe seus nomes nos campos `capa` e `video`.
6. Troque `draft: true` por `draft: false` para exibir o projeto na galeria.
7. Abra **INICIAR-PREVIA.cmd** e confira em http://localhost:1313.

Não precisa editar a home, cadastrar identificadores ou alterar arquivos JSON.

Também é possível copiar a pasta **MODELO-DE-PROJETO** para dentro de `content/projetos/`, renomeá-la e preencher seu `index.md`. Esse exemplo fica fora da área publicada; só será uma página depois de ser copiado para `content/projetos/` e ter `draft: false`.

## Organização

```text
content/
  _index.md                ← textos gerais da galeria
  projetos/
    atlas-vet/
      index.md             ← todas as informações deste projeto
      capa.jpg             ← opcional
      video.mp4            ← opcional
```

O nome da pasta define o endereço: `atlas-vet` aparece em `/projetos/atlas-vet/`. A ordem dos cards é definida por `weight`; números menores aparecem primeiro.

## O que preencher no index.md

A parte entre as linhas `---` contém os campos do projeto. A descrição completa é escrita abaixo da segunda linha `---`, em texto comum ou Markdown.

| Campo | O que informar |
| --- | --- |
| `title` | Nome do projeto; aparece no card e nos detalhes. |
| `resumo` | Resumo curto; aparece no card e no início dos detalhes. |
| `weight` | Número para ordenar os cards. |
| `draft` | `true` esconde o projeto; `false` permite sua publicação. |
| `capa` | Nome do arquivo da capa na mesma pasta, como `capa.jpg`. |
| `video` | Nome do arquivo de vídeo, como `video.mp4`. |
| `apresentacao` | Link completo para a apresentação. |
| `acesso` | Link completo para a aplicação. |
| `roteiro_testes` | Link completo para o roteiro de testes. |
| `tecnologias` | Lista de tecnologias utilizadas. |
| `repositorios` | Lista de repositórios, com `nome` e `url`. |
| `outros_links` | Documentação e outros materiais, com `nome` e `url`. |
| `equipe` | Lista de integrantes, professores e colaboradores. |

Campos opcionais podem ficar vazios: `""` para textos e `[]` para listas. Se uma seção não tiver informações, ela não aparece. Sem capa, o card usa uma ilustração genérica. Os dez projetos de exemplo usam as capas disponíveis na galeria de 2025, salvas em suas respectivas pastas. Jogos do Acervo usa a imagem provisória da própria fonte.

Exemplo de listas, substituindo os campos vazios do modelo:

```yaml
tecnologias:
  - "Front-end: React"
  - "Banco de dados: PostgreSQL"
repositorios:
  - nome: "Código do projeto"
    url: "https://github.com/organizacao/projeto"
outros_links:
  - nome: "Documento de visão"
    url: "https://example.org/documento"
equipe:
  - "Nome do estudante (SI / UFSM)"
  - "Nome da professora (UFSM)"
```

Mantenha os espaços antes dos itens das listas. Links devem começar com `https://` ou `http://`. O campo opcional `fonte`, presente nos exemplos antigos, indica de onde as informações vieram; pode ser removido dos projetos novos.

## Textos gerais e troca de semestre

Edite **content/_index.md** para alterar título da disciplina, semestre, descrição lateral, instituição, título e subtítulo da galeria e datas das apresentações. O semestre também aparece no cabeçalho das páginas de detalhes.

Os dez projetos de 2025 continuam como exemplos. Para preparar a turma nova:

1. Guarde uma cópia das pastas antigas fora de `content/`, se quiser preservá-las.
2. Remova de `content/projetos/` as pastas antigas ou use `draft: true` para escondê-las.
3. Crie as pastas dos projetos novos e atualize `content/_index.md`.
4. Gere e publique o site novamente.

Remover ou esconder uma pasta retira o projeto da home e da página publicada. A geração limpa os arquivos de saída antigos. Ao publicar, substitua a versão anterior pela nova pasta `public/` completa para não manter páginas antigas no servidor.

## Visualizar e gerar

- **INICIAR-PREVIA.cmd**: inicia a prévia em http://localhost:1313. Mantenha a janela aberta. Alterações salvas nos arquivos atualizam a prévia. Para encerrar, pressione Ctrl+C.
- **GERAR-SITE.cmd**: gera a versão final em `public/`. Não publica automaticamente. Não edite essa pasta: ela será recriada.

Se a porta 1313 estiver ocupada, encerre a janela da prévia antiga. A prévia normal também esconde os projetos com `draft: true`. Para revisar rascunhos pelo terminal, execute `.tools/hugo/hugo.exe server --buildDrafts` nesta pasta.

O Hugo Extended 0.169.0 para Windows de 64 bits está incluído em `.tools/hugo/`, com sua licença. Não é necessário instalar Node.js, npm, Go ou banco de dados. Em outro sistema, instale uma versão compatível do Hugo e use `hugo server` nesta pasta.

## Publicação e arquivos do tema

Antes de publicar, ajuste `baseURL` em **hugo.toml** para o endereço definitivo, incluindo a subpasta se houver. Por exemplo: `https://organizacao.github.io/2026/`.

A publicação automática está preparada em `.github/workflows/hugo-pages.yml`. Coloque o conteúdo desta pasta na raiz do repositório, use a branch `main` e selecione **GitHub Actions** em **Settings → Pages**. A automação instala o Hugo, identifica o endereço do site e publica a cada envio para `main`. A primeira publicação ainda precisa ser executada no GitHub; ela não foi realizada durante a preparação local. O endereço obtido pelo GitHub substitui `baseURL` durante essa geração.

O visual fica em `themes/galeria-ps2/`. Não é necessário mexer nessa pasta para atualizar os projetos. As gravuras compartilhadas ficam em `themes/galeria-ps2/static/images/`; capas e vídeos específicos ficam junto do `index.md` de cada projeto.

Não há painel de edição no site nem conteúdo vindo do armazenamento do navegador. A informação publicada vem dos arquivos Markdown. Os antigos `data/mural.json` e `data/projectDetails.json` foram removidos.

As referências das gravuras ficam no fim da home. Aplicações, apresentações, documentos, repositórios e fontes bibliográficas continuam sendo links externos.
