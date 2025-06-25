const API_URL = 'https://herencia-api-at37.onrender.com/info'

export async function createInfo(formData) {
  try {
    const response = await fetch(`${API_URL}/submit`, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(errorText || 'Failed to send data to the API')
    }

    return await response.json()
  } catch (error) {
    throw error
  }
}
