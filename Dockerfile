# Dockerfile
FROM node:16

# Criar diretório de trabalho
WORKDIR /usr/src/app

# Copiar arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o código para o contêiner
COPY . .

# Expor a porta da aplicação
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
