
const superviseData = [
   
    {
        name: "Boye Niu",
        url: "#",
        institution: "The University of Sydney",
        details: '<b>Honors Student</b> in Statistics, 2024-Present'
    },

    {
        name: "Kai Lian",
        url: "#",
        institution: "The University of Sydney",
        details: '<b>Master Student</b> in Computer Science, 2024-Present'
    },
    {
        name: "Ruojing Dong",
        url: "#",
        coadvised: "Prof. Tongliang Liu",
        institution: "The University of Sydney",
        details: "<b>Ph.D. Candidate</b> in Computer Science, 2024-Present"
    },
    {
        name: "Jiyang Zheng",
        url: "https://scholar.google.com.au/citations?user=pM9DLNIAAAAJ&hl=en",
        coadvised: "Prof. Tongliang Liu",
        institution: "The University of Sydney",
        details: '<b>Ph.D. Candidate</b> in Computer Science, 2023-Present'
    },
    {
        name: "Yexiong Lin",
        url: "https://yexionglin.github.io/",
        coadvised: "Prof. Tongliang Liu",
        institution: "The University of Sydney",
        details: "<b>Ph.D. Candidate</b> in Computer Science, 2023-Present"
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
        td.innerHTML = `<div class="hyperlink"><a href="${item.url}" target="_blank">${item.name}</a> <small>(co-advised with ${item.coadvised})<small> </div>
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
