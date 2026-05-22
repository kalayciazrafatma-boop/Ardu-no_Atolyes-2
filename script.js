// ARDUINO LAB - GÜNCEL SCRIPT
const materialData = {
    "9V Pil": { img: "9v_pil.jpg", desc: "Devreye enerji sağlayan temel güç kaynağı." },
    "24V Röle": { img: "24v_role.jpg", desc: "Yüksek voltajlı cihazları kontrol etmek içindir." },
    "Alev Sensörü": { img: "ates_sensoru.jpg", desc: "Yangın ve kızılötesi ışığı algılar." },
    "Arduino Uno R3": { img: "arduino_uno.jpg", desc: "Sistemin beyni, kodları işleyen merkez." },
    "Ateş Sensörü": { img: "ates_sensoru.jpg", desc: "Alev algılama modülü." },
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
    "LED": { img: "led.jpg", desc: "Işıklı bildirim elemanı." },
    "Lehim Pastası": { img: "lehim_pastasi.jpg", desc: "Lehimi kolaylaştıran temizleyici madde." },
    "Lehim Pompası": { img: "lehim_pompasi.jpg", desc: "Eski lehimi çekip temizleyen pompa." },
    "Lehim Standı": { img: "lehim_standi.jpg", desc: "Sıcak havyayı tutan güvenlik standı." },
    "Lehim Teli": { img: "lehim_teli.jpg", desc: "Bağlantı için eritilen metal tel." },
    "Makaron": { img: "makaron.jpg", desc: "Isıyla daralan kablo yalıtımı." },
    "Mesafe Sensörü": { img: "mesafe_sensoru.jpg", desc: "Engel mesafesini ultrasonik ölçer." },
    "Mikrofon Modülü": { img: "mikrofon_modulu.jpg", desc: "Ortamdaki ses şiddetini algılar." },
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
    "Ses Sensörü": { img: "ses_sensoru.jpg", desc: "Sesleri sinyale çevirir." },
    "Sigorta": { img: "sigorta.jpg", desc: "Devreyi aşırı akıma karşı korur." },
    "Su Pompası": { img: "su_pompasi.jpg", desc: "Sıvı aktarımını sağlayan motor." },
    "Tact Buton": { img: "tact_buton.jpg", desc: "Küçük devre tetikleyici buton." },
    "Tekerlek": { img: "Tekerlek.jpg", desc: "Robot şaseleri için ana tekerlek." },
    "Touch Pad": { img: "touch_pad.jpg", desc: "Dokunmatik kontrol yüzeyi." },
    "TP4056 Şarj Modülü": { img: "tp4056.jpg", desc: "Lityum pil şarj devresi." },
    "Transistör": { img: "transistor.jpg", desc: "Sinyalleri anahtarlayan veya yükselten eleman." },
    "USB Kablo": { img: "usb.jpg", desc: "Arduino kod yükleme kablosu." },
    "Yağmur Sensörü": { img: "yagmur_sensoru.jpg", desc: "Su damlalarını algılayan sensör." }
};

