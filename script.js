// ARDUINO LAB - GÜNCEL SCRIPT
const materialData = {
    "9V Pil": { img: "9v_pil.jpg", desc: "Devre için temel güç kaynağı." },
    "Arduino Uno R3": { img: "arduino_uno.jpg", desc: "Sistemin beyni, kontrol kartı." },
    "ESP32-Cam": { img: "esp32_cam.jpg", desc: "Kamera ve Wi-Fi destekli AI modülü." },
    "Mikrofon Modülü": { img: "mikrofon_modul.jpg", desc: "Ses şiddetini algılayan sensör." },
    "Sigorta": { img: "sigorta.jpg", desc: "Aşırı akımı keserek devreyi korur." },
    "L298N Motor Sürücü": { img: "l298n.jpg", desc: "Motorların hız ve yönünü belirler." },
    "Tekerlek": { img: "Tekerlek.jpg", desc: "Robotun hareket etmesini sağlayan parça." },
    "24V Röle": { img: "24v_role.jpg", desc: "Yüksek güç anahtarlama modülü." },
    "Alev Sensörü": { img: "ates_sensoru.jpg", desc: "Yangın ve alev algılama sensörü." },
    "Breadboard": { img: "breadboard.jpg", desc: "Lehimsiz devre kurma alanı." },
    "Buton": { img: "buton.jpg", desc: "Tıklamalı devre anahtarı." },
    "Buzzer": { img: "buzzer.jpg", desc: "Sesli uyarı sinyali verir." },
    "Çizgi Sensörü": { img: "cizgi_sensoru.jpg", desc: "Zemindeki siyah/beyaz farkını okur." },
    "Dijital Amplifikatör": { img: "dijital_amplifikator.jpg", desc: "Ses gücünü artıran devre." },
    "DIP Switch": { img: "dip_switch.jpg", desc: "Çoklu ayar anahtarı." },
    "Direnç": { img: "direnc.jpg", desc: "Akımı sınırlayan parça." },
    "DTMF Modülü": { img: "dtmf_modul.jpg", desc: "Telefon tuş seslerini kodlar." },
    "Gaz Sensörü": { img: "gaz_sensoru.jpg", desc: "Yanıcı gazları algılar." },
    "Güneş Paneli": { img: "gunes_paneli.jpg", desc: "Işıktan enerji üretir." },
    "Havya": { img: "havya.jpg", desc: "Lehimleme aleti." },
    "HC-06 Bluetooth": { img: "hc06_bluetooth.jpg", desc: "Telefondan kontrol sağlar." },
    "IR Kumanda Kiti": { img: "ir_kumanda_kit.jpg", desc: "Kızılötesi kontrol seti." },
    "Joystick": { img: "joystick.jpg", desc: "İki eksenli yön kontrolü." },
    "Jumper Kablo": { img: "jumper.jpg", desc: "Bağlantı kabloları." },
    "Kalıcı Buton": { img: "kalici_buton.jpg", desc: "Konumunu koruyan anahtar." },
    "Keypad": { img: "keypad.jpg", desc: "Sayısal tuş takımı." },
    "Kondansatör": { img: "kondansator.jpg", desc: "Enerji depolayan eleman." },
    "Krokodil Kablo": { img: "krokodil.jpg", desc: "Kıskaçlı test kablosu." },
    "Kumpas": { img: "kumpas.jpg", desc: "Hassas ölçüm aleti." },
    "L293D Entegre": { img: "l293d.jpg", desc: "Küçük motorlar için sürücü." },
    "LCD Ekran": { img: "lcd_ekran.jpg", desc: "Bilgi yazdırma ekranı." },
    "LED": { img: "led.jpg", desc: "Işıklı bildirim elemanı." },
    "Lehim Pastası": { img: "lehim_pastasi.jpg", desc: "Lehimleme yardımcısı." },
    "Lehim Pompası": { img: "lehim_pompasi.jpg", desc: "Eski lehimi çekme aracı." },
    "Lehim Standı": { img: "lehim_standi.jpg", desc: "Havya taşıyıcı." },
    "Lehim Teli": { img: "lehim_teli.jpg", desc: "Bağlantı metali." },
    "Makaron": { img: "makaron.jpg", desc: "Isıyla daralan yalıtım." },
    "Mesafe Sensörü": { img: "mesafe_sensoru.jpg", desc: "Engel mesafesini ölçer." },
    "Multimetre": { img: "multimetre.jpg", desc: "Ölçüm ve test cihazı." },
    "Nabız Sensörü": { img: "nabiz_sensoru.jpg", desc: "Kalp atış hızı sensörü." },
    "Nem Kontrol Sensörü": { img: "nem_kontrol.jpg", desc: "Toprak nemini ölçer." },
    "Piezo Buzzer": { img: "piezo_buzzer.jpg", desc: "Titreşimli ses elemanı." },
    "Pil Yuvası": { img: "pil_yuvasi.jpg", desc: "Pilleri bir arada tutar." },
    "PIR Sensör": { img: "pir_sensor.jpg", desc: "Harekete duyarlı sensör." },
    "Potansiyometre": { img: "potansiyometre.jpg", desc: "Ayarlı direnç." },
    "Redüktörlü Motor": { img: "reduktorlu_motor.jpg", desc: "Güçlü dişli motor." },
    "Voltaj Regülatörü": { img: "regulator.jpg", desc: "Gerilimi sabitler." },
    "RFID Kit": { img: "rfid_kit.jpg", desc: "Kartlı geçiş sistemi seti." },
    "RTC Saat Modülü": { img: "rtc_modul.jpg", desc: "Zaman sayacı modülü." },
    "Sarhoş Tekerlek": { img: "sarhos_tekerlek.jpg", desc: "Yönlendirici tekerlek." },
    "Servo Motor": { img: "servo.jpg", desc: "Açılı dönen hassas motor." },
    "Ses Sensörü": { img: "ses_sensoru.jpg", desc: "Sesi algılar." },
    "Su Pompası": { img: "su_pompasi.jpg", desc: "Sıvı aktarma motoru." },
    "Tact Buton": { img: "tact_buton.jpg", desc: "Küçük tetik anahtarı." },
    "Touch Pad": { img: "touch_pad.jpg", desc: "Dokunmatik kontrol paneli." },
    "TP4056 Şarj Modülü": { img: "tp4056.jpg", desc: "Pil şarj devresi." },
    "Transistör": { img: "transistor.jpg", desc: "Sinyal yükseltici." },
    "USB Kablo": { img: "usb.jpg", desc: "Arduino veri kablosu." },
    "Yağmur Sensörü": { img: "yagmur_sensoru.jpg", desc: "Yağışı algılar." }
};

