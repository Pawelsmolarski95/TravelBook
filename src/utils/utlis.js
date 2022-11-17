import initialState from "../redux/initialState"

export const dateToStr = () => {
    const data = initialState.publishedDate;
    
    return (
        data.toString()
    )
    
}