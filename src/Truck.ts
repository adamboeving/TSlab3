import { Transporter } from "./Transporter";
import { ShippingContainer } from "./ShippingContainer";
export class Truck implements Transporter {
    maxWeight: number;
    constructor(maxWeight: number, container: ShippingContainer | null) {
        this.maxWeight = maxWeight;
        this.container = container
    }
    container: ShippingContainer | null;
    addContainer(container: ShippingContainer) {
        this.container = container;
    }
    getTotalWeight(): any {
        if(this.container === null){
            return 0;
        }
        else {
            return this.container.getGrossWeight()
        }
    }
    isOverWeight() {
        let weight = this.getTotalWeight() + 0;
        if(weight > this.maxWeight) {
            return true;
        }
        else {
            return false;
        }
    }
}