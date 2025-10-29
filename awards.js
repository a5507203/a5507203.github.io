// Awards data
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

// Register awards section with ContentManager
ContentManager.registerSection('awards', function(container) {
  const section = document.createElement('section');
  const list = ContentManager.createList(awardsData, 'news_list');
  section.appendChild(list);
  container.appendChild(section);
});