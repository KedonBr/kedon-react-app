export default function (input) {
    if (!input || input.length === 0 ){
        return {
            isValid: false,
            messageInvalid: `O CPF informado é inválido`
        }
      } else {
        if (input.replace(/\D/g,'').length == 11) {
            var cpf = input.replace(/\D/g,'').trim();
         
            cpf = cpf.replace(/\./g, '');
            cpf = cpf.replace('-', '');
            cpf = cpf.split('');
            
            var v1 = 0;
            var v2 = 0;
            var aux = false;
            
            for (var i = 1; cpf.length > i; i++) {
                if (cpf[i - 1] != cpf[i]) {
                    aux = true;   
                }
            } 
            
            if (aux == false) {
                console.log('Invalid') 
                return {
                    isValid: false,
                    messageInvalid: `O CPF informado é inválido`
                  };
            } 
            
            for (var i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
                v1 += cpf[i] * p; 
            } 
            
            v1 = ((v1 * 10) % 11);
            
            if (v1 == 10) {
                v1 = 0; 
            }
            
            if (v1 != cpf[9]) {
                console.log('Invalid') 
                return {
                    isValid: false,
                    messageInvalid: `O CPF informado é inválido`
                  };
            } 
            
            for (var i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
                v2 += cpf[i] * p; 
            } 
            
            v2 = ((v2 * 10) % 11);
            
            if (v2 == 10) {
                v2 = 0; 
            }
            
            if (v2 != cpf[10]) {
                return {
                    isValid: false,
                    messageInvalid: `O CPF informado é inválido`
                  };
            } else {   
                return {
                    isValid: true,
                    messageInvalid: `O CPF informado é válido`
                  };
            }
        } else {
            return {
                isValid: false,
                messageInvalid: `O CPF informado é inválido`
              };
        }
    
      }
}