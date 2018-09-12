// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'

// UI components.
import Tabs from './'
import TabPanel from './template_tab'

const handleClick = jest.fn()
const tabsEl = (
  <div className='PARENT'>
    <Tabs selected={0} handleClick={handleClick}>
      <TabPanel label='Tab 1'>
        <p>
          Tab content for "Tab 1"
        </p>
      </TabPanel>
      <TabPanel label='Tab 2'>
        <p>
          Tab content for "Tab 2"
        </p>
      </TabPanel>
      <TabPanel label='Tab 3'>
        <p>
          Tab content for "Tab 3"
        </p>
      </TabPanel>
    </Tabs>
  </div>
)

// Helper.
const renderWithProps = () => {
  // Root.
  const root =
    document.getElementById('root')

  // Render.
  ReactDOM.render(tabsEl, root)

  // Get parent.
  const parent =
    document.querySelector('.PARENT')

  // Expose object.
  return {
    tabsEl,
    parent
  }
}

// Describe `<Component/>` name.
describe('Tabs', () => {
  // ==============
  // Clear the DOM.
  // ==============

  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>'
  })

  // ===========================
  // Test for valid set of tabs.
  // ===========================

  it('creates a set of 3 tabs', () => {
    const { parent } =
      renderWithProps()

    const tabs = parent.querySelectorAll('ul[role="tablist"]')
    expect(tabs.length)
      .toBe(1)

    const tabList = tabs[0].querySelectorAll('li')

    expect(tabList.length)
      .toBe(3)
  })

  // ============================
  // Test for correct tab labels.
  // ============================

  it('creates tabs with text matching the model', () => {
    const { parent } =
      renderWithProps()

    const tabs = parent.querySelectorAll('ul[role="tablist"]')

    const tabList = tabs[0].querySelectorAll('li')

    tabsEl.props.children.props.children.forEach((tab, i) => {
      expect(tab.props.label)
        .toEqual(tabList[i].textContent)
    })
  })
})
