// ARDUINO LAB - GÜNCEL SCRIPT
const materialData = {
    "9V Pil": { img: "9v_pil.jpg", desc: "Devreye enerji sağlayan temel güç kaynağı." },
    "24V Röle": { img: "24v_role.jpg", desc: "Yüksek voltajlı cihazları kontrol etmek içindir." },
    "Alev Sensörü": { img: "ates_sensoru.jpg", desc: "Yangın ve kızılötesi ışığı algılar." },
    "Arduino Uno R3": { img: "arduino_uno.jpg", desc: "Sistemin beyni, kodları işleyen merkez." },
    "Ateş Sensörü": { img: "ates_sensoru.jpg", desc: "Alev ve yangın algılama modülü." },
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
    "L293D Entegre": { img: "l293d.jpg", desc: "Küçük motorlar için sürücü çipi." },
    "L298N Motor Sürücü": { img: "l298n.jpg", desc: "Büyük motorların hız ve yönünü belirler." },
    "LCD Ekran": { img: "lcd_ekran.jpg", desc: "Bilgi ve verileri yazdırmak için ekran." },
    "LED": { img: "led.jpg", desc: "Işıklı bildirim ve aydınlatma elemanı." },
    "Lehim Pastası": { img: "lehim_pastasi.jpg", desc: "Lehimi kolaylaştıran temizleyici madde." },
    "Lehim Pompası": { img: "lehim_pompasi.jpg", desc: "Eski lehimi çekip temizleyen pompa." },
    "Lehim Standı": { img: "lehim_standi.jpg", desc: "Sıcak havyayı tutan güvenlik standı." },
    "Lehim Teli": { img: "lehim_teli.jpg", desc: "Bağlantı için eritilen metal tel." },
    "Makaron": { img: "makaron.jpg", desc: "Isıyla daralan kablo yalıtımı." },
    "Mesafe Sensörü": { img: "mesafe_sensoru.jpg", desc: "Engel mesafesini ultrasonik ölçer." },
    "Mikrofon Modülü": { img: "mikrofon_modulu.jpg", desc: "Ortamdaki ses şiddetini algılar." }, // DÜZELTİLDİ
    "Multimetre": { img: "multimetre.jpg", desc: "Voltaj, akım ve direnç ölçer." },
    "Nabız Sensörü": { img: "nabiz_sensoru.jpg", desc: "Kalp atış hızını ölçen sensör." },
    "Nem Kontrol Sensörü": { img: "nem_kontrol.jpg", desc: "Toprak nemini takip eden sensör." },
    "Piezo Buzzer": { img: "piezo_buzzer.jpg", desc: "Titreşimle ses üreten ince buzzer." },
    "Pil Yuvası": { img: "pil_yuvasi.jpg", desc: "Pilleri devreye bağlamayı sağlar." },
    "PIR Sensör": { img: "pir_sensor.jpg", desc: "Harekete duyarlı kızılötesi sensör." },
    "Potansiyometre": { img: "potansiyometre.jpg", desc: "Ayarlanabilir direnç." },
    "Redüktörlü Motor": { img: "reduktorlu_motor.jpg", desc: "Güçlü hareket sağlayan dişli motor." },
    "Voltaj Regülatörü": { img: "regulator.jpg", desc: "Voltajı sabit bir değere düşürür." },
    "RFID Kit": { img: "rfid_kit.jpg", desc: "Kartlı kapı açma sistemi kiti." },
    "RTC Saat Modülü": { img: "rtc_modul.jpg", desc: "Gerçek zamanlı saat bilgisini tutar." },
    "Sarhoş Tekerlek": { img: "sarhos_tekerlek.jpg", desc: "Robotun kolay dönmesini sağlar." },
    "Servo Motor": { img: "servo.jpg", desc: "Hassas açıyla dönen motor." },
    "Ses Sensörü": { img: "ses_sensoru.jpg", desc: "Sesleri elektrik sinyaline çevirir." },
    "Sigorta": { img: "sigorta.jpg", desc: "Devreyi aşırı akıma karşı korur." },
    "Su Pompası": { img: "su_pompasi.jpg", desc: "Sıvı aktarımını sağlayan motor." },
    "Tact Buton": { img: "tact_buton.jpg", desc: "Küçük devre tetikleyici buton." },
    "Tekerlek": { img: "Tekerlek.jpg", desc: "Robot şaseleri için ana tekerlek." }, // DÜZELTİLDİ
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
        steps: "1. Mesafe sensörünü VCC-5V, GND-GND, Trig-9, Echo-8 pinlerine bağlayın. 2. Buzzer'ı 10. pine takın. 3. Mesafe azaldıkça buzzer sesini hızlandıracak kodu yükleyin.",
        image: "https://www.robotistan.com/Data/EditorFiles/hc-sr04-arduino-baglanti-semasi.png"
    },
    {
        id: "p2",
        name: "Yüz Tanımalı Kapı Kilidi",
        required: ["ESP32-Cam", "24V Röle", "Servo Motor", "9V Pil"],
        steps: "1. ESP32-Cam modülüne AI yüz tanıma kodunu yükleyin. 2. Röleyi GPIO 4 pinine bağlayın. 3. Yüz tanındığında kapı kilidini açması için kodu aktif edin.",
        image: "https://maker.robotistan.com/wp-content/uploads/2021/04/esp32-cam-kapi-kilidi.jpg"
    },
    {
        id: "p3",
        name: "Çizgi İzleyen Robot",
        required: ["Arduino Uno R3", "L298N Motor Sürücü", "Çizgi Sensörü", "Redüktörlü Motor", "Tekerlek"],
        steps: "1. Motorları ve tekerlekleri şaseye monte edin. 2. Çizgi sensörlerini zemine paralel dizin. 3. Siyah çizgiyi takip eden kodu Arduino'ya yükleyin.",
        image: "https://www.robotistan.com/Data/EditorFiles/cizgi-izleyen-robot-semasi.png"
    }
];

