import Input from "../../components/Input";
import "./Colors.css";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Color</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value='' name='test1' />
          <span className="chacKmark all"></span>All
        </label>

        <Input 
          handleChange={handleChange}
          value="black"
          title='Black'
          name='test1'
          color={`black`}
        />
        <Input 
          handleChange={handleChange}
          value="blue"
          title='Blue'
          name='test1'
          color={`blue`}
        />
        <Input 
          handleChange={handleChange}
          value="red"
          title='Red'
          name='test1'
          color={`red`}
        />
        <Input 
          handleChange={handleChange}
          value="green"
          title='Green'
          name='test1'
          color={`green`}
        />

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value='white' name='test1' />
          <span className="chacKmark" style={{backgroundColor: "white", border: '2px solid'}}></span>white
        </label>
      </div>
    </div>
  );
}

export default Colors; 
