const Navbar = ({ onSetIsClicked }) => {
    const clicked = () => {
        onSetIsClicked(1);
    }
    return (
        <div className="Navbar">
            <ul>
                <li><a className="brand"><strong>LetsGrowMore</strong></a></li>
                <button onClick={clicked}className="button button1"><strong>Get Users</strong></button>
            </ul>
        </div>
    )
}
export default Navbar;