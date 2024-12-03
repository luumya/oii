    const articles = document.querySelectorAll("article");
    articles.forEach(article => {
        article.addEventListener("mouseover", () => {
            article.style.backgroundColor = "#e0f7fa";
        });
        article.addEventListener("mouseout", () => {
            article.style.backgroundColor = "#fff";
        });
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.1)";
        });
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });

    const filterInput = document.getElementById("filter-input");
    if (filterInput) {
        filterInput.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase();
            cards.forEach(card => {
                const description = card.querySelector("p")?.textContent.toLowerCase() || "";
                card.style.display = description.includes(searchTerm) ? "block" : "none";
            });
        });
    }

    const form = document.getElementById('cadastro-form');
    const opinionField = document.getElementById('opinion');
    const feedbackMessage = document.getElementById('feedback-message');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (opinionField.value.length < 10) {
                feedbackMessage.style.display = 'block';
            } else {
                feedbackMessage.style.display = 'none';
                alert('Cadastro realizado com sucesso!');
            }
        });
    }
    const darkModeToggle = document.getElementById('darkModeToggle');

// Função para alternar o modo escuro
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  // Alterar o texto do botão
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = 'Switch to Light Mode';
  } else {
    darkModeToggle.textContent = 'Switch to Dark Mode';
  }
}

// Adicionar o evento de clique ao botão
darkModeToggle.addEventListener('click', toggleDarkMode);
    
    