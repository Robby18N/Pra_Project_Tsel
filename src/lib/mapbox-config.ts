/**
 * Mapbox public access token (safe to ship client-side — this is the
 * "pk." style token Mapbox GL JS expects in the browser, not a secret key).
 * Read from an env var rather than hardcoded so it never lands in git
 * history (GitHub's push protection flags it either way, but this also
 * lets each environment/deployment use its own token).
 *
 * Set NEXT_PUBLIC_MAPBOX_TOKEN in .env.local (gitignored) — see .env.example.
 */
export const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";

/** Light basemap style matching the dashboard's white/slate aesthetic. */
export const MAPBOX_STYLE = "mapbox://styles/obby19/cmhbgz8od001801qx2ckb225f";
