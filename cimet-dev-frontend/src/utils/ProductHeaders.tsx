import { EnergyType, SolarCompatible } from "@/models/productHeaders.model";

/**
 * Functional Component to display the Solar Header for the card on Product Component
 */
export const ProductHeaderSolar = ({ solarCompatible }: SolarCompatible) => {
    if ('yes' === solarCompatible) {
        return <span className='w-auto secondary-bg-color rounded py-1 px-2 mx-2'>
            <i className='fa-solid fa-solar-panel mx-1'></i>Solar
        </span>;
    }
    return <span></span>;
}

/**
 * Functional Component to display the Electricity Header for the card on Product Component
 */
export const ProductHeaderElectricity = ({ energyType }: EnergyType) => {
    if ('electricity' === energyType) {
        return <span className='w-auto secondary-bg-color rounded py-1 px-2 mx-1'>
            <i className='fa-solid fa-lightbulb mx-1'></i>Electricity
        </span>;
    }
    return <span></span>;
}
