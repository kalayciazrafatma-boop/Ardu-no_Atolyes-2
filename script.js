// ARDUINO LAB - GÜNCEL SCRIPT
const materialData = {
    "9V Pil": { img: "9v_pil.jpg", desc: "Devreye enerji sağlayan temel güç kaynağı." },
    "24V Röle": { img: "24v_role.jpg", desc: "Yüksek voltajlı cihazları güvenli anahtarlar." },
    "Arduino Uno R3": { img: "arduino_uno.jpg", desc: "Sistemin beyni, mikrodenetleyici kartı." },
    "Alev Sensörü": { img: "ates_sensoru.jpg", desc: "Yangın ve kızılötesi ışığı algılar." },
    "Breadboard": { img: "breadboard.jpg", desc: "Lehimsiz devre kurma test tahtası." },
    "Buton": { img: "buton.jpg", desc: "Basıldığında devreyi tamamlayan anahtar." },
    "Buzzer": { img: "buzzer.jpg", desc: "Sesli uyarı ve sinyal verir." },
    "Çizgi Sensörü": { img: "cizgi_sensoru.jpg", desc: "Zemindeki siyah ve beyaz farkını algılar." },
    "Dijital Amplifikatör": { img: "dijital_amplifikator.jpg", desc: "Ses sinyallerini yükseltir." },
    "DIP Switch": { img: "dip_switch.jpg", desc: "Çoklu açma-kapama ayar anahtarı." },
    "Direnç": { img: "direnc.jpg", desc: "Akımı sınırlayarak parçaları korur." },
    "DTMF Modülü": { img: "dtmf_modul.jpg", desc: "Telefon tuş seslerini algılar." },
    "ESP32-Cam": { img: "esp32_cam.jpg", desc: "Wi-Fi destekli kamera ve işlemci modülü." },
    "Gaz Sensörü": { img: "gaz_sensoru.jpg", desc: "Havadaki yanıcı veya zehirli gazları algılar." },
    "Güneş Paneli": { img: "gunes_paneli.jpg", desc: "Işığı elektrik enerjisine çevirir." },
    "Havya": { img: "havya.jpg", desc: "Lehimleme yapmak için ısıtıcı araç." },
    "HC-06 Bluetooth": { img: "hc06_bluetooth.jpg", desc: "Telefonla kablosuz bağlantı kurar." },
    "IR Kumanda Kiti": { img: "ir_kumanda_kit.jpg", desc: "Kızılötesi ile uzaktan kontrol seti." },
    "Joystick": { img: "joystick.jpg", desc: "İki eksenli hareket kontrol kolu." },
    "Jumper Kablo": { img: "jumper.jpg", desc: "Bileşenler arası iletimi sağlar." },
    "Kalıcı Buton": { img: "kalici_buton.jpg", desc: "Konumunu koruyan devre anahtarı." },
    "Keypad": { img: "keypad.jpg", desc: "Sayısal veri girişi için tuş takımı." },
    "Kondansatör": { img: "kondansator.jpg", desc: "Elektrik enerjisini depolayan eleman." },
    "Krokodil Kablo": { img: "krokodil.jpg", desc: "Hızlı bağlantı için kıskaçlı kablo." },
    "Kumpas": { img: "kumpas.jpg", desc: "Hassas uzunluk ölçümü yapan araç." },
    "L293D Entegre": { img: "l293d.jpg", desc: "Motor kontrolü için sürücü çipi." },
    "L298N Motor Sürücü": { img: "l298n.jpg", desc: "Motorların hız ve yönünü belirler." },
    "LCD Ekran": { img: "lcd_ekran.jpg", desc: "Verileri görsel olarak yazdırmanı sağlar." },
    "LED": { img: "led.jpg", desc: "Işık yayan diyot (aydınlatma)." },
    "Lehim Pastası": { img: "lehim_pastasi.jpg", desc: "Lehimleme işlemini kolaylaştıran madde." },
    "Lehim Pompası": { img: "lehim_pompasi.jpg", desc: "Eski lehimleri çekip temizleyen araç." },
    "Lehim Standı": { img: "lehim_standi.jpg", desc: "Sıcak havyayı güvenle koymak için stand." },
    "Lehim Teli": { img: "lehim_teli.jpg", desc: "Bağlantıları sabitleyen metal tel." },
    "Makaron": { img: "makaron.jpg", desc: "Isıyla daralan kablo yalıtım kılıfı." },
    "Mesafe Sensörü": { img: "mesafe_sensoru.jpg", desc: "Engelleri ultrasonik dalgalarla ölçer." },
    "Mikrofon Modülü": { img: "mikrofon_modulu.jpg", desc: "Ortamdaki ses şiddetini algılar." },
    "Multimetre": { img: "multimetre.jpg", desc: "Voltaj, akım ve direnç ölçen cihaz." },
    "Nabız Sensörü": { img: "nabiz_sensoru.jpg", desc: "Kalp atış hızını ölçen sensör." },
    "Nem Kontrol Sensörü": { img: "nem_kontrol.jpg", desc: "Toprak veya ortam nemini ölçer." },
    "Piezo Buzzer": { img: "piezo_buzzer.jpg", desc: "Titreşimle ses çıkaran ince buzzer." },
    "Pil Yuvası": { img: "pil_yuvasi.jpg", desc: "Pilleri devreye bağlamayı sağlar." },
    "PIR Sensör": { img: "pir_sensor.jpg", desc: "Harekete duyarlı kızılötesi sensör." },
    "Potansiyometre": { img: "potansiyometre.jpg", desc: "Ayarlanabilir direnç." },
    "Redüktörlü Motor": { img: "reduktorlu_motor.jpg", desc: "Güçlü hareket sağlayan dişli motor." },
    "Voltaj Regülatörü": { img: "regulator.jpg", desc: "Giriş voltajını sabitleyen eleman." },
    "RFID Kit": { img: "rfid_kit.jpg", desc: "Kartlı geçiş sistemi seti." },
    "RTC Saat Modülü": { img: "rtc_modul.jpg", desc: "Gerçek zamanlı saat bilgisi modülü." },
    "Sarhoş Tekerlek": { img: "sarhos_tekerlek.jpg", desc: "Robotun kolay dönmesini sağlayan teker." },
    "Servo Motor": { img: "servo.jpg", desc: "Açılı dönen (0-180) hassas motor." },
    "Ses Sensörü": { img: "ses_sensoru.jpg", desc: "Sesi algılayıp sinyale çevirir." },
    "Sigorta": { img: "sigorta.jpg", desc: "Devreyi aşırı akıma karşı korur." },
    "Su Pompası": { img: "su_pompasi.jpg", desc: "Sıvı aktarımını sağlayan motor." },
    "Tact Buton": { img: "tact_buton.jpg", desc: "Küçük devre tetikleyici buton." },
    "Tekerlek": { img: "Tekerlek.jpg", desc: "Robot şaseleri için ana tekerlek." },
    "Touch Pad": { img: "touch_pad.jpg", desc: "Dokunmatik kontrol yüzeyi." },
    "TP4056 Şarj Modülü": { img: "tp4056.jpg", desc: "Lityum pil şarj devresi." },
    "Transistör": { img: "transistor.jpg", desc: "Sinyal anahtarlayan devre elemanı." },
    "USB Kablo": { img: "usb.jpg", desc: "Arduino kod yükleme kablosu." },
    "Yağmur Sensörü": { img: "yagmur_sensoru.jpg", desc: "Su damlalarını algılayan sensör." }
};

