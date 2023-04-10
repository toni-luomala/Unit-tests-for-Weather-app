const setBodyStyles = (darkMode: boolean) => {
  document.body.style.backgroundColor = darkMode ? '#383838' : 'white';
  document.body.style.color = darkMode ? 'white' : '#1a1a1a';
};

export { setBodyStyles };
