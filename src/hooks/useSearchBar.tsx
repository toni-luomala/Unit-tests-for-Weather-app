import { useState } from 'react';

const useSearchBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [hideResultsTimeout, setHideResultsTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const handleBlur = () => {
    // Delay hiding the results for 100ms
    setHideResultsTimeout(
      setTimeout(() => {
        setIsActive(false);
      }, 100)
    );
  };

  const handleFocus = () => {
    // Clear the timeout when the input is focused again
    if (hideResultsTimeout) {
      clearTimeout(hideResultsTimeout);
      setHideResultsTimeout(null);
    }

    setIsActive(true);
  };

  return {
    isActive,
    setIsActive,
    hideResultsTimeout,
    setHideResultsTimeout,
    handleBlur,
    handleFocus,
  };
};

export default useSearchBar;
