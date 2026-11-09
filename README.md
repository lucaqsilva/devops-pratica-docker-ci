# DevOps Prática - Docker & CI

Aplicação simples em Node.js com Docker e CI via GitHub Actions.

## Como executar localmente (Docker)

1. **Construir a imagem:**
   ```bash
   docker build -t devops-app .
   ```

2. **Executar o contêiner:**
   ```bash
   docker run -p 3000:3000 devops-app
   ```
   Acesse: http://localhost:3000

## Registro de CI (Prática 4)

- **O que foi testado:** A resposta da aplicação Node.js através de testes unitários com Jest e supertest após o build da imagem Docker.
- **Causa da falha:** Introdução proposital de uma string incorreta (`Erro Proposital`) na resposta JSON da rota principal.
- **Evidências:**
  - [Execução com Erro](https://github.com/lucaqsilva/devops-pratica-docker-ci/actions) (Veja a última falha)
  - [Execução com Sucesso](https://github.com/lucaqsilva/devops-pratica-docker-ci/actions) (Após a correção)


triggering ci
