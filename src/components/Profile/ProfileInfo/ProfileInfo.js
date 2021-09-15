import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={classes.img}>
            </div>
            <div className={classes.about}>
                <div className={classes.avatar}>
                    <img
                        src="https://1.bp.blogspot.com/-jXbkzQukQUo/Xqx446k5tZI/AAAAAAAAIwA/bDpKu2XC_eAog9Z375h4wARcvtWvdYa-gCLcBGAsYHQ/s320/18.jpg" alt="Avatar"/>
                </div>
                <div className={classes.user}>
                    <div className={classes.name}>
                        John F. Kennedy
                    </div>
                    <div className={classes.info}>
                        <p>Date of birth: 17 May</p>
                        <p>City: Brookline</p>
                        <p>Education: London School of Economics</p>
                        <p>Web site: <a href="https://en.wikipedia.org/wiki/John_F._Kennedy">wikipedia.org</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;