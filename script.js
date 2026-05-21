// ARDUINO LAB - GÜNCEL SCRIPT
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
    "Makaron": "makaron.jpg",
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
    "Tekerlek": "Tekerlek.jpg", // GitHub'da büyük T olduğu için düzelttim
    "Touch Pad": "touch_pad.jpg",
    "TP4056 Şarj Modülü": "tp4056.jpg",
    "Transistör": "transistor.jpg",
    "USB Kablo": "usb.jpg",
    "Yağmur Sensörü": "yagmur_sensoru.jpg"
};

const projectDatabase = [
    {
        id: "p1",
        name: "Çizgi İzleyen Akıllı Robot",
        required: ["Arduino Uno R3", "L298N Motor Sürücü", "Çizgi Sensörü", "Redüktörlü Motor", "Tekerlek"],
        steps: "1. Motorları şaseye sabitleyin. 2. Sensörleri ön tarafa monte edin. 3. Çizgi izleme kodunu yükleyin.",
        image: "https://maker.robotistan.com/wp-content/uploads/2016/06/6-1.jpg"
    },
    {
        id: "p2",
        name: "Yüz Tanımalı Akıllı Kilit",
        required: ["ESP32-Cam", "24V Röle", "Servo Motor", "9V Pil"],
        steps: "1. ESP32-Cam modülüne AI yazılımını yükleyin. 2. Tanınan bir yüz geldiğinde röleyi tetikleyin.",
        image: "https://vcl.com.tr/wp-content/uploads/2021/04/esp32-cam-face-recognition.jpg"
    },
    {
        id: "p3",
        name: "Mesafe Ölçer (Park Sensörü)",
        required: ["Arduino Uno R3", "Mesafe Sensörü", "Buzzer", "LCD Ekran"],
        steps: "1. Ultrasonik sensörü öne takın. 2. Mesafe azaldıkça buzzer sesini hızlandırın.",
        image: "https://i.ytimg.com/vi/6f_O89tF6Xo/maxresdefault.jpg"
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
        
        const itemContainer = document.createElement('div');
        itemContainer.className = "placed-part";
        itemContainer.id = "part-" + name.replace(/\s+/g, '-'); // Benzersiz ID
        itemContainer.style.position = "absolute";
        itemContainer.style.left = Math.random() * 70 + 10 + "%";
        itemContainer.style.top = Math.random() * 50 + 20 + "%";
        itemContainer.style.cursor = "pointer";
        
        const imgSrc = iconMap[name];
        
        itemContainer.innerHTML = `
            <div style="position:relative; text-align:center;">
                <span style="position:absolute; top:-10px; right:-10px; background:red; color:white; border-radius:50%; width:20px; height:20px; font-size:12px; display:flex; align-items:center; justify-content:center;">X</span>
                <img src="${imgSrc}" width="80" title="${name}" style="border: 2px solid #00f3ff; border-radius: 8px; background: #fff; box-shadow: 0 0 15px #00f3ff;">
                <div style="font-size: 11px; color: #00f3ff; font-weight: bold; margin-top: 5px; text-shadow: 1px 1px 2px #000;">${name}</div>
            </div>
        `;

        // Parçaya tıklayınca silme özelliği
        itemContainer.onclick = () => removeFromTable(name, itemContainer);

        document.getElementById('table-canvas').appendChild(itemContainer);
        checkProjects();
    }
}

function removeFromTable(name, element) {
    // Listeden sil
    selectedInventory = selectedInventory.filter(item => item !== name);
    // Masadan sil
    element.remove();
    // Sayacı güncelle
    document.getElementById('part-count').innerText = selectedInventory.length;
    // Projeleri güncelle
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
