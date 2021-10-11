import { createGlobalState } from 'react-hooks-global-state';

type ApplicationState = {
  currentNavigationItem: string | undefined;
};

const defaultState: ApplicationState = {
  currentNavigationItem: 'home'
};

export const { setGlobalState, useGlobalState } = createGlobalState(defaultState);

export const setCurrentNavigationItem = (currentNavigationItem: string | undefined) => {
  setGlobalState('currentNavigationItem', currentNavigationItem);
};
