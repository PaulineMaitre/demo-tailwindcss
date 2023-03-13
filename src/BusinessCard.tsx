import React from 'react';
import './App.css';
import ProfileIcon from './assets/profilePicture2.png'
import CompanyLogo from './assets/logoTalan.png'
import EmailLogo from './assets/emailIcon.svg'
import PhoneLogo from './assets/phoneIcon.svg'
import AddressLogo from './assets/addressIcon.svg'
import WebsiteLogo from './assets/websiteIcon.svg'

function BusinessCard() {
    return (
        <div className={'businessCardContainer'}>
            <div className={'cardContent'}>
                <img src={ProfileIcon} alt={'profile'}
                     className={'profileIcon'}
                />
                <div className={'detailsContainer'}>
                    <p className={'name'}>John SMITH</p>
                    <p className={'job'}>Full Stack Developer</p>
                    <div className={'separator'}/>
                    <div className={'rowInfo'}>
                        <img src={EmailLogo} className={'littleIcon'} alt={'email-icon'}/>
                        <p>john.smith@talan.com</p></div>
                    <div className={'rowInfo'}>
                        <img src={PhoneLogo} className={'littleIcon'} alt={'tel-icon'}/>
                        <p>01.42.97.96.96</p>
                    </div>
                    <div className={'rowInfo'}>
                        <img src={AddressLogo} className={'littleIcon'} alt={'address-icon'}/>
                        <p>14 rue Pergolèse, 75016 PARIS</p>
                    </div>
                    <div className={'rowInfo'}>
                        <img src={WebsiteLogo} className={'littleIcon'} alt={'website-icon'}/>
                        <p>www.talan.com</p>
                    </div>
                    <img src={CompanyLogo} alt={'company-logo'}
                         className={'companyLogo'}
                    />
                </div>
            </div>
        </div>
    );
}

export default BusinessCard;
