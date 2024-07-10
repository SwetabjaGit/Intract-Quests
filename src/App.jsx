import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Cover from './components/Cover/Cover';
import Footer from './components/Footer/Footer';
import Dictionary from './components/Dictionary/Dictionary';
import TabSwitcher from './components/TabSwitcher/TabSwitcher';
import Projects from './components/Projects/Projects';
import Timeline from './components/Timeline/Timeline';

function App() {

  return (
    <>
      <Header/>
      <Cover/>
      <Timeline/>
      <div className="_divider_glow_container"></div>
      <Projects/>
      <div className="_divider_glow_container"></div>
      <Dictionary/>
      <TabSwitcher/>
      <div className="_divider_glow_container"></div>
      <Footer/>
    </>
  )
}

export default App;
