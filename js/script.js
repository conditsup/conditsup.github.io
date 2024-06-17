document.addEventListener("DOMContentLoaded", function() {
  const projects = [
      { title: "Project 1", description: "대학생활의 꽃, 캡스톤 졸업작품으로 직접 만든 TPS fps게임입니다. 언리얼 엔진으로 제작했고 학술제 우승했습니다!", img: "images/project1.jpg" },
      { title: "Project 2", description: "캡스톤 작품을 준비해 연습으로 만들어본 게임입니다.", img: "images/project2.jpg" },
      { title: "Project 3", description: "1학년때 만들어보았던 레이싱 게임으로 완벽하게 만들지 못했지만 저에게 있어서 처음 도전해 보았던 새로운 장르의 게임입니다.", img: "images/project3.jpg" },
      { title: "Project 4", description: "언리얼 엔진으로 제작했으며 캐릭터의 움직임을 연습해 제작했던 작품입니다.", img: "images/project4.jpg" },
      { title: "Project 5 (예정)", description: "제가 좋아하는 게임중 하나입니다. 탄탄한 스토리와 몰입감으로 제가 프로그래머로서 만들고 싶은 목표중 하나입니다.", img: "images/project5.jpg" },
  ];

  const projectsContainer = document.getElementById("projects");

  projects.forEach((project, index) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project");
      projectDiv.id = `project${index + 1}`;

      const projectImg = document.createElement("img");
      projectImg.src = project.img;
      projectImg.alt = `${project.title} 이미지`;
      projectImg.addEventListener("click", () => openModal(project.img, project.description));

      const projectTitle = document.createElement("h3");
      projectTitle.textContent = project.title;

      const projectDescription = document.createElement("p");
      projectDescription.textContent = project.description;

      projectDiv.appendChild(projectImg);
      projectDiv.appendChild(projectTitle);
      projectDiv.appendChild(projectDescription);
      projectsContainer.appendChild(projectDiv);
  });


  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("caption");
  const span = document.getElementsByClassName("close")[0];

  function openModal(imgSrc, description) {
      modal.style.display = "block";
      modalImg.src = imgSrc;
      captionText.textContent = description;
  }

  span.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});
