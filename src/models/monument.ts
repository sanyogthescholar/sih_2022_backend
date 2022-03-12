import { IMonument } from "./../types/monument"
import { model, Schema } from "mongoose"

const monumentSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

        time_slot: {
            type: Number,
            required: true,
        },

        bookings: {
            type: Number,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },
    },
    {timestamps: true}
)
/*name: string
    time_slot: string
    quantity: number
    price: number
}*/
export default model<IMonument>("Monument", monumentSchema)