import React, { Component } from 'react';
import './header.css';
import { HeaderProps } from '@/models/header.model';

/**
 * Child Component to display the Header info for the Home Component
 */
export default class Header extends Component<HeaderProps> {
    constructor(props: HeaderProps) {
        super(props);
    }

    /**
     * To render the component UI
     * @returns JSX to render component
     */
    render() {
        return (
            <div className='main'>
                <div className='main-margin row my-2'>
                    <div className='col-6'>
                        <button type='button' className='btn btn-primary btn-sm mx-1 p-2'>
                            Electricity
                            <span className='button-span mx-1'>{this.props.total}</span>
                        </button>
                    </div>
                    <div className='col-6'>
                        <button type='button' className='btn btn-primary btn-sm float-end mx-1 p-2'>
                            <i className='fa-solid fa-filter mx-1'></i>
                            Filter
                        </button>
                        <div className='float-end mx-1 my-1 fw-bold'>
                            <i className='fa-solid fa-location-dot mx-1'></i>
                            2000, NSW
                        </div>
                    </div>
                </div>
                <div className='mx-1 d-flex p-1'>
                    <p>
                        <i className='fa-solid fa-circle-info secondary-color'></i>&nbsp;Initial recommendations are based on average medium usage as determined by relevant energy regulators, please view the information hover next to the estimated
                        cost box for more information. For a more accurate comparision relevant to your circumstances, please use the bill details tab on the results page to enter
                        your most recent energy bill details.</p>
                </div>
            </div>
        )
    }
}

