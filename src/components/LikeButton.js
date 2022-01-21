import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import './LikeButton.css'
const LikeButton = () => {
    return (
        <div className='like__button'>
            <FormControlLabel
                control={<Checkbox icon = {<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                    name='checkedHeart' />}
                />
        </div>
    );
}
export default LikeButton;