const projectDatabase = [
    { id: "p1", name: "Bluetooth Araba", required: ["Arduino Uno R3", "HC-06 Bluetooth", "L298N Motor Sürücü", "Redüktörlü Motor", "Tekerlek"], steps: [{ img: "https://raw.githubusercontent.com/ArduPED/Arduino/master/Bluetooth_Car/schematic.png", text: "ADIM 1: Motorları şaseye takın ve Bluetooth modülünü RX-TX pinlerine bağlayın." }, { img: "https://i.ibb.co/VWV0pWJ/bluetooth.png", text: "ADIM 2: Motor sürücü bağlantılarını yapıp kodları yükleyin." }] },
    { id: "p2", name: "Engelden Kaçan Robot", required: ["Arduino Uno R3", "Mesafe Sensörü", "Servo Motor", "L298N Motor Sürücü", "Tekerlek"], steps: [{ img: "https://raw.githubusercontent.com/ArduPED/Arduino/master/Obstacle_Avoiding_Robot/schematic.png", text: "ADIM 1: Mesafe sensörünü servo üzerine monte edin." }, { img: "https://i.ibb.co/6X2pYpX/obstacle.png", text: "ADIM 2: Robotun engeli görmesi için kodları aktif edin." }] },
    { id: "p3", name: "RFID Kapı Sistemi", required: ["Arduino Uno R3", "RFID Kit", "Servo Motor", "LCD Ekran"], steps: [{ img: "https://raw.githubusercontent.com/omersiar/RFID-Door-Lock/master/Images/Schematic.png", text: "ADIM 1: RFID okuyucuyu Arduino SPI pinlerine bağlayın." }] },
    { id: "p4", name: "Yangın Alarmı", required: ["Arduino Uno R3", "Alev Sensörü", "Buzzer", "LED"], steps: [{ img: "https://raw.githubusercontent.com/H0ney-B33/Fire-Alarm-System/master/fire_alarm_schematic.png", text: "ADIM 1: Alev sensörü eşik değerini analog pin üzerinden okuyun." }] },
    { id: "p5", name: "Akıllı Sulama", required: ["Arduino Uno R3", "Nem Kontrol Sensörü", "Su Pompası", "24V Röle"], steps: [{ img: "https://raw.githubusercontent.com/ashish7sharma/Smart-Irrigation-System/master/schematic.png", text: "ADIM 1: Toprak nem sensörünü ve pompayı röle üzerinden sisteme bağlayın." }] },
    { id: "p6", name: "Ses Kontrollü Işık", required: ["Arduino Uno R3", "Mikrofon Modülü", "24V Röle"], steps: [{ img: "https://raw.githubusercontent.com/ashishgit7/Arduino-Sound-Sensor/master/Sound_Sensor_Schematic.png", text: "ADIM 1: Mikrofon modülünden gelen ses şiddetine göre röleyi tetikleyin." }] },
    { id: "p7", name: "Joystick Araba", required: ["Arduino Uno R3", "Joystick", "L298N Motor Sürücü", "Tekerlek"], steps: [{ img: "https://raw.githubusercontent.com/Fisat-Robotics/Joystick-Controlled-Robot/master/Joystick_Robot_Schematic.png", text: "ADIM 1: Joystick verilerine göre motor hızını ayarlayın." }] },
    { id: "p8", name: "IR Kumandalı Robot", required: ["Arduino Uno R3", "IR Kumanda Kiti", "L298N Motor Sürücü", "Tekerlek"], steps: [{ img: "https://raw.githubusercontent.com/V-E-S-T-A/IR-Remote-Control-Car/master/Circuit_Diagram.png", text: "ADIM 1: Kumanda tuş kodlarını Arduino'ya tanıtın." }] },
    { id: "p9", name: "Güvenlik Sistemi", required: ["Arduino Uno R3", "PIR Sensör", "Buzzer", "Keypad"], steps: [{ img: "https://raw.githubusercontent.com/The-V/Arduino-Security-System/master/Security_System_Schematic.png", text: "ADIM 1: Hareket algılandığında şifre girilene kadar alarm verin." }] },
    { id: "p10", name: "Gaz Alarmı", required: ["Arduino Uno R3", "Gaz Sensörü", "Buzzer", "LCD Ekran"], steps: [{ img: "https://raw.githubusercontent.com/CircuitDigest/Arduino-Gas-Leakage-Detector/master/Gas_Detector_Circuit.png", text: "ADIM 1: Gaz sızıntısı durumunda LCD ekranı kırmızı yapıp alarmı çalın." }] },
    { id: "p11", name: "WiFi Kamera", required: ["ESP32-Cam", "PIR Sensör", "9V Pil"], steps: [{ img: "https://raw.githubusercontent.com/RuiSantosdotme/ESP32-CAM-Projects/master/ESP32-CAM-PIR-Sensor-Photo/Circuit-Diagram.png", text: "ADIM 1: Hareket olduğunda ESP32-Cam ile fotoğraf çekip gönderin." }] },
    { id: "p12", name: "Nabız Ölçer", required: ["Arduino Uno R3", "Nabız Sensörü", "LCD Ekran"], steps: [{ img: "https://raw.githubusercontent.com/Robotistan/Arduino-Dersleri/main/nabiz-sensoru/nabiz-olcer.png", text: "ADIM 1: Nabız verisini parmaktan okuyup LCD ekranda grafikleyin." }] },
    { id: "p13", name: "Akıllı Sera", required: ["Arduino Uno R3", "Nem Kontrol Sensörü", "Yağmur Sensörü", "LCD Ekran"], steps: [{ img: "https://raw.githubusercontent.com/Smart-Greenhouse/Arduino-Greenhouse/master/Schematic.png", text: "ADIM 1: Sera içi nem ve dış yağmur durumunu anlık takip edin." }] },
    { id: "p14", name: "Saat Sistemi", required: ["Arduino Uno R3", "RTC Saat Modülü", "LCD Ekran"], steps: [{ img: "https://raw.githubusercontent.com/CircuitDigest/Arduino-RTC-Digital-Clock/master/RTC_Clock_Schematic.png", text: "ADIM 1: RTC modülünden veriyi çekip güncel saati gösterin." }] },
    { id: "p15", name: "Touch Lamba", required: ["Arduino Uno R3", "Touch Pad", "24V Röle"], steps: [{ img: "https://raw.githubusercontent.com/CircuitDigest/Arduino-Touch-Sensor/master/Touch_Sensor_Schematic.png", text: "ADIM 1: Dokunmatik yüzeye basıldığında röle ile lambayı yakın." }] },
    { id: "p16", name: "Akıllı Park Sensörü", required: ["Arduino Uno R3", "Mesafe Sensörü", "Buzzer", "LCD Ekran"], steps: [{ img: "https://raw.githubusercontent.com/Robotistan/Arduino-Dersleri/main/hc-sr04/hc-sr04-arduino-baglanti-semasi.png", text: "ADIM 1: Mesafe sensörünü bağlayıp buzzer sesini hızlandırın." }] },
    { id: "p17", name: "Çizgi İzleyen", required: ["Arduino Uno R3", "L298N Motor Sürücü", "Çizgi Sensörü", "Tekerlek"], steps: [{ img: "https://raw.githubusercontent.com/Robotistan/Arduino-Dersleri/main/cizgi-izleyen/cizgi-izleyen.png", text: "ADIM 1: Sensörleri siyah çizgiyi takip edecek şekilde monte edin." }] },
    { id: "p18", name: "Yüz Tanıma", required: ["ESP32-Cam", "24V Röle", "Servo Motor", "9V Pil"], steps: [{ img: "https://raw.githubusercontent.com/RuiSantosdotme/ESP32-CAM-Projects/master/ESP32-CAM-Face-Recognition-Door-Lock/Circuit-Diagram.png", text: "ADIM 1: Tanımlı yüz algılandığında röleyi tetikleyip kapıyı açın." }] }
];

