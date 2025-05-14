import React from "react";
import downloadImg from "../../assets/download.png"

function DownloadCv({handleDownload}) {
  return (
    <div className="download-btn-wrapper" onClick={handleDownload}>
      <img src={downloadImg} alt="Download Cv, resume" />
    </div>
  )
}


export default DownloadCv;