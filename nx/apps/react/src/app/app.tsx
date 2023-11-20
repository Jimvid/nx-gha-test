import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { Admin } from '@delogue/admin';
import { Styles } from '@delogue/styles';
import { Compliance } from '@delogue/compliance';
import Home from './components/home';
const StyledApp = styled.div``;

export function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <div
          style={{
            display: 'flex',
            background: 'black',
            padding: '5px 0 5px 5px',
            fontSize: '20px',
          }}
        >
          <div style={{ margin: '10px' }}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? 'salmon' : 'white',
              })}
            >
              Home
            </NavLink>
          </div>
          <div style={{ margin: '10px' }}>
            <NavLink
              to="/admin"
              style={({ isActive }) => ({
                color: isActive ? 'salmon' : 'white',
              })}
            >
              Admin
            </NavLink>
          </div>
          <div style={{ margin: '10px' }}>
            <NavLink
              to="/compliance"
              style={({ isActive }) => ({
                color: isActive ? 'salmon' : 'white',
              })}
            >
              Compliance
            </NavLink>
          </div>
          <div style={{ margin: '10px' }}>
            <NavLink
              to="/styles"
              style={({ isActive }) => ({
                color: isActive ? 'salmon' : 'white',
              })}
            >
              Styles
            </NavLink>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/styles" element={<Styles />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/compliance" element={<Compliance />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
