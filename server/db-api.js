import {database} from "./database.js";

export const encounterRepository = {
  loadEncounter: async () => {
    const result = await database.select().from('encounters')
    return result
  }
}

export const entityRepository = {
  loadEntities: async () => {
    const result = await database.select().from('entities')
    return result
  }
}