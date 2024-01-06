/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import { useSelector } from 'react-redux';
import { getUserName } from '../user/userSlice';
import { useEffect } from 'react';

function Menu() {
  // Getting data from the loader in App.jsx
  const menu = useLoaderData();
  const username = useSelector(getUserName);
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!username) navigate('/');
    },
    [username, navigate],
  );

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// This is the loader function which gets menu
export async function loader() {
  const menu = await getMenu();
  // Ready to Provide to the page.
  return menu;
}

export default Menu;
