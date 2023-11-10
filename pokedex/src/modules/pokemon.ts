export class Pokemon {
    id: number;
    name: string;
    type: string[];
    description: string;
    photo: string;
    evolution: string;
    abilities: string;
    height: number;
    weight: number;
        constructor(id: number, name: string, type: string[], description: string, photo: string, evolution: string, abilities: string, height: number, weight: number) {
            this.id = id;
            this.name = name;
            this.type = type;
            this.description = description;
            this.photo = photo;
            this.evolution = evolution;
            this.abilities = abilities;
            this.height = height;
            this.weight = weight;
        }
}