import Fastify from "fastify"
import {readFileSync} from "fs"
import * as path from "path"
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const port = 3000;

const fastify = Fastify({
    logger: true,
    http2: true,
    https: {
        allowHTTP1:true,
        key: readFileSync(path.join(__dirname,'..', '.key', 'private.key')),
        cert: readFileSync(path.join(__dirname,'..', '.key', 'server.crt'))
    }
})

fastify.register(import("./routes/routes.js"))

fastify.listen({port}, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`Fastify is listening on port: ${address}`);
});