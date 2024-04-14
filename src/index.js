const newsSection = document.querySelector('.news');
const awardsSection = document.querySelector('.awards');
fetch('news.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(newsItem => {
      const newsCard = createNewsCard(newsItem);
      newsSection.appendChild(newsCard);
    });
  });
fetch('awards.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(awardItem => {
      const awardCard = createAwardCard(awardItem);
      awardsSection.appendChild(awardCard);
    });
});
function createNewsCard(newsItem) {
  const card = document.createElement('div');
  card.classList.add('card', 'mb-3');
  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');
  cardHeader.textContent = newsItem.title;
  card.appendChild(cardHeader);
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  cardBody.innerHTML = newsItem.content;
  card.appendChild(cardBody);
  const cardFooter = document.createElement('div');
  cardFooter.classList.add('card-footer', 'text-muted');
  cardFooter.textContent = newsItem.date;
  card.appendChild(cardFooter);
  return card;
}
function createAwardCard(awardItem) {
  const card = document.createElement('div');
  card.classList.add('card', 'mb-3');
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const awardTitle = document.createElement('h5');
  awardTitle.classList.add('card-title');
  awardTitle.textContent = awardItem.title;
  cardBody.appendChild(awardTitle);
  const awardDescription = document.createElement('p');
  awardDescription.classList.add('card-text');
  awardDescription.textContent = awardItem.description;
  cardBody.appendChild(awardDescription);
  const awardDate = document.createElement('p');
  awardDate.classList.add('card-text', 'text-muted');
  awardDate.textContent = awardItem.date;
  cardBody.appendChild(awardDate);
  const awardIcon = document.createElement('img');
  awardIcon.src = awardItem.icon;
  awardIcon.classList.add('float-end', 'mt-3');
  cardBody.appendChild(awardIcon);
  card.appendChild(cardBody);
  return card;
}
const homeworkTabs = document.querySelector('.nav-tabs');
const homeworkContent = document.querySelector('.tab-content');
homeworkTabs.addEventListener('shown.bs.tab', event => {
  const activeTab = event.target.getAttribute('href');
  const subjectContent = document.querySelector(activeTab);
  subjectContent.classList.add('show', 'active');
});
const profileImageInput = document.querySelector('#profileImage');
const profileForm = document.querySelector('form[name="profileForm"]');
const changePasswordForm = document.querySelector('form[name="changePasswordForm"]');
profileImageInput.addEventListener('change', event => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    const profileImage = document.querySelector('.card-img-top');
    profileImage.src = e.target.result;
  };
  reader.readAsDataURL(file);
});
profileForm.addEventListener('submit', event => {
  event.preventDefault();
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phoneNumber').value
  const address = document.getElementById('address').value;
  const socialLink = document.getElementById('socialLink').value;
  console.log('Saving profile data:', {
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    socialLink,
  });
  profileForm.reset();
});

changePasswordForm.addEventListener('submit', event => {
  event.preventDefault();
  const currentPassword = document.getElementById('currentPassword').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  console.log('Submitting password change request:', {
    currentPassword,
    newPassword,
    confirmPassword,
  });
  changePasswordForm.reset();
});