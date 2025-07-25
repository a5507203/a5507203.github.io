const awardsData = [
  "Outstanding Area Chair Award, ICML (2025)",
  "Outstanding Reviewer Award, UAI (2025)",
  "Outstanding Reviewer Award, NeurIPS (2023)",
  "Outstanding Reviewer Award, ICLR (2023)",
  "Research Students Excellence Prize, School of Computer Science (2019)",
  "CommBank Year 4 Prize (Highest WAM in Honours Year) (2019)",
  "Displayr Thesis Prize (Best Thesis Performance) (2018)",
  "CSE Undergraduate Performance Prize (7th Place) (2018)"
];

// Function to create a list with a heading
function createList(entries) {
    let section = document.createElement('section');


    let list = document.createElement('ul');
    list.className = 'news_list';
    entries.forEach(entry => {
        let item = document.createElement('li');
        if (typeof entry === 'object') {
            item.textContent = `${entry.conference}: ${entry.year || entry.years.join(', ')}`;
        } else {
            item.textContent = entry;
        }
        list.appendChild(item);
    });

    section.appendChild(list);
    return section;
}

// Function to append the lists to the DOM
function appendListsToDOM() {
    const awards = createList(awardsData);
    document.addEventListener("DOMContentLoaded", function (e) {
        document.getElementById('awards').appendChild(awards);
    });
}

appendListsToDOM()