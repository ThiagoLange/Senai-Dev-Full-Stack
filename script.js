// Conteúdo final do arquivo: 06-Exemplo-1/script.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usercodeElement = document.getElementById('usercode');
    const sectorElement = document.getElementById('sector');
    const passwordElement = document.getElementById('password');
    const errorMessageElement = document.getElementById('error-message');

    // Credenciais válidas para cada setor
    const validCredentials = {
        comercial: { usercode: 'CMCL12', password: 'Com&c1@l' },
        rh: { usercode: '98HR', password: 'RH!@2025' }, // Credenciais para RH
        ti: { usercode: 'DEV4567TI', password: 'IT&&||==2025' }
    };

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário
        errorMessageElement.style.display = 'none'; // Esconde msg de erro anterior
        errorMessageElement.textContent = '';

        const enteredUsercode = usercodeElement.value.trim();
        const selectedSector = sectorElement.value;
        const enteredPassword = passwordElement.value;

        // Verifica se um setor foi selecionado
        if (!selectedSector) {
            errorMessageElement.textContent = 'Por favor, selecione um setor.';
            errorMessageElement.style.display = 'block';
            return;
        }

        // Verifica se o setor selecionado existe nas credenciais válidas
        if (validCredentials[selectedSector]) {
            const correctUsercode = validCredentials[selectedSector].usercode;
            const correctPassword = validCredentials[selectedSector].password;

            // Verifica se código de acesso e senha estão corretos para o setor
            if (enteredUsercode === correctUsercode && enteredPassword === correctPassword) {
                // --- LOGIN BEM-SUCEDIDO ---

                // Redireciona com base no setor selecionado
                if (selectedSector === 'comercial') {
                    window.location.href = 'comercial.html'; // Redireciona para Comercial
                } else if (selectedSector === 'rh') {
                     // ***** ATUALIZAÇÃO AQUI *****
                     window.location.href = 'rh.html'; // Redireciona para RH
                     // ***** FIM DA ATUALIZAÇÃO *****
                } else if (selectedSector === 'ti') {
                    // Para TI, mostra alerta (ou redireciona se houver página)
                     alert(`Login bem-sucedido para o setor ${selectedSector.toUpperCase()}!`);
                     // Exemplo: window.location.href = 'ti.html';
                } else {
                     // Tratamento para outros setores (se adicionados)
                     alert(`Login bem-sucedido para o setor ${selectedSector.toUpperCase()}!`);
                }

            } else {
                // --- LOGIN FALHOU (Credenciais incorretas) ---
                errorMessageElement.textContent = 'Código de Acesso ou Senha inválidos para o setor selecionado.';
                errorMessageElement.style.display = 'block';
                passwordElement.value = ''; // Limpa o campo senha
                passwordElement.focus(); // Coloca o foco no campo senha
            }
        } else {
             // --- LOGIN FALHOU (Setor inválido, não deveria acontecer com <select>) ---
            errorMessageElement.textContent = 'Setor inválido selecionado.';
            errorMessageElement.style.display = 'block';
        }
    });
});