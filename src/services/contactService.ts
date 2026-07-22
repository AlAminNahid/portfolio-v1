import axios from "axios";
import { ContactPayload } from "@/types/index";

export async function sendContactMessage(
  payload: ContactPayload,
): Promise<void> {
  await axios.post("/api/contact", payload);
}
