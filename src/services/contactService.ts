import axios from "axios";
import { ContactPayload } from "@/types/index";

export async function sendContactMessage(
  payload: ContactPayload,
): Promise<void> {
  try {
    await axios.post("/api/contact", payload);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverMessage = err.response?.data?.error;
      if (typeof serverMessage === "string" && serverMessage) {
        throw new Error(serverMessage);
      }
    }
    throw err;
  }
}
