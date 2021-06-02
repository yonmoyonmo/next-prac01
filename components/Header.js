import headerStyles from '../styles/Header.module.css'

const Header = () =>{
    return (
        <div className={headerStyles.title}>
            <h1>wonmo cyber next practice</h1>
            <span>cyber power</span> rules
            <p className={headerStyles.descrition}>어려서부터우리지븐가나넥썪rh</p>
        </div>
    )
}

export default Header