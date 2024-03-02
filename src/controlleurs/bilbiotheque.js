import {addOuvrageBD, deleteOuvrageBD, getOuvrageBD, updateOuvrageBD} from "../databases/api.js";

export const addOuvrage = async(request, reply) =>{
    try{
        const data = request.body
        await addOuvrageBD(data.title,data.author,data.description,data.format)
        reply.send("ajout réussi")
    }
    catch(e){
        reply.send(e)
    }
}

export const getOuvrage = async(request, reply) =>{
    try{
        const res = await getOuvrageBD();
        reply.send(res)
    }
    catch(e){
        reply.send(e)
    }
}

export const updateOuvrage = async(request, reply) =>{
    try{
        const data = request.body
        await updateOuvrageBD(data.title,data.author,data.description,data.format)
        reply.send("misa à jour réussie")
    }
    catch(e){
        reply.send(e)
    }
}

export const deleteOuvrage = async(request, reply) =>{
    try{
        await deleteOuvrageBD(request.body.title);
        reply.send('suppression réussie')
    }
    catch(e){
        reply.send(e)
    }
}