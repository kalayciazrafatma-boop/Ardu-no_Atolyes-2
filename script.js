// ARDUINO LAB - GÜNCEL SCRIPT
const materialData = {
    "9V Pil": { img: "9v_pil.jpg", desc: "Projen için taşınabilir güç kaynağı sağlar." },
    "24V Röle": { img: "24v_role.jpg", desc: "Yüksek voltajlı cihazları güvenli anahtarlar." },
    "Arduino Uno R3": { img: "arduino_uno.jpg", desc: "Sistemin beyni, mikrodenetleyici kartı." },
    "Alev Sensörü": { img: "ates_sensoru.jpg", desc: "Yangın ve kızılötesi ışığı algılar." },
    "Breadboard": { img: "breadboard.jpg", desc: "Lehimsiz devre kurma test tahtası." },
    "Buton": { img: "buton.jpg", desc: "Basıldığında devreyi tamamlayan anahtar." },
    "Buzzer": { img: "buzzer.jpg", desc: "Sesli uyarı ve sinyal verir." },
    "Çizgi Sensörü": { img: "cizgi_sensoru.jpg", desc: "Zemindeki siyah ve beyaz farkını algılar." },
    "ESP32-Cam": { img: "esp32_cam.jpg", desc: "Wi-Fi destekli kamera ve işlemci modülü." },
    "HC-06 Bluetooth": { img: "hc06_bluetooth.jpg", desc: "Telefonla kablosuz bağlantı kurar." },
    "L298N Motor Sürücü": { img: "l298n.jpg", desc: "DC motorların hız ve yönünü kontrol eder." },
    "LCD Ekran": { img: "lcd_ekran.jpg", desc: "Verileri görsel olarak yazdırmanı sağlar." },
    "Mesafe Sensörü": { img: "mesafe_sensoru.jpg", desc: "Engelleri ultrasonik dalgalarla algılar." },
    "Mikrofon Modülü": { img: "mikrofon_modul.jpg", desc: "Ortamdaki ses şiddetini ölçer." }, // İsmi düzelttim
    "Sigorta": { img: "sigorta.jpg", desc: "Devreyi aşırı akımdan korur." },
    "Servo Motor": { img: "servo.jpg", desc: "Hassas açıyla dönen motor." },
    "Tekerlek": { img: "Tekerlek.jpg", desc: "Motor miline takılan tekerlek." },
    "Jumper Kablo": { img: "jumper.jpg", desc: "Devre elemanları arası bağlantı sağlar." },
    // Diğer malzemelerini de bu formatta ekleyebilirsin
};

// 2. ADIM: PROJE VERİTABANI (Daha sağlam görsel linkleri eklendi)
const projectDatabase = [
    {
        id: "p1",
        name: "Çizgi İzleyen Akıllı Robot",
        required: ["Arduino Uno R3", "L298N Motor Sürücü", "Çizgi Sensörü", "Tekerlek"],
        steps: "1. Motorları şaseye sabitleyin. 2. Sensörleri zemine yakın monte edin. 3. Çizgi izleme kodunu yükleyin.",
        image: "https://maker.robotistan.com/wp-content/uploads/2016/06/6-1.jpg"
    },
    {
        id: "p2",
        name: "Akıllı Park Sensörü",
        required: ["Arduino Uno R3", "Mesafe Sensörü", "Buzzer", "LCD Ekran"],
        steps: "1. Mesafe sensörünü takın. 2. Mesafe kısaldıkça buzzerı hızlandırın. 3. Değeri LCD'de görün.",
        image: "https://i.ytimg.com/vi/6f_O89tF6Xo/maxresdefault.jpg"
    },
    {
        id: "p3",
        name: "Ses Duyarlı Işık Sistemi",
        required: ["Arduino Uno R3", "Mikrofon Modülü", "LED", "9V Pil"],
        steps: "1. Mikrofon modülünü bağlayın. 2. Ses seviyesi artınca LED'in yanmasını sağlayın.",
        image: "https://maker.robotistan.com/wp-content/uploads/2016/05/arduino-ses-sensoru.jpg"
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
        // MALZEME AÇIKLAMALARI BURADA EKLENİYOR
        div.innerHTML = `
            <strong>${name}</strong>
            <p style="font-size:11px; color:#aaa; margin:5px 0;">${data.desc}</p>
            <span style="color:#00f3ff; font-size:10px;">Laboratuvara Ekle +</span>
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
        itemContainer.style.cursor = "pointer";
        
        const imgSrc = materialData[name].img;
        
        itemContainer.innerHTML = `
            <div style="position:relative; text-align:center;">
                <span style="position:absolute; top:-10px; right:-10px; background:red; color:white; border-radius:50%; width:20px; height:20px; font-size:12px; display:flex; align-items:center; justify-content:center;">X</span>
                <img src="${imgSrc}" width="80" title="${name}" style="border: 2px solid #00f3ff; border-radius: 8px; background: #fff; box-shadow: 0 0 15px #00f3ff;">
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
        linkBox.innerHTML = `<p style="font-size: 11px; color: #888;">Gerekli parçaları ekleyerek projeleri keşfet!</p>`;
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
