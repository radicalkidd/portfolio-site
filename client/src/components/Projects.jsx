import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="project-container">
        <h1 className="project-title">Development Projects</h1>
        <div className="tabs">
        <h1>React Tabs</h1>
       <Tabs>
         <Tab label="Tab 1">
           <div>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xIAJciTxzjZZM-viJfHk_Ezlv0nn8fft3ORQ9UkoP2mPd5pm"/>
             <p>Tab 1 content</p>
           </div>
         </Tab>
         <Tab label="Tab 2">
           <div>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2E3SrDqYWF9J_TDWNzjZkwJOAGxkLJVZPvUly7SqUL9WqLqEw"/>
             <p>Tab 2 content</p>
           </div>
         </Tab>
        </Tabs>
         </div>
      </div>
    );
  }
}

export default Projects;