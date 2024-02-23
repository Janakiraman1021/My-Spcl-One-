import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/Sophia-Martinez.pdf";

const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="Sophia-Martinez">
        <img
          src={DownloadIcon}
          alt="Resume download button"
          className="download-img"
        />
        Download Resume
      </a>
    </section>
  );
};

export default DownloadResume;
