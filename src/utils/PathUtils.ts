export const getSubdomain = (url: string): string | null => {
  let domain = url

  if (url.includes("://")) {
    domain = url.split('://')[1];
  }
  const parts = domain.split('.')
  if (parts === null || parts.length <= 1) {
    return null
  }
  if (parts[0] !== "www") {
    return parts[0]
  }
  return parts[1]
}