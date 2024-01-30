const clickVirtButton = (event) => {
    const { target: current } = event;
    if (current.tagName === 'BUTTON') {
      keyboard.clickButton(current.dataset.code, event.type);
    }
  };

  const changeState = (event) => {
    event.preventDefault();
    const key = keyContainer.querySelector(`[data-code="${event.code}"]`);
    if (key) {
      keyboard.changeState(event.code);
    }
  };