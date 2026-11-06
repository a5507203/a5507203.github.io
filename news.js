// News data
const newsItems = [
  { "date": "[11-2026]", "text": "I am serving as a Senior Area Chair for ICML'27." },
  { "date": "[09-2026]", "text": "Two papers have been accepted to NeurIPS'26. Congrats to everyone on their hard work!" },
  { "date": "[06-2026]", "text": "One paper has been accepted to ECCV'26." },
  { "date": "[11-2025]", "text": "I was awarded an ARC Discovery Early Career Researcher Award (DECRA 2026)." },
  { "date": "[10-2025]", "text": "Our ARC Discovery Project (DP26) has been funded." },
  { "date": "[09-2025]", "text": "Two papers have been accepted to NeurIPS'25. Congrats to everyone on their hard work!" },
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
];

// Register news section with ContentManager
ContentManager.registerSection('news', function(container) {
  const newsList = ContentManager.createList(newsItems, 'news_list');
  container.appendChild(newsList);
});
