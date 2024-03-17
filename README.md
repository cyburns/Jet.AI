# Jet.AI

 <p align="center">
  <img width="1000" src="./client/assets/jet-ai-read-me-img.png">
</p>

- **Clone** the repository to get started.

- First please cd in the client directory and install all dependencies.

```bash
cd client
```

```bash
npm install
```

- Next seed the SQLite database with the this command:

```bash
npm run prisma:seed
```

- In a separate terminal feel free to cd into client again and open up Prisma Studio to ensure all data is correctly seeded with this command:

```bash
npx prisma studio
```

- Run the dev server with this command:

```bash
npm run dev
```

- This will open http://localhost:3000/ where we can view the app.

- NOTE: You will need to create a .env file at the root of the client directory and add your OpenAI API key for the AI compare functionality to work.