import { LandLord } from "../landlord/landlord.class";

export class Renter {
    id: number = 0;
    username: string = "";
    password: string = "";
    firstName: string = "";
    lastName: string = "";
    phone: string = "";
    email: string = "";

    landLordId: number = 0;
    landlord: LandLord | null = null;
}