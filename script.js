document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usercodeElement = document.getElementById('usercode');
    const sectorElement = document.getElementById('sector');
    const passwordElement = document.getElementById('password');
    const errorMessageElement = document.getElementById('error-message');

    const validCredentials = {
        comercial: { usercode: 'CMCL12', password: 'Com&c1@l' },
        rh: { usercode: '98HR', password: 'RH!@2025' },
        ti: { usercode: 'DEV4567TI', password: 'IT&&||==2025' }
    };

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        errorMessageElement.style.display = 'none';
        errorMessageElement.textContent = '';

        const enteredUsercode = usercodeElement.value.trim();
        const selectedSector = sectorElement.value;
        const enteredPassword = passwordElement.value;

        if (!selectedSector) {
            errorMessageElement.textContent = 'Por favor, selecione um setor.';
            errorMessageElement.style.display = 'block';
            return;
        }

        if (validCredentials[selectedSector]) {
            const correctUsercode = validCredentials[selectedSector].usercode;
            const correctPassword = validCredentials[selectedSector].password;

            if (enteredUsercode === correctUsercode && enteredPassword === correctPassword) {
                // --- LOGIN BEM-SUCEDIDO ---

                if (selectedSector === 'comercial') {
                    // *** ALTERAÇÃO PRINCIPAL: Redireciona para a página do produto ***
                    window.location.href = 'comercial.html';

                } else {
                    // Para outros setores (RH, TI), apenas mostra o alerta
                    alert(`Login bem-sucedido para o setor ${selectedSector.toUpperCase()}!`);
                }

            } else {
                // --- LOGIN FALHOU (Credenciais incorretas) ---
                errorMessageElement.textContent = 'Código de Acesso ou Senha inválidos para o setor selecionado.';
                errorMessageElement.style.display = 'block';
                passwordElement.value = '';
                passwordElement.focus();
            }
        } else {
             // --- LOGIN FALHOU (Setor inválido) ---
            errorMessageElement.textContent = 'Setor inválido selecionado.';
            errorMessageElement.style.display = 'block';
        }
    });
});