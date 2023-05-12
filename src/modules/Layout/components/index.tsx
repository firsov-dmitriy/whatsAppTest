import { memo } from 'react';
import { Header, THeaderProps } from './Header';
import { Footer, TFooterProps } from './Footer';
import { Main, TMainProps } from './Main';

export interface LayoutProps extends THeaderProps, TFooterProps, TMainProps {}

const _Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
export const Layout = memo(_Layout);
