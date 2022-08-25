//intilization of express
const express = require( "express" );

const app = express();


//apllication use json format for data
app.use(express.json());

const port = 8080;

const toDoList = [ "complete node byte ", "play cricket" ];


//htttp://localhost:8080/todos
app.get( "/todos", ( req, res ) =>
{
    //call back function
    res.status( 200 ).send( toDoList );
    
} );

app.post( "/todos", ( req, res ) =>
{
    let newToDoList = req.body.item;
    toDoList.push( newToDoList );
    res.status( 201 ).send( {
        message:"Task Completed"
    })
} );

app.delete( "/todos", ( req, res ) =>
{
    const itemToDelete = req.body.item;

    toDoList.find( ( element, index ) =>
    {
        if ( element === itemToDelete )
        {
            toDoList.splice( index, 1 );
        }
        
    } );

    res.status( 202 ).send( {
        message: `deleted item ---- ${ req.body.item}`,
    } );

} );

//put , patch , update
app.all( "/todos", ( req, res ) =>
{
    res.status( 501 ).send();
})


app.all( "*", ( req, res ) =>
{
    res.status( 401 ).send( "bad request" );
})


app.listen( port, () =>
{
    console.log( `nodejs server start ${port}` );
})


