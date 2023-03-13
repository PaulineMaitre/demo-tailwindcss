import React from 'react';
import './App.css';
import ProfileIcon from './assets/profilePicture2.png'
import CompanyLogo from './assets/logoTalan.png'
import EmailLogo from './assets/emailIcon.svg'
import PhoneLogo from './assets/phoneIcon.svg'
import AddressLogo from './assets/addressIcon.svg'
import WebsiteLogo from './assets/websiteIcon.svg'

function TwBusinessCard() {
    return (
        <div className={'p-2 w-[600px] h-80 m-auto rounded-lg bg-white shadow-lg flex justify-center items-center'}>
            <div className={'flex w-full'}>
                <img src={ProfileIcon} alt={'profile'}
                     className={'w-[200px] h-[250px]'}
                />
                <div className={'w-2/3 px-6 text-slate-700'}>
                    <p className={'font-semibold text-lg text-[#004A9E]'}>John SMITH</p>
                    <p className={'italic mt-1 text-sm'}>Full Stack Developer</p>
                    <div className={'my-4 w-full border-t-2 border-t-amber-300'}/>
                    <div className={'flex mb-1'}>
                        <img src={EmailLogo} className={'w-6 h-6 mr-3'} alt={'email-icon'}/>
                        <p>john.smith@talan.com</p></div>
                    <div className={'flex mb-1'}>
                        <img src={PhoneLogo} className={'w-6 h-6 mr-3'} alt={'tel-icon'}/>
                        <p>01.42.97.96.96</p>
                    </div>
                    <div className={'flex mb-1'}>
                        <img src={AddressLogo} className={'w-6 h-6 mr-3'} alt={'address-icon'}/>
                        <p>14 rue Pergolèse, 75016 PARIS</p>
                    </div>
                    <div className={'flex'}>
                        <img src={WebsiteLogo} className={'w-6 h-6 mr-3'} alt={'website-icon'}/>
                        <p>www.talan.com</p>
                    </div>
                    <img src={CompanyLogo} alt={'company-logo'}
                         className={'w-36 ml-auto'}
                    />
                </div>
            </div>
        </div>
    );
}

export default TwBusinessCard;
