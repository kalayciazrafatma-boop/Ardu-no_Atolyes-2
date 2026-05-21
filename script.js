// TÜM 58 PARÇA VE img/ KLASÖRÜNDEKİ GÖRSEL EŞLEŞMELERİ
const iconMap = {
    "9V Pil": "img/9v_pil.jpg",
    "24V Röle": "img/24v_role.jpg",
    "Arduino Uno R3": "img/arduino_uno.jpg",
    "Alev Sensörü": "img/ates_sensoru.jpg",
    "Breadboard": "img/breadboard.jpg",
    "Buton": "img/buton.jpg",
    "Buzzer": "img/buzzer.jpg",
    "Çizgi Sensörü": "img/cizgi_sensoru.jpg",
    "Dijital Amplifikatör": "img/dijital_amplifikator.jpg",
    "DIP Switch": "img/dip_switch.jpg",
    "Direnç": "img/direnc.jpg",
    "DTMF Modülü": "img/dtmf_modul.jpg",
    "ESP32-Cam": "img/esp32_cam.jpg",
    "Gaz Sensörü": "img/gaz_sensoru.jpg",
    "Güneş Paneli": "img/gunes_paneli.jpg",
    "Havya": "img/havya.jpg",
    "HC-06 Bluetooth": "img/hc06_bluetooth.jpg",
    "IR Kumanda Kiti": "img/ir_kumanda_kit.jpg",
    "Joystick": "img/joystick.jpg",
    "Jumper Kablo": "img/jumper.jpg",
    "Kalıcı Buton": "img/kalici_buton.jpg",
    "Keypad": "img/keypad.jpg",
    "Kondansatör": "img/kondansator.jpg",
    "Krokodil Kablo": "img/krokodil.jpg",
    "Kumpas": "img/kumpas.jpg",
    "L293D Entegre": "img/l293d.jpg",
    "L298N Motor Sürücü": "img/l298n.jpg",
    "LCD Ekran": "img/lcd_ekran.jpg",
    "LED": "img/led.jpg",
    "Lehim Pastası": "img/lehim_pastasi.jpg",
    "Lehim Pompası": "img/lehim_pompasi.jpg",
    "Lehim Standı": "img/lehim_standi.jpg",
    "Lehim Teli": "img/lehim_teli.jpg",
    "Makaron": "img/makaron.jpg",
    "Mesafe Sensörü": "img/mesafe_sensoru.jpg",
    "Mikrofon Modülü": "img/mikrofon_modul.jpg",
    "Multimetre": "img/multimetre.jpg",
    "Nabız Sensörü": "img/nabiz_sensoru.jpg",
    "Nem Kontrol Sensörü": "img/nem_kontrol.jpg",
    "Piezo Buzzer": "img/piezo_buzzer.jpg",
    "Pil Yuvası": "img/pil_yuvasi.jpg",
    "PIR Sensör": "img/pir_sensor.jpg",
    "Potansiyometre": "img/potansiyometre.jpg",
    "Redüktörlü Motor": "img/reduktorlu_motor.jpg",
    "Voltaj Regülatörü": "img/regulator.jpg",
    "RFID Kit": "img/rfid_kit.jpg",
    "RTC Saat Modülü": "img/rtc_modul.jpg",
    "Sarhoş Tekerlek": "img/sarhos_tekerlek.jpg",
    "Servo Motor": "img/servo.jpg",
    "Ses Sensörü": "img/ses_sensoru.jpg",
    "Sigorta": "img/sigorta.jpg",
    "Su Pompası": "img/su_pompasi.jpg",
    "Tact Buton": "img/tact_buton.jpg",
    "Touch Pad": "img/touch_pad.jpg",
    "TP4056 Şarj Modülü": "img/tp4056.jpg",
    "Transistör": "img/transistor.jpg",
    "USB Kablo": "img/usb.jpg",
    "Yağmur Sensörü": "img/yagmur_sensoru.jpg",
    "Tekerlek": "img/tekerlek.jpg" // Eğer klasörde yoksa, bir görsel eklemeyi unutma!
};

