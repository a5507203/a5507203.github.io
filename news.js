// Define your news items
// Define your news items
const newsItems = [
    { date: '[01-2025]', text: "I am an Area Chair for ICML'25." },
    { date: '[10-2024]', text: "Two papers are accepted by NeurIPS'24. Congrats Yuewen Sun and Yexiong Lin!" },
    { date: '[08-2024]', text: "I am an Area Chair for ICLR'25." },
    { date: '[06-2024]', text: "I am organizing Workshop on Trustworthy and Responsible AI for CIKM'24." },
    { date: '[02-2024]', text: "I am an Action Editor for TMLR." },
    { date: '[01-2024]', text: "One papers is accepted by ICLR'24 (Spotlight). Congrats Ziming Hong!" },
    { date: '[01-2024]', text: "One paper is accepted by ICLR'24. Congrats Jiyang Zheng!" },
    { date: '[12-2023]', text: "I joined the University of Sydney as a Lecturer." },
    { date: '[09-2023]', text: "One paper is accepted by NeurIPS'23." },
    { date: '[09-2023]', text: "Yang Zhou got the University Medal! Congrats Yang!" },
    { date: '[09-2023]', text: "One paper is accepted by NeurIPS'23. Congrats Yexiong Lin!" },
    { date: '[08-2023]', text: "I am an outstanding reviewer of NeurIPS'23." },
    { date: '[08-2023]', text: "I am an Area Chair of AJCAI'23." },
    { date: '[07-2023]', text: "One paper is accepted by MM'23. Congrats Wenjie Xuan!" },
    { date: '[04-2023]', text: "One paper is accepted by ICML'23." },
    { date: '[03-2023]', text: "I started postdoctoral research at Mohamed Bin Zayed University of Artificial Intelligence and Carnegie Mellon University." },
    { date: '[01-2023]', text: "I am an outstanding reviewer of ICLR'23." },
    // ... Add all other news items following the same structure
  ];
  
  // Function to create a list item DOM element
  function createNewsItemElement(newsItem) {
    const li = document.createElement('li');
    li.innerHTML = `${newsItem.date} ${newsItem.text}`;
    if (newsItem.congrats) {
      const span = document.createElement('span');
      span.className = 'congrats';
      span.textContent = newsItem.congrats;
      li.appendChild(span);
    }
    return li;
  }
  
  // Function to generate the entire news section
  function generateNews() {
    const newsList = document.createElement('ul');
    newsList.className = 'news_list';
    for (const item of newsItems) {
      newsList.appendChild(createNewsItemElement(item));
    }
    document.getElementById('news').appendChild(newsList);
  }
  
  // Call the generateNews function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', generateNews);