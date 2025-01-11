const BASE_URL = 'https://api.coingecko.com/api/v3'

class APIError extends Error {
  constructor(message, status) {
    super(message)
    this.status = status
    this.name = 'APIError'
  }
}

async function fetchWithErrorHandling(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`)
    
    if (!response.ok) {
      throw new APIError(
        `API request failed: ${response.statusText}`,
        response.status
      )
    }

    return await response.json()
  } catch (error) {
    if (error instanceof APIError) {
      throw error
    }
    throw new APIError('Network request failed', 500)
  }
}

export async function getBitcoinPrice() {
  return fetchWithErrorHandling(
    '/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true'
  )
}

export async function getTrendingCoins() {
  return fetchWithErrorHandling('/search/trending')
}

export async function getCoinDetails(id) {
  return fetchWithErrorHandling(`/coins/${id}`)
}

