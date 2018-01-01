
 var NotesList = React.createClass({
   propTypes: {
    title: React.PropTypes.string.isRequired,
   },
   getDefaultProps : function () {
    return {
      title : 'Hello World'
    };
   },
   getInitialState: function() {
    return {liked: false};
   },
   handleClick: function(event) {
    this.refs.myTextInput.focus();
    console.log( ReactDOM.findDOMNode(this.refs.myTextInput));
    this.setState({liked: !this.state.liked});
   },
   render: function() {
      var backAndTextColor = {  
         backgroundColor:'red',  
         color:'white',  
         fontSize:40  
      }; 
      return (
         <div style={backAndTextColor}>
            <div>
               <input type="text" ref="myTextInput" />
               <input type="button" value="Focus the text input" onClick={this.handleClick} />
            </div>
            <div>
               <ol>
                  {this.props.title}
                  {
                     React.Children.map(this.props.children, function (child) {
                        return <li>{child}</li>;
                     })
                  }
               </ol>
            </div>
         </div>       
      );
   }
});

 ReactDOM.render(
   <NotesList>
     <span>hello</span>
     <span>world</span>
   </NotesList>,
   document.getElementById('example')
 );

