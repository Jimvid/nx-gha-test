import styled from 'styled-components';
// import { registerSW } from 'virtual:pwa-register';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div`
  color: pink;
`;

// add this to prompt for a refresh
// const updateSW = registerSW({
//   onNeedRefresh() {
//     if (window.confirm('New content available. Reload?')) {
//       updateSW(true);
//     }
//   },
// });

export function Home(props: HomeProps) {
  return (
    <StyledHome>
      <h1>Welcome to Home!</h1>
      {/* <button
        onClick={() => {
          updateSW();
        }}
      >
        Update Service Worker
      </button> */}
      New content here
    </StyledHome>
  );
}

export default Home;
