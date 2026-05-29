// ARDUINO LAB - GÜNCEL SCRIPT
const materialData = {
    "24V Röle": { img: "24v_role.jpg", desc: "Yüksek voltajlı cihazları kontrol etmek içindir." },
    "7 Segment Ekran": { img: "7segment.jpg", desc: "Rakamları ve saatleri göstermek için kullanılan LED ekran." },
    "9V Pil": { img: "9v_pil.jpg", desc: "Devreye enerji sağlayan temel güç kaynağı." },
    "Alev Sensörü": { img: "ates_sensoru.jpg", desc: "Yangın ve kızılötesi ışığı algılar." },
    "Arduino Nano": { img: "arduino_nano.jpg", desc: "Daha kompakt, breadboard uyumlu mikrodenetleyici." },
    "Arduino Uno R3": { img: "arduino_uno.jpg", desc: "Sistemin beyni, kodları işleyen merkez." },
    "Ateş Sensörü": { img: "ates_sensoru.jpg", desc: "Alev algılama modülü." },
    "Breadboard": { img: "breadboard.jpg", desc: "Lehimsiz devre kurma ve test tahtası." },
    "Buton": { img: "buton.jpg", desc: "Basıldığında sinyal gönderen anahtar." },
    "Buzzer": { img: "buzzer.jpg", desc: "Sesli uyarı ve sinyal vermeyi sağlar." },
    "Çizgi Sensörü": { img: "cizgi_sensoru.jpg", desc: "Siyah ve beyaz zemini ayırt eder." },
    "DC Motor": { img: "dc_motor.jpg", desc: "Tekerlek ve mekanizmaları döndüren standart motor." },
    "Dijital Amplifikatör": { img: "dijital_amplifikator.jpg", desc: "Ses sinyallerini yükseltir." },
    "DIP Switch": { img: "dip_switch.jpg", desc: "Çoklu açma-kapama ayar anahtarı." },
    "Direnç": { img: "direnc.jpg", desc: "Akımı sınırlayarak parçaları korur." },
    "DTMF Modülü": { img: "dtmf_modul.jpg", desc: "Telefon tuş seslerini algılar." },
    "Düşme/Kenar Sensörü": { img: "kenar_sensoru.jpg", desc: "Zemin boşluklarını algılayarak robotun düşmesini engeller." },
    "ESP32-Cam": { img: "esp32_cam.jpg", desc: "Wi-Fi destekli kamera ve AI modülü." },
    "Fan Modülü": { img: "fan_modulu.jpg", desc: "Havalandırma ve soğutma için kullanılan pervaneli motor." },
    "Gaz Sensörü": { img: "gaz_sensoru.jpg", desc: "Yanıcı ve zehirli gazları algılar." },
    "GPS Modülü": { img: "gps_modulu.jpg", desc: "Uydu üzerinden konum ve zaman verisi sağlar." },
    "Güneş Paneli": { img: "gunes_paneli.jpg", desc: "Güneş ışığını elektriğe çevirir." },
    "Havya": { img: "havya.jpg", desc: "Parçaları birbirine lehimlemek için kullanılır." },
    "HC-06 Bluetooth": { img: "hc06_bluetooth.jpg", desc: "Telefondan kablosuz kontrol sağlar." },
    "IR Kumanda Kiti": { img: "ir_kumanda_kit.jpg", desc: "Uzaktan kumanda ile kontrol seti." },
    "Işık Sensörü (LDR)": { img: "ldr_sensor.jpg", desc: "Ortamdaki ışık şiddetini algılayan devre elemanı." },
    "İvme ve Eğim Sensörü (ADXL345)": { img: "adxl345.jpg", desc: "Hareket, eğim ve ivme ölçümü yapar (Su terazisi vb.)." },
    "Joystick": { img: "joystick.jpg", desc: "İki eksenli manuel yön kontrolü." },
    "Jumper Kablo": { img: "jumper.jpg", desc: "Bileşenler arası bağlantı kurar." },
    "Kalıcı Buton": { img: "kalici_buton.jpg", desc: "Basıldığında konumunu koruyan buton." },
    "Kamera Modülü": { img: "kamera_modulu.jpg", desc: "Görüntü ve yüz algılama işlemleri için kullanılan lens." },
    "Keypad": { img: "keypad.jpg", desc: "Şifre ve veri girişi için tuş takımı." },
    "Kondansatör": { img: "kondansator.jpg", desc: "Enerji depolayan elektronik eleman." },
    "Krokodil Kablo": { img: "krokodil.jpg", desc: "Hızlı test bağlantısı için kıskaçlı kablo." },
    "Kumpas": { img: "kumpas.jpg", desc: "Hassas uzunluk ve çap ölçüm aracı." },
    "L293D Entegre": { img: "l293d.jpg", desc: "Küçük motorlar için sürücü çipi." },
    "L298N Motor Sürücü": { img: "l298n.jpg", desc: "Büyük motorların hız ve yönünü belirler." },
    "LCD Ekran": { img: "lcd_ekran.jpg", desc: "Bilgi ve verileri yazdırmak için ekran." },
    "LED": { img: "led.jpg", desc: "Işıklı bildirim elemanı." },
    "Lehim Pastası": { img: "lehim_pastasi.jpg", desc: "Lehimi kolaylaştıran temizleyici." },
    "Lehim Pompası": { img: "lehim_pompasi.jpg", desc: "Eski lehimi çekip temizleyen pompa." },
    "Lehim Standı": { img: "lehim_standi.jpg", desc: "Sıcak havyayı tutan güvenlik standı." },
    "Lehim Teli": { img: "lehim_teli.jpg", desc: "Bağlantı için eritilen metal tel." },
    "Li-Po Batarya": { img: "lipo_batarya.jpg", desc: "Şarj edilebilir, ince ve yüksek kapasiteli batarya." },
    "Makaron": { img: "makaron.jpg", desc: "Isıyla daralan kablo yalıtımı." },
    "Manyetik Kontak": { img: "manyetik_kontak.jpg", desc: "Kapı ve pencerelerin açıldığını algılayan güvenlik sensörü." },
    "Mesafe Sensörü": { img: "mesafe_sensoru.jpg", desc: "Engel mesafesini ultrasonik ölçer." },
    "Mikrofon Modülü": { img: "mikrofon_modulu.jpg", desc: "Ortamdaki ses şiddetini algılar." },
    "Multimetre": { img: "multimetre.jpg", desc: "Voltaj, akım ve direnç ölçer." },
    "Nabız Sensörü": { img: "nabiz_sensoru.jpg", desc: "Kalp atış hızını ölçen sensör." },
    "Nem Kontrol Sensörü": { img: "nem_kontrol.jpg", desc: "Toprak nemini takip eden sensör." },
    "OLED Ekran": { img: "oled_ekran.jpg", desc: "Küçük, yüksek kontrastlı dijital grafik ekran." },
    "Parmak İzi Okuyucu": { img: "parmak_izi.jpg", desc: "Güvenlik sistemleri için biyometrik okuma modülü." },
    "Piezo Buzzer": { img: "piezo_buzzer.jpg", desc: "Titreşimle ses üreten ince buzzer." },
    "Pil Yuvası": { img: "pil_yuvasi.jpg", desc: "Pilleri devreye bağlamayı sağlar." },
    "PIR Sensör": { img: "pir_sensor.jpg", desc: "Harekete duyarlı kızılötesi sensör." },
    "Potansiyometre": { img: "potansiyometre.jpg", desc: "Ayarlanabilir direnç." },
    "Redüktörlü Motor": { img: "reduktorlu_motor.jpg", desc: "Güçlü hareket sağlayan dişli motor." },
    "Renk Sensörü": { img: "renk_sensoru.jpg", desc: "Nesnelerin renklerini (RGB) ayırt etmek için kullanılır." },
    "RFID Kit": { img: "rfid_kit.jpg", desc: "Kartlı kapı açma sistemi kiti." },
    "RTC Saat Modülü": { img: "rtc_modul.jpg", desc: "Gerçek zamanlı saat bilgisini tutar." },
    "Sarhoş Tekerlek": { img: "sarhos_tekerlek.jpg", desc: "Robotun kolay dönmesini sağlar." },
    "Servo Motor": { img: "servo.jpg", desc: "Hassas açıyla dönen motor." },
    "Ses Sensörü": { img: "ses_sensoru.jpg", desc: "Sesleri elektrik sinyaline çevirir." },
    "Sıcaklık Sensörü (DHT11/DS18B20)": { img: "sicaklik_sensoru.jpg", desc: "Ortamın veya temas edilen yüzeyin ısısını ölçer." },
    "Sigorta": { img: "sigorta.jpg", desc: "Devreyi aşırı akıma karşı korur." },
    "Step Motor": { img: "step_motor.jpg", desc: "Adım adım yüksek hassasiyetle dönen motor (Kasa kilidi vb.)." },
    "Su Pompası": { img: "su_pompasi.jpg", desc: "Sıvı aktarımını sağlayan motor." },
    "Tact Buton": { img: "tact_buton.jpg", desc: "Küçük devre tetikleyici buton." },
    "Tekerlek": { img: "Tekerlek.jpg", desc: "Robot şaseleri için ana tekerlek." },
    "Touch Pad": { img: "touch_pad.jpg", desc: "Dokunmatik kontrol yüzeyi." },
    "Toz Sensörü": { img: "toz_sensoru.jpg", desc: "Havadaki toz ve partikül miktarını ölçer (Robot süpürge)." },
    "TP4056 Şarj Modülü": { img: "tp4056.jpg", desc: "Lityum pil şarj devresi." },
    "Transistör": { img: "transistor.jpg", desc: "Sinyalleri anahtarlayan veya yükselten eleman." },
    "USB Kablo": { img: "usb.jpg", desc: "Arduino kod yükleme kablosu." },
    "Vakum Motoru": { img: "vakum_motoru.jpg", desc: "Süpürme işlemi için güçlü emiş sağlayan hava motoru." },
    "Voltaj Regülatörü": { img: "regulator.jpg", desc: "Voltajı sabit bir değere düşürür." },
    "Yağmur Sensörü": { img: "yagmur_sensoru.jpg", desc: "Su damlalarını algılayan sensör." }
};

