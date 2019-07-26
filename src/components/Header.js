import React from "react";
import '../css/Header.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';

/*Material*/
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
});

export default function Header() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
        >
        <List>
            {['Completed'].map((text, index) => (
                <Router>
                    <Link to="/completed">
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    </Link>
                </Router>
            ))}
        </List>
        </div>
    );
    return(
        <div className="headerContainer">
            <div className="headerMenuIcon">
            <IconButton
                style={{outline: "none"}}
                onClick={toggleDrawer('left', true)}>
                <MenuIcon style={{color:"white"}}/>
            </IconButton>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
            </div>
            <div className="headerTitle">
                Learn English
            </div>
            <div className="headerIcons"></div>
        </div>
    );
}