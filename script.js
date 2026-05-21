// ARDUINO LAB - GÜNCEL SCRIPT
const materialData = {
    "9V Pil": { img: "9v_pil.jpg", desc: "Devreye enerji sağlayan taşınabilir güç kaynağı." },
    "Mikrofon Modülü": { img: "mikrofon_modul.jpg", desc: "Ortamdaki ses şiddetini algılayan sensör." },
    "24V Röle": { img: "24v_role.jpg", desc: "Yüksek voltajlı cihazları kontrol etmek için anahtar." },
    "Arduino Uno R3": { img: "arduino_uno.jpg", desc: "Projenin ana kontrol merkezi (beyni)." },
    "Alev Sensörü": { img: "ates_sensoru.jpg", desc: "Yangın ve kızılötesi ışığı algılayan sensör." },
    "Breadboard": { img: "breadboard.jpg", desc: "Bileşenleri birbirine bağlamak için kullanılan delikli tahta." },
    "Buton": { img: "buton.jpg", desc: "Basıldığında devreyi açan veya kapatan anahtar." },
    "Buzzer": { img: "buzzer.jpg", desc: "Sesli uyarılar oluşturmak için kullanılan parça." },
    "Çizgi Sensörü": { img: "cizgi_sensoru.jpg", desc: "Siyah ve beyaz çizgiyi ayırt eden sensör." },
    "Dijital Amplifikatör": { img: "dijital_amplifikator.jpg", desc: "Ses sinyallerini yükselten devre kartı." },
    "DIP Switch": { img: "dip_switch.jpg", desc: "Çoklu açma-kapama anahtarı grubu." },
    "Direnç": { img: "direnc.jpg", desc: "Akımı sınırlayarak parçaları koruyan devre elemanı." },
    "DTMF Modülü": { img: "dtmf_modul.jpg", desc: "Telefon tuş seslerini algılayan modül." },
    "ESP32-Cam": { img: "esp32_cam.jpg", desc: "Wi-Fi ve Bluetooth destekli kamera modülü." },
    "Gaz Sensörü": { img: "gaz_sensoru.jpg", desc: "Havadaki yanıcı veya zehirli gazları algılar." },
    "Güneş Paneli": { img: "gunes_paneli.jpg", desc: "Işığı elektrik enerjisine çeviren panel." },
    "Havya": { img: "havya.jpg", desc: "Parçaları birbirine lehimlemek için ısıtıcı araç." },
    "HC-06 Bluetooth": { img: "hc06_bluetooth.jpg", desc: "Akıllı telefonlarla kablosuz iletişim sağlar." },
    "IR Kumanda Kiti": { img: "ir_kumanda_kit.jpg", desc: "Kızılötesi ile uzaktan kontrol seti." },
    "Joystick": { img: "joystick.jpg", desc: "İki eksenli hareket kontrolü sağlayan kol." },
    "Jumper Kablo": { img: "jumper.jpg", desc: "Devre elemanları arası iletimi sağlayan kablo." },
    "Kalıcı Buton": { img: "kalici_buton.jpg", desc: "Basıldığında o konumda kalan anahtar." },
    "Keypad": { img: "keypad.jpg", desc: "Sayısal veri girişi için tuş takımı." },
    "Kondansatör": { img: "kondansator.jpg", desc: "Elektrik enerjisini depolayan devre elemanı." },
    "Krokodil Kablo": { img: "krokodil.jpg", desc: "Hızlı bağlantı için ağzı kıskaçlı kablo." },
    "Kumpas": { img: "kumpas.jpg", desc: "Hassas uzunluk ölçümü yapan araç." },
    "L293D Entegre": { img: "l293d.jpg", desc: "Motor kontrolü için kullanılan entegre çip." },
    "L298N Motor Sürücü": { img: "l298n.jpg", desc: "Yüksek akımlı motorları sürmek için kullanılır." },
    "LCD Ekran": { img: "lcd_ekran.jpg", desc: "Yazılı verileri göstermeyi sağlayan ekran." },
    "LED": { img: "led.jpg", desc: "Işık yayan diyot (aydınlatma)." },
    "Lehim Pastası": { img: "lehim_pastasi.jpg", desc: "Lehimleme işlemini kolaylaştıran kimyasal." },
    "Lehim Pompası": { img: "lehim_pompasi.jpg", desc: "Eski lehimleri çekip temizleyen araç." },
    "Lehim Standı": { img: "lehim_standi.jpg", desc: "Sıcak havyayı güvenle koymak için stand." },
    "Lehim Teli": { img: "lehim_teli.jpg", desc: "Bağlantıları sabitlemek için eritilen metal." },
    "Makaron": { img: "makaron.jpg", desc: "Kabloları yalıtmak için ısıya duyarlı kılıf." },
    "Mesafe Sensörü": { img: "mesafe_sensoru.jpg", desc: "Önündeki nesneye olan uzaklığı ölçer." },
    "Multimetre": { img: "multimetre.jpg", desc: "Voltaj, akım ve direnç ölçen test cihazı." },
    "Nabız Sensörü": { img: "nabiz_sensoru.jpg", desc: "Kalp atış hızını (BPM) ölçen sensör." },
    "Nem Kontrol Sensörü": { img: "nem_kontrol.jpg", desc: "Toprak veya ortamdaki nemi ölçer." },
    "Piezo Buzzer": { img: "piezo_buzzer.jpg", desc: "Titreşimle ses çıkaran ince hoparlör." },
    "Pil Yuvası": { img: "pil_yuvasi.jpg", desc: "Pilleri devreye bağlamayı kolaylaştırır." },
    "PIR Sensör": { img: "pir_sensor.jpg", desc: "Harekete duyarlı kızılötesi sensör." },
    "Potansiyometre": { img: "potansiyometre.jpg", desc: "Ayarlanabilir direnç." },
    "Redüktörlü Motor": { img: "reduktorlu_motor.jpg", desc: "Güçlü hareket sağlayan dişli motor." },
    "Voltaj Regülatörü": { img: "regulator.jpg", desc: "Giriş voltajını sabit bir değere düşürür." },
    "RFID Kit": { img: "rfid_kit.jpg", desc: "Kartlı geçiş sistemleri için okuyucu set." },
    "RTC Saat Modülü": { img: "rtc_modul.jpg", desc: "Arduino için gerçek zamanlı saat bilgisi sağlar." },
    "Sarhoş Tekerlek": { img: "sarhos_tekerlek.jpg", desc: "Robotun kolay dönmesini sağlayan destek tekeri." },
    "Servo Motor": { img: "servo.jpg", desc: "0-180 derece arası hassas dönen motor." },
    "Ses Sensörü": { img: "ses_sensoru.jpg", desc: "Sesleri algılayıp elektrik sinyaline çevirir." },
    "Sigorta": { img: "sigorta.jpg", desc: "Devreyi yüksek akımdan korur." },
    "Su Pompası": { img: "su_pompasi.jpg", desc: "Sıvıları bir yerden başka yere aktarır." },
    "Tact Buton": { img: "tact_buton.jpg", desc: "Küçük, tıklamalı devre anahtarı." },
    "Tekerlek": { img: "Tekerlek.jpg", desc: "Robot şaselerine takılan tekerlek." },
    "Touch Pad": { img: "touch_pad.jpg", desc: "Dokunmaya duyarlı kontrol alanı." },
    "TP4056 Şarj Modülü": { img: "tp4056.jpg", desc: "Lityum pilleri şarj etmek için modül." },
    "Transistör": { img: "transistor.jpg", desc: "Sinyalleri yükselten veya anahtarlayan eleman." },
    "USB Kablo": { img: "usb.jpg", desc: "Bilgisayardan Arduino'ya kod yükleme kablosu." },
    "Yağmur Sensörü": { img: "yagmur_sensoru.jpg", desc: "Yüzeyindeki su damlalarını algılar." }
};