const projectDatabase = [
    { id: "p1", name: "Bluetooth Araba", required: ["Arduino Uno R3", "HC-06 Bluetooth", "L298N Motor Sürücü", "Redüktörlü Motor", "Tekerlek"], steps: [{ img: "Bluetooth araba.png", text: "ADIM 1: Bluetooth RX/TX pinlerini çapraz bağlayın ve motorları sürücüye takın." }] },
    { id: "p2", name: "Engelden Kaçan Robot", required: ["Arduino Uno R3", "Mesafe Sensörü", "Servo Motor", "L298N Motor Sürücü", "Tekerlek"], steps: [{ img: "engelden kaçan araba.png", text: "ADIM 1: Mesafe sensörünü servo üzerine monte edin." }] },
    { id: "p3", name: "RFID Kapı Sistemi", required: ["Arduino Uno R3", "RFID Kit", "Servo Motor", "LCD Ekran"], steps: [{ img: "rfıd kapı sistemi.png", text: "ADIM 1: RFID modülünü SPI pinlerine bağlayın." }] },
    { id: "p4", name: "Yangın Alarmı", required: ["Arduino Uno R3", "Alev Sensörü", "Buzzer", "LED"], steps: [{ img: "yangın alarm sistemi.png", text: "ADIM 1: Alev sensöründen veri okuyun." }] },
    { id: "p5", name: "Akıllı Sulama", required: ["Arduino Uno R3", "Nem Kontrol Sensörü", "Su Pompası", "24V Röle"], steps: [{ img: "akıllı sulama.jpg", text: "ADIM 1: Toprak nemine göre pompayı röle ile çalıştırın." }] },
    { id: "p6", name: "Ses Kontrollü Işık", required: ["Arduino Uno R3", "Mikrofon Modülü", "24V Röle"], steps: [{ img: "ses kontrollü ışık.jpg", text: "ADIM 1: Mikrofon modülü eşik değeri aştığında röleyi tetikleyin." }] },
    { id: "p7", name: "Joystick Araba", required: ["Arduino Uno R3", "Joystick", "L298N Motor Sürücü", "Tekerlek"], steps: [{ img: "joystick kontrollü araba.jpg", text: "ADIM 1: Joystick verilerine göre motor hızını ayarlayın." }] },
    { id: "p8", name: "IR Kumandalı Robot", required: ["Arduino Uno R3", "IR Kumanda Kiti", "L298N Motor Sürücü", "Tekerlek"], steps: [{ img: "ır kumandalı robot.jpg", text: "ADIM 1: Uzaktan kumanda kodlarını Arduino'ya tanıtın." }] },
    { id: "p9", name: "Güvenlik Sistemi", required: ["Arduino Uno R3", "PIR Sensör", "Buzzer", "Keypad", "Manyetik Kontak"], steps: [{ img: "güvenlik sistemi.jpg", text: "ADIM 1: Hareket algılandığında şifre girilene kadar alarm verin." }] },
    { id: "p10", name: "Gaz Alarmı", required: ["Arduino Uno R3", "Gaz Sensörü", "Buzzer", "LCD Ekran"], steps: [{ img: "gaz alarmı.jpg", text: "ADIM 1: Gaz sızıntısı durumunda LCD ekranı kırmızı yapın." }] },
    { id: "p11", name: "WiFi Kamera Sistemi", required: ["ESP32-Cam", "PIR Sensör", "9V Pil"], steps: [{ img: "wifi kamera sistemi.jpg", text: "ADIM 1: Hareket olduğunda ESP32-Cam ile fotoğraf çekin." }] },
    { id: "p12", name: "Nabız Ölçer", required: ["Arduino Uno R3", "Nabız Sensörü", "OLED Ekran"], steps: [{ img: "nabız ölçer.jpg", text: "ADIM 1: Nabız verisini parmaktan okuyup OLED ekranda grafikleyin." }] },
    { id: "p13", name: "Akıllı Sera", required: ["Arduino Uno R3", "Nem Kontrol Sensörü", "Sıcaklık Sensörü (DHT11/DS18B20)", "Su Pompası", "Fan Modülü"], steps: [{ img: "akıllı sera.jpg", text: "ADIM 1: Sıcaklık ve nem değerlerine göre fan ve sulamayı otomatikleştirin." }] },
    { id: "p14", name: "Saat Sistemi", required: ["Arduino Uno R3", "RTC Saat Modülü", "7 Segment Ekran"], steps: [{ img: "saat sistemi.jpg", text: "ADIM 1: RTC modülünden veriyi çekip güncel saati 7 Segment ekranda gösterin." }] },
    { id: "p15", name: "Touch Araba", required: ["Arduino Uno R3", "Touch Pad", "L298N Motor Sürücü", "Tekerlek"], steps: [{ img: "touch kontrollü araba.jpg", text: "ADIM 1: Dokunmatik yüzeydeki yönlendirmelere göre motorlara komut gönderin." }] },
    { id: "p16", name: "Park Sensörü", required: ["Arduino Uno R3", "Mesafe Sensörü", "Buzzer", "LED"], steps: [{ img: "park sensörü.jpg", text: "ADIM 1: Engele yaklaşıldıkça LED ve buzzer hızını artırın." }] },
    { id: "p17", name: "Çizgi İzleyen", required: ["Arduino Uno R3", "L298N Motor Sürücü", "Çizgi Sensörü", "Tekerlek"], steps: [{ img: "çizgi izleyen araba.jpg", text: "ADIM 1: Sensörleri siyah çizgiyi takip edecek şekilde kalibre edin." }] },
    { id: "p18", name: "Yüz Tanıma", required: ["ESP32-Cam", "24V Röle", "Kamera Modülü", "OLED Ekran"], steps: [{ img: "yüz tanıma sistemi.jpg", text: "ADIM 1: Sistem kayıtlı yüzü tanıdığında röleyi çekip geçit verin." }] },
    { id: "p19", name: "Labirent Oyunu", required: ["Arduino Nano", "Joystick", "Servo Motor", "Pil Yuvası"], steps: [{ img: "labirent oyunu.jpg", text: "ADIM 1: Joystick X ve Y eksenlerini kullanarak iki adet servo motor ile labirent tablosuna yön verin." }] },
    { id: "p20", name: "Otto Robot", required: ["Arduino Nano", "Mesafe Sensörü", "Servo Motor", "Buzzer"], steps: [{ img: "otto robot.jpg", text: "ADIM 1: 4 adet servo motoru bacak ve ayak mekanizmasına bağlayarak adım atma animasyonunu kodlayın." }] },
    { id: "p21", name: "Renk Ayırıcı", required: ["Arduino Nano", "Renk Sensörü", "Servo Motor"], steps: [{ img: "renk ayırıcı.jpg", text: "ADIM 1: Sensörden gelen RGB değerlerine göre yönlendirici servonun açısını ayarlayın." }] },
    { id: "p22", name: "Sumo Robot", required: ["Arduino Uno R3", "Mesafe Sensörü", "Düşme/Kenar Sensörü", "L298N Motor Sürücü", "DC Motor", "Tekerlek"], steps: [{ img: "sumo robot.jpg", text: "ADIM 1: Rakibi algıladığında tam güç ileri git, kenar sensörü siyah çizgiyi görürse geri dön." }] },
    { id: "p23", name: "Temassız Ateş Ölçer", required: ["Arduino Nano", "Sıcaklık Sensörü (DHT11/DS18B20)", "OLED Ekran", "Pil Yuvası"], steps: [{ img: "ateş ölçer.jpg", text: "ADIM 1: Sensör okumasını dijitale çevirerek ekrana C° cinsinden yazdırın." }] },
    { id: "p24", name: "Akıllı Saat", required: ["ESP32-Cam", "OLED Ekran", "RTC Saat Modülü", "Li-Po Batarya", "Nabız Sensörü", "GPS Modülü"], steps: [{ img: "akıllı saat.jpg", text: "ADIM 1: GPS ve RTC verisini birleştirerek zaman/mekan bilgisini mini OLED ekranda arayüz ile sunun." }] },
    { id: "p25", name: "Dijital Su Terazisi", required: ["Arduino Nano", "İvme ve Eğim Sensörü (ADXL345)", "OLED Ekran", "LED"], steps: [{ img: "dijital su terazisi.jpg", text: "ADIM 1: X ve Y ekseni eğim verisini alıp 0 dereceye yaklaştığında yeşil, uzaklaştığında kırmızı LED yakın." }] },
    { id: "p26", name: "Parmak İzi Kasa Kilidi", required: ["Arduino Nano", "Parmak İzi Okuyucu", "Step Motor", "OLED Ekran"], steps: [{ img: "parmak izi okuyucu ile kasa kilidi.jpg", text: "ADIM 1: Onaylı parmak okunduğunda step motor ile kasa sürgüsünü geriye çekin." }] },
    { id: "p27", name: "Robot Süpürge", required: ["Arduino Uno R3", "Mesafe Sensörü", "Toz Sensörü", "Düşme/Kenar Sensörü", "Vakum Motoru", "L298N Motor Sürücü", "Sarhoş Tekerlek"], steps: [{ img: "robot süpürgr.jpg", text: "ADIM 1: Sensörlerle engelleri aşarken vakum motorunu aktif tutarak rastgele temizlik rotası çizin." }] }
];

