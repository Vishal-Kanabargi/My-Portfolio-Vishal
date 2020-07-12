import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    
    let ATSkillList = resumeData.ArchitectureAndTechnologies.map(function(skill){
      return <li>{skill}</li>;
    })

    let programmingLanguagesList = resumeData.programmingLanguages.map(function(language){
      return <li>{language}</li>;
    })

    let nodeModulesList = resumeData.nodeModules.map(function(nodeModule){
      return <li>{nodeModule}</li>;
    })

    let CloudTechnologyList = resumeData.cloudTechnologies.map(function(cloudTechnology){
      return <li>{cloudTechnology}</li>;
    })

    let APISecurityList = resumeData.APISecurities.map(function(APISecurity){
      return <li>{APISecurity}</li>;
    })

    let APIManagementToolsList = resumeData.APIManagementTools.map(function(APIManagementTool){
      return <li>{APIManagementTool}</li>;
    })

    let testingTechnologiesList = resumeData.testingTechnologies.map(function(testingTechnology){
      return <li>{testingTechnology}</li>;
    })

    let codeRepositoriesList = resumeData.codeRepositories.map(function(codeRepositorty){
      return <li>{codeRepositorty}</li>;
    })

    let databaseList = resumeData.database.map(function(database){
      return <li>{database}</li>;
    })

    let ManagementToolsList = resumeData.ManagementTools.map(function(ManagementTool){
      return <li>{ManagementTool}</li>;
    })


    return (
      <React.Fragment>
      {/* Resume Section ================================================== */}
          <section id="resume">

            {/* Skills ----------------------------------------------- */}
            <div className="row skill">
              <div className="three columns header-col">
                <h1><span>Responsibilities</span></h1>
              </div>
              <div className="nine columns main-col">
                <p>{resumeData.responsibilites1}
                <br/>{resumeData.responsibilites2}
                <br/>{resumeData.responsibilites3}
                <br/>{resumeData.responsibilites4}
                <br/>{resumeData.responsibilites5}
                <br/>{resumeData.responsibilites6}
                <br/>{resumeData.responsibilites7}
                <br/>{resumeData.responsibilites8}
                <br/>{resumeData.responsibilites9}

                </p>
                
                {/*
                <div className="bars">
                  <ul className="skills">
                    <li><span className="bar-expand css" /><em>CSS</em></li>
                    <li><span className="bar-expand html5" /><em>HTML5</em></li>
                  </ul> end skill-bars */}
              </div> {/* main-col end */}
            </div> {/* End skills */}

            <div className="row skill">
              <div className="three columns header-col">
                <h1><span>Architecture and  <br/>technologies</span></h1>
              </div>
              <div className="nine columns main-col">
              <div class="columnAT">
                  {ATSkillList}
                </div>

              </div>
            </div>
                
                <br/>
            
            <div className="row skill">
              <div className="three columns header-col">
                <h1><span>programming languages</span></h1>
              </div>
              <div className="nine columns main-col">
              <div class="columnAT">
                  {programmingLanguagesList}
              </div>
              </div>
            </div>

            <br />

            <div className="row skill">
              <div className="three columns header-col">
                <h1><span>Node Modules </span></h1>
              </div>
              <div className="nine columns main-col">
              <div class="columnAT">
                  {nodeModulesList}
              </div>
              </div>
            </div>

            <br />

            <div className="row skill">
              <div className="three columns header-col">
                <h1><span>Cloud Technologies</span></h1>
              </div>
              <div className="nine columns main-col">
              <div class="columnAT">
                  {CloudTechnologyList}
              </div>
              </div>
            </div>



            <br />

            <div className="row skill">
              <div className="three columns header-col">
                <h1><span>API Security</span></h1>
              </div>
              <div className="nine columns main-col">
              <div class="columnAT">
                  {APISecurityList}
              </div>
              </div>
            </div>


            <br />

            <div className="row skill">
              <div className="three columns header-col">
                <h1><span>API Management Tools</span></h1>
              </div>
              <div className="nine columns main-col">
              <div class="columnAT">
                  {APIManagementToolsList}
              </div>
              </div>
            </div>


            <br />

            <div className="row skill">
              <div className="three columns header-col">
                <h1><span>Testing Technologies</span></h1>
              </div>
              <div className="nine columns main-col">
              <div class="columnAT">
                  {testingTechnologiesList}
              </div>
              </div>
            </div>


            <br />

            <div className="row skill">
              <div className="three columns header-col">
                <h1><span>Code Repositories</span></h1>
              </div>
              <div className="nine columns main-col">
              <div class="columnAT">
                  {codeRepositoriesList}
              </div>
              </div>
            </div>


            <br />

            <div className="row skill">
              <div className="three columns header-col">
                <h1><span>Database</span></h1>
              </div>
              <div className="nine columns main-col">
              <div class="columnAT" >
                  {databaseList}
              </div>
              </div>
            </div>

            <br />
            
            <div className="row education">
              <div className="three columns header-col">
                <h1><span>Management Tools</span></h1>
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns" class="columnAT">
                      {ManagementToolsList}
                  </div>
                </div> {/* item end */}
  

              </div> {/* main-col end */}
            </div> {/* End Education */}
            <br />



            {/* Work ----------------------------------------------- 
            <div className="row work">
              <div className="three columns header-col">
                <h1><span>Work</span></h1>
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Awesome Design Studio</h3>
                    <p className="info">Senior UX Designer <span>•</span> <em className="date">March 2010 - Present</em></p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                      Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                    </p>
                  </div>
                </div> 
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Super Cool Studio</h3>
                    <p className="info">UX Designer <span>•</span> <em className="date">March 2007 - February 2010</em></p>
                    <p>
                      This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                      Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                      nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                      ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                    </p>
                  </div>
                </div> 
              </div> 
            </div>  */}
            
          {/* Education ----------------------------------------------- */}
            <div className="row education">
              <div className="three columns header-col">
                <h1><span>Education</span></h1>
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <h3>KLS Gogte Institute of Technology - [KLS GIT],Belgaum</h3>
                    <p className="info">Electrical and Electronics Engneering <span>•</span> <em className="date">April 2016</em></p>
                    <p>
                      Board : Visvesvaraya Technological University (VTU-Belgaum) <br />
                      Aggregate: 77.06 %
                    </p>
                  </div>
                </div> {/* item end */}
                <div className="row item">
                  <div className="twelve columns">
                    <h3> Govindram Seksaria Science College.Tilakwadi Belgaum</h3>
                    <p className="info">Science<span>•</span> <em className="date">March 2012</em></p>
                    <p>
                      Board : PUC State Board <br />
                      Aggregate: 69.06 %
                    </p>
                  </div>
                </div> {/* item end */}
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Gomatesh High School - Hindwadi Belgaum</h3>
                    <p className="info">SSLC<span>•</span> <em className="date">March 2010</em></p>
                    <p>
                      Board : SSLC Karnataka - State Board <br />
                      Aggregate: 83.03 %
                    </p>
                  </div>
                </div> {/* item end */}
              </div> {/* main-col end */}
            </div> {/* End Education */}
          
          
          </section> {/* Resume Section End*/}

      </React.Fragment>
    );
  }
}