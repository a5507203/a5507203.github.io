const teachingData = [

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
        description: "Advanced Machine Learning (for Master)",
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

function createTeachingTable(data) {
    // Create table element
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    // Iterate over the data to create rows
    data.forEach(item => {
        const tr = document.createElement('tr');

        // Create first cell with role and description
        const td1 = document.createElement('td');
        td1.innerHTML = `<div class="hyperlink"><b>${item.role}</b>: ${item.description}</div>
                         <div class="publisher">${item.institution}</div>`;

        // Create second cell with year
        const td2 = document.createElement('td');
        td2.className = "table_year";
        td2.style.textAlign = "right";
        td2.textContent = item.year;

        // Append cells to the row
        tr.appendChild(td1);
        tr.appendChild(td2);

        // Append row to the tbody
        tbody.appendChild(tr);
    });

    // Append tbody to the table
    table.appendChild(tbody);

    document.addEventListener("DOMContentLoaded", function (e) {
        document.getElementById('teaching').appendChild(table);
    });
    // Append the table to the document, for example, to a div with id 'tableContainer'
}

// Call the function to create and append the table
createTeachingTable(teachingData);


