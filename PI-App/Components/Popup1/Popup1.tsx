import * as React from "react";
import "./Popup1.css";
const Popup1: React.FC = () => {
  const [images, setImage] = React.useState([
    { pic: "01" },
    { pic: "02" },
    { pic: "03" },
    { pic: "04" },
    { pic: "01" },
    { pic: "02" },
    { pic: "03" },
    { pic: "04" },
    { pic: "05" }
  ]);
  return (
    <div className="pi-works-container">
      {images.map((img, index) => {
        return (
          <div>
            <div>
              <a className="pi-works-button" href={`#popup${index}`}>
                    <img
                      src={require(`../../../public/images/pihome-img${img.pic}.jpg`)}
                    />
                  </a>
                </div>
            {index%2 === 0 ? (
              <div>
                <a className="pi-works-popclose" href="#model">
                  <div id={`popup${index}`} className="pi-works-overlay">
                    <div className="pi-works-popup">
                      <div className="pi-works-model3">
                        <div className="pi-works-content">
                          <h1>Content</h1>
                          <section className="piM20">
                            At Print Ideas, we are impulsively inclined towards
                            transforming your deliberations into designs. Yes,
                            you read it right. Any brand is undone without the
                            branding material ensembles and that is when we come
                            into the picture. We create one of a kind identities
                            for corporate, business and individual firms by
                            designing user interfaces, digital marketing, logos,
                            flyers, brochures, presentations and much more...
                          </section>
                          <a className="pi-works-button" href="https://www.w3schools.com/html/default.asp">
                            click
                          </a>
                        </div>
                        <div className="pic1">
                          <img
                            key={index}
                            src={require(`../../../public/images/pihome-img${img.pic}.jpg`)}
                          />
                        </div>
                        <div></div>
                      </div>
                      <div className="pi-works-indicators">
                        <span className="pi-works-dots"></span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ) : null}
            {index%2=== 1 ? (
              <div>
               <a className="pi-works-popclose" href="#model">
                  <div id={`popup${index}`} className="pi-works-overlay">
                    <div className="pi-works-popup">
                      <div className="pi-works-model2">
                        <div className="pic">
                          <img
                            key={index}
                            src={require(`../../../public/images/pihome-img${img.pic}.jpg`)}
                          />
                        </div>
                        <div className="pi-works-content">
                          <h1>Content</h1>
                          <section className="piM20">
                            At Print Ideas, we are impulsively inclined towards
                            transforming your deliberations into designs. Yes,
                            you read it right. Any brand is undone without the
                            branding material ensembles and that is when we come
                            into the picture. We create one of a kind identities
                            for corporate, business and individual firms by
                            designing user interfaces, digital marketing, logos,
                            flyers, brochures, presentations and much more...
                          </section>
                          <a href="https://www.w3schools.com/html/default.asp">
                        click
                          </a>
                        </div>
                      </div>
                      <div className="pi-works-indicators">
                        <span className="pi-works-dots"></span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
export default Popup1;
