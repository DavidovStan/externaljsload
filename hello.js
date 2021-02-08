class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }
  getData(){
      const script = document.createElement("script");
      script.src = 'https://raw.githubusercontent.com/DavidovStan/externaljsload/main/hello.js'
      script.async = true;
      document.body.appendChild(script);
  
      this.setState({
        data: script.src
      })
  }
  componentDidMount () {
      this.getData();
  }
  render () {
    return (
      <div>{this.state.data}</div>
    )
  }

  
}
