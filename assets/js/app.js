const { skills, technologies, experienceItems, educationItems } = window.PORTFOLIO_DATA;

let selectedSkillIndex = 0;

function renderSkills() {
  const skillsButtons = document.getElementById('skillsButtons');
  const selectedSkillName = document.getElementById('selectedSkillName');
  const selectedSkillItems = document.getElementById('selectedSkillItems');

  skillsButtons.innerHTML = '';

  skills.forEach((skill, index) => {
    const button = document.createElement('button');
    button.className =
      'px-6 py-3 text-base font-bold transition-all duration-300 transform border-4 border-black rounded-full hover:bg-black hover:text-white hover:scale-105';
    if (selectedSkillIndex === index) {
      button.classList.add('bg-black', 'text-white', 'scale-105');
    }
    button.textContent = skill.name;
    button.addEventListener('click', () => {
      selectedSkillIndex = index;
      renderSkills();
    });
    skillsButtons.appendChild(button);
  });

  const selectedSkill = skills[selectedSkillIndex];
  selectedSkillName.textContent = `${selectedSkill.name}.skill`;

  selectedSkillItems.innerHTML = selectedSkill.items
    .map((item) => `<p class="flex items-start mb-3"><span class="mr-2 text-2xl">▹</span><span>${item}</span></p>`)
    .join('');
}

function renderTechnologies() {
  const technologiesGrid = document.getElementById('technologiesGrid');
  technologiesGrid.innerHTML = technologies
    .map(
      (tech) =>
        `<div class="flex flex-col items-center justify-center p-4 transition-transform transform bg-white border-4 border-black rounded-lg hover:scale-105"><img src="${tech.icon}" alt="${tech.name}" class="w-16 h-16 mb-2"><span class="font-bold text-center">${tech.name}</span></div>`
    )
    .join('');
}

function renderExperience() {
  const experienceList = document.getElementById('experienceList');
  experienceList.innerHTML = experienceItems
    .map(
      (item) =>
        `<div class="mb-6"><h3 class="text-xl font-bold">${item.title}  ${item.company}</h3><p class="mb-2 text-sm">${item.period}</p><ul class="pl-5 list-disc">${item.responsibilities
          .map((responsibility) => `<li class="mb-1">${responsibility}</li>`)
          .join('')}</ul></div>`
    )
    .join('');
}

function renderEducation() {
  const educationList = document.getElementById('educationList');
  educationList.innerHTML = educationItems
    .map(
      (item) =>
        `<div class="mb-6"><h3 class="text-xl font-bold">${item.degree}</h3><p class="mb-2 text-sm">${item.institution} | ${item.year}</p><ul class="pl-5 list-disc">${item.details
          .map((detail) => `<li class="mb-1">${detail}</li>`)
          .join('')}</ul></div>`
    )
    .join('');
}

function renderFooterYear() {
  document.getElementById('currentYear').textContent = String(new Date().getFullYear());
}

renderSkills();
// renderTechnologies();
renderExperience();
renderEducation();
renderFooterYear();
