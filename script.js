const projectDatabase = [
    {
        id: "p1",
        name: "Çizgi İzleyen Araba",
        requiredParts: ["Arduino Uno R3", "L298N Motor Sürücü", "Kızılötesi Sensör", "Şase Kiti"],
        instruction: "Adım 1: Sensörleri şasenin önüne monte edin. Adım 2: Motor sürücüyü Arduino'ya bağlayın...",
        image: "cizgi-izleyen.jpg"
    },
    {
        id: "p2",
        name: "Engelden Kaçan Robot",
        requiredParts: ["Arduino Uno R3", "Ultrasonik Sensör", "Servo Motor", "L298N Motor Sürücü"],
        instruction: "Adım 1: Ultrasonik sensörü servonun üzerine takın. Adım 2: Engel mesafesini 20cm olarak ayarlayın...",
        image: "engelden-kacan.jpg"
    },
    {
        id: "p3",
        name: "Bluetooth Kontrollü Araç",
        requiredParts: ["Arduino Uno R3", "HC-05 Bluetooth Modülü", "L298N Motor Sürücü", "9V Pil"],
        instruction: "Adım 1: Bluetooth modülünü RX/TX pinlerine bağlayın. Adım 2: Mobil uygulamayı eşleştirin...",
        image: "bluetooth-araba.jpg"
    }
    // Buraya yüzlerce yeni proje ekleyebilirsin!
];

let userInventory = [];

// Parça eklendiğinde çalışan fonksiyon
function addToInventory(partName) {
    if (!userInventory.includes(partName)) {
        userInventory.push(partName);
        checkAvailableProjects();
    }
}

// Hangi projelerin yapılabileceğini bulan motor
function checkAvailableProjects() {
    const matchedProjects = projectDatabase.filter(project => 
        project.requiredParts.every(part => userInventory.includes(part))
    );

    displayProjects(matchedProjects);
}

function displayProjects(projects) {
    const projectListDiv = document.getElementById('active-projects'); // Sağ paneldeki alan
    if (projects.length === 0) {
        projectListDiv.innerHTML = "<p>Daha fazla parça ekleyerek projeleri kilidini aç!</p>";
        return;
    }

    projectListDiv.innerHTML = projects.map(p => `
        <div class="project-card" onclick="openManual('${p.id}')">
            <h4>${p.name}</h4>
            <button>Kılavuzu Görüntüle</button>
        </div>
    `).join('');
}