// GENİŞLETİLMİŞ PROJE VERİTABANI
const projectDatabase = [
    {
        id: "p1",
        name: "Çizgi İzleyen Akıllı Robot",
        required: ["Arduino Uno R3", "L298N Motor Sürücü", "Çizgi Sensörü", "Redüktörlü Motor", "Tekerlek"],
        steps: "1. Şaseyi kurun ve motorları sabitleyin. 2. Sensörleri zemine yakın ön bölüme monte edin. 3. Siyah çizgiyi takip eden kodu Arduino'ya yükleyin.",
        image: "https://maker.robotistan.com/wp-content/uploads/2016/06/6-1.jpg"
    },
    {
        id: "p2",
        name: "Yüz Tanımalı Akıllı Kilit",
        required: ["ESP32-Cam", "24V Röle", "Servo Motor", "9V Pil"],
        steps: "1. ESP32-Cam modülüne AI kütüphanesini yükleyin. 2. Yüzünüzü sisteme tanıtın. 3. Doğru yüz algılandığında röle ile kapıyı açın.",
        image: "https://vcl.com.tr/wp-content/uploads/2021/04/esp32-cam-face-recognition.jpg"
    },
    {
        id: "p3",
        name: "Engelden Kaçan Robot",
        required: ["Arduino Uno R3", "Mesafe Sensörü", "Servo Motor", "L298N Motor Sürücü", "Tekerlek"],
        steps: "1. Mesafe sensörünü servo üzerine sabitleyin. 2. Engel algılandığında motorları ters yöne döndürecek algoritmayı yükleyin.",
        image: "https://maker.robotistan.com/wp-content/uploads/2016/05/HC-SR04-ile-Engelden-Kacan-Robot-Yapiyoruz.jpg"
    },
    {
        id: "p4",
        name: "RFID Kartlı Kapı Sistemi",
        required: ["Arduino Uno R3", "RFID Kit", "Servo Motor", "LCD Ekran"],
        steps: "1. RFID okuyucuyu bağlayın. 2. Kayıtlı kart okutulduğunda ekranda 'HOŞGELDİN' yazsın ve servo kapağı açsın.",
        image: "https://maker.robotistan.com/wp-content/uploads/2016/04/rfid-rc522-ile-kapi-kilidi-yapimi.jpg"
    }
];

let selectedInventory = [];

// Sidebar Başlatma
document.addEventListener("DOMContentLoaded", () => {
    renderInventory(Object.keys(iconMap));
});

function renderInventory(items) {
    const list = document.getElementById('inventory-list');
    list.innerHTML = "";
    items.forEach(name => {
        const div = document.createElement('div');
        div.className = 'inv-item';
        div.innerHTML = `<strong>${name}</strong><p>Laboratuvara Ekle +</p>`;
        div.onclick = () => addToTable(name);
        list.appendChild(div);
    });
}

// Arama Fonksiyonu
function searchParts() {
    const term = document.getElementById('partSearch').value.toLowerCase();
    const filtered = Object.keys(iconMap).filter(name => name.toLowerCase().includes(term));
    renderInventory(filtered);
}

function addToTable(name) {
    if (!selectedInventory.includes(name)) {
        selectedInventory.push(name);
        document.getElementById('part-count').innerText = selectedInventory.length;
        
        const itemIcon = document.createElement('div');
        itemIcon.style.position = "absolute";
        itemIcon.style.left = Math.random() * 70 + 10 + "%";
        itemIcon.style.top = Math.random() * 50 + 20 + "%";
        itemIcon.style.zIndex = "5";
        
        const imgSrc = iconMap[name];
        itemIcon.innerHTML = `
            <img src="${imgSrc}" width="80" title="${name}" style="border: 2px solid var(--neon-blue); border-radius: 8px; background: #fff; box-shadow: 0 0 15px var(--neon-blue);">
            <div style="font-size: 11px; color: var(--neon-blue); text-align: center; font-weight: bold; margin-top: 5px; text-shadow: 0 0 3px #000;">${name}</div>
        `;
        document.getElementById('table-canvas').appendChild(itemIcon);
        checkProjects();
    }
}

function checkProjects() {
    const available = projectDatabase.filter(proj => 
        proj.required.every(req => selectedInventory.includes(req))
    );

    const linkBox = document.getElementById('project-links');
    if(available.length > 0) {
        linkBox.innerHTML = available.map(p => 
            `<button class="project-btn" onclick="openManual('${p.id}')">${p.name} [GÖRÜNTÜLE]</button>`
        ).join('');
    } else {
        linkBox.innerHTML = `<p class="hint">Gerekli parçaları ekleyerek projeleri keşfet!</p>`;
    }
}

function openManual(id) {
    const proj = projectDatabase.find(p => p.id === id);
    document.getElementById('m-project-name').innerText = proj.name;
    document.getElementById('m-project-steps').innerText = proj.steps;
    document.getElementById('m-project-img').src = proj.image;
    document.getElementById('m-project-parts').innerHTML = proj.required.map(p => 
        `<span class="part-tag">${p}</span>`
    ).join('');
    document.getElementById('manual-modal').style.display = "block";
}

function closeManual() {
    document.getElementById('manual-modal').style.display = "none";
}
