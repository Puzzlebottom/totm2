import {database} from "./database.js";

export const encounterRepository = {
  newEncounter: async (newEncounterData) => {
    await database.insert(newEncounterData).into('encounters');
  },

  loadActiveEncounter: async () => {
    const result = await database.select().from('encounters').where('active', true)
    return result
  },

  loadEncounterByName: async (encounterName) => {
    const result = await database.select().from('encounters').where('name', encounterName)
    return result
  },

  //updateEncounter

  //deleteEncounter
}

export const entityRepository = {
  newEntity: async (newEntityData) => {
    await database.insert(newEntityData).into('entities');
  },

  loadEntitiesByType: async (entityType) => {
    //hero, enemy, npc, event
    const result = await database.select().from('entities').where('entityType', entityType)
    return result
  },

  loadEntityById: async (id) => {
    const result = await database.select().from('entities').where('id', id)
  }

  //updateEntity

  //deleteEntity
}