import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';
import TelemetryProvider from './components/TelemetryProvider/TelemetryProvider';
import { INavLinkGroup, IStackProps, mergeStyles, Stack } from '@fluentui/react';
import { Header } from './components/Header';
import { SideNavigation } from './components/SideNavigation/SideNavigation';
import { Home } from './pages/Home';
import { Export } from './pages/Export';
import { getNavigationItems } from './services/NavigationService';

export const App: React.FunctionComponent = theme => {
  const [navigationItems, setNavigationItems] = React.useState<INavLinkGroup[]>([]);

  React.useEffect(() => {
    (async function () {
      setNavigationItems(await getNavigationItems());
    })();
  }, []);

  const Content = (props: IStackProps) => (
    <Stack horizontal tokens={{ childrenGap: 10 }} className={mergeStyles({ overflow: 'hidden' })} {...props} />
  );

  const Sidebar = (props: IStackProps) => (
    <Stack
      disableShrink
      tokens={{ childrenGap: 20 }}
      grow={20}
      className={mergeStyles({
        position: 'fixed',
        top: 50,
        left: 0,
        backgroundColor: '#ffffff'
      })}
      verticalFill={true}
      {...props}
    />
  );

  const Main = (props: IStackProps) => (
    <Stack
      grow={80}
      className={mergeStyles({ padding: '40px', paddingLeft: '15rem', paddingTop: '50px', backgroundColor: '#faf9f8' })}
      disableShrink
      {...props}
    />
  );

  const Page = (props: IStackProps) => (
    <Stack
      tokens={{ childrenGap: 10 }}
      className={mergeStyles({
        selectors: {
          ':global(body)': {
            padding: 0,
            margin: 0
          }
        }
      })}
      {...props}
    />
  );

  return (
    <RecoilRoot>
      <Page>
        <Header></Header>
        <Content>
          <HashRouter>
            <Sidebar>
              <SideNavigation items={navigationItems}></SideNavigation>
            </Sidebar>
            <Main>
              <TelemetryProvider instrumentationKey={process.env.REACT_APP_INSTRUMENTATION_KEY}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/export" component={Export} />
                </Switch>
              </TelemetryProvider>
            </Main>
          </HashRouter>
        </Content>
      </Page>
    </RecoilRoot>
  );
};
