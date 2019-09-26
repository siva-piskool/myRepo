import React, {Component} from 'react';
import Para from './Para';
class Section extends Component{
    render(){
        return(<div>
            <div>
               <a href="#id">click here for section4</a> 
            </div>
            <div>
            <section>
            <h1>Section-1</h1>
            <Para />
          </section>
          <hr/>
          <section>
            <h1>Section-2</h1>
            <Para />
          </section>
          <hr/>
          <section>
            <h1>Section-3</h1>
            <Para />
          </section>
          <hr/>
          <section>
            <h1 id="id">Section-4</h1>
            <Para />
          </section>
          <hr/>
            </div>
        </div>)
    }
}
export default Section;