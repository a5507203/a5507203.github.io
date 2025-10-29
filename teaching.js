// Teaching and talks data
const teachingData = [
    {
        role: "Lecturer",
        description: "Advanced Machine Learning",
        institution: "The University of Sydney",
        year: "2024"
    },
    {
        role: "Guest Lecturer",
        description: "Techniques and Assumptions in Sample-Selection-Based Methods for Learning with Noisy Labels",
        institution: "Mohamed bin Zayed University of Artificial Intelligence",
        year: "2023"
    },
    {
        role: "Teaching Assistant",
        description: "Foundations and Advanced Topics in Machine Learning (for Ph.D.)",
        institution: "Mohamed bin Zayed University of Artificial Intelligence",
        year: "2023"
    },
    {
        role: "Guest Lecturer",
        description: "Recent Advances in Label-Noise Learning",
        institution: "China University of Petroleum",
        year: "2022"
    },
    {
        role: "Teaching Assistant",
        description: "Advanced Machine Learning",
        institution: "The University of Sydney",
        year: "2019-2022"
    },
    {
        role: "Invited Talk",
        description: "Reducing Estimation Error for Transition Matrix in Label-Noise Learning",
        institution: "Weakly-supervised Learning Workshop, Asian Conference on Machine Learning",
        year: "2020"
    }
];

// Register teaching section with ContentManager
ContentManager.registerSection('teaching', function(container) {
    const table = ContentManager.createTable();

    teachingData.forEach(item => {
        const mainCellHtml = `<div class="hyperlink"><b>${item.role}</b>: ${item.description}</div>
                             <div class="publisher">${item.institution}</div>`;

        const yearCell = document.createElement('td');
        yearCell.className = 'table_year';
        yearCell.style.textAlign = 'right';
        yearCell.textContent = item.year;

        ContentManager.addTableRow(table, [
            { html: mainCellHtml },
            { element: yearCell }
        ]);
    });

    container.appendChild(table);
});
