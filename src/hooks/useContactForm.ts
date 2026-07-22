"use client";

import { useState, useEffect, FormEvent } from "react";
import { contactSchema } from "@/validation/contactSchema";
import { sendContactMessage } from "@/services/contactService";
import { FormFields, Feedback } from "@/types/index";

const EMPTY_FORM: FormFields = { name: "", email: "", message: "" };

export function useContactForm() {
  const [form, setForm] = useState<FormFields>(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  useEffect(() => {
    if (!feedback) return;
    const timer = setTimeout(() => setFeedback(null), 3000);
    return () => clearTimeout(timer);
  }, [feedback]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      setFeedback({ type: "error", message: result.error.issues[0].message });
      setIsSubmitting(false);
      return;
    }

    try {
      await sendContactMessage(form);
      setFeedback({ type: "success", message: "Message sent successfully!" });
      setForm(EMPTY_FORM);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setFeedback({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return { form, handleChange, handleSubmit, isSubmitting, feedback };
}
