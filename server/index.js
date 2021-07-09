import express from "express";
import bodyParser from "body-parser";
import {encounterRepository, entityRepository} from "./db-api.js"

export const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json())

server.get('/api/entity/load', async (req, res) => {
  const entityType = req.body.data
  res.send(await entityRepository.loadEntitiesByType(entityType))
})

server.post('/api/entity/save', async (req, res) => {
  await entityRepository.newEntity(req.body.data)
})

server.get('/api/encounter/active', async (req, res) => {
  res.send(await encounterRepository.loadActiveEncounter())
})

server.get('/api/encounter/load', async (req, res) => {
  const encounterName = req.body.data
  res.send(await encounterRepository.loadEncounterByName(encounterName))
})

server.post('/api/encounter/save', async (req, res) => {
  await encounterRepository.newEncounter(req.body.data)
})
