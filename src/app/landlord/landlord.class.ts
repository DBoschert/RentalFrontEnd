import { Renter } from "../renter/renter.class";

export class LandLord {
    id: number = 0;
    username: string = "";
    password: string = "";
    firstName: string = "";
    lastName: string = "";
    phone: string = "";
    email: string = "";
    numOfTenants: number = 1;
    maxNumOfTenants: number = 1;
    companyName: string = "";

    renterId: number = 0;
    renter: Renter | null = null;
}