
const professional_activities = {
    "journal_editor": [
       "Action Editor: Transactions on Machine Learning Research"
    ],
    
    "area_chair": [
        {
            "conference": "The Thirteenth International Conference on Learning Representations (ICLR)",
            "years": ["2025"]
        },
        {
            "conference": "Australasian Joint Conference on Artificial Intelligence (AJCAI)",
            "years": ["2023","2024"]
        }
    ],
    "conference_reviewer": [
        {
            "conference": "International Conference on Machine Learning (ICML)",
            "years": ["2020", "2021", "2022", "2023", "2024"]
        },
        {
            "conference": "Advances in Neural Information Processing Systems (NeurIPS)",
            "years": ["2020", "2021", "2022", "2023"]
        },
        {
            "conference": "International Conference on Learning Representations (ICLR)",
            "years": ["2022", "2023", "2024"]
        },
        {
            "conference": "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
            "years": ["2021", "2022", "2023", "2024"]
        },
        {
            "conference": "International Conference on Computer Vision (ICCV)",
            "years": ["2021", "2023"]
        },
        {
            "conference": "European Conference on Computer Vision (ECCV)",
            "years": ["2022"]
        },
        {
            "conference": "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD)",
            "years": ["2022", "2023"]
        },
        {
            "conference": "International Conference on Artificial Intelligence and Statistics (AISTATS)",
            "years": ["2022", "2023", "2024"]
        },
        {
            "conference": "Conference on Uncertainty in Artificial Intelligence (UAI)",
            "years": ["2022", "2023"]
        },
        {
            "conference": "AAAI Conference on Artificial Intelligence (AAAI)",
            "years": ["2023", "2024"]
        },
        {
            "conference": "Internation Joint Conference on Artificial Intelligence (IJCAI)",
            "years": ["2022", "2023", "2024"]
        },
        {
            "conference": "ACM International Conference on Multimedia (ACM MM)",
            "years": ["2022"]
        }
    ],
    "journal_reviewer": [
        "IEEE Transactions on Image Processing",
        "IEEE Transactions on Knowledge and Data Engineering",
        "IEEE Transaction on Neural Networks and Learning Systems",
        "IEEE Transactions on Circuits and Systems for Video Technology",
        "IEEE Transactions on Multimedia",
        "International Journal of Computer Vision",
        "ACM Computing Surveys",
        "Machine Learning Journal",
        "Neural Networks"
    ]
};



function createListWithHeading(heading, entries) {
    let section = document.createElement('section');
    let headingElement = document.createElement('h3');
    headingElement.textContent = heading;
    section.appendChild(headingElement);

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
function appendServicesToDOM() {

    const journalEditorSection = createListWithHeading('Journal Editor', professional_activities.journal_editor);
    // Append Area Chair list with heading
    const areaChairSection = createListWithHeading('Area Chair', professional_activities.area_chair);
    // Append Conference Reviewer list with heading
    const conferenceReviewerSection = createListWithHeading('Conference Reviewer', professional_activities.conference_reviewer);
    // Append Journal Reviewer list with heading
    const journalReviewerSection = createListWithHeading('Journal Reviewer', professional_activities.journal_reviewer);
    

    document.addEventListener("DOMContentLoaded", function (e) {
        const container = document.getElementById('activities'); 
        container.appendChild(journalEditorSection);
        container.appendChild(areaChairSection);
        container.appendChild(conferenceReviewerSection);
        container.appendChild(journalReviewerSection);
    });


}

appendServicesToDOM()


