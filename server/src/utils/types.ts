export type AnimalType = {
    id: number,
    name: string,
    species: string,
    race?: string
    size: string,
    color?: string,
    vacine?: number,
    castrated?: string,
    age?: number,
    gender?: string,
    temperament?: string,
    bay?: number,
    sector?: string,
    status: string,
    observation?: string,
}

export type SponsorshipType = {
    id: number,
    name: string,
    email: string,
    phone: number,
    animal_id: number,
}

export type AdoptionType = {
    id: number,
    name: string,
    email: string,
    phone: number,
    address: string,
    animal_id: number,
}

export type VolunteerType = {
    id: number,
    name: string,
    email: string,
    phone: number,
    address: string,
    availability: string,
}