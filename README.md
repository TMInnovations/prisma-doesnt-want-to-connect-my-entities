# prisma-doesnt-want-to-connect-my-entities
Problem: prisma doesn't connect entities

How to reproduce:
1. Pull this repo
```
git clone https://github.com/TMInnovations/prisma-doesnt-want-to-connect-my-entities.git
```
2. Spin up local db
```
docker run -e POSTGRES_PASSWORD=admin -e POSTGRES_USER=admin -e POSTGRES_DB=admin -p 5432:5432 postgres
```
3. Install deps and push db
```
npm install
npx prisma db push
```
4. Run Test
```
npm test
```
