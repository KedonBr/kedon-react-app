export default function (input) {
    if (!input || input.length === 0 ){
        return {
            isValid: false,
            messageInvalid: `O CNPJ informado é inválido`
        }
      } else {
        if (input.replace(/\D/g,'').length == 14) {
            var cnpj = input.replace(/\D/g,'').trim();
            
            cnpj = cnpj.replace(/\./g, '');
            cnpj = cnpj.replace('-', '');
            cnpj = cnpj.replace('/', ''); 
            cnpj = cnpj.split(''); 
            
            var v1 = 0;
            var v2 = 0;
            var aux = false;
            
            for (var i = 1; cnpj.length > i; i++) { 
                if (cnpj[i - 1] != cnpj[i]) {  
                    aux = true;   
                } 
            } 
            
            if (aux == false) {  
                return {
                    isValid: false,
                    messageInvalid: `O CNPJ informado é inválido`
                  };
            }
            
            for (var i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
                if (p1 >= 2) {  
                    v1 += cnpj[i] * p1;  
                } else {  
                    v1 += cnpj[i] * p2;  
                } 
            } 
            
            v1 = (v1 % 11);
            
            if (v1 < 2) { 
                v1 = 0; 
            } else { 
                v1 = (11 - v1); 
            } 
            
            if (v1 != cnpj[12]) {  
                return {
                    isValid: false,
                    messageInvalid: `O CNPJ informado é inválido`
                  };
            } 
            
            for (var i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) { 
                if (p1 >= 2) {  
                    v2 += cnpj[i] * p1;  
                } else {   
                    v2 += cnpj[i] * p2; 
                } 
            }
            
            v2 = (v2 % 11); 
            
            if (v2 < 2) {  
                v2 = 0;
            } else { 
                v2 = (11 - v2); 
            } 
            
            if (v2 != cnpj[13]) {  
                return {
                    isValid: false,
                    messageInvalid: `O CNPJ informado é inválido`
                  };
            } else {  
                console.log('Valid') 
                return {
                    isValid: true,
                    messageInvalid: `O CNPJ informado é válido`
                  };
            }
        } else {
            return {
                isValid: false,
                messageInvalid: `O CNPJ informado é inválido`
              };
        }
    
      }
}