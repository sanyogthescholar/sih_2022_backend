import { Response, Request } from "express"
import { ITicket } from "./../../types/ticket"
import Ticket from "../../models/ticket"
const qrcode = require('qrcode');
const qrOption = { 
  margin : 7,
  width : 175
};

const getTickets = async (req: Request, res: Response): Promise<void> => {
    try {
        const booked_tickets: ITicket[] = await Ticket.find({"checked_in":false})
        const checked_in: ITicket[] = await Ticket.find({"checked_in":true})
        res.status(200).json({ booked_tickets, checked_in })
    }
    catch (error) {
        throw error
    }
}

const addTickets = async (req: Request, res: Response): Promise<void> => {
    console.log("REQUEST BODY\n"+req.body)
    var data = JSON.stringify(req.body)
    console.log("\nREQUEST BODY JSONIFIED\n"+data)
    try {
        const ticket: ITicket = new Ticket({
            site_name: req.body.site_name,
            visitor_name: req.body.visitor_name,
            visitor_email: req.body.visitor_email,
            visitor_id: req.body.visitor_id,
            visitor_id_number: req.body.visitor_id_number,
            num_adults: req.body.num_adults,
            num_children: req.body.num_children,
            time_slot: req.body.time_slot,
            checked_in: req.body.checked_in,
            hash: req.body.hash,
        })

        const newTicket: ITicket = await ticket.save()
        const allTicket: ITicket[] = await Ticket.find()
        const qrString = req.body.hash;
        const bufferImage = await qrcode.toDataURL(qrString,qrOption);
        console.log(bufferImage);

        res
            .status(200)
            .json({ticket: bufferImage})
    }
    catch (error) {
        throw error
    }
}

export { getTickets, addTickets }