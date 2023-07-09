import React, { Component } from 'react';
import Image from 'next/image';
import { PlanDetailsProps } from '@/models/planDetails.model';

/**
 * Child Component to display the Plan Details info in card for the Product Component
 */
export default class PlanDetails extends Component<PlanDetailsProps> {
    constructor(props: PlanDetailsProps) {
        super(props);
    }

    /**
     * To render the component UI
     * @returns JSX to render component
     */
    render() {
        const {providerName, providerImage, planDetails, planDocument } = this.props;
        return (
            <div className='d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-12 col-md-12 col-lg-12'>
                        <div className='text-center'>
                            <Image src={providerImage} alt={providerName} width={50} height={50} />
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-12'>
                        <div className='text-center'>
                            <a className='link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover cursor-pointer' 
                                href={planDetails} target='_blank'>View Details</a>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-12'>
                        <div className='text-center my-1'>
                            <a className='link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover cursor-pointer' 
                                href={planDocument} target='_blank'>Basic plan Information Document</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
