# Node.js CI/CD Pipeline Demo

This project demonstrates a complete CI/CD pipeline using GitHub Actions for a Node.js application.

## Features

- ✅ Automated testing with Jest
- ✅ Docker containerization
- ✅ Security scanning with Trivy
- ✅ Automated deployment to Docker Hub
- ✅ Multi-stage pipeline

## Pipeline Stages

1. **Test**: Runs unit tests and generates coverage reports
2. **Build**: Creates Docker image
3. **Security Scan**: Checks for vulnerabilities
4. **Deploy**: Pushes to Docker Hub and deploys

## Setup Instructions

### Prerequisites

- Docker Hub account
- GitHub repository secrets configured:
  - `DOCKERHUB_USERNAME`
  - `DOCKERHUB_TOKEN`

### Local Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Start development server
npm run dev

# Build Docker image
docker build -t nodejs-ci-cd-app .
