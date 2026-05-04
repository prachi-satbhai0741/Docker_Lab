# 08 — CI/CD GitHub Actions

## What I Learned
- GitHub Actions automates build and push on every git push
- Secrets keep credentials safe — never hardcode tokens in workflow files
- Docker layer caching makes CI builds dramatically faster
- PRs build but don't push — only merged code gets deployed

## Files Created
- `.github/workflows/docker-build-push.yml` — full CI/CD pipeline
- `app.js` — Node.js Express app
- `package.json` — dependencies
- `Dockerfile` — image build instructions

## Workflow Steps
1. Checkout code
2. Set up Docker Buildx
3. Login to Docker Hub using secrets
4. Extract metadata for smart tagging
5. Build and push image

## Commands Used

### Trigger Pipeline
```bash
git add .
git commit -m "feat: add cicd pipeline"
git push origin main
```

### Check Pipeline
Go to GitHub repo → Actions tab → watch it run live

## Verification
- GitHub Actions tab shows green checkmarks
- Docker Hub shows new image tag after push
- `docker pull prachisatbhai0741/my-node-app:latest` works

## Key Concepts
| Term | My Understanding |
|------|-----------------|
| GitHub Actions | Event-driven automation built into GitHub |
| Secrets | Encrypted credentials — never visible in logs |
| Docker Buildx | Advanced builder with cache support |
| cache-from: gha | Reuses cached layers between CI runs |


