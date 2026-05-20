'''dockerfile
 # Temel imaj olarak hafif bir Nginx alpine sürümü kullanıyoruz
FROM nginx:alpine

# Nginx'in varsayılan yayınlama klasörüne çalışma alanımızdaki dosyaları kopyalıyoruz
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Nginx standart olarak 80 portunda çalışır
EXPOSE 80

# Konteyner başlatıldığında Nginx'i çalıştır
CMD ["nginx", "-g", "daemon off;"]
