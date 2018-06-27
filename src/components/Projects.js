import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../App.css';



class Projects extends Component {
    render(){
        return(
  <div>
            
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="text-center text-uppercase text-secondary mb-0">Recent Projects</h2>
        <hr className="star-dark mb-5" />
        <div className="row" style={{justifyContent:'center'}}>
      
      <Card className="card">
      <CardMedia
      className="media"
      image ="http://www.best-forex-platforms.com/wp-content/uploads/2016/03/iphone6-3.jpg"       
      title="Contemplative Reptile"
      />
      <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
          Hot Trades
          </Typography>
          <Typography component="p">
          A robust <b>iOS Swift</b> app with Firebase Backend that allows an admin to post signals to trading students. Signals include currency chart images, Text Updates and push notifications. All users may mark, delete, and view the signals. Admins may delete and update signals.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href="https://github.com/kkudumu/HotTrades" rel="noopener noreferrer" target="_blank">
            Github
          </Button>
          <Button size="small" color="primary" href="https://www.youtube.com/watch?v=FFHp5B_lt0c" rel="noopener noreferrer" target="_blank">
            Live Demo
          </Button>
        </CardActions>
      </Card> 

      <Card className="card">
      <CardMedia
      className="media"
      image ="https://www.imore.com/sites/imore.com/files/styles/xlarge_wm_brw/public/field/image/2017/06/pokemon-go-search.jpg?itok=9Czdi02g"       
      title="Contemplative Reptile"
      />
      <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Pokemon Search
          </Typography>
          <Typography component="p">
          With this <b>React Native</b> app, users can look up what pokemon they want and the app will make calls to pokeapi.co.<br/><br/><br/><br/><br/>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href="https://github.com/kkudumu/Pokemonsearch_ReactNative" rel="noopener noreferrer" target="_blank">
          Github
          </Button>
          <Button size="small" color="primary" href="https://www.youtube.com/watch?v=a_WQE1cYE-w" rel="noopener noreferrer" target="_blank">
            Live Demo
          </Button>
        </CardActions>
      </Card>
      
      <Card className="card">
      <CardMedia
      className="media"
      image ="data:image/jpeg;base64,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"       
      title="Contemplative Reptile"
      />
      <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            To Do List
          </Typography>
          <Typography component="p">
            This <b>React Native</b> app allows a user to create a simple to do list where they may add and delete tasks<br/><br/><br/><br/><br/>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href="https://github.com/kkudumu/SimpleTodoApp_ReactNative" rel="noopener noreferrer" target="_blank">
            Github
          </Button>

        </CardActions>
      </Card>

      <Card className="card">
      <CardMedia
      className="media"
      image ="https://www.proxyclick.com/hubfs/assets/images/thumbnail-features.jpg?t=1528216406330"       
      title="Contemplative Reptile"
      />
      <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Employee List
          </Typography>
          <Typography component="p">
          This <b>React Native</b> app pulls employees from jsonplaceholder.co into a contact list that can be viewed by users.<br/><br/>
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{marginTop:63}} size="small" color="primary" href="https://github.com/kkudumu/EmployeeList_ReactNative" rel="noopener noreferrer" target="_blank">
            Github
          </Button>
        </CardActions>
      </Card>

      <Card className="card">
      <CardMedia
      className="media"
      image ="https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge_wm_blb/public/field/image/2016/07/Pokemap-lead-phone.jpg?itok=TzEzCNEP"       
      title="Contemplative Reptile"
      />
      <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Pokemon Map
          </Typography>
          <Typography component="p">
          A simple app built to learn <b>React Native and Meteor</b>. The user can log in and see pokemon that are randomly generated on a map.
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{marginTop:63}} size="small" color="primary" href="https://github.com/kkudumu/PokemonMap_ReactNative" rel="noopener noreferrer" target="_blank">
            <br/>Github
          </Button>
        </CardActions>
      </Card>

      <Card className="card">
      <CardMedia
      className="media"
      image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5_I8WksK_GcLsAI5BoFMlX0errZLQ-cwmGWABkfFRYdzy-ZhpQ"       
      title="Contemplative Reptile"
      />
      <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Countdown Boss
          </Typography>
          <Typography component="p">
          A simple <b>React.js</b> site that allows a user to enter a date and receive a countdown until that date. <br/><br/>
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{marginTop:63}} size="small" color="primary" href="https://github.com/kkudumu/CountdownBoss_React" rel="noopener noreferrer" target="_blank">
            Github
          </Button>
          <Button style={{marginTop:63}} size="small" color="primary" href="https://kkudumu.github.io/CountdownBoss_React/" rel="noopener noreferrer" target="_blank">
            Try It Here!
          </Button>
        </CardActions>
      </Card>

      <Card className="card">
      <CardMedia
      className="media"
      image ="http://www.iphonelife.com/sites/iphonelife.com/files/move-reminders-top.jpg"       
      title="Contemplative Reptile"
      />
      <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Reminder Boss
          </Typography>
          <Typography component="p">
          A simple <b>React.js</b> site that allows a user to create a to do list with date and time reminders. Entries are stored in cookies. <br/><br/>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href="https://github.com/kkudumu/reminderboss" rel="noopener noreferrer" target="_blank">
            Github
          </Button>
          <Button size="small" color="primary" href="https://kkudumu.github.io/reminderboss/" rel="noopener noreferrer" target="_blank">
            Try It Here!
          </Button>
        </CardActions>
      </Card>

      <Card className="card">
      <CardMedia
      className="media"
      image ="data:image/jpeg;base64,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"       
      title="Contemplative Reptile"
      />
      <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Personal Portfolio
          </Typography>
          <Typography component="p">
           The code for this very site! Using React.js, Material-ui and react-bootstrap
          </Typography>
        </CardContent>
        <CardActions>
          <Button style={{paddingTop:45}} size="small" color="primary" href="https://github.com/kkudumu/portfolio_react" rel="noopener noreferrer" target="_blank">
            Github
          </Button>

        </CardActions>
      </Card>

      </div>
      </div>
    </section> 
    </div>
        );
    }
}

export default Projects;