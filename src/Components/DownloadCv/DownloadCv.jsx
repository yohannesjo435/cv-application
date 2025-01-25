
function DownloadCv({handleDownload}) {
  return (
    <div className="download-btn-wrapper" onClick={handleDownload}>
      <img src="src\assets\download.png" alt="Download Cv, resume" />
    </div>
  )
}


export default DownloadCv;