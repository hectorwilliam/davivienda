export const validateData = async (fieldRegister, dataField) =>{
    let error = {}
    await fieldRegister.map( async (item) =>{
        let validateData = false;
        await item?.validation?.map(dataValidated =>{
            if(validateData) return
            let getValue = dataField[item.name];
            switch (dataValidated) {
                case "required":
                    if(!getValue){
                        error[item.name] = "el campo debe ser requrido"
                        validateData = true;
                    }
                    break;
                case "validateEmail":
                    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                    if (reg.test(getValue) === false) {
                        error[item.name] = "el campo no es un correo electronico"
                        validateData = true;
                    }
                    break;
                default:
                    break;
            }
        })
    });
    if(Object.keys(error).length === 0) return false
    return error
}

