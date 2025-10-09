export const formatFilePath = (path: string, name: string, extension: string) : string => {
    const normalizedPath = path.endsWith("/") ? path : path + "/"
    const normalizedExtension = extension.startsWith(".") ? extension : "." + extension
    
    return `${normalizedPath}${name}${normalizedExtension}` 
}
export const formatFirstUpperChar = (text: string): string => {
  if (!text) return text
  return text[0].toUpperCase() + text.slice(1)
}
export const paddedNumber = (num: number) => num.toString().padStart(2, '0');