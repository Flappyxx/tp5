export const bookSchema = {body : {
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

export const getBookSchema = {
    response: {
        200: {
            type : "array" ,
            items : bookSchema
        }
    }
}

export const updateBookSchema = {body :{
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

export const deleteBookSchema ={body : {
        type: "object",
        properties: {
            title: {type: "string"}
        },
        required: ["title"],
    }}