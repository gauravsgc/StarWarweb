import React, { Component } from 'react'
import Nav from './Navig';
import axios from 'axios';
import PersonInfo from './personinfo';
import Filminfo from './filminfo';
//import UserData from './Userdata';
export class about extends Component {
    state = {
        persons: [],
        name1 : '',
        films: [],
        persons1: [],
        persondata:'',
      }

      async componentDidMount() {
        axios.get(`https://swapi.dev/api/people/`)//http get request res=>respone https://jsonplaceholder.typicode.com/users
          .then(res => {
          //console.log(res.data.results);
        
         this.setState({ persons:res.data.results });
         const {persons}=this.state;
         console.log(persons);//get all data of persons..
         
        //////////////////
         const name=localStorage.getItem("logindata");
         this.setState({name1:name});
        console.log(name +"you are login");//the name of person who is login..
         //////////////////getting the index of the person who is logged in......
         const getname = persons.map((persons) => persons.name===name).indexOf(true);
         console.log(getname);
         ///////////////////
         //Getting  all the films data...
         const doubled = persons.map((persons) => persons.films);
         console.log(doubled);
         //getting the index... 0... according to name... array data
         let first = doubled[getname];
          const data="Hair Color:\t"+persons[getname].hair_color+
          "\tEye Color:\t"+persons[getname].eye_color+"\tGender:\t"+persons[getname].gender
          +"\tSkinColor:\t"+persons[getname].skin_color;
          this.setState({ persondata:data});
         console.log(first);
         //const first1 = first.map((first) => first );
        //console.log("hello"+first1);
        // this.setState({films:first});
       const film=[];
/////////////////////////////////////////////////////////////////////////////////////////////////////////
       first.map(((value, index) => //to print all the index...
        axios.get(first[index])
        .then(res => {
        //console.log(persons1);
        this.setState({ persons1:res.data });
        const {persons1}=this.state;
         console.log(persons1);//get all data of persons..
        console.log(persons1['title']+persons1['episode_id']+persons1['director']+persons1['release_date']+persons1['producer']+persons1['opening_crawl']);
      film.push("episode:\t"+persons1['episode_id']+"\n"+persons1['release_date']+"\n"+persons1['title']+"\n"+persons1['opening_crawl']+"\n"+persons1['director']+"\n"+persons1['producer'])
      this.setState({films:film});

      })));
          }
         
          
          )
        
      } //printing only zero index data from that array
      //console.log(first[0])
//var second =first[0] ;//get index 0 film....
//console.log(second);
//Above API...
     
    render() {
      
       //const {persons}=this.state;
        return (
            <div>
                 <Nav />
                

              <h1>  welcome {this.state.name1}</h1>
            <PersonInfo persondata={this.state.persondata} />
             <Filminfo filmdata= {this.state.films}  />
              
       {/* {this.state.persons.map((persons) => persons.name===this.state.name1?<h1 key={persons.name}>{persons.name}{persons.mass}</h1>:'')}  */}
       <ul>
     {/*  { this.state.persons.map(persons => <li key={persons.name}>{persons.name}</li>)} */}
      </ul>
            </div>
        )
    }
}

export default about
