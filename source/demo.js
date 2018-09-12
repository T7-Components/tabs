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
