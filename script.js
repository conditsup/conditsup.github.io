document.addEventListener("DOMContentLoaded", function() {
  // 헤더 추가
  const header = document.getElementById("header");
  const headerContent = document.createElement("h1");
  headerContent.textContent = "안녕하세요! 제 이름은 [당신의 이름]입니다.";
  header.appendChild(headerContent);

  // 자기소개 섹션 추가
  const about = document.getElementById("about");
  const profileImg = document.createElement("img");
  profileImg.src = "images/profile.jpg";
  profileImg.alt = "프로필 사진";

  const aboutText = document.createElement("p");
  aboutText.textContent = "안녕하세요, 저는 [당신의 이름]입니다. [자기소개 내용]";

  about.appendChild(profileImg);
  about.appendChild(aboutText);

  // 프로젝트 섹션 추가
  const projects = document.getElementById("projects");
  const projectsTitle = document.createElement("h2");
  projectsTitle.textContent = "프로젝트";
  projects.appendChild(projectsTitle);

  const projectDetails = [
      { title: "프로젝트 1", description: "프로젝트 1의 간단한 설명입니다.", img: "images/project1.jpg" },
      { title: "프로젝트 2", description: "프로젝트 2의 간단한 설명입니다.", img: "images/project2.jpg" },
      { title: "프로젝트 3", description: "프로젝트 3의 간단한 설명입니다.", img: "images/project3.jpg" },
      { title: "프로젝트 4", description: "프로젝트 4의 간단한 설명입니다.", img: "images/project4.jpg" },
      { title: "프로젝트 5", description: "프로젝트 5의 간단한 설명입니다.", img: "images/project5.jpg" },
  ];

  projectDetails.forEach((project, index) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project");
      projectDiv.id = `project${index + 1}`;

      const projectImg = document.createElement("img");
      projectImg.src = project.img;
      projectImg.alt = `${project.title} 이미지`;

      const projectTitle = document.createElement("h3");
      projectTitle.textContent = project.title;

      const projectDescription = document.createElement("p");
      projectDescription.textContent = project.description;

      projectDiv.appendChild(projectImg);
      projectDiv.appendChild(projectTitle);
      projectDiv.appendChild(projectDescription);
      projects.appendChild(projectDiv);
  });

  // 푸터 추가
  const footer = document.getElementById("footer");
  const footerContent = document.createElement("p");
  footerContent.textContent = "감사합니다! [마무리 말]";
  footer.appendChild(footerContent);
});
