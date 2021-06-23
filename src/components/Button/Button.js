import Button from '@material-ui/core/Button';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    fadeInUp: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    }
}

const Btn = props => {
    
    const buttonHandler = (data) => {
        window.location.assign('http://google.com');
    }

    return (
        <StyleRoot>
            <div className="test" style={styles.fadeInUp}>
                <Button onClick={() => buttonHandler(props.reservationData)} variant="contained" color="primary">Зарезервувати</Button>
            </div>
        </StyleRoot>
    );
}

export default Btn;