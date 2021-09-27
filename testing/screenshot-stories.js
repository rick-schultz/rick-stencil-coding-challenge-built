/* istanbul ignore file */
import { newE2EPage } from '@stencil/core/testing';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const screenshotStories = (stories) => Object
  .keys(stories)
  .filter((key) => key !== 'default')
  .forEach((key) => {
  it(`screenshot testing ${key}`, async () => {
    const page = await newE2EPage();
    await page.setContent(`<link href="http://localhost:3333/build/rick-challenge.css" rel="stylesheet" /><div class="st-test" style="display: inline-block; background-color: tomato;">${stories[key]()}</div>`);
    const rect = JSON.parse((await page.evaluate('JSON.stringify(document.querySelector(".st-test").getBoundingClientRect())')));
    const screenshot = await page.compareScreenshot({
      clip: rect,
      omitBackground: true,
    });
    expect(screenshot).toMatchScreenshot({
      allowableMismatchedRatio: 0.05,
    });
  });
});
