# TasksApp

Uma aplicação web moderna para gerenciamento de tarefas construída com Angular. O TasksApp permite que você crie, organize e acompanhe suas tarefas de forma simples e intuitiva.

## 📋 Funcionalidades

### ✅ Gestão de Tarefas
- **Criar tarefas**: Adicione novas tarefas com título, descrição e data de vencimento
- **Editar tarefas**: Modifique o conteúdo, detalhes e prazos das suas tarefas
- **Marcar como concluída**: Finalize tarefas com um clique
- **Desfazer conclusão**: Reabra tarefas completadas quando necessário
- **Visualizar detalhes**: Acesse informações completas de cada tarefa

### 📂 Organização
- **Página inicial (Home)**: Lista todas as tarefas ativas aguardando conclusão
- **Página de concluídas**: Visualize todas as tarefas finalizadas
- **Navegação por rota**: Acesso direto aos detalhes de qualquer tarefa pela URL

### 💾 Armazenamento
- **LocalStorage**: Suas tarefas são salvas automaticamente no navegador
- **Persistência de dados**: As tarefas permanecem mesmo após fechar a aplicação
- **Dados de exemplo**: A app inicia com tarefas de exemplo em português

## 🎯 Como Funciona

### Arquitetura

O TasksApp é construído com uma arquitetura em componentes Angular:

```
src/app/
├── services/          # Lógica de negócio
│   └── task.service.ts   # Serviço de gerenciamento de tarefas
├── pages/             # Páginas principais
│   ├── home/          # Lista de tarefas ativas
│   ├── task-detail/   # Detalhes e edição de uma tarefa
│   └── completed/     # Lista de tarefas concluídas
├── models/            # Tipos de dados
│   └── task.model.ts  # Interface da tarefa
└── app-routing.module.ts  # Rotas da aplicação
```

### Fluxo de Funcionamento

1. **Página Inicial**: Ao abrir a aplicação, você vê todas as tarefas ativas
2. **Criar Tarefa**: Preencha o título, descrição (opcional) e data de vencimento (opcional) e clique em "Criar"
3. **Visualizar Detalhes**: Clique em uma tarefa para ver seus detalhes completos
4. **Editar Tarefa**: Na página de detalhes, clique em "Editar" para modificar as informações
5. **Marcar Concluída**: Use a opção de marcar como concluída para finalizar uma tarefa
6. **Ver Concluídas**: Acesse a página "Concluídas" para visualizar todas as tarefas finalizadas

### Tecnologias Utilizadas

- **Angular 15.2.0**: Framework web moderno
- **TypeScript 4.9.4**: Linguagem tipada para JavaScript
- **RxJS 7.8.0**: Programação reativa
- **TailwindCSS 3.4.19**: Estilos CSS utilitários
- **SCSS 31.1%**: Pré-processador CSS para estilos avançados
- **UUID**: Geração de IDs únicos para tarefas

## 🚀 Como Usar

### Instalação

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado, depois:

```bash
# Instale as dependências
npm install
```

### Servidor de desenvolvimento

Execute `npm start` ou `ng serve` para iniciar o servidor de desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

### Code Scaffolding

Execute `ng generate component nome-do-componente` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

### Executando testes unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

### Executando testes end-to-end

Execute `ng e2e` para executar os testes end-to-end com a plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente recursos de testes end-to-end.

## 📊 Composição do Projeto

- **HTML**: 37.5% - Estrutura da aplicação
- **SCSS**: 31.1% - Estilos e responsividade
- **TypeScript**: 24.6% - Lógica da aplicação
- **JavaScript**: 6.8% - Dependências e configurações

## 🔗 Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI use `ng help` ou visite a página [Angular CLI Overview and Command Reference](https://angular.io/cli).

## 📝 Licença

Este projeto está disponível para uso livre e aberto. Sinta-se à vontade para modificar e melhorar conforme necessário.
