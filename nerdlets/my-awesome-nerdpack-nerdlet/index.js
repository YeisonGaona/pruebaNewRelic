import React from 'react';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

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
                <div style={{
                    position: 'relative',
                    zIndex: '1',
                    width: '394px',
                    height: '83px',
                    margin: '50px auto',
                    border: '2px solid rgb(199,189,189)',
                    borderRadius: '21px',
                    boxShadow: '10px 10px 76px -34px rgba(0,0,0,0.75)'
                }}>
                    <div style={{
                        borderRadius: '90px 92px 0 0',
                        height: '20px',
                        width: '394px',
                        background: this.state.estado,
                        boxShadow: '10px 56px 76px -53px rgba(0,0,0,0.75)'
                    }}>
                        <br />
                        <br />
                        <input placeholder='Message to Update' style={{
                            height: '20px',width:'180px', fontSize: '15px', border: '2px solid rgb(199, 189, 189)', padding: '20px', fontStyle: 'italic',
                            left: '5%', position: 'absolute',
                            borderRadius: '9px'
                        }}></input>
                    </div>
                </div >
            </div>

        );
    }
}
