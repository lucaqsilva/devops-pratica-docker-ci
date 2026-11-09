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

## Comandos de teste
```bash
npm test
```

