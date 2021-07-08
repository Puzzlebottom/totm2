import express from "express";
import bodyParser from "body-parser";
import {encounterRepository, entityRepository} from "./db-api.js"

export const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json())