let selectedInventory = [];
let currentProject = null;
let currentStep = 0;

document.addEventListener("DOMContentLoaded", () => {
    // TÜRKÇE ALFABETİK SIRALAMA
    const sortedNames = Object.keys(materialData).sort((a, b) => a.localeCompare(b, 'tr'));
    renderInventory(sortedNames);

    // MODAL DIŞI TIKLAMAYLA KAPATMA
    window.onclick = function(e) {
        const modal = document.getElementById('manual-modal');
        if (e.target == modal) closeManual();
    }
});

function renderInventory(items) {
    const list = document.getElementById('inventory-list');
    if (!list) return;
    list.innerHTML = "";
    items.forEach(name => {
        const data = materialData[name];
        const div = document.createElement('div');
        div.className = 'inv-item';
        div.innerHTML = `<strong>${name}</strong><p style="font-size:10px; color:#aaa; margin:5px 0;">${data.desc}</p><span style="color:#39ff14; font-size:9px;">EKLE +</span>`;
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
        itemContainer.style.left = (Math.random() * 65 + 10) + "%";
        itemContainer.style.top = (Math.random() * 45 + 15) + "%";
        
        const imgSrc = materialData[name].img;
        
        itemContainer.innerHTML = `
            <div style="position:relative; text-align:center; cursor:pointer;" onclick="removeFromTable('${name}', this.parentElement)">
                <span style="position:absolute; top:-12px; right:-12px; background:#ff4d4d; color:white; border-radius:50%; width:22px; height:22px; font-size:14px; display:flex; align-items:center; justify-content:center; z-index:100; border:2px solid #fff; font-weight:bold;">×</span>
                <img src="${imgSrc}" width="80" style="border: 2px solid #00f3ff; border-radius: 8px; background: #fff; box-shadow: 0 0 10px rgba(0,243,255,0.3);">
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
            `<button class="project-btn" onclick="openManual('${p.id}')">${p.name} [GÖSTER]</button>`
        ).join('');
    } else {
        linkBox.innerHTML = `<p style="font-size: 11px; color: #888;">Gerekli parçaları ekleyin.</p>`;
    }
}

function openManual(id) {
    currentProject = projectDatabase.find(p => p.id === id);
    currentStep = 0;
    updateStepUI();
    document.getElementById('manual-modal').style.display = "block";
}

function updateStepUI() {
    const step = currentProject.steps[currentStep];
    document.getElementById('m-project-name').innerText = currentProject.name;
    document.getElementById('step-indicator').innerText = `ADIM ${currentStep + 1} / ${currentProject.steps.length}`;
    document.getElementById('m-project-steps').innerText = step.text;
    const imgEl = document.getElementById('m-project-img');
    imgEl.style.display = 'block';
    imgEl.src = step.img;
    imgEl.onerror = function() {
        this.style.display = 'none';
        const parent = this.parentElement;
        parent.innerHTML = `<div style="color:#666; font-size:14px; text-align:center; padding:20px;">Görsel yüklenemedi. Link internet kuralına göre çekiliyor.</div>`;
    };
    document.getElementById('m-project-parts').innerHTML = currentProject.required.map(p => `<span class="part-tag">${p}</span>`).join('');
}

function nextStep() {
    if (currentStep < currentProject.steps.length - 1) { currentStep++; updateStepUI(); }
}

function prevStep() {
    if (currentStep > 0) { currentStep--; updateStepUI(); }
}

function closeManual() {
    document.getElementById('manual-modal').style.display = "none";
}

function searchParts() {
    const term = document.getElementById('partSearch').value.toLowerCase();
    const filtered = Object.keys(materialData).filter(name => name.toLowerCase().includes(term)).sort((a, b) => a.localeCompare(b, 'tr'));
    renderInventory(filtered);
}
