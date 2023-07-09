
import { PlanListData } from '@/models/product.model';
import React, { Component } from 'react';
import './product.css';
import { ProductHeaderSolar, ProductHeaderElectricity } from '@/utils/ProductHeaders';
import PlanDetails from './planDetails';
import PlanInfo from './planInfo';
import EstimatedCost from './estimatedCost';
import ConnectInfo from './connectInfo';

export default class Product extends Component<ProductProps> {
    constructor(props: ProductProps) {
        super(props);
    }

    render() {
        const  { data } = this.props;
        return (
            <>
                {data.map(planList => {
                    return <div className='text-size border rounded mx-2 my-4' key={planList.id}>
                        <div className='fieldset-legend d-flex p-2  secondary-color fw-semibold'>
                            <ProductHeaderElectricity energyType={planList.energy_type} />
                            <ProductHeaderSolar solarCompatible={planList.solar_compatible} />
                        </div>

                        <div className='row my-1'>
                            <div className='col-12 col-md-3 col-lg-4 px-5'>
                                <PlanDetails providerName={planList.provider_name} providerImage={planList.provider_image} 
                                    planDetails={planList.plan_document} planDocument={planList.plan_document} />
                            </div>
                            <div className='col-12 col-md-5 col-lg-4 my-1 px-5'>
                                <PlanInfo dmoPercentageAusgrid={planList.dmo_percentage.Ausgrid} planNameBelowData={planList.plan_name_below_data}
                                    contractLength={planList.contract_length} exitFee={ planList.view_exit_fee.match(/<p>(.*?)<\/p>/)?.[1] || planList.view_exit_fee }
                                    months={Math.floor(planList.days/30)}  planDesc={planList.plan_desc} />
                            </div>
                            <div className='col-12 col-md-4 col-lg-4 my-1 px-5'>
                                <EstimatedCost annualBillAmount={planList.expected_annually_bill_amount} monthlyBillAmount={planList.expected_monthly_bill_amount} />
                            </div>
                        </div>

                        <div className='px-3 dmo-content' dangerouslySetInnerHTML={{ __html: planList.dmo_content.Ausgrid }} />
                        <ConnectInfo coolingOffPeriod={planList.cooling_off_period.match(/<p>(.*?)<\/p>/)?.[1] || planList.cooling_off_period} />
                    </div>
                })}
            </>
        )
    }
}

type ProductProps = {
    data: PlanListData[];
};
