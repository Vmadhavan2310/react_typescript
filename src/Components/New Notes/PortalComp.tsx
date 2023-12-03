import React, { CSSProperties } from 'react';
import ReactDOM  from 'react-dom';
interface styleObj{
    styles:React.CSSProperties
}
function PortalComp() {

   return ReactDOM.createPortal(
        <>
            <div className='modal-popup'>
                <div>
                <div>PortalComp</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto incidunt possimus neque beatae excepturi iusto nisi voluptatum reiciendis molestiae a quaerat culpa, corrupti magnam qui, ipsa iure modi assumenda.
                </div>
            </div>
        
        </>
    ,document.getElementById('portal-root') as HTMLElement)
    
}

export default PortalComp