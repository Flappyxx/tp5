import {addOuvrage,getOuvrage,updateOuvrage,deleteOuvrage} from "../controlleurs/bilbiotheque.js"
import {bookSchema,getBookSchema,updateBookSchema,deleteBookSchema} from "../schemas/bookSchema.js";

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

