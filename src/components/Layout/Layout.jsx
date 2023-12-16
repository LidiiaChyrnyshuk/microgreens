import { AppBar } from 'components/AppBar/AppBar';
import { Footer } from 'components/Footer/Footer';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer } from './Layout.styled';

const Layout = () => {
  return (
    <MainContainer>
      <div>
        <AppBar />
      </div>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <div>
        <Footer />
      </div>
    </MainContainer>
  );
};
export default Layout;
