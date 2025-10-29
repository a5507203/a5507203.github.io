// Student supervision data
const superviseData = [
    {
        name: "Boye Niu",
        url: "#",
        coadvised: "",
        institution: "The University of Sydney",
        details: '<b>Honors Student</b> in Statistics, 2024-Present'
    },
    {
        name: "Kai Lian",
        url: "#",
        coadvised: "",
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

// Register supervise section with ContentManager
ContentManager.registerSection('supervise', function(container) {
    const table = ContentManager.createTable();

    superviseData.forEach(item => {
        const coadvisedText = item.coadvised ? ` <small>(co-advised with ${item.coadvised})</small>` : '';
        const cellHtml = `<div class="hyperlink"><a href="${item.url}" target="_blank">${item.name}</a>${coadvisedText}</div>
                         <div class="gray_font">${item.institution}</div>
                         <div class="student">${item.details}</div>`;

        ContentManager.addTableRow(table, [{ html: cellHtml }]);
    });

    container.appendChild(table);
});
