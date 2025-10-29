// News data
const newsItems = [
  { "date": "[07-2025]", "text": "I was awarded Outstanding Area Chair for ICML'25." },
  { "date": "[07-2025]", "text": "I was awarded Outstanding Reviewer for UAI'25." },
  { "date": "[05-2025]", "text": "Three papers have been accepted to ICML'25. Congrats to everyone on their hard work!" },
  { "date": "[04-2025]", "text": "I am serving as an Area Chair for NeurIPS'25." },
  { "date": "[04-2025]", "text": "I am honored to serve as an Oral Session Chair for ICLR'25." },
  { "date": "[01-2025]", "text": "Four papers have been accepted to ICLR'25. Congrats to everyone on their hard work!" },
  { "date": "[01-2025]", "text": "I am serving as an Area Chair for ICML'25." },
  { "date": "[10-2024]", "text": "Two papers have been accepted to NeurIPS'24. Congrats to everyone on their hard work!" },
  { "date": "[08-2024]", "text": "I am serving as an Area Chair for ICLR'25." },
  { "date": "[02-2024]", "text": "I am serving as an Action Editor for TMLR." },
  { "date": "[01-2024]", "text": "Two papers have been accepted to ICLR'24. Congrats to everyone on their hard work!" },
  { "date": "[12-2023]", "text": "I joined the University of Sydney as a Lecturer." },
  { "date": "[09-2023]", "text": "Two papers have been accepted to NeurIPS'23. Congrats to everyone on their hard work!" },
  { "date": "[08-2023]", "text": "I was awarded Outstanding Reviewer for NeurIPS'23." },
  { "date": "[04-2023]", "text": "One paper has been accepted to ICML'23." },
  { "date": "[01-2023]", "text": "I was awarded Outstanding Reviewer for ICLR'23." }
];

// Register news section with ContentManager
ContentManager.registerSection('news', function(container) {
  const newsList = ContentManager.createList(newsItems, 'news_list');
  container.appendChild(newsList);
});