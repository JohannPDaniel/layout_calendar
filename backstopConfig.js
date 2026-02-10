'use strict';

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  selectors: ['body'],
  removeSelectors: ['h1'],
  misMatchThreshold: 0.5,
  referenceUrl: basicScenario.referenceUrl,
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}',
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  viewports: [
    {
      name: 'tablet_h',
      width: 1024,
      height: 768,
    },
  ],
  scenarios: [
    {
      ...basic,
      label: 'Calendar initial state',
      url: 'https://johannpdaniel.github.io/layout_calendar/',
    },
    {
      ...basic,
      label: 'Calendar day with hover effect',
      url: 'https://johannpdaniel.github.io/layout_calendar/',
      hoverSelector: '.calendar__day:nth-child(5)',
      postDOMChangeWait: 1000,
    },
    {
      ...basic,
      label: 'Calendar starting from Wednesday',
      url: 'https://johannpdaniel.github.io/layout_calendar/',
      selectors: ['.calendar'],
      postDOMChangeWait: 1000,
    },
    {
      ...basic,
      label: 'Calendar with length of 29 days',
      url: 'https://johannpdaniel.github.io/layout_calendar/',
      selectors: ['.calendar'],
      postDOMChangeWait: 1000,
    },
  ],
};

module.exports = config;
