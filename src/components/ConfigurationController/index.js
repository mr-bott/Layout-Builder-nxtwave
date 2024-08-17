import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="Configuration">
          <h1 className="heading">Layout</h1>
          <form>
            <input 
              type="checkbox" 
              id="Content" 
              onChange={onToggleShowContent} 
              checked={showContent} 
            />
            <label htmlFor="Content">Content</label>
            <br />
            <input 
              type="checkbox" 
              id="Left" 
              onChange={onToggleShowLeftNavbar}
              checked={showLeftNavbar} 
            />
            <label htmlFor="Left">Left Navbar</label>
            <br />
            <input 
              type="checkbox" 
              id="Right" 
              onChange={onToggleShowRightNavbar}
              checked={showRightNavbar} 
            />
            <label htmlFor="Right">Right Navbar</label>
          </form>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
