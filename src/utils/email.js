export default function (input) {
    if(input && input.length > 0){
      return {
        isValid: (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(input)),
        messageInvalid: 'O email informado é inválido.'
      };
    } else {
      return  null
    }
  }