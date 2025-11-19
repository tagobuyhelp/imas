import React, { useEffect, useState } from 'react';
import { User, Phone, Mail, GraduationCap, BookOpen, CheckSquare } from 'lucide-react';

type EnquiryPayload = {
  name: string;
  mobile: string;
  email: string;
  study_mode: string;
  course: string;
  consent: boolean;
};

type Props = {
  onClose?: () => void;
};

const courses = [
  'MBA Global',
  'MBA Executive',
  'PGDM',
  'BBA',
  'BCA',
];

const studyModes = ['Online', 'On Campus', 'Hybrid'];

export default function EnquiryFormModal({ onClose }: Props) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [payload, setPayload] = useState<EnquiryPayload>({
    name: '',
    mobile: '',
    email: '',
    study_mode: '',
    course: '',
    consent: false,
  });

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('imas:openEnquiryForm', handler);
    return () => window.removeEventListener('imas:openEnquiryForm', handler);
  }, []);

  const close = () => {
    setOpen(false);
    setError(null);
    setSuccess(null);
    setSubmitting(false);
    onClose?.();
  };

  const validate = (): string | null => {
    if (!payload.name.trim()) return 'Please enter your name.';
    if (!/^\+?\d{7,15}$/.test(payload.mobile.trim())) return 'Enter a valid mobile number.';
    if (!/^\S+@\S+\.\S+$/.test(payload.email.trim())) return 'Enter a valid email address.';
    if (!payload.study_mode) return 'Please select a study mode.';
    if (!payload.course) return 'Please select a course.';
    if (!payload.consent) return 'Please agree to receive information.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/npf/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || 'Failed to submit.');
      }
      setSuccess('Enquiry submitted successfully. We will contact you soon.');
      // After successful submission, open brochure modal
      window.dispatchEvent(new Event('imas:openBrochureModal'));
      setTimeout(() => close(), 300);
    } catch (err: any) {
      setError(err?.message || 'Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" className="imas-modal-backdrop">
      <div className="imas-modal">
        <div className="imas-modal-header">
          <h3>Enquiry Form</h3>
          <button type="button" aria-label="Close" onClick={close}>
            ×
          </button>
        </div>
        <form className="imas-modal-body" onSubmit={handleSubmit}>
          {error && <div className="imas-alert imas-alert-error">{error}</div>}
          {success && <div className="imas-alert imas-alert-success">{success}</div>}
          <div className="imas-field">
            <User className="imas-field-icon" aria-hidden="true" />
            <input
              className="imas-field-input"
              type="text"
              placeholder="Enter Name"
              value={payload.name}
              onChange={(e) => setPayload({ ...payload, name: e.target.value })}
              required
            />
          </div>
          <div className="imas-field">
            <Phone className="imas-field-icon" aria-hidden="true" />
            <input
              className="imas-field-input"
              type="tel"
              placeholder="Enter Mobile Number"
              value={payload.mobile}
              onChange={(e) => setPayload({ ...payload, mobile: e.target.value })}
              required
            />
          </div>
          <div className="imas-field">
            <Mail className="imas-field-icon" aria-hidden="true" />
            <input
              className="imas-field-input"
              type="email"
              placeholder="Enter Email Address"
              value={payload.email}
              onChange={(e) => setPayload({ ...payload, email: e.target.value })}
              required
            />
          </div>
          <div className="imas-grid">
            <div className="imas-field">
              <BookOpen className="imas-field-icon" aria-hidden="true" />
              <select
                className="imas-select"
                value={payload.study_mode}
                onChange={(e) => setPayload({ ...payload, study_mode: e.target.value })}
                required
              >
                <option value="">Select a Study Mode</option>
                {studyModes.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
            <div className="imas-field">
              <GraduationCap className="imas-field-icon" aria-hidden="true" />
              <select
                className="imas-select"
                value={payload.course}
                onChange={(e) => setPayload({ ...payload, course: e.target.value })}
                required
              >
                <option value="">Select Course</option>
                {courses.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
          <label className="imas-consent">
            <CheckSquare className="imas-consent-icon" aria-hidden="true" />
            <input
              type="checkbox"
              checked={payload.consent}
              onChange={(e) => setPayload({ ...payload, consent: e.target.checked })}
              required
            />
            <span>
              I agree to receive information by signing up on International Management & Analytics School
            </span>
          </label>
          <button type="submit" disabled={submitting} className="imas-submit">
            {submitting ? 'Submitting…' : 'Submit'}
          </button>
        </form>
      </div>
      <style>
        {`
        .imas-modal-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;z-index:1000}
        .imas-modal{background:#fff;border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.18);width:90%;max-width:520px;}
        .imas-modal-header{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:#143674;color:#fff;border-radius:8px 8px 0 0}
        .imas-modal-body{display:flex;flex-direction:column;gap:10px;padding:16px}
        .imas-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
        .imas-field{position:relative;display:flex;align-items:center}
        .imas-field-icon{position:absolute;left:10px;color:#64748b;width:18px;height:18px}
        .imas-field-input{padding-left:34px;padding-right:10px;padding-top:10px;padding-bottom:10px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;width:100%}
        .imas-select{padding-left:34px;padding-right:10px;padding-top:10px;padding-bottom:10px;border:1px solid #cbd5e1;border-radius:4px;font-size:14px;width:100%;appearance:auto;background:white}
        .imas-consent{display:flex;gap:10px;align-items:flex-start;margin-top:4px}
        .imas-consent-icon{color:#64748b;width:18px;height:18px;margin-top:2px}
        .imas-submit{background:#b6423b;color:#fff;border:none;border-radius:4px;padding:10px 14px;font-weight:600}
        .imas-alert{padding:8px 10px;border-radius:4px}
        .imas-alert-error{background:#fee2e2;color:#991b1b}
        .imas-alert-success{background:#dcfce7;color:#166534}
        `}
      </style>
    </div>
  );
}