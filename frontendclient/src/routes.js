import React from 'react';

import IndexPage from './pages/Index';
import TypePackagePage from './pages/TypePackage'
import NotFoundPage from './pages/NotFound'
import DetailPackage from './pages/DetailPackage'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import SigninPage from './pages/Signin'
import CartPage from './pages/UserCart'
import ProfilePage from './pages/UserProfile'
import FollowingPage from './pages/UserFollowing'
import CheckoutPage from './pages/UserCheckout'
import LoginPage from './pages/Login'
import SearchPage from './pages/Search'

import FaqsPage from './pages/Faqs'
import HelpPage from './pages/Help'
import RulePage from './pages/Rule'
import PrivacyPage from './pages/Privacy'

import AdminPage from './pages/Admin'
import CreateProductPage from './pages/CreateProduct'
import EditProductPage from './pages/EditProduct'
import UserPage from './pages/User'
import ProductPage from './pages/Product';
import DronePage from './pages/Drone';
import UserDetailPage from './pages/UserDetail';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <IndexPage/>
  }, 
  {
    path: '/typeProduct/:typeProduct/:page/:direction/:id',
    main: () => <TypePackagePage/>
  }, 
  {
    path: '/productItem/:id',
    main: () => <DetailPackage/>
  }, 
  {
    path: '/admin',
    exact: true,
    main: () => <AdminPage/>
  }, 
  {
    path: '/admin/product/:page/:direction/:id',
    main: () => <ProductPage/>
  }, 
  {
    path: '/admin/product/create-product',
    main: () => <CreateProductPage/>
  }, 
  {
    path: '/admin/product/edit-product/:id',
    main: () => <EditProductPage/>
  }, 
  {
    path: '/admin/user',
    main: () => <UserPage/>
  }, 
  {
    path: '/admin/userdetail/:id',
    main: () => <UserDetailPage/>
  }, 
  {
    path: '/admin/drone',
    main: () => <DronePage/>
  }, 
  {
    path: '/faqs',
    main: () => <FaqsPage />
  }, 
  {
    path: '/search/:search',
    main: () => <SearchPage />
  }, 
  {
    path: '/rule',
    main: () => <RulePage />
  }, 
  {
    path: '/privacy',
    main: () => <PrivacyPage />
  }, 
  {
    path: '/help',
    main: () => <HelpPage />
  }, 
  {
    path: '/about',
    main: () => <AboutPage/>
  }, 
  {
    path: '/contact',
    main: () => <ContactPage/>
  }, 
  {
    path: '/signin',
    main: () => <SigninPage/>
  }, 
  {
    path: '/user/cart',
    main: () => <CartPage/>
  }, 
  {
    path: '/user/checkout',
    main: () => <CheckoutPage/>
  },
  {
    path: '/user/profile',
    main: () => <ProfilePage/>
  },
  {
    path: '/user/follow/:id',
    main: () => <FollowingPage/>
  },
  {
    path: '/login',
    main: () => <LoginPage/>
  }, 
  {
    path: '**',
    main: () => <NotFoundPage/>
  }
];

export default routes;