let selectedInventory = [];

document.addEventListener("DOMContentLoaded", () => {
    // ALFABETİK SIRALAMA YAPILIYOR
    const sortedNames = Object.keys(materialData).sort((a, b) => a.localeCompare(b, 'tr'));
    renderInventory(sortedNames);
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
            <span style="color:#39ff14; font-size:9px; font-weight:bold;">EKLE +</span>
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
        itemContainer.style.left = (Math.random() * 65 + 10) + "%";
        itemContainer.style.top = (Math.random() * 45 + 15) + "%";
        const imgSrc = materialData[name].img;
        itemContainer.innerHTML = `
            <div style="position:relative; text-align:center; cursor:pointer;" onclick="removeFromTable('${name}', this.parentElement)">
                <span style="position:absolute; top:-12px; right:-12px; background:#ff4d4d; color:white; border-radius:50%; width:22px; height:22px; font-size:13px; display:flex; align-items:center; justify-content:center; z-index:10; border:1px solid #fff;">×</span>
                <img src="${imgSrc}" width="80" style="border: 2px solid #00f3ff; border-radius: 8px; background: #fff;">
                <div style="font-size: 10px; color: #00f3ff; font-weight: bold; margin-top: 5px; text-shadow: 1px 1px 2px #000;">${name}</div>
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
        linkBox.innerHTML = `<p style="font-size: 11px; color: #888;">Gerekli parçaları ekleyin.</p>`;
    }
}

function openManual(id) {
    const proj = projectDatabase.find(p => p.id === id);
    document.getElementById('m-project-name').innerText = proj.name;
    document.getElementById('m-project-steps').innerText = proj.steps;
    
    const imgEl = document.getElementById('m-project-img');
    imgEl.src = proj.image;
    
    // GÖRSEL YÜKLENMEZSE HATA PANELİNİ DÜZELT
    imgEl.onerror = function() {
        this.style.display = 'none';
        const parent = this.parentElement;
        parent.innerHTML = `<div style="color:#666; font-size:14px; text-align:center;">Şema görseline şu an ulaşılamıyor, ancak yukarıdaki adımları takip ederek devreyi kurabilirsiniz.</div>`;
    };

    document.getElementById('m-project-parts').innerHTML = proj.required.map(p => `<span class="part-tag">${p}</span>`).join('');
    document.getElementById('manual-modal').style.display = "block";
}

function closeManual() {
    document.getElementById('manual-modal').style.display = "none";
}

function searchParts() {
    const term = document.getElementById('partSearch').value.toLowerCase();
    const filtered = Object.keys(materialData).filter(name => name.toLowerCase().includes(term)).sort((a, b) => a.localeCompare(b, 'tr'));
    renderInventory(filtered);
}
