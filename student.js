const students = [
    { name: "Ботагөз апай", info: "Топ жетекшісі", img: "person/apai.png" },
    { name: "Әсел", info: "Белсенді", img: "person/asel.png" },
    { name: "Бақдәулет", info: "Креативті тұлға", img: "person/baxa.png" },
    { name: "Нұрсәт", info: "Спортшы", img: "person/nursat.png" },
    { name: "Исатай", info: "Жақсы студент", img: "person/isa.png" },
    { name: "Қайсар", info: "Жас маман", img: "person/qaisar.png" },
    { name: "Шынарай", info: "Әзілқой", img: "person/shynar.png" },
    { name: "Абдуларон", info: "Тату", img: "person/aron.png" },
    { name: "Арман", info: "Жетекші", img: "person/arman.png" },
    { name: "Гүлбақыт", info: "Еңбексүйгіш", img: "person/gulbakyt.png" },
    { name: "Алишер", info: "Күлкісі көп", img: "person/alish.png" },
    { name: "Ғұбайдулла", info: "Шығармашыл", img: "person/gabi.png" },
    { name: "Альбина", info: "Байсалды", img: "person/albina.png" },
    { name: "Панабек", info: "Әділ", img: "person/pana.png" },
    { name: "Олжас", info: "Болашағы зор", img: "person/oljas.png" },
];

function renderStudentGrid() {
    const gridContainer = document.getElementById("student-grid");
    gridContainer.innerHTML = "";
    students.forEach(student => {
        const card = document.createElement("div");
        card.className = "student-card";
        card.innerHTML = `
            <img src="${student.img}" alt="${student.name}">
            <h3>${student.name}</h3>
            <p>${student.info}</p>
        `;
        gridContainer.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderStudentGrid);