// 2. ADIM: TAM PROJE VERİTABANI
const projectDatabase = [
    {
        id: "p1",
        name: "Otonom Çizgi İzleyen Robot",
        required: ["Arduino Uno R3", "L298N Motor Sürücü", "Çizgi Sensörü", "Redüktörlü Motor", "Tekerlek"],
        steps: "1. Motorları şaseye sabitleyip tekerlekleri takın. 2. Sensörleri zemine yakın monte edin. 3. Çizgi izleme kodunu yükleyin.",
        image: "https://maker.robotistan.com/wp-content/uploads/2016/06/6-1.jpg"
    },
    {
        id: "p2",
        name: "Yüz Tanımalı Akıllı Kilit (AI)",
        required: ["ESP32-Cam", "24V Röle", "Servo Motor", "9V Pil"],
        steps: "1. ESP32-Cam'e yüz tanıma yazılımını yükleyin. 2. Yüz algılandığında röleyi tetikleyin ve kapıyı açın.",
        image: "https://vcl.com.tr/wp-content/uploads/2021/04/esp32-cam-face-recognition.jpg"
    },
    {
        id: "p3",
        name: "Akıllı Park Sensörü",
        required: ["Arduino Uno R3", "Mesafe Sensörü", "Buzzer", "LCD Ekran"],
        steps: "1. Mesafe sensörünü takın. 2. Mesafe azaldıkça buzzer sesini hızlandırın. 3. LCD'de santimi görün.",
        image: "https://i.ytimg.com/vi/6f_O89tF6Xo/maxresdefault.jpg"
    },
    {
        id: "p4",
        name: "Bluetooth Kontrollü Tank",
        required: ["Arduino Uno R3", "HC-06 Bluetooth", "L298N Motor Sürücü", "Tekerlek"],
        steps: "1. Bluetooth modülünü bağlayın. 2. Mobil uygulamadan gelen komutları motorlara yönlendirin.",
        image: "https://lezzetlirobotlar.com/wp-content/uploads/2016/04/bluetooth_kontrollu_araba_devre_semasi.png"
    }
];

let selectedInventory = [];

document.addEventListener("DOMContentLoaded", () => {
    // Tüm parçaları yan panelde listele
    renderInventory(Object.keys(materialData));
});

function renderInventory(items) {
    const list = document.getElementById('inventory-list');
    list.innerHTML = "";
    items.forEach(name => {
        const data = materialData[name];
        const div = document.createElement('div');
        div.className = 'inv-item';
        div.innerHTML = `
            <strong>${name}</strong>
            <p style="font-size:10px; color:#aaa; margin:4px 0;">${data.desc}</p>
            <span style="color:#00f3ff; font-size:9px;">Masaya Ekle +</span>
        `;
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
        itemContainer.style.top = Math.random() * 50 + 20 + "%";
        
        const imgSrc = materialData[name].img;
        
        itemContainer.innerHTML = `
            <div style="position:relative; text-align:center; cursor:pointer;" onclick="removeFromTable('${name}', this.parentElement)">
                <span style="position:absolute; top:-12px; right:-12px; background:red; color:white; border-radius:50%; width:20px; height:20px; font-size:12px; display:flex; align-items:center; justify-content:center; z-index:10;">X</span>
                <img src="${imgSrc}" width="75" title="${name}" style="border: 2px solid #00f3ff; border-radius: 8px; background: #fff; box-shadow: 0 0 10px #00f3ff;">
                <div style="font-size: 10px; color: #00f3ff; font-weight: bold; margin-top: 4px;">${name}</div>
            </div>
        `;
        document.getElementById('table-canvas').appendChild(itemContainer);
        checkProjects();
    }
}

function removeFromTable(name, element) {
    selectedInventory = selectedInventory.filter(item => item !== name);
    element.remove();
    document.getElementById('part-count').innerText = selectedInventory.length;
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
        linkBox.innerHTML = `<p style="font-size: 11px; color: #888;">Eksik parçaları ekle...</p>`;
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

function searchParts() {
    const term = document.getElementById('partSearch').value.toLowerCase();
    const filtered = Object.keys(materialData).filter(name => name.toLowerCase().includes(term));
    renderInventory(filtered);
}