const projectDatabase = [
    {
        id: "p1",
        name: "Akıllı Park Sensörü",
        required: ["Arduino Uno R3", "Mesafe Sensörü", "Buzzer", "LCD Ekran"],
        steps: "1. Mesafe sensörünü takın. 2. Mesafe azaldıkça buzzer sesini hızlandırın. 3. Değeri LCD ekranda anlık görün.",
        image: "https://maker.robotistan.com/wp-content/uploads/2016/05/HC-SR04-ile-Mesafe-Sensoru-Kullanimi.jpg"
    },
    {
        id: "p2",
        name: "Yüz Tanımalı Akıllı Kilit",
        required: ["ESP32-Cam", "24V Röle", "Servo Motor", "9V Pil"],
        steps: "1. ESP32-Cam modülüne AI kodunu yükleyin. 2. Yüz algılandığında röleyi tetikleyip kapıyı açın.",
        image: "https://vcl.com.tr/wp-content/uploads/2021/04/esp32-cam-face-recognition.jpg"
    },
    {
        id: "p3",
        name: "Çizgi İzleyen Akıllı Robot",
        required: ["Arduino Uno R3", "L298N Motor Sürücü", "Çizgi Sensörü", "Redüktörlü Motor", "Tekerlek"],
        steps: "1. Motorları şaseye sabitleyin. 2. Sensörleri zemine yakın monte edin. 3. Çizgi izleme kodunu yükleyin.",
        image: "https://maker.robotistan.com/wp-content/uploads/2016/06/6-1.jpg"
    },
    {
        id: "p4",
        name: "Ses Duyarlı Akıllı Işık",
        required: ["Arduino Uno R3", "Mikrofon Modülü", "LED", "9V Pil"],
        steps: "1. Mikrofon modülünü bağlayın. 2. Ortamdaki ses seviyesi eşiği aşınca LED'i yakın.",
        image: "https://maker.robotistan.com/wp-content/uploads/2016/05/arduino-ses-sensoru.jpg"
    }
];

