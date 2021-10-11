import { INavLink, INavLinkGroup, INavStyles, Nav } from '@fluentui/react';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { setCurrentNavigationItem, useGlobalState } from './../../state/globalState';

export interface ISideNavigationProps {
  items: INavLinkGroup[];
}

export const SideNavigation: React.FunctionComponent<ISideNavigationProps> = props => {
  const { items } = props;
  const history = useHistory();
  const [currentNavigationItem] = useGlobalState('currentNavigationItem');

  const navStyles: Partial<INavStyles> = {
    groupContent: {
      animationDuration: '0'
    },
    root: {
      overflowY: 'auto',
      width: '220px'
    }
  };

  return (
    <Nav
      ariaLabel="Navigation"
      styles={navStyles}
      groups={items}
      selectedKey={currentNavigationItem}
      onLinkClick={(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => {
        history.push(item!.url);
        setCurrentNavigationItem(item?.key);
      }}
    />
  );
};

//export const SideNavigation = React.memo(SideNavigationComponent);
