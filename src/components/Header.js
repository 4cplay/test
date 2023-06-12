import "./Header.module.css"
const Header = (props) => {
    return (
        <div>
        <h2>{props.title}</h2>
        <p>{props.tutorial}</p>
        </div>
    );
}
export default Header