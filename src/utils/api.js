import axios from 'axios'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export const api = axios.create({
  baseURL: API_BASE,
  timeout: 20000,
})

// Helper to upload multiple images as FormData
export async function uploadInference(images = {}, extra = {}) {
  const form = new FormData()
  Object.entries(images).forEach(([key, file]) => {
    if (file) form.append(key, file)
  })
  Object.entries(extra).forEach(([key, val]) => {
    if (val !== undefined && val !== null) form.append(key, val)
  })

  try {
    const res = await api.post('/inference', form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return res.data
  } catch (err) {
    // Graceful fallback for demo
    console.warn('Inference API unavailable, returning mock data')
    return {
      runId: Math.random().toString(36).slice(2),
      status: 'queued',
      message: 'Mock inference started',
    }
  }
}
