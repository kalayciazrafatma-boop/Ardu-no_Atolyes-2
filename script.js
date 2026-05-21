let selectedMaterials = [];

// GitHub Bağlantıların
const GITHUB_PAGES_URL = "https://kalayciazrafatma-boop.github.io/Ardu-no_atolyes-/";
const GITHUB_API_URL = "https://api.github.com/repos/kalayciazrafatma-boop/Ardu-no_atolyes-/contents/";

// Yeni DOM Element İsimleri
const materialsListContainer = document.getElementById('materials-list');
const apiStatus = document.getElementById('api-status');
const selectedItemsList = document.getElementById('selected-items-list');

// Parça Sözlüğü (Değişmedi)
const componentDictionary = {
    "24v_role": { name: "24V Röle Modülü", desc: "Yüksek voltajlı (AC/DC) cihazları güvenli anahtarlar." },
    "9v_pil": { name: "9V Pil", desc: "Proje için taşınabilir güç kaynağı." },
    "arduino_uno": { name: "Arduino Uno R3", desc: "Sistemin beyni, mikrodenetleyici kartı." },
    "ates_sensoru": { name: "Alev Sensörü", desc: "Yangın ve kızılötesi ışığı algılar." },
    "breadboard": { name: "Breadboard", desc: "Lehimsiz devre kurma test tahtası." },
    "buton": { name: "Buton", desc: "Basit elektriksel anahtar." },
    "buzzer": { name: "Buzzer", desc: "Sesli uyarı ve bip tonları üretir." },
    "cizgi_sensoru": { name: "Çizgi Sensörü", desc: "Zemindeki renk farkını algılar (Siyah/Beyaz)." },
    "dijital_amplifikator": { name: "Amplifikatör", desc: "Ses sinyallerini yükseltir." },
    "dip_switch": { name: "DIP Switch", desc: "Çoklu manuel ayar anahtarı." },
    "direnc": { name: "Direnç Paketi", desc: "Elektrik akımını sınırlar." },
    "dtmf_modul": { name: "DTMF Modülü", desc: "Telefon tuş seslerini algılar." },
    "esp32_cam": { name: "ESP32-CAM", desc: "Kameralı IoT geliştirme kartı." },
    "gaz_sensoru": { name: "Gaz Sensörü", desc: "Havadaki duman ve sızıntıyı tespit eder." },
    "gunes_paneli": { name: "Güneş Paneli", desc: "Işığı elektriğe dönüştürür." },
    "havya": { name: "Havya", desc: "Lehimleme yapmak için ısıtıcı cihaz." },
    "hc06_bluetooth": { name: "HC-06 Bluetooth", desc: "Kablosuz haberleşme modülü." },
    "ir_kumanda_kit": { name: "IR Kumanda Kiti", desc: "Kızılötesi uzaktan kumanda seti." },
    "joystick": { name: "Joystick", desc: "Yön ve hareket kontrol çubuğu." },
    "jumper": { name: "Jumper Kablolar", desc: "Devre bağlantı kablosu seti." },
    "kalici_buton": { name: "Kalıcı Buton", desc: "Kilitli anahtar mekanizması." },
    "keypad": { name: "Keypad", desc: "Şifre ve veri giriş tuş takımı." },
    "kondansator": { name: "Kondansatör", desc: "Enerji depolar ve filtreler." },
    "krokodil": { name: "Krokodil Kablo", desc: "Kıskaçı test kablosu." },
    "kumpas": { name: "Kumpas", desc: "Hassas ölçüm aleti." },
    "l293d": { name: "L293D Çip", desc: "Motor sürücü entegresi." },
    "l298n": { name: "L298N Sürücü", desc: "Çift motor kontrol kartı." },
    "lcd_ekran": { name: "LCD Ekran", desc: "Sensör verilerini gösteren panel." },
    "lehim_pastasi": { name: "Lehim Pastası", desc: "Lehimin tutmasını sağlar." },
    "lehim_pompasi": { name: "Lehim Pompası", desc: "Eski lehimleri temizler." },
    "lehim_standi": { name: "Lehim Standı", desc: "Sıcak havya tutucu." },
    "lehim_teli": { name: "Lehim Teli", desc: "Lehimleme metal teli." },
    "makaron": { name: "Makaron", desc: "Isı ile daralan yalıtım kılıfı." },
    "mesafe_sensoru": { name: "Mesafe Sensörü", desc: "Ultrasonik mesafe ölçer." },
    "mikrofon_modulu": { name: "Mikrofon Modülü", desc: "Ses şiddetini algılar." },
    "multimetre": { name: "Multimetre", desc: "Temel test ve ölçüm cihazı." },
    "nabiz_sensoru": { name: "Nabız Sensörü", desc: "Kalp atış hızını ölçer." },
    "nem_kontrol": { name: "Nem Sensörü", desc: "Nem ve sıcaklığı takip eder." },
    "piezo_buzzer": { name: "Piezo Buzzer", desc: "Ses üreten komponent." },
    "pil_yuvasi": { name: "Pil Yuvası", desc: "Pil sabitleyici." },
    "pir_sensor": { name: "PIR Sensörü", desc: "Canlı hareketini algılar." },
    "potansiyometre": { name: "Potansiyometre", desc: "Döndürülebilir ayarlı direnç." },
    "reduktorlu_motor": { name: "DC Motor", desc: "Tekerlek çeviren motor." },
    "regulator": { name: "Regülatör", desc: "Voltajı sabitler." },
    "rfid_kit": { name: "RFID Okuyucu Kit", desc: "Kartlı kimlik okuma sistemi." },
    "rtc_modul": { name: "RTC Saat Modülü", desc: "Zamanı ve tarihi hafızasında tutar." },
    "sarhos_tekerlek": { name: "Sarhoş Tekerlek", desc: "Her yöne dönebilen teker." },
    "servo": { name: "Servo Motor", desc: "0-180 derece açılı motor." },
    "ses_sensoru": { name: "Ses Sensörü", desc: "Anlık ses şiddetini yakalar." },
    "sigorta": { name: "Sigorta", desc: "Yüksek akım koruyucu." },
    "su_pompasi": { name: "Su Pompası", desc: "Mini su basma motoru." },
    "tact_buton": { name: "Tact Buton", desc: "Mikro çıtçıt buton." },
    "touch_pad": { name: "Dokunmatik Sensör", desc: "Dokunuşu algılayan anahtar." },
    "tp4056": { name: "TP4056 Şarj", desc: "Lityum pil şarj devresi." },
    "transistor": { name: "Transistör", desc: "Anahtarlama komponenti." },
    "usb": { name: "USB Kablosu", desc: "Kod yükleme kablosu." },
    "yagmur_sensoru": { name: "Yağmur Sensörü", desc: "Sıvı temasını ölçer." }
};

