# Ardu-no_Atolyes-2
# Mega Arduino Atölyesi Seti - Web Arayüzü
Bu proje, elektronik donanımların ve sensörlerin seçilerek sağ taraftaki proje geliştirme tahtasına eklendiği, stateful yapıda çalışan interaktif bir web simülasyonudur. Malzeme görselleri doğrudan GitHub deposundan çekilmektedir.

## Teknolojiler
* HTML5
* CSS3 (Grid, Flexbox & Glassmorphism)
* Vanilla JavaScript (ES6)
* Docker & Nginx

## Kurulum ve Çalıştırma

Projeyi standart bir tarayıcıda `index.html` dosyasını açarak çalıştırabilirsiniz. Eğer Docker üzerinden ayağa kaldırmak isterseniz:
1. İmajı derleyin:
   ```bash
   docker build -t mega-atolye-web .
   docker run -d -p 8080:80 mega-atolye-web
