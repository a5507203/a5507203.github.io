function initPubTable(containerId) {
    // const wrapper =  document.createElement('div');
    // wrapper
    const table = document.createElement('table');
    table.id = containerId;
  
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);


    document.addEventListener("DOMContentLoaded", function(e) {
      document.getElementById('pubWrapper').appendChild(table);
    });
    

    return table;
  }
  
  function addPublication(table, link, title, authors, publisher, year, code, project) {
    const row = document.createElement('tr');
    table.tBodies[0].appendChild(row);
  
    const cell = document.createElement('td');
    row.appendChild(cell);
  
    const a = document.createElement('a');
    a.href = link;
    a.target = '_blank';
    a.textContent = title;
    a.className = "hyperlink";
    
    const authorsDiv = document.createElement('div');
    authors = authors.replace("Y Yao", '<span class="thisauthor" style="color: rgb(17, 17, 17); font-weight: 700; text-decoration: none; font-style: normal;">Y Yao</span>');
    authorsDiv.innerHTML = authors;
   
    const pubDiv = document.createElement('div');
    pubDiv.className="publisher";
    if (code != null){
      publisher = publisher+" ["+' <a href='+ code+' target="_blank">Code</a>';
   
      if (project != null){
        
        publisher = publisher+' | '+' <a href='+ project+' target="_blank">Project page</a>';      
      }
      publisher =  publisher+" ]";
    }
    pubDiv.innerHTML = publisher;
    cell.appendChild(a);
    cell.appendChild(authorsDiv);
    cell.appendChild(pubDiv);

    const yearDiv = document.createElement('td');
    yearDiv.className  = "table_year";
    yearDiv.innerHTML = year;
    row.appendChild(yearDiv);

    

  }

const table = initPubTable('Pub');

addPublication(table,
  "https://nips.cc/virtual/2023/poster/71944",                    
  "CS-Isolate: Extracting Hard Confident Examples by Content and Style Isolation",
  "Y Lin, Y Yao, X Shi, M Gong, X Shen, D Xu, T Liu",
  "NeurIPS",
  "2023"
  );

addPublication(table,
  "https://scholar.google.com/citations?view_op=view_citation&amp;hl=en&amp;user=OkcaMKAAAAAJ&amp;sortby=pubdate&amp;citation_for_view=OkcaMKAAAAAJ:MXK_kJrjxJIC",                    
  "Which is Better for Learning with Noisy Labels: The Semi-supervised Method or Modeling Label Noise?",
  "Y Yao, M Gong, Y Du, J Yu, B Han, K Zhang, T Liu",
  "ICML",
  "2023",
  "https://github.com/tmllab/2023_ICML_Which-is-Better-for-Learning-with-Noisy-Labels"
  );
addPublication(table, 
  "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=OkcaMKAAAAAJ&citation_for_view=OkcaMKAAAAAJ:KlAtU1dfN6UC",
  "StarmapVis: An Interactive and Narrative Visualisation Tool for Single-Cell and Spatial Data",
  "S Ma, X Fang, Y Yao, J Li, DC Morgan, Y Xia, CSM Kwok, MCK Lo, DMD Siu, KK Tsia, A Yang, JWK Ho",
  "Computational and Structural Biotechnology Journal",
  "2023",
  "https://github.com/holab-hku/starmapVis",
  "https://holab-hku.github.io/starmapVis"
  );
addPublication(table, 
  "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=OkcaMKAAAAAJ&citation_for_view=OkcaMKAAAAAJ:YOwf2qJgpHMC",
  "ProtoSimi: Label Correction for Fine-Grained Visual Categorization",
  "J Shen, Y Yao, S Huang, Z Wang, R Wang, J Yu, T Liu",
  "Machine Learning",
  "2023");
addPublication(table, 
  "https://scholar.google.com/citations?view_op=view_citation&amp;hl=en&amp;user=OkcaMKAAAAAJ&amp;sortby=pubdate&amp;citation_for_view=OkcaMKAAAAAJ:roLk4NBRz8UC",
  "Rethinking Class-Prior Estimation for Positive-Unlabeled Learning",
  "Y Yao, T Liu, B Han, M Gong, G Niu, M Sugiyama, D Tao",
  "ICLR",
  "2022",
  "https://github.com/tmllab/2022_ICLR_Rethinking-Class-Prior-Estimation-for-Positive-Unlabeled-Learning"
);
addPublication(table, 
  "https://scholar.google.com/citations?view_op=view_citation&amp;hl=en&amp;user=OkcaMKAAAAAJ&amp;sortby=pubdate&amp;citation_for_view=OkcaMKAAAAAJ:YsMSGLbcyi4C",
  "Understanding How Pretraining Regularizes Deep Learning Algorithms",
  "Y Yao, B Yu, C Gong, T Liu",
  "TNNLS",
  "2021");
addPublication(table, 
  "https://scholar.google.com/citations?view_op=view_citation&amp;hl=en&amp;user=OkcaMKAAAAAJ&amp;sortby=pubdate&amp;citation_for_view=OkcaMKAAAAAJ:hqOjcs7Dif8C",
  "Instance-Dependent Label-Noise Learning under a Structural Causal Model",
  "Y Yao, T Liu, M Gong, B Han, G Niu, K Zhang",
  "NeurIPS",
  "2021",
  'https://github.com/tmllab/2021_NeurIPS_Instance-dependent-Label-noise-Learning-under-a-Structural-Causal-Model'
  );
addPublication(table,
  "https://scholar.google.com/citations?view_op=view_citation&amp;hl=en&amp;user=OkcaMKAAAAAJ&amp;sortby=pubdate&amp;citation_for_view=OkcaMKAAAAAJ:Se3iqnhoufwC",
  "Dual T: Reducing Estimation Error for Transition Matrix in Label-Noise Learning",
  "Y Yao, T Liu, B Han, M Gong, J Deng, G Niu, M Sugiyama",
  "NeurIPS",
  "2020",
  "https://github.com/tmllab/2020_NeurIPS_dual-t-reducing-estimation-error-for-transition-matrix-in-label-noise-learning", 
  )
  


