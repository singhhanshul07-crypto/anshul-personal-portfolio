import { useState, type FormEvent } from "react";

interface ContactFormProps {
  email: string;
}

async function copyMessage(message: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(message);
    return;
  }

  const field = document.createElement("textarea");
  field.value = message;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.append(field);
  field.select();
  const copied = document.execCommand("copy");
  field.remove();

  if (!copied) {
    throw new Error("Clipboard unavailable");
  }
}

export function ContactForm({ email }: ContactFormProps) {
  const [status, setStatus] = useState("");
  const [isPreparing, setIsPreparing] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPreparing(true);
    setStatus("Preparing your note...");

    const fields = new FormData(event.currentTarget);
    const name = String(fields.get("name") ?? "").trim();
    const replyTo = String(fields.get("email") ?? "").trim();
    const note = String(fields.get("message") ?? "").trim();
    const subject = `A note from ${name}`;
    const body = `From: ${name}\nReply to: ${replyTo}\n\n${note}`;
    const recipient = email.trim().replace(/^mailto:/i, "");

    try {
      if (recipient) {
        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus("Your email app should open with the note ready for you to review and send.");
      } else {
        await copyMessage(`${subject}\n\n${body}`);
        setStatus("Your note was copied. A direct email address has not been added to this site yet.");
      }
    } catch {
      setStatus("Your note could not be copied. Please try again or use a device with clipboard access.");
    } finally {
      setIsPreparing(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
      <div className="contact-form__heading">
        <p className="type-small-label">Write a note</p>
        <p className="contact-form__hint type-metadata">
          {email ? "Your email app will prepare the message." : "Your note is prepared here, never sent or stored."}
        </p>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" maxLength={100} required />
        </div>
        <div className="contact-form__field">
          <label htmlFor="contact-email">Your email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required />
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-message">Your message</label>
        <textarea id="contact-message" name="message" rows={5} maxLength={4000} required />
      </div>

      <div className="contact-form__submit-row">
        <button className="button button--primary type-button" type="submit" disabled={isPreparing}>
          {isPreparing ? "Preparing..." : email ? "Prepare email" : "Copy note"}
          <span aria-hidden="true">↗</span>
        </button>
        <p className="contact-form__status type-metadata" role="status" aria-live="polite" aria-atomic="true">
          {status}
        </p>
      </div>
    </form>
  );
}
