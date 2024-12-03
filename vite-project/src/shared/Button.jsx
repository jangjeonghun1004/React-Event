

const handleEvent = (name, which) => {
    console.log(name, which);
}

const handleEventInfo = (name, e) => { 
    console.log(name, e, e.shiftKey);
}

const Button = ({name}) => {
    return (
        <button
            onMouseEnter={() => handleEvent(name, "onMouseEnter")}
            onMouseLeave={(e) => handleEventInfo(name, e)}
            onContextMenu={() => handleEvent(name, "onContextMenu")} // 마우스 오른쪽 버튼 클릭 이벤트
        >{name}</button>
    )
}

export default Button