/**
 * Draft content guard.
 *
 * Any piece of content still containing the TODO marker is a draft: it is
 * rendered in development (so the layout can be reviewed) but never in
 * production, so no placeholder text ever reaches the live site.
 * Set NEXT_PUBLIC_SHOW_DRAFTS=true to preview drafts on a deployment.
 *
 * List remaining markers with `npm run todos`.
 */
export const TODO_MARKER = "[À COMPLÉTER";

export const SHOW_DRAFTS =
  process.env.NODE_ENV === "development" ||
  process.env.NEXT_PUBLIC_SHOW_DRAFTS === "true";

/** True if the value (string, array or object, deeply) contains a TODO marker. */
export function hasTodo(value: unknown): boolean {
  if (typeof value === "string") return value.includes(TODO_MARKER);
  if (Array.isArray(value)) return value.some(hasTodo);
  if (value && typeof value === "object") return Object.values(value).some(hasTodo);
  return false;
}

/** True if the content may be rendered in the current environment. */
export function isPublishable(value: unknown): boolean {
  return SHOW_DRAFTS || !hasTodo(value);
}

/**
 * Returns `value` when it is complete, otherwise `fallback` in production
 * (drafts are still shown in development). Used for fields that already
 * have a live value to keep until the new one is provided.
 */
export function withFallback<T>(value: T, fallback: T): T {
  return isPublishable(value) ? value : fallback;
}
