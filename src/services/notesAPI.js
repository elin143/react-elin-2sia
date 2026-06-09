import axios from 'axios'

const API_URL = "https://ynrzcaktwonfbvhaftnu.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlucnpjYWt0d29uZmJ2aGFmdG51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5NDUxNzEsImV4cCI6MjA5NjUyMTE3MX0.6DN3yuY-lE_-4QhwiR9aYaiMHD33MaYyx5FCRxhmkok"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },
    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}