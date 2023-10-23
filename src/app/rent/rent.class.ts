import { LandLord } from "../landlord/landlord.class";
import { Renter } from "../renter/renter.class";

export class Rent {
    id: number = 0;
    pricePerMonth: number = 0;
    dateToPay: string = "";
    dateModified: string = "";
    leaseStart: string = "";
    leaseEnd: string = "";
    leaseExtension: string = "";

    renterId: number = 0;
    renter: Renter | null = null;
    
    landLordId: number = 0;
    landlord: LandLord | null = null;

}