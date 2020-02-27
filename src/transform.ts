const placeholder = /(\$[\d]*)/g;

export function transform(
  value: string,
  matchPattern: RegExp,
  renamePattern: string
) {
  const matches = value.match(matchPattern);
  const placeholders = renamePattern.match(placeholder);
  if (!matches || !placeholders) {
    return value;
  }

  matches.shift();

  return placeholders.reduce(function(prev, curr) {
    return prev.replace(curr, matches[parseInt(curr.replace("$", ""))] || "");
  }, renamePattern);
}
