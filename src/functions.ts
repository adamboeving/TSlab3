import { ShippingContainer } from "./ShippingContainer";
import { Transporter } from "./Transporter";
import { HeavyContainer } from "./HeavyContainer";
import { LightContainer } from "./LightContainer";
import { Truck } from "./Truck";
import { Ship } from "./Ship";
export function findContainesByDestination(containers: ShippingContainer[], destination:string){
    const sameDestination = containers.filter(container => container.destination === destination)
}
export function findOverWeightTransporters(transporters: Transporter[]) {
        const tooHeavy = transporters.filter(Transporter => Transporter.isOverWeight() )
        return tooHeavy;
}
export function isSafeToAddContainer(ship: Ship, container: ShippingContainer): boolean {
    let totalWeight = ship.getTotalWeight() + 0;
    let grossWeight = container.getGrossWeight() + 0;
    let remainder = totalWeight + grossWeight;
    if (remainder <= ship.maxWeight) {
        return true
    }
    else {
        return false
    }
}