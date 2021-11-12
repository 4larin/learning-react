import styled from "styled-components";
import Loader from 'react-loader-spinner'


const StyledPageLoader = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	svg {
		height: 40px !important;
		width: 40px !important;

`

const PageLoader = () => {
    return (
        <StyledPageLoader>
            <Loader type="TailSpin" width="40" height="40" />
        </StyledPageLoader>
    )
}


const ContentLoader = () => {
    return (
        <>
            <h1>Loadig content </h1>
        </>
    )
}



export { PageLoader, ContentLoader }


