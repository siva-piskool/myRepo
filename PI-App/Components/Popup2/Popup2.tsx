import * as React from "react";
import "./Popup2.css";
const Popup2: React.FC = () => {
  const [images, setImage] = React.useState([
    { pic: "01" ,type:"popmodel1"},
    { pic: "02",type:"popmodel2" },
    { pic: "03",type:"popmodel3" },
    { pic: "04",type:"popmodel1" },
    { pic: "01",type:"popmodel2" },
    { pic: "02",type:"popmodel3" },
    { pic: "03",type:"popmodel1" },
    { pic: "04",type:"popmodel2" },
    { pic: "05",type:"popmodel3" }
  ]);
  return (
    <div className="pi-works-container">
      {images.map((img, index) => (
        <div>
          <div key={index}>
            <a className="button" href={`#popup${index}`}>
              <img
                src={require(`../../../public/images/pihome-img${img.pic}.jpg`)}
                alt=""
              />
            </a>
          </div>
        <a className="close" href="#WorksGallery">
          <div id={`popup${index}`} className="overlay">
        <div className="pi-works-popup">
              <div className={`pi-works-popmodel pi-works-${img.type}`}>
                <div className="pi-works-item1">
                <section className="piM20">
                    At Print Ideas, we are impulsively inclined towards
                    transforming your deliberations into designs. Yes, you read
                    it right. Any brand is undone without the branding material
                    ensembles and that is when we come into the picture. We
                    create one of a kind identities for corporate, business and
                    individual firms by designing user interfaces, digital
                    marketing, logos, flyers, brochures, presentations and much
                    more...
                  </section>
                </div>
                <div className="pi-works-item2">
                  <img
                    src={require(`../../../public/images/pihome-img${img.pic}.jpg`)}
                    alt=""
                  />
                </div>
              </div>
            <div className="pi-works-indicators">
              <a  href={`#popup${index-1}`}><span className="pi-works-dots">-</span></a>
              <a  href={`#popup${index+1}`}><span className="pi-works-dots">+</span></a>
              </div>
            </div>
            </div>
            </a>
          </div>
      ))}
      <div></div>
    </div>
  );
};
export default Popup2;
