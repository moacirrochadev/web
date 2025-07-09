# NLW Agents

Este projeto foi desenvolvido durante um evento da **Rocketseat** e consiste em uma aplicação web moderna construída com React e TypeScript.

## 🚀 Tecnologias

- **React 19** - Biblioteca para construção da interface
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server
- **TailwindCSS 4** - Framework CSS utilitário
- **React Router DOM** - Roteamento client-side
- **TanStack Query** - Gerenciamento de estado assíncrono
- **Radix UI** - Primitivos de componentes acessíveis
- **Lucide React** - Ícones
- **Biome** - Linter e formatador de código

## 🏗️ Arquitetura

O projeto segue uma estrutura organizada:

```
src/
├── components/ui/     # Componentes de interface reutilizáveis
├── pages/            # Páginas da aplicação
├── lib/              # Utilitários e configurações
└── app.tsx           # Componente principal com roteamento
```

### Padrões utilizados:
- **Component composition** com Radix UI
- **Custom hooks** para lógica reutilizável
- **Path mapping** (`@/*`) para imports absolutos
- **Atomic design** para organização de componentes

## ⚙️ Setup e Configuração

### Pré-requisitos
- Node.js (versão 18+)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd nlw-agent/web
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação em `http://localhost:5173`

### Scripts disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção

## 🔧 Configurações

### TailwindCSS
O projeto utiliza TailwindCSS 4 com configuração via Vite plugin para melhor performance.

### TypeScript
Configurado com strict mode e path mapping para imports mais limpos.

### Biome
Formatador de código configurado com indentação por tabs e largura de linha de 120 caracteres.

---

Desenvolvido com ❤️ durante o NLW da Rocketseat
