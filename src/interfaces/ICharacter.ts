export default interface ICharacter {
    name: string; // Canonical name for use in hover/alt text
    names: string[];
    containsNames?: string[]; // If the answer contains this phrase, accept it (e.g. sponge for spongebob or halo for Master chief)
    x: number;
    y: number;
    z: number;
    h?: number; //height
    w?: number; // width
    src: string;
    revealed?: boolean;
}