import { ITicket } from "./../types/ticket"
import { model, Schema } from "mongoose"

const ticketSchema: Schema = new Schema(
    {
        site_name: {
            type: String,
            required: true,
        },
        visitor_name: {
            type: String,
            required: true,
        },
        visitor_email: {
            type: String,
            required: true,
        },
        visitor_id: {
            type: String,
            required: true,
        },
        visitor_id_number: {
            type: String,
            required: true,
        },
        num_adults: {
            type: Number,
            required: true,
        },
        num_children: {
            type: Number,
            required: true,
        },
        time_slot: {
            type: String,
            required: true,
        },

        checked_in: {
            type: Boolean,
            required: true,
        },
    },
    {timestamps: true}
)

export default model<ITicket>("Ticket", ticketSchema)