const messageInput = document.getElementById('messageInput');
const thinkBtn = document.getElementById('thinkBtn');
const searchBtn = document.getElementById('searchBtn');
const sendBtn = document.getElementById('sendBtn');

thinkBtn.addEventListener('click', function() {
  this.classList.toggle('active');
});

searchBtn.addEventListener('click', function() {
  this.classList.toggle('active');
});

messageInput.addEventListener('input', () => {
  messageInput.style.height = 'auto';
  if (messageInput.value.trim() === '') {
    messageInput.style.height = '48px';
  } else {
    messageInput.style.height = (messageInput.scrollHeight) + 'px';
  }

  if (messageInput.value.trim() !== '') {
    sendBtn.classList.add('active-send');
  } else {
    sendBtn.classList.remove('active-send');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (messageInput.value.trim() !== '') {
    messageInput.style.height = 'auto';
    messageInput.style.height = (messageInput.scrollHeight) + 'px';
    sendBtn.classList.add('active-send');
  } else {
    messageInput.style.height = '48px';
    sendBtn.classList.remove('active-send');
  }
});