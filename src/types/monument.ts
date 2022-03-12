import { Document } from "mongoose"

export interface IMonument extends Document {
    name: string
    time_slot: number
    bookings: number
    price: number
}