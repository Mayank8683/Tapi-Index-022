export const VideoComp = () => {
  return (
    <div>
      <div
        className="PMCvideoDiv"
        style={{
          width: "95%",
          display: "flex",
          height: "600px",
          marginLeft: "2rem",
        }}
      >
        <div className="PMCvideoDivLeft" style={{ marginTop: "5rem" }}>
          <iframe
            style={{ borderRadius: "1.5%" }}
            width="690"
            height="400"
            src="https://www.youtube.com/embed/iKUiRp7thJI?si=yJGQWEBzOaPDMngD&amp;start=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div
          className="PMCvideoDivRyt"
          style={{
            width: "40%",
            margin: "10% 0 0 10%",
            fontSize: "22px",
            color: "#07182c",
          }}
        >
          <h1>Land your dream Product Management job!</h1>
          <p style={{ color: "#3c4856" }}>
            Launch Your Product Management Career and secure your first Product
            Management job and excel in your role by acquiring essential skills
            with our Product Manager Certification (PMC)™.
          </p>
        </div>
      </div>
    </div>
  );
};
