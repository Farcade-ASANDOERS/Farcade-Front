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

import bannerImage from '../../Assets/image/main/banner-plane.svg';
import personA from '../../Assets/image/main/person-a.svg';
import personB from '../../Assets/image/main/person-b.svg';
import personC from '../../Assets/image/main/person-c.svg';
import mainMessage from '../../Assets/image/main/main-message.svg';
import mainSet from '../../Assets/image/main/main-set.svg';
import arrowPolygon from '../../Assets/image/main/arrow-polygon-down.svg';
import arrowDown from '../../Assets/image/main/arrow-down.svg';
import ViewHeader from '../Header/ViewHeader';
import ViewFooter from '../Footer/ViewFooter';
import Profile from './components/Profile';
// import Test from '../Footer/ViewFooter.test';
import Contents from './components/Contents';
import { URL } from '../../Model/url.data';
import { handleMoveToURL } from '../../Controller/main.control';

const profilesArr = [
  {
    imageProps: personA,
    typeProps: 'Team Leader',
    nameProps: 'Woo Ju Son',
    emailProps: '99proj@gmail.com ',
  },
  {
    imageProps: personB,
    typeProps: 'DESIGNER',
    nameProps: 'Ju Hee Hyung',
    emailProps: 'gudwngml179@gmail.com',
  },
  {
    imageProps: personC,
    typeProps: 'MARKETER',
    nameProps: 'Tumaris',
    emailProps: 'ttumaris10@gmail.com',
  },
];

const dataArr = [
  {
    title: 'Chat with Residents',
    description:
      'You can quickly gather neighborhood information by asking residents about the area through one-on-one chats.',
  },
  {
    title: 'Neighborhood Safety Information',
    description:
      'You can quickly assess neighborhood safety through firsthand safety information shared by residents and the Fasade map.',
  },
  {
    title: 'Neighborhood Community',
    description:
      'After moving, you can quickly get to know your neighborhood and connect with neighbors by utilizing the local community.',
  },
];

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
              src={bannerImage}
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
            <ImageStyled src={mainMessage} />
          </div>
          <div>
            <ImageStyled src={arrowDown} marginProps='120px 0' />
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
            <ImageStyled src={mainSet} marginProps='64px 0' />
          </div>
          <div>
            <ImageStyled src={arrowPolygon} marginProps='0 0 64px 0' />
          </div>
          <GuideLineStyled
            widthProps='100%'
            marginProps='0'
            justifyProps='space-around'
          >
            {dataArr.map((Element, index) => {
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
