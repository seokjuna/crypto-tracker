import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";
import { useNavigate } from "react-router-dom";

const Nav = styled.div`
    position: fixed;
    background-color: ${(props) => props.theme.navColor};
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
`;

const Home = styled.svg`
    cursor: pointer;
    height: 50px;
    margin-right: 5px;
    width: 50px;
`;

const LightMode = styled.svg`
    cursor: pointer;
    height: 50px;
    margin-right: 5px;
    width: 50px;
`

const DarkMode = styled.svg`
    cursor: pointer;
    height: 50px;
    margin-right: 5px;
    width: 50px;
`;

function Navigation() {
    const isDark = useRecoilValue(isDarkAtom);
    const setDarkAtom = useSetRecoilState(isDarkAtom);
    const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
    const navigate = useNavigate();
    const onHomeClick = () => {
        navigate(`/`);
    } 

    return (
        <Nav>
            {isDark ? (
                <>
                    <Home
                        onClick={onHomeClick}
                        xmlns="http://www.w3.org/2000/svg" 
                        height="1em" 
                        viewBox="0 0 576 512"
                        style={{
                            fill: "#f5f6fa"
                        }}
                    >
                        <path 
                            d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                        />
                    </Home>
                    <LightMode
                        xmlns="http://www.w3.org/2000/svg" 
                        height="1em" 
                        viewBox="0 0 384 512"
                        onClick={toggleDarkAtom}
                        style={{
                            fill: "#f5f6fa"
                        }}
                    >
                        <path 
                            d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z"
                        />
                    </LightMode>
                </>
            ) : (
                <>
                    <Home
                        onClick={onHomeClick}
                        xmlns="http://www.w3.org/2000/svg" 
                        height="1em" 
                        viewBox="0 0 576 512"
                        style={{
                            fill: "rgba(0, 0, 0, 0.5)"
                        }}
                    >
                        <path 
                            d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                        />
                    </Home>
                    <DarkMode 
                        xmlns="http://www.w3.org/2000/svg" 
                        height="1em" 
                        viewBox="0 0 384 512"
                        onClick={toggleDarkAtom}
                        style={{
                            fill: "rgba(0, 0, 0, 0.5)"
                        }}
                    > 
                        
                        <path 
                            d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
                        />
                    </DarkMode>
                </>
            )}            
        </Nav>        
    );
}

export default Navigation;