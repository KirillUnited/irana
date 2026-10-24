/**
 * Formats input into the Belarus mask: +375 (XX) XXX-XX-XX
 *
 * Accepts typed digits as well as pasted numbers in these forms:
 *   +375291234567, 375 29 123 45 67, 80291234567, 8 (029) 123-45-67
 *
 * Separators are only added once the next digit exists, so Backspace
 * never gets stuck on ")" or "-".
 */
export function formatBYPhone(raw: string): string {
  let d = raw.replace(/\D/g, '');

  if (d.startsWith('375')) {
    d = d.slice(3);
  } else if (d.startsWith('80')) {
    // local format: 8 029 123-45-67 -> trunk prefix "80"
    d = d.slice(2);
  }

  d = d.slice(0, 9);

  if (!d) return '';

  let out = `+375 (${d.slice(0, 2)}`;
  if (d.length > 2) out += `) ${d.slice(2, 5)}`;
  if (d.length > 5) out += `-${d.slice(5, 7)}`;
  if (d.length > 7) out += `-${d.slice(7, 9)}`;

  return out;
}

export const BY_PHONE_REGEX = /^\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
