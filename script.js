(() => {
  const room = document.getElementById('room');
  const lightSwitch = document.getElementById('lightSwitch');
  const lightStatus = document.getElementById('lightStatus');
  const gatedControls = Array.from(document.querySelectorAll('.light-gated'));

  if (!room || !lightSwitch) return;

  let lightIsOn = false;

  function updateGatedControls() {
    gatedControls.forEach((control) => {
      const disabled = !lightIsOn;
      control.setAttribute('aria-disabled', String(disabled));
      control.tabIndex = disabled ? -1 : 0;
      control.classList.toggle('is-disabled', disabled);
    });
  }

  function setLight(nextState) {
    lightIsOn = nextState;
    room.classList.toggle('is-lit', lightIsOn);
    document.body.classList.toggle('is-lit', lightIsOn);
    lightSwitch.setAttribute('aria-checked', String(lightIsOn));
    lightSwitch.setAttribute(
      'aria-label',
      lightIsOn ? 'Turn off the room light' : 'Turn on the room light'
    );

    updateGatedControls();

    if (lightStatus) {
      lightStatus.textContent = lightIsOn
        ? 'The studio is illuminated'
        : 'The studio is resting';
    }
  }

  lightSwitch.addEventListener('click', () => setLight(!lightIsOn));

  gatedControls.forEach((control) => {
    control.addEventListener('click', (event) => {
      if (!lightIsOn) {
        event.preventDefault();
        lightSwitch.focus();
      }
    });
  });

  window.addEventListener('pageshow', () => setLight(false));
})();
