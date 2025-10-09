import { Position } from "src/types/Position"

export const Lerp = (a: number, b: number, t: number) => {
    return (1.0 - t) * a + b * t
}
export const InverseLerp = (a: number, b: number, v: number) => {
    return (v - a) / (b - a)
}
export const Clamp01 = (v: number) => {
    if (v < 0) {
        return 0
    }
    if (v > 1) {
        return 1
    }
    return v
}
export const Distance = (a: Position, b: Position) => {

    const xDistance = a.x - b.x;
    const yDistance = a.y - b.y;

    return Math.sqrt(xDistance ** 2 + yDistance ** 2);
}
export const WrapIndex = (index: number, length: number): number => {
  if (length <= 0) {
    throw new Error('Length must be greater than 0')
  }
    return ((index % length) + length) % length
}