document.addEventListener('DOMContentLoaded', fetchMaterialsFromGitHub);

function fetchMaterialsFromGitHub() {
    apiStatus.textContent = "> GitHub taranıyor...";
    
    fetch(GITHUB_API_URL)
        .then(response => {
            if (!response.ok) throw new Error("API hatası.");
            return response.json();
        })
        .then(files => {
            apiStatus.textContent = "> Sistem Aktif. Envanter masada.";
            
            const imageFiles = files.filter(file => {
                const ext = file.name.split('.').pop().toLowerCase();
                return ['jpg', 'png', 'jpeg'].includes(ext);
            });
            
            const structuredData = imageFiles.map((file, index) => {
                const cleanName = file.name.split('.').shift().toLowerCase().trim();
                const details = componentDictionary[cleanName] || {
                    name: cleanName.toUpperCase().replace(/_/g, ' '),
                    desc: "Atölye bileşeni."
                };
                return {
                    id: "item_" + index,
                    name: details.name,
                    desc: details.desc,
                    image: file.name 
                };
            });
            renderWorkbench(structuredData);
        })
        .catch(error => {
            apiStatus.textContent = "> HATA: İnternet hatası.";
            materialsListContainer.innerHTML = '<div class="loading">Veriler çekilemedi.</div>';
        });
}

// !!! TAMAMEN DEĞİŞTİ !!!
function renderWorkbench(data) {
    materialsListContainer.innerHTML = ''; 
    
    data.forEach(item => {
        // Yeni 'material-row' yapısı (kutular yerine satırlar)
        const row = document.createElement('div');
        row.className = 'material-row';
        const fullImageUrl = GITHUB_PAGES_URL + item.image;
        
        row.innerHTML = `
            <img class="material-image" src="${fullImageUrl}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80?text=Görsel'">
            <div class="material-info">
                <div class="material-name">${item.name}</div>
                <div class="material-desc">${item.desc}</div>
            </div>
            <button class="add-to-project-btn">Projeye Ekle</button>
        `;
        
        // Satıra tıklayınca ekle
        row.addEventListener('click', function(e) { 
            // Eğer butona tıklandıysa işlemi addMaterial'a devret
            if(e.target.classList.contains('add-to-project-btn') || e.target.parentElement.classList.contains('add-to-project-btn')) {
                addMaterial(item, this, fullImageUrl); 
            }
        });
        
        materialsListContainer.appendChild(row);
    });
}

function addMaterial(item, rowElement, fullImageUrl) {
    const exists = selectedMaterials.find(m => m.id === item.id);
    
    if (!exists) {
        const itemWithUrl = { ...item, fullUrl: fullImageUrl };
        selectedMaterials.push(itemWithUrl);
        updateSidebar();
        
        // Başarı efekti (Satırı yeşil parlat)
        rowElement.style.borderColor = '#4ade80';
        rowElement.style.boxShadow = '0 0 15px rgba(74, 222, 128, 0.4)';
        setTimeout(() => {
            rowElement.style.borderColor = 'rgba(255, 255, 255, 0.1)'; 
            rowElement.style.boxShadow = '';
        }, 500);

    } else {
        // Hata efekti (Satırı kırmızı salla)
        rowElement.style.borderColor = '#ef4444';
        rowElement.style.transform = 'translateX(5px)';
        setTimeout(() => rowElement.style.transform = 'translateX(-5px)', 100);
        setTimeout(() => {
            rowElement.style.transform = '';
            rowElement.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }, 300);
    }
}

function updateSidebar() {
    selectedItemsList.innerHTML = ''; 
    
    if (selectedMaterials.length === 0) {
        selectedItemsList.innerHTML = '<li class="empty-msg">Proje tahtası boş. Masadan malzeme seçin.</li>';
        return;
    }
    
    selectedMaterials.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="project-item-content">
                <img src="${item.fullUrl}" class="project-item-img" onerror="this.style.display='none'">
                <span>${item.name}</span>
                <button class="remove-btn" onclick="removeMaterial('${item.id}')">X</button>
            </div>
        `;
        selectedItemsList.appendChild(li);
    });
}

window.removeMaterial = function(id) {
    selectedMaterials = selectedMaterials.filter(item => item.id !== id);
    updateSidebar();
};
