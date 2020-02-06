import React from 'react'

class FileUpload extends React.Component {

    render(){
        return (
            <div className="FileUpload">
                <form>
                    <input type="file"/>

                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}

export default FileUpload