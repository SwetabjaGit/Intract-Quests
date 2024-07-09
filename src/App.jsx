import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Cover from './components/Cover/Cover';
import Footer from './components/Footer/Footer';
import Dictionary from './components/Dictionary/Dictionary';
import TabSwitcher from './components/TabSwitcher/TabSwitcher';

function App() {

  return (
    <>
      <Header/>
      <Cover/>
      <Dictionary/>
      <TabSwitcher/>
      <Footer/>
    </>
  )
}

export default App;
