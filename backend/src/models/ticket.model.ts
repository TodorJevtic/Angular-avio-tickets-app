import { Schema, model } from "mongoose";

export interface Ticket{
    id: string;
    avio_prevozinik: string;
    polazna_lokacija: string;
    odredisna_lokacija: string;
    vreme_trajanja_leta_sati: number;
    vreme_trajanja_leta_minuti: number;
    klasa: string;
    broj_preostalih_mesta: number;
    cena: number;
    tags: string[];
    favorite: boolean;
    imageUrl: string;
    stars: number;
    status: 'done' | 'next' | 'cancelled';
    polazni_aerodrom: string;
    dolazni_aerodrom: string;
  }

  export const TicketSchema = new Schema <Ticket>(
    {
        avio_prevozinik:{ type: String, required:true},
        polazna_lokacija:{ type: String, required:true},
        odredisna_lokacija:{ type: String, required:true},
        vreme_trajanja_leta_sati:{ type: Number, required:true},
        vreme_trajanja_leta_minuti:{ type: Number, required:true},
        klasa:{ type: String, required:true},
        broj_preostalih_mesta:{ type: Number, required:true},
        cena:{ type: Number, required:true},
        tags:{ type: [String], required:true},
        favorite:{ type: Boolean, default:false},
        imageUrl:{ type: String, required:true},
        stars:{ type: Number, required:true},
        status:{ type: String, required:true},
        polazni_aerodrom:{ type: String, required:true},
        dolazni_aerodrom:{ type: String, required:true},
    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals: true
        },
        timestamps: true
    }
  )

  export const TicketModel = model<Ticket>('ticket', TicketSchema);