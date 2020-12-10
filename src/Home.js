import NavBar from './NavBar';

export default function Home(){
    return(
        <div>
            <NavBar/>
            <h1 className="d-flex justify-content-center">Welcome to the Holiday Gift Exchange</h1>
            <p className="d-flex justify-content-center">This is a React front-end application using a Django Python backend for authentication and CRUD operations.</p>
        </div>
    )
}