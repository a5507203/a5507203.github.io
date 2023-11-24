const superviseData = [
    {
        name: "Jiyang Zheng",
        url: "https://www.linkedin.com/in/roger-zheng-3076b1171/",
        institution: "The University of Sydney",
        details: '<b>Ph.D. Candidate</b> in Computer Science, 03/2022-Present'
    },
    {
        name: "Yexiong Lin",
        url: "https://yexionglin.github.io/",
        institution: "The University of Sydney",
        details: "<b>Ph.D. Candidate</b> in Computer Science, 03/2022-Present"
    },
    {
        name: "Yang Zhou",
        url: "https://www.linkedin.com/in/yang-zhou-1b4b8524b/",
        institution: "The University of Sydney",
        details: "<b>Honors Student</b> in Computer Science (<b>University Medal</b>), 03/2022-06/2023"
    },
    {
        name: "James Wood",
        url: "https://www.linkedin.com/in/james-wood-4060/?originalSubdomain=au",
        institution: "The University of Sydney",
        details: "<b>Honors Student</b> in Computer Science (<b>University Medal</b>), 06/2020-06/2021"
    }
];

function createsuperviseTable(data) {
    // Create table element
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    // Iterate over the data to create rows
    data.forEach(item => {
        const tr = document.createElement('tr');
        const td = document.createElement('td');

        // Constructing the HTML content for the cell
        td.innerHTML = `<div class="hyperlink"><a href="${item.url}" target="_blank">${item.name}</a></div>
                        <div class="gray_font">${item.institution}</div>
                        <div class="student">${item.details}</div>`;

        // Append cell to the row, and row to the tbody
        tr.appendChild(td);
        tbody.appendChild(tr);
    });

    // Append tbody to the table
    table.appendChild(tbody);
    document.addEventListener("DOMContentLoaded", function (e) {
        document.getElementById('supervise').appendChild(table);
    });
    // Append the table to the document, for example, to a div with id 'tableContainer'
    // document.getElementById('supervise').appendChild(table);
}

// Call the function to create and append the table
createsuperviseTable(superviseData);
