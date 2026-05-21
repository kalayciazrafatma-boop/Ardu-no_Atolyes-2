// ARDUINO LAB - GÜNCEL SCRIPT
const materialData = {
    "9V Pil": { img: "9v_pil.jpg", desc: "Devreye enerji sağlayan temel güç kaynağı." },
    "Mikrofon Modülü": { img: "mikrofon_modulu.jpg", desc: "Ortamdaki ses şiddetini algılayan sensör." },
    "Sigorta": { img: "sigorta.jpg", desc: "Yüksek akımda devreyi keserek koruma sağlar." },
    "24V Röle": { img: "24v_role.jpg", desc: "Yüksek voltajlı cihazları kontrol etmek içindir." },
    "Arduino Uno R3": { img: "arduino_uno.jpg", desc: "Sistemin beyni, kodları işleyen merkez." },
    "Alev Sensörü": { img: "ates_sensoru.jpg", desc: "Yangın ve kızılötesi ışığı algılar." },
    "Breadboard": { img: "breadboard.jpg", desc: "Lehimsiz devre kurma ve test tahtası." },
    "Buton": { img: "buton.jpg", desc: "Basıldığında sinyal gönderen anahtar." },
    "Buzzer": { img: "buzzer.jpg", desc: "Sesli uyarı ve sinyal vermeyi sağlar." },
    "Çizgi Sensörü": { img: "cizgi_sensoru.jpg", desc: "Siyah ve beyaz zemini ayırt eder." },
    "Dijital Amplifikatör": { img: "dijital_amplifikator.jpg", desc: "Ses sinyallerini yükseltir." },
    "DIP Switch": { img: "dip_switch.jpg", desc: "Çoklu açma-kapama ayar anahtarı." },
    "Direnç": { img: "direnc.jpg", desc: "Akımı sınırlayarak parçaları korur." },
    "DTMF Modülü": { img: "dtmf_modul.jpg", desc: "Telefon tuş seslerini algılar." },
    "ESP32-Cam": { img: "esp32_cam.jpg", desc: "Wi-Fi destekli kamera ve AI modülü." },
    "Gaz Sensörü": { img: "gaz_sensoru.jpg", desc: "Yanıcı ve zehirli gazları algılar." },
    "Güneş Paneli": { img: "gunes_paneli.jpg", desc: "Güneş ışığını elektriğe çevirir." },
    "Havya": { img: "havya.jpg", desc: "Parçaları birbirine lehimlemek için kullanılır." },
    "HC-06 Bluetooth": { img: "hc06_bluetooth.jpg", desc: "Telefondan kablosuz kontrol sağlar." },
    "IR Kumanda Kiti": { img: "ir_kumanda_kit.jpg", desc: "Uzaktan kumanda ile kontrol seti." },
    "Joystick": { img: "joystick.jpg", desc: "İki eksenli manuel yön kontrolü." },
    "Jumper Kablo": { img: "jumper.jpg", desc: "Bileşenler arası bağlantı kurar." },
    "Kalıcı Buton": { img: "kalici_buton.jpg", desc: "Basıldığında konumunu koruyan buton." },
    "Keypad": { img: "keypad.jpg", desc: "Şifre ve veri girişi için tuş takımı." },
    "Kondansatör": { img: "kondansator.jpg", desc: "Enerji depolayan elektronik eleman." },
    "Krokodil Kablo": { img: "krokodil.jpg", desc: "Hızlı test bağlantısı için kıskaçlı kablo." },
    "Kumpas": { img: "kumpas.jpg", desc: "Hassas uzunluk ve çap ölçüm aracı." },
    "L293D Entegre": { img: "l293d.jpg", desc: "Motorlar için sürücü çipi." },
    "L298N Motor Sürücü": { img: "l298n.jpg", desc: "Motorların hız ve yönünü belirler." },
    "LCD Ekran": { img: "lcd_ekran.jpg", desc: "Bilgi ve verileri yazdırmak için ekran." },
    "LED": { img: "led.jpg", desc: "Işıklı bildirim ve aydınlatma elemanı." },
    "Lehim Pastası": { img: "lehim_pastasi.jpg", desc: "Lehimi kolaylaştıran temizleyici." },
    "Lehim Pompası": { img: "lehim_pompasi.jpg", desc: "Eski lehimi çekip temizleyen pompa." },
    "Lehim Standı": { img: "lehim_standi.jpg", desc: "Sıcak havyayı tutan güvenlik standı." },
    "Lehim Teli": { img: "lehim_teli.jpg", desc: "Bağlantı için eritilen metal tel." },
    "Makaron": { img: "makaron.jpg", desc: "Isıyla daralan kablo yalıtımı." },
    "Mesafe Sensörü": { img: "mesafe_sensoru.jpg", desc: "Engel mesafesini ultrasonik ölçer." },
    "Multimetre": { img: "multimetre.jpg", desc: "Voltaj, akım ve direnç ölçer." },
    "Nabız Sensörü": { img: "nabiz_sensoru.jpg", desc: "Kalp atış hızını ölçen sensör." },
    "Nem Kontrol Sensörü": { img: "nem_kontrol.jpg", desc: "Toprak nemini takip eden sensör." },
    "Piezo Buzzer": { img: "piezo_buzzer.jpg", desc: "Titreşimle ses üreten ince buzzer." },
    "Pil Yuvası": { img: "pil_yuvasi.jpg", desc: "Pilleri devreye bağlamayı sağlar." },
    "PIR Sensör": { img: "pir_sensor.jpg", desc: "Harekete duyarlı kızılötesi sensör." },
    "Potansiyometre": { img: "potansiyometre.jpg", desc: "Ayarlanabilir direnç." },
    "Redüktörlü Motor": { img: "reduktorlu_motor.jpg", desc: "Güçlü dişli motor." },
    "Voltaj Regülatörü": { img: "regulator.jpg", desc: "Voltajı sabit bir değere düşürür." },
    "RFID Kit": { img: "rfid_kit.jpg", desc: "Kartlı kapı açma sistemi kiti." },
    "RTC Saat Modülü": { img: "rtc_modul.jpg", desc: "Zaman sayacı modülü." },
    "Sarhoş Tekerlek": { img: "sarhos_tekerlek.jpg", desc: "Robotun kolay dönmesini sağlar." },
    "Servo Motor": { img: "servo.jpg", desc: "Hassas açıyla dönen motor." },
    "Ses Sensörü": { img: "ses_sensoru.jpg", desc: "Sesleri elektrik sinyaline çevirir." },
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
        steps: "1. Mesafe sensörünü bağlayın. 2. Mesafe 10cm'nin altına indiğinde buzzer'ı hızlı öttürün. 3. Mesafeyi LCD ekranda gösterin.",
        image: "https://www.robotistan.com/Data/EditorFiles/hc-sr04-arduino-baglanti-semasi.png"
    },
    {
        id: "p2",
        name: "Yüz Tanımalı Kapı Kilidi",
        required: ["ESP32-Cam", "24V Röle", "Servo Motor", "9V Pil"],
        steps: "1. ESP32-Cam modülüne AI kodunu yükleyin. 2. Yüz algılandığında röleyi tetikleyip servo ile kilidi açın.",
        image: "https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2020/03/ESP32-CAM-Face-Recognition-Door-Lock-System-Circuit.png"
    },
    {
        id: "p3",
        name: "Çizgi İzleyen Araba",
        required: ["Arduino Uno R3", "L298N Motor Sürücü", "Çizgi Sensörü", "Redüktörlü Motor", "Tekerlek"],
        steps: "1. Şaseye motorları ve tekerlekleri takın. 2. Sensörleri zemine yakın monte edin. 3. Kontrol kodlarını yükleyin.",
        image: "https://www.robotistan.com/Data/EditorFiles/cizgi-izleyen-robot-semasi.png"
    }
];

