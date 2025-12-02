const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Body esperado por backend /campaigns/submit:
 * {
 *   campaign: string,
 *   payload: Record<string, unknown>,
 *   captchaToken: string,
 *   source?: string
 * }
 */
export type CampaignFormData = {
  campaign: string;
  payload: Record<string, unknown>;
  captchaToken: string;
  source?: string;
};

export async function submitCampaignForm(data: CampaignFormData): Promise<any> {
  try {
    const res = await fetch(`${API_URL}/campaigns/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message || `Error al enviar campaña: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    throw error;
  }
}
