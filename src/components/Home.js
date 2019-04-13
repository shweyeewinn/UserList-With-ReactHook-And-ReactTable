import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import TableContent from './TableContent';

export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <TableContent />
      <Footer />
    </React.Fragment>
  );
}