let selectedInventory = [];

document.addEventListener("DOMContentLoaded", () => {
    renderInventory(Object.keys(materialData));
});

function renderInventory(items) {
    const list = document.getElementById('inventory-list');
    if (!list) return;
    list.innerHTML = "";
    items.forEach(name => {
        const data = materialData[name];
        const div = document.createElement('div');
        div.className = 'inv-item';
        div.innerHTML = `
            <strong>${name}</strong>
            <p style="font-size:10px; color:#aaa; margin:5px 0;">${data.desc}</p>
            <span style="color:#00f3ff; font-size:10px;">Ekle +</span>
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
        itemContainer.style.left = (Math.random() * 60 + 10) + "%";
        itemContainer.style.top = (Math.random() * 40 + 20) + "%";
        const imgSrc = materialData[name].img;
        itemContainer.innerHTML = `
            <div style="position:relative; text-align:center; cursor:pointer;" onclick="removeFromTable('${name}', this.parentElement)">
                <span style="position:absolute; top:-12px; right:-12px; background:red; color:white; border-radius:50%; width:20px; height:20px; font-size:12px; display:flex; align-items:center; justify-content:center; z-index:10;">X</span>
                <img src="${imgSrc}" width="75" style="border: 2px solid #00f3ff; border-radius: 8px; background: #fff;">
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
    const available = projectDatabase.filter(proj => proj.required.every(req => selectedInventory.includes(req)));
    const linkBox = document.getElementById('project-links');
    if (available.length > 0) {
        linkBox.innerHTML = available.map(p => `<button class="project-btn" onclick="openManual('${p.id}')">${p.name}</button>`).join('');
    } else {
        linkBox.innerHTML = `<p style="font-size: 11px; color: #888;">Eksik parçaları ekleyin...</p>`;
    }
}

function openManual(id) {
    const proj = projectDatabase.find(p => p.id === id);
    document.getElementById('m-project-name').innerText = proj.name;
    document.getElementById('m-project-steps').innerText = proj.steps;
    document.getElementById('m-project-img').src = proj.image;
    document.getElementById('m-project-parts').innerHTML = proj.required.map(p => `<span class="part-tag">${p}</span>`).join('');
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
