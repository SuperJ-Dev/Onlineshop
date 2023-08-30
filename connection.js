document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Exemple de vérification (remplacez par votre logique côté serveur)
      if (username === 'admin' && password === 'password') {
        // alert('Connexion réussie !');
        // Redirigez vers la page principale de votre site après la connexion réussie
        window.location.href = 'boutique.html'; // Remplacez 'page_principale.html' par votre URL
      } else {
        alert('Identifiant ou mot de passe incorrect.');
      }
    });
  });
  