const API_BASE_URL = '/api'

export interface HealthResponse {
    status: string
    application: string
}

export async function checkBackend(): Promise<HealthResponse> {
    const response = await fetch(`${API_BASE_URL}/health`)

    if (!response.ok) {
        throw new Error('Backend connection failed')
    }

    return response.json()
}