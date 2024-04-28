import './qrcode.css'

const QrCode = () => {
  const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
  let name = document.getElementById('name').value
  let src
  const handleClick = () =>{
    src = url + name;
  }
  return (
    <div className="qrcode">
      <form>
        <div className="qrcode__name">
            <label htmlFor="name">Enter text or URL</label>
            <input type="text" name="name" id="name"/>
        </div>
        <div className="qrcode__img">
            <img src={src} />
        </div>
        <button type="button" onClick={handleClick}>Generate QR Code</button>
      </form>
    </div>
  )
}

export default QrCode
