// Récupération des données du localStorage
document.addEventListener('DOMContentLoaded', () => {
  const userData = JSON.parse(localStorage.getItem('userData')) || {};

  // Remplir les informations du profil
  document.getElementById('userName').textContent = `${userData.firstName || '-'} ${userData.lastName || '-'}`;
  document.getElementById('userEmail').textContent = userData.email ? maskEmail(userData.email) : '-';
  document.getElementById('userCountry').textContent = userData.country || '-';
  document.getElementById('userPhone').textContent = userData.phone || '-';

  // Gestion du solde
  let balance = parseInt(localStorage.getItem('userBalance')) || 0;
  document.getElementById('userBalance').textContent = balance;

  // Dépôt
  document.getElementById('depositButton').addEventListener('click', () => {
      document.getElementById('depositModal').classList.remove('hidden');
  });

  document.getElementById('proceedDeposit').addEventListener('click', () => {
      const paymentMethod = document.getElementById('paymentOptions').value;
      alert(`Veuillez poursuivre votre procédure de dépôt ICI.`);
      window.open(`https://wa.me/2348029158828?text=Je+souhaite+faire+un+dépôt+via+${paymentMethod}`, '_blank');
  });

  // Investissement
  document.getElementById('investButton').addEventListener('click', () => {
      alert('Redirection vers le formulaire d’investissement.');
      window.location.href = "investment.html";
  });

  // Bouton WhatsApp
  document.getElementById('whatsappButton').addEventListener('click', () => {
      window.open('https://wa.me/2348029158828', '_blank');
  });
});

// Masquer partiellement l'email
function maskEmail(email) {
  const [name, domain] = email.split('@');
  return `${name.slice(0, 2)}***@${domain}`;
}



// Gestion de l'inscription
document.getElementById('signupForm')?.addEventListener('submit', (e) => {
  e.preventDefault();

  const userData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      country: document.getElementById('country').value,
      income: document.getElementById('income').value,
      activity: document.getElementById('activity').value,
      password: document.getElementById('password').value
  };

  const confirmPassword = document.getElementById('confirmPassword').value;

  if (userData.password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
  }

  // Stocker les données utilisateur
  localStorage.setItem('userData', JSON.stringify(userData));
  alert("Inscription réussie !");
  window.location.href = "index.html";
});

// Gestion de la connexion
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const storedUser = JSON.parse(localStorage.getItem('userData'));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert("Connexion réussie !");
      window.location.href = "dashboard.html";
  } else {
      alert("Email ou mot de passe incorrect.");
  }
});

