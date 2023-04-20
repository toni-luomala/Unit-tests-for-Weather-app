import styled from '@emotion/styled';

const NavigationBar = styled.div({
  width: '100%',
  height: '80px',
  backgroundColor: '#545454',
  color: 'white',
});

const NavigationBarContent = styled.div({
  width: '95%',
  height: '100%',
  maxWidth: '600px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  margin: 'auto',
});

const SearchBarAndSettingsDiv = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'right',
});

export { NavigationBar, NavigationBarContent, SearchBarAndSettingsDiv };
