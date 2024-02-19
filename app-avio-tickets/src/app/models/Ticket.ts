export class Ticket{
  id!: string;
  avio_prevozinik!: string;
  polazna_lokacija!: string;
  odredisna_lokacija!: string;
  vreme_trajanja_leta_sati!: number;
  vreme_trajanja_leta_minuti!: number;
  klasa!: string;
  broj_preostalih_mesta!: number;
  cena!: number;
  tags?: string[];
  favorite!: boolean;
  imageUrl!: string;
  stars!: number;
  status?: 'done' | 'next' | 'cancelled';
  polazni_aerodrom!: string;
  dolazni_aerodrom!: string;
}
