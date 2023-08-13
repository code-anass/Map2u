import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../utils/theme";
import Home from "../MainPage/Home";

import { useSelector } from "react-redux";
import styled from "styled-components";
import { Disclaimer } from "../components/mainPage/dialogs/Disclaimer";

import { RoutesList } from "../MainPage/routeConfigs";
import CommingSoon from "../MainPage/CommingSoon/ComingSoon";
import PageNotFound from "../MainPage/PageNotFound/PageNotFound";
import { ScrollUp } from "../components/mainPage/dialogs/ScrollUp";
import { Chat } from "../components/mainPage/dialogs/Chat/Chat";
import { useDispatch } from "react-redux";
import { fetchCommonDetails, fetchCommonDetailsSchema } from "../redux/actions/CommonActions";

import useNetwork from "../redux/middleware/core/NetworkUtils";
import { fetchAnnouncementsDetails } from "../redux/actions/AnnouncementsActions";
import { fetchSmartPartnersDetails } from "../redux/actions/SmartPartnersActions";
import { fetchStrategicPartnersDetails } from "../redux/actions/StrategicPartnersActions";
import { fetchHighlightsDetails } from "../redux/actions/HighlightsActions";
import CursorComponent from "../components/mainPage/Cursor/CursorComponent";
import {  PORTAL_URL_END } from '../utils/Constants';
import { constants } from "buffer";


const MainPage = () => {
  const [lightMode, setLightMode] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [initiateAPI, setInitiateAPI] = useState(false);
  const [counter, setCounter] = useState(-1);

  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  const fontSize = useSelector((state) => state.fontSizes);
  const fontColor = useSelector((state) => state.fontColors);
  const fontName = useSelector((state) => state.fontNames);
  const networkState = useNetwork();
  const { online } = networkState;

  const MainContainer = styled.div`
    width: 100%;
   font-family: ${({ theme }) => theme.fontName.Def_Font}, sans-serif;
  `;
  useEffect(() => {
    setShowModal((prev) => !prev);
  }, []);

  useEffect(() => {
    if (counter <= 0) {
      setCounter((counter) => counter + 1);
    }
    if (counter === 1) {
      setCounter((counter) => counter + 1);
      dispatch(fetchCommonDetails());
      dispatch(fetchAnnouncementsDetails());
      dispatch(fetchSmartPartnersDetails());
      dispatch(fetchStrategicPartnersDetails());
      dispatch(fetchHighlightsDetails());
      dispatch(fetchCommonDetailsSchema());

    }
  }, [counter]);

  const buildRoutes = (routes) =>
    routes.reduce((RoutesList, { component, path, redirectTo }) => {
      // const routeComponent = redirectTo ?()=> <Reditect to={redirectTo}></Reditect>: withoutLayout()
      return [...RoutesList];
    }, []);

  const routes = buildRoutes(RoutesList);

  return (

    <>
        <MainContainer>
          <CursorComponent />
          <Disclaimer showModal={showModal} setShowModal={setShowModal} />

          {/* <Home
            handleClick={handleClick}
            t={t}
            lightMode={lightMode}
            setLightMode={setLightMode}
          >

          </Home> */}
          <Routes>
            <Route
              path="*"
              element={
                <Home
                  handleClick={handleClick}
                  t={t}
                  lightMode={lightMode}
                  setLightMode={setLightMode}
                ></Home>
              }
            />
           
            <Route
              path="/"
              element={
                <Home
                  handleClick={handleClick}
                  t={t}
                  lightMode={lightMode}
                  setLightMode={setLightMode}
                ></Home>
              }
            />

            <Route path={`${PORTAL_URL_END}`} element={
              <Home
                  handleClick={handleClick}
                  t={t}
                  lightMode={lightMode}
                  setLightMode={setLightMode}
                ></Home>
            } >
  
            </Route>

            <Route path="/notfound" element={<PageNotFound />} />
          </Routes>
        </MainContainer>
        <ScrollUp></ScrollUp>
        <Chat></Chat>
    </>
  );
};

export default MainPage;
