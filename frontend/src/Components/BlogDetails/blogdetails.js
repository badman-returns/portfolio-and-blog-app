import React from 'react';

class BlogDetails extends React.Component {
    state = {

        blog: []
    
      }
      async componentDidMount() {
        const url = await ('http://localhost:8081/api/5f12d8e5a091472cdc8e9406')
        const response = await fetch(url);
        const result = await response.json();
        this.setState({ blog: result.data.blog })
        console.log(result);
      }

      render() {
        //   console.log(result);
          return(
              <h1>Hello Blog BlogDetails</h1>
          )
      }
    }

export default BlogDetails;