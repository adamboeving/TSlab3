import { ShippingContainer } from "./ShippingContainer";
import { Transporter } from "./Transporter";
export class Ship implements Transporter {
    maxWeight: number;
    containers!: ShippingContainer[];
    constructor(maxWeight: number, containers: ShippingContainer[]){
        this.maxWeight = maxWeight;
    }
    addContainer(container: ShippingContainer) {
        this.containers.push(container)
    }
    getTotalWeight(): any {
        if(this.containers = []){
            return 0;
        }
        else {
            this.getTotalWeight();
        }
    }
    isOverWeight(): boolean{
        this.getTotalWeight();
         let toalWeight = this.getTotalWeight() + 0;
         if(toalWeight > this.maxWeight) {
             return true;
         }
         else {
             return false;
         }
    }
}