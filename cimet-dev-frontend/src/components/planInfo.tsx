import React, { Component } from 'react';

export default class PlanInfo extends Component<PlanInfoProps> {

    constructor(props: PlanInfoProps) {
        super(props);
    }
    componentDidMount() {
        this.checkOverflow();
        window.addEventListener('resize', this.checkOverflow);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkOverflow);
    }

    checkOverflow() {
        const element = document.getElementById('planDesc');
        if (element) {
            const hasOverflow = element && element.scrollWidth > element.clientWidth;
            if (hasOverflow) {
                element.setAttribute('title', element.textContent || '');
            } else {
                element?.removeAttribute('title');
            }
        }
    }

    render() {
        const { dmoPercentageAusgrid, planNameBelowData, months, contractLength, exitFee, planDesc } = this.props;
        return (
            <div>
                <div className='d-flex justify-content-center'>
                    <div className='text-left fit-width secondary-bg-color rounded py-1 px-2 mx-3'>
                        <div className='secondary-color'>{dmoPercentageAusgrid}</div>
                        <div>{planNameBelowData}</div>
                    </div>
                </div>
                <div className="d-flex flex-wrap mx-1 px-4 text-center-display align-items-center">
                    <div className="max-height p-1 text-center d-inline">
                        <i className="primary-color fa-solid fa-check"></i>&nbsp;
                        <span>{months} Month Energy Plan Period</span>
                    </div>
                    <div className="max-height p-1 text-center d-inline">
                        <i className="primary-color fa-solid fa-check"></i>&nbsp;
                        {contractLength}
                    </div>
                    <div className="max-height p-1 text-center d-inline">
                        <i className="primary-color fa-solid fa-check"></i>&nbsp;
                        {exitFee}
                    </div>
                    <div className="max-height p-1 text-center d-inline overflow-ellipsis" title={planDesc} id='planDesc'>
                        <i className="primary-color fa-solid fa-check"></i>&nbsp;
                        {planDesc}
                    </div>
                    <div className="primary-bg-color-lighter rounded max-height p-1 text-center d-inline">
                        <i className="primary-color fa-solid fa-tree"></i>&nbsp;
                        <span>Standard feed in tariff: 5c</span>
                    </div>
                </div>

            </div>
        )
    }
}

type PlanInfoProps = {
    dmoPercentageAusgrid: string;
    planNameBelowData: string;
    months: number;
    contractLength: string;
    exitFee: string;
    planDesc: string;
};
