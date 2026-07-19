import { useState } from 'react';
import { Send } from 'lucide-react';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const formSubmitEndpoint = 'https://formsubmit.co/ajax/official.rutvikdevidas@gmail.com';

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [submitting, setSubmitting] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _subject: `Portfolio contact: ${form.subject}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error(`FormSubmit failed with status ${response.status}`);
      }

      setForm(initialForm);
      setStatus({
        type: 'success',
        message: 'Message sent successfully. I will get back to you soon.',
      });
    } catch (error) {
      console.error('Contact form submit failed:', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or email directly.',
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-soft sm:p-8">
      <div className="grid gap-5">
        {[
          { label: 'Full Name', name: 'name', type: 'text', autoComplete: 'name' },
          { label: 'Email', name: 'email', type: 'email', autoComplete: 'email' },
          { label: 'Subject', name: 'subject', type: 'text', autoComplete: 'off' },
        ].map((field) => (
          <label key={field.name} className="grid gap-2 text-sm font-semibold text-white/72">
            {field.label}
            <input
              {...field}
              value={form[field.name]}
              onChange={updateField}
              required
              className="focus-ring rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-base text-white shadow-sm transition placeholder:text-white/35 hover:border-white/25"
            />
          </label>
        ))}
        <label className="grid gap-2 text-sm font-semibold text-white/72">
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={updateField}
            required
            rows="6"
            className="focus-ring resize-none rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-base text-white shadow-sm transition hover:border-white/25"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sun px-6 py-3 font-semibold text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        <Send size={18} />
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
      {status.message && (
        <p
          className={`mt-4 rounded-2xl px-4 py-3 text-sm font-semibold ${
            status.type === 'success' ? 'bg-sun/25 text-white' : 'bg-red-950/60 text-red-200'
          }`}
          role="status"
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
