import {
  ServiceContainer,
  CustomFontStyled as SpanStyled,
  CustomFontStyled,
  HeaderFixedStyled,
} from '../styled/ViewMain.styled';
import {
  CommonStyled,
  GuideLineStyled,
  GroupStyled,
  ImageStyled,
  ButtonStyled,
  FontStyled,
} from '../styled/common/Common.styled';

import ViewHeader from '../Header/ViewHeader';
import ViewFooter from '../Footer/ViewFooter';
import Profile from './components/Profile';
// import Test from '../Footer/ViewFooter.test';
import Contents from './components/Contents';
import { URL } from '../../Model/url.data';
import { handleMoveToURL } from '../../Controller/main.control';
import { contentsArr } from '../../Model/data/main/contents.data';
import images from '../../Model/data/img/img.data';
import { profilesArr } from '../../Model/data/main/profile.data';

const ViewMain = () => {
  return (
    <CommonStyled paddingTopProps='77px'>
      <HeaderFixedStyled>
        <ViewHeader />
      </HeaderFixedStyled>
      <GuideLineStyled>
        <GroupStyled
          displayProps='flex'
          dirProps='column'
          justifyProps='center'
          marginProps='0'
        >
          <FontStyled marginProps='140px auto 20px auto'>
            <div>PLANNING TO</div>
            <div>MOVE TO THE U.S.?</div>
          </FontStyled>
          <FontStyled
            fontSizeProps='var(--font-title-sm)'
            LHProps='var(--font-title-LH-sm)'
            fontWeightProps='var(--font-weight-bold)'
          >
            Get all the information you need from{' '}
            <SpanStyled
              as='span'
              fontSizeProps='var(--font-title-sm)'
              LHProps='var(--font-title-LH-sm)'
              fontWeightProps='var(--font-weight-bold)'
              colorProps='var(--primary-color-500)'
            >
              FARCADE
            </SpanStyled>
          </FontStyled>
          <div>
            <ImageStyled
              src={images.bannerImage}
              // widthProps='275px'
              // heightProps='149px'
              marginProps='68px auto'
            />
          </div>
          <ButtonStyled
            bgColorProps='var(--primary-color-500)'
            colorProps='var(--white-color)'
            fontSizeProps='var(--font-button-lg)'
            LHProps='var(--font-button-LH-lg)'
            fontWeightProps='var(--font-weight-bold)'
            widthProps='358px'
            heightProps='68px'
            radiusProps='100px'
            marginProps=' 0 auto 140px auto'
            onClick={() => {
              handleMoveToURL(URL.launchAlerts);
            }}
          >
            GET LAUNCH ALERTS
          </ButtonStyled>
        </GroupStyled>
      </GuideLineStyled>
      <ServiceContainer
        bgColorProps='var(--gray-color-90)'
        colorProps='var(--white-color)'
      >
        <GuideLineStyled
          id='ourService'
          dirProps='column'
          marginProps='120px auto 120px auto'
        >
          <CustomFontStyled
            fontSizeProps='var(--font-title-sx)'
            LHProps='var(--font-title-LH-sx)'
            fontWeightProps='var(--font-weight-semi-bold)'
            colorProps='var(--primary-color-500)'
            marginProps='0 0 20px 0'
          >
            Problem
          </CustomFontStyled>
          <CustomFontStyled
            fontSizeProps='var(--font-title-lg)'
            LHProps='var(--font-title-LH-lg)'
            fontWeightProps='var(--font-weight-semi-bold)'
            marginProps='0 0 16px 0'
          >
            Having trouble finding
          </CustomFontStyled>
          <CustomFontStyled
            fontSizeProps='var(--font-title-lg)'
            LHProps='var(--font-title-LH-lg)'
            fontWeightProps='var(--font-weight-semi-bold)'
            marginProps='0 0 16px 0'
          >
            neighborhood information in the U.S.?
          </CustomFontStyled>
          <CustomFontStyled
            fontSizeProps='var(--font-body-lg)'
            LHProps='var(--font-body-LH-lg)'
            fontWeightProps='var(--font-weight-medium)'
            colorProps='var(--gray-color-30)'
          >
            We&apos;ve found that many people have difficulty finding local
            information
          </CustomFontStyled>
          <CustomFontStyled
            fontSizeProps='var(--font-body-lg)'
            LHProps='var(--font-body-LH-lg)'
            fontWeightProps='var(--font-weight-medium)'
            colorProps='var(--gray-color-30)'
            marginProps='0 0 64px 0'
          >
            when moving to the United States.
          </CustomFontStyled>
          <div>
            <ImageStyled src={images.mainMessage} />
          </div>
          <div>
            <ImageStyled src={images.arrowDown} marginProps='120px 0' />
          </div>
          <CustomFontStyled
            fontSizeProps='var(--font-title-sx)'
            LHProps='var(--font-title-LH-sx)'
            fontWeightProps='var(--font-weight-semi-bold)'
            colorProps='var(--primary-color-500)'
            marginProps='0 0 20px 0'
          >
            How did we solve it?
          </CustomFontStyled>
          <CustomFontStyled
            fontSizeProps='var(--font-title-lg)'
            LHProps='var(--font-title-LH-lg)'
            fontWeightProps='var(--font-weight-bold)'
          >
            Find out about the neighborhood as told
          </CustomFontStyled>
          <CustomFontStyled
            fontSizeProps='var(--font-title-lg)'
            LHProps='var(--font-title-LH-lg)'
            fontWeightProps='var(--font-weight-bold)'
          >
            by actual residents on the{' '}
            <SpanStyled
              as='span'
              fontSizeProps='var(--font-title-lg)'
              LHProps='var(--font-title-LH-lg)'
              fontWeightProps='var(--font-weight-bold)'
              colorProps='var(--primary-color-500)'
            >
              FARCADE
            </SpanStyled>
          </CustomFontStyled>
          <CustomFontStyled
            fontSizeProps='var(--font-body-lg)'
            LHProps='var(--font-body-LH-lg)'
            fontWeightProps='var(--font-weight-medium)'
            colorProps='var(--gray-color-30)'
            marginProps='16px 0 0 0'
          >
            At the FARCADE, you can hear real stories about the neighborhood
            told
          </CustomFontStyled>
          <CustomFontStyled
            fontSizeProps='var(--font-body-lg)'
            LHProps='var(--font-body-LH-lg)'
            fontWeightProps='var(--font-weight-medium)'
            colorProps='var(--gray-color-30)'
          >
            by local residents and ask local residents directly about the
            neighborhood.
          </CustomFontStyled>
          <div>
            <ImageStyled src={images.mainSet} marginProps='64px 0' />
          </div>
          <div>
            <ImageStyled src={images.arrowPolygon} marginProps='0 0 64px 0' />
          </div>
          <GuideLineStyled
            widthProps='100%'
            marginProps='0'
            justifyProps='space-around'
          >
            {contentsArr.map((Element, index) => {
              return (
                <Contents
                  key={index}
                  titleProps={Element.title}
                  descriptionProps={Element.description}
                />
              );
            })}
          </GuideLineStyled>
        </GuideLineStyled>
      </ServiceContainer>
      <GuideLineStyled id='team' dirProps='column' marginProps='120px auto'>
        <CustomFontStyled
          fontSizeProps='var(--font-title-sx)'
          LHProps='var(--font-title-LH-sx)'
          fontWeightProps='var(--font-weight-semi-bold)'
          colorProps='var(--primary-color-500)'
          marginProps='0 0 20px 0'
        >
          Team
        </CustomFontStyled>
        <CustomFontStyled
          fontSizeProps='var(--font-title-lg)'
          LHProps='var(--font-title-LH-lg)'
          fontWeightProps='var(--font-weight-bold)'
          colorProps='var(--gray-color-100)'
        >
          We are a team of South Korean college students
        </CustomFontStyled>
        <CustomFontStyled
          fontSizeProps='var(--font-title-lg)'
          LHProps='var(--font-title-LH-lg)'
          fontWeightProps='var(--font-weight-bold)'
          colorProps='var(--gray-color-100)'
          marginProps='0 0 16px 0'
        >
          starting a business
        </CustomFontStyled>
        <CustomFontStyled
          fontSizeProps='var(--font-body-lg)'
          LHProps='var(--font-body-LH-lg)'
          fontWeightProps='var(--font-weight-medium)'
          colorProps='var(--gray-color-60)'
        >
          Our team is putting a lot of effort into helping immigrants who have
          moved to the United States
        </CustomFontStyled>
        <CustomFontStyled
          fontSizeProps='var(--font-body-lg)'
          LHProps='var(--font-body-LH-lg)'
          fontWeightProps='var(--font-weight-medium)'
          colorProps='var(--gray-color-60)'
          marginProps='0 0 64px 0'
        >
          gain information about their neighborhood and adjust to their
          neighborhood.
        </CustomFontStyled>
        <GuideLineStyled>
          {profilesArr.map((Element, index) => {
            return (
              <Profile
                key={index}
                imageProps={Element.imageProps}
                typeProps={Element.typeProps}
                nameProps={Element.nameProps}
                emailProps={Element.emailProps}
              ></Profile>
            );
          })}
        </GuideLineStyled>
      </GuideLineStyled>
      {/* </StyledContainer> */}
      <ServiceContainer
        bgColorProps='var(--primary-color-500)'
        colorProps='var(--white-color)'
      >
        <GuideLineStyled
          id='contact'
          displayProps='flex'
          dirProps='column'
          justifyProps='center'
        >
          <FontStyled
            fontSizeProps='var(--font-headline-md)'
            LHProps='var(--font-headline-LH-md)'
            fontWeightProps='var(--font-weight-bold)'
            marginProps='120px auto 16px auto'
          >
            CONTACT
          </FontStyled>
          <FontStyled
            fontSizeProps='var(--font-title-sm)'
            LHProps='var(--font-title-LH-sm)'
            fontWeightProps='var(--font-weight-bold)'
          >
            If you&apos;d like to talk with us, please feel free to contact us
          </FontStyled>
          <ButtonStyled
            bgColorProps='var(--gray-color-100)'
            colorProps='var(--white-color)'
            fontSizeProps='var(--font-button-lg)'
            LHProps='var(--font-button-LH-lg)'
            fontWeightProps='var(--font-weight-bold)'
            widthProps='363px'
            heightProps='68px'
            radiusProps='16px'
            marginProps='64px auto 120px auto'
            onClick={() => {
              handleMoveToURL(URL.contact);
            }}
          >
            farcade.us@gmail.com
          </ButtonStyled>
        </GuideLineStyled>
      </ServiceContainer>
      <ViewFooter />
    </CommonStyled>
  );
};

export default ViewMain;
