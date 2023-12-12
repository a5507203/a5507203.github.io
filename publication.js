const publicationData = [
  {
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=OkcaMKAAAAAJ&sortby=pubdate&citation_for_view=OkcaMKAAAAAJ:4DMP91E08xMC",
    title: "CS-Isolate: Extracting Hard Confident Examples by Content and Style Isolation",
    authors: "Y Lin, Y Yao, X Shi, M Gong, X Shen, D Xu, T Liu",
    publisher: "NeurIPS",
    year: "2023",
    code: "https://github.com/tmllab/2023_NeurIPS_CS-isolate",
    project: null
  },
  {
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=OkcaMKAAAAAJ&citation_for_view=OkcaMKAAAAAJ:Wp0gIr-vW9MC",
    title: "Which is Better for Learning with Noisy Labels: The Semi-supervised Method or Modeling Label Noise?",
    authors: "Y Yao, M Gong, Y Du, J Yu, B Han, K Zhang, T Liu",
    publisher: "ICML",
    year: "2023",
    code: "https://github.com/tmllab/2023_ICML_Which-is-Better-for-Learning-with-Noisy-Labels",
    project: null
  },
  {
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=OkcaMKAAAAAJ&citation_for_view=OkcaMKAAAAAJ:KlAtU1dfN6UC",
    title: "StarmapVis: An Interactive and Narrative Visualisation Tool for Single-Cell and Spatial Data",
    authors: "S Ma, X Fang, Y Yao, J Li, DC Morgan, Y Xia, CSM Kwok, MCK Lo, DMD Siu, KK Tsia, A Yang, JWK Ho",
    publisher: "Computational and Structural Biotechnology Journal",
    year: "2023",
    code: "https://github.com/holab-hku/starmapVis",
    project: "https://holab-hku.github.io/starmapVis"
  },
  {
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=OkcaMKAAAAAJ&citation_for_view=OkcaMKAAAAAJ:YOwf2qJgpHMC",
    title: "ProtoSimi: Label Correction for Fine-Grained Visual Categorization",
    authors: "J Shen, Y Yao, S Huang, Z Wang, R Wang, J Yu, T Liu",
    publisher: "Machine Learning",
    year: "2023",
    code: null,
    project: null
  },
  {
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=OkcaMKAAAAAJ&sortby=pubdate&citation_for_view=OkcaMKAAAAAJ:roLk4NBRz8UC",
    title: "Rethinking Class-Prior Estimation for Positive-Unlabeled Learning",
    authors: "Y Yao, T Liu, B Han, M Gong, G Niu, M Sugiyama, D Tao",
    publisher: "ICLR",
    year: "2022",
    code: "https://github.com/tmllab/2022_ICLR_Rethinking-Class-Prior-Estimation-for-Positive-Unlabeled-Learning",
    project: null
  },
  {
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=OkcaMKAAAAAJ&sortby=pubdate&citation_for_view=OkcaMKAAAAAJ:YsMSGLbcyi4C",
    title: "Understanding How Pretraining Regularizes Deep Learning Algorithms",
    authors: "Y Yao, B Yu, C Gong, T Liu",
    publisher: "TNNLS",
    year: "2021",
    code: null,
    project: null
  },
  {
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=OkcaMKAAAAAJ&sortby=pubdate&citation_for_view=OkcaMKAAAAAJ:hqOjcs7Dif8C",
    title: "Instance-Dependent Label-Noise Learning under a Structural Causal Model",
    authors: "Y Yao, T Liu, M Gong, B Han, G Niu, K Zhang",
    publisher: "NeurIPS",
    year: "2021",
    code: "https://github.com/tmllab/2021_NeurIPS_Instance-dependent-Label-noise-Learning-under-a-Structural-Causal-Model",
    project: null
  },
  {
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=OkcaMKAAAAAJ&citation_for_view=OkcaMKAAAAAJ:4TOpqqG69KYC",
    title: "Dual T: Reducing Estimation Error for Transition Matrix in Label-Noise Learning",
    authors: "Y Yao, T Liu, B Han, M Gong, J Deng, G Niu, M Sugiyama",
    publisher: "NeurIPS",
    year: "2020",
    code: "https://github.com/tmllab/2020_NeurIPS_dual-t-reducing-estimation-error-for-transition-matrix-in-label-noise-learning",
    project: null
  }
];



function createPubTable() {
  // const wrapper =  document.createElement('div');
  // wrapper
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  publicationData.forEach(item => {
    addPublication(table,
      item.link,
      item.title,
      item.authors,
      item.publisher,
      item.year,
      item.code,
      item.project
    );
  });

  document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById('pubWrapper').appendChild(table);
  });


  return table;
}

function addPublication(table, link, title, authors, publisher, year, code, project) {
  const row = document.createElement('tr');
  table.tBodies[0].appendChild(row);

  const cell = document.createElement('td');
  cell.className = "left_rows"
  row.appendChild(cell);

  const a = document.createElement('a');
  a.href = link;
  a.target = '_blank';
  a.textContent = title;
  a.className = "hyperlink";

  const authorsDiv = document.createElement('div');
  authors = authors.replace("Y Yao", '<b>Y Yao</b>');
  authorsDiv.innerHTML = authors;

  const pubDiv = document.createElement('div');
  pubDiv.className = "publisher";

  if (code != null) {
    publisher = publisher + '<span class=extralink> [<a href=' + code + ' target="_blank">Code</a>]';

    if (project != null) {

      publisher = publisher + ' [<a href=' + project + ' target="_blank">Project</a>]';
    }
    publisher = publisher + "</span>";
  }
  pubDiv.innerHTML = publisher;
  cell.appendChild(a);
  cell.appendChild(authorsDiv);
  cell.appendChild(pubDiv);

  const yearDiv = document.createElement('td');
  yearDiv.className = "table_year";
  yearDiv.innerHTML = year;
  row.appendChild(yearDiv);
}

createPubTable();
