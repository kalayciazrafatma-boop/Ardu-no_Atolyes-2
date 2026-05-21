// GÖRSEL LİSTESİ: Klasöründeki 59 görselin tamamı burada tanımlandı.
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
    "Tekerlek": "img/Tekerlek.jpg",
    "Touch Pad": "img/touch_pad.jpg",
    "TP4056 Şarj Modülü": "img/tp4056.jpg",
    "Transistör": "img/transistor.jpg",
    "USB Kablo": "img/usb.jpg",
    "Yağmur Sensörü": "img/yagmur_sensoru.jpg"
};

// PROJE VERİTABANI (Kılavuzlar)
const projectDatabase = [
    {
        id: "p1",
        name: "Çizgi İzleyen Akıllı Robot",
        required: ["Arduino Uno R3", "L298N Motor Sürücü", "Çizgi Sensörü", "Redüktörlü Motor", "Tekerlek"],
        steps: "1. Motorları şaseye sabitleyip tekerlekleri takın. 2. Çizgi sensörlerini ön tarafa, zemine yakın monte edin. 3. Siyah çizgiyi takip eden kodu Arduino'ya yükleyin.",
        image: "https://maker.robotistan.com/wp-content/uploads/2016/06/6-1.jpg"
    },
    {
        id: "p2",
        name: "Yüz Tanımalı Akıllı Kilit (AI)",
        required: ["ESP32-Cam", "24V Röle", "Servo Motor", "9V Pil"],
        steps: "1. ESP32-Cam modülüne AI kütüphanesini yükleyin. 2. Yüzünüzü sisteme tanıtın. 3. Yüz algılandığında röleyi tetikleyin ve servo ile kapıyı açın.",
        image: "https://vcl.com.tr/wp-content/uploads/2021/04/esp32-cam-face-recognition.jpg"
    },
    {
        id: "p3",
        name: "Engelden Kaçan Otonom Robot",
        required: ["Arduino Uno R3", "Mesafe Sensörü", "Servo Motor", "L298N Motor Sürücü", "Tekerlek"],
        steps: "1. Mesafe sensörünü servo üzerine sabitleyin. 2. Sensör sürekli önündeki engelleri tarasın. 3. Engel algılandığında motorları ters yöne çevirin.",
        image: "https://maker.robotistan.com/wp-content/uploads/2016/05/HC-SR04-ile-Engelden-Kacan-Robot-Yapiyoruz.jpg"
    },
    {
        id: "p4",
        name: "Bluetooth Kontrollü Araç",
        required: ["Arduino Uno R3", "HC-06 Bluetooth", "L298N Motor Sürücü", "Redüktörlü Motor", "Tekerlek"],
        steps: "1. Bluetooth modülünü RX/TX pinlerine çapraz bağlayın. 2. Mobil uygulama üzerinden gelen ileri/geri komutlarını motor sürücüye iletin.",
        image: "https://lezzetlirobotlar.com/wp-content/uploads/2016/04/bluetooth_kontrollu_araba_devre_semasi.png"
    },
    {
        id: "p5",
        name: "RFID Kartlı Geçiş Sistemi",
        required: ["Arduino Uno R3", "RFID Kit", "Servo Motor", "LCD Ekran", "Buzzer"],
        steps: "1. RFID okuyucuyu bağlayın. 2. Kart okutulduğunda LCD'de 'Hoşgeldin' yazsın ve servo kapıyı açsın. 3. Yanlış kartta buzzer ötsün.",
        image: "https://maker.robotistan.com/wp-content/uploads/2016/04/rfid-rc522-ile-kapi-kilidi-yapimi.jpg"
    },
    {
        id: "p6",
        name: "Şifreli Güvenlik Kasası",
        required: ["Arduino Uno R3", "Keypad", "LCD Ekran", "Servo Motor", "Buzzer"],
        steps: "1. Keypad şifre algoritmasını kodlayın. 2. Doğru şifre girildiğinde servoyu açın. 3. Hatalı girişte alarm verin.",
        image: "https://maker.robotistan.com/wp-content/uploads/2016/05/arduino-keypad-kullanimi.jpg"
    },
    {
        id: "p7",
        name: "Otomatik Bitki Sulama",
        required: ["Arduino Uno R3", "Nem Kontrol Sensörü", "Su Pompası", "24V Röle"],
        steps: "1. Nem sensörünü toprağa yerleştirin. 2. Toprak kuruduğunda röle üzerinden pompayı çalıştırın.",
        image: "https://maker.robotistan.com/wp-content/uploads/2016/03/toprak-nem-sensoru-kullanimi.jpg"
    },
    {
        id: "p8",
        name: "Akıllı Park Sensörü",
        required: ["Arduino Uno R3", "Mesafe Sensörü", "Buzzer", "LED", "LCD Ekran"],
        steps: "1. Mesafeyi sensörle ölçün. 2. Mesafe azaldıkça buzzer bip sesini hızlandırın. 3. Değeri LCD ekrana yazdırın.",
        image: "https://i.ytimg.com/vi/6f_O89tF6Xo/maxresdefault.jpg"
    },
    {
        id: "p9",
        name: "Hava Durumu İstasyonu",
        required: ["Arduino Uno R3", "Yağmur Sensörü", "Nem Kontrol Sensörü", "LCD Ekran"],
        steps: "1. Yağmur ve nem sensörlerini bağlayın. 2. Yağmur yağdığında LCD'de uyarı gösterin.",
        image: "https://maker.robotistan.com/wp-content/uploads/2016/03/yagmur-sensoru-kullanimi.jpg"
    },
    {
        id: "p10",
        name: "Dijital Masa Saati",
        required: ["Arduino Uno R3", "RTC Saat Modülü", "LCD Ekran"],
        steps: "1. Saat modülünden veriyi çekin. 2. Tarih ve saati LCD ekrana basın.",
        image: "https://i.ytimg.com/vi/v5u798aL_I4/maxresdefault.jpg"
    }
];

let selectedInventory = [];

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
        
        const imgSrc = iconMap[name];
        itemIcon.innerHTML = `
            <img src="${imgSrc}" width="80" title="${name}" style="border: 2px solid #00f3ff; border-radius: 8px; background: #fff; box-shadow: 0 0 15px #00f3ff;">
            <div style="font-size: 11px; color: #00f3ff; text-align: center; font-weight: bold; margin-top: 5px;">${name}</div>
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
            `<button class="project-btn" onclick="openManual('${p.id}')">${p.name}</button>`
        ).join('');
    } else {
        linkBox.innerHTML = `<p style="font-size: 11px; color: #888;">Parçaları ekleyerek projeleri keşfet!</p>`;
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
