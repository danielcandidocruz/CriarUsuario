class ValidaFormulario{
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();

    } 


    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit()
        })
    }

    hadleSubmit(e){
        e.preventDefault();
        const CamposVali = this.CamposValidos();
        const SenhasVali = this.ValidaSenha();


        if(CamposValidos && SenhasValidas) {
            alert('Formulario enviado')
            this.formulario.submit();
        }

    }


    ValidaSenha() {

        let valid = true;

    
        const senha = this.formulario.querySelector('.senha');
        const repetirsenha = this.formulario.querySelector('.repetir-senha');


        if(senha.value !== repetirsenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos senha e precisar ser iguais') 
            this.criaErro(repetirSenha, ' Campos senha e repetir senha precisa ter iguais');

        }
    }

    CamposValidos(){
        let valid = true;


            for(let errorText of this.formulario.querySelectorAll('.error-text'))  // "For" pra quando enviar o furmulario, não ter várias mensagem de erro

        for(let campo of this.formulario.querySelectorAll('. validar')) {
           const label = campo.previousElementSibling.innerText;
           
            if(!campo.value) {
                this.criaErro(campo, `Campo ${label} nao pode estar em branco`);
                valid = false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.ValidaCPF(campo)) valid = false;
                    }

            if(campo.classList.contains('usuario')) {
                 if(!this.ValidaUsuario(campo)) valid = false;
                    }

        }

        return valid;
    }


        ValidaUsuario(campo) {
            const usuario = campo.value;
            let valid = true;

            if(usuario.length < 3 || usuario.length > 12) {
                this.criaErro(campo, 'Usuario precisa ter entre 3 s 12 caracteres');
                valid = false;
            }

            if(!usuario.match(/[a-zA-Z0-0] +/g )) {
                this.criaErro(campo, 'Usuario precisa conter apenas letras ou numeros');
                valid = false;
            }

            return true;
        }


        ValidaCPF(campo) {
            const cpf = new ValidaCPF(campo.value);

            if(!cpf.valida()) {
                this.criaErro(campo, 'CPF invalido');
                return false;
            }

            return true;
        }

        criaErro(campo, msg) {
            const div = document.createElement('div');
            div.classList = msg;
            div.classList.add('error-text');
            campo.insertAdjacentElement('afterend',div);
        }


    }


const valida = new ValidaFormulario();