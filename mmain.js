function toggleChatbot() {
  const chatbotWindow = document.getElementById('chatbot-window');
  chatbotWindow.style.display = chatbotWindow.style.display === 'none' ? 'flex' : 'none';
}

function appendMessage(sender, message) {
  const chatbox = document.getElementById('chatbox');
  const msgDiv = document.createElement('div');
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatbox.appendChild(msgDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();
  if (!message) return;

  appendMessage('Vous', message);
  input.value = '';

  // Chatbot logique locale (similaire au Python)
  let response = "";
  const msg = message.toLowerCase();
  if (msg.includes("horaire")) {
    response = "Le cabinet est ouvert du samedi au jeudi de 9h à 17h.";
  } else if (msg.includes("adresse")) {
    response = "Nous sommes situés Bloc 32, Cité 05 juillet, Mostaganem.";
  } else if (msg.includes("rendez-vous") || msg.includes("rdv")) {
    response = "Pour prendre rendez-vous, appelez le 044 59 67 86 ou utilisez le formulaire de contact sur le site.";
  } else if (msg.includes("néphrologie")) {
    response = "La néphrologie est la spécialité médicale qui s'occupe des maladies des reins.";
  } else if (msg.includes("merci")) {
    response = "Avec plaisir ! Si tu as d'autres questions, n'hésite pas.";
  } else if (msg.includes("bonjour") || msg.includes("salut")) {
    response = "Bonjour ! Bienvenue au cabinet.";
  } else if (msg.includes("docteur") || msg.includes("médecin")) {
    response = "Le Dr. TABOUCHE est spécialiste en néphrologie avec plusieurs années d'expérience.";
  } else {
    response = "Je peux répondre aux questions sur le cabinet, les horaires, la néphrologie et la prise de rendez-vous. Pose-moi ta question !";
  }

  setTimeout(() => appendMessage('Chatbot', response), 500);
}
