const API_URL = "http://127.0.0.1:8000/api/clientes/";

export const listClientes = async () => {
    return await fetch(API_URL)
};

export const registerCliente= async (newCliente) => {
    return await fetch(API_URL,{
        method:'POST',
        headers:{
            'Content-Type':'application/jason'
        },
        body:JSON.stringify({
            "name":String(newCliente.name).trim(),
            "apellidos":String(newCliente.apellidos).trim(),
            "fechaNacimiento":String(newCliente.fechaNacimiento).trim(),
            "rfc":String(newCliente.rfc).trim(),
            "correo":String(newCliente.correo).trim(),
            "telefono":String(newCliente.telefono).trim(),
            "password":String(newCliente.password).trim(),
        })
    });
};