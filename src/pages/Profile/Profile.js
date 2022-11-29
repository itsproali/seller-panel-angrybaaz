import React from "react";
import lamp from "../../assets/lamp.jpg";
import styles from "../../styles/Profile.module.css";

const Profile = () => {
  const printingTypes = [
    {
      text: "Sublimation",
      title: "Sublimation Printing",
      img: "https://media.s-bol.com/RPMQon8jv23K/550x547.jpg",
    },
    {
      text: "DTG",
      title: "Direct to Garments Printing",
      img: "https://i.etsystatic.com/11277991/r/il/b28393/1969500577/il_fullxfull.1969500577_qvb0.jpg",
    },
    {
      text: "Plastisol",
      title: "Indirect Screen Printing",
      img: "https://png.pngitem.com/pimgs/s/377-3775707_plastisol-ink-t-shirt-hd-png-download.png",
    },
    {
      text: "Vinyl",
      title: "Heat Transfer Vinyl",
      img: "https://images.jdmagicbox.com/quickquotes/images_main/vinyl-t-shirt-printing-services-381904221-b449s.jpg",
    },
    {
      text: "Heat-press",
      title: "Heat Press Printing",
      img: "https://cdn.shopify.com/s/files/1/0070/7032/files/tshirt-business8-min_838a2996-f195-4c1d-a4d1-034bc0a9a095.jpg",
    },
  ];
  return (
    <div className={styles.profile}>
      <div className={styles.banner_img}>
        <div className={styles.banner_overlay}></div>
        <img src={lamp} alt="lamp" />
      </div>

      <div className={styles.info_container}>
        {/* Personal Information */}
        <div className={styles.info_section}>
          <h3>Personal Information</h3>
          <div className={styles.input_container}>
            <div className={styles.input_field}>
              <span>Your Name:</span>
              <input
                type="text"
                name="name"
                id="name"
                defaultValue="Mohammad Ali"
                disabled
              />
            </div>
            <div className={styles.input_field}>
              <span>Your Email:</span>
              <input
                type="email"
                name="email"
                id="email"
                defaultValue="itsproali@gmail.com"
                disabled
              />
            </div>
            <div className={styles.input_field}>
              <span>Phone no:</span>
              <input
                type="text"
                name="phone"
                id="phone"
                defaultValue="+8801884622861"
              />
            </div>
          </div>
        </div>

        {/* Store Information */}
        <div className={styles.info_section}>
          <h3>Store Information</h3>
          <div className={styles.input_container}>
            <div className={styles.input_field}>
              <span>Shop Name:</span>
              <input
                type="text"
                name="text"
                id="text"
                defaultValue="Outflank Printers"
              />
            </div>
            <div className={styles.input_field}>
              <span>Gst Number:</span>
              <input type="number" name="gst" id="gst" defaultValue={12397} />
            </div>
            <div className={styles.input_field}>
              <span>Location:</span>
              <input
                type="text"
                name="location"
                id="location"
                defaultValue="Abc appt, gomti nagar, lucknow"
              />
            </div>
          </div>
        </div>

        {/* Printing Types */}
        <div className={styles.info_section}>
          <div className="d-flex align-items-center justify-content-between">
            <h3>Printing Types</h3>
            <button className={styles.add_printing_type}>
              Add More Printing Type
            </button>
          </div>

          <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-2 mt-4">
            {printingTypes.map((item, i) => (
              <div key={i} title={item.title} className={styles.printing_item}>
                <div className="">
                  <img src={item.img} alt={item.text} className={`img-fluid`} />
                  <p>{item.text}</p>
                </div>
                <div className={styles.divider}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
