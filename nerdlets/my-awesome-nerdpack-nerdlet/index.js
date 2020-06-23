import React from 'react';

import './styles.scss';

export default class MyAwesomeNerdpackNerdletNerdlet extends React.Component {

    constructor() {
        super();
        this.state = {
            contador: 0,
            estado: "#5da662",
            value: ''
        }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    metodoGet() {
        if (this.state.value !== '') {
            var nrql = 'SELECT%20uniqueCount(session)%20FROM%20PageView%20SINCE%201%20day%20AGO';
            var url = `https://insights-api.newrelic.com/v1/accounts/2771470/query?nrql=${nrql}`;
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Query-Key': 'NRIQ-pcEXAVttcDUc6b2QMnicXY0TzYg4a1T9'
                }
            }).then(res => {
                res.json()
            }).catch(error => {
                console.error('error', error)
            }).then(response => {
                console.log('response', response)
                // this.setState({value:response.results.textCustom})
            });
        }
    }


    metodoPost() {
        var url = 'https://insights-collector.newrelic.com/v1/accounts/2771470/events/';
        var data = {
            "eventType": "textCustom",
            "texto": this.state.value
        };
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Content-Encoding': 'application/gzip',
                'X-Insert-Key': 'NRII-NobwI4PstKZ6lJ16lfOV2SpKZI8k5ZBj',
            }
        }).then(res => {
            res.json()
        }).catch(error => console.error('Error:', error))
            .then(response => {
                this.metodoGet();
            });
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
            this.metodoPost();
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
                        <input placeholder='Message to Update' value={this.state.value} onChange={this.handleChange} style={txtfield} ></input>
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