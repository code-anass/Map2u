/**
 * Author: Anitha Gorli
 * Date: 24-MAR-2023
 */
 import React, { useEffect } from 'react';
 import BackgroundImage from '../components/mainPage/Background/BackgroundImage'
import HeaderComp from '../components/mainPage/CustomCards/HeaderComp'
import BodyComp from '../components/mainPage/CustomCards/BodyComp'
import { BodyWrapper, MainContainer } from './W3Content/W3CStyles'

import GenericCard from '../components/mainPage/CustomCards/GenericCard'
import { securityContent } from '../data/SecurityData'


const SecurityPage = ({ t }) => {
  const basePath = 'assets/images/settings/';

  const imageLocal = basePath + "w3c.jpg";
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, []);
  return (
    <MainContainer>

      <BackgroundImage imageLocal={imageLocal} useLocal={true}>


        <BodyWrapper>
          <HeaderComp headerTitle={"footerSecurity.title"}></HeaderComp>
          <BodyComp t={t}>

            {securityContent.map((element, index) => (
              <GenericCard obj={element} dividerHidden={element.hideDivider}></GenericCard>

            ))}

          </BodyComp>

        </BodyWrapper>

      </BackgroundImage>
    </MainContainer>

  )
}

export default SecurityPage