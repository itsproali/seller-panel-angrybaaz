import React from "react";
import lamp from "../../assets/lamp.jpg";
import styles from "../../styles/Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.banner_img}>
        <div className={styles.banner_overlay}></div>
        <img src={lamp} alt="lamp" />
      </div>

      <div className={styles.info_container}>
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
        <div className={styles.info_section}>
          <div className="d-flex align-items-center justify-content-between">
            <h3>Printing Types</h3>
            <button className={styles.add_printing_type}>
              Add More Printing Type
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