// 2. ADIM: PROJE VERİTABANI (Daha sağlam şemalar eklendi)
const projectDatabase = [
    {
        id: "p1",
        name: "Otonom Çizgi İzleyen Robot",
        required: ["Arduino Uno R3", "L298N Motor Sürücü", "Çizgi Sensörü", "Redüktörlü Motor", "Tekerlek"],
        steps: "1. Motorları şaseye sabitleyip tekerlekleri takın. 2. Sensörleri ön tarafa monte edin. 3. Çizgi izleme kodunu yükleyin.",
        image: "https://maker.robotistan.com/wp-content/uploads/2016/06/6-1.jpg"
    },
    {
        id: "p2",
        name: "Yüz Tanımalı Akıllı Kilit (AI)",
        required: ["ESP32-Cam", "24V Röle", "Servo Motor", "9V Pil"],
        steps: "1. ESP32-Cam'e yüz tanıma kodunu yükleyin. 2. Doğru yüz algılandığında röleyi tetikleyin.",
        image: "https://vcl.com.tr/wp-content/uploads/2021/04/esp32-cam-face-recognition.jpg"
    },
    {
        id: "p3",
        name: "Akıllı Park Sensörü Sistemi",
        required: ["Arduino Uno R3", "Mesafe Sensörü", "Buzzer", "LCD Ekran"],
        steps: "1. Mesafe sensörünü takın. 2. Mesafe azaldıkça buzzerın bip hızını artırın.",
        image: "https://i.ytimg.com/vi/6f_O89tF6Xo/maxresdefault.jpg"
    }
];

let selectedInventory = [];

document.addEventListener("DOMContentLoaded", () => {
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
            <p style="font-size:11px; color:#aaa; margin-top:5px;">${data.desc}</p>
            <span style="color:#00f3ff; font-size:10px;">Masaya Ekle +</span>
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
            <div style="position:relative; text-align:center; cursor:pointer;">
                <span style="position:absolute; top:-10px; right:-10px; background:red; color:white; border-radius:50%; width:22px; height:22px; font-size:12px; display:flex; align-items:center; justify-content:center; box-shadow:0 0 10px rgba(0,0,0,0.5);">X</span>
                <img src="${imgSrc}" width="85" title="${name}" style="border: 2px solid #00f3ff; border-radius: 8px; background: #fff; box-shadow: 0 0 15px #00f3ff;">
                <div style="font-size: 11px; color: #00f3ff; font-weight: bold; margin-top: 5px; text-shadow: 1px 1px 2px #000;">${name}</div>
            </div>
        `;

        itemContainer.onclick = () => removeFromTable(name, itemContainer);
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

function searchParts() {
    const term = document.getElementById('partSearch').value.toLowerCase();
    const filtered = Object.keys(materialData).filter(name => name.toLowerCase().includes(term));
    renderInventory(filtered);
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
