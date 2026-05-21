// PROJE VERİTABANI (İstediğin kadar ekleme yapabiliriz)
const projectDatabase = [
    {
        id: "p1",
        name: "Çizgi İzleyen Araba",
        required: ["Arduino Uno R3", "L298N Motor Sürücü", "Kızılötesi Sensör"],
        steps: "1. Şaseyi kurun. 2. Motorları sürücüye bağlayın. 3. IR sensörleri ön tarafa dizin ve Arduino pinlerine takın.",
        image: "https://via.placeholder.com/400x300?text=Cizgi+Izleyen+Semasi"
    },
    {
        id: "p2",
        name: "Bluetooth Kontrollü Robot",
        required: ["Arduino Uno R3", "L298N Motor Sürücü", "HC-05 Bluetooth Modülü"],
        steps: "1. HC-05 modülünü RX/TX pinlerine çapraz bağlayın. 2. Telefon uygulamasını açıp 9600 baud rate ile bağlanın.",
        image: "https://via.placeholder.com/400x300?text=Bluetooth+Robot+Semasi"
    },
    {
        id: "p3",
        name: "Akıllı Yangın Alarmı",
        required: ["Arduino Uno R3", "Alev Sensörü", "9V Pil"],
        steps: "1. Alev sensörünün dijital çıkışını 2. pine bağlayın. 2. Alev algılandığında seri porttan uyarı mesajı gönderin.",
        image: "https://via.placeholder.com/400x300?text=Yangin+Alarmi+Semasi"
    }
];

// ENVANTER VERİSİ
const allMaterials = [
    { name: "Arduino Uno R3", desc: "Sistemin beyni." },
    { name: "L298N Motor Sürücü", desc: "Motorları kontrol eder." },
    { name: "Kızılötesi Sensör", desc: "Çizgiyi takip eder." },
    { name: "HC-05 Bluetooth Modülü", desc: "Kablosuz kontrol sağlar." },
    { name: "Alev Sensörü", desc: "Ateşi algılar." },
    { name: "9V Pil", desc: "Güç kaynağı." }
];

let selectedInventory = [];

// Sayfa Başlatma
document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById('inventory-list');
    allMaterials.forEach(item => {
        const div = document.createElement('div');
        div.className = 'inv-item';
        div.innerHTML = `<strong>${item.name}</strong><p>${item.desc}</p>`;
        div.onclick = () => addToTable(item.name);
        list.appendChild(div);
    });
});

function addToTable(name) {
    if (!selectedInventory.includes(name)) {
        selectedInventory.push(name);
        document.getElementById('sys-status').innerText = "GÜNCELLENİYOR...";
        document.getElementById('sys-status').style.color = "#39ff14";
        
        // Masaya görsel ekle (Temsili)
        const itemIcon = document.createElement('div');
        itemIcon.style.position = "absolute";
        itemIcon.style.left = Math.random() * 80 + "%";
        itemIcon.style.top = Math.random() * 60 + 20 + "%";
        itemIcon.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/908/908424.png" width="50" title="${name}">`;
        document.getElementById('table-canvas').appendChild(itemIcon);

        checkProjects();
    }
}

function checkProjects() {
    const available = projectDatabase.filter(proj => 
        proj.required.every(req => selectedInventory.includes(req))
    );

    const linkBox = document.getElementById('project-links');
    linkBox.innerHTML = available.map(p => 
        `<button class="project-btn" onclick="openManual('${p.id}')">${p.name} ✅</button>`
    ).join('');
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
