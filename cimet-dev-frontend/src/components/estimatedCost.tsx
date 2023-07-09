import React, { Component } from 'react';

export default class EstimatedCost extends Component<EstimatedCostProps> {
    constructor(props: EstimatedCostProps) {
        super(props);
    }

    render() {
        const { annualBillAmount, monthlyBillAmount } = this.props;
        return (
            <div className="d-flex justify-content-center align-items-center">
                <div className='card'>
                    <div className='primary-bg-color-light text-size text-light fw-semibold card-header'>Estimated Cost &nbsp; <i className='text-light fa-solid fa-circle-info'></i></div>
                    <div className='primary-bg-color-lighter card-body'>
                        <div className='primary-color fs-5 fw-semibold'>
                            ${annualBillAmount}^
                            <span className='text-size secondary-color'>/yr</span>
                        </div>
                        <div className='primary-color-light fs-6 fw-semibold'>
                            ${monthlyBillAmount}
                            <span className='text-size secondary-color'>/mo</span>
                        </div>
                </div>
            </div>
        </div>
        )
    }
}

type EstimatedCostProps = {
    annualBillAmount: number;
    monthlyBillAmount: number;
};
