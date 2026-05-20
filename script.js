let selectedMaterials = [];

// GitHub'daki resimlerin doğrudan (raw) çekileceği ana URL
const GITHUB_BASE_URL = "https://kalayciazrafatma-boop.github.io/Ardu-no_atolyes-/";

const materialsGrid = document.getElementById('materials-grid');
const apiStatus = document.getElementById('api-status');
const selectedItemsList = document.getElementById('selected-items-list');

document.addEventListener('DOMContentLoaded', () => {
    fetchMaterials();
});

function fetchMaterials() {
    apiStatus.textContent = "> GitHub üzerinden envanter taranıyor...";
    
    setTimeout(() => {
        // Görsellerinden alınmış dosya adları ve açıklamalar
        const mockData = [
            { id: "c1", name: "Arduino Uno", desc: "Sistemin ana beyni. G/Ç işlemleri için.", image: "arduino_uno.jpg" },
            { id: "c2", name: "ESP32-CAM", desc: "Wi-Fi, Bluetooth ve Kamera bir arada.", image: "esp32_cam.jpg" },
            { id: "c3", name: "Breadboard", desc: "Lehimsiz devre kurma ve test tahtası.", image: "breadboard.jpg" },
            { id: "s1", name: "Mesafe Sensörü", desc: "Ultrasonik ses dalgalarıyla uzaklık ölçer.", image: "mesafe_sensoru.jpg" },
            { id: "s2", name: "PIR Sensörü", desc: "Kızılötesi ile canlı hareketlerini algılar.", image: "pir_sensor.jpg" },
            { id: "s3", name: "Ateş Sensörü", desc: "Alev ve belirli dalga boyundaki ışığı algılar.", image: "ates_sensoru.jpg" },
            { id: "s4", name: "Gaz Sensörü", desc: "Ortamdaki tehlikeli gazları tespit eder.", image: "gaz_sensoru.jpg" },
            { id: "s5", name: "Nabız Sensörü", desc: "Kan akışından kalp atış hızını okur.", image: "nabiz_sensoru.jpg" },
            { id: "a1", name: "Servo Motor", desc: "Hassas açılı dönüş sağlayan motor.", image: "servo.jpg" },
            { id: "a2", name: "L298N Motor Sürücü", desc: "DC ve step motorların yön/hız kontrolü.", image: "l298n.jpg" },
            { id: "a4", name: "Buzzer", desc: "Sistemsel bildirimler için sesli uyarıcı.", image: "buzzer.jpg" },
            { id: "t1", name: "Havya", desc: "Elektronik bileşenleri lehimlemek için.", image: "havya.jpg" },
            { id: "t2", name: "Multimetre", desc: "Voltaj, akım ve direnç ölçüm cihazı.", image: "multimetre.jpg" },
            { id: "t3", name: "Jumper Kablo", desc: "Devre elemanları arası bağlantı sağlar.", image: "jumper.jpg" },
            { id: "d1", name: "LCD Ekran", desc: "Sensör verilerini ekranda gösterir.", image: "lcd_ekran.jpg" },
            { id: "d2", name: "Keypad", desc: "Şifre ve veri girişi sağlar.", image: "keypad.jpg" }
        ];
        
        apiStatus.textContent = "> Bağlantı Başarılı. /api/github_envanter";
        renderWorkbench(mockData);
    }, 1200);
}

function renderWorkbench(data) {
    materialsGrid.innerHTML = ''; 
    
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const fullImageUrl = GITHUB_BASE_URL + item.image;
        
        card.innerHTML = `
            <img class="card-image" src="${fullImageUrl}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/100?text=Görsel+Yok'">
            <div class="card-title">${item.name}</div>
            <div class="card-desc">${item.desc}</div>
        `;
        
        card.addEventListener('click', function() { addMaterial(item, this, fullImageUrl); });
        materialsGrid.appendChild(card);
    });
}

function addMaterial(item, cardElement, fullImageUrl) {
    const exists = selectedMaterials.find(m => m.id === item.id);
    
    if (!exists) {
        const itemWithUrl = { ...item, fullUrl: fullImageUrl };
        selectedMaterials.push(itemWithUrl);
        updateSidebar();
        
        cardElement.style.borderColor = '#4ade80';
        cardElement.style.boxShadow = '0 0 15px rgba(74, 222, 128, 0.5)';
        setTimeout(() => {
            cardElement.style.borderColor = 'rgba(0, 255, 255, 0.1)'; 
            cardElement.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.3)';
        }, 500);

    } else {
        cardElement.style.borderColor = '#ef4444';
        cardElement.style.transform = 'translateX(5px)';
        setTimeout(() => cardElement.style.transform = 'translateX(-5px)', 100);
        setTimeout(() => {
            cardElement.style.transform = '';
            cardElement.style.borderColor = 'rgba(0, 255, 255, 0.1)';
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
            <div style="display: flex; align-items: center;">
                <img src="${item.fullUrl}" style="width: 24px; height: 24px; object-fit: cover; border-radius: 4px; margin-right: 10px;" onerror="this.style.display='none'">
                <span>${item.name}</span>
            </div>
            <button class="remove-btn" onclick="removeMaterial('${item.id}')">X</button>
        `;
        selectedItemsList.appendChild(li);
    });
}

window.removeMaterial = function(id) {
    selectedMaterials = selectedMaterials.filter(item => item.id !== id);
    updateSidebar();
};
