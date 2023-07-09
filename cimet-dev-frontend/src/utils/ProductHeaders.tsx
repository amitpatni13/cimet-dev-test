
interface SolarCompatible {
    solarCompatible: string;
}

interface EnergyType {
    energyType: string;
}

export const ProductHeaderSolar = ({ solarCompatible }: SolarCompatible) => {
    if ('yes' === solarCompatible) {
        return <span className='w-auto secondary-bg-color rounded py-1 px-2 mx-2'>
            <i className='fa-solid fa-solar-panel mx-1'></i>Solar
        </span>;
    }
    return <span></span>;
}

export const ProductHeaderElectricity = ({ energyType }: EnergyType) => {
    if ('electricity' === energyType) {
        return <span className='w-auto secondary-bg-color rounded py-1 px-2 mx-1'>
            <i className='fa-solid fa-lightbulb mx-1'></i>Electricity
        </span>;
    }
    return <span></span>;
}