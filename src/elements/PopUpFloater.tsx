import React from 'react'
import Floater from 'react-floater';

function CustomFloater({ closeFn }: any) {
    return (
        <div className='w-[280px] min-h-[50px] pt-1 pl-2 border-2 shadow-slate-400 rounded-md bg-gray-100'>
            <div>
                <input className="h-9 pl-3 rounded-md w-[260px] cursor-pointer" type="search" name="" id="" placeholder="Search" />
            </div>
        </div>
    );
}

function PopUpFloater() {
    return (
        <div>
            <Floater
                hideArrow={true}
                styles={{wrapper: {cursor: 'pointer'}}}
                component={CustomFloater}
            >
                <span>Search</span>
            </Floater>
        </div>
    )
}

export default PopUpFloater