let selectedInventory = [];
let currentProject = null;
let currentStep = 0;

document.addEventListener("DOMContentLoaded", () => {
    const sortedNames = Object.keys(materialData).sort((a, b) => a.localeCompare(b, 'tr'));
    renderInventory(sortedNames);
    
    // Kapatma butonu dışı tıklama
    window.onclick = function(e) {
        if (e.target == document.getElementById('manual-modal')) closeManual();
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
        div.innerHTML = `<strong>${name}</strong><p style="font-size:10px; color:#aaa; margin:5px 0;">${data.desc}</p>`;
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
        
        itemContainer.innerHTML = `
            <div style="position:relative; text-align:center; cursor:pointer;" onclick="removeFromTable('${name}', this.parentElement)">
                <span style="position:absolute; top:-12px; right:-12px; background:#ff4d4d; color:white; border-radius:50%; width:22px; height:22px; font-size:14px; display:flex; align-items:center; justify-content:center; z-index:100; border:2px solid #fff; font-weight:bold;">×</span>
                <img src="${materialData[name].img}" width="80" style="border: 2px solid #00f3ff; border-radius: 8px; background: #fff; box-shadow: 0 0 10px rgba(0,243,255,0.3);">
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
        parent.innerHTML = `<div style="color:#666; font-size:14px; text-align:center; padding:20px;">Görsel internet kuralına göre çekiliyor ancak bazen kaynak erişimi kısıtlıyor.</div>`;
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
