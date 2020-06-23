import React from 'react';

import './styles.scss';

export default class MyAwesomeNerdpackNerdletNerdlet extends React.Component {
    constructor() {
        super();
        this.state = {
            contador: 0,
            estado: "#5da662"
        }
    }

    ejecutar() {
        const { contador, estado } = this.state;
        if (contador !== 2) {
            this.setState({ contador: contador + 1 });
        } else if (contador === 2) {
            switch (estado) {
                case '#5da662':
                    this.setState({ estado: '#f2bf4b' });
                    break;
                case '#f2bf4b':
                    this.setState({ estado: '#ec4431' });
                    break;
                case '#ec4431':
                    this.setState({ estado: '#5da662' });
                    break;
                default:
                    this.setState({ estado: '#5da662' });
                    break;
            }
            this.setState({ contador: 0 });
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.ejecutar()
        }, 1000);
    }

    render() {
        return (
            <div style={{ paddingRight: '70%' }}>
                <div className='contenedor'>
                    <div className='parte-superior' style={{ background: this.state.estado }}>
                        <br />
                        <br />
                        <input placeholder='Message to Update' style={txtfield} ></input>
                    </div>
                </div >
            </div>

        );
    }
}

const txtfield = {
    height: '20px',
     width: '180px',
    fontSize: '15px',
    border: '2px solid rgb(199, 189, 189)',
    padding: '20px',
    fontStyle: 'italic',
    left: '5%',
    position: 'absolute',
    borderRadius: '9px'
}