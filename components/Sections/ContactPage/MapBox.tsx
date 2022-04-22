const MapBox = () => {
  return (
    <div className="mapBox">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height="200"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          ></iframe>
          <a href="https://www.whatismyip-address.com/divi-discount/"></a>
        </div>
      </div>
    </div>
  );
};

export default MapBox;
