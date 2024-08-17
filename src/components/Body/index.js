// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'
const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="Body">
          {showLeftNavbar && (
            <div className="Left-Nav">
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>
                  <p>Item 1</p>
                </li>
                <li>
                  <p>Item 2</p>
                </li>
                <li>
                  <p>Item 3</p>
                </li>
                <li>
                  <p>Item 4</p>
                </li>
              </ul>
            </div>
          )}

          {showContent && (
            <div className="Content">
              <h1>Content</h1>
              <p>
                Lorem ipsum dont know what im listening , but the song is very
                wonderful and amaizing . music is very wonderful it has the
                ability to heal evry heart.
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="Right-Nav">
              <h1>Right Navbar Menu</h1>
              <p>Ad 1</p>
              <p>Ad 2</p>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
