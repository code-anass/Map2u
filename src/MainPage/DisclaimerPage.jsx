/**
 * Author: Anitha Gorli
 * Date: 20-MAR-2023
 */
 import React, { useEffect } from 'react';
 import BackgroundImage from '../components/mainPage/Background/BackgroundImage'
import HeaderComp from '../components/mainPage/CustomCards/HeaderComp'
import BodyComp from '../components/mainPage/CustomCards/BodyComp'
import { BodyWrapper, MainContainer } from '../MainPage/W3Content/W3CStyles'

import GenericCard from '../components/mainPage/CustomCards/GenericCard'
import { disclaimerContent } from '../data/DisclaimerData'


const DisclaimerPage = ({ t }) => {
  const basePath = 'assets/images/settings/';

  const imageLocal = basePath + "w3c.jpg";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, []);

  return (
    <MainContainer>

      <BackgroundImage imageLocal={imageLocal} useLocal={true}>


        <BodyWrapper>
          <HeaderComp headerTitle={disclaimerContent.title}></HeaderComp>
          <BodyComp t={t}>

            <GenericCard obj={disclaimerContent} dividerHidden={true}></GenericCard>
           
          </BodyComp>

        </BodyWrapper>

      </BackgroundImage>
    </MainContainer>

  )
}

export default DisclaimerPage