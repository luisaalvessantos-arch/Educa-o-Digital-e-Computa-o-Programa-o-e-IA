// Aguarda o carregamento total do DOM antes de executar
document.addEventListener("DOMContentLoaded", () => {
    
    // --- FUNCIONALIDADE 1: Alternador de Modo Escuro ---
    const themeButton = document.getElementById("theme-toggle");
    
    themeButton.addEventListener("click", () => {
        // Alterna a classe dark-mode no elemento body
        document.body.classList.toggle("dark-mode");
    });

    // --- FUNCIONALIDADE 2: Validador Dinâmico do Quiz ---
    const quizForm = document.getElementById("quiz-form");
    const resultBox = document.getElementById("quiz-result");

    quizForm.addEventListener("submit", (event) => {
        // Evita o recarregamento padrão da página ao enviar o formulário
        event.preventDefault();

        // Captura as opções selecionadas pelo usuário usando as variáveis
        const answerQ1 = document.querySelector('input[name="q1"]:checked').value;
        const answerQ2 = document.querySelector('input[name="q2"]:checked').value;

        let correctAnswersCount = 0;

        // Processa as variáveis e calcula o total de acertos
        if (answerQ1 === "certo") {
            correctAnswersCount++;
        }
        if (answerQ2 === "certo") {
            correctAnswersCount++;
        }

        // Manipulação dinâmica do DOM para exibir o resultado final
        resultBox.classList.remove("hidden", "success", "error");

        if (correctAnswersCount === 2) {
            resultBox.textContent = `Parabéns! Você acertou todas as ${correctAnswersCount} questões e sabe se proteger da desinformação!`;
            resultBox.classList.add("success");
        } else {
            resultBox.textContent = `Você acertou ${correctAnswersCount} de 2 questões. Atente-se aos sinais de mídias manipuladas!`;
            resultBox.classList.add("error");
        }
    });
});
