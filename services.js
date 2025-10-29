// Professional activities data
const professional_activities = {
    "journal_editor": [
       "Action Editor: Transactions on Machine Learning Research"
    ],

    "area_chair": [
        {
            "conference": "International Conference on Machine Learning (ICML)",
            "years": ["2025"]
        },
        {
            "conference": "International Conference on Learning Representations (ICLR)",
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
            "years": ["2020", "2021", "2022", "2023", "2024"]
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
            "years": ["2022", "2023", "2024"]
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
            "years": ["2022", "2023", "2024"]
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

// Helper to format entries (handles both objects and strings)
function formatEntry(entry) {
    if (typeof entry === 'object') {
        return `${entry.conference}: ${entry.year || entry.years.join(', ')}`;
    }
    return entry;
}

// Register services section with ContentManager
ContentManager.registerSection('activities', function(container) {
    // Journal Editor
    const journalEditorItems = professional_activities.journal_editor.map(formatEntry);
    container.appendChild(ContentManager.createSectionWithHeading('Journal Editor', journalEditorItems, 'news_list'));

    // Area Chair
    const areaChairItems = professional_activities.area_chair.map(formatEntry);
    container.appendChild(ContentManager.createSectionWithHeading('Area Chair', areaChairItems, 'news_list'));

    // Conference Reviewer
    const conferenceReviewerItems = professional_activities.conference_reviewer.map(formatEntry);
    container.appendChild(ContentManager.createSectionWithHeading('Conference Reviewer', conferenceReviewerItems, 'news_list'));

    // Journal Reviewer
    const journalReviewerItems = professional_activities.journal_reviewer.map(formatEntry);
    container.appendChild(ContentManager.createSectionWithHeading('Journal Reviewer', journalReviewerItems, 'news_list'));
});
