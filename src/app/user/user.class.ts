import { LandLord } from "../landlord/landlord.class";
import { Renter } from "../renter/renter.class";

export class User {
    id: number = 0;
    username: string = "";
    password: string = "";
    landlordOrTenant: string = "";

    renterId: number = 0;
    renter: Renter | null = null;

    landLordId: number = 0;
    landlord: LandLord | null = null;
}