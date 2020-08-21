import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import './styles.css';

const Dropzone = () => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      {
        <p>Imagem do estabelicimento</p>
          
      }
    </div>
  )
}

export default Dropzone;
