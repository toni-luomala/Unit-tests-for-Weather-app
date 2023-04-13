const setBodyStyles = (darkTheme: boolean) => {
  document.body.style.backgroundColor = darkTheme ? '#383838' : 'white';
  document.body.style.color = darkTheme ? 'white' : '#1a1a1a';
};

export { setBodyStyles };
