import React, { Component } from 'react'

export default class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users:[]
             
        }
        this.add
    }
    componentDidMount()
    {
    
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

function User (){
    const [users , setusers] = useState([])
    useEffect(() => {
        getUsers()
    }, [])
    const getUsers = () => {
        UserService.getUsers().then((response) => {
        setusers(response.data)
        console.log(response.data)
        });
    };
    return (
        <div>

        </div>
    )
}

export default  User