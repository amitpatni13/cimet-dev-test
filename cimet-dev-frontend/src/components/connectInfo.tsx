import { ConnectInfoProps } from '@/models/connectInfo.model';
import React, { Component } from 'react'

/**
 * Component to render the Connect Info in card for the Product Component
 */
export default class ConnectInfo extends Component<ConnectInfoProps> {
    constructor(props: ConnectInfoProps) {
        super(props);
    }

    /**
     * To render the component UI
     * @returns JSX to render component
     */
    render() {
        const { coolingOffPeriod } = this.props;
        return (
            <div className='row secondary-bg-color mx-0'>
                <div className='col-6 col-md-9 col-lg-9 py-2'>
                    <div className='d-flex flex-wrap px-3'>
                        <span className='max-height p-1 d-inline'>
                            <i className='primary-color fa-solid fa-check'></i>&nbsp;
                            {coolingOffPeriod}
                            &nbsp;cooling off period
                        </span>
                        <span className='max-height p-1 d-inline'>
                            <i className='primary-color fa-solid fa-check'></i>&nbsp;
                            Secure signup in 5 mins
                        </span>
                        <span className='max-height p-1 d-inline'>
                            <i className='primary-color fa-solid fa-check'></i>&nbsp;
                            Save time and effort
                        </span>
                    </div>
                    <div className='px-3'>
                        ^ The estimated cost includes any applicable welcome credits, bonuses and conditional discounts (if applicable) which apply with the first 12 months
                        of the plan
                    </div>
                </div>
                <div className='col-6 col-md-3 col-lg-3 py-2'>
                    <button type='button' className='border-radius btn btn-primary btn-sm float-end mx-1 p-2 float-end'>
                        Connect Online Today
                    </button>
                </div>
            </div>
        )
    }
}
