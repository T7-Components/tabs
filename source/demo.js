// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'

// UI components.
import Tabs from './'
import TabPanel from './template_tab'

// CSS.
import './demo.css'
import './index.css'

// Define class.
class Demo extends React.Component {
  // Render method.
  handleClick (e) {

  }
  render () {
    // Expose UI.
    return (
      <div className='App'>
        <h1>@t7/render</h1>

        <p>
          <a href='https://github.com/t7-components/tabs/blob/master/source/demo.js'>
            View "demo.js" on GitHub
          </a>
        </p>

        <hr />

        <h2>
          Tabs rendered using &#60;Tabs&#62; as a container and &#60;TabPanel&#62; for content
        </h2>

        <Tabs selected={0} handleClick={this.handleClick}>
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
  }
}

// Get root.
const root = document.getElementById('root')

// Render.
ReactDOM.render(<Demo />, root)
