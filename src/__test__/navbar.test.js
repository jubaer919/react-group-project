// import React from 'react';
// import { render } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import renderer from 'react-test-renderer';
// import Navbar from '../Components/UI/Navbar';

// describe('Navbar component', () => {
//   it('renders the Navbar component', () => {
//     const { getByText, getByAltText } = render(
//       <Router>
//         <Navbar />
//       </Router>,
//     );

//     // Rest of the test remains unchanged
//     // Check if the logo, heading, and nav links are rendered
//     const logo = getByAltText('website logo');
//     expect(logo).toBeInTheDocument();

//     const heading = getByText("Space Travelers' Hub");
//     expect(heading).toBeInTheDocument();

//     const rocketsLink = getByText('Rockets');
//     expect(rocketsLink).toBeInTheDocument();

//     const missionsLink = getByText('Missions');
//     expect(missionsLink).toBeInTheDocument();

//     const profileLink = getByText('My Profile');
//     expect(profileLink).toBeInTheDocument();

//     const tree = renderer.create(<Router><Navbar /></Router>).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });

import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Components/UI/Navbar';

test('render navlink', async () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  const navlink = screen.getAllByRole('link');
  expect(navlink.length).toBe(3);
});