let selectedInventory = [];

// Sayfa yüklendiğinde envanteri göster
document.addEventListener("DOMContentLoaded", () => {
    renderInventory(Object.keys(materialData));
});

function renderInventory(items) {
    const list = document.getElementById('inventory-list');
    if (!list) return; // Liste bulunamazsa hata verme
    list.innerHTML = "";
    items.forEach(name => {
        const data = materialData[name];
        const div = document.createElement('div');
        div.className = 'inv-item';
        div.innerHTML = `
            <strong>${name}</strong>
            <p style="font-size:10px; color:#aaa; margin:5px 0;">${data.desc}</p>
            <span style="color:#00f3ff; font-size:10px;">Masaya Ekle +</span>
        `;
        div.onclick = () => addToTable(name);
        list.appendChild(div);
    });
}

function addToTable(name) {
    if (!selectedInventory.includes(name)) {
        selectedInventory.push(name);
        const countEl = document.getElementById('part-count');
        if (countEl) countEl.innerText = selectedInventory.length;
        
        const itemContainer = document.createElement('div');
        itemContainer.className = "placed-part";
        itemContainer.style.position = "absolute";
        itemContainer.style.left = (Math.random() * 60 + 10) + "%";
        itemContainer.style.top = (Math.random() * 40 + 20) + "%";
        
        const imgSrc = materialData[name].img;
        
        itemContainer.innerHTML = `
            <div style="position:relative; text-align:center; cursor:pointer;" onclick="removeFromTable('${name}', this.parentElement)">
                <span style="position:absolute; top:-12px; right:-12px; background:red; color:white; border-radius:50%; width:22px; height:22px; font-size:12px; display:flex; align-items:center; justify-content:center; z-index:10; font-weight:bold; box-shadow: 0 0 5px #000;">X</span>
                <img src="${imgSrc}" width="85" title="${name}" style="border: 2px solid #00f3ff; border-radius: 8px; background: #fff; box-shadow: 0 0 15px #00f3ff;">
                <div style="font-size: 11px; color: #00f3ff; font-weight: bold; margin-top: 5px; text-shadow: 1px 1px 2px #000;">${name}</div>
            </div>
        `;

        const canvas = document.getElementById('table-canvas');
        if (canvas) canvas.appendChild(itemContainer);
        checkProjects();
    }
}

function removeFromTable(name, element) {
    selectedInventory = selectedInventory.filter(item => item !== name);
    if (element) element.remove();
    const countEl = document.getElementById('part-count');
    if (countEl) countEl.innerText = selectedInventory.length;
    checkProjects();
}

function checkProjects() {
    const available = projectDatabase.filter(proj => 
        proj.required.every(req => selectedInventory.includes(req))
    );

    const linkBox = document.getElementById('project-links');
    if (!linkBox) return;

    if (available.length > 0) {
        linkBox.innerHTML = available.map(p => 
            `<button class="project-btn" onclick="openManual('${p.id}')">${p.name}</button>`
        ).join('');
    } else {
        linkBox.innerHTML = `<p style="font-size: 11px; color: #888;">Eksik parçaları ekle...</p>`;
    }
}

function openManual(id) {
    const proj = projectDatabase.find(p => p.id === id);
    if (!proj) return;
    
    document.getElementById('m-project-name').innerText = proj.name;
    document.getElementById('m-project-steps').innerText = proj.steps;
    document.getElementById('m-project-img').src = proj.image;
    document.getElementById('m-project-parts').innerHTML = proj.required.map(p => 
        `<span class="part-tag">${p}</span>`
    ).join('');
    
    const modal = document.getElementById('manual-modal');
    if (modal) modal.style.display = "block";
}

function closeManual() {
    const modal = document.getElementById('manual-modal');
    if (modal) modal.style.display = "none";
}

function searchParts() {
    const term = document.getElementById('partSearch').value.toLowerCase();
    const filtered = Object.keys(materialData).filter(name => name.toLowerCase().includes(term));
    renderInventory(filtered);
}
