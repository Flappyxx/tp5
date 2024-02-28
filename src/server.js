import Fastify from "fastify"
import {connectDB} from "../databases/config.js"
import * as fs from "fs"
import * as path from "path"
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const port = 3000;

const fastify = Fastify({
    logger: true,
    http2: true,
    https: {
        key: fs.readFileSync(path.join(__dirname, '..', '.key', 'private.key')),
        cert: fs.readFileSync(path.join(__dirname, '..', '.key', 'server.crt'))
    }
})

fastify.listen({port}, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }

    connectDB()
    fastify.log.info(`Fastify is listening on port: ${address}`);
});