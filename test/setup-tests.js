import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { mount, shallow, render } from 'enzyme'

configure({ adapter: new Adapter() })

// Make Enzyme functions available in all test files without importing
global.shallow = shallow
global.render = render
global.mount = mount