# Etapa 1: Build de la aplicación
FROM node:22-alpine AS builder

# Establecer variables de entorno
ENV NODE_ENV=production
ENV VERSION=0.2.2

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias

RUN npm i --verbose --legacy-peer-deps --frozen-lockfile



# Copiar código fuente
COPY . .

# Construir la aplicación con la variable de versión
RUN REACT_APP_VERSION=$VERSION npm run build 

# Etapa 2: Servidor para archivos estáticos
FROM nginxinc/nginx-unprivileged



USER root

# Copiar configuración personalizada de nginx (opcional)
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar los archivos estáticos construidos
COPY --from=builder /app/build /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html ; chown -R 101:101 /usr/share/nginx/html 
RUN mkdir -p /run && \
    touch /run/nginx.pid && \
    chown -R 101:101 /run/nginx.pid

USER 101
# Exponer puerto 80
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
