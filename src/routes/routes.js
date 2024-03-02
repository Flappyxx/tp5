import {addOuvrage,getOuvrage,updateOuvrage,deleteOuvrage} from "../controlleurs/bilbiotheque.js"

export default async (app,opts) => {
    app.route({
        method : "PUT",
        url:"/livre",
        handler : addOuvrage,
        schema : bookSchema
    });
    app.route({
        method : "GET",
        url:"/livre",
        handler : getOuvrage,
        schema : getBookSchema
    });
    app.route({
        method:"POST",
        url:"/livre",
        handler: updateOuvrage,
        schema : updateBookSchema
    })
    app.route({
        method:"DELETE",
        url:"/livre",
        handler: deleteOuvrage,
        scheme : deleteBookSchema
    })
}

//ranger ça dans un nouverau fichier schema.js (pas celui de mongodb)
const bookSchema = {body : {
    type: "object",
    properties: {
        title: {type: "string"},
        author: {type: "string"},
        description: {type: "string"},
        format: {
            type: "string",
            enum: ["poche", "manga", "audio"]
        }
    },
    required: ["title", "author"],
}
}

const getBookSchema = {
    response: {
        200: {
            type : "array" ,
            items : bookSchema
        }
    }
}

const updateBookSchema = {body :{
    type: "object",
    properties: {
        title: {type: "string"},
        author: {type: "string"},
        description: {type: "string"},
        format: {
            type: "string",
            enum: ["poche", "manga", "audio"]
        },
    },
    required: ["title"],
}}

const deleteBookSchema ={body : {
    type: "object",
    properties: {
        title: {type: "string"}
    },
    required: ["title"],
}}