import React, { Component } from 'react';
import Image from 'next/image';

export default class PlanDetails extends Component<PlanDetailsProps> {
    constructor(props: PlanDetailsProps) {
        super(props);
    }
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
                            <a className='link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' 
                                href={planDetails} target='_blank'>View Details</a>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-12'>
                        <div className='text-center my-1'>
                            <a className='link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' 
                                href={planDocument} target='_blank'>Basic plan Information Document</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

type PlanDetailsProps = {
    providerName: string;
    providerImage: string;
    planDetails: string;
    planDocument: string
};
