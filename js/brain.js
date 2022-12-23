function scrollgameleft(id){
    var slider=document.getElementById(id);
    if(slider.scrollLeft+slider.clientWidth >=slider.scrollWidth){
        slider.scrollLeft=0
    }else{
        slider.scrollLeft+=237
    }
}

function scrollgameright(id){
    var slider=document.getElementById(id);
    slider.scrollLeft-=237
}

function deletecomponent(id){
    var removeElement=document.getElementById(id)
    removeElement.remove();
}

function RenderSearch(){
    return(
        <>
            <div id='searchbar'>
                <div className="searchTitle">
                    <p>Search Games</p>
                    <i id='search' onClick={()=>deletecomponent('searchbar')} className='fa fa-close'></i>
                </div>
                <div className="searchbar">
                    <div id="realsearch">
                        <input placeholder='Search' type={'text'}></input>
                        <button>Search</button>
                    </div>
                    <hr></hr>
                    <div id="searchresults">

                </div>
            </div>

        </div>
        </>
    )
}
function thereact(id){
    var root=ReactDOM.createRoot(document.getElementById(id));
    root.render(<RenderSearch/>)
}
