async function getPosts() {
    const res = await fetch("http://localhost:3000/projects");
    const finalRes = await res.json();
    console.log(finalRes);
    showPosts(finalRes)
  }
 
  


  async function showPosts(myData) {
    const myDiv = document.querySelector(".project_grid");
    console.log(myDiv);
    for (let i = 0; i < myData.length; i++) {
      myDiv.innerHTML += `
        <div class=“card_${i}“>
            <div class=“cardImgContainer”>  
             <img class="cardImg" src="${myData[i].img}"/>
            </div>
                <div class=“cardContent”>
                    <div class=“cardText”>
                        <h3 class=“cardTitle”>${myData[i].title}</h3>
                        <p class=“cardSubtitle”>${myData[i].description}</p>
                        <a href=“#” class=“project-link”>Learn More</a>
                    </div>
                </div>
            </div>
          </div>
        `;
    }
  }
getPosts()
