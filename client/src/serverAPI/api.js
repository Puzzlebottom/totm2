import axios from 'axios'

export const api = {
  saveNewEncounter: async (newEncounterData) => {
    await axios.post('api/encounter/save', {newEncounterData})
  },

  saveNewEntity: async (newEntityData) => {
    await axios.post('/api/entity/save', {newEntityData})
  },
}