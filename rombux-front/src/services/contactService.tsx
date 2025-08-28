import { ContactFormData } from "@/interfaces/contact";


const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function submitContactForm(data: ContactFormData): Promise<{ message: string }> {
    try {
        const res = await fetch(`${API_URL}/contact/submit`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        if (!res.ok) {
            const errorData = await res.json().catch(() => null);
            throw new Error(
                errorData?.message ||
                `Error al enviar formulario: ${res.status} ${res.statusText}`
            );
        }

        return await res.json();
    } catch (error) {
        throw error;
    }
}
