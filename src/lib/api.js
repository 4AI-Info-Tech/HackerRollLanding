const DEFAULT_API_BASE = "https://api.hackerroll.com";

const SOURCE_ALIASES = {
  "early-access": "early_access",
  "blog-subscribe": "blog_subscribe",
  advertise: "advertise_inquiry",
  support: "support",
};

export async function submitLead({ source, type, email, payload = {}, metadata = {} }) {
  const leadSource = SOURCE_ALIASES[source ?? type] ?? source ?? type;
  if (!leadSource) {
    throw new Error("Lead type is required.");
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Enter a valid email address.");
  }

  const apiBase = (import.meta.env.VITE_API_BASE || DEFAULT_API_BASE).replace(/\/+$/, "");
  const endpoint = import.meta.env.VITE_LEADS_ENDPOINT || `${apiBase}/landing/lead`;
  const leadPayload = {
    ...metadata,
    ...payload,
    email,
    page: window.location.pathname,
    referrer: document.referrer || null,
    submittedAt: new Date().toISOString(),
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source: leadSource,
      email,
      payload: leadPayload,
    }),
  });

  if (!response.ok) {
    throw new Error("We could not send this yet. Please try again or email us.");
  }

  if (response.status === 204) {
    return { ok: true };
  }

  return response.json().catch(() => ({ ok: true }));
}
