const iconMap = {
    "9V Pil": "9v_pil.jpg",
    "24V Röle": "24v_role.jpg",
    "Arduino Uno R3": "arduino_uno.jpg",
    "Alev Sensörü": "ates_sensoru.jpg",
    "Breadboard": "breadboard.jpg",
    "Buton": "buton.jpg",
    "Buzzer": "buzzer.jpg",
    "Çizgi Sensörü": "cizgi_sensoru.jpg",
    "Dijital Amplifikatör": "dijital_amplifikator.jpg",
    "DIP Switch": "dip_switch.jpg",
    "Direnç": "direnc.jpg",
    "DTMF Modülü": "dtmf_modul.jpg",
    "ESP32-Cam": "esp32_cam.jpg",
    "Gaz Sensörü": "gaz_sensoru.jpg",
    "Güneş Paneli": "gunes_paneli.jpg",
    "Havya": "havya.jpg",
    "HC-06 Bluetooth": "hc06_bluetooth.jpg",
    "IR Kumanda Kiti": "ir_kumanda_kit.jpg",
    "Joystick": "joystick.jpg",
    "Jumper Kablo": "jumper.jpg",
    "Kalıcı Buton": "kalici_buton.jpg",
    "Keypad": "keypad.jpg",
    "Kondansatör": "kondansator.jpg",
    "Krokodil Kablo": "krokodil.jpg",
    "Kumpas": "kumpas.jpg",
    "L293D Entegre": "l293d.jpg",
    "L298N Motor Sürücü": "l298n.jpg",
    "LCD Ekran": "lcd_ekran.jpg",
    "LED": "led.jpg",
    "Lehim Pastası": "lehim_pastasi.jpg",
    "Lehim Pompası": "lehim_pompasi.jpg",
    "Lehim Standı": "lehim_standi.jpg",
    "Lehim Teli": "lehim_teli.jpg",
    "Makaron": "lehim_pompasi.jpg", // Klasöründeki isme göre kontrol et
    "Mesafe Sensörü": "mesafe_sensoru.jpg",
    "Mikrofon Modülü": "mikrofon_modul.jpg",
    "Multimetre": "multimetre.jpg",
    "Nabız Sensörü": "nabiz_sensoru.jpg",
    "Nem Kontrol Sensörü": "nem_kontrol.jpg",
    "Piezo Buzzer": "piezo_buzzer.jpg",
    "Pil Yuvası": "pil_yuvasi.jpg",
    "PIR Sensör": "pir_sensor.jpg",
    "Potansiyometre": "potansiyometre.jpg",
    "Redüktörlü Motor": "reduktorlu_motor.jpg",
    "Voltaj Regülatörü": "regulator.jpg",
    "RFID Kit": "rfid_kit.jpg",
    "RTC Saat Modülü": "rtc_modul.jpg",
    "Sarhoş Tekerlek": "sarhos_tekerlek.jpg",
    "Servo Motor": "servo.jpg",
    "Ses Sensörü": "ses_sensoru.jpg",
    "Sigorta": "sigorta.jpg",
    "Su Pompası": "su_pompasi.jpg",
    "Tact Buton": "tact_buton.jpg",
    "Tekerlek": "Tekerlek.jpg", // Klasöründe büyük 'T' olduğu için böyle yazdım
    "Touch Pad": "touch_pad.jpg",
    "TP4056 Şarj Modülü": "tp4056.jpg",
    "Transistör": "transistor.jpg",
    "USB Kablo": "usb.jpg",
    "Yağmur Sensörü": "yagmur_sensoru.jpg"
};

// 2. ADIM: PROJE VERİTABANI
const projectDatabase = [
    {
        id: "p1",
        name: "Çizgi İzleyen Akıllı Robot",
        required: ["Arduino Uno R3", "L298N Motor Sürücü", "Çizgi Sensörü", "Redüktörlü Motor", "Tekerlek"],
        steps: "1. Motorları şaseye sabitleyin. 2. Sensörleri zemine yakın monte edin. 3. Çizgi izleme kodunu yükleyin.",
        image: "https://maker.robotistan.com/wp-content/uploads/2016/06/6-1.jpg"
    },
    {
        id: "p2",
        name: "Yüz Tanımalı Akıllı Kilit",
        required: ["ESP32-Cam", "24V Röle", "Servo Motor", "9V Pil"],
        steps: "1. ESP32-Cam'e AI yazılımını yükleyin. 2. Yüz algılandığında röleyi tetikleyip kapıyı açın.",
        image: "https://vcl.com.tr/wp-content/uploads/2021/04/esp32-cam-face-recognition.jpg"
    }
    // Buraya istediğin kadar yeni proje ekleyebilirsin!
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
        div.innerHTML = `<strong>${name}</strong><p>Ekle +</p>`;
        div.onclick = () => addToTable(name);
        list.appendChild(div);
    });
}

function addToTable(name) {
    if (!selectedInventory.includes(name)) {
        selectedInventory.push(name);
        document.getElementById('part-count').innerText = selectedInventory.length;
        
        const itemContainer = document.createElement('div');
        itemContainer.className = "placed-part";
        itemContainer.style.position = "absolute";
        itemContainer.style.left = Math.random() * 70 + 10 + "%";
        itemIcon.style.top = Math.random() * 50 + 20 + "%";
        
        // Görsel Yolu Kontrolü
        const imgSrc = iconMap[name];
        
        itemContainer.innerHTML = `
            <div class="part-wrapper" style="position:relative; text-align:center;">
                <span class="remove-btn" onclick="removeFromTable('${name}', this.parentElement.parentElement)" 
                      style="position:absolute; top:-10px; right:-10px; background:red; color:white; border-radius:50%; width:20px; height:20px; cursor:pointer; font-size:12px; z-index:10; display:flex; align-items:center; justify-content:center;">X</span>
                <img src="${imgSrc}" width="80" title="${name}" style="border: 2px solid #00f3ff; border-radius: 8px; background: #fff; display:block;">
                <div style="font-size: 11px; color: #00f3ff; font-weight: bold; margin-top: 5px;">${name}</div>
            </div>
        `;
        document.getElementById('table-canvas').appendChild(itemContainer);
        checkProjects();
    }
}

// SİLME FONKSİYONU
function removeFromTable(name, element) {
    // Listeden çıkar
    selectedInventory = selectedInventory.filter(item => item !== name);
    // Masadan kaldır
    element.remove();
    // Parça sayısını güncelle
    document.getElementById('part-count').innerText = selectedInventory.length;
    // Projeleri tekrar kontrol et
    checkProjects();
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
