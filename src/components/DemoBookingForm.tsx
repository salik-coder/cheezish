"use client";

import { useRef, useState, type FormEvent } from 'react';
import { Button } from './Button';

type Field = 'name' | 'email' | 'date';

export function DemoBookingForm() {
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [complete, setComplete] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const inputClass = 'w-full min-w-0 rounded-lg border border-white/20 bg-background px-4 py-3 text-base text-main focus:border-primary focus:outline-2 focus:outline-primary';

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Partial<Record<Field, string>> = {};
    if (String(data.get('name') ?? '').trim().length < 2) next.name = 'Enter an example name with at least two characters.';
    const email = event.currentTarget.elements.namedItem('email') as HTMLInputElement;
    if (!email.value || !email.validity.valid) next.email = 'Enter a valid example email address.';
    const date = String(data.get('date') ?? '');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (!date || new Date(`${date}T00:00:00`) < today) next.date = 'Choose today or a future date.';
    setErrors(next);
    setComplete(Object.keys(next).length === 0);
    const first = Object.keys(next)[0];
    if (first) (event.currentTarget.elements.namedItem(first) as HTMLInputElement)?.focus();
  }

  return (
    <form ref={formRef} onSubmit={submit} noValidate aria-describedby="booking-note" className="grid gap-6" onChange={() => { if (complete) setComplete(false); }}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold">Name <span className="text-muted">(required)</span></label>
          <input id="name" name="name" autoComplete="off" maxLength={80} required className={inputClass} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} placeholder="Alex Example" />
          {errors.name && <p id="name-error" className="mt-2 text-sm text-red-300">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold">Email <span className="text-muted">(required)</span></label>
          <input id="email" name="email" type="email" autoComplete="off" maxLength={254} required className={inputClass} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} placeholder="alex@example.com" />
          {errors.email && <p id="email-error" className="mt-2 text-sm text-red-300">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="guests" className="mb-2 block text-sm font-semibold">Guests</label>
          <select id="guests" name="guests" className={inputClass} defaultValue="2">{[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n === 5 ? '5+ people' : `${n} ${n === 1 ? 'person' : 'people'}`}</option>)}</select>
        </div>
        <div>
          <label htmlFor="date" className="mb-2 block text-sm font-semibold">Date <span className="text-muted">(required)</span></label>
          <input id="date" name="date" type="date" required className={inputClass} aria-invalid={!!errors.date} aria-describedby={errors.date ? 'date-error' : undefined} />
          {errors.date && <p id="date-error" className="mt-2 text-sm text-red-300">{errors.date}</p>}
        </div>
        <div>
          <label htmlFor="time" className="mb-2 block text-sm font-semibold">Example time</label>
          <select id="time" name="time" className={inputClass}>{['18:00', '18:30', '19:00', '19:30', '20:00'].map(time => <option key={time}>{time}</option>)}</select>
        </div>
      </div>
      <Button type="submit" className="w-full sm:w-fit">PREVIEW BOOKING</Button>
      <p role="status" aria-live="polite" className="text-sm leading-relaxed text-primary">{complete ? 'Demo preview complete. No reservation was made and no information was sent or saved.' : Object.keys(errors).length ? 'Please check the highlighted fields.' : 'This form stays entirely in your browser.'}</p>
    </form>
  );
}
