import React from 'react'
import {Icon} from 'react-icons-kit'
import {ic_note_add} from 'react-icons-kit/md/ic_note_add'

import FileUpload from './components/FileUpload'

const ProjectManagement = props => (
    <div className="ProjectManagement">
        <div>
            <button><Icon icon={ic_note_add} /></button>
            <nav>
                <ul>
                    {
                        [1,2,3,4,5].map( value =>(
                        <li key="value">{`arquivo${value}.jpg`}</li>
                        ))
                    }
                </ul>
            </nav>            
            <FileUpload />
        </div>

        <div>
            <img src="/images/planta_baixa.jpg" />
        </div>
    </div>
)

export default ProjectManagement