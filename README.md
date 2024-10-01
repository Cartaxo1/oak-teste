# Oak-Teste

Este projeto é uma aplicação Angular utilizando PrimeNG, PrimeFlex e Supabase para o backend, com deploy na Vercel. O objetivo é fornecer uma interface ágil para gerenciamento de produtos, aproveitando a flexibilidade do Supabase para armazenamento de dados e APIs.

## Projeto em produção
[Oak Teste](https://oak-teste.vercel.app/)

## Tecnologias Utilizadas

- **Angular**: Framework para desenvolvimento de aplicações web SPA.
- **PrimeNG**: Biblioteca de componentes UI para Angular.
- **PrimeFlex**: Framework CSS responsivo e utilitário.
- **Supabase**: Backend para a gestão dos dados via APIs e tabelas SQL.
- **Vercel**: Plataforma de deploy para aplicações frontend.

## Arquitetura

![img](https://media.discordapp.net/attachments/1020424507875401739/1290765591019520212/image.png?ex=66fda6a2&is=66fc5522&hm=ba4999121f39f4942f08418174f723ecf99a6a63e8d8b8bc9911966e1744aabc&=&format=webp&quality=lossless&width=1440&height=668)

## Funcionalidades

- **Tabela de Produtos**: Criação, leitura e listagem de produtos a partir de uma tabela no Supabase.

A tabela `Products` contém os seguintes campos:

- `name` (string): Nome do produto
- `description` (string): Descrição do produto
- `value` (number): Valor do produto
- `available` (boolean): Disponibilidade do produto

## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- Node.js (versão 14.x ou superior)
- Angular CLI
- Supabase CLI

## Instalação

Siga as etapas abaixo para configurar e executar o projeto:

1. Navegue até a pasta onde deseja clonar o repositório:
-` cd pasta-do-projeto`
2. Clone o repositório:
-` git clone https://github.com/Cartaxo1/oak-teste.git`
3. Instale as dependências do projeto: 
-` npm install`
4. Inicie o servidor de desenvolvimento:
-` ng serve`

