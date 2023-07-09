export interface APIData {
    status: number;
    message: string;
    data: ElectricityData;
    ignoredParameters: [];
}

export interface ElectricityData {
    electricity: PlanListData[];
}

export interface PlanListData { // Only declaring the properties needed to build the UI since API response is too big
    id: number;
    energy_type: string;
    solar_compatible: string;
    provider_name: string;
    provider_image: string;
    plan_document: string;
    dmo_content: {
        Ausgrid: string;
    };
    dmo_percentage: {
        Ausgrid: string;
    };
    plan_name_below_data: string;
    view_bonus: string;
    contract_length: string;
    view_exit_fee: string;
    plan_desc: string;
    days: number;
    cooling_off_period: string;
    expected_annually_bill_amount: number;
    expected_monthly_bill_amount: number;
}

export type ProductProps = {
    data: PlanListData